'use client';
import Image from "next/image";

export default function DataLeakagePreventionPage() {
  const solutions = [
    {
      name: "스크린워터마크 (xSecuritas)",
      desc: "화면 캡처, 촬영, 동영상 유출 등 다양한 경로의 정보 노출을 원천 방지합니다.",
      features: [
        "사용자 정보 기반 워터마크 실시간 오버레이 (GS 1등급 인증)",
        "그룹/사용자 기반 유연한 정책 배포 및 중앙 제어",
        "PC 성능 저하 없는 고성능 보안 엔진 탑재"
      ],
      logo: "/images/product/logo (3).png"
    },
    {
      name: "통합로그관리 (IBM QRadar SIEM)",
      desc: "로그 데이터 분석과 네트워크 플로우를 통합하여 지능형 위협을 탐지합니다.",
      features: [
        "포괄적인 상관관계 분석 및 보안 인시던트 실시간 대응",
        "보안 컴플라이언스 관리 및 리포팅 자동화",
        "활동 기준선 설정 및 비정상 탐지를 통한 위협 가시화"
      ],
      logo: "/images/product/logo (4).png"
    },
    {
      name: "데이터보안 (DBSAFER)",
      desc: "DB 및 시스템 접속 권한 통제와 작업 로깅을 제공하는 통합 보안 감사 솔루션입니다.",
      features: [
        "개인정보 마스킹 및 결재 기반의 명령어 실행 통제",
        "별도 에이전트 설치 없는 Gateway 방식 지원",
        "정교한 SQL 감사 로깅 및 통합 대시보드 제공"
      ],
      logo: "/images/product/dsf.png"
    },
    {
      name: "보안복합기 (Sindoh uPrint)",
      desc: "스마트 오피스 환경에 최적화된 출력 보안 및 이력 관리 시스템입니다.",
      features: [
        "사원증 인증 출력 및 모든 출력물의 이미지/이력 저장",
        "방치 문서 발생 방지 및 통합 드라이버 기반 이동 출력 지원",
        "Web 기반 중앙 집중형 관리 콘솔"
      ],
      logo: "/images/product/1.png"
    }
  ];

  return (
    <div className="space-y-24 pb-40">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Information Leakage Protection</span>
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          내부의 적, 유출 사고의 <br />
          <span className="text-blue-600">완벽한 마침표.</span>
        </h2>
        <p className="text-slate-500 font-bold text-lg leading-relaxed">
          중요 데이터의 생성부터 노출, 출력 단계까지 모든 접점을 완벽하게 관리하여 기업의 유무형 자산을 보호합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((sol, idx) => (
          <section key={idx} className="bg-white rounded-[3rem] border border-slate-100 p-10 shadow-sm hover:shadow-xl transition-all flex flex-col">
            <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center mb-8 h-24">
               <img src={sol.logo} alt={sol.name} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{sol.name}</h3>
            <p className="text-slate-500 font-bold text-sm leading-relaxed mb-10 flex-grow">{sol.desc}</p>
            <div className="space-y-3">
               {sol.features.map((feature, fidx) => (
                  <div key={fidx} className="flex gap-3 items-start">
                     <span className="text-blue-600 font-black mt-0.5">•</span>
                     <span className="text-xs font-bold text-slate-600 leading-relaxed">{feature}</span>
                  </div>
               ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
