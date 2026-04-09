'use client';

const SOLUTIONS = [
  {
    id: "acronis",
    cat: "Backup & DR",
    name: "Acronis Cyber Protect",
    vendor: "Acronis",
    desc: "하이브리드 IT 환경에 최적화된 시스템 이미지 백업 및 재해 복구 솔루션. 21개 이상의 플랫폼을 지원하며 랜섬웨어 차단 기능을 내장합니다.",
    features: [
      "21개 이상 플랫폼 완벽 지원 (Win/Linux/VM/Cloud)",
      "랜섬웨어 실시간 감지 및 사전 차단",
      "블록체인 기반 데이터 무결성 공증",
      "강력한 데이터 중복 제거 엔진",
      "인스턴트 리스토어 — 단 몇 초만에 복구",
      "통합 웹 콘솔 중앙 집중 관리",
    ],
    logo: "/images/product/16.png",
  },
  {
    id: "blancco",
    cat: "Data Eraser",
    name: "Blancco Drive Eraser",
    vendor: "Blancco",
    desc: "글로벌 표준의 데이터 완전 삭제 솔루션. 백업·복구의 끝단에서 폐기 자산의 데이터를 복원 불가능하게 영구 삭제하고 인증서로 증빙합니다.",
    features: [
      "디스크 · SSD · 모바일 데이터 영구 삭제",
      "국제 표준(NIST 800-88, DoD 5220.22-M) 준수",
      "삭제 인증서 자동 발급 및 보관",
      "원격 일괄 삭제 워크플로우",
      "GDPR · 개인정보보호법 폐기 의무 대응",
      "감사 로그 및 컴플라이언스 리포트",
    ],
    logo: "/images/product/16.png",
  },
];

export default function BackupRecoveryPage() {
  return (
    <div className="space-y-12 pb-20 pt-2 px-5 sm:px-8">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Backup & Recovery
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          재해로부터 비즈니스를 <span className="text-blue-600">안전하게 구원하다.</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
          데이터 백업·복구부터 안전한 폐기까지 — 데이터 라이프사이클의 마지막 단계를 책임집니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {SOLUTIONS.map((sol) => (
          <SolutionCard key={sol.id} sol={sol} />
        ))}
      </div>

      <ContactCTA />
    </div>
  );
}

function SolutionCard({ sol }) {
  return (
    <section className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all flex flex-col">
      <div className="bg-slate-50 rounded-2xl px-4 py-5 flex items-center justify-center mb-5 h-24">
        <img
          src={sol.logo}
          alt={sol.vendor}
          loading="lazy"
          style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "100%" }}
          className="object-contain"
        />
      </div>

      <div className="mb-2">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
          {sol.cat}
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mt-1">
          {sol.name}
        </h3>
        <p className="text-xs font-bold text-slate-400 mt-1">{sol.vendor}</p>
      </div>

      <p className="text-slate-500 font-medium text-sm leading-relaxed mt-3 mb-5">
        {sol.desc}
      </p>

      <ul className="space-y-2 mt-auto">
        {sol.features.map((f, i) => (
          <li key={i} className="flex gap-2 items-start text-xs font-medium text-slate-600 leading-relaxed">
            <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2 block">
            Get in Touch
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
            백업 · 복구 도입 상담
          </h3>
          <p className="text-white/60 font-medium text-sm">
            귀사 환경에 최적화된 백업·DR 설계를 무료로 제공합니다.
          </p>
        </div>
        <a
          href="/support/contact"
          className="self-start lg:self-auto shrink-0 px-7 py-4 bg-white text-slate-900 rounded-full text-xs font-black tracking-wider hover:bg-blue-500 hover:text-white transition-all"
        >
          상담 신청 →
        </a>
      </div>
    </section>
  );
}
