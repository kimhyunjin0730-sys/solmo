'use client';
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="space-y-12 lg:space-y-16 px-8 pt-10 pb-20">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-3 block">Total IT Maintenance</span>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
          24/365, 귀사의 IT 인프라를 <br />
          <span className="text-blue-600">가장 안정적</span>으로 운영합니다.
        </h2>
        <p className="text-slate-500 font-bold text-sm lg:text-base leading-relaxed">
          (주)솔모정보기술은 22년의 신뢰와 전문 인력을 바탕으로 고객사의 통합 인프라를 
          선제적으로 관리하고 신속한 장애 대응을 통해 최상의 가용성을 제공합니다.
        </p>
      </header>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border-y border-slate-100 py-12">
         <div>
            <div className="text-4xl font-black text-blue-600 mb-4">22+</div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Years of Experience</p>
         </div>
         <div>
            <div className="text-4xl font-black text-blue-600 mb-4">47</div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Technical Specialists</p>
         </div>
         <div>
            <div className="text-4xl font-black text-blue-600 mb-4">50%+</div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Expert/Advanced Engineers</p>
         </div>
         <div>
            <div className="text-4xl font-black text-blue-600 mb-4">24/7</div>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Support Ready</p>
         </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
         <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 relative group overflow-hidden">
            <h3 className="text-3xl font-black mb-10 tracking-tight">유지보수 범위 안내</h3>
            <ul className="space-y-10 relative z-20">
               <li className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center font-black italic">!</div>
                  <div>
                     <h4 className="text-lg font-black mb-1">보안 시스템</h4>
                     <p className="text-sm font-bold opacity-40">UTM, WAF, NAC, DLP 등 보안 전 영역</p>
                  </div>
               </li>
               <li className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center font-black italic">!</div>
                  <div>
                     <h4 className="text-lg font-black mb-1">네트워크 장비</h4>
                     <p className="text-sm font-bold opacity-40">L2/L3/L4 스위치 및 무선 네트워크 관리</p>
                  </div>
               </li>
               <li className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center font-black italic">!</div>
                  <div>
                     <h4 className="text-lg font-black mb-1">서버 및 스토리지</h4>
                     <p className="text-sm font-bold opacity-40">Win/Linux 서버 및 데이터 백업 관리</p>
                  </div>
               </li>
            </ul>
         </div>
         <div className="bg-slate-900 p-16 rounded-[4rem] relative overflow-hidden flex flex-col justify-center">
            <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">서비스 강점</h3>
            <div className="space-y-8">
               <div className="px-8 py-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-blue-500 font-bold mb-2 uppercase text-xs tracking-widest">Expert Force</h4>
                  <p className="text-sm font-bold text-white/50 leading-relaxed">숙련된 기술진 보유로 어떠한 장애 상황에도 즉각적인 분석과 실질적인 기술 지원을 보장합니다.</p>
               </div>
               <div className="px-8 py-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-blue-500 font-bold mb-2 uppercase text-xs tracking-widest">Customer Alignment</h4>
                  <p className="text-sm font-bold text-white/50 leading-relaxed">단순 장애 처리를 넘어 정기 점검, 성능 최적화, 보안 업데이트 등 각 기업별 맞춤형 관리를 수행합니다.</p>
               </div>
            </div>
         </div>
      </section>

      <section className="relative h-[650px] rounded-[4.5rem] overflow-hidden shadow-2xl bg-white border border-slate-100 p-20">
         <div className="relative w-full h-full">
            <Image 
              src="/images/services/통합유지보수.png" 
              alt="통합 유지보수 서비스" 
              fill 
              className="object-contain"
            />
         </div>
         <div className="absolute inset-x-12 bottom-12 p-16 bg-white shadow-2xl rounded-[3rem] animate-reveal border border-slate-100">
            <h3 className="text-4xl font-black italic mb-4 tracking-tighter text-slate-900">Endless Reliability</h3>
            <p className="text-slate-500 font-bold text-lg leading-relaxed max-w-2xl">
               포스코 그룹사, 새마을금고중앙회 등 대규모 인프라 운영 레퍼런스를 통해 검증된 통합 유지보수 서비스를 지금 만나보세요.
            </p>
         </div>
      </section>
    </div>
  );
}
