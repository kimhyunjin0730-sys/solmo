'use client';
import { useState } from "react";
import Image from "next/image";

const products = [
  {
    id: "utm",
    title: "Fortinet 통합위협관리 (UTM)",
    tagline: "Firewall, VPN, IPS 등 통합 차세대 보안 시스템",
    summary: "Firewall, VPN, IPS 등 여러 보안 기능을 단일 장비에서 통합적으로 수행하는 차세대 보안 시스템입니다.",
    features: [
      { name: "차세대 보안", desc: "ASIC 기반 가속화 하드웨어 및 전용 Secure OS 탑재" },
      { name: "침입 차단", desc: "5,000종 이상의 공격 패턴 실시간 차단" },
      { name: "안티바이러스", desc: "네트워크 유입 악성 파일 실시간 제거 및 업데이트" },
      { name: "익명성/VPN", desc: "다양한 암호화 프로토콜 지원 및 웹 모드 제공" }
    ],
    details: [
      "하드웨어 가속: ASIC-accelerated 기반 보안 전용 OS",
      "강력한 방어: 5,000종류 이상의 공격 패턴 및 DOS/DDOS 차단",
      "사전 방역: FortiResponse를 통한 최신 위협 자동 업데이트",
      "접근성: 간단한 웹 브라우저 기반 VPN(SSL/IPSec) 지원"
    ],
    color: "from-red-600 to-red-800"
  },
  {
    id: "waf",
    title: "PIOLINK WEBFRONT-K",
    tagline: "웹 서버 취약점 공격 및 해킹 탐지·차단 특화 솔루션",
    summary: "웹 서버에 존재하는 보안 취약점과 웹 공격을 탐지하고 이를 차단하기 위해 도입된 웹 어플리케이션 보안 특화 솔루션입니다.",
    features: [
      { name: "공격 차단", desc: "웹 해킹 및 어플리케이션 취약점 실시간 차단" },
      { name: "정보 유출 방지", desc: "개인 정보 및 신용카드 정보 불법 유출 방지" },
      { name: "변조 차단", desc: "웹 사이트 내용 임의 변조 사전 방지" },
      { name: "부하 분산", desc: "서버 유입 트래픽 효율적 분산 처리(L7)" }
    ],
    details: [
      "웹 서비스 보호: 외부 공격으로부터 핵심 웹 인프라 보호",
      "이중화 구성: 서비스 무중단을 위한 고가용성(HA) 환경 구축",
      "SSL 오프로딩: 암호화 트래픽 전담 처리를 통한 서버 부하 경감",
      "법적 근거: 보안 위반 시 대응을 위한 근거 확보"
    ],
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: "ndlp",
    title: "Network DLP - Hyboost",
    tagline: "외부 발송 채널 상시 감시 및 정보 유출 방지",
    summary: "이메일, 메신저, 웹하드 등 외부로 발송되는 채널을 모니터링하여 내부 정보 유출을 방지하는 보안 서비스입니다.",
    features: [
      { name: "통합 모니터링", desc: "이메일, 메신저, 웹하드, SNS 상시 감사" },
      { name: "로깅 수행", desc: "제목, 본문, 첨부파일 내용까지 상세 로깅" },
      { name: "키워드 검색", desc: "개인정보 및 특정 키워드 실시간 검출" },
      { name: "실시간 통보", desc: "유출 시도 탐지 시 즉시 관리자 통보" }
    ],
    details: [
      "보안성 증대: 임직원 및 협력체 모니터링 강화",
      "법적 준수: 개인정보보호법 및 시행령 완벽 준수",
      "모듈 구성: Server와 Engine 분리 구성을 통한 안정성",
      "배치: 네트워크 백본 스위치 레벨에서 전체 트래픽 감시"
    ],
    color: "from-slate-700 to-slate-900"
  },
  {
    id: "webkeeper",
    title: "WebkeeperSG™",
    tagline: "유해사이트 차단 및 인터넷 사용 통제",
    summary: "임직원의 인터넷 사용을 통제하고 유해 사이트를 차단하여 업무 생산성을 높이고 시스템 안정성을 확보합니다.",
    features: [
      { name: "사이트 통제", desc: "업무용/비업무용 웹사이트 명확한 정책 통제" },
      { name: "HTTPS 통제", desc: "암호화된 접속에 대해서도 정교한 필터링" },
      { name: "트래픽 제어", desc: "P2P, 웹하드 등 대역폭 점유 프로그램 통제" },
      { name: "DB 업데이트", desc: "국내 1위 웹사이트 DB 주기적 최신화" }
    ],
    details: [
      "생산성 향상: 비업무 사이트 통제로 업무 집중도 강화",
      "위협 차단: 악성코드 유포 경로인 P2P/웹하드 원천 차단",
      "스니핑 방식: 네트워크 속도 저하 없는 안정적인 감시",
      "통합 관리: 분산된 지사별 설치 및 중앙 통합 제어"
    ],
    color: "from-emerald-600 to-teal-800"
  },
  {
    id: "nac",
    title: "Genian NAC",
    tagline: "네트워크 접근 제어 및 단말 무결성 점검",
    summary: "강력한 인증과 단말 보안 점검을 통해 내부 네트워크를 청정하게 유지하고 BYOD 환경에 최적화된 체계를 제공합니다.",
    features: [
      { name: "네트워크 실명화", desc: "인증을 통한 사용자 식별 및 자산 관리" },
      { name: "외부인 통제", desc: "방문자 및 협력사의 사용 범위 제한" },
      { name: "단말 무결성", desc: "보안 정책 준수 여부 점검 및 강제화" },
      { name: "권한 분리", desc: "직급/역할에 따른 접근 구역 정교한 분리" }
    ],
    details: [
      "집중화: 모든 단말에 대한 일관된 보안 정책 적용",
      "기기 관리: BYOD 환경에서도 유무선 통합 관리 가능",
      "다양한 플랫폼: On-Premise, CLOUD, VM 환경 완벽 지원",
      "네트워크 센서: 접점에서 강력한 접속 통제 수행"
    ],
    color: "from-indigo-600 to-purple-800"
  }
];

