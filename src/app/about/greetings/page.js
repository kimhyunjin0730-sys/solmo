import Image from "next/image";

export default function GreetingsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl">
           <Image src="/office-bg.png" alt="CEO Message" fill className="object-cover" />
           <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex items-end p-12">
              <div className="text-white">
                 <p className="text-2xl font-black leading-tight mb-4 italic">
                    "고객과 함께 성장하는 <br /> 보안 파트너, 솔모정보기술입니다."
                 </p>
                 <div className="w-12 h-1 bg-blue-500 mb-4"></div>
                 <p className="text-white/80 font-bold tracking-widest uppercase text-xs">CEO 이병두</p>
              </div>
           </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">CEO Message</span>
            <h2 className="text-[#001F5B] text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight">
               신뢰를 바탕으로 <br />
               미래를 열어가는 조력자
            </h2>
          </div>
          
          <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
             <p>
                (주)솔모정보기술은 2002년 설립 이래 보안 솔루션 구축 및 유지보수, 소프트웨어 및 보안 시스템 납품 등 기업 전산실 구축과 수탁 보안 운영 분야에서 전문성을 쌓아왔습니다.
             </p>
             <p>
                저희는 끊임없이 변화하는 IT 환경 속에서 고객사의 비즈니스 가치를 보호하고 만족도를 높이기 위해 경쟁력 있는 최적의 솔루션을 제공하고 있습니다. 
             </p>
             <p>
                단순히 기술을 납품하는 것을 넘어, 고객의 신뢰를 바탕으로 함께 미래를 열어가는 든든한 조력자가 되기 위해 모든 임직원이 최선을 다하겠습니다. 
             </p>
             <p>
                고객 여러분의 변함없는 신뢰에 보답하며, 대한민국 정보보안의 중심에서 가장 안전한 내일을 설계하는 동반자가 될 것을 약속드립니다.
             </p>
          </div>

          <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
             <div>
                <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Establishment</span>
                <span className="text-2xl font-black text-slate-900">2002.10.09</span>
             </div>
             <div className="text-right">
                <span className="block text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Representative</span>
                <span className="text-2xl font-black text-slate-900">이병두 (Lee Byung-doo)</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
