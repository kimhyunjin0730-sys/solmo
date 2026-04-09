'use client';

const SCOPES = [
  {
    title: "보안 시스템",
    desc: "UTM · WAF · NAC · DLP · IPS 등 보안 전 영역",
    iconKey: "shield",
  },
  {
    title: "네트워크 장비",
    desc: "L2 · L3 · L4 스위치 및 무선 네트워크 통합 관리",
    iconKey: "network",
  },
  {
    title: "서버 / 스토리지",
    desc: "Windows · Linux 서버 및 데이터 백업·복구 관리",
    iconKey: "server",
  },
  {
    title: "어플리케이션",
    desc: "패치 · 업데이트 · 라이선스 관리 통합 운영",
    iconKey: "app",
  },
];

export default function MaintenancePage() {
  return (
    <div className="space-y-12 pb-10">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Total IT Maintenance
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          24/365, 귀사의 IT 인프라를 <span className="text-blue-600">가장 안정적</span>으로 운영합니다.
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          (주)솔모정보기술은 22년의 신뢰와 전문 인력을 바탕으로 고객사의 통합 인프라를
          선제적으로 관리하고 신속한 장애 대응을 통해 최상의 가용성을 제공합니다.
        </p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center border-y border-slate-100 py-10 sm:py-12">
        <Stat value="22+" label="Years of Experience" />
        <Stat value="47" label="Technical Specialists" />
        <Stat value="50%+" label="Expert / Advanced Engineers" />
        <Stat value="24/7" label="Support Ready" />
      </section>

      {/* IT Outsourcing Diagram — 통합유지보수.png 재현 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10">
        <div className="mb-8">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2 block">
            IT Outsourcing Service
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
            IT 아웃소싱 서비스 구성도
          </h3>
          <p className="text-sm font-medium text-slate-500 leading-relaxed">
            그룹웨어부터 네트워크·보안·서버·어플리케이션까지 전 영역을 한 팀이 통합 관리합니다.
          </p>
        </div>

        <OutsourcingDiagram />
      </section>

      {/* 4 Scope cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {SCOPES.map((s) => (
          <ScopeCard key={s.title} scope={s} />
        ))}
      </section>

      {/* Service Strengths (dark) */}
      <section className="bg-slate-950 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2 block">
            Why Solmo Maintenance
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">
            서비스 강점
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <StrengthCard
              num="01"
              title="Expert Force"
              desc="숙련된 기술진 보유로 어떠한 장애 상황에도 즉각적인 분석과 실질적인 기술 지원을 보장합니다."
            />
            <StrengthCard
              num="02"
              title="Customer Alignment"
              desc="단순 장애 처리를 넘어 정기 점검, 성능 최적화, 보안 업데이트 등 각 기업별 맞춤형 관리를 수행합니다."
            />
            <StrengthCard
              num="03"
              title="Proven Records"
              desc="포스코 그룹사, 새마을금고중앙회 등 대규모 인프라 운영 레퍼런스를 통해 검증된 통합 유지보수 서비스."
            />
            <StrengthCard
              num="04"
              title="24/7 Response"
              desc="긴급 장애 발생 시 24시간 365일 핫라인을 통한 즉시 대응 체계를 운영합니다."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ──────────── Sub-components ──────────── */

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-3 tracking-tighter">
        {value}
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
        {label}
      </p>
    </div>
  );
}

function ScopeCard({ scope }) {
  return (
    <div className="group p-7 bg-white border border-slate-200 rounded-2xl hover:border-[#001F5B] hover:shadow-[0_20px_50px_-20px_rgba(0,31,91,0.25)] transition-all duration-300 relative overflow-hidden">
      <div className="relative w-12 h-12 mb-5 bg-gradient-to-br from-[#001F5B] to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
        <ScopeIcon name={scope.iconKey} />
      </div>
      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mb-2">
        {scope.title}
      </h4>
      <p className="text-xs sm:text-sm font-medium text-slate-500 leading-relaxed">
        {scope.desc}
      </p>
    </div>
  );
}