export default function NetworkSecurityPage() {
  const [activeTab, setActiveTab] = useState(products[0].id);
  const currentProduct = products.find(p => p.id === activeTab);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1d1d1d] font-sans overflow-x-hidden">
      {/* Navigation (Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href='/'}>
            <div className="relative w-[140px] h-[35px]">
              <Image src="/SOLMO_Logo.png" alt="SOLMO" fill priority className="object-contain" />
            </div>
          </div>
          <div className="flex items-center gap-8 text-[13px] font-bold text-slate-500">
             <a href="/" className="hover:text-[#004a99] transition-colors uppercase">HOME</a>
             <span className="text-slate-300">|</span>
             <span className="text-[#004a99] uppercase">Product Details</span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative pt-44 pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[11px] font-bold text-blue-700 mb-6 tracking-widest uppercase">
            Product Introduction
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1d1d1d] tracking-tight leading-none mb-8">
            Network <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800">Security</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            솔모정보기술은 Fortinet, PIOLINK, Genian 등 글로벌 및 국내 1위 기술진과 협력하여 귀사의 네트워크 환경을 완벽하게 보호합니다.
          </p>
        </div>
      </header>

      {/* Product Display Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Tabs */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">솔루션 목록</p>
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`w-full text-left px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-between group ${
                    activeTab === p.id 
                      ? "bg-white border-2 border-[#004a99] text-[#004a99] shadow-xl shadow-blue-900/10" 
                      : "text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                  }`}
                >
                  {p.title.split(" ")[0]} {p.title.split(" ")[1]}
                  <ArrowRight className={activeTab === p.id ? "opacity-100" : "opacity-0 group-hover:opacity-40"} />
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 animate-reveal">
            <div className={`p-1 w-fit rounded-full bg-gradient-to-r ${currentProduct.color} mb-12`}></div>
            
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#1d1d1d] mb-4">{currentProduct.title}</h2>
              <p className="text-[#004a99] text-lg font-bold mb-8">{currentProduct.tagline}</p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-white shadow-sm italic text-slate-600 leading-relaxed">
                "{currentProduct.summary}"
              </div>
            </div>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {currentProduct.features.map((f, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500">
                  <div className={`w-12 h-1.5 bg-gradient-to-r ${currentProduct.color} rounded-full mb-6`}></div>
                  <h4 className="text-xl font-black text-slate-900 mb-4">{f.name}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Detailed Effects */}
            <div className="mb-20">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 pb-4 border-b border-slate-100">도입 기대 효과 및 특징</h3>
              <div className="space-y-4">
                {currentProduct.details.map((d, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-white group hover:bg-white hover:border-slate-100 hover:shadow-md transition-all">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <p className="text-slate-700 font-bold text-[15px] leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Footer */}
            <div className={`p-12 rounded-[2.5rem] bg-gradient-to-br ${currentProduct.color} text-white shadow-2xl relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl font-black mb-3">전문 엔지니어의 상담을 받아보세요.</h4>
                  <p className="text-white/70 font-medium">귀사의 인프라에 최적화된 하이엔드 보안 설계를 제안합니다.</p>
                </div>
                <button 
                  onClick={() => window.location.href='tel:02-402-8054'}
                  className="px-10 py-5 bg-white text-blue-900 font-black rounded-2xl hover:scale-105 transition-transform"
                >
                  구축 문의 : 02-402-8054
                </button>
              </div>
            </div>
          </main>

        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="bg-[#24292f] text-white/50 py-16 px-8 text-center text-[11px] font-medium uppercase tracking-[0.1em]">
        © {new Date().getFullYear()} SOLMO Information Tech. All rights reserved.
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700;900&display=swap');
        body { font-family: 'Outfit', sans-serif; }
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-reveal { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function ArrowRight({ className }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
