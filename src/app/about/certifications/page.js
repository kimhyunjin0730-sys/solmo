'use client';
import Image from "next/image";

export default function CertificationsPage() {
  const corporateCerts = [
    { title: "벤처기업확인서", img: "/images/인증 및 특허/19.6.17-21.6.16벤처기업확인서_page-0001.jpg", desc: "기술력과 성장성을 인정받은 혁신 기업" },
    { title: "정보통신공사업등록증", img: "/images/인증 및 특허/정보통신공사업등록증_page-0001.jpg", desc: "국가 공인 정보통신 시공 및 관리 자격" },
    { title: "기업부설연구소인정서", img: "/images/인증 및 특허/기업부설연구소인정서_page-0001.jpg", desc: "자체 기술 개발을 위한 독립적 연구 조직 운영" },
    { title: "포스코DX 협력사", img: "/images/인증 및 특허/포스코UX 협력사.emf", desc: "포스코 그룹의 핵심 기술 협력 파트너" },
    { title: "직접생산확인증명서", img: "/images/인증 및 특허/직접생산확인.jpg", desc: "공공 조달을 위한 생산 설비 및 인력 검증" },
    { title: "중소기업확인서", img: "/images/인증 및 특허/중소기업확인서.jpg", desc: "대한민국 중소벤처기업부 인증" },
  ];

  const qualityCerts = [
    { title: "GS 인증 1등급", img: "/images/인증 및 특허/GS인증.png", desc: "소프트웨어 품질인증 최고 등급 (xSecuritas)" },
    { title: "기업신용등급 BB+", img: "/images/인증 및 특허/기업신용등급.png", desc: "안정적인 재무 구조와 거래 신뢰도 확보" },
  ];

  const patents = [
    { title: "특허증: 무선랜 다중 수신", img: "/images/인증 및 특허/특허증_page-0001.jpg", desc: "무선랜 터보 이용 다중 수신 시스템" },
    { title: "특허증: 다기능 인터폰", img: "/images/인증 및 특허/특허증_page-0002.jpg", desc: "스마트 홈 보안을 위한 인터폰 장치" },
    { title: "특허증: 수배전반 안전관리", img: "/images/인증 및 특허/특허증_page-0003.jpg", desc: "수배전반 안전 관리 및 도어락 시스템" },
  ];

  return (
    <div className="space-y-32">
       <header className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Trust & Quality</span>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">검증된 기술 리더십</h3>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
             솔모정보기술은 공인된 인증과 다수의 특허를 통해 보안 기술의 전문성을 끊임없이 증명하고 있습니다.
          </p>
       </header>

       <Section title="Corporate Certifications" data={corporateCerts} />
       <Section title="Quality & Credit" data={qualityCerts} columns={2} />
       <Section title="Patents & IP" data={patents} />

       <div className="bg-slate-50 -mx-8 px-8 py-32 rounded-[4rem] text-center">
          <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">지속적인 성장을 위한 아낌없는 투자</h4>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto text-sm leading-relaxed mb-12">
             우리는 단순히 솔루션을 공급하는 것에 그치지 않고, 
             자체 연구소를 통한 끊임없는 기술 개발과 혁신으로 매년 새로운 지적 자산을 창출하고 있습니다.
          </p>
          <div className="flex justify-center gap-20">
             <StatItem value="15+" label="Active Patents" />
             <StatItem value="10+" label="Gov. Certs" />
             <StatItem value="1" label="R&D Center" />
          </div>
       </div>
    </div>
  );
}

function Section({ title, data, columns = 3 }) {
   return (
      <div className="space-y-12">
         <h4 className="text-sm font-black text-blue-600 uppercase tracking-[0.5em] text-center border-b border-slate-100 pb-8">{title}</h4>
         <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-12`}>
            {data.map((item, idx) => (
               <div key={idx} className="group">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group-hover:shadow-2xl transition-all duration-500 mb-6">
                     <Image 
                       src={item.img} 
                       alt={item.title} 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white text-[10px] font-bold leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
                  <h5 className="text-lg font-black text-slate-900 px-2">{item.title}</h5>
               </div>
            ))}
         </div>
      </div>
   );
}

function StatItem({ value, label }) {
   return (
      <div>
         <div className="text-4xl font-black text-blue-600 mb-1">{value}</div>
         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
      </div>
   );
}
