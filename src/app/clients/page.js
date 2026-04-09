'use client';
import { useState, useMemo } from "react";
import Link from "next/link";

// Local logo files at /public/images/client/그림{N}.png
const LOGO = (n) => `/images/client/${encodeURIComponent(`그림${n}.png`)}`;

const CLIENTS = [
  // ── 금융 ──
  { name: "MG새마을금고",        nameEn: "MG Saemaul Kumgo",        category: "금융",    image: LOGO(5) },
  { name: "하나손해보험",         nameEn: "Hana Insurance",           category: "금융",    image: LOGO(6) },
  { name: "Sh수협은행",          nameEn: "Suhyup Bank",              category: "금융",    image: LOGO(7) },
  { name: "SC제일은행",          nameEn: "Standard Chartered",       category: "금융",    image: LOGO(8) },
  { name: "KB금융그룹",          nameEn: "KB Financial Group",       category: "금융",    image: LOGO(9) },
  { name: "한화생명",            nameEn: "Hanwha Life",              category: "금융",    image: LOGO(10) },
  { name: "미래에셋자산운용",     nameEn: "Mirae Asset",              category: "금융",    image: LOGO(11) },
  { name: "DGB금융그룹",         nameEn: "DGB Financial Group",      category: "금융",    image: LOGO(12) },
  { name: "NS홈쇼핑",           nameEn: "NS Home Shopping",         category: "금융",    image: LOGO(13) },
  { name: "招商证券",            nameEn: "China Merchants Sec.",     category: "금융",    image: LOGO(14) },

  // ── 기업/제조 ──
  { name: "with POSCO",         nameEn: "POSCO Group",              category: "기업/제조", image: LOGO(15) },
  { name: "GS칼텍스",            nameEn: "GS Caltex",                category: "기업/제조", image: LOGO(16) },
  { name: "GS EPS",             nameEn: "GS EPS",                   category: "기업/제조", image: LOGO(17) },
  { name: "DN오토모티브",         nameEn: "DN Automotive",            category: "기업/제조", image: LOGO(18) },
  { name: "yesco",              nameEn: "yesco",                    category: "기업/제조", image: LOGO(19) },
  { name: "LG에너지솔루션",       nameEn: "LG Energy Solution",       category: "기업/제조", image: LOGO(20) },
  { name: "KOREAN AIR",         nameEn: "Korean Air",               category: "기업/제조", image: LOGO(21) },
  { name: "동진쎄미켐",           nameEn: "Dongjin Semichem",         category: "기업/제조", image: LOGO(22) },
  { name: "롯데정보통신",         nameEn: "Lotte Data Comm.",         category: "기업/제조", image: LOGO(23) },
  { name: "POONGSAN",           nameEn: "Poongsan Corp.",           category: "기업/제조", image: LOGO(24) },

  // ── 공공 ──
  { name: "한국수력원자력",       nameEn: "KHNP",                     category: "공공",    image: LOGO(25) },
  { name: "NICE평가정보",        nameEn: "NICE Information",         category: "공공",    image: LOGO(26) },
  { name: "한국정보통신기술협회",  nameEn: "TTA",                      category: "공공",    image: LOGO(27) },
  { name: "KoROAD 도로교통공단", nameEn: "Korea Road Traffic Auth.", category: "공공",    image: LOGO(28) },
  { name: "KRIHS 국토연구원",    nameEn: "KRIHS",                    category: "공공",    image: LOGO(29) },
  { name: "울산항만공사",         nameEn: "Ulsan Port Authority",     category: "공공",    image: LOGO(30) },
  { name: "BPA 부산항만공사",     nameEn: "Busan Port Authority",     category: "공공",    image: LOGO(31) },
  { name: "국민건강보험",         nameEn: "NHIS",                     category: "공공",    image: LOGO(32) },
  { name: "항공안전기술원",       nameEn: "KIAST",                    category: "공공",    image: LOGO(33) },
  { name: "한국기계전자시험연구원", nameEn: "KTC",                     category: "공공",    image: LOGO(34) },

  // ── 교육/병원 ──
  { name: "서울대학교",          nameEn: "Seoul National Univ.",     category: "교육/병원", image: LOGO(35) },
  { name: "성균관대학교",         nameEn: "Sungkyunkwan Univ.",       category: "교육/병원", image: LOGO(36) },
  { name: "연세대학교 의료원",    nameEn: "Yonsei Medical Center",    category: "교육/병원", image: LOGO(37) },
  { name: "용인예술과학대학교",   nameEn: "Yongin Arts & Science",    category: "교육/병원", image: LOGO(38) },
  { name: "삼광의료재단",         nameEn: "Samkwang Medical",         category: "교육/병원", image: LOGO(39) },
  { name: "국립암센터",          nameEn: "National Cancer Center",   category: "교육/병원", image: LOGO(40) },
  { name: "Seegene",            nameEn: "Seegene Inc.",             category: "교육/병원", image: LOGO(41) },
];

