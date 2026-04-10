import { NextResponse } from "next/server";
import OpenAI from "openai";
import crypto from "node:crypto";
import { getPrisma } from "@/lib/prisma";
import { buildSystemPrompt } from "@/lib/knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const MAX_HISTORY = 20;

let openai = null;
function getOpenAI() {
  if (openai) return openai;
  const key = process.env.OPENAI_API_KEY;
  if (!key || !key.trim()) {
    console.warn("[chat] OPENAI_API_KEY not found in env");
    return null;
  }
  console.log(`[chat] OpenAI key loaded (length=${key.length}, model=${MODEL})`);
  openai = new OpenAI({
    apiKey: key.trim(),
    timeout: 30000, // 30s — chatgpt sometimes slow
    maxRetries: 1,
  });
  return openai;
}

function fallbackReply(userMessage) {
  const text = (userMessage || "").toLowerCase();
  
  // 회사/솔모 키워드 대응 (Intelligence Upgrade)
  if (text.includes("회사") || text.includes("어떤") || text.includes("솔모") || text.includes("누구")) {
    return "(주)솔모정보기술은 20년 이상의 업력을 가진 통합 IT 보안 파트너입니다. 네트워크 보안, 내부정보유출 방지, 백업 및 복구 등 기업의 귀중한 정보 자산을 보호하는 전문 솔루션을 제공하며, 47명의 전문 엔지니어가 신뢰받는 서비스를 제공하고 있습니다.";
  }
  
  // 제품/솔루션/소개 키워드 대응
  if (text.includes("제품") || text.includes("솔루션") || text.includes("서비스") || text.includes("기능")) {
    return "솔모정보기술의 핵심 솔루션은 다음과 같습니다:\n1. 네트워크 보안: Fortinet UTM, Genian NAC\n2. 내부정보유출: X-Securitas(스크린워터마크), DBSAFER\n3. 어플리케이션: ITStation, Gaaiho PDF\n4. 백업: Acronis Cyber Protect\n상세한 내용은 홈페이지의 SOLUTIONS 메뉴를 참고하시거나 02-402-8054로 문의해주세요.";
  }

  if (text.includes("전화") || text.includes("연락") || text.includes("phone"))
    return "대표 전화는 02-402-8054 입니다. 평일 09:00–18:00 운영됩니다.";
  if (text.includes("주소") || text.includes("위치") || text.includes("오시는"))
    return "본사는 서울특별시 광진구 아차산로 309 남장빌딩 2층에 위치해 있습니다. 자세한 안내는 /support/location 페이지를 참고해주세요.";
  if (text.includes("이메일") || text.includes("email"))
    return "이메일 문의는 solmoit01@solmo.co.kr 로 보내주시면 됩니다.";
  if (text.includes("백업") || text.includes("acronis"))
    return "Acronis Cyber Protect — 21개 이상의 플랫폼 지원, 랜섬웨어 사전 차단, 블록체인 기반 데이터 무결성 검증을 제공하는 통합 백업/재해복구 솔루션입니다.";
  if (text.includes("nac") || text.includes("genian"))
    return "Genian NAC — 강력한 인증과 단말 무결성 점검으로 내부 네트워크를 청정하게 유지하는 NAC 솔루션입니다. On-Premise/Cloud/VM 모두 지원합니다.";
  
  return "안녕하세요! 솔모정보기술 챗봇입니다. 회사 소개, 제품 정보, 위치 등에 대해 물어보시면 답변해 드릴 수 있습니다. 자세한 상담은 02-402-8054로 연락주세요.";
}

