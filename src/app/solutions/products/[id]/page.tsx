import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  CATEGORY_BY_ID,
  getProductById,
  PRODUCTS,
} from '@/lib/products';
import { FeatureFlowDiagram } from '@/components/FeatureFlowDiagram';
import { LineIcon } from '@/components/LineIcon';
import { RadwareIcon } from '@/components/RadwareIcons';
import { FeaturePhotoGrid } from '@/components/FeaturePhotoCard';

/**
 * 단말/서버 보안 · 애플리케이션 보안 · OT 보안 카테고리는 features를
 * 홈 화면 ServiceCard 스타일(사진 배경 카드)로 렌더. 네트워크 보안은
 * 기존 outline 아이콘 카드 유지.
 */
const PHOTO_CATEGORIES = new Set([
  'endpoint-server-security',
  'application-security',
  'ot-security',
]);

/** 단계가 시퀀스로 의미 있는 제품은 features를 화살표 플로우로 렌더한다. */
const FLOW_PRODUCTS = new Set(['network-blackbox']);

/** 제품 라인업 가로 행으로 보여주는 모드 (PPT: 한 박스 안 N개 카드).
 *  - entrolink: LineIcon 사용
 *  - hitachi-storage: featureImages 의 이소메트릭 일러스트 사용 */
const ROW_PRODUCTS = new Set(['entrolink', 'hitachi-storage']);

/**
 * PPT가 큰 thin-line blue outline 아이콘 (navy 박스 없이 floating) 스타일인 제품.
 * 일반 feature card 안에서 아이콘 chip을 그대로 두면 톤이 안 맞아 별도 모드.
 */
