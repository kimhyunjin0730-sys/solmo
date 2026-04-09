'use client';

const SOLUTIONS = [
  {
    id: "xsecuritas",
    cat: "Watermark",
    name: "X-Securitas",
    vendor: "SOLMO (자체 개발)",
    badge: "GS 1등급",
    desc: "사용자 정보 기반 워터마크를 화면에 실시간 오버레이하여 화면 캡처·촬영·동영상 유출 등 다양한 경로의 정보 노출을 원천 방지합니다.",
    features: [
      "GS 1등급 인증, 한국정보통신기술협회(TTA) 검증",
      "그룹/사용자 기반 유연한 정책 배포 및 중앙 제어",
      "PC 성능 저하 없는 고성능 보안 엔진",
      "AD/SSO 연동 및 에이전트 제어",
    ],
    logo: "/images/product/logo (3).png",
  },
  {
    id: "qradar",
    cat: "SIEM / SOAR",
    name: "IBM QRadar",
    vendor: "IBM",
    desc: "통합로그관리(SIEM)와 보안 오케스트레이션 자동화·응답(SOAR)을 결합한 차세대 보안 인텔리전스 플랫폼.",
    features: [
      "포괄적인 상관관계 분석 및 보안 인시던트 실시간 대응",
      "보안 컴플라이언스 관리 및 리포팅 자동화",
      "활동 기준선 설정 및 비정상 탐지를 통한 위협 가시화",
      "SOAR 자동화 플레이북 기반 신속 대응",
    ],
    logo: "/images/product/logo (4).png",
  },
  {
    id: "dbsafer",
    cat: "DB Access Control",
    name: "DBSafer",
    vendor: "PNP Secure",
    desc: "DB 및 시스템 접속 권한 통제와 작업 로깅을 제공하는 통합 보안 감사 솔루션. Gateway 방식으로 별도 에이전트 설치가 불필요합니다.",
    features: [
      "개인정보 마스킹 및 결재 기반의 명령어 실행 통제",
      "별도 에이전트 설치 없는 Gateway 방식 지원",
      "정교한 SQL 감사 로깅 및 통합 대시보드",
      "그룹/장비별 명령어 권한 설정",
    ],
    logo: "/images/product/dsf.png",
  },
  {
    id: "privacy-i",
    cat: "Endpoint DLP",
    name: "Privacy-i",
    vendor: "소만사",
    desc: "단말 데이터 검출 및 관리(E-DLP) 솔루션. 개인정보 및 기밀 파일이 단말에 어떻게 저장·이동되는지 식별하고 통제합니다.",
    features: [
      "단말 내 개인정보·기밀 파일 자동 스캔",
      "USB·이메일·메신저 등 외부 전송 통제",
      "정책 위반 시 실시간 차단 및 알림",
      "감사 로그 및 컴플라이언스 리포트",
    ],
    logo: "/images/product/6.png",
  },
  {
    id: "hiware",
    cat: "IAM",
    name: "HIWARE 6",
    vendor: "넷앤드 (NETAND)",
    desc: "통합시스템 접근통제 및 계정권한 관리 솔루션. 운영 시스템 계정의 Life-cycle 관리부터 명령어 통제까지.",
    features: [
      "미등록 IP/MAC 접근 원천 차단",
      "2-Factor 인증 및 권한 분배",
      "그룹/장비별 명령어 권한 설정",
      "실시간 세션 모니터링 및 감사",
    ],
    logo: "/images/product/netand.png",
  },
  {
    id: "vormetric",
    cat: "Encryption",
    name: "Vormetric",
    vendor: "Thales (탈레스)",
    desc: "정형/비정형 데이터 암호화 솔루션. DB·파일·클라우드 데이터를 투명하게 암호화하여 컴플라이언스 요구사항에 대응합니다.",
    features: [
      "DB · 파일 · 클라우드 통합 암호화",
      "KMS 키 중앙 관리 및 정책 통제",
      "투명한 암호화로 어플리케이션 변경 불필요",
      "GDPR · PCI-DSS · 개인정보보호법 대응",
    ],
    logo: "/images/product/sdfsdf.png",
  },
  {
    id: "uprint",
    cat: "Print Security",
    name: "Sindoh uPrint",
    vendor: "신도리코",
    desc: "스마트 오피스 환경에 최적화된 출력 보안 및 이력 관리 시스템. 사원증 인증 출력으로 방치 문서를 원천 차단합니다.",
    features: [
      "사원증 인증 출력 및 모든 출력물 이미지/이력 저장",
      "방치 문서 발생 방지 및 통합 드라이버 이동 출력",
      "Web 기반 중앙 집중형 관리 콘솔",
      "MPS 4.0 클라우드 복합기 환경 지원",
    ],
    logo: "/images/product/1.png",
  },
  {
    id: "blancco",
    cat: "Data Eraser",
    name: "Blancco Drive Eraser",
    vendor: "Blancco",
    desc: "글로벌 표준의 데이터 완전 삭제 솔루션. 폐기 자산의 데이터를 복원 불가능하게 영구 삭제하고 인증서로 증빙합니다.",
    features: [
      "디스크 · SSD · 모바일 데이터 영구 삭제",
      "국제 표준(NIST, DoD) 삭제 알고리즘",
      "삭제 인증서 자동 발급 및 보관",
      "원격 일괄 삭제 워크플로우",
    ],
    logo: "/images/product/16.png",
  },
];

export default function DataLeakagePreventionPage() {
  return (
    <div className="space-y-12 pb-20 pt-2 px-5 sm:px-8">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Information Leakage Protection
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          내부의 적, 유출 사고의 <span className="text-blue-600">완벽한 마침표.</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
          중요 데이터의 생성부터 노출, 출력, 폐기까지 모든 접점을 완벽하게 관리하여 기업의 유무형 자산을 보호합니다.
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

      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
            {sol.cat}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mt-1">
            {sol.name}
          </h3>
          <p className="text-xs font-bold text-slate-400 mt-1">{sol.vendor}</p>
        </div>
        {sol.badge && (
          <span className="shrink-0 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[9px] font-black uppercase tracking-wider text-emerald-700">
            {sol.badge}
          </span>
        )}
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
            내부정보유출 보안 도입 상담
          </h3>
          <p className="text-white/60 font-medium text-sm">
            X-Securitas 자체 개발 솔루션 등 통합 컨설팅을 제공합니다.
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
