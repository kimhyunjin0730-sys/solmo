import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, PRODUCT_LIST, CATEGORY_INFO } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCT_LIST.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) return { title: "제품을 찾을 수 없습니다" };
  return {
    title: `${p.name} | ${p.vendor} - 솔모정보기술`,
    description: p.shortDesc,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const cat = CATEGORY_INFO[product.category];
  const related = PRODUCT_LIST.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 flex items-center gap-2 text-xs font-bold text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            HOME
          </Link>
          <span className="text-slate-300">/</span>
          <Link href={cat.href} className="hover:text-blue-600 transition-colors">
            {cat.label}
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* Hero */}
        <header className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">
                {product.cat}
              </span>
              {product.badge && (
                <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[9px] font-black uppercase tracking-wider text-amber-700">
                  {product.badge}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base font-bold text-slate-400 mb-6">
              by {product.vendor}
            </p>
            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
              {product.shortDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/support/contact"
                className="px-7 py-4 bg-[#001F5B] text-white rounded-full text-xs font-black tracking-wider hover:bg-blue-600 transition-all"
              >
                도입 상담 신청 →
              </Link>
              <Link
                href={cat.href}
                className="px-7 py-4 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-black tracking-wider hover:border-slate-400 transition-all"
              >
                ← 전체 솔루션
              </Link>
            </div>
          </div>

          {/* Logo card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 sm:p-14 flex items-center justify-center h-48 sm:h-64">
              <img
                src={product.logo}
                alt={product.vendor}
                style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "100%" }}
                className="object-contain"
              />
            </div>
          </div>
        </header>

        {/* Overview */}
        <section className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">
              Overview
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              제품 개요
            </h2>
          </div>
          <div className="lg:col-span-9">
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {product.overview}
            </p>
          </div>
        </section>

        {/* Key Features */}
        {product.keyFeatures?.length > 0 && (
          <section className="space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">
                Key Features
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                핵심 기능
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {product.keyFeatures.map((f, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-7 bg-white border border-slate-100 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all"
                >
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Specs */}
        {product.specs?.length > 0 && (
          <section className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">
                Specifications
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                상세 사양
              </h2>
            </div>
            <div className="lg:col-span-9">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row sm:items-center p-5 sm:p-6 ${
                      i !== product.specs.length - 1 ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <div className="sm:w-1/3 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-0">
                      {spec.label}
                    </div>
                    <div className="sm:w-2/3 text-sm font-bold text-slate-800">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Use Cases */}
        {product.useCases?.length > 0 && (
          <section className="space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">
                Use Cases
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                활용 사례
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.useCases.map((uc, i) => (
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl"
                >
                  <div className="text-2xl font-extrabold text-blue-600 mb-3 tracking-tighter">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2 block">
                Get a Quote
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                {product.name} 도입 상담
              </h3>
              <p className="text-white/60 font-medium text-sm">
                전문 컨설턴트가 귀사 환경에 맞는 최적의 구성을 무료로 안내해드립니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/support/contact"
                className="px-7 py-4 bg-white text-slate-900 rounded-full text-xs font-black tracking-wider hover:bg-blue-500 hover:text-white transition-all text-center"
              >
                상담 신청 →
              </Link>
              <a
                href="tel:024028054"
                className="px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-black tracking-wider hover:bg-white/20 transition-all text-center"
              >
                📞 02-402-8054
              </a>
            </div>
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="space-y-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">
                Related Products
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                같은 카테고리의 다른 솔루션
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/solutions/products/${p.id}`}
                  className="block p-5 bg-white border border-slate-100 rounded-2xl hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="bg-slate-50 rounded-xl p-3 mb-3 h-16 flex items-center justify-center">
                    <img
                      src={p.logo}
                      alt={p.vendor}
                      style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "100%" }}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">
                    {p.cat}
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 tracking-tight leading-tight">
                    {p.name}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 mt-1">{p.vendor}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
