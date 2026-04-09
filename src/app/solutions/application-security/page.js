'use client';
import Image from "next/image";

export default function ApplicationSecurityPage() {
  const solutions = [
    {
      name: "패치관리 (ITStation TA-PRS)",
      desc: "OS 및 필수 SW 보안 패치의 중앙 관리 체계를 확립하여 보안 공백을 최소화합니다.",
      features: [
        "패치 자동/강제 설치 및 전사 보안 수준 통계 수집",
        "OS 및 어플리케이션 취약점에 대한 실시간 대응",
        "좀비 PC화 차단을 통해 전사 트래픽 안정성 확보"
      ],
      logo: "/images/product/logo (2).png"
    },
    {
      name: "문서관리 (Gaaiho PDF Suite)",
      desc: "글로벌 수준의 PDF 전문 편집 및 관리 기능을 합리적인 가격으로 제공합니다.",
      features: [
        "PDF 편집(Doc), 일괄 변환(Converter), 관리(Manager) 패키지",
        "OCR 엔진 탑재 및 256-bit AES 암호화 지원",
        "전자서명 및 워터마크를 활용한 안전한 문서 배포"
      ],
      logo: "/images/product/Gaaiho.png"
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      <header className="max-w-4xl pt-2">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Application Security
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          단말 무결성 유지, <span className="text-blue-600">안전한 업무 환경의 기초.</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          어플리케이션 취약점 관리부터 문서 보안까지, 효율적이고 안전한 비즈니스 프로세스를 지원합니다.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 text-black">
        {solutions.map((sol, idx) => (
          <section key={idx} className="bg-white rounded-[3rem] border border-slate-100 p-12 shadow-sm hover:shadow-xl transition-all">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/3">
                <div className="bg-slate-100 rounded-2xl p-8 flex items-center justify-center mb-6 h-32">
                   <img src={sol.logo} alt={sol.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{sol.name}</h3>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{sol.desc}</p>
              </div>
              <div className="flex-1 space-y-4">
                 <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-6">Solution Performance</h4>
                 <ul className="grid md:grid-cols-1 gap-4">
                    {sol.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 items-center">
                         <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs">0{fidx+1}</span>
                         <span className="text-base font-bold text-slate-700 leading-snug">{feature}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