function ScopeIcon({ name }) {
  const props = {
    width: 22, height: 22, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round",
    className: "text-white",
  };
  switch (name) {
    case "shield":
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "network":
      return <svg {...props}><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M12 12v4"/></svg>;
    case "server":
      return <svg {...props}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
    case "app":
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

function StrengthCard({ num, title, desc }) {
  return (
    <div className="p-7 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-blue-400/30 transition-all">
      <div className="text-2xl font-extrabold text-blue-400 mb-4 tracking-tighter">{num}</div>
      <h4 className="text-base sm:text-lg font-extrabold tracking-tight mb-2">{title}</h4>
      <p className="text-xs sm:text-sm font-medium text-white/50 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ──────────── IT Outsourcing Diagram (SVG) ──────────── */
function OutsourcingDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 1000 540"
        className="w-full h-auto min-w-[700px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="IT 아웃소싱 서비스 구성도"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="centerCircle" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#001F5B" />
            <stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
          <marker id="arrowDark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#001F5B" />
          </marker>
        </defs>

        {/* Center radial glow */}
        <circle cx="500" cy="270" r="200" fill="url(#centerGlow)" />

        {/* ── Center: SOLMO IT Outsourcing ── */}
        <g>
          <circle cx="500" cy="270" r="100" fill="url(#centerCircle)" stroke="#fff" strokeWidth="3" />
          <text x="500" y="255" textAnchor="middle" fontSize="12" fontWeight="700" fill="#93c5fd">SOLMO</text>
          <text x="500" y="280" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">IT 아웃소싱</text>
          <text x="500" y="300" textAnchor="middle" fontSize="11" fontWeight="600" fill="#cbd5e1">통합 운영 센터</text>
        </g>

        {/* Orbital ring */}
        <circle cx="500" cy="270" r="200" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 6" />

        {/* ── 6 satellite categories ── */}
        {/* Top: 그룹웨어 */}
        <g>
          <circle cx="500" cy="70" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="500" y="64" textAnchor="middle" fontSize="22">📋</text>
          <text x="500" y="88" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e40af">그룹웨어</text>
        </g>
        <line x1="500" y1="118" x2="500" y2="170" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Top-right: 보안 시스템 */}
        <g>
          <circle cx="730" cy="150" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="730" y="144" textAnchor="middle" fontSize="22">🛡</text>
          <text x="730" y="168" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e40af">보안 시스템</text>
        </g>
        <line x1="697" y1="184" x2="585" y2="240" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Right: 네트워크 */}
        <g>
          <circle cx="820" cy="270" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="820" y="264" textAnchor="middle" fontSize="22">🌐</text>
          <text x="820" y="288" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e40af">네트워크</text>
        </g>
        <line x1="772" y1="270" x2="600" y2="270" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Bottom-right: 서버·스토리지 */}
        <g>
          <circle cx="730" cy="390" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="730" y="384" textAnchor="middle" fontSize="22">🗄</text>
          <text x="730" y="408" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1e40af">서버 · 스토리지</text>
        </g>
        <line x1="697" y1="356" x2="585" y2="300" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Bottom: 어플리케이션 */}
        <g>
          <circle cx="500" cy="470" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="500" y="464" textAnchor="middle" fontSize="22">⚙️</text>
          <text x="500" y="488" textAnchor="middle" fontSize="10" fontWeight="800" fill="#1e40af">어플리케이션</text>
        </g>
        <line x1="500" y1="422" x2="500" y2="370" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Bottom-left: 백업·복구 */}
        <g>
          <circle cx="270" cy="390" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="270" y="384" textAnchor="middle" fontSize="22">💾</text>
          <text x="270" y="408" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e40af">백업 · 복구</text>
        </g>
        <line x1="303" y1="356" x2="415" y2="300" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Left: 장애 관리 */}
        <g>
          <circle cx="180" cy="270" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="180" y="264" textAnchor="middle" fontSize="22">🚨</text>
          <text x="180" y="288" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e40af">장애 관리</text>
        </g>
        <line x1="228" y1="270" x2="400" y2="270" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Top-left: 변경 관리 */}
        <g>
          <circle cx="270" cy="150" r="48" fill="#fff" stroke="#1e40af" strokeWidth="2" />
          <text x="270" y="144" textAnchor="middle" fontSize="22">🔄</text>
          <text x="270" y="168" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e40af">변경 관리</text>
        </g>
        <line x1="303" y1="184" x2="415" y2="240" stroke="#001F5B" strokeWidth="1.8" strokeDasharray="4 3" />

        {/* Bottom labels */}
        <text x="500" y="528" textAnchor="middle" fontSize="11" fontWeight="700" fill="#64748b">
          단일 운영 센터에서 8개 영역의 인프라를 통합 관제하고 선제적으로 관리합니다.
        </text>
      </svg>
    </div>
  );
}
