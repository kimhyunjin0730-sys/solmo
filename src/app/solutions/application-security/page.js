'use client';
import Image from "next/image";

export default function ApplicationSecurityPage() {
  const products = [
    {
      title: "패치관리시스템 (PMS)",
      brand: "공백 없는 보안 자동화",
      logo: "/images/product/logo (4).png",
      desc: "윈도우 PC 및 서버의 OS 보안 패치, 백신, PC보안 소프트웨어를 중앙에서 자동화된 체계로 관리하여 보안 공백을 최소화하는 솔루션입니다.",
      features: [
        "운영체제 및 어플리케이션 패치 자동/강제 설치",
        "전사 단말 패치 적용 현황 로깅 및 통계 리포팅",
        "사전 보완 취약점 제거를 통한 보안 수준 강화",
        "악성코드 및 좀비 PC로 인한 불필요 트래픽 발생 방지"
      ],
      icon: "⚡"
    },
    {
      title: "Gaaiho(가이호) PDF 솔루션",
      brand: "문서 관리 통합 솔루션",
      logo: "/images/product/Gaaiho.png",
      desc: "단순한 뷰어를 넘어 강력한 편집, 변환, OCR 및 관리 기능을 제공하여 기업의 문서 업무 프로세스를 데이터 기반으로 혁신합니다.",
      features: [
        "텍스트와 이미지를 직접 수정하는 강력한 PDF 편집",
        "대량 파일의 병합, 분할 및 워드/엑셀 상호 역변환",
        "이미지 형태의 PDF를 텍스트 데이터로 바꾸는 OCR 기능",
        "전자 서명 및 클라우드 연동을 통한 페이퍼리스 환경 구축"
      ],
      icon: "📄"
    }
  ];

  return (
    <div className="space-y-32">
      <header className="mb-20">
        <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Application Security</span>
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          업무 생산성과 <span className="text-blue-600">애플리케이션 보안</span>의 <br />
          완벽한 조화를 지향합니다.
        </h2>
        <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl">
          솔모정보기술은 기업 내부 인프라의 핵심인 운영체제 관리부터 
          모든 비즈니스 문서의 중심인 PDF까지 아우르는 통합 어플리케이션 보안 체계를 제시합니다.
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

      <div className="pt-20 border-t border-slate-100 bg-[#001F5B] text-white -mx-8 px-8 py-32 rounded-[4rem]">
        <div className="max-w-4xl mx-auto space-y-12">
            <h3 className="text-3xl font-black text-white text-center">기대 효과</h3>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <h4 className="text-blue-400 font-black text-xl mb-4 italic">Efficiency</h4>
                  <p className="text-sm font-bold text-white/70 leading-relaxed whitespace-pre-line">
                     자동화된 패치 관리로 <br />
                     관리 업무의 현격한 감소
                  </p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <h4 className="text-blue-400 font-black text-xl mb-4 italic">Stability</h4>
                  <p className="text-sm font-bold text-white/70 leading-relaxed whitespace-pre-line">
                     문서 협업 환경의 <br />
                     보안성과 무결성 보장
                  </p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
                  <h4 className="text-blue-400 font-black text-xl mb-4 italic">Digital Transformation</h4>
                  <p className="text-sm font-bold text-white/70 leading-relaxed whitespace-pre-line">
                     종이 없는 사무실과 <br />
                     전자 서명 체계 완성
                  </p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
