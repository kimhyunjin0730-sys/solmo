import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, PRODUCT_LIST, CATEGORY_INFO } from "@/lib/products";
import ProductDiagram from "@/components/ProductDiagrams";

/* ──────────── Feature card with proper SVG iconography ──────────── */
function FeatureCard({ feature, index }) {
  return (
    <div className="group relative p-7 sm:p-8 bg-white border border-slate-200 rounded-2xl hover:border-[#001F5B] hover:shadow-[0_20px_50px_-20px_rgba(0,31,91,0.25)] transition-all duration-300 overflow-hidden">
      {/* Index number watermark */}
      <span className="absolute top-5 right-6 text-5xl font-extrabold text-slate-100 tracking-tighter group-hover:text-blue-50 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon block */}
      <div className="relative w-12 h-12 mb-6 bg-gradient-to-br from-[#001F5B] to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
        <FeatureIcon name={feature.icon} />
        {/* Subtle glow */}
        <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-60 transition-opacity"></div>
      </div>

      <h3 className="relative text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-3">
        {feature.title}
      </h3>
      <p className="relative text-sm font-medium text-slate-500 leading-relaxed">
        {feature.desc}
      </p>

      {/* Bottom accent line */}
      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="mt-3 flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest">
        <span className="w-4 h-px bg-blue-600"></span>
        Feature {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

function FeatureIcon({ name }) {
  // Map common emoji/keywords from products.js to clean SVG icons.
  // Default icon if no match.
  const iconMap = {
    // Network / Security
    "🛡": "shield",
    "🛡️": "shield",
    "🔐": "lock",
    "🔒": "lock",
    "⚡": "bolt",
    "🌐": "globe",
    "🚫": "ban",
    "🚨": "alert",
    "🦠": "virus",
    "🧠": "brain",
    "🆔": "id",
    "🔍": "search",
    "📡": "broadcast",
    "📊": "chart",
    "📋": "clipboard",
    "🔄": "refresh",
    "🔁": "loop",
    "🔗": "link",
    "🤖": "robot",
    "🚪": "door",
    "👻": "ghost",
    "✅": "check",
    "🗑": "trash",
    "📜": "scroll",
    "📄": "doc",
    "📨": "mail",
    "✏️": "edit",
    "✍️": "sign",
    "⚖️": "scale",
    "⌨️": "keyboard",
    "💧": "drop",
    "🪪": "card",
    "🖨": "printer",
    "🔑": "key",
  };
  const key = iconMap[name] || "default";

  const stroke = "currentColor";
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "text-white relative z-10",
  };

  switch (key) {
    case "shield":
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "lock":
      return <svg {...props}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case "bolt":
      return <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case "globe":
      return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
    case "ban":
      return <svg {...props}><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>;
    case "alert":
      return <svg {...props}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
    case "brain":
      return <svg {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5V20a2 2 0 0 1-2 2h-.5a2.5 2.5 0 0 1-2.5-2.5v-.5a2.5 2.5 0 0 1-2.5-2.5v-.5a2.5 2.5 0 0 1 0-5v-.5A2.5 2.5 0 0 1 7 8V7.5A2.5 2.5 0 0 1 9.5 5z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5V20a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5v-.5a2.5 2.5 0 0 0 2.5-2.5v-.5a2.5 2.5 0 0 0 0-5v-.5A2.5 2.5 0 0 0 17 8V7.5A2.5 2.5 0 0 0 14.5 5z"/></svg>;
    case "id":
      return <svg {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M15 8h2M15 12h2M7 16h10"/></svg>;
    case "search":
      return <svg {...props}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
    case "broadcast":
      return <svg {...props}><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M20.49 4a10 10 0 0 1 0 16M3.51 20A10 10 0 0 1 3.51 4"/></svg>;
    case "chart":
      return <svg {...props}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
    case "clipboard":
      return <svg {...props}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>;
    case "refresh":
      return <svg {...props}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
    case "loop":
      return <svg {...props}><path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>;
    case "link":
      return <svg {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
    case "robot":
      return <svg {...props}><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg>;
    case "door":
      return <svg {...props}><path d="M19 22V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v18"/><path d="M2 22h20"/><circle cx="14" cy="13" r="0.5" fill="currentColor"/></svg>;
    case "ghost":
      return <svg {...props}><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2 2 2-2 2 2 2-2 3 3V10a8 8 0 0 0-8-8z"/></svg>;
    case "check":
      return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case "trash":
      return <svg {...props}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>;
    case "scroll":
      return <svg {...props}><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/></svg>;
    case "doc":
      return <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
    case "mail":
      return <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
    case "edit":
      return <svg {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
    case "sign":
      return <svg {...props}><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>;
    case "scale":
      return <svg {...props}><path d="M16 16.5a2 2 0 1 0 4 0c0-2-2-2.5-2-5h-2"/><path d="M4 16.5a2 2 0 1 0 4 0c0-2-2-2.5-2-5H4"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="6" y1="11.5" x2="18" y2="11.5"/></svg>;
    case "keyboard":
      return <svg {...props}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/></svg>;
    case "drop":
      return <svg {...props}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>;
    case "card":
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2"/><path d="M15 10h3M15 14h3"/></svg>;
    case "printer":
      return <svg {...props}><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>;
    case "key":
      return <svg {...props}><path d="M21 2l-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/><path d="m15.5 7.5 3 3"/></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>;
  }
}


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
      {/* Breadcrumb (sits below the fixed header) */}
      <div className="border-b border-slate-100 bg-slate-50 pt-20">
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

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-6 sm:pt-8 pb-12 space-y-10 sm:space-y-12">
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
            <div className="bg-white border border-slate-100 rounded-3xl p-10 sm:p-14 flex items-center justify-center h-48 sm:h-64">
              <img
                src={product.logo}
                alt={product.vendor}
                style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "100%", mixBlendMode: "multiply" }}
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
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">
                  Key Features
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  핵심 기능
                </h2>
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {product.keyFeatures.length} Capabilities
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {product.keyFeatures.map((f, i) => (
                <FeatureCard key={i} feature={f} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* System Architecture Diagram (only for products with one) */}
        <ProductDiagram id={product.id} />

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
                  <div className="bg-white border border-slate-100 rounded-xl p-3 mb-3 h-16 flex items-center justify-center">
                    <img
                      src={p.logo}
                      alt={p.vendor}
                      style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "100%", mixBlendMode: "multiply" }}
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
