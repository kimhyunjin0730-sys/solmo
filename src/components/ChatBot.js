'use client';
import { useState, useRef, useEffect, useCallback } from "react";

const STORAGE_KEY = "solmo_chat_session";
const STORAGE_MSGS = "solmo_chat_messages";

const SUGGESTIONS = [
  "솔모정보기술은 어떤 회사인가요?",
  "Genian NAC가 뭔가요?",
  "백업 솔루션 추천해주세요",
  "오시는 길이 어떻게 되나요?",
];

const WELCOME = {
  role: "assistant",
  content:
    "안녕하세요! 솔모정보기술 챗봇 솔모봇입니다 🤖\n보안 솔루션, 회사 정보, 견적 문의 등 무엇이든 물어보세요.",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Restore session from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedId = localStorage.getItem(STORAGE_KEY);
      const savedMsgs = localStorage.getItem(STORAGE_MSGS);
      if (savedId) setSessionId(savedId);
      if (savedMsgs) {
        const parsed = JSON.parse(savedMsgs);
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {}
  }, []);

  // Persist messages
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_MSGS, JSON.stringify(messages.slice(-50)));
    } catch {}
  }, [messages]);

  // Auto-scroll on new message
  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open, loading]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (open && window.matchMedia("(max-width: 640px)").matches) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  const send = useCallback(
    async (text) => {
      const content = (text ?? input).trim();
      if (!content || loading) return;

      const userMsg = { role: "user", content };
      const next = [...messages, userMsg];
      setMessages(next);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: next.filter((m) => m.role !== "system"),
            sessionId,
          }),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (data.sessionId && data.sessionId !== sessionId) {
          setSessionId(data.sessionId);
          try { localStorage.setItem(STORAGE_KEY, data.sessionId); } catch {}
        }

        setMessages((m) => [...m, { role: "assistant", content: data.reply || "..." }]);
      } catch (err) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              "죄송합니다, 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요. 급한 문의는 02-402-8054 로 연락해주세요.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, messages, sessionId]
  );

  const reset = () => {
    setMessages([WELCOME]);
    setSessionId(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_MSGS);
    } catch {}
  };

  return (
    <>
      {/* ───────── Floating launcher button ───────── */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="챗봇 열기"
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] group"
        >
          <span className="absolute inset-0 rounded-full bg-blue-600 opacity-30 group-hover:opacity-50 blur-xl transition-opacity"></span>
          <span className="relative flex items-center gap-3 bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white pl-5 pr-6 py-4 rounded-full shadow-2xl shadow-indigo-900/30 hover:scale-105 transition-transform">
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-lg">
              💬
            </span>
            <span className="text-sm font-black tracking-tight pr-1 hidden sm:block">
              상담하기
            </span>
          </span>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse"></span>
        </button>
      )}

      {/* ───────── Chat panel ───────── */}
      {open && (
        <>
          {/* Backdrop (mobile only) */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[59] bg-black/40 backdrop-blur-sm sm:hidden"
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            role="dialog"
            aria-label="솔모정보기술 챗봇"
            className="fixed z-[60] bg-white shadow-2xl flex flex-col overflow-hidden inset-x-0 bottom-0 top-16 rounded-t-[2rem] sm:inset-auto sm:bottom-7 sm:right-7 sm:top-auto sm:w-[400px] sm:h-[640px] sm:max-h-[calc(100vh-4rem)] sm:rounded-[2rem] border border-slate-200 animate-chat-in"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white px-5 py-4 flex items-center gap-3 shrink-0">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-xl shrink-0">
                🤖
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-base font-black tracking-tight truncate">
                  솔모봇 SolmoBot
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online · 24/7
                </div>
              </div>
              <button
                onClick={reset}
                title="대화 초기화"
                className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all"
                aria-label="대화 초기화"
              >
                ↻
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="챗봇 닫기"
                className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all text-lg"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-slate-50"
            >
              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} content={m.content} />
              ))}
              {loading && <TypingDots />}

              {/* Suggestions (only when conversation is fresh) */}
              {messages.length <= 1 && !loading && (
                <div className="pt-2">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">
                    빠른 질문
                  </div>
                  <div className="space-y-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="w-full text-left text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-2xl px-4 py-3 hover:border-blue-600 hover:text-blue-700 transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="border-t border-slate-100 p-3 sm:p-4 bg-white shrink-0"
              style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
            >
              <div className="flex gap-2 items-end">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl focus-within:border-blue-600 transition-colors">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send();
                      }
                    }}
                    placeholder="무엇이든 물어보세요..."
                    rows={1}
                    maxLength={2000}
                    className="w-full bg-transparent resize-none px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none max-h-28"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white font-black flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                  aria-label="전송"
                >
                  ➤
                </button>
              </div>
              <p className="text-[9px] font-bold text-slate-300 text-center mt-2 tracking-wide">
                AI 응답은 부정확할 수 있습니다 · 정확한 상담은 02-402-8054
              </p>
            </form>
          </div>

          <style jsx global>{`
            @keyframes chat-in {
              0% { opacity: 0; transform: translateY(20px) scale(0.96); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-chat-in { animation: chat-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; }
          `}</style>
        </>
      )}
    </>
  );
}

function Bubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white flex items-center justify-center text-xs shrink-0 mr-2 mt-0.5">
          🤖
        </div>
      )}
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap break-words ${
          isUser
            ? "bg-[#001F5B] text-white rounded-br-md font-medium"
            : "bg-white border border-slate-200 text-slate-800 rounded-bl-md font-medium"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white flex items-center justify-center text-xs shrink-0 mr-2 mt-0.5">
        🤖
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-5 py-4 flex gap-1.5 items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
      </div>
    </div>
  );
}
