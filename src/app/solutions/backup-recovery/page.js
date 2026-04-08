'use client';
import Image from "next/image";

export default function BackupRecoveryPage() {
  return (
    <div className="space-y-32 pb-40">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Backup & Recovery</span>
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          재해로부터 비즈니스를 <br />
          <span className="text-blue-600">안전하게 구원하다.</span>
        </h2>
        <p className="text-slate-500 font-bold text-lg leading-relaxed">
          데이터 유실은 돌이킬 수 없지만, 아크로니스와 솔모가 제공하는 백업은 완벽한 복구를 약속합니다.
        </p>
      </header>

      <section className="bg-slate-900 rounded-[5rem] p-16 lg:p-24 text-white relative overflow-hidden group">
         <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <div className="bg-white rounded-3xl p-10 mb-12 w-fit">
                  <img src="/images/product/16.png" alt="Acronis" className="h-12 object-contain" />
               </div>
               <h3 className="text-4xl font-black mb-8 italic tracking-tighter">데이터백업 (Acronis Cyber Protect)</h3>
               <p className="text-white/50 font-bold text-lg leading-relaxed mb-12">
                  하이브리드 IT 환경에 최적화된 시스템 이미지 백업 및 재해 복구 솔루션입니다. 21개 이상의 플랫폼을 지원하며 랜섬웨어 차단 기능을 내장하고 있습니다.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <FeatureBox title="글로벌 호환성" desc="21개 이상의 플랫폼 완벽 지원" />
                  <FeatureBox title="최신 보안 기술" desc="랜섬웨어 실시간 감지 및 예방" />
                  <FeatureBox title="데이터 무결성" desc="블록체인 기반 데이터 공증 지원" />
                  <FeatureBox title="비용 절감" desc="강력한 데이터 중복 제거 엔진" />
               </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full bg-white/5 rounded-[4rem] border border-white/10 p-12 flex flex-col justify-center">
               <h4 className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-10">Cyber Protection Excellence</h4>
               <ul className="space-y-8">
                  <li className="flex gap-6 items-start">
                     <span className="text-4xl font-black opacity-20">01</span>
                     <div>
                        <div className="text-xl font-black mb-1">통합 웹 콘솔</div>
                        <p className="text-sm font-bold opacity-40 leading-relaxed text-white/60">모든 백업 대상을 단일 웹 인터페이스에서 중앙 집중 관리</p>
                     </div>
                  </li>
                  <li className="flex gap-6 items-start">
                     <span className="text-4xl font-black opacity-20">02</span>
                     <div>
                        <div className="text-xl font-black mb-1">인스턴트 리스토어</div>
                        <p className="text-sm font-bold opacity-40 leading-relaxed text-white/60">단 몇 초 만에 데이터 및 시스템을 즉각적으로 가동</p>
                     </div>
                  </li>
                  <li className="flex gap-6 items-start">
                     <span className="text-4xl font-black opacity-20">03</span>
                     <div>
                        <div className="text-xl font-black mb-1">하이브리드 클라우드</div>
                        <p className="text-sm font-bold opacity-40 leading-relaxed text-white/60">로컬 스토리지와 전용 클라우드 데이터센터 선택적 구성</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </section>
    </div>
  );
}

function FeatureBox({ title, desc }) {
   return (
      <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
         <div className="text-blue-500 font-black text-sm mb-1 italic">{title}</div>
         <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{desc}</p>
      </div>
   );
}
