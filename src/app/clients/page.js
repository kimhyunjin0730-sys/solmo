'use client';
import { useState, useMemo } from "react";
import Link from "next/link";

// Sprite sheet: public/images/clients/wall.png  (3183×1732, 5 cols × 8 rows)
// pos: [row, col]  (0-indexed)
const SPRITE_COLS = 5;
const SPRITE_ROWS = 8;
const SPRITE_SRC = "/images/clients/wall.png";

const CLIENTS = [
  // ── 금융 ──
  { name: "MG새마을금고",        nameEn: "MG Saemaul Kumgo",        category: "금융",    pos: [0, 0] },
  { name: "하나손해보험",         nameEn: "Hana Insurance",           category: "금융",    pos: [0, 1] },
  { name: "Sh수협은행",          nameEn: "Suhyup Bank",              category: "금융",    pos: [0, 2] },
  { name: "SC제일은행",          nameEn: "Standard Chartered",       category: "금융",    pos: [0, 3] },
  { name: "KB금융그룹",          nameEn: "KB Financial Group",       category: "금융",    pos: [0, 4] },
  { name: "한화생명",            nameEn: "Hanwha Life",              category: "금융",    pos: [1, 0] },
  { name: "미래에셋자산운용",     nameEn: "Mirae Asset",              category: "금융",    pos: [1, 1] },
  { name: "DGB금융그룹",         nameEn: "DGB Financial Group",      category: "금융",    pos: [1, 2] },
  { name: "NS홈쇼핑",           nameEn: "NS Home Shopping",         category: "금융",    pos: [1, 3] },
  { name: "招商证券",            nameEn: "China Merchants Sec.",     category: "금융",    pos: [1, 4] },

  // ── 기업/제조 ──
  { name: "with POSCO",         nameEn: "POSCO Group",              category: "기업/제조", pos: [2, 0] },
  { name: "GS칼텍스",            nameEn: "GS Caltex",                category: "기업/제조", pos: [2, 1] },
  { name: "GS EPS",             nameEn: "GS EPS",                   category: "기업/제조", pos: [2, 2] },
  { name: "DN오토모티브",         nameEn: "DN Automotive",            category: "기업/제조", pos: [2, 3] },
  { name: "yesco",              nameEn: "yesco",                    category: "기업/제조", pos: [2, 4] },
  { name: "KOREAN AIR",         nameEn: "Korean Air",               category: "기업/제조", pos: [3, 1] },
  { name: "동진쎄미켐",           nameEn: "Dongjin Semichem",         category: "기업/제조", pos: [3, 2] },
  { name: "롯데정보통신",         nameEn: "Lotte Data Comm.",         category: "기업/제조", pos: [3, 3] },
  { name: "POONGSAN",           nameEn: "Poongsan Corp.",           category: "기업/제조", pos: [3, 4] },

  // ── 공공 ──
  { name: "한국수력원자력",       nameEn: "KHNP",                     category: "공공",    pos: [4, 0] },
  { name: "NICE평가정보",        nameEn: "NICE Information",         category: "공공",    pos: [4, 1] },
  { name: "한국정보통신기술협회",  nameEn: "TTA",                      category: "공공",    pos: [4, 2] },
  { name: "KoROAD 도로교통공단", nameEn: "Korea Road Traffic Auth.", category: "공공",    pos: [4, 3] },
  { name: "KRIHS 국토연구원",    nameEn: "KRIHS",                    category: "공공",    pos: [4, 4] },
  { name: "울산항만공사",         nameEn: "Ulsan Port Authority",     category: "공공",    pos: [5, 0] },
  { name: "BPA 부산항만공사",     nameEn: "Busan Port Authority",     category: "공공",    pos: [5, 1] },
  { name: "국민건강보험",         nameEn: "NHIS",                     category: "공공",    pos: [5, 2] },
  { name: "항공안전기술원",       nameEn: "KIAST",                    category: "공공",    pos: [5, 3] },
  { name: "한국기계전자시험연구원", nameEn: "KTC",                     category: "공공",    pos: [5, 4] },

  // ── 교육/병원 ──
  { name: "서울대학교",          nameEn: "Seoul National Univ.",     category: "교육/병원", pos: [6, 0] },
  { name: "성균관대학교",         nameEn: "Sungkyunkwan Univ.",       category: "교육/병원", pos: [6, 1] },
  { name: "연세대학교 의료원",    nameEn: "Yonsei Medical Center",    category: "교육/병원", pos: [6, 2] },
  { name: "용인예술과학대학교",   nameEn: "Yongin Arts & Science",    category: "교육/병원", pos: [6, 3] },
  { name: "삼광의료재단",         nameEn: "Samkwang Medical",         category: "교육/병원", pos: [6, 4] },
  { name: "국립암센터",          nameEn: "National Cancer Center",   category: "교육/병원", pos: [7, 0] },
  { name: "Seegene",            nameEn: "Seegene Inc.",             category: "교육/병원", pos: [7, 1] },
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
    <div className="min-h-screen bg-white pt-24 sm:pt-32 font-sans">
      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="text-blue-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-5 sm:mb-6 block">
              Our References
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-6 sm:mb-8">
              {CLIENTS.length}+ 기업·기관이<br />
              <span className="text-blue-600">솔모를 신뢰합니다.</span>
            </h1>
            <p className="text-slate-500 font-bold text-base sm:text-lg leading-relaxed max-w-2xl">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
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
  const [row, col] = client.pos;

  // Sprite positioning (% based — works for any container size)
  const bgPosX = (col * 100) / (SPRITE_COLS - 1);
  const bgPosY = (row * 100) / (SPRITE_ROWS - 1);

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-4 sm:p-5 flex flex-col items-center relative overflow-hidden">
      {/* Category accent dot */}
      <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${meta.color} opacity-60`}></div>

      {/* Logo (sprite slice) — actual cell ratio is ~3:1 */}
      <div className="w-full px-2 sm:px-3 py-3 sm:py-4 flex items-center justify-center">
        <div
          role="img"
          aria-label={client.name}
          className="w-full aspect-[3/1] grayscale group-hover:grayscale-0 transition-all duration-300"
          style={{
            backgroundImage: `url(${SPRITE_SRC})`,
            backgroundSize: `${SPRITE_COLS * 100}% ${SPRITE_ROWS * 100}%`,
            backgroundPosition: `${bgPosX}% ${bgPosY}%`,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Name */}
      <div className="text-center mt-1 min-h-[40px] flex flex-col justify-center w-full">
        <p className="text-[11px] sm:text-xs font-black text-slate-800 leading-snug tracking-tight truncate px-1">
          {client.name}
        </p>
        <p className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5 leading-tight font-bold truncate px-1">
          {client.nameEn}
        </p>
      </div>

      {/* Bottom category tag (always visible on mobile, fades in on hover for desktop) */}
      <div
        className={`mt-2 text-[8px] sm:text-[9px] font-black uppercase tracking-widest ${meta.text} sm:opacity-0 sm:group-hover:opacity-100 transition-opacity`}
      >
        {meta.tag}
      </div>
    </div>
  );
}
