'use client';
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "ta-prs",
    cat: "PMS / FDM",
    name: "TA-PRS · TA-FDM",
    vendor: "ITStation",
    desc: "패치관리(PMS) 및 배포관리(FDM) 솔루션. OS 및 필수 SW의 보안 패치를 중앙에서 자동 관리하여 보안 공백을 최소화합니다.",
    features: [
      "패치 자동/강제 설치 및 전사 보안 수준 통계 수집",
      "OS·어플리케이션 취약점 실시간 대응",
      "좀비 PC화 차단으로 전사 트래픽 안정성 확보",
      "분산 환경 중앙 통합 관리",
    ],
    logo: "/images/product/logo (2).png",
  },
  {
    id: "ta-str",
    cat: "Security Automation",
    name: "TA-STR",
    vendor: "ITStation",
    desc: "보안 이벤트 자동 대응 솔루션. 탐지된 위협에 대해 사전 정의된 시나리오로 자동 차단·격리 작업을 수행합니다.",
    features: [
      "보안 이벤트 자동 대응 워크플로우",
      "기존 보안 솔루션과 연동 통합 제어",
      "정책 기반 자동 격리·차단",
      "대응 결과 리포팅 및 감사 로그",
    ],
    logo: "/images/product/logo (2).png",
  },
  {
    id: "reaqta-edr",
    cat: "EDR",
    name: "ReaQta",
    vendor: "IBM",
    desc: "Endpoint Detection & Response 솔루션. AI 기반 행위 분석으로 알려지지 않은 위협까지 실시간 탐지하고 대응합니다.",
    features: [
      "AI 기반 단말 행위 분석 (NanoOS 기술)",
      "랜섬웨어·APT·제로데이 위협 탐지",
      "자동 격리 및 원클릭 위협 사냥",
      "MITRE ATT&CK 기반 위협 매핑",
    ],
    logo: "/images/product/logo (4).png",
  },
  {
    id: "gaaiho-pdf",
    cat: "Document",
    name: "Gaaiho PDF Suite",
    vendor: "Gaaiho",
    desc: "글로벌 수준의 PDF 전문 편집 및 관리 솔루션. 합리적인 라이선스 비용으로 기업 문서 보안과 생산성을 동시에 제공합니다.",
    features: [
      "PDF 편집(Doc) · 일괄 변환(Converter) · 관리(Manager) 패키지",
      "OCR 엔진 탑재 및 256-bit AES 암호화",
      "전자서명 및 워터마크를 활용한 안전한 문서 배포",
      "Office 연동 및 일괄 변환 자동화",
    ],
    logo: "/images/product/Gaaiho.png",
  },
];

export default function ApplicationSecurityPage() {
  return (
    <div className="space-y-12 pb-20 pt-2 px-5 sm:px-8">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Application Security
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          단말 무결성 유지, <span className="text-blue-600">안전한 업무 환경의 기초.</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
          어플리케이션 취약점 관리부터 EDR, 보안 이벤트 자동 대응, 문서 보안까지 — 효율적이고 안전한 비즈니스 프로세스를 지원합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {SOLUTIONS.map((sol) => (
          <SolutionCard key={sol.id} sol={sol} />
        ))}
      </div>
    </div>
  );
}

function SolutionCard({ sol }) {
  return (
    <Link
      href={`/solutions/products/${sol.id}`}
      className="group bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all flex flex-col"
    >
      <div className="rounded-2xl px-4 py-5 flex items-center justify-center mb-5 h-24 border border-slate-100">
        <img
          src={sol.logo}
          alt={sol.vendor}
          loading="lazy"
          style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "100%", mixBlendMode: "multiply" }}
          className="object-contain"
        />
      </div>

      <div className="mb-2">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
          {sol.cat}
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mt-1 group-hover:text-blue-600 transition-colors">
          {sol.name}
        </h3>
        <p className="text-xs font-bold text-slate-400 mt-1">{sol.vendor}</p>
      </div>

      <p className="text-slate-500 font-medium text-sm leading-relaxed mt-3 mb-5">
        {sol.desc}
      </p>

      <ul className="space-y-2">
        {sol.features.map((f, i) => (
          <li key={i} className="flex gap-2 items-start text-xs font-medium text-slate-600 leading-relaxed">
            <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-blue-600 uppercase tracking-widest">
        <span>자세히 보기</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}

