'use client';

const history = [
  { year: "2025", items: ["(주)솔모정보기술 주요 솔루션 고도화 및 공공/금융 레퍼런스 확충", "한국평가데이타 신용등급 BB+ 달성 (2025.04)"] },
  { year: "2020", items: ["X-Securitas 스크린 워터마크 GS인증 1등급 획득", "데이터 보안 및 정보 유출 방지 특화 솔루션 시장 진입"] },
  { year: "2015", items: ["침입방지시스템(IPS) 및 네트워크 접근제어(NAC) 통합 보안 SI 사업 확대", "주요 공공기관 및 대기업 보안 파트너십 구축"] },
  { year: "2009", items: ["(주)솔모정보기술 법인명 변경", "보안관제 솔루션 구축 및 정보보안 컨설팅 사업 본격화"] },
  { year: "2002", items: ["(주)에이투지정보기술 설립 (2002.10.09)", "기업 전산실 구축 및 유지보수 서비스 개시"] }
];

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-24">
      <header className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[10px] font-black text-blue-700 mb-6 tracking-widest uppercase">
          Corporate History
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1d1d1d] tracking-tight leading-tight">
          신뢰로 쌓아온 <br />
          <span className="text-[#004a99]">솔모의 20년</span>
        </h2>
      </header>

      <section className="relative px-4">
        {/* Continuous Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>

        <div className="space-y-24">
          {history.map((h, i) => (
            <div key={h.year} className="relative flex flex-col md:flex-row items-center gap-12 group transition-all">
              {/* Year Marker Desktop */}
              <div className="hidden md:flex flex-1 justify-end">
                <div className="text-right pr-20 pt-2 transition-transform group-hover:-translate-x-2">
                  <span className="text-[12px] font-black text-slate-300 uppercase tracking-widest block mb-2 opacity-50">MILESTONE</span>
                  <span className="text-6xl font-black text-[#004a99] tracking-tighter tabular-nums drop-shadow-sm">{h.year}</span>
                </div>
              </div>

              {/* Central Point */}
              <div className="absolute left-6 md:left-1/2 -ml-3 md:-ml-3.5 z-10">
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white border-4 border-[#004a99] shadow-lg shadow-blue-900/10 transition-transform group-hover:scale-125"></div>
              </div>

              {/* Content Panel */}
              <div className="flex-1 w-full pl-16 md:pl-20 relative">
                <div className="md:hidden mb-4">
                   <span className="text-4xl font-black text-[#004a99] uppercase tracking-tighter">{h.year}</span>
                </div>
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.1)] group-hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] transition-all">
                   <ul className="space-y-6">
                      {h.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></div>
                           <p className="text-slate-600 font-bold leading-relaxed text-[15px]">{item}</p>
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pt-40 text-center">
        <div className="inline-flex items-center gap-4 px-10 py-6 rounded-[2rem] bg-slate-50 border border-white shadow-sm">
           <div className="text-slate-400 font-bold text-sm">SINCE 2002</div>
           <div className="w-px h-6 bg-slate-200"></div>
           <div className="text-[#004a99] font-black text-lg tracking-tight italic uppercase">Total IT Security Expert</div>
        </div>
      </section>
    </div>
  );
}
