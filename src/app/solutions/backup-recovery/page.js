'use client';
import Image from "next/image";

export default function BackupRecoveryPage() {
  return (
    <div className="space-y-32 pb-40">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Data Resiliency</span>
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          사고는 예고 없이 찾아오지만, <br />
          <span className="text-blue-600">복구는 단 한 번의 클릭</span>으로.
        </h2>
        <p className="text-slate-500 font-bold text-lg leading-relaxed">
          어떠한 재해 상황에서도 비즈니스 연속성을 보장합니다. 
          랜섬웨어 예방부터 이종 하드웨어 복구까지 완벽한 데이터 보험을 제공합니다.
        </p>
      </header>

      {/* Acronis Cyber Protect */}
      <section className="bg-[#001F5B] p-20 lg:p-32 rounded-[6rem] text-white relative overflow-hidden">
         <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
               <div className="max-w-xl">
                  <Image src="/images/product/acronis-logo.png" alt="Acronis" width={180} height={50} className="mb-12 brightness-0 invert" />
                  <h3 className="text-4xl font-black tracking-tighter mb-8 italic">Acronis Cyber Protect</h3>
                  <p className="text-white/40 font-bold leading-relaxed text-lg">
                     21개 이상의 플랫폼을 지원하는 통합 백업 솔루션. 
                     랜섬웨어 사전 차단과 블록체인 기반 데이터 공증 기술로 백업의 차원을 높였습니다.
                  </p>
               </div>
               <div className="flex flex-col gap-4">
                  <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 text-blue-500 font-black italic tracking-tighter">
                     Blockchain Notary Supported
                  </div>
                  <div className="px-8 py-4 bg-white/10 rounded-2xl border border-white/20 text-emerald-400 font-black italic tracking-tighter">
                     21+ Platform Hybrid Backup
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <BackupCard title="이미징 백업" desc="시스템 전체 및 정밀 파일 단위 백업" />
               <BackupCard title="유니버설 복구" desc="사고 시 이종 하드웨어로 즉각 복구" />
               <BackupCard title="고급 중복 제거" desc="기술 기반 스토리지 비용 최대 절감" />
               <BackupCard title="능동적 방어" desc="백업 데이터 대상 랜섬웨어 사전 차단" />
            </div>

            <div className="mt-24 pt-24 border-t border-white/10 grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h4 className="text-2xl font-black mb-8 underline decoration-blue-500 decoration-4">멀티 플랫폼 지원 환경</h4>
                  <div className="flex flex-wrap gap-4 uppercase text-[10px] font-black tracking-widest text-white/40">
                     <span className="px-5 py-2 bg-white/5 rounded-full border border-white/10">Windows/Linux</span>
                     <span className="px-5 py-2 bg-white/5 rounded-full border border-white/10">VMware/Hyper-V</span>
                     <span className="px-5 py-2 bg-white/5 rounded-full border border-white/10">Azure/AWS/Google</span>
                     <span className="px-5 py-2 bg-white/5 rounded-full border border-white/10">Microsoft 365</span>
                  </div>
               </div>
               <div className="p-12 bg-white rounded-[4rem] text-slate-900 border-l-[12px] border-blue-600">
                  <h4 className="text-xl font-black mb-4">Flexible Deployment</h4>
                  <p className="text-sm font-bold text-slate-400 leading-relaxed mb-10">
                     사내 인프라(On-Premise) 구축은 물론, 아크로니스 전용 데이터 센터를 활용한 클라우드 백업까지 고객 환경에 맞춘 최적화 구성을 지원합니다.
                  </p>
                  <div className="flex gap-12">
                     <div>
                        <div className="text-2xl font-black text-blue-600">01</div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">On-Premise</span>
                     </div>
                     <div>
                        <div className="text-2xl font-black text-blue-600">02</div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Cloud Backup</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Background Ambient */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
      </section>

      <section className="text-center py-20 px-8">
         <h4 className="text-3xl font-black text-slate-900 mb-6 italic text-blue-600">Reliable Data Insurance</h4>
         <p className="max-w-3xl mx-auto text-slate-500 font-bold leading-relaxed text-lg">
            (주)솔모정보기술은 축적된 백업 마이그레이션 노하우와 긴급 복구 대응 체계를 통해 
            귀사의 비즈니스가 멈추지 않도록 든든한 기술 보험이 되어드립니다.
         </p>
      </section>
    </div>
  );
}

function BackupCard({ title, desc }) {
   return (
      <div className="p-10 bg-white/5 border border-white/10 rounded-[3.5rem] hover:bg-blue-600 hover:border-transparent transition-all group">
         <h4 className="text-xl font-black mb-4 group-hover:italic">{title}</h4>
         <p className="text-sm font-bold text-white/40 leading-relaxed group-hover:text-white">{desc}</p>
      </div>
   );
}
