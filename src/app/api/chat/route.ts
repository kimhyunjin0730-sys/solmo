import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, type GenerativeModel } from '@google/generative-ai';
import OpenAI from 'openai';
import crypto from 'node:crypto';
import { getPrisma } from '@/lib/prisma';
import { buildSystemPrompt } from '@/lib/knowledge';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_HISTORY = 20;

export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type ChatProvider = 'gemini' | 'openai' | 'fallback';

type GenerateResult = {
  text: string;
  provider: ChatProvider;
};

/* ──────────── AI Provider Management ──────────── */

let geminiModel: GenerativeModel | null = null;
let openaiClient: OpenAI | null = null;

function getGemini(): GenerativeModel | null {
  if (geminiModel) return geminiModel;
  const key = process.env.GEMINI_API_KEY;
  if (!key?.trim()) return null;
  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const genAI = new GoogleGenerativeAI(key.trim());
  geminiModel = genAI.getGenerativeModel({ model });
  console.log(`[chat] Gemini loaded (model=${model})`);
  return geminiModel;
}

function getOpenAI(): OpenAI | null {
  if (openaiClient) return openaiClient;
  const key = process.env.OPENAI_API_KEY;
  if (!key?.trim()) return null;
  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  openaiClient = new OpenAI({
    apiKey: key.trim(),
    timeout: 30000,
    maxRetries: 1,
  });
  console.log(`[chat] OpenAI loaded (model=${model})`);
  return openaiClient;
}

/* ──────────── Generate reply with cascading fallback ──────────── */

async function generateReply(
  messages: ChatMessage[],
  systemPrompt: string
): Promise<GenerateResult> {
  const userHistory = messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role,
      content: String(m.content || '').slice(0, 2000),
    }));

  const lastUserMsg =
    [...userHistory].reverse().find((m) => m.role === 'user')?.content || '';

  // ── Try 1: Gemini ──
  const gemini = getGemini();
  if (gemini) {
    try {
      const geminiHistory = [];
      for (const msg of userHistory.slice(0, -1)) {
        geminiHistory.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }],
        });
      }

      const chat = gemini.startChat({
        history: geminiHistory,
        systemInstruction: {
          role: 'system',
          parts: [{ text: systemPrompt }],
        },
        generationConfig: { temperature: 0.6, maxOutputTokens: 600 },
      });

      const result = await chat.sendMessage(lastUserMsg);
      const text = result.response?.text()?.trim();
      if (text) {
        return { text, provider: 'gemini' };
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[chat] Gemini error:', msg);
    }
  }

  // ── Try 2: OpenAI ──
  const openai = getOpenAI();
  if (openai) {
    try {
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.5,
        max_tokens: 600,
        messages: [
          { role: 'system', content: systemPrompt },
          ...userHistory,
        ],
      });
      const text = completion.choices?.[0]?.message?.content?.trim();
      if (text) {
        return { text, provider: 'openai' };
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[chat] OpenAI error:', msg);
    }
  }

  return { text: localFallback(lastUserMsg), provider: 'fallback' };
}

function localFallback(msg: string): string {
  const t = (msg || '').toLowerCase();
  if (
    t.includes('뭔데') ||
    t.includes('뭐하는') ||
    t.includes('여긴') ||
    t.includes('회사') ||
    t.includes('누구')
  )
    return 'IT 보안 전문기업 솔모정보기술입니다! 네트워크부터 단말·서버·애플리케이션·OT 보안까지 다양한 솔루션을 구축해드려요. 궁금한 거 있으면 편하게 물어보세요.';
  if (t.includes('제품') || t.includes('솔루션') || t.includes('뭐 팔'))
    return '네트워크 보안(FortiNet·Genian·QRadar), 단말/서버 보안(DBSAFER·HIWARE), 애플리케이션 보안(xSecuritas·Acronis), OT 보안(TXOne) 등을 취급하고 있어요. /solutions/network-security 페이지를 참고해주세요!';
  if (t.includes('전화') || t.includes('연락'))
    return '대표 전화 02-402-8054 입니다. 평일 09:00–18:00 운영해요.';
  if (t.includes('주소') || t.includes('위치') || t.includes('어디'))
    return '서울 광진구 아차산로 309 남장빌딩 2층이에요. /support/location 에서 지도도 볼 수 있어요.';
  if (t.includes('견적') || t.includes('가격') || t.includes('얼마'))
    return '정확한 견적은 도입 규모에 따라 달라서, 02-402-8054 또는 /support/contact 에서 문의해주시면 전문 상담사가 안내해드릴게요!';
  if (t.match(/^(ㅎㅇ|하이|안녕|헬로|hi)/))
    return '안녕하세요! 솔모정보기술 챗봇이에요. 뭐든 편하게 물어보세요.';
  return '안녕하세요! 솔모정보기술 챗봇입니다. 보안 솔루션, 회사 정보, 견적 문의 등 편하게 질문해주세요. 자세한 상담은 02-402-8054 또는 /support/contact 로 문의하실 수 있어요.';
}

