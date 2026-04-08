'use client';
import Image from "next/image";

export default function DataLeakagePreventionPage() {
  return (
    <div className="space-y-32 pb-40">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Internal Data Protection</span>
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          내부에서 시작되는 유출, <br />
          <span className="text-blue-600">가장 완벽한 봉쇄.</span>
        </h2>
        <p className="text-slate-500 font-bold text-lg leading-relaxed">
          자체 개발 워터마크 기술부터 차세대 SIEM 관제까지, 
          데이터가 노출되는 모든 접점을 지능적으로 관리합니다.
        </p>
      </header>

      {/* 1. X-Securitas (SOLMO Original) */}
      <section className="bg-slate-900 p-20 rounded-[5rem] text-white relative overflow-hidden group">
         <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="flex items-center gap-4 mb-8">
                  <div className="px-5 py-2 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest italic animate-pulse">SOLMO Original</div>
                  <span className="px-3 py-1 border border-white/20 text-[10px] font-black uppercase tracking-widest rounded-lg">GS 1등급</span>
               </div>
               <h3 className="text-4xl font-black mb-8 italic tracking-tighter">xSecuritas Screen Watermark</h3>
               <p className="text-white/50 font-bold leading-relaxed mb-12 text-lg">
                  정보가 처음 노출되는 PC 화면부터 관리합니다. 캡처, 촬영 등 모든 유출 경로를 원천 차단하고 사고 발생 시 사후 추적이 가능하게 합니다.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <DLPPoint title="화면 촬영 방지" desc="사용자 정보 워터마크 실시간 오버레이" />
                  <DLPPoint title="VDI 완벽 지원" desc="가상 데스크톱 환경에서도 끊김 없는 보안" />
                  <DLPPoint title="캡처 원천 차단" desc="OS 수준에서 모든 스크린샷 기능 제어" />
                  <DLPPoint title="스마트 정책" desc="Web Console 기반 사용자별 개별 설정" />
               </div>
            </div>
            <div className="relative aspect-square bg-white/5 rounded-[4rem] border border-white/10 flex items-center justify-center p-12">
               <div className="text-center">
                  <div className="text-6xl font-black text-blue-500 mb-4 tracking-tighter italic">Enterprise</div>
                  <div className="text-xs font-black uppercase tracking-[0.5em] text-white/20 underline decoration-blue-500 decoration-2">v5.3 Registered</div>
               </div>
            </div>
         </div>
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* 2. IBM QRadar */}
      <section className="scroll-mt-32" id="qradar">
         <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            <div className="lg:w-1/2 p-16 bg-slate-50 rounded-[4rem] border border-slate-100 flex flex-col justify-between">
               <div>
                  <Image src="/images/product/ibm-logo.png" alt="IBM" width={100} height={40} className="mb-8" />
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">IBM QRadar SIEM</h3>
                  <p className="text-slate-500 font-bold leading-relaxed mb-10">
                     단순 로그 수집을 넘어 네트워크 플로우와 취약점 정보를 통합 분석합니다. 지능형 엔티티 연계 기술을 통해 사고 대응 시간을 획기적으로 단축합니다.
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between p-4 bg-white rounded-2xl shadow-sm italic font-black text-xs text-blue-600">
                     <span>REAL-TIME COLLECTION</span>
                     <span>ACTIVE</span>
                  </div>
                  <div className="flex justify-between p-4 bg-white rounded-2xl shadow-sm italic font-black text-xs text-blue-600">
                     <span>CORRELATION ANALYSIS</span>
                     <span>ENGINE V2</span>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 p-16 bg-[#001F5B] rounded-[4rem] text-white">
               <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-10">Intelligence Process</h4>
               <ul className="space-y-10">
                  <li className="flex gap-6">
                     <span className="text-3xl font-black text-blue-500 italic opacity-40">01</span>
                     <div>
                        <div className="text-lg font-black mb-1">위반행위 식별 가속화</div>
                        <p className="text-sm font-bold opacity-40 leading-relaxed">대규모 데이터 축소 및 실시간 통합 Analytics 수행</p>
                     </div>
                  </li>
                  <li className="flex gap-6">
                     <span className="text-3xl font-black text-blue-500 italic opacity-40">02</span>
                     <div>
                        <div className="text-lg font-black mb-1">우선순위 인시던트 선별</div>
                        <p className="text-sm font-bold opacity-40 leading-relaxed">비정상 탐지를 통해 대응이 시급한 위협 가시화</p>
                     </div>
                  </li>
                  <li className="flex gap-6">
                     <span className="text-3xl font-black text-blue-500 italic opacity-40">03</span>
                     <div>
                        <div className="text-lg font-black mb-1">컴플라이언스 리포팅</div>
                        <p className="text-sm font-bold opacity-40 leading-relaxed">각종 규제 및 내부 보안 감사에 대한 원클릭 대응</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* 3. DBSAFER */}
      <section className="bg-slate-50 p-20 rounded-[4rem]">
         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <Image src="/images/product/dsf.png" alt="PNP Secure" width={160} height={50} className="mb-8" />
               <h3 className="text-3xl font-black text-slate-900 mb-6">PNP Secure DBSAFER</h3>
               <p className="text-slate-500 font-bold leading-relaxed mb-12">
                  정교한 접근 통제와 SQL 감사 로깅을 통해 DB 보안 체계를 완성합니다. 가상 계정과 명령어 단위 제어로 내부 유출 위험을 제거합니다.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-2xl border border-slate-200">
                     <div className="text-blue-600 font-extrabold mb-1">전수 감사 로깅</div>
                     <p className="text-[10px] font-bold text-slate-400">모든 SQL 내역 실시간 저장 및 검색</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-slate-200">
                     <div className="text-blue-600 font-extrabold mb-1">컬럼 단위 제어</div>
                     <p className="text-[10px] font-bold text-slate-400">특정 테이블/컬럼에 대한 접근 한정</p>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {['Gate-Way', 'Sniffing', 'Agent', 'Hybrid'].map(mode => (
                  <div key={mode} className="p-10 bg-white shadow-xl rounded-3xl text-center border-t-4 border-blue-600">
                     <div className="text-xl font-black text-slate-900">{mode}</div>
                     <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Support Mode</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Sindoh uPrint */}
      <section className="relative h-[650px] rounded-[5rem] overflow-hidden group">
         <Image src="/images/product/sindoh-logo.png" alt="Sindoh" width={150} height={50} className="absolute top-16 left-16 z-20 brightness-0" />
         <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-1000"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
         <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 flex flex-col justify-center p-16 md:p-24 space-y-8">
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter">uPrint 스마트 문서 보안</h3>
            <p className="text-slate-500 font-bold text-lg leading-relaxed italic">
               사원증 인증 출력으로 방치된 문서를 없애고 모든 출력물에 대한 이력을 이미지로 관리합니다.
            </p>
            <div className="grid grid-cols-2 gap-8 text-sm font-black text-[#001F5B] uppercase">
               <div className="flex items-center gap-3">✔ 비용 30% 절감 효과</div>
               <div className="flex items-center gap-3">✔ 원본 이미지 실시간 저장</div>
               <div className="flex items-center gap-3">✔ 전사 단일 드라이버 사용</div>
               <div className="flex items-center gap-3">✔ 기기 고장 시 즉시 이동 출력</div>
            </div>
            <div className="pt-8">
               <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">Enterprise Printing Standard</span>
               <div className="text-2xl font-black text-slate-900">Sindoh MPS 4.0</div>
            </div>
         </div>
      </section>
    </div>
  );
}

function DLPPoint({ title, desc }) {
   return (
      <div className="space-y-1">
         <div className="text-blue-500 font-black text-[15px] italic">{title}</div>
         <p className="text-white/30 text-[11px] font-bold leading-relaxed">{desc}</p>
      </div>
   );
}
