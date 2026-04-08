'use client';
import Image from "next/image";

export default function BackupRecoveryPage() {
  const products = [
    {
      title: "Acronis Cyber Protect",
      brand: "최첨단 통합 사이버 백업",
      logo: "/images/product/logo (2).png",
      desc: "물리, 가상, 클라우드 등 21개 이상의 플랫폼을 지원하며 랜섬웨어 예방과 블록체인 공증을 지원하는 세계 기술 1위의 통합 백업 솔루션입니다.",
      features: [
        "시스템 전체 및 특정 파일 단위의 정밀한 이미징 백업",
        "사고 발생 시 즉각적인 복구 및 이종 하드웨어 마이그레이션",
        "데이터 중복 제거를 통해 스토리지 비용 효율 극대화",
        "블록체인 기반의 데이터 공증(Notary) 및 데이터 무결성 보장"
      ],
      icon: "🔄"
    }
  ];

  return (
    <div className="space-y-32">
      <header className="mb-20">
        <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Backup & Recovery</span>
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          시스템 장애, 이제 <br />
          <span className="text-blue-600">완벽한 연속성</span>을 보장합니다.
        </h2>
        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl">
          솔모정보기술은 Acronis의 글로벌 파트너로서 
          하이브리드 IT 환경에 최적화된 백업 설계를 통해 기업의 소중한 데이터를 유실로부터 지켜냅니다.
        </p>
      </header>

      <div className="grid grid-cols-1">
        {products.map((prod, idx) => (
          <div key={idx} className="group p-16 rounded-[4rem] bg-white border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="flex justify-between items-start mb-12">
               <div className="text-8xl transition-transform group-hover:scale-110 duration-500">{prod.icon}</div>
               <div className="relative w-64 h-24 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={prod.logo} alt={prod.title} fill className="object-contain" />
               </div>
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-blue-600 font-black text-[12px] uppercase tracking-widest mb-4 block">{prod.brand}</span>
                <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">{prod.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">{prod.desc}</p>
              </div>
              
              <ul className="space-y-6">
                {prod.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-5 text-lg font-bold text-slate-600">
                    <div className="mt-2 w-2 h-2 rounded-full bg-blue-500/30 group-hover:bg-blue-500 transition-colors"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Ambient Background Logo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 opacity-0 group-hover:opacity-100 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700"></div>
          </div>
        ))}
      </div>

      <div className="pt-20 border-t border-slate-100 bg-slate-900 text-white -mx-8 px-8 py-40 rounded-[4rem]">
        <div className="max-w-4xl mx-auto text-center space-y-16">
            <h3 className="text-4xl font-black italic">Business Continuity & Beyond</h3>
            <p className="text-white/50 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
               "재해는 예고 없이 찾아오지 않습니다. <br /> 다만 대비하지 않은 기업에게만 재앙이 될 뿐입니다."
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-left">
               <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                  <h4 className="text-xl font-bold text-blue-400 mb-6">On-Premise 구성</h4>
                  <p className="text-sm font-bold text-white/40 leading-relaxed">
                     사내 관리 서버와 스토리지를 직접 구축하여 <br /> 
                     완벽하게 독자적인 백업 운영 체계 확립
                  </p>
               </div>
               <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                  <h4 className="text-xl font-bold text-blue-400 mb-6">Cloud 구성</h4>
                  <p className="text-sm font-bold text-white/40 leading-relaxed">
                     Acronis 데이터 센터를 활용한 클라우드 백업으로 <br />
                     초기 설치 비용 없는 효율적인 확장성
                  </p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
