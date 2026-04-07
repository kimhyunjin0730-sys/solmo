'use client';

export default function LocationPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 mb-24 animate-reveal">
         <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-4 block text-center lg:text-left">Visit Us</span>
         <h1 className="text-5xl md:text-7xl font-black text-[#001F5B] leading-tight mb-8 tracking-tighter text-center lg:text-left">
           솔모정보기술 <br />
           <span className="text-blue-500 underline decoration-blue-500 decoration-8 underline-offset-16">오시는 길.</span>
         </h1>
         <div className="grid lg:grid-cols-2 gap-16 items-end">
            <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed text-center lg:text-left">
               서울특별시 광진구에 위치한 본사는 최첨단 보안 연구와 고객 상담을위한 <br />
               열린 공간입니다. 언제든 방문하여 솔루션을 직접 체험해 보세요. [cite: 3, 4]
            </p>
            <div className="flex gap-4 justify-center lg:justify-end">
               <button className="px-10 py-5 bg-blue-50 text-blue-600 font-black rounded-2xl hover:bg-blue-100 transition-all flex items-center gap-3 shadow-sm border border-blue-100">
                  <span className="text-xl">📍</span> Naver Map
               </button>
               <button className="px-10 py-5 bg-slate-50 text-slate-600 font-black rounded-2xl hover:bg-slate-100 transition-all flex items-center gap-3 shadow-sm border border-slate-100">
                  <span className="text-xl">🧭</span> Kakao Map
               </button>
            </div>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-16 items-start">
         {/* Map Placeholder */}
         <div className="lg:col-span-8 relative aspect-video md:aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
               <div className="text-center animate-pulse">
                  <div className="text-6xl mb-8">🗺️</div>
                  <div className="text-lg font-black text-[#001F5B]">Interactive Map Loading...</div>
                  <div className="text-xs font-bold text-slate-400 mt-2">서울특별시 광진구 자양동 224-23 [cite: 7]</div>
               </div>
            </div>
            {/* Visual marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full shadow-[0_0_0_10px_rgba(37,99,235,0.2)] animate-bounce"></div>
         </div>

         {/* Detailed Info */}
         <div className="lg:col-span-4 space-y-12 bg-white">
            <LocationBlock 
              title="Office Address" 
              value="서울특별시 광진구 아차산로 309" 
              desc="남장빌딩 2층 (우)05028 [cite: 6]" 
            />
            <div className="w-full h-px bg-slate-100"></div>
            <LocationBlock 
              title="Public Transit" 
              value="구의역 (2호선)" 
              desc="1번 출구에서 광진구청 방면 도보 약 5분 [cite: 13]" 
            />
            <div className="w-full h-px bg-slate-100"></div>
            <LocationBlock 
              title="Bus Station" 
              value="광진구청 정류장" 
              desc="버스 하차 후 자양 사거리 방면 도보 3분 [cite: 14]" 
            />
            
            <div className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl mt-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[60px] group-hover:scale-150 transition-transform"></div>
               <span className="text-[10px] font-black opacity-30 tracking-widest uppercase mb-4 block">Parking Info</span>
               <h4 className="text-xl font-black mb-4 tracking-tighter italic leading-tight">무료 주차 가능</h4>
               <p className="text-xs font-bold text-white/50 leading-relaxed mb-8">방문 전 고객 센터로 미리 연락 주시면 <br />주차 공간을 확보해 드립니다.</p>
               <div className="inline-flex items-center gap-3 text-blue-400 font-bold text-sm">
                  <span className="text-lg">📞</span> Call 02-402-8054 [cite: 8]
               </div>
            </div>
         </div>
      </div>

      <style jsx global>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function LocationBlock({ title, value, desc }) {
  return (
    <div className="group">
       <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">{title}</span>
       <h4 className="text-2xl font-black text-[#001F5B] mb-2 group-hover:translate-x-2 transition-transform">{value}</h4>
       <p className="text-sm font-bold text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
