'use client';

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type KeyboardEvent,
  type FormEvent,
} from 'react';
import { useMutation } from '@tanstack/react-query';

const STORAGE_KEY = 'solmo_chat_session';
const STORAGE_MSGS = 'solmo_chat_messages';

/**
 * 빠른 질문 — 소개 / 솔루션 / 문의 3 카테고리로 정리.
 * 답변은 라우터 fallback + AI 시스템 프롬프트에서 자연스러운 한국어로
 * 처리하도록 설계됨.
 */
type SuggestionGroup = {
  id: 'intro' | 'solution' | 'inquiry';
  label: string;
  hint: string;
  items: readonly string[];
};

const SUGGESTION_GROUPS: readonly SuggestionGroup[] = [
  {
    id: 'intro',
    label: '소개',
    hint: '회사 / 인증 / 조직',
    items: [
      '솔모정보기술은 어떤 회사인가요?',
      '보유한 인증과 자격이 궁금합니다.',
      '연혁과 주요 실적을 알려주세요.',
    ],
  },
  {
    id: 'solution',
    label: '솔루션',
    hint: '4개 분야 26+ 제품',
    items: [
      '이메일 보안 솔루션을 추천해 주세요.',
      'VDI(가상 데스크톱)는 어떤 제품이 있나요?',
      '화면 워터마크 솔루션이 궁금합니다.',
      '랜섬웨어·백업 솔루션을 알려주세요.',
    ],
  },
  {
    id: 'inquiry',
    label: '문의',
    hint: '견적 / 상담 / 연락',
    items: [
      '도입 견적을 받고 싶습니다.',
      '전문가 상담을 신청하고 싶습니다.',
      '회사 위치와 연락처를 알려주세요.',
    ],
  },
];

type Role = 'user' | 'assistant' | 'system';

type Message = {
  role: Role;
  content: string;
};

type ChatResponse = {
  reply: string;
  sessionId: string;
  provider: 'gemini' | 'openai' | 'fallback';
};

const WELCOME: Message = {
  role: 'assistant',
  content:
    '안녕하세요, 솔모정보기술의 AI 상담원 솔모봇입니다.\n네트워크 · 단말/서버 · 애플리케이션 · OT 4개 분야의 26개+ 보안 솔루션, 회사 정보, 도입 견적 등 무엇이든 편하게 문의해 주세요.',
};

/* ──────────── 브랜드 마크 (로봇 X, 채팅 말풍선 / S 레터마크) ──────────── */

/** FAB 버튼용 — 채팅 말풍선 SVG */
function ChatGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        fill="currentColor"
        opacity="0.95"
      />
      <circle cx="8" cy="11.5" r="1.2" fill="#001F5B" />
      <circle cx="12" cy="11.5" r="1.2" fill="#001F5B" />
      <circle cx="16" cy="11.5" r="1.2" fill="#001F5B" />
    </svg>
  );
}

/** 어시스턴트 메시지·헤더용 — 솔모 'S' 레터마크 배지 */
function SolmoMark({
  size = 36,
  variant = 'on-dark',
}: {
  size?: number;
  variant?: 'on-dark' | 'on-light';
}) {
  const onDark = variant === 'on-dark';
  return (
    <div
      className={
        onDark
          ? 'rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur-sm flex items-center justify-center'
          : 'rounded-2xl bg-gradient-to-br from-indigo-600 to-[#001F5B] ring-1 ring-white shadow-sm flex items-center justify-center'
      }
      style={{ width: size, height: size }}
    >
      <span
        className={
          onDark
            ? 'font-display font-extrabold text-white tracking-tighter'
            : 'font-display font-extrabold text-white tracking-tighter'
        }
        style={{ fontSize: Math.max(13, size * 0.5) }}
      >
        S
      </span>
    </div>
  );
}

/* ──────────── API ──────────── */

async function sendChatRequest(payload: {
  messages: Message[];
  sessionId: string | null;
}): Promise<ChatResponse> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = (await res.json().catch(() => ({}))) as
    | ChatResponse
    | { error?: string };
  if (!res.ok) {
    const err = (data as { error?: string })?.error || `HTTP ${res.status}`;
    throw new Error(err);
  }
  return data as ChatResponse;
}

