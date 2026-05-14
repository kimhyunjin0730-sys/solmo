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

  // 회사 소개
  if (
    t.includes('뭔데') ||
    t.includes('뭐하는') ||
    t.includes('여긴') ||
    t.includes('회사') ||
    t.includes('소개') ||
    t.includes('누구')
  )
    return '안녕하세요, ㈜솔모정보기술입니다. 2002년 설립, 22년 업력의 IT 보안 전문 기업이에요. 네트워크 · 단말/서버 · 애플리케이션 · OT 4개 분야에 걸쳐 26개 이상의 솔루션을 다루고, 47명 전문 인력 중 절반 이상이 특급·고급 엔지니어입니다. 궁금한 게 있으면 언제든 편하게 물어봐 주세요.';

  // 카테고리별 솔루션 — 키워드 라우팅
  if (t.includes('이메일') || t.includes('메일') || t.includes('피싱'))
    return '이메일 보안은 두 가지를 함께 다루고 있어요. ① Proofpoint 이메일 보안 — 글로벌 표준 위협 인텔리전스 기반 클라우드형. ② Cisco ESA — IronPort AsyncOS 플랫폼 위에서 인바운드/아웃바운드를 통합 제어. 자세한 내용은 /solutions/products/proofpoint, /solutions/products/cisco-esa 에서 보실 수 있어요.';

  if (t.includes('vdi') || t.includes('가상') || t.includes('데스크톱'))
    return '가상 데스크톱(VDI)은 틸론 VDI(가상데스크인프라)를 추천드려요. DDS·DAC·DDP·DMS 4개 모듈로 디렉터리 통합, 접근 통제, 데이터 보호, 실시간 모니터링까지 한 번에 커버합니다. /solutions/products/tilon-vdi';

  if (
    t.includes('워터마크') ||
    t.includes('화면 유출') ||
    t.includes('캡처') ||
    t.includes('xsecuritas')
  )
    return '화면/출력물/웹캠 워터마크는 솔모 자체 개발 xSecuritas 제품군이에요. Screen WM · Output WM · Webcam BL · Webcam WM · Secure PC 등 8개 라인업으로 Enterprise/Personal 모두 지원합니다. /solutions/products/xsecuritas';

  if (t.includes('백업') || t.includes('복구') || t.includes('랜섬'))
    return '백업과 복구는 Acronis Cyber Protect — 30+ 워크로드 보호와 빠른 복구가 강점입니다. 랜섬웨어 차단까지 같이 보시려면 AppCheck Pro도 함께 검토하시면 좋아요. /solutions/products/acronis';

  if (t.includes('출력') || t.includes('프린트') || t.includes('복합기'))
    return '출력 보안은 신도 보안복합기를 추천드려요. 인증 출력, 워터마크/복사 방지, 출력 이력 추적까지 한 장비에서 가능합니다. /solutions/products/sindoh-secure-print';

  if (t.includes('방화벽') || t.includes('utm') || t.includes('fortinet'))
    return '차세대 방화벽(NGFW)은 Fortinet UTM이 대표 제품이에요. 솔모는 Fortinet Expert Partner(2024.06 승급)로 차세대 방화벽 분야에서 가장 높은 등급의 기술 역량을 인증받았습니다. /solutions/products/fortinet';

  if (t.includes('nac') || t.includes('zero trust') || t.includes('제로 트러스트'))
    return 'NAC/제로 트러스트는 Genian ZTNA/NAC을 추천드려요. /solutions/products/genian-ztna 에서 자세히 보실 수 있습니다.';

  if (t.includes('ddos') || t.includes('디도스') || t.includes('radware'))
    return 'DDoS 방어·WAF·가용성 보호는 Radware가 대표예요. 솔모는 Radware 보안 총판입니다. /solutions/products/radware';

  if (t.includes('siem') || t.includes('qradar') || t.includes('soar') || t.includes('관제'))
    return '통합 보안 관제(SIEM/SOAR/EDR)는 IBM QRadar — 단일 콘솔에서 위협 탐지부터 자동화 대응까지. /solutions/products/qradar';

  if (t.includes('ot') || t.includes('산업') || t.includes('공장') || t.includes('txone'))
    return '산업 현장(OT) 보안은 TXOne OT Zero Trust를 추천드려요. /solutions/products/txone';

  // 일반 솔루션 / 제품 문의
  if (t.includes('제품') || t.includes('솔루션') || t.includes('뭐 팔'))
    return '4개 카테고리로 정리해드릴게요.\n① 네트워크 보안 — FortiNet · PIOLINK · Genian · QRadar · Radware · Network BlackBox\n② 단말/서버 보안 — DBSAFER · NETAND HIWARE · AppCheck · Trend Vision One · Kornic WIPS · NX Portrait\n③ 애플리케이션 보안 — xSecuritas (자체) · 보안복합기 · Proofpoint · Cisco ESA · 틸론 VDI · Acronis\n④ OT 보안 — TXOne · Hitachi Storage\n구체적 분야 알려주시면 더 자세히 추천해드릴게요.';

  // 인증 / 신뢰
  if (
    t.includes('인증') ||
    t.includes('iso') ||
    t.includes('자격') ||
    t.includes('특허')
  )
    return 'ISO 9001·14001·37301·45001 4종 통합 인증을 2025년 7월 동시 획득했고, 메인비즈·이노비즈·벤처기업 확인도 보유 중이에요. 보안 관련 특허 4건과 기업부설연구소도 운영 중입니다. /about/certifications 에서 자세히 보실 수 있어요.';

  // 연혁 / 고객사
  if (t.includes('연혁') || t.includes('역사') || t.includes('실적'))
    return '2002년 설립 이래 MG새마을금고·POSCO·한국수력원자력·국민건강보험·서울대 등 37개 이상 기관과 함께해왔어요. /about/history 에서 시기별 주요 실적·파트너십을 확인하실 수 있습니다.';

  if (t.includes('고객') || t.includes('레퍼런스') || t.includes('파트너'))
    return '금융(MG새마을금고·KB금융·한화생명), 제조(POSCO·LG에너지솔루션·KOREAN AIR), 공공(한국수력원자력·국민건강보험·BPA), 교육·의료(서울대·연세대의료원·국립암센터) 등 37개사 이상이 솔모를 신뢰하고 있어요. /clients';

  // 연락처 / 위치 / 견적
  if (t.includes('전화') || t.includes('연락'))
    return '대표 전화는 02-402-8054 — 평일 09:00~18:00 운영합니다. 이메일은 solmoit01@solmo.co.kr 로 보내주셔도 돼요.';
  if (t.includes('주소') || t.includes('위치') || t.includes('어디') || t.includes('찾아'))
    return '서울특별시 광진구 아차산로 309 남장빌딩 2층(우 05028)이에요. /support/location 에서 지도와 오시는 길을 보실 수 있어요.';
  if (t.includes('견적') || t.includes('가격') || t.includes('얼마') || t.includes('비용'))
    return '정확한 견적은 도입 규모·구성에 따라 달라져서 바로 안내드리기 어려워요. 02-402-8054 또는 /support/contact 에서 문의주시면 전문 상담사가 24시간 안에 회신드립니다.';

  // 보안링스 그룹 사이트
  if (t.includes('보안링스') || t.includes('ai 보안') || t.includes('그룹사'))
    return '보안링스는 솔모 그룹 사이트예요. 일반 홈페이지는 https://www.boanlinks.com/ , AI 보안링스는 https://bl-staging-web.apps.rtruesoft.kr/ 에서 보실 수 있습니다.';

  // 가벼운 인사
  if (t.match(/^(ㅎㅇ|하이|안녕|헬로|hi|hello|좋은)/))
    return '안녕하세요! 솔모봇이에요. 보안 솔루션·회사 정보·견적 문의 뭐든 편하게 말씀해 주세요.';
  if (t.match(/^(ㄱㅅ|감사|고마|ㄳ|땡큐|thanks|thx)/))
    return '도움이 됐다니 다행이에요! 추가로 궁금한 거 있으면 언제든 또 물어봐 주세요.';

  return '안녕하세요, 솔모봇입니다. 보안 솔루션 추천, 회사 소개, 인증, 견적 문의 등 다양한 주제로 도와드릴 수 있어요. 자세한 상담은 02-402-8054 또는 /support/contact 로 문의해 주세요.';
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
        process.env.RECEIVER_EMAIL || 'solmoit01@solmo.co.kr (default)',
    },
  });
}
