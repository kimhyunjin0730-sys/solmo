import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  CATEGORY_BY_ID,
  getProductById,
  PRODUCTS,
} from '@/lib/products';

type Params = { id: string };

export async function generateStaticParams(): Promise<Params[]> {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: '제품을 찾을 수 없습니다' };
  return {
    title: `${product.name} | ${product.vendor}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const category = CATEGORY_BY_ID[product.categoryId];
  const siblings = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-20 sm:pt-24 pb-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6">
            <Link href="/" className="hover:text-[#001F5B] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link
              href="/solutions/network-security"
              className="hover:text-[#001F5B] transition-colors uppercase tracking-widest"
            >
              SOLUTIONS
            </Link>
            <span>/</span>
            <Link
              href={`/solutions/${category.id}`}
              className="hover:text-[#001F5B] transition-colors"
            >
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-slate-900">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {category.englishName}
                </span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  {product.vendor}
                </span>
                {product.badges?.map((b) => (
                  <span
                    key={b}
                    className="text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2.5 py-0.5 uppercase tracking-wider"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                {product.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-500 leading-relaxed mb-2">
                {product.shortDescription}
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="bg-gradient-to-br from-[#001F5B] to-indigo-700 rounded-3xl p-8 text-white shadow-2xl shadow-blue-900/20">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-300 mb-2">
                  Quick Quote
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4 leading-tight">
                  {product.vendor} <br />
                  도입 견적 받기
                </h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed mb-6">
                  도입 규모·환경에 따른 맞춤형 견적을 받아보세요.
                </p>
                <Link
                  href="/support/contact"
                  className="block w-full text-center bg-white text-[#001F5B] py-3 rounded-full text-sm font-black tracking-tight hover:scale-[1.02] transition-transform mb-2"
                >
                  문의하기 →
                </Link>
                <a
                  href="tel:024028054"
                  className="block w-full text-center bg-white/10 text-white py-3 rounded-full text-sm font-black tracking-tight border border-white/20 hover:bg-white/20 transition-colors"
                >
                  02-402-8054
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-12 grid lg:grid-cols-12 gap-10">
        <main className="lg:col-span-8 space-y-12">
          <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">
                Overview
              </span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>
            <p className="text-base sm:text-[17px] text-slate-700 leading-loose font-medium whitespace-pre-line">
              {product.longDescription}
            </p>
            {product.officialUrl && (
              <a
                href={product.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-black text-blue-700 hover:text-blue-900 transition-colors"
              >
                벤더 공식 사이트
                <span>↗</span>
              </a>
            )}
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">
                Key Features
              </span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {product.features.map((f, idx) => (
                <div
                  key={f.title}
                  className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#001F5B] hover:shadow-md transition-all overflow-hidden"
                >
                  <span className="absolute -top-2 -right-2 text-[80px] font-black text-slate-50 leading-none select-none pointer-events-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#001F5B] to-indigo-700 text-white flex items-center justify-center text-xs font-black uppercase tracking-widest mb-4">
                      {f.icon.slice(0, 2)}
                    </div>
                    <h4 className="text-base font-black text-slate-900 tracking-tight mb-2 leading-tight">
                      {f.title}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-7 border border-slate-200 sticky top-28">
            <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-3">
              Same Category
            </div>
            <h4 className="text-lg font-black text-slate-900 tracking-tight mb-5">
              {category.name}
            </h4>
            <ul className="space-y-2">
              {siblings.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/solutions/products/${s.id}`}
                    className="block px-3 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-[#001F5B] transition-colors"
                  >
                    {s.name}
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                      {s.vendor}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100">
                <Link
                  href={`/solutions/${category.id}`}
                  className="block px-3 py-2 text-xs font-black text-blue-600 tracking-tight"
                >
                  카테고리 전체 보기 →
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
