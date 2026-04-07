'use client';
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 py-32 relative overflow-hidden mb-24">
         <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000" alt="Service Hero" className="w-full h-full object-cover" />
         </div>
         <div className="max-w-[1400px] mx-auto px-8 relative z-10">
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Professional Support</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
              비즈니스의 안전을 책임지는 <br />
              <span className="text-blue-500 underline decoration-blue-500 decoration-8 underline-offset-16">토탈 보안 서비스.</span>
            </h1>
            <p className="text-white/40 text-xl font-medium max-w-3xl leading-relaxed">
               단순한 솔루션 공급을 넘어 전문 기술력과 22년의 노하우로 <br />
               귀사의 IT 인프라 가용성과 보안성을 극대화합니다. [cite: 12, 34]
            </p>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 space-y-40">
        
        {/* Section 1: Vulnerability Analysis */}
        <section id="vulnerability" className="grid lg:grid-cols-2 gap-24 items-center scroll-mt-32">
           <div>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-8">🛡️</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
                 보안취약점 분석 및 컨설팅 <br />
                 <span className="text-blue-600">Vulnerability Analysis</span>
              </h2>
              <p className="text-slate-500 font-bold leading-relaxed text-lg mb-12">
                 정보자산에 대한 잠재적 위협을 사전에 파악하여 완벽한 보안 대책을 수립합니다. 
                 웹/앱 서비스 및 내부 인프라의 취약점을 분석하여 해킹 사고를 미연에 방지합니다. [cite: 9, 174]
              </p>
              
              <div className="space-y-6">
                 <ExpertBullet title="모의해킹 (Penetration Testing)" desc="외부 전문가 관점에서 실제 해킹 시나리오를 통한 침투 테스트 수행 [cite: 175]" />
                 <ExpertBullet title="취약점 정밀 진단" desc="웹 서버, DB, 네트워크 장비 등의 설정 오류 및 보안 약점 점검 [cite: 174]" />
                 <ExpertBullet title="소스코드 진단 (Secure Coding)" desc="개발 단계에서의 취약점 제거를 위한 소스코드 분석 [cite: 175]" />
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-8">
                 <div className="text-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Impact</span>
                    <div className="text-2xl font-black text-slate-900 tracking-tighter italic">Compliance OK</div>
                 </div>
                 <div className="w-px h-10 bg-slate-200"></div>
                 <p className="text-xs font-bold text-slate-400">ISMS, 개인정보보호법 등 법적 요구사항 <br />준수 점검 및 법적 리스크 완벽 해소 [cite: 18]</p>
              </div>
           </div>
           <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Security Testing" className="w-full h-full object-cover" />
           </div>
        </section>

        {/* Section 2: Security Print */}
        <section id="print" className="grid lg:grid-cols-2 gap-24 items-center scroll-mt-32">
           <div className="lg:order-2">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-8">🖨️</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
                 보안프린트 / 출력물 보안 <br />
                 <span className="text-blue-600">Security Print</span>
              </h2>
              <p className="text-slate-500 font-bold leading-relaxed text-lg mb-12">
                 종이 문서를 통한 정보 유출을 원천 차단하는 스마트 보안 출력 솔루션입니다. 
                 자체 스크린 워터마크 기술 X-Securitas 기반으로 강력한 추적 체계를 구축합니다. [cite: 188]
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <MiniCard title="출력 워터마크 삽입" desc="인쇄 시 사용자 ID, IP, 날짜 등을 자동 삽입하여 유출 경로 추적 가능 [cite: 188]" />
                 <MiniCard title="출력 승인 및 통제" desc="민감 정보 포함 시 관리자 승인 절차를 통한 인쇄물 통제 [cite: 161]" />
                 <MiniCard title="상세 이력 감사" desc="누가, 언제, 무엇을 출력했는지에 대한 실시간 로그 기록 유지 [cite: 157]" />
                 <MiniCard title="인프라 연동" desc="기존 프린터 환경 유지하며 보안 모듈만 유연하게 연동 가능" />
              </div>
           </div>
           <div className="lg:order-1 relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Security Office" className="w-full h-full object-cover" />
           </div>
        </section>

        {/* Section 3: Total Maintenance */}
        <section id="maintenance" className="bg-[#001F5B] rounded-[4rem] p-16 md:p-32 text-white relative overflow-hidden scroll-mt-32">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -mr-300 -mt-300"></div>
           <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight">
                    통합 유지보수 서비스 <br />
                    <span className="text-blue-400">Total Maintenance</span>
                 </h2>
                 <p className="text-white/50 font-bold leading-relaxed text-xl mb-12">
                    단순 장애 처리를 넘어 정기 점검, 성능 최적화, 보안 업데이트 등 선제적 관리를 수행하여 24/365 안정적 운영을 보장합니다. [cite: 160, 172]
                 </p>
                 <div className="flex gap-12">
                    <StatItem value="47" unit="Experts" label="Technical Force" />
                    <StatItem value="50" unit="%" label="High-Grade Techs" />
                 </div>
              </div>
              <div className="w-full lg:flex-1 space-y-4">
                 <MaintenanceRow label="보안 시스템" value="UTM, 웹 방화벽(WAF), NAC, DLP 등 전반" />
                 <MaintenanceRow label="네트워크" value="L2/L3/L4 스위치 및 무선랜 최적화 관리" />
                 <MaintenanceRow label="서버 인프라" value="UNIX, Linux, Windows 서버 및 백업 관리" />
              </div>
           </div>
        </section>

      </div>

      {/* Inquiry Bottom */}
      <section className="mt-40 text-center py-20 bg-slate-50 border-t border-slate-100">
         <h3 className="text-3xl font-black text-slate-900 mb-8">상세 보안 서비스 컨설팅이 필요하신가요?</h3>
         <button className="px-12 py-5 bg-[#001F5B] text-white font-black rounded-full hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 active:scale-95">전문 엔지니어 상담하기</button>
      </section>

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

function ExpertBullet({ title, desc }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-all group">
       <div className="w-8 h-8 rounded-lg bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">✓</div>
       <div>
          <h4 className="text-[17px] font-black text-slate-900 mb-1">{title}</h4>
          <p className="text-sm font-bold text-slate-400 leading-relaxed group-hover:text-slate-600 transition-colors">{desc}</p>
       </div>
    </div>
  );
}

function MiniCard({ title, desc }) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
       <h4 className="text-lg font-black text-[#001F5B] mb-3">{title}</h4>
       <p className="text-xs font-bold text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function StatItem({ value, unit, label }) {
  return (
    <div>
       <div className="text-4xl font-black text-blue-400 tracking-tighter mb-1">{value}<span className="text-sm ml-1 opacity-50 uppercase">{unit}</span></div>
       <div className="text-[10px] font-black opacity-30 uppercase tracking-widest">{label}</div>
    </div>
  );
}

function MaintenanceRow({ label, value }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
       <span className="text-sm font-black text-blue-400">{label}</span>
       <span className="text-[13px] font-bold text-white/50">{value}</span>
    </div>
  );
}
