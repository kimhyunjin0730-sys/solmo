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
    return '안녕하세요, ㈜솔모정보기술입니다. 2002년 설립 이래 22년 업력을 쌓아 온 IT 보안 전문 기업입니다. 네트워크 · 단말/서버 · 애플리케이션 · OT 4개 분야에 걸쳐 26개 이상의 보안 솔루션을 다루고 있으며, 47명의 전문 인력 중 절반 이상이 특급·고급 엔지니어로 구성되어 있습니다. 궁금한 점이 있으시면 언제든 편하게 문의해 주세요.';

  // 카테고리별 솔루션 — 키워드 라우팅
  if (t.includes('이메일') || t.includes('메일') || t.includes('피싱'))
    return '이메일 보안 영역은 두 가지 솔루션을 함께 다루고 있습니다.\n① Proofpoint 이메일 보안 — 글로벌 표준 위협 인텔리전스 기반의 클라우드형 솔루션.\n② Cisco ESA — IronPort AsyncOS 플랫폼 위에서 인바운드와 아웃바운드를 통합 제어합니다.\n자세한 내용은 /solutions/products/proofpoint 와 /solutions/products/cisco-esa 에서 보실 수 있습니다.';

  if (t.includes('vdi') || t.includes('가상') || t.includes('데스크톱'))
    return '가상 데스크톱(VDI)은 틸론 VDI(가상데스크인프라)를 추천드립니다. DDS · DAC · DDP · DMS 4개 모듈을 통해 디렉터리 통합, 접근 통제, 데이터 보호, 실시간 모니터링까지 한 번에 커버합니다. 자세한 내용은 /solutions/products/tilon-vdi 에서 확인하실 수 있습니다.';

  if (
    t.includes('워터마크') ||
    t.includes('화면 유출') ||
    t.includes('캡처') ||
    t.includes('xsecuritas')
  )
    return '화면 · 출력물 · 웹캠 워터마크는 솔모가 자체 개발한 xSecuritas 제품군으로 제공합니다. Screen WM · Output WM · Webcam BL · Webcam WM · Secure PC 등 총 8개 라인업으로 Enterprise/Personal 환경을 모두 지원합니다. 자세한 내용은 /solutions/products/xsecuritas 에서 보실 수 있습니다.';

  if (t.includes('랜섬') || t.includes('appcheck') || t.includes('앱체크') || t.includes('체크멀'))
    return '랜섬웨어 대응은 AppCheck Pro(체크멀)를 추천드립니다. 사전 방어 · 탐지 · 차단 · 자동 복구를 한 번에 처리하고, 랜섬가드 기능이 손상 파일을 드라이버 수준에서 실시간으로 백업합니다. 기존 백신과 충돌 없이 함께 설치하여 운용할 수 있습니다. 자세한 내용은 /solutions/products/appcheck 에서 확인하실 수 있습니다.';

  if (t.includes('백업') || t.includes('복구'))
    return '백업과 복구는 Acronis Cyber Protect를 추천드립니다. 30개 이상의 워크로드 보호와 빠른 복구 성능이 강점입니다. 랜섬웨어 전용 방어가 추가로 필요하시면 AppCheck Pro(체크멀)도 함께 검토해 보시면 좋습니다. 자세한 내용은 /solutions/products/acronis 에서 보실 수 있습니다.';

  if (t.includes('db 접근') || t.includes('디비') || t.includes('dbsafer') || t.includes('데이터베이스 접근'))
    return 'DB · OS 접근 제어는 DBSAFER(PNP Secure)를 추천드립니다. DB · System · OS · 통합계정관리를 하나로 묶은 All-in-One 4-모듈(DB/AM/OS/IM) 구성이며, 국내 유일하게 Server Agent를 통해 우회 접속까지 완벽하게 차단합니다. 자세한 내용은 /solutions/products/dbsafer 에서 확인하실 수 있습니다.';

  if (t.includes('계정관리') || t.includes('iam') || t.includes('hiware') || t.includes('하이웨어') || t.includes('통합 접근'))
    return '통합 접근제어 · 계정관리(IAM)는 HIWARE(NETAND)를 추천드립니다. 8개 모듈을 3개 카테고리로 제공합니다.\n· 접근제어: PSM · DBAM\n· 계정관리: iM · DBM · ADiM\n· 기타 인증·관리: SecureKey · CCTV PM · MobileOTP\n서버 · 네트워크 · DB · AD · CCTV까지 통합으로 관리하실 수 있습니다. 자세한 내용은 /solutions/products/netand-hiware 에서 보실 수 있습니다.';

  if (t.includes('출력') || t.includes('프린트') || t.includes('복합기'))
    return '출력 보안은 신도 보안복합기를 추천드립니다. 인증 출력, 워터마크와 복사 방지, 출력 이력 추적까지 한 장비에서 처리할 수 있습니다. 자세한 내용은 /solutions/products/sindoh-secure-print 에서 확인하실 수 있습니다.';

  if (t.includes('방화벽') || t.includes('utm') || t.includes('fortinet'))
    return '차세대 방화벽(NGFW)은 Fortinet UTM이 대표 제품입니다. 솔모정보기술은 Fortinet Expert Partner(2024년 6월 승급)로, 차세대 방화벽 분야에서 가장 높은 등급의 기술 역량을 공식 인증받았습니다. 자세한 내용은 /solutions/products/fortinet 에서 보실 수 있습니다.';

  if (t.includes('nac') || t.includes('zero trust') || t.includes('제로 트러스트'))
    return 'NAC와 제로 트러스트는 Genian ZTNA/NAC을 추천드립니다. 자세한 내용은 /solutions/products/genian-ztna 에서 확인하실 수 있습니다.';

  if (t.includes('ddos') || t.includes('디도스') || t.includes('radware'))
    return 'DDoS 방어 · WAF · 가용성 보호 영역은 Radware가 대표 솔루션입니다. 솔모정보기술은 Radware 보안 총판입니다. 자세한 내용은 /solutions/products/radware 에서 보실 수 있습니다.';

  if (t.includes('siem') || t.includes('qradar') || t.includes('soar') || t.includes('관제'))
    return '통합 보안 관제(SIEM/SOAR/EDR)는 IBM QRadar를 추천드립니다. 단일 콘솔에서 위협 탐지부터 자동화 대응까지 처리할 수 있습니다. 자세한 내용은 /solutions/products/qradar 에서 확인하실 수 있습니다.';

  if (t.includes('ot') || t.includes('산업') || t.includes('공장') || t.includes('txone'))
    return '산업 현장(OT) 보안은 TXOne OT Zero Trust를 추천드립니다. 자세한 내용은 /solutions/products/txone 에서 보실 수 있습니다.';

  // 일반 솔루션 / 제품 문의
  if (t.includes('제품') || t.includes('솔루션') || t.includes('뭐 팔'))
    return '4개 카테고리로 정리해 드리겠습니다.\n① 네트워크 보안 — FortiNet · PIOLINK · Genian · QRadar · Radware · Network BlackBox\n② 단말/서버 보안 — DBSAFER · NETAND HIWARE · AppCheck · Trend Vision One · Kornic WIPS · NX Portrait\n③ 애플리케이션 보안 — xSecuritas(자체) · 보안복합기 · Proofpoint · Cisco ESA · 틸론 VDI · Acronis\n④ OT 보안 — TXOne · Hitachi Storage\n관심 있으신 분야를 알려주시면 더 자세히 추천해 드리겠습니다.';

  // 인증 / 신뢰
  if (
    t.includes('인증') ||
    t.includes('iso') ||
    t.includes('자격') ||
    t.includes('특허')
  )
    return '2025년 7월에 ISO 9001 · 14001 · 37301 · 45001 4종 통합 인증을 동시에 획득했습니다. 또한 메인비즈 · 이노비즈 · 벤처기업 확인도 보유하고 있으며, 보안 관련 특허 4건과 기업부설연구소를 운영 중입니다. 자세한 내용은 /about/certifications 에서 보실 수 있습니다.';

  // 연혁 / 고객사
  if (t.includes('연혁') || t.includes('역사') || t.includes('실적'))
    return '2002년 설립 이래 MG새마을금고 · POSCO · 한국수력원자력 · 국민건강보험 · 서울대 등 37개 이상의 기관과 함께해 왔습니다. 시기별 주요 실적과 파트너십은 /about/history 에서 확인하실 수 있습니다.';

  if (t.includes('고객') || t.includes('레퍼런스') || t.includes('파트너'))
    return '금융(MG새마을금고 · KB금융 · 한화생명), 제조(POSCO · LG에너지솔루션 · KOREAN AIR), 공공(한국수력원자력 · 국민건강보험 · BPA), 교육·의료(서울대 · 연세대의료원 · 국립암센터) 등 37개 이상의 기관이 솔모정보기술을 신뢰하고 있습니다. 자세한 고객사 정보는 /clients 에서 보실 수 있습니다.';

  // 연락처 / 위치 / 견적
  if (t.includes('전화') || t.includes('연락'))
    return '대표 전화는 02-402-8054이며, 평일 09:00~18:00에 운영합니다. 이메일은 solmoit01@solmo.co.kr 로 보내 주셔도 됩니다.';
  if (t.includes('주소') || t.includes('위치') || t.includes('어디') || t.includes('찾아'))
    return '주소는 서울특별시 광진구 아차산로 309 남장빌딩 2층(우편번호 05028)입니다. /support/location 에서 지도와 오시는 길을 확인하실 수 있습니다.';
  if (t.includes('견적') || t.includes('가격') || t.includes('얼마') || t.includes('비용'))
    return '정확한 견적은 도입 규모와 구성에 따라 달라지므로 바로 안내드리기 어렵습니다. 02-402-8054 또는 /support/contact 로 문의해 주시면 전문 상담사가 24시간 안에 회신드립니다.';

  // 보안링스 그룹 사이트
  if (t.includes('보안링스') || t.includes('ai 보안') || t.includes('그룹사'))
    return '보안링스는 솔모 그룹 사이트입니다. 보안검진 및 매칭서비스(AI 보안링스)는 https://bl-staging-web.apps.rtruesoft.kr/ 에서 이용하실 수 있습니다.';

  // 가벼운 인사
  if (t.match(/^(ㅎㅇ|하이|안녕|헬로|hi|hello|좋은)/))
    return '안녕하세요, 솔모봇입니다. 보안 솔루션 · 회사 정보 · 견적 문의 등 무엇이든 편하게 말씀해 주세요.';
  if (t.match(/^(ㄱㅅ|감사|고마|ㄳ|땡큐|thanks|thx)/))
    return '도움이 되었다니 다행입니다. 추가로 궁금한 점이 있으시면 언제든 다시 문의해 주세요.';

  return '안녕하세요, 솔모봇입니다. 보안 솔루션 추천, 회사 소개, 인증, 견적 문의 등 다양한 주제로 도와드릴 수 있습니다. 자세한 상담은 02-402-8054 또는 /support/contact 로 문의해 주세요.';
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
