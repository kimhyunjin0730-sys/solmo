import { NextResponse } from "next/server";
import OpenAI from "openai";
import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";
import { buildSystemPrompt } from "@/lib/knowledge";

export const runtime = "nodejs";

const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const MAX_HISTORY = 20; // 최근 N개 메시지만 컨텍스트로

let openai = null;
function getOpenAI() {
  if (openai) return openai;
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  openai = new OpenAI({ apiKey: key });
  return openai;
}

function fallbackReply(userMessage) {
  const text = (userMessage || "").toLowerCase();
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
  return "죄송합니다, 지금은 자동 응답 모드로 동작 중입니다. 자세한 상담은 02-402-8054 또는 solmoit01@solmo.co.kr 로 문의해주세요.";
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages = [], sessionId: incomingSessionId } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }

    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser || !lastUser.content?.trim()) {
      return NextResponse.json({ error: "user message required" }, { status: 400 });
    }
    if (lastUser.content.length > 2000) {
      return NextResponse.json({ error: "message too long" }, { status: 413 });
    }

    // Session 보장
    const sessionId = incomingSessionId || crypto.randomUUID();
    const userAgent = req.headers.get("user-agent")?.slice(0, 255) || null;

    await prisma.chatSession.upsert({
      where: { id: sessionId },
      update: {},
      create: { id: sessionId, userAgent },
    });

    // 사용자 메시지 저장
    await prisma.chatMessage.create({
      data: { sessionId, role: "user", content: lastUser.content },
    });

    // OpenAI 호출
    const client = getOpenAI();
    let assistantText;

    if (!client) {
      assistantText = fallbackReply(lastUser.content);
    } else {
      try {
        const trimmedHistory = messages
          .filter((m) => m.role === "user" || m.role === "assistant")
          .slice(-MAX_HISTORY)
          .map((m) => ({ role: m.role, content: String(m.content || "").slice(0, 2000) }));

        const completion = await client.chat.completions.create({
          model: MODEL,
          temperature: 0.4,
          max_tokens: 600,
          messages: [
            { role: "system", content: buildSystemPrompt() },
            ...trimmedHistory,
          ],
        });

        assistantText =
          completion.choices?.[0]?.message?.content?.trim() ||
          "죄송합니다, 응답을 생성하지 못했습니다. 다시 시도해주세요.";
      } catch (err) {
        console.error("[chat] OpenAI error:", err?.message || err);
        assistantText = fallbackReply(lastUser.content);
      }
    }

    // 어시스턴트 메시지 저장
    await prisma.chatMessage.create({
      data: { sessionId, role: "assistant", content: assistantText },
    });

    return NextResponse.json({ reply: assistantText, sessionId });
  } catch (err) {
    console.error("[chat] handler error:", err);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}
