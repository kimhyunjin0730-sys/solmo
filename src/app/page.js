'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SOLUTIONS = [
  {
    href: "/solutions/network-security",
    num: "01",
    tag: "Network Security",
    title: "네트워크 보안",
    desc: "차세대 방화벽부터 NAC, 웹방화벽, IAM까지 — 외부 위협을 원천 봉쇄하는 다층 방어 체계.",
    products: ["Fortinet UTM", "PIOLINK WAF", "Genian NAC", "NETAND HIWARE"],
    accent: "from-blue-500 to-blue-700",
    dot: "bg-blue-600",
  },
  {
    href: "/solutions/application-security",
    num: "02",
    tag: "Application Security",
    title: "어플리케이션 보안",
    desc: "단말 패치 자동화부터 문서 보안까지 — 안전한 업무 환경의 기반.",
    products: ["ITStation TA-PRS", "Gaaiho PDF Suite"],
    accent: "from-sky-500 to-sky-700",
    dot: "bg-sky-600",
  },
  {
    href: "/solutions/data-leakage-prevention",
    num: "03",
    tag: "Data Leakage Prevention",
    title: "내부정보유출 보안",
    desc: "스크린워터마크부터 SIEM·DB접근제어까지 — 정보의 모든 접점을 통제합니다.",
    products: ["xSecuritas (자체개발)", "DBSAFER", "IBM QRadar", "Sindoh uPrint"],
    accent: "from-indigo-500 to-indigo-700",
    dot: "bg-indigo-600",
  },
  {
    href: "/solutions/backup-recovery",
    num: "04",
    tag: "Backup & Recovery",
    title: "백업 및 복구",
    desc: "21개 이상 플랫폼 지원, 랜섬웨어 사전 차단을 갖춘 통합 백업·재해복구.",
    products: ["Acronis Cyber Protect"],
    accent: "from-violet-500 to-violet-700",
    dot: "bg-violet-600",
  },
];

const PARTNERS = [
  "Fortinet", "PIOLINK", "Genian", "Acronis", "IBM", "NETAND",
  "Sindoh", "Gaaiho", "DBSAFER", "소만사",
];

const STRENGTHS = [
  {
    num: "01",
    title: "20년 이상의 업력",
    desc: "2002년 설립 이래 금융·공공·대기업 핵심 인프라를 지켜온 검증된 파트너.",
  },
  {
    num: "02",
    title: "47명 전문 엔지니어",
    desc: "특급·고급 기술자가 50% 이상. 대규모 프로젝트의 안정적 수행 역량 보유.",
  },
  {
    num: "03",
    title: "자체 개발 솔루션",
    desc: "기업부설연구소에서 개발한 X-Securitas — GS인증 1등급 스크린워터마크.",
  },
  {
    num: "04",
    title: "37+ 고객사 신뢰",
    desc: "MG새마을금고, POSCO, 한국수력원자력, 서울대 등 산업군별 핵심 기관과 동행.",
  },
];

