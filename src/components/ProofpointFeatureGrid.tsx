import type { ProductFeature } from '@/types/product';
import { ProofpointIcon } from './ProofpointIcons';

/**
 * Proofpoint 3-카드 그리드. PPT 원본의 단순 글로브/클라우드 톤을
 * multi-color 일러스트 + 글래스 카드로 한 단계 위에서 재현한다.
 */
export function ProofpointFeatureGrid({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {features.map((f, idx) => (
        <article
          key={f.title}
          className="group relative bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 overflow-hidden hover:border-[#001F5B]/40 hover:shadow-xl transition-all duration-500"
        >
          {/* 배경 후광 */}
          <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-blue-100/70 to-transparent blur-2xl pointer-events-none" />

          <span className="absolute top-5 right-6 font-mono text-[11px] font-medium text-slate-300 tracking-[0.3em]">
            0{idx + 1}
          </span>

          <div className="relative flex flex-col items-start">
            {/* 일러스트 */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 border border-slate-200/70 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-500">
              <ProofpointIcon iconKey={f.icon} className="w-20 h-20" />
            </div>

            {/* 제목 */}
            <h4 className="font-display text-[18px] sm:text-[20px] font-bold text-[#001F5B] tracking-tight leading-tight break-keep mb-3">
              {f.title}
            </h4>

            <div className="h-0.5 w-10 bg-blue-500 mb-4 group-hover:w-16 transition-all duration-500" />

            <p className="text-[14px] font-medium text-slate-600 leading-relaxed break-keep">
              {f.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
