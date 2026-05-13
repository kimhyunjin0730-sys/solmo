import Link from 'next/link';
import { CATEGORY_BY_ID, getProductsByCategory } from '@/lib/products';
import type { ProductCategoryId } from '@/types/product';

/**
 * 단일 카테고리 페이지의 공용 렌더러.
 * /solutions/{categoryId} 각 페이지가 이 컴포넌트를 호출한다.
 */
export function SolutionCategoryView({
  categoryId,
}: {
  categoryId: ProductCategoryId;
}) {
  const category = CATEGORY_BY_ID[categoryId];
  const products = getProductsByCategory(categoryId);

  return (
    <div className="space-y-14 pb-8">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-3 block">
          {category.englishName}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {category.name}
        </h1>
        <p className="text-slate-500 font-bold text-base sm:text-lg leading-relaxed">
          {category.tagline}
        </p>
      </header>

      <section>
        <div className="flex items-center gap-4 mb-6">
          <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] whitespace-nowrap">
            Lineup
          </h4>
          <span className="text-xs font-bold text-slate-400">
            {products.length} products
          </span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/solutions/products/${p.id}`}
              className="group bg-white border border-slate-200 rounded-3xl p-7 hover:border-[#001F5B] hover:shadow-xl hover:shadow-blue-900/5 transition-all"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                  {p.vendor}
                </span>
                {p.badges?.[0] && (
                  <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 uppercase tracking-wider">
                    {p.badges[0]}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#001F5B] transition-colors">
                {p.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-3 mb-5">
                {p.shortDescription}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-[#001F5B] transition-colors">
                자세히 보기
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-[#001F5B] text-white p-10 sm:p-14 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="text-blue-300 font-black text-[10px] uppercase tracking-[0.4em] mb-3">
            Need Help?
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-4">
            {category.name} 도입을 고민 중이신가요?
          </h2>
          <p className="text-white/60 font-medium text-sm leading-relaxed mb-7">
            22년의 보안 컨설팅 경험을 보유한 솔모정보기술 전문가가 환경에 가장
            적합한 솔루션 조합을 무료로 설계해드립니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/support/contact"
              className="inline-flex items-center gap-2 bg-white text-[#001F5B] px-6 py-3 rounded-full text-sm font-black tracking-tight hover:scale-105 transition-transform"
            >
              상담 문의 →
            </Link>
            <a
              href="tel:024028054"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-black tracking-tight border border-white/20 hover:bg-white/20 transition-colors"
            >
              02-402-8054
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
