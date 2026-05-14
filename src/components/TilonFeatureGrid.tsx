import type { ProductFeature } from '@/types/product';
import { TilonIcon } from './TilonIcons';

/**
 * Tilon VDI(Dstation) 4-모듈 카드 그리드.
 * DDS/DAC/DDP/DMS 모듈을 prefix(영문 약어) + 한국어 부제 + 불릿 리스트로
 * 정돈해 보여준다. 단순 LineIcon 단색 카드보다 한 단계 위의 illustrative
 * 표현을 위해 TilonIcons + 글래스 카드 + 코드 라벨 배지를 조합한다.
 */
export function TilonFeatureGrid({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
      {features.map((f, idx) => {
        const code = f.title.match(/^([A-Z]{3})/)?.[1] ?? '';
        const subtitle = f.title.replace(/^[A-Z]{3}\s*\(?([^)]*)\)?/, '$1');
        return (
          <article
            key={f.title}
            className="group relative bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 overflow-hidden hover:border-[#001F5B]/40 hover:shadow-xl transition-all duration-500"
          >
            {/* 좌측 상단 누적 인덱스 */}
            <span className="absolute top-5 right-6 font-mono text-[11px] font-medium text-slate-300 tracking-[0.3em]">
              0{idx + 1}
            </span>

            {/* 배경 그라데이션 후광 */}
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br from-blue-100/60 to-transparent blur-2xl pointer-events-none" />

            <div className="relative flex items-start gap-5">
              {/* 일러스트 아이콘 */}
              <div className="relative shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 border border-slate-200/70 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <TilonIcon
                    iconKey={f.icon}
                    className="w-20 h-20"
                  />
                </div>
              </div>

              {/* 헤더 텍스트 */}
              <div className="flex-1 min-w-0 pt-1">
                {code && (
                  <span className="inline-block font-mono text-[10px] font-bold text-blue-600 tracking-[0.25em] uppercase mb-2 px-2 py-0.5 bg-blue-50 rounded">
                    {code}
                  </span>
                )}
                <h4 className="font-display text-[20px] sm:text-[22px] font-bold text-[#001F5B] tracking-tight leading-tight break-keep">
                  {subtitle.trim() || f.title}
                </h4>
                <div className="h-0.5 w-10 bg-blue-500 mt-3 group-hover:w-16 transition-all duration-500" />
              </div>
            </div>

            {/* 불릿 / 설명 */}
            <div className="relative mt-5">
              {f.bullets && f.bullets.length > 0 ? (
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[14px] font-medium text-slate-600 leading-relaxed break-keep"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[14px] font-medium text-slate-600 leading-relaxed break-keep">
                  {f.description}
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
