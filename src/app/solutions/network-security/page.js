'use client';
import Image from "next/image";

export default function NetworkSecurityPage() {
  const solutions = [
    {
      title: "Fortinet UTM (Unified Threat Management)",
      brand: "차세대 방화벽 통합 관리",
      logo: "/images/product/logo.png",
      desc: "Firewall, VPN, IPS, Anti-Virus 등 여러 보안 기능을 단일 장비에서 통합적으로 수행하는 지능형 보안 시스템입니다.",
      features: [
        "ASIC 기반 하드웨어 가속 및 전용 Secure OS 탑재",
        "5,000종 이상의 공격 패턴 실시간 차단",
        "네트워크 유입 악성 파일 실시간 제거",
        "IPSec/SSL VPN 등 강력한 암호화 프로토콜 지원"
      ],
      icon: "🛡️"
    },
    {
      title: "PIOLINK WEBFRONT-K (웹 방화벽)",
      brand: "웹 어플리케이션 보안 특화",
      logo: "/images/product/logo (1).png",
      desc: "웹 서버 취약점 공격 및 해킹을 탐지하고 차단하여 비즈니스의 핵심인 웹 서비스를 안전하게 보호합니다.",
      features: [
        "웹 해킹 및 SQL Injection 등 어플리케이션 취약점 공격 차단",
        "개인정보 및 신용카드 정보의 불법 유출 방지",
        "웹 사이트 위변조 사전 차단",
        "SSL 오프로딩을 통한 웹 서버 부하 경감"
      ],
      icon: "🌐"
    },
    {
      title: "Genian NAC (네트워크 접근 제어)",
      brand: "내부 단말 관리 및 권한 제어",
      logo: "/images/product/genian.png",
      desc: "단말과 사용자를 식별하고 권한에 따라 네트워크 접근을 제어하여 내부 보안 관리 체계를 완성합니다.",
      features: [
        "네트워크 사용 단말의 실명화 및 사용자 식별",
        "방문자 및 협력 업체 네트워크 범위 제한",
        "보안 정책 미준수 단말 접속 차단 및 무결성 검사",
        "BYOD 환경에 최적화된 유무선 통합 관리"
      ],
      icon: "🔒"
    },
    {
      title: "HIWARE 접근통제 및 자산관리",
      brand: "통합 계정 관리 시스템",
      logo: "/images/product/netand.png",
      desc: "주요 정보시스템의 계정 생성부터 삭제까지 전 과정을 관리하고 사용자의 권한과 명령어를 통제합니다.",
      features: [
        "인증되지 않은 접근의 원천 차단",
        "그룹/장비별 명령어 권한 설정 및 실시간 통제",
        "작업 세션에 대한 실시간 모니터링 및 감사",
        "HR/전자결재 시스템과의 유기적 연동"
      ],
      icon: "🔑"
    }
  ];

  return (
    <div className="space-y-32">
      <header className="mb-20">
        <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Solutions</span>
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          강력한 경계 보안으로 <br />
          <span className="text-blue-600">안전한 네트워크 환경</span>을 조성합니다.
        </h2>
        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl">
          솔모정보기술은 Fortinet, PIOLINK, Genian 등 보안 시장의 검증된 솔루션을 기반으로 
          고객사의 환경에 최적화된 네트워크 보안 설계를 제공합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {solutions.map((sol, idx) => (
          <div key={idx} className="group p-12 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-start mb-10">
               <div className="text-6xl transition-transform group-hover:scale-110 duration-500">{sol.icon}</div>
               <div className="relative w-32 h-12 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={sol.logo} alt={sol.title} fill className="object-contain" />
               </div>
            </div>
            <div className="relative z-10 flex-grow">
              <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2 block">{sol.brand}</span>
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{sol.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 text-[15px]">{sol.desc}</p>
              
              <ul className="space-y-4">
                {sol.features.map((feature, fidx) => (
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
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <h3 className="text-3xl font-black text-slate-900">왜 네트워크 보안이 중요한가요?</h3>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="text-blue-600 font-black text-xl mb-4 italic">01</div>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed">외부 위협으로부터 핵심 자산을 원천 보호</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="text-blue-600 font-black text-xl mb-4 italic">02</div>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed">다양한 규정 및 컴플라이언스 준수</p>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="text-blue-600 font-black text-xl mb-4 italic">03</div>
                  <p className="text-sm font-bold text-slate-600 leading-relaxed">안정적인 서비스 비즈니스 연속성 확보</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