/* ──────────── 메인 컴포넌트 ──────────── */

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<SuggestionGroup['id']>('intro');
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const mutation = useMutation({
    mutationFn: sendChatRequest,
    onSuccess: (data) => {
      if (data.sessionId && data.sessionId !== sessionId) {
        setSessionId(data.sessionId);
        try {
          localStorage.setItem(STORAGE_KEY, data.sessionId);
        } catch {
          /* noop */
        }
      }
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: data.reply || '...' },
      ]);
    },
    onError: (err: Error) => {
      console.error('[chat] send failed:', err);
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요. 급한 문의는 02-402-8054 로 연락 주시면 됩니다.',
        },
      ]);
    },
  });

  const loading = mutation.isPending;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const savedId = localStorage.getItem(STORAGE_KEY);
      const savedMsgs = localStorage.getItem(STORAGE_MSGS);
      if (savedId) setSessionId(savedId);
      if (savedMsgs) {
        const parsed = JSON.parse(savedMsgs) as Message[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_MSGS, JSON.stringify(messages.slice(-50)));
    } catch {
      /* noop */
    }
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open, loading]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (open && window.matchMedia('(max-width: 640px)').matches) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  const send = useCallback(
    (text?: string) => {
      const content = (text ?? input).trim();
      if (!content || loading) return;

      const userMsg: Message = { role: 'user', content };
      const next = [...messages, userMsg];
      setMessages(next);
      setInput('');

      mutation.mutate({
        messages: next.filter((m) => m.role !== 'system'),
        sessionId,
      });
    },
    [input, loading, messages, mutation, sessionId]
  );

  const reset = () => {
    setMessages([WELCOME]);
    setSessionId(null);
    setActiveTab('intro');
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(STORAGE_MSGS);
    } catch {
      /* noop */
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const activeGroup =
    SUGGESTION_GROUPS.find((g) => g.id === activeTab) ?? SUGGESTION_GROUPS[0];

  return (
    <>
      {/* 보안링스 AI 매칭 — 챗봇 위에 떠 있는 외부 링크 CTA */}
      {!open && (
        <a
          href="https://bl-staging-web.apps.rtruesoft.kr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="보안검진 및 매칭서비스 — AI 보안링스 바로가기"
          className="group fixed bottom-[88px] right-5 sm:bottom-[100px] sm:right-7 z-[60]"
        >
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-15 group-hover:opacity-30 blur-xl transition-opacity" />
          <span className="relative flex items-center gap-3 bg-gradient-to-br from-[#0B1B3F] to-[#001F5B] border border-white/10 text-white pl-5 pr-4 py-3 rounded-full shadow-xl shadow-indigo-900/30 hover:border-blue-400/40 hover:-translate-y-0.5 transition-all">
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[13px] sm:text-sm font-bold tracking-tight">
                보안검진 및 매칭서비스
              </span>
              <span className="font-medium text-[10px] sm:text-[11px] text-blue-300/80 tracking-tight mt-0.5">
                AI 보안링스 바로가기
              </span>
            </span>
            <span className="text-blue-400 text-base group-hover:translate-x-0.5 transition-transform shrink-0">
              ↗
            </span>
          </span>
        </a>
      )}

      {/* FAB 토글 버튼 — 챗봇 */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="챗봇 열기"
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] group"
        >
          <span className="absolute inset-0 rounded-full bg-blue-600 opacity-30 group-hover:opacity-50 blur-xl transition-opacity" />
          <span className="relative flex items-center gap-3 bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white pl-3 pr-5 py-3 rounded-full shadow-2xl shadow-indigo-900/30 hover:scale-105 transition-transform">
            <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white">
              <ChatGlyph size={22} />
            </span>
            <span className="font-display text-sm font-bold tracking-tight pr-1 hidden sm:block">
              상담하기
            </span>
          </span>
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
        </button>
      )}

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[59] bg-black/40 backdrop-blur-sm sm:hidden"
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-label="솔모정보기술 챗봇"
            className="fixed z-[60] bg-white shadow-2xl flex flex-col overflow-hidden inset-x-0 bottom-0 top-16 rounded-t-[2rem] sm:inset-auto sm:bottom-7 sm:right-7 sm:top-auto sm:w-[420px] sm:h-[680px] sm:max-h-[calc(100vh-4rem)] sm:rounded-[2rem] border border-slate-200 animate-chat-in"
          >
            {/* 헤더 — 그라데이션 + 메시 후광 */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-[#1E3A8A] to-[#001F5B] text-white px-5 py-4 flex items-center gap-3 shrink-0 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-fuchsia-400/15 blur-3xl pointer-events-none" />

              <div className="relative shrink-0">
                <SolmoMark size={44} variant="on-dark" />
              </div>
              <div className="relative min-w-0 flex-1">
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
                  Chatbot
                </div>
                <div className="font-display text-lg font-bold tracking-tight text-white mt-0.5 truncate">
                  무엇이든 물어보세요
                </div>
              </div>
              <button
                onClick={reset}
                title="대화 초기화"
                className="relative w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all"
                aria-label="대화 초기화"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8a5 5 0 1 1-1.6-3.7M13 3v3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="챗봇 닫기"
                className="relative w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* 메시지 영역 */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-gradient-to-b from-slate-50 to-white"
            >
              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} content={m.content} />
              ))}
              {loading && <TypingDots />}

              {/* 빠른 질문 — 환영 메시지 다음에만 표시 */}
              {messages.length <= 1 && !loading && (
                <div className="pt-3">
                  <div className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-3 px-1">
                    빠른 질문
                  </div>

                  {/* 카테고리 탭 */}
                  <div className="flex gap-1 mb-3 p-1 bg-slate-100 rounded-2xl">
                    {SUGGESTION_GROUPS.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => setActiveTab(g.id)}
                        className={`flex-1 font-display text-[13px] font-bold py-2.5 rounded-xl tracking-tight transition-all ${
                          activeTab === g.id
                            ? 'bg-white text-[#001F5B] shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>

                  {/* 활성 카테고리 힌트 */}
                  <p className="text-[11px] font-medium text-slate-400 px-1 mb-2.5">
                    {activeGroup.hint}
                  </p>

                  {/* 질문 리스트 */}
                  <div className="space-y-2">
                    {activeGroup.items.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="group w-full text-left text-[13.5px] font-medium text-slate-700 bg-white border border-slate-200 rounded-2xl px-4 py-3 leading-relaxed hover:border-[#001F5B]/40 hover:bg-blue-50/40 hover:text-[#001F5B] transition-all flex items-center justify-between gap-2"
                      >
                        <span className="break-keep tracking-tight">{s}</span>
                        <span className="text-blue-400 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 입력 영역 */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-100 p-3 sm:p-4 bg-white shrink-0"
              style={{
                paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
              }}
            >
              <div className="flex gap-2 items-end">
                <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl focus-within:border-[#001F5B]/40 focus-within:bg-white transition-all">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="무엇이든 편하게 물어보세요…"
                    rows={1}
                    maxLength={2000}
                    className="w-full bg-transparent resize-none px-4 py-3 text-[14px] font-medium text-slate-900 placeholder:text-slate-400 placeholder:font-normal outline-none max-h-28 leading-relaxed tracking-tight"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-indigo-900/20 transition-all"
                  aria-label="전송"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 9l14-7-5 16-3-7-6-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </button>
              </div>
              <p className="text-[11px] font-medium text-slate-400 text-center mt-2.5 tracking-tight">
                AI 응답은 부정확할 수 있습니다 · 정확한 상담은 <a href="tel:024028054" className="font-bold text-slate-600 hover:text-blue-600">02-402-8054</a>
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

function Bubble({ role, content }: { role: Role; content: string }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="shrink-0 mr-2 mt-0.5">
          <SolmoMark size={36} variant="on-light" />
        </div>
      )}
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-3 text-[14px] leading-[1.65] tracking-tight whitespace-pre-wrap break-keep ${
          isUser
            ? 'bg-gradient-to-br from-[#001F5B] to-[#0B1B3F] text-white rounded-br-md font-medium shadow-sm shadow-indigo-900/10'
            : 'bg-white border border-slate-200 text-slate-800 rounded-bl-md font-medium shadow-sm'
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
      <div className="shrink-0 mr-2 mt-0.5">
        <SolmoMark size={36} variant="on-light" />
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-5 py-4 flex gap-1.5 items-center shadow-sm">
        <span
          className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: '0ms' }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: '150ms' }}
        />
        <span
          className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </div>
  );
}
