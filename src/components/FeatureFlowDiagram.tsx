import type { ProductFeature } from '@/types/product';

/**
 * 순서가 의미 있는 features를 화살표로 연결된 시퀀스 플로우로 렌더.
 * Network BlackBox(캡처→탐지→헌팅→포렌식→대응) 같이 단계가 명확한 제품용.
 *
 * - 데스크탑: 가로 5컬럼 + 카드 사이 SVG 화살표
 * - 모바일: 세로 스택 + 아래로 향하는 화살표
 * - 단계별 그라데이션 색상으로 진행감 강조
 */
export function FeatureFlowDiagram({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  const palette = STAGE_PALETTE.slice(0, features.length);

  return (
    <div className="relative">
      {/* ── Desktop: horizontal row with connecting arrows ── */}
      <div className="hidden lg:block">
        <div
          className="grid gap-0 items-stretch"
          style={{
            gridTemplateColumns: `repeat(${features.length}, minmax(0, 1fr))`,
          }}
        >
          {features.map((f, idx) => (
            <DesktopStage
              key={f.title}
              index={idx}
              total={features.length}
              feature={f}
              color={palette[idx]}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile: vertical stack with downward chevrons ── */}
      <div className="lg:hidden space-y-3">
        {features.map((f, idx) => (
          <div key={f.title}>
            <MobileStage
              index={idx}
              feature={f}
              color={palette[idx]}
            />
            {idx < features.length - 1 && (
              <div className="flex justify-center py-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-blue-400"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type StageColor = {
  /** card background gradient */
  bg: string;
  /** number badge background */
  badge: string;
  /** arrow stroke */
  arrow: string;
};

const STAGE_PALETTE: readonly StageColor[] = [
  { bg: 'from-blue-600 to-blue-800', badge: 'bg-blue-700', arrow: '#1d4ed8' },
  { bg: 'from-indigo-600 to-indigo-800', badge: 'bg-indigo-700', arrow: '#4338ca' },
  { bg: 'from-violet-600 to-violet-800', badge: 'bg-violet-700', arrow: '#6d28d9' },
  { bg: 'from-fuchsia-600 to-fuchsia-800', badge: 'bg-fuchsia-700', arrow: '#a21caf' },
  { bg: 'from-rose-600 to-rose-800', badge: 'bg-rose-700', arrow: '#be123c' },
  { bg: 'from-amber-600 to-amber-800', badge: 'bg-amber-700', arrow: '#b45309' },
];

function DesktopStage({
  index,
  total,
  feature,
  color,
}: {
  index: number;
  total: number;
  feature: ProductFeature;
  color: StageColor;
}) {
  const isLast = index === total - 1;
  return (
    <div className="relative pr-6">
      <div
        className={`relative h-full bg-gradient-to-br ${color.bg} rounded-2xl p-6 shadow-lg shadow-blue-900/10 text-white overflow-hidden`}
      >
        {/* big watermark number */}
        <span className="absolute -top-2 -right-3 text-[100px] font-black text-white/10 leading-none select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* number badge */}
        <div
          className={`relative w-10 h-10 rounded-full ${color.badge} ring-4 ring-white/20 flex items-center justify-center font-black text-lg mb-5 z-10`}
        >
          {index + 1}
        </div>

        <h4 className="relative text-base font-black tracking-tight leading-snug mb-2 z-10">
          {feature.title}
        </h4>
        <p className="relative text-[13px] font-medium text-white/80 leading-relaxed z-10">
          {feature.description}
        </p>
      </div>

      {/* arrow to next stage */}
      {!isLast && (
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-6 h-12 flex items-center justify-center z-20 pointer-events-none">
          <svg
            width="24"
            height="48"
            viewBox="0 0 24 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24 L18 24"
              stroke={color.arrow}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M14 18 L22 24 L14 30"
              stroke={color.arrow}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

function MobileStage({
  index,
  feature,
  color,
}: {
  index: number;
  feature: ProductFeature;
  color: StageColor;
}) {
  return (
    <div
      className={`relative bg-gradient-to-br ${color.bg} rounded-2xl p-5 shadow-md text-white overflow-hidden`}
    >
      <span className="absolute -top-2 -right-3 text-[80px] font-black text-white/10 leading-none select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="relative flex items-start gap-4 z-10">
        <div
          className={`shrink-0 w-9 h-9 rounded-full ${color.badge} ring-4 ring-white/20 flex items-center justify-center font-black text-base`}
        >
          {index + 1}
        </div>
        <div className="min-w-0">
          <h4 className="text-base font-black tracking-tight leading-snug mb-1">
            {feature.title}
          </h4>
          <p className="text-[13px] font-medium text-white/80 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}
