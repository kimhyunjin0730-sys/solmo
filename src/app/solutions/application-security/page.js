'use client';
import Image from "next/image";

export default function ApplicationSecurityPage() {
  return (
    <div className="space-y-32 pb-40">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Software & App Security</span>
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          소프트웨어 무결성과 <br />
          <span className="text-blue-600">업무 생산성의 조화.</span>
        </h2>
        <p className="text-slate-500 font-bold text-lg leading-relaxed">
          윈도우 단말부터 비즈니스 문서 툴까지, 
          업무 환경 전반의 보안 수준을 높이고 가용성을 확보합니다.
        </p>
      </header>

      {/* 1. PMS (Patch Management System) */}
      <section className="scroll-mt-32" id="pms">
         <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            <div className="flex flex-col justify-center">
               <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">ITStantion 패치관리시스템 (PMS)</h3>
               <p className="text-slate-500 font-bold leading-relaxed mb-12 text-lg">
                  윈도우 단말 및 서버의 보안 공백을 실시간으로 메웁니다. 
                  운영체제의 최신 패치부터 필수 보안 SW 배포 및 중앙 관리 체계를 확립합니다.
               </p>
               <div className="space-y-8">
                  <PMSFeature title="자동 보안 패치" desc="OS 및 어플리케이션 패치 강제 업데이트 수행" />
                  <PMSFeature title="네트워크 가용성" desc="좀비 PC 차단으로 트래픽 안정성 유지" />
                  <PMSFeature title="전사 단말 관리" desc="패치 적용 현황 수집 및 통계 리포트 원격 제공" />
               </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 relative group overflow-hidden">
               <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-10">Product Versions</h4>
               <div className="space-y-6">
                  <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
                     <div className="text-2xl font-black text-[#001F5B] mb-2 underline decoration-blue-500">TA-PRS</div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enhanced Patch Management</p>
                  </div>
                  <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100">
                     <div className="text-2xl font-black text-[#001F5B] mb-2 underline decoration-blue-500">TA-FDM</div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">File Deployment Management</p>
                  </div>
               </div>
               <div className="mt-12 p-8 bg-blue-600 rounded-[3rem] text-white">
                  <h5 className="font-black text-lg mb-2 italic">Expectation</h5>
                  <p className="text-sm font-bold opacity-60 leading-relaxed">보안 약점을 사전에 제거하여 외부 공격 노출 시간을 원천 차단합니다.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 2. Gaaiho PDF */}
      <section className="bg-slate-900 p-20 lg:p-32 rounded-[5rem] text-white">
         <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
               <Image src="/images/product/Gaaiho.png" alt="Gaaiho" width={180} height={60} className="mb-12" />
               <h3 className="text-4xl font-black italic tracking-tighter mb-8 italic text-blue-500 uppercase">Gaaiho PDF Suite</h3>
               <p className="text-white/40 font-bold leading-relaxed mb-12">
                  단순 뷰어를 넘어선 강력한 통합 PDF 솔루션. 
                  기업의 문서 생산성을 혁신하고 페이퍼리스(Paperless) 환경을 구축합니다.
               </p>
               <div className="p-10 border border-white/10 rounded-[3rem] bg-white/5">
                  <div className="text-3xl font-black mb-1">99%</div>
                  <p className="text-[10px] font-black uppercase text-blue-400 tracking-[0.3em]">Compatibility Rate</p>
               </div>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
               <PDFItem title="Gaaiho DOC" desc="전문적인 편집 도구로 PDF를 워드처럼 직접 수정" />
               <PDFItem title="Converter" desc="병합, 분할 및 엑셀/워드 정밀 역변환 지원" />
               <PDFItem title="Manager" desc="내 PC 곳곳의 수많은 PDF를 지능적으로 탐색" />
               <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                  <MiniFeature title="OCR 지원" />
                  <MiniFeature title="전자서명" />
                  <MiniFeature title="파일 최적화" />
                  <MiniFeature title="클라우드 연동" />
               </div>
            </div>
         </div>
      </section>

      <div className="bg-slate-50 p-20 rounded-[4rem] text-center max-w-4xl mx-auto">
         <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">디지털 트랜스포메이션의 시작</h4>
         <p className="text-slate-400 font-bold text-sm leading-relaxed uppercase tracking-widest">
            (주)솔모정보기술은 기업의 보안 공백을 메우는 것은 물론, <br />
            임직원의 업무 편의성을 극대화하는 검증된 어플리케이션을 선별하여 공급합니다.
         </p>
      </div>
    </div>
  );
}

function PMSFeature({ title, desc }) {
   return (
      <div className="flex gap-6 items-start">
         <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black flex-shrink-0">✔</div>
         <div>
            <div className="text-lg font-black text-slate-900 mb-1">{title}</div>
            <p className="text-xs font-bold text-slate-400 leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}

function PDFItem({ title, desc }) {
   return (
      <div className="p-10 bg-white/5 border border-white/10 rounded-[3.5rem] hover:bg-blue-600 hover:border-transparent transition-all group">
         <h4 className="text-xl font-black mb-4 group-hover:italic">{title}</h4>
         <p className="text-sm font-bold text-white/40 leading-relaxed group-hover:text-white">{desc}</p>
      </div>
   );
}

function MiniFeature({ title }) {
   return (
      <div className="text-center font-black text-[10px] text-white/30 uppercase tracking-[0.4em]">{title}</div>
   );
}