const OUTLINE_ICON_PRODUCTS = new Set(['kornic-glory-wips']);

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
  );
  const featureImages = product.assets?.featureImages ?? [];
  const featureScreenshots = product.assets?.featureScreenshots ?? [];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-20 sm:pt-24 pb-6">
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

          {/* 벤더 로고 (PPT 좌상단 위치 모방) */}
          {product.assets?.logo && (
            <div className="mb-6">
              <div className="relative h-14 w-48">
                <Image
                  src={product.assets.logo}
                  alt={`${product.vendor} 로고`}
                  fill
                  className="object-contain object-left"
                  sizes="192px"
                  priority
                />
              </div>
            </div>
          )}

          <div>
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

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              {product.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-8 grid lg:grid-cols-12 gap-10">
        <main className="lg:col-span-8 space-y-12">
          <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-blue-600 font-mono font-medium text-[10px] uppercase tracking-[0.4em]">
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

          {/* 추가 다이어그램 (구성도·컴포넌트 등 PPT 표제 이미지) */}
          {product.assets?.diagrams?.map((d) => (
            <section
              key={d.src}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-blue-600 font-mono font-medium text-[10px] uppercase tracking-[0.4em]">
                  Diagram
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {d.caption}
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              <div className="relative w-full">
                <Image
                  src={d.src}
                  alt={d.caption}
                  width={1600}
                  height={900}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </section>
          ))}

          {/* 히어로 이미지 (PPT 본문 중앙의 대표 다이어그램/제품 사진) */}
          {product.assets?.hero && (
            <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-blue-600 font-mono font-medium text-[10px] uppercase tracking-[0.4em]">
                  Product View
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              <div className="relative w-full">
                <Image
                  src={product.assets.hero}
                  alt={`${product.name} 제품 이미지`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </section>
          )}

          {(product.features.length > 0 ||
            (product.featureBullets && product.featureBullets.length > 0) ||
            (product.featureGroups && product.featureGroups.length > 0)) && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-blue-600 font-mono font-medium text-[10px] uppercase tracking-[0.4em]">
                Key Features
              </span>
              <span className="text-xs font-bold text-slate-400">핵심기능</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {product.featureGroups && product.featureGroups.length > 0 ? (
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-6 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {product.featureGroups.map((g) => (
                    <div
                      key={g.title}
                      className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#001F5B] hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {g.icon && (
                          <span className="text-2xl leading-none select-none">
                            {g.icon}
                          </span>
                        )}
                        <h4 className="text-base sm:text-lg font-black text-[#001F5B] tracking-tight leading-snug">
                          {g.title}
                        </h4>
                      </div>
                      <ul className="space-y-2 ml-1">
                        {g.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm font-bold text-slate-700"
                          >
                            <span className="mt-0.5 text-blue-600 shrink-0">
                              ✓
                            </span>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : product.featureBullets && product.featureBullets.length > 0 ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-10">
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {product.featureBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm sm:text-base font-bold text-slate-700"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-sm bg-blue-600 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : ROW_PRODUCTS.has(product.id) ? (
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-6 sm:p-10">
                <div
                  className={`grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 ${
                    product.features.length >= 5
                      ? 'lg:grid-cols-5'
                      : product.features.length === 4
                        ? 'lg:grid-cols-4'
                        : 'lg:grid-cols-5'
                  }`}
                >
                  {product.features.map((f, idx) => {
                    const img = featureImages[idx];
                    return (
                      <div
                        key={f.title}
                        className="text-center px-2 sm:px-3 py-4"
                      >
                        {img ? (
                          <div className="relative w-full aspect-square mb-4 sm:mb-5">
                            <Image
                              src={img}
                              alt={f.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 40vw, 18vw"
                            />
                          </div>
                        ) : (
                          <div className="flex justify-center mb-4 text-[#001F5B]">
                            <LineIcon
                              name={f.icon}
                              className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                          </div>
                        )}
                        <h4 className="font-display text-base sm:text-lg font-bold text-[#001F5B] tracking-tight mb-2 leading-tight">
                          {f.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] font-medium text-slate-500 leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : FLOW_PRODUCTS.has(product.id) ? (
              <FeatureFlowDiagram features={product.features} />
            ) : PHOTO_CATEGORIES.has(product.categoryId) &&
              featureScreenshots.length === 0 ? (
              <FeaturePhotoGrid features={product.features} />
            ) : (
              <div
                className={`grid sm:grid-cols-2 gap-5 ${
                  featureScreenshots.length > 0 ? 'lg:grid-cols-3' : ''
                }`}
              >
                {product.features.map((f, idx) => {
                  const img = featureImages[idx];
                  const shot = featureScreenshots[idx];
                  return (
                    <div
                      key={f.title}
                      className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#001F5B] hover:shadow-md transition-all overflow-hidden"
                    >
                      <span className="absolute -top-2 -right-2 text-[80px] font-black text-slate-50 leading-none select-none pointer-events-none">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="relative">
                        {shot ? (
                          <div className="relative w-full aspect-[4/3] mb-4 bg-slate-50 rounded-xl overflow-hidden">
                            <Image
                              src={shot}
                              alt={f.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                          </div>
                        ) : img ? (
                          <div className="relative w-20 h-20 mb-4">
                            <Image
                              src={img}
                              alt={f.title}
                              fill
                              className="object-contain"
                              sizes="80px"
                            />
                          </div>
                        ) : product.id === 'radware' ? (
                          <div className="mb-4">
                            <RadwareIcon
                              iconKey={f.icon}
                              className="w-14 h-14"
                            />
                          </div>
                        ) : OUTLINE_ICON_PRODUCTS.has(product.id) ? (
                          <div className="mb-6 flex justify-center pt-4">
                            <LineIcon
                              name={f.icon}
                              className="w-16 h-16 text-blue-500"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001F5B] to-indigo-700 text-white flex items-center justify-center mb-4">
                            <LineIcon name={f.icon} className="w-6 h-6" />
                          </div>
                        )}
                        <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3 leading-snug">
                          {f.title}
                        </h4>
                        {f.bullets && f.bullets.length > 0 ? (
                          <ul className="space-y-1.5">
                            {f.bullets.map((b) => (
                              <li
                                key={b}
                                className="text-sm font-medium text-slate-500 leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-blue-400 shrink-0">–</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm font-medium text-slate-500 leading-relaxed">
                            {f.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
          )}
        </main>

        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-7 border border-slate-200 sticky top-28">
            <div className="text-blue-600 font-mono font-medium text-[10px] uppercase tracking-[0.4em] mb-3">
              Same Category
            </div>
            <h4 className="text-lg font-black text-slate-900 tracking-tight mb-5">
              {category.name}
            </h4>
            <ul className="space-y-1.5">
              {siblings.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/solutions/products/${s.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-[#001F5B] transition-colors"
                  >
                    {s.assets?.logo ? (
                      <div className="relative w-8 h-6 shrink-0">
                        <Image
                          src={s.assets.logo}
                          alt=""
                          fill
                          className="object-contain object-left"
                          sizes="32px"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-6 shrink-0 rounded bg-slate-100" />
                    )}
                    <div className="min-w-0">
                      <div className="truncate">{s.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">
                        {s.vendor}
                      </div>
                    </div>
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
