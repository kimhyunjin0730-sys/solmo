'use client';

export default function GreetingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <header className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[10px] font-black text-blue-700 mb-6 tracking-widest uppercase">
          CEO Greetings
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1d1d1d] tracking-tight leading-tight">
          신뢰를 기술로 증명하는 <br />
          <span className="text-[#004a99]">보안 전문 파트너</span>입니다.
        </h2>
      </header>

      <section className="grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2">
          {/* Representative/CEO Visual Placeholder */}
          <div className="relative aspect-[3/4] rounded-[2rem] bg-slate-100 overflow-hidden shadow-2xl group transition-all hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white p-6 bg-[#004a99]/90 backdrop-blur-md rounded-2xl border border-white/20 select-none">
              <p className="text-xs font-bold opacity-70 mb-1">Representative Director</p>
              <h3 className="text-2xl font-black tracking-tight italic">이병두 (Lee Byung-doo)</h3>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-10">
          <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
            <p>
              안녕하십니까? (주)솔모정보기술 홈페이지를 방문해 주셔서 감사합니다.
            </p>
            <p>
              저희 솔모정보기술은 2002년 설립 이후 급변하는 IT 인프라와 지능화되는 보안 위협 속에서 고객의 소중한 정보 자산을 안전하게 보호하기 위해 끊임없이 노력해 왔습니다.
            </p>
            <p>
              우리는 단순히 보안 솔루션을 구축하는 것에 그치지 않고, 고객사가 비즈니스 본연의 가치에 집중할 수 있도록 <b>'Zero Trust'</b> 보안 철학을 바탕으로 한 통합 IT 보안 설계를 제안합니다.
            </p>
            <p>
              검증된 기술력과 47명의 보안 전문가들로 구성된 팀워크를 통해 금융, 공공, 대기업 등 수많은 성공 사례를 축적해 왔으며, 앞으로도 대한민국 정보보안의 중심에서 안전한 디지털 미래를 열어가는 든든한 동반자가 되겠습니다.
            </p>
            <p>
              앞으로도 많은 관심과 성원을 부탁드립니다. 감사합니다.
            </p>
          </div>

          <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2">CEO Signature</p>
              <div className="text-3xl font-black text-[#1d1d1d] tracking-tighter italic">
                (주)솔모정보기술 대표이사 이병두
              </div>
            </div>
            <div className="h-12 w-32 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center grayscale opacity-30 select-none font-black italic text-slate-400">
               Official Seal
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
