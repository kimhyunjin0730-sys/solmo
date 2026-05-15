import type { ProductFeature } from '@/types/product';

/**
 * xSecuritas 8-제품 라인업 그리드.
 * PPT 원본의 다이아몬드(◇) 모양 컬러 칩 그대로 재현.
 * Enterprise(파랑) / Personal(앰버) / Video(민트) / Secure PC(보라) 4-팔레트.
 */

type Variant = 'enterprise' | 'personal' | 'video' | 'secure';

// 아이콘 키 → (배지 라벨 2줄, variant)
const META: Record<
  string,
  { line1: string; line2: string; sub?: string; variant: Variant }
> = {
  'screen-wm-ent': {
    line1: 'Screen',
    line2: 'WM',
    sub: 'Enterprise',
    variant: 'enterprise',
  },
  'screen-wm-per': {
    line1: 'Screen',
    line2: 'WM',
    sub: 'Personal',
    variant: 'personal',
  },
  'print-wm-ent': {
    line1: 'Output',
    line2: 'WM',
    sub: 'Enterprise',
    variant: 'enterprise',
  },
  'print-wm-per': {
    line1: 'Output',
    line2: 'WM',
    sub: 'Personal',
    variant: 'personal',
  },
  'webcam-bl-ent': {
    line1: 'Webcam',
    line2: 'BL',
    sub: 'Enterprise',
    variant: 'enterprise',
  },
  'webcam-bl-per': {
    line1: 'Webcam',
    line2: 'BL',
    sub: 'Personal',
    variant: 'personal',
  },
  'webcam-wm-video': {
    line1: 'Webcam',
    line2: 'WM',
    sub: 'Video',
    variant: 'video',
  },
  'secure-pc': {
    line1: 'Secure',
    line2: 'PC',
    variant: 'secure',
  },
};

const VARIANT_STYLES: Record<
  Variant,
  {
    fill: string;
    stroke: string;
    text: string;
    sub: string;
    accent: string;
  }
> = {
  enterprise: {
    fill: 'from-[#0B1B3F] via-[#0F2A5C] to-[#0B1B3F]',
    stroke: 'stroke-sky-400',
    text: 'text-sky-300',
    sub: 'text-sky-200/80',
    accent: 'bg-sky-400',
  },
  personal: {
    fill: 'from-[#1A1208] via-[#2A1F0A] to-[#1A1208]',
    stroke: 'stroke-amber-400',
    text: 'text-amber-300',
    sub: 'text-amber-200/80',
    accent: 'bg-amber-400',
  },
  video: {
    fill: 'from-[#06231B] via-[#0A3B2D] to-[#06231B]',
    stroke: 'stroke-emerald-400',
    text: 'text-emerald-300',
    sub: 'text-emerald-200/80',
    accent: 'bg-emerald-400',
  },
  secure: {
    fill: 'from-[#1A0D2A] via-[#2A1147] to-[#1A0D2A]',
    stroke: 'stroke-fuchsia-400',
    text: 'text-fuchsia-300',
    sub: 'text-fuchsia-200/80',
    accent: 'bg-fuchsia-400',
  },
};

function DiamondChip({
  iconKey,
}: {
  iconKey: string;
}) {
  const meta = META[iconKey];
  if (!meta) return null;
  const style = VARIANT_STYLES[meta.variant];

  return (
    <div className="relative w-[88px] h-[88px] shrink-0">
      {/* 다이아몬드 — 45° 회전 사각형 */}
      <div
        className={`absolute inset-2 rotate-45 rounded-md bg-gradient-to-br ${style.fill} shadow-lg`}
      />
      {/* 외곽 색 스트로크 */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 88 88"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="14"
          y="14"
          width="60"
          height="60"
          rx="6"
          transform="rotate(45 44 44)"
          className={style.stroke}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* 라벨 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <span
          className={`font-display ${style.text} text-[11px] font-bold tracking-tight leading-none`}
        >
          {meta.line1}
        </span>
        <span
          className={`font-display ${style.text} text-[13px] font-extrabold tracking-tight leading-none mt-0.5`}
        >
          {meta.line2}
        </span>
        {meta.sub && (
          <span
            className={`font-mono ${style.sub} text-[7px] tracking-[0.15em] uppercase mt-1`}
          >
            {meta.sub}
          </span>
        )}
      </div>
    </div>
  );
}

export function XSecuritasLineup({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200 rounded-3xl p-6 sm:p-8 overflow-hidden">
      {/* 배경 점 그리드 */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #001F5B 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* 헤더 */}
      <div className="relative flex items-center justify-between mb-6 sm:mb-8">
        <p className="font-mono text-[10px] sm:text-[11px] font-bold text-blue-600 tracking-[0.3em] uppercase">
          Product Lineup
        </p>
        <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-sky-400" />
            Enterprise
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-amber-400" />
            Personal
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-emerald-400" />
            Video
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-fuchsia-400" />
            Secure
          </span>
        </div>
      </div>

      {/* 그리드 — PPT 그대로: 칩 + 영문 제목 한 줄 미니멀 */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="group flex items-center gap-4 px-3 py-2.5 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300"
          >
            <DiamondChip iconKey={f.icon} />
            <h5 className="font-display text-[14px] sm:text-[15px] font-bold text-[#001F5B] tracking-tight leading-snug flex-1 min-w-0">
              {f.title}
            </h5>
          </article>
        ))}
      </div>
    </div>
  );
}