/** DB 저장은 best-effort — 실패해도 답변은 전달 */
async function safeDbSave(fn, label) {
  try {
    await fn();
  } catch (err) {
    console.error(`[chat][db:${label}] save failed:`, err?.message || err);
  }
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { messages = [], sessionId: incomingSessionId } = body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages_required" }, { status: 400 });
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser || !lastUser.content?.trim()) {
    return NextResponse.json({ error: "user_message_required" }, { status: 400 });
  }
  if (lastUser.content.length > 2000) {
    return NextResponse.json({ error: "message_too_long" }, { status: 413 });
  }

  const sessionId = incomingSessionId || crypto.randomUUID();
  const userAgent = req.headers.get("user-agent")?.slice(0, 255) || null;

  // ── 1) DB session/message save (best-effort) ──
  let prisma = null;
  try {
    prisma = getPrisma();
  } catch (err) {
    console.error("[chat] prisma init failed:", err?.message || err);
  }

  if (prisma) {
    await safeDbSave(
      () =>
        prisma.chatSession.upsert({
          where: { id: sessionId },
          update: {},
          create: { id: sessionId, userAgent },
        }),
      "session_upsert"
    );
    await safeDbSave(
      () =>
        prisma.chatMessage.create({
          data: { sessionId, role: "user", content: lastUser.content },
        }),
      "user_message"
    );
  }

  // ── 2) Generate reply (OpenAI with fallback) ──
  let assistantText;
  let aiError = null;
  let usedFallback = false;
  const client = getOpenAI();

  if (!client) {
    console.warn("[chat] No OpenAI client — using local fallback");
    assistantText = fallbackReply(lastUser.content);
    usedFallback = true;
    aiError = "openai_key_missing";
  } else {
    try {
      let systemPrompt;
      try {
        systemPrompt = buildSystemPrompt();
      } catch (e) {
        console.error("[chat] knowledge build failed:", e?.message);
        systemPrompt =
          "당신은 (주)솔모정보기술 공식 챗봇입니다. 친절하고 전문적으로 답변하세요. 모르는 내용은 02-402-8054 로 문의 안내합니다.";
      }

      const trimmedHistory = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .slice(-MAX_HISTORY)
        .map((m) => ({
          role: m.role,
          content: String(m.content || "").slice(0, 2000),
        }));

      const completion = await client.chat.completions.create({
        model: MODEL,
        temperature: 0.4,
        max_tokens: 600,
        messages: [
          { role: "system", content: systemPrompt },
          ...trimmedHistory,
        ],
      });

      assistantText =
        completion.choices?.[0]?.message?.content?.trim() ||
        "죄송합니다, 응답을 생성하지 못했습니다. 다시 시도해주세요.";
    } catch (err) {
      aiError = err?.message || String(err);
      console.error("[chat] OpenAI error:", aiError, err?.status || "", err?.code || "");
      assistantText = fallbackReply(lastUser.content);
      usedFallback = true;
    }
  }

  // ── 3) Save assistant message (best-effort) ──
  if (prisma) {
    await safeDbSave(
      () =>
        prisma.chatMessage.create({
          data: { sessionId, role: "assistant", content: assistantText },
        }),
      "assistant_message"
    );
  }

  return NextResponse.json({
    reply: assistantText,
    sessionId,
    fallback: usedFallback,
    ...(aiError ? { _debug: { aiError } } : {}),
  });
}

// Health check endpoint — GET /api/chat returns env status (no secrets)
export async function GET() {
  const hasKey = !!(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim());
  const dbUrl = process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL || "";
  const hasDb = !!dbUrl;
  const dbProtocol = dbUrl ? dbUrl.split(":")[0] : "missing";
  const hasSmtp = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

  // Try a quick prisma init to detect DB problems
  let prismaStatus = "not_attempted";
  try {
    getPrisma();
    prismaStatus = "initialized";
  } catch (err) {
    prismaStatus = `init_failed: ${err?.message?.slice(0, 120) || "unknown"}`;
  }

  return NextResponse.json({
    status: "ok",
    runtime: "nodejs",
    env: {
      OPENAI_API_KEY: hasKey ? `set (len=${process.env.OPENAI_API_KEY.length})` : "MISSING",
      OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-4o-mini (default)",
      DATABASE_URL: hasDb ? `set (protocol=${dbProtocol}://)` : "MISSING",
      PRISMA_STATUS: prismaStatus,
      SMTP_USER: process.env.SMTP_USER ? "set" : "MISSING",
      SMTP_PASS: hasSmtp ? "set" : "MISSING",
      RECEIVER_EMAIL: process.env.RECEIVER_EMAIL || "kimhyunjin0730@gmail.com (default)",
    },
  });
}
