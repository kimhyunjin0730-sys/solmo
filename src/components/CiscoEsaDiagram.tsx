/**
 * Cisco ESA 메일 보안 아키텍처 다이어그램.
 * PPT 슬라이드의 3-레이어 구조 재현:
 *   INBOUND  : Spam Defense · Virus Defense
 *   MTA      : Cisco IronPort AsyncOS Email Platform
 *   OUTBOUND : Data Loss Prevention · Secure Messaging
 *   우측 사이드레일: Management
 *
 * 단순 outline 아이콘 3개 카드 대신 시스코 PPT 원본의
 * 계층형 메일 플로우를 시각화해 한 눈에 흐름을 파악할 수 있게 한다.
 */

const NAVY = '#001F5B';
const BLUE = '#1E40AF';
const SKY = '#3B82F6';

function FlowBox({
  title,
  subtitle,
  variant = 'solid',
}: {
  title: string;
  subtitle?: string;
  variant?: 'solid' | 'wide';
}) {
  return (
    <div
      className={`relative rounded-xl px-4 sm:px-6 py-5 sm:py-6 text-center shadow-md ${
        variant === 'wide'
          ? 'bg-gradient-to-r from-[#001F5B] via-[#1E40AF] to-[#001F5B] text-white'
          : 'bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white hover:from-[#3B82F6] hover:to-[#2563EB] transition-colors duration-300'
      }`}
    >
      {/* subtle inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-white/10 pointer-events-none" />
      <div className="relative">
        <p className="font-display text-[15px] sm:text-[17px] font-bold tracking-tight leading-tight break-keep">
          {title}
        </p>
        {subtitle && (
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-200 mt-1.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function LayerLabel({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-end pr-2 sm:pr-4 text-right shrink-0 w-24 sm:w-32">
      <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-slate-400 uppercase">
        {eyebrow}
      </span>
      <span className="font-display text-[12px] sm:text-[13px] font-bold text-[#001F5B] tracking-tight leading-tight mt-1 break-keep">
        {title}
      </span>
    </div>
  );
}

/** 좌측 라벨에서 행 카드를 묶는 둥근 괄호 — PPT 의 } 모양 */
function Brace() {
  return (
    <svg
      width="14"
      height="100%"
      viewBox="0 0 14 100"
      preserveAspectRatio="none"
      className="h-full text-[#94A3B8]"
      aria-hidden="true"
    >
      <path
        d="M12 2 C 4 2, 4 50, 1 50 C 4 50, 4 98, 12 98"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CiscoEsaDiagram() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200 rounded-3xl p-6 sm:p-10 overflow-hidden">
      {/* 배경 그리드 점 */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #001F5B 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 상단 헤더 */}
      <div className="relative flex items-center justify-between mb-8 sm:mb-10">
        <div>
          <p className="font-mono text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-[0.3em] uppercase mb-1">
            Architecture
          </p>
          <h4 className="font-display text-[#001F5B] text-xl sm:text-2xl font-bold tracking-tight">
            메일 보안 플로우
          </h4>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Real-time Inspection
        </div>
      </div>

      {/* 본문 : 라벨 + 괄호 + 메인 + 매니지먼트 사이드레일 */}
      <div className="relative flex gap-3 sm:gap-5">
        {/* 좌측 라벨 컬럼 */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center" style={{ minHeight: '92px' }}>
            <LayerLabel eyebrow="01" title="INBOUND SECURITY" />
            <Brace />
          </div>
          <div className="flex items-center" style={{ minHeight: '92px' }}>
            <LayerLabel eyebrow="02" title="MAIL TRANSFER AGENT" />
            <Brace />
          </div>
          <div className="flex items-center" style={{ minHeight: '92px' }}>
            <LayerLabel eyebrow="03" title="OUTBOUND CONTROL" />
            <Brace />
          </div>
        </div>

        {/* 메인 다이어그램 컬럼 */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          {/* INBOUND */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5" style={{ minHeight: '92px' }}>
            <FlowBox title="Spam Defense" subtitle="Anti-Spam" />
            <FlowBox title="Virus Defense" subtitle="Anti-Virus" />
          </div>

          {/* MTA */}
          <div style={{ minHeight: '92px' }}>
            <FlowBox
              variant="wide"
              title="CISCO IRONPORT ASYNCOS™ EMAIL PLATFORM"
              subtitle="Mail Transfer Agent"
            />
          </div>

          {/* OUTBOUND */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5" style={{ minHeight: '92px' }}>
            <FlowBox title="Data Loss Prevention" subtitle="DLP" />
            <FlowBox title="Secure Messaging" subtitle="Encryption" />
          </div>
        </div>

        {/* 우측 Management 사이드레일 */}
        <div className="shrink-0 w-12 sm:w-14 relative">
          <div className="absolute inset-y-0 right-0 w-10 sm:w-12 rounded-xl bg-gradient-to-b from-[#001F5B] to-[#1E40AF] shadow-md flex items-center justify-center">
            <span
              className="font-display text-white text-[13px] sm:text-[15px] font-bold tracking-[0.25em] uppercase whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Management
            </span>
          </div>
        </div>
      </div>

      {/* 하단 흐름 표식 */}
      <div className="relative mt-8 flex items-center justify-center gap-3 text-[11px] sm:text-[12px] font-mono text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          INGRESS
        </span>
        <span className="text-slate-300">→</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          PROCESS
        </span>
        <span className="text-slate-300">→</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          EGRESS
        </span>
      </div>
    </div>
  );
}
