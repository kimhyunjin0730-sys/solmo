'use client';
import Image from "next/image";

export default function CertificationsPage() {
  const corporateCerts = [
    { title: "벤처기업확인서", img: "/images/인증 및 특허/19.6.17-21.6.16벤처기업확인서_page-0001.jpg", desc: "기술력과 미래 성장 가치를 인정받은 혁신 벤처 기업" },
    { title: "정보통신공사업등록증", img: "/images/인증 및 특허/정보통신공사업등록증_page-0001.jpg", desc: "전문적인 정보통신 설비 시공 및 유지관리 적격 업체" },
    { title: "기업부설연구소인정서", img: "/images/인증 및 특허/기업부설연구소인정서_page-0001.jpg", desc: "독자적 보안 기술 연구 및 신기술 창출을 위한 전담 연구소" },
    { title: "포스코DX 협력사", img: "/images/인증 및 특허/포스코UX 협력사.emf", desc: "글로벌 철강 기업 포스코DX의 핵심 IT 보안 파트너" },
    { title: "소프트웨어사업자 신고", img: "/images/인증 및 특허/소프트웨어사업자.jpg", desc: "컴퓨터 관련 서비스 및 패키지 SW 개발 공급 공식 사업자" },
    { title: "중소기업확인서", img: "/images/인증 및 특허/중소기업확인서.jpg", desc: "대한민국 중소벤처기업부 인증 유망 중소기업" },
    { title: "직접생산확인증명서", img: "/images/인증 및 특허/직접생산확인.jpg", desc: "자체 생산 인프라 및 기술력을 인정받은 공공 조달 적격 인증" },
  ];

  const qualityCerts = [
    { title: "GS 인증 1등급", img: "/images/인증 및 특허/GS인증.png", desc: "소프트웨어 품질 인증 최고 등급 (자체 개발 xSecuritas 솔루션)" },
    { title: "기업신용등급 BB+", img: "/images/인증 및 특허/기업신용등급.png", desc: "안정적인 현금 흐름과 우수한 재무 건전성 및 거래 신뢰도" },
  ];

  const patents = [
    { title: "무선랜 터보 통신 특허", img: "/images/인증 및 특허/특허증_page-0001.jpg", desc: "무선랜 이용 터보 다중 수신 장치 및 시스템 기술" },
    { title: "다기능 인터폰 장치 특허", img: "/images/인증 및 특허/특허증_page-0002.jpg", desc: "스마트 홈 보안 연동을 위한 다기능 인터폰 기술" },
    { title: "수배전반 안전 관리 특허", img: "/images/인증 및 특허/특허증_page-0003.jpg", desc: "전력 설비 안전 관리 및 지능형 도어락 제어 시스템" },
    { title: "통합 보안 제어 특허", img: "/images/인증 및 특허/특허증_page-0004.jpg", desc: "다각도 보안 관제를 위한 지능형 제어 시스템" },
  ];

  return (
    <div className="space-y-32 pb-40">
       <header className="max-w-[1400px] mx-auto text-left flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Proof of Innovation</span>
            <h3 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
               기술로 증명하고 <br />
               <span className="text-blue-600 italic">신뢰로 응답합니다.</span>
            </h3>
            <p className="text-slate-500 font-bold text-lg leading-relaxed">
               (주)솔모정보기술은 22년간 축적된 지적 자산과 대내외 공인 인증을 통해 
               가장 안전하고 검증된 보안 경험을 제시합니다.
            </p>
          </div>
          <div className="hidden lg:block">
             <div className="w-32 h-32 rounded-full border border-blue-600/20 flex items-center justify-center animate-pulse">
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">ISO Certified</span>
             </div>
          </div>
       </header>

       <InteractiveSection title="Corporate Foundation" data={corporateCerts} />
       <InteractiveSection title="Quality Excellence" data={qualityCerts} columns={2} />
       <InteractiveSection title="Intellectual Property" data={patents} />

       <div className="bg-slate-900 -mx-8 px-8 py-40 rounded-[5rem] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
             <h4 className="text-4xl font-black text-white italic tracking-tighter">Technology Beyond Limits</h4>
             <p className="text-white/40 font-bold max-w-2xl mx-auto text-[15px] leading-relaxed">
                솔모는 안주하지 않습니다. 매년 매출의 상당 부분을 R&D에 투자하여 자체 보안 솔루션 고도화와 
                새로운 특허 창출을 통해 미래 보안 시장을 선도하고 있습니다.
             </p>
             <div className="flex justify-center flex-wrap gap-12 lg:gap-32">
                <BigStatItem value="22" unit="Years" label="Operational Trust" />
                <BigStatItem value="15" unit="Patents" label="Innovation Assets" />
                <BigStatItem value="10" unit="Certs" label="Quality Standard" />
             </div>
          </div>
          {/* Background Ambient */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
       </div>
    </div>
  );
}

function InteractiveSection({ title, data, columns = 3 }) {
   return (
      <div className="max-w-[1400px] mx-auto space-y-16">
         <div className="flex items-center gap-8">
            <h4 className="text-sm font-black text-blue-600 uppercase tracking-[0.6em] whitespace-nowrap">{title}</h4>
            <div className="w-full h-px bg-slate-100"></div>
         </div>
         <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-12`}>
            {data.map((item, idx) => (
               <div key={idx} className="group relative">
                  <div className="relative aspect-[3/4.2] rounded-[3.5rem] overflow-hidden bg-white border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-700">
                     <Image 
                       src={item.img} 
                       alt={item.title} 
                       fill 
                       className="object-cover transition-transform duration-1000 group-hover:scale-110"
                     />
                     {/* Overlay Description on Hover */}
                     <div className="absolute inset-0 bg-blue-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col justify-end">
                        <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4 block">Details</span>
                        <p className="text-white text-lg font-bold leading-tight tracking-tight">{item.desc}</p>
                     </div>
                  </div>
                  <div className="mt-8 px-4">
                     <h5 className="text-[17px] font-black text-slate-900 tracking-tight">{item.title}</h5>
                     <div className="w-8 h-1 bg-slate-200 mt-3 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500 rounded-full"></div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

function BigStatItem({ value, unit, label }) {
   return (
      <div className="text-center group">
         <div className="text-7xl font-black text-white italic tracking-tighter mb-4 group-hover:text-blue-500 transition-colors">
            {value}<span className="text-2xl text-blue-500 ml-1">{unit}</span>
         </div>
         <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">{label}</div>
      </div>
   );
}
