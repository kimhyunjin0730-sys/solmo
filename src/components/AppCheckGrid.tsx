import type { ProductFeature } from '@/types/product';

/**
 * AppCheck Pro(체크멀) 핵심기능 4-카드.
 * PPT 슬라이드의 2×2 텍스트 카드 구성 재현 — 안티랜섬웨어 톤(그린/민트)으로.
 */

/** 카드별 미니 글리프 (랜섬 방어 / 가드 / 복구 / 호환) */
function CardGlyph({ index }: { index: number }) {
  const common = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none' };
  switch (index) {
    case 0: // 랜섬웨어 위협 차단 — 방패 + 차단
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20 4l13 5v9c0 8-6 14-13 18-7-4-13-10-13-18V9z" fill="#059669" />
          <path d="M14 20l4 4 8-9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 1: // 랜섬가드 — 파일 + 잠금
      return (
        <svg {...common} aria-hidden="true">
          <rect x="9" y="6" width="22" height="28" rx="3" fill="#10B981" />
          <rect x="13" y="12" width="14" height="2.5" rx="1.25" fill="white" opacity="0.8" />
          <rect x="13" y="17" width="10" height="2.5" rx="1.25" fill="white" opacity="0.55" />
          <circle cx="28" cy="28" r="8" fill="#047857" />
          <rect x="24.5" y="27" width="7" height="6" rx="1" fill="white" />
          <path d="M25.5 27v-1.5a2.5 2.5 0 0 1 5 0V27" stroke="white" strokeWidth="1.6" fill="none" />
        </svg>
      );
    case 2: // 데이터 복구 — 백업 순환 화살표
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="20" cy="20" r="14" fill="#D1FAE5" />
          <path d="M28 14a10 10 0 1 0 2 8" stroke="#059669" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M28 9v5h-5" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="20" cy="20" r="3.5" fill="#059669" />
        </svg>
      );
    default: // 기존 백신 호환 — 두 겹 체크
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="15" cy="20" r="11" fill="#A7F3D0" />
          <circle cx="25" cy="20" r="11" fill="#10B981" />
          <path d="M21 20l3 3 5-6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
  }
}

export function AppCheckGrid({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
      {/* 배경 후광 */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="relative flex items-center gap-3 mb-6 sm:mb-8">
        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-emerald-600 tracking-[0.3em] uppercase">
          Anti-Ransomware
        </span>
        <span className="text-sm font-bold text-slate-700">
          예방 · 차단 · 복구 · 호환
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      <div className="relative grid sm:grid-cols-2 gap-5 sm:gap-6">
        {features.map((f, idx) => (
          <article
            key={f.title}
            className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-emerald-400/50 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                <CardGlyph index={idx} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <span className="font-mono text-[10px] font-bold text-emerald-600/70 tracking-[0.2em]">
                  0{idx + 1}
                </span>
                <h4 className="font-display text-[16px] sm:text-[17px] font-bold text-[#001F5B] tracking-tight leading-snug break-keep">
                  {f.title}
                </h4>
              </div>
            </div>
            <div className="h-0.5 w-10 bg-emerald-500 mb-3 group-hover:w-16 transition-all duration-300" />
            <p className="text-[13px] sm:text-[14px] font-medium text-slate-600 leading-relaxed break-keep">
              {f.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
