'use client';
import Image from "next/image";

export default function GreetingsPage() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-12 gap-20 items-start">
        {/* Visual Sidebar */}
        <div className="lg:col-span-5 sticky top-32">
           <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group">
              <Image src="/office-bg.png" alt="CEO Message" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#001F5B]/40 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 p-16 flex flex-col justify-between">
                 <div>
                    <span className="text-blue-400 font-black text-xs uppercase tracking-[0.5em] mb-4 block">CEO Message</span>
                    <h3 className="text-white text-3xl font-black leading-tight tracking-tighter">
                       "고객과 함께 성장하는 <br /> 
                       최고의 보안 파트너가 <br />
                       되겠습니다."
                    </h3>
                 </div>
                 <div className="text-white">
                    <div className="w-16 h-1.5 bg-blue-500 mb-8 rounded-full"></div>
                    <p className="text-sm font-black tracking-widest uppercase mb-1">Representative Director</p>
                    <p className="text-4xl font-black italic">Lee Byung-Doo</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Content Body */}
        <div className="lg:col-span-7 space-y-24 py-10">
           {/* Section 1: Welcome */}
           <section className="space-y-10">
              <h4 className="text-5xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                 솔모정보기술은 <span className="text-blue-600 italic">22년의 신뢰</span>를 <br />
                 바탕으로 보안의 길을 걷습니다.
              </h4>
              <div className="space-y-6 text-slate-500 font-bold text-[17px] leading-relaxed">
                 <p>
                    ㈜솔모정보기술 홈페이지를 방문해 주신 모든 분들에게 진심으로 감사의 말씀 드립니다.
                 </p>
                 <p>
                    ㈜솔모정보기술은 2002년 설립 이후 지금까지 IT보안 분야의 정보 보호 컨설팅, 보안취약점 진단, 모의해킹, 통합로그분석, 네트워크 보안 등 보안 컨설팅과 솔루션을 구축하고 통합보안 운영을 전문으로 하는 기업입니다.
                 </p>
                 <p>
                    또한 우리회사는 사람과 기술에 대한 가치와 중요성을 인식하고 있으며, 이에 따른 직원들의 기술력 함양을 위한 교육 및 훈련에 대해서 내부/외부적으로 적극 지원하고 있습니다.
                 </p>
                 <p>
                    이에 따른 결과로 고객에게 신뢰받는 기업이 되었으며, IT보안 분야에서의 입지를 성공적으로 다지고 있습니다. 꿈과 열정을 토대로 고객과 동반 성장하는 기업이 되도록 최선을 다하겠습니다.
                 </p>
              </div>
           </section>

           {/* Section 2: Special Message to Family */}
           <section className="p-16 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                 <h4 className="text-2xl font-black italic text-blue-500">To. 솔모정보기술 가족 여러분께</h4>
                 <div className="space-y-6 text-white/60 font-medium text-[15px] leading-relaxed">
                    <p>
                       우리는 지난 한 해 한번도 경험하지 못한 힘든 경험을 했습니다. 
                       금방 지나갈 줄 알았던 코로나가 지난 한해는 물론이며 언제 종식 될 지 모르는 상황 속에서 벌써 우리 일상 깊숙이 자리 잡고 있습니다.
                    </p>
                    <p>
                       이러한 상황에 발 맞춰 지금까지의 근무방식과 생각을 바꾸는 제도개선을 지속적으로 추진하겠습니다. 
                       또한, 원격근무 시대에 원활한 소통 방법과 탁월한 팀워크를 기반으로 경쟁력 있는 기업이 되기 위해 노력하고 성장합시다.
                    </p>
                    <p className="text-white text-lg font-black pt-4">
                       "여러분 가정에 항상 건강과 행복이 가득한 한 해 되시기를 진심으로 기원하며, <br />
                       열정 가득한 동반 성장의 길을 함께 갑시다."
                    </p>
                 </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
           </section>

           {/* Footer: Summary Info */}
           <div className="grid grid-cols-2 gap-10 pt-10 border-t border-slate-100">
              <div>
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Established</span>
                 <p className="text-2xl font-black text-slate-900 italic">2002. 10. 09</p>
              </div>
              <div>
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Enterprise Type</span>
                 <p className="text-2xl font-black text-slate-900 italic">Security Specialist</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