export default function Home() {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500/10 overflow-x-hidden">

      {/* ───────────────────── HERO ───────────────────── */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center bg-slate-950 overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/office-bg.png"
            alt=""
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-900/40" />
          {/* Aurora glows */}
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 w-full animate-reveal">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase">
                Total IT Security Partner · Since 2002
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5 sm:mb-6">
              미래를 보호하는<br />
              <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                지능형 보안의 기준.
              </span>
            </h1>
            <p className="text-white/60 text-sm sm:text-base font-medium max-w-xl leading-relaxed mb-8">
              (주)솔모정보기술은 20년 이상의 업력과 화이트해커급 기술력을 바탕으로
              귀사의 정보 자산을 가장 안전하게 지켜드립니다.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="#solutions"
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 text-xs tracking-tight"
              >
                솔루션 살펴보기 →
              </Link>
              <Link
                href="/support/contact"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all text-xs tracking-tight"
              >
                전문가 상담 신청
              </Link>
            </div>
          </div>

          {/* Hero KPI strip */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            <HeroKPI value="20+" label="Years of Trust" />
            <HeroKPI value="47" label="Engineers" />
            <HeroKPI value="37+" label="Clients" />
            <HeroKPI value="24/7" label="Support" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* ───────────────────── PARTNER STRIP ───────────────────── */}
      <section className="border-y border-slate-100 bg-white py-8 sm:py-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-6 lg:gap-10 flex-col lg:flex-row">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] shrink-0">
              Trusted Partners
            </div>
            <div className="h-px lg:h-10 lg:w-px bg-slate-200 hidden lg:block"></div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 sm:gap-x-10 gap-y-3">
              {PARTNERS.map((p) => (
                <span
                  key={p}
                  className="text-sm sm:text-base font-bold text-slate-400 hover:text-slate-700 transition-colors tracking-tight"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── SOLUTIONS ───────────────────── */}
      <section id="solutions" className="py-20 sm:py-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-blue-600 font-bold text-[11px] sm:text-xs uppercase tracking-[0.3em] mb-3 block">
                Our Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                보안 솔루션 포트폴리오
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
                글로벌 파트너의 검증된 제품과 솔모의 자체 기술이 결합된 종합 보안 라인업.
              </p>
            </div>
            <Link
              href="#solutions"
              className="hidden lg:inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              전체 솔루션 →
            </Link>
          </div>

          {/* Tab selectors */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-1 px-1">
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveSolution(i)}
                className={`shrink-0 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all ${
                  activeSolution === i
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400"
                }`}
              >
                <span className="opacity-50 mr-2">{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>

          {/* Active solution panel */}
          <div className="grid lg:grid-cols-2 gap-6">
            <SolutionDetail solution={SOLUTIONS[activeSolution]} />
            <div className="grid grid-cols-1 gap-3">
              {SOLUTIONS.map((s, i) => (
                <SolutionMini
                  key={s.title}
                  solution={s}
                  active={activeSolution === i}
                  onClick={() => setActiveSolution(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── SERVICES ───────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-blue-600 font-bold text-[11px] sm:text-xs uppercase tracking-[0.3em] mb-3 block">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                전문 컨설팅 서비스
              </h2>
            </div>
            <Link
              href="/services/vulnerability-analysis"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              전체 서비스 →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            <ServiceCard
              id="01"
              title="보안취약점 분석"
              role="Security Consulting"
              desc="모의해킹 및 소스코드 진단을 통한 잠재적 위협 식별"
              bg="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              href="/services/vulnerability-analysis"
            />
            <ServiceCard
              id="02"
              title="보안프린트 구축"
              role="X-Securitas Solution"
              desc="스크린 및 출력물 워터마크 삽입을 통한 기밀 유출 방지"
              bg="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
              href="/services/secure-printing"
            />
            <ServiceCard
              id="03"
              title="통합 유지보수"
              role="ITO Management"
              desc="시스템 전반의 안정적 운영을 위한 24/365 위탁 관리"
              bg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              href="/services/maintenance"
            />
          </div>
        </div>
      </section>

      {/* ───────────────────── WHY SOLMO ───────────────────── */}
      <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-14 sm:mb-20">
            <span className="text-blue-400 font-bold text-[11px] sm:text-xs uppercase tracking-[0.3em] mb-3 block">
              Why SOLMO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
              왜 솔모정보기술인가
            </h2>
            <p className="text-white/50 text-sm sm:text-base font-medium leading-relaxed">
              20년 업력, 자체 개발력, 그리고 검증된 레퍼런스 — 보안 파트너에게 가장 중요한 세 가지를 모두 갖췄습니다.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STRENGTHS.map((s) => (
              <div
                key={s.num}
                className="p-7 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-5 tracking-tight">
                  {s.num}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 tracking-tight">{s.title}</h3>
                <p className="text-xs sm:text-sm font-medium text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── CLIENTS PREVIEW ───────────────────── */}
      <section id="clients" className="py-20 sm:py-28 bg-white scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-blue-600 font-bold text-[11px] sm:text-xs uppercase tracking-[0.3em] mb-3 block">
                References
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                37개 이상의 기업·기관이<br />솔모를 신뢰합니다
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl leading-relaxed">
                금융, 제조, 공공, 교육·의료 — 산업군별 핵심 레퍼런스와 함께합니다.
              </p>
            </div>
            <Link
              href="/clients"
              className="self-start lg:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-blue-600 transition-all"
            >
              전체 고객사 보기 →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            <ClientGroup
              label="금융"
              tag="Finance"
              count="10"
              clients={["MG새마을금고", "KB금융그룹", "Sh수협은행", "한화생명"]}
            />
            <ClientGroup
              label="기업 / 제조"
              tag="Enterprise"
              count="10"
              clients={["with POSCO", "GS칼텍스", "LG에너지솔루션", "KOREAN AIR"]}
            />
            <ClientGroup
              label="공공"
              tag="Public"
              count="10"
              clients={["한국수력원자력", "국민건강보험", "KoROAD", "BPA 부산항만공사"]}
            />
            <ClientGroup
              label="교육 / 의료"
              tag="Edu / Medical"
              count="7"
              clients={["서울대학교", "성균관대학교", "연세대 의료원", "국립암센터"]}
            />
          </div>
        </div>
      </section>

      {/* ───────────────────── CTA BANNER ───────────────────── */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-[#001F5B] via-[#001F5B] to-indigo-900 rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-blue-300 font-bold text-[11px] sm:text-xs uppercase tracking-[0.3em] mb-4 block">
                Get Started
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                보안 파트너를<br />지금 만나보세요.
              </h2>
              <p className="text-white/60 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                솔루션 도입부터 운영, 컨설팅까지 — 솔모의 전문가가 1:1로 안내해드립니다.
                영업일 기준 24시간 이내 답변드립니다.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                href="/support/contact"
                className="group flex items-center justify-between px-7 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 group-hover:text-white/80 mb-1">
                    Inquiry
                  </div>
                  <div className="text-base tracking-tight">온라인 문의 작성</div>
                </div>
                <span className="text-2xl">→</span>
              </Link>
              <a
                href="tel:024028054"
                className="group flex items-center justify-between px-7 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1">Call</div>
                  <div className="text-base tracking-tight">02-402-8054</div>
                </div>
                <span className="text-2xl">📞</span>
              </a>
              <Link
                href="/support/location"
                className="group flex items-center justify-between px-7 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1">Visit</div>
                  <div className="text-sm tracking-tight">서울 광진구 아차산로 309</div>
                </div>
                <span className="text-2xl">📍</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

/* ──────────────── Sub-components ──────────────── */

function HeroKPI({ value, label }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5">
      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
        {value}
      </div>
      <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
        {label}
      </div>
    </div>
  );
}

function SolutionDetail({ solution }) {
  return (
    <Link
      href={solution.href}
      className="block bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 lg:p-12 hover:border-slate-300 hover:shadow-xl transition-all relative overflow-hidden group"
    >
      <div
        className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${solution.accent} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
      ></div>

      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-3 h-3 rounded-full ${solution.dot}`}></div>
          <span className="text-5xl sm:text-6xl font-extrabold text-slate-100 tracking-tighter">
            {solution.num}
          </span>
        </div>

        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3 block">
          {solution.tag}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
          {solution.title}
        </h3>
        <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed mb-8">
          {solution.desc}
        </p>

        <div className="space-y-2 mb-8">
          {solution.products.map((p) => (
            <div key={p} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <span className={`w-1 h-1 rounded-full ${solution.dot}`}></span>
              {p}
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
          자세히 보기 <span>→</span>
        </div>
      </div>
    </Link>
  );
}

function SolutionMini({ solution, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 sm:p-6 rounded-2xl border transition-all flex items-center gap-4 ${
        active
          ? "bg-slate-900 border-slate-900 text-white"
          : "bg-white border-slate-100 hover:border-slate-300"
      }`}
    >
      <div className={`text-xl sm:text-2xl font-extrabold tracking-tight shrink-0 ${active ? "text-blue-400" : "text-slate-300"}`}>
        {solution.num}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${active ? "text-white/50" : "text-slate-400"}`}>
          {solution.tag}
        </div>
        <div className={`text-sm sm:text-base font-bold tracking-tight ${active ? "text-white" : "text-slate-900"}`}>
          {solution.title}
        </div>
      </div>
      <span className={`text-lg shrink-0 ${active ? "text-blue-400" : "text-slate-300"}`}>→</span>
    </button>
  );
}

function ServiceCard({ id, title, role, desc, bg, href }) {
  return (
    <Link
      href={href}
      className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300 block"
    >
      <img
        src={bg}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="absolute bottom-7 sm:bottom-8 left-7 sm:left-8 right-7 sm:right-8">
        <span className="text-blue-400 font-extrabold text-2xl mb-2 block tracking-tighter">
          {id}
        </span>
        <div className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.25em] mb-2">
          {role}
        </div>
        <h4 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">
          {title}
        </h4>
        <p className="text-white/60 text-xs sm:text-sm font-medium leading-relaxed mb-6">
          {desc}
        </p>
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white text-base group-hover:bg-blue-600 transition-colors">
          →
        </div>
      </div>
    </Link>
  );
}

function ClientGroup({ label, tag, count, clients }) {
  return (
    <Link
      href="/clients"
      className="block bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-7 hover:border-blue-600 hover:bg-white hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{tag}</div>
          <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">{label}</h4>
        </div>
        <span className="text-2xl font-extrabold text-slate-200 group-hover:text-blue-200 transition-colors">{count}</span>
      </div>
      <ul className="space-y-2 mb-4">
        {clients.map((c) => (
          <li key={c} className="text-xs sm:text-sm text-slate-600 font-semibold flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
            {c}
          </li>
        ))}
      </ul>
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
        + 더 보기 →
      </div>
    </Link>
  );
}