const CATEGORIES = ["전체", "금융", "기업/제조", "공공", "교육/병원"];

const CATEGORY_META = {
  "금융":     { color: "bg-blue-600",   ring: "ring-blue-600",   text: "text-blue-600",   bg: "bg-blue-50",   tag: "Finance" },
  "기업/제조": { color: "bg-indigo-600", ring: "ring-indigo-600", text: "text-indigo-600", bg: "bg-indigo-50", tag: "Enterprise" },
  "공공":     { color: "bg-sky-600",    ring: "ring-sky-600",    text: "text-sky-600",    bg: "bg-sky-50",    tag: "Public" },
  "교육/병원": { color: "bg-violet-600", ring: "ring-violet-600", text: "text-violet-600", bg: "bg-violet-50", tag: "Edu/Medical" },
};

export default function ClientsPage() {
  const [active, setActive] = useState("전체");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () =>
      CATEGORIES.reduce((acc, cat) => {
        acc[cat] = cat === "전체" ? CLIENTS.length : CLIENTS.filter((c) => c.category === cat).length;
        return acc;
      }, {}),
    []
  );

  const filtered = useMemo(() => {
    const base = active === "전체" ? CLIENTS : CLIENTS.filter((c) => c.category === active);
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.nameEn.toLowerCase().includes(q)
    );
  }, [active, query]);

  return (
    <div className="min-h-screen bg-white pt-20 font-sans">
      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 pb-8 sm:pb-10 pt-6 sm:pt-8">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
              Our References
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
              {CLIENTS.length}+ 기업·기관이 <span className="text-blue-600">솔모를 신뢰합니다.</span>
            </h1>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
              금융, 제조, 공공, 교육·의료에 이르는 다양한 산업군의 핵심 기관과 함께
              검증된 보안 솔루션을 구축해 왔습니다.
            </p>
          </div>

          {/* KPI strip */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            <KPI big={`${CLIENTS.length}+`} label="고객사" />
            <KPI big="20+" label="업력 (년)" />
            <KPI big={CATEGORIES.length - 1 + ""} label="산업군" />
            <KPI big="24/7" label="기술 지원" />
          </div>
        </div>
      </section>

      {/* ─────────────────────── INDUSTRY BREAKDOWN ─────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 sm:mb-12 gap-4 lg:gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-3 block">
                Industry Distribution
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                산업군별 분포
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-400 max-w-md">
              산업군별 누적 고객사 비중. 각 영역을 탭하면 해당 카테고리로 필터링됩니다.
            </p>
          </div>

          {/* Stacked horizontal bar */}
          <button
            type="button"
            className="w-full flex h-4 rounded-full overflow-hidden mb-8 cursor-pointer"
            aria-label="reset filter"
          >
            {CATEGORIES.slice(1).map((cat) => {
              const pct = (counts[cat] / CLIENTS.length) * 100;
              return (
                <div
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`${CATEGORY_META[cat].color} hover:brightness-110 transition-all`}
                  style={{ width: `${pct}%` }}
                  title={`${cat} ${counts[cat]}곳`}
                />
              );
            })}
          </button>

          {/* Distribution cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.slice(1).map((cat) => {
              const pct = ((counts[cat] / CLIENTS.length) * 100).toFixed(0);
              const meta = CATEGORY_META[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-left p-6 bg-white rounded-2xl border transition-all ${
                    active === cat
                      ? "border-slate-900 shadow-lg -translate-y-1"
                      : "border-slate-100 hover:border-slate-300 hover:-translate-y-1"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${meta.color}`}></div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${meta.text}`}>
                      {meta.tag}
                    </span>
                  </div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight mb-1">
                    {counts[cat]}
                    <span className="text-sm text-slate-300 ml-1">곳</span>
                  </div>
                  <div className="text-xs font-bold text-slate-400">
                    {cat} · 전체의 {pct}%
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────── FILTER + GRID ─────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-6 mb-10 sm:mb-12">
          <div className="flex flex-wrap gap-2 -mx-1 px-1 overflow-x-auto lg:overflow-visible">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider border transition-all ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800"
                  }`}
                >
                  {cat}
                  <span
                    className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative lg:w-72 shrink-0">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="고객사 검색..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-full text-sm font-bold text-slate-900 placeholder:text-slate-300 outline-none focus:border-blue-600 focus:bg-white transition-all"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-sm">
              🔍
            </span>
          </div>
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            <span className="text-slate-900">{filtered.length}</span> / {CLIENTS.length} 결과
          </p>
          {(active !== "전체" || query) && (
            <button
              onClick={() => {
                setActive("전체");
                setQuery("");
              }}
              className="text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors"
            >
              필터 초기화 ↻
            </button>
          )}
        </div>

        {/* Logo Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((client) => (
              <LogoCard key={client.name} client={client} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4 opacity-20">🔍</div>
            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
              "{query}" 에 해당하는 고객사가 없습니다.
            </p>
          </div>
        )}
      </section>

      {/* ─────────────────────── CTA ─────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3 block">
                Become Our Partner
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3">
                다음 레퍼런스의 주인공이 되어 주세요.
              </h3>
              <p className="text-sm sm:text-base text-white/50 font-bold">
                보안 컨설팅 · 솔루션 도입 · 유지보수 — 솔모가 함께합니다.
              </p>
            </div>
            <Link
              href="/support/contact"
              className="self-start lg:self-auto shrink-0 px-7 sm:px-8 py-4 sm:py-5 bg-white text-slate-900 rounded-full text-xs sm:text-sm font-black tracking-wider hover:bg-blue-500 hover:text-white transition-all"
            >
              도입 문의하기 →
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}

/* ──────────────── Sub-components ──────────────── */

function KPI({ big, label }) {
  return (
    <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl">
      <div className="text-3xl font-black text-slate-900 tracking-tighter mb-1">{big}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</div>
    </div>
  );
}

function LogoCard({ client }) {
  const meta = CATEGORY_META[client.category];

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-4 sm:p-6 flex flex-col items-center relative">
      {/* Category accent dot */}
      <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${meta.color} opacity-60`}></div>

      {/* Logo — fixed-height frame, mix-blend-multiply hides white background */}
      <div className="w-full h-24 sm:h-28 flex items-center justify-center mb-4">
        <img
          src={client.image}
          alt={client.name}
          loading="lazy"
          width={0}
          height={0}
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 18vw"
          style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%", mixBlendMode: "multiply" }}
          className="object-contain"
        />
      </div>

      {/* Name — wrap, never truncate */}
      <div className="text-center min-h-[48px] flex flex-col justify-center w-full">
        <p className="text-sm sm:text-base font-black text-slate-900 leading-snug tracking-tight px-1 break-keep">
          {client.name}
        </p>
        <p className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-tight font-bold px-1 break-keep">
          {client.nameEn}
        </p>
      </div>

      {/* Bottom category tag */}
      <div
        className={`mt-3 text-[9px] sm:text-[10px] font-black uppercase tracking-widest ${meta.text}`}
      >
        {meta.tag}
      </div>
    </div>
  );
}
