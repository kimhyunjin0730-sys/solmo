'use client';
import Image from "next/image";

export default function DataLeakagePreventionPage() {
  const products = [
    {
      title: "xSecuritas Screen Watermark",
      brand: "SOLMO 자체 개발 핵심 솔루션",
      logo: "/images/product/1.png",
      desc: "정보가 처음 노출되는 PC 화면부터 관리하여 화면 캡처, 스마트폰 촬영 등 다양한 경로의 정보 유출을 원천 차단하는 강력한 보안 솔루션입니다.",
      features: [
        "애플리케이션 및 전체 디스플레이 보안 레이어 가동",
        "스마트폰 촬영 추적 및 유출자 식별 워터마크 표시",
        "GS(Good Software) 인증 1등급 획득",
        "Web Console을 통한 사용자/그룹별 간편한 정책 수립"
      ],
      icon: "🖼️"
    },
    {
      title: "Sindoh 보안 복합기 시스템 (uPrint)",
      brand: "스마트오피스 출력 보안",
      logo: "/images/product/9.png",
      desc: "사원증 인증과 uPrint 시스템을 통해 공간 제약 없이 안전하고 편리한 출력 환경을 제공하는 중앙집중형 문서보안 솔루션입니다.",
      features: [
        "사원증(RFID) 태깅 본인 인증 후 출력물 수거 가능",
        "어떤 복합기에서나 자유롭게 출력 가능한 유연성",
        "프린트, 복사, 팩스, 스캔 모든 작업 이력 이미지 저장",
        "방치된 출력물로 인한 정보 유출 위협 원천 차단"
      ],
      icon: "🖨️"
    },
    {
      title: "IBM QRadar SIEM",
      brand: "차세대 위협 분석 및 관제",
      logo: "/images/product/16.png",
      desc: "로그 통합 분석과 네트워크 플로우 분석을 통해 보안 인시던트에 대한 정밀한 상관관계 파악 및 자동화된 대응 체계를 구축합니다.",
      features: [
        "네트워크 플로우 기반 정밀한 상관관계 분석",
        "보안 규제 및 내부 컴플라이언스 통합 관리",
        "우선순위에 따른 지능형 비정상 탐지 시스템",
        "실시간 로그 수집 및 전용 GUI 기반 가시화"
      ],
      icon: "📊"
    },
    {
      title: "DBSAFER DB 접근제어",
      brand: "데이터베이스 통합 감사 솔루션",
      logo: "/images/product/logo (3).png",
      desc: "DB에 대한 중앙 집중적인 접근 통제 및 권한 제어, SQL 감사 로깅을 통해 주요 정보 유출 위험을 원천적으로 차단합니다.",
      features: [
        "가상계정 및 접속 APP 기반 정교한 접근 통제",
        "SQL 명령 및 테이블/컬럼 단위 정밀 권한 제어",
        "전수 감사 로깅 및 고성능 인덱스 기반 신속 검색",
        "정책 준수 현황에 대한 다양한 통계 리포트 제공"
      ],
      icon: "🗄️"
    }
  ];

  return (
    <div className="space-y-32">
      <header className="mb-20">
        <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Data Security</span>
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          소중한 지적 자산, <br />
          <span className="text-blue-600">유출 경로를 모든 지점</span>에서 봉쇄합니다.
        </h2>
        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl">
          기업의 핵심 역량은 데이터에서 나옵니다. 
          화면 촬영부터 종이 문서 출력물까지, 데이터가 이동하고 노출되는 모든 구간에 보안을 입힙니다.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {products.map((prod, idx) => (
          <div key={idx} className="group p-12 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-start mb-10">
               <div className="text-6xl transition-transform group-hover:scale-110 duration-500">{prod.icon}</div>
               <div className="relative w-32 h-12 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={prod.logo} alt={prod.title} fill className="object-contain" />
               </div>
            </div>
            <div className="relative z-10 flex-grow">
              <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2 block">{prod.brand}</span>
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{prod.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 text-[15px]">{prod.desc}</p>
              
              <ul className="space-y-4">
                {prod.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-4 text-sm font-bold text-slate-600">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-500 transition-colors"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-20 border-t border-slate-100 bg-slate-50 -mx-8 px-8 py-32 rounded-[4rem]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
               <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">자체 개발 솔루션 xSecuritas의 독보적 경쟁력</h3>
               <p className="text-slate-500 font-medium leading-relaxed text-lg mb-8 italic">
                  "많은 기업이 화면 보안 장치를 도입하지만, 스마트폰 촬영 앞에서는 무력합니다. 우리는 이 마지막 1%의 빈틈까지 채웁니다."
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                     <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black italic">!</div>
                     <span className="text-sm font-bold text-slate-700">OS 리소스 최소 점유 및 무중단 안정성</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                     <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black italic">!</div>
                     <span className="text-sm font-bold text-slate-700">가상 데스크톱(VDI) 환경 완벽 지원</span>
                  </div>
               </div>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] bg-blue-900 overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
               <div className="absolute inset-x-8 bottom-8 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2 block">Security Concept View</span>
                  <h4 className="text-xl font-bold tracking-tight">지능형 가시성 기반 데이터 유출 방지</h4>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
