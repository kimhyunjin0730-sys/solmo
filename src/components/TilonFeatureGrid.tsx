import type { ProductFeature } from '@/types/product';
import { TilonIcon } from './TilonIcons';

/**
 * 틸론 VDI(Dstation) 4-모듈 카드.
 * PPT 슬라이드 레이아웃 재현:
 *   ┌────────────────────┐
 *   │   ◇ 일러스트 아이콘    │
 *   │   ────────────────  │
 *   │   DDS                │  ← 큰 코드
 *   │   (Dstation ...)    │  ← 풀네임
 *   │   ────────────────  │
 *   │   네이비 박스         │
 *   │   PPT 한 줄 설명      │
 *   └────────────────────┘
 */
export function TilonFeatureGrid({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {features.map((f) => {
        const code = f.title.match(/^([A-Z]{3})/)?.[1] ?? '';
        const fullName =
          f.title.match(/\(([^)]+)\)/)?.[1] ?? f.title;

        return (
          <article
            key={f.title}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#001F5B]/40 hover:shadow-xl transition-all duration-500"
          >
            {/* 상단 — 일러스트 + 코드 */}
            <div className="px-6 pt-7 pb-5 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 group-hover:scale-105 transition-transform duration-500">
                  <TilonIcon
                    iconKey={f.icon}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h4 className="font-display text-[#001F5B] text-[28px] sm:text-[32px] font-extrabold tracking-tight leading-none">
                {code}
              </h4>
              <p className="text-[11px] sm:text-[12px] font-medium text-slate-500 mt-2 break-keep">
                ({fullName})
              </p>
            </div>

            {/* 하단 — 네이비 설명 박스 */}
            <div className="bg-gradient-to-br from-[#001F5B] via-[#0B1B3F] to-[#001440] px-6 py-5 min-h-[120px] flex items-center">
              <p className="text-white/90 text-[13px] sm:text-[14px] font-medium leading-relaxed text-center break-keep w-full">
                {f.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