/* ──────────── DB save (best-effort) ──────────── */

async function safeDbSave(fn: () => Promise<unknown>, label: string) {
  try {
    await fn();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[chat][db:${label}]`, msg);
  }
}

/* ──────────── POST handler ──────────── */

type PostBody = {
  messages?: ChatMessage[];
  sessionId?: string;
};

export async function POST(req: Request) {
  let body: PostBody;
  try {
    body = (await req.json()) as PostBody;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const { messages = [], sessionId: incomingSessionId } = body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'messages_required' }, { status: 400 });
  }

  const lastUser = [...messages].reverse().find((m) => m.role === 'user');
  if (!lastUser?.content?.trim()) {
    return NextResponse.json(
      { error: 'user_message_required' },
      { status: 400 }
    );
  }
  if (lastUser.content.length > 2000) {
    return NextResponse.json({ error: 'message_too_long' }, { status: 413 });
  }

  const sessionId = incomingSessionId || crypto.randomUUID();
  const userAgent = req.headers.get('user-agent')?.slice(0, 255) || null;

  let prisma: ReturnType<typeof getPrisma> | null = null;
  try {
    prisma = getPrisma();
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error('[chat] prisma init:', msg);
  }

  if (prisma) {
    await safeDbSave(
      () =>
        prisma!.chatSession.upsert({
          where: { id: sessionId },
          update: {},
          create: { id: sessionId, userAgent },
        }),
      'session'
    );
    await safeDbSave(
      () =>
        prisma!.chatMessage.create({
          data: { sessionId, role: 'user', content: lastUser.content },
        }),
      'user_msg'
    );
  }

  let systemPrompt: string;
  try {
    systemPrompt = buildSystemPrompt();
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error('[chat] knowledge build failed:', msg);
    systemPrompt =
      '당신은 ㈜솔모정보기술 공식 AI 상담원입니다. 친절하고 자연스럽게 대화하세요. 모르는 건 02-402-8054 로 안내하세요.';
  }

  const { text: assistantText, provider } = await generateReply(
    messages,
    systemPrompt
  );

  if (prisma) {
    await safeDbSave(
      () =>
        prisma!.chatMessage.create({
          data: { sessionId, role: 'assistant', content: assistantText },
        }),
      'assistant_msg'
    );
  }

  return NextResponse.json({ reply: assistantText, sessionId, provider });
}

export async function GET() {
  const hasGemini = !!process.env.GEMINI_API_KEY?.trim();
  const hasOpenAI = !!process.env.OPENAI_API_KEY?.trim();
  const dbUrl =
    process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL || '';
  const hasDb = !!dbUrl;
  const hasSmtp = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

  let prismaStatus = 'not_attempted';
  try {
    getPrisma();
    prismaStatus = 'initialized';
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    prismaStatus = `failed: ${msg.slice(0, 120)}`;
  }

  return NextResponse.json({
    status: 'ok',
    aiProvider: hasGemini
      ? 'gemini (primary)'
      : hasOpenAI
        ? 'openai'
        : 'fallback only',
    env: {
      GEMINI_API_KEY: hasGemini
        ? `set (len=${process.env.GEMINI_API_KEY!.length})`
        : 'MISSING',
      GEMINI_MODEL: process.env.GEMINI_MODEL || 'gemini-2.0-flash (default)',
      OPENAI_API_KEY: hasOpenAI
        ? `set (len=${process.env.OPENAI_API_KEY!.length})`
        : 'MISSING',
      OPENAI_MODEL: process.env.OPENAI_MODEL || 'gpt-4o-mini (default)',
      DATABASE_URL: hasDb ? `set (${dbUrl.split(':')[0]}://)` : 'MISSING',
      PRISMA_STATUS: prismaStatus,
      SMTP_USER: process.env.SMTP_USER ? 'set' : 'MISSING',
      SMTP_PASS: hasSmtp ? 'set' : 'MISSING',
      RECEIVER_EMAIL:
        process.env.RECEIVER_EMAIL ||
        'kimhyunjin0730@gmail.com (default)',
    },
  });
}
