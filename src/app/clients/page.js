'use client';
import { useState } from "react";

const CLIENTS = [
  // 금융
  { name: "MG새마을금고",         nameEn: "MG Saemaul Kumgo",       category: "금융",   initial: "MG" },
  { name: "하나손해보험",          nameEn: "Hana Insurance",          category: "금융",   initial: "하나" },
  { name: "Sh수협은행",           nameEn: "Suhyup Bank",             category: "금융",   initial: "Sh" },
  { name: "SC제일은행",           nameEn: "Standard Chartered",      category: "금융",   initial: "SC" },
  { name: "KB금융그룹",           nameEn: "KB Financial Group",      category: "금융",   initial: "KB" },
  { name: "한화생명",             nameEn: "Hanwha Life",             category: "금융",   initial: "한화" },
  { name: "미래에셋자산운용",      nameEn: "Mirae Asset",             category: "금융",   initial: "MA" },
  { name: "DGB금융그룹",          nameEn: "DGB Financial",           category: "금융",   initial: "DGB" },
  { name: "NS홈쇼핑",            nameEn: "NS Home Shopping",        category: "금융",   initial: "NS" },
  { name: "中国招商证券",          nameEn: "China Merchants Sec.",    category: "금융",   initial: "招商" },

  // 기업/제조
  { name: "with POSCO",          nameEn: "POSCO Group",             category: "기업/제조", initial: "POSCO" },
  { name: "GS칼텍스",             nameEn: "GS Caltex",               category: "기업/제조", initial: "GS" },
  { name: "GS EPS",              nameEn: "GS EPS",                  category: "기업/제조", initial: "GS" },
  { name: "DN오토모티브",          nameEn: "DN Automotive",           category: "기업/제조", initial: "DN" },
  { name: "yesco",               nameEn: "yesco",                   category: "기업/제조", initial: "YE" },
  { name: "LG에너지솔루션",        nameEn: "LG Energy Solution",      category: "기업/제조", initial: "LG" },
  { name: "KOREAN AIR",          nameEn: "Korean Air",              category: "기업/제조", initial: "KA" },
  { name: "동진쎄미켐",           nameEn: "Dongjin Semichem",        category: "기업/제조", initial: "DJ" },
  { name: "롯데정보통신",          nameEn: "Lotte Data Communication",category: "기업/제조", initial: "롯데" },
  { name: "POONGSAN",            nameEn: "Poongsan Corp.",          category: "기업/제조", initial: "PS" },

  // 공공
  { name: "한국수력원자력",        nameEn: "KHNP",                    category: "공공",   initial: "한수원" },
  { name: "NICE평가정보",         nameEn: "NICE Information",        category: "공공",   initial: "NICE" },
  { name: "한국정보통신기술협회",   nameEn: "TTA",                     category: "공공",   initial: "TTA" },
  { name: "KoROAD 도로교통공단",  nameEn: "Korea Road Traffic Auth.",category: "공공",   initial: "KR" },
  { name: "KRIHS 국토연구원",     nameEn: "KRIHS",                   category: "공공",   initial: "KRIHS" },
  { name: "울산항만공사",          nameEn: "Ulsan Port Authority",    category: "공공",   initial: "UPA" },
  { name: "BPA 부산항만공사",      nameEn: "Busan Port Authority",    category: "공공",   initial: "BPA" },
  { name: "국민건강보험",          nameEn: "NHIS",                    category: "공공",   initial: "건보" },
  { name: "항공안전기술원",        nameEn: "KIAST",                   category: "공공",   initial: "KIAST" },
  { name: "한국기계전자시험연구원", nameEn: "KTC",                     category: "공공",   initial: "KTC" },

  // 교육/병원
  { name: "서울대학교",           nameEn: "Seoul National Univ.",    category: "교육/병원", initial: "SNU" },
  { name: "성균관대학교",          nameEn: "Sungkyunkwan Univ.",      category: "교육/병원", initial: "성균관" },
  { name: "연세대학교 의료원",     nameEn: "Yonsei Medical Center",   category: "교육/병원", initial: "연세" },
  { name: "용인예술과학대학교",    nameEn: "Yongin Arts & Science",   category: "교육/병원", initial: "용인" },
  { name: "삼광의료재단",          nameEn: "Samkwang Medical",        category: "교육/병원", initial: "삼광" },
  { name: "국립암센터",           nameEn: "National Cancer Center",  category: "교육/병원", initial: "NCC" },
  { name: "Seegene",             nameEn: "Seegene Inc.",            category: "교육/병원", initial: "SG" },
];

const CATEGORIES = ["전체", "금융", "기업/제조", "공공", "교육/병원"];

const CATEGORY_COLOR = {
  "금융":    "bg-blue-50   text-blue-600   border-blue-100",
  "기업/제조":"bg-indigo-50 text-indigo-600 border-indigo-100",
  "공공":    "bg-sky-50    text-sky-600    border-sky-100",
  "교육/병원":"bg-violet-50 text-violet-600 border-violet-100",
};

const INITIAL_BG = {
  "금융":    "bg-blue-600",
  "기업/제조":"bg-indigo-600",
  "공공":    "bg-sky-600",
  "교육/병원":"bg-violet-600",
};

export default function ClientsPage() {
  const [active, setActive] = useState("전체");

  const filtered = active === "전체" ? CLIENTS : CLIENTS.filter(c => c.category === active);

  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === "전체" ? CLIENTS.length : CLIENTS.filter(c => c.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <section className="bg-slate-900 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.4em] mb-4 block">
            References
          </span>
          <h1 className="text-5xl font-black text-white tracking-tight mb-4">
            주요 고객사
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            금융·기업·공공·교육 등 다양한 산업군에서 {CLIENTS.length}개 이상의 고객사와 함께하고 있습니다.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-8 bg-slate-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                  active === cat
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800"
                }`}
              >
                {cat}
                <span className={`text-xs font-black px-1.5 py-0.5 rounded-full ${
                  active === cat ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  {counts[cat]}
                </span>
              </button>
            ))}
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map(client => (
              <LogoCard key={client.name} client={client} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-slate-400 text-sm font-medium">
              해당 카테고리의 고객사가 없습니다.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function LogoCard({ client }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-200 p-5 flex flex-col items-center gap-3 cursor-default">
      {/* Logo placeholder */}
      <div className={`w-14 h-14 rounded-xl ${INITIAL_BG[client.category]} flex items-center justify-center`}>
        <span className="text-white font-black text-xs tracking-tight text-center leading-tight">
          {client.initial}
        </span>
      </div>

      {/* Name */}
      <div className="text-center">
        <p className="text-xs font-bold text-slate-800 leading-snug">{client.name}</p>
        <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{client.nameEn}</p>
      </div>

      {/* Category badge */}
      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${CATEGORY_COLOR[client.category]}`}>
        {client.category}
      </span>
    </div>
  );
}
