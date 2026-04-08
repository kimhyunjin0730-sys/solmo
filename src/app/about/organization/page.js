export default function OrganizationPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-24">
         <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Structure</span>
         <h3 className="text-5xl font-black tracking-tighter mb-8">조직도 및 인력인프라</h3>
         <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            (주)솔모정보기술은 유기적인 협력 체계를 통해 신속한 의사결정과 <br />
            전문적인 보안 서비스를 제공하고 있습니다.
         </p>
      </div>

      {/* Organization Tree Visualization */}
      <div className="relative pt-12 mb-40">
         <div className="flex justify-center mb-20 md:mb-32">
            <div className="bg-[#001F5B] text-white px-16 py-8 rounded-3xl font-black text-2xl shadow-2xl relative z-10 transition-transform hover:scale-105 border border-white/10 uppercase italic tracking-tighter">
               대표이사 <span className="text-blue-400 ml-2 text-sm not-italic opacity-60">CEO</span>
            </div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden xl:block absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-slate-200 -translate-y-16"></div>
            
            <OrgNode title="기업부설연구소" desc="자체 솔루션 개발 및 기술 연구" accent />
            <OrgNode title="경영관리부" desc="기업 운영 및 경영 지원" />
            <OrgNode title="사업 1부" desc="솔루션사업팀 / 컨설팅" />
            <OrgNode title="사업 2부" desc="NW기술팀 / 기술지원" />
            <OrgNode title="사업 3부" desc="보안관제사업팀 / 수탁관리" />
            <OrgNode title="SI 사업부" desc="SI사업팀 / 인프라구축" />
         </div>
      </div>

      {/* Manpower Stats section */}
      <div className="pt-24 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
         <div>
            <h4 className="text-3xl font-black text-slate-900 mb-8">전문 인력 인프라</h4>
            <div className="flex items-baseline gap-6 mb-10">
               <span className="text-7xl font-black text-blue-600 tracking-tighter italic">47</span>
               <span className="text-xl font-bold text-slate-400">Total Security Experts</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
               전체 인원의 90% 이상이 기술직으로 구성된 엔지니어 중심의 기업입니다. 
               특급 및 고급 전문가 비중이 높아 기술 난이도가 높은 프로젝트를 안정적으로 수행합니다.
            </p>
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem]">
               <div className="flex justify-between items-center mb-4">
                  <span className="font-black text-[#001F5B]">기술 전문성 만족도</span>
                  <span className="text-blue-600 font-black italic text-xl">98%</span>
               </div>
               <div className="w-full h-3 bg-white rounded-full overflow-hidden shadow-inner">
                  <div className="w-[98%] h-full bg-blue-500"></div>
               </div>
            </div>
         </div>
         
         <div className="grid grid-cols-2 gap-6">
            <StatCard label="Expert Class" title="특급전문가" value="9" color="bg-[#001F5B]" />
            <StatCard label="High Class" title="고급전문가" value="15" color="bg-blue-800" />
            <StatCard label="Middle Class" title="중급전문가" value="10" color="bg-blue-600" />
            <StatCard label="Junior Class" title="초급전문가" value="13" color="bg-blue-400" />
         </div>
      </div>
    </div>
  );
}

function OrgNode({ title, desc, accent }) {
  return (
    <div className="relative group">
       <div className={`p-8 rounded-[2rem] border transition-all h-full ${accent ? "bg-blue-600 border-transparent text-white" : "bg-white border-slate-100 hover:border-blue-500 text-slate-900"}`}>
          <h4 className={`text-lg font-black mb-3 ${accent ? "text-white" : "text-[#001F5B]"}`}>{title}</h4>
          <p className={`text-xs font-bold leading-relaxed ${accent ? "text-white/70" : "text-slate-400"}`}>{desc}</p>
       </div>
    </div>
  );
}

function StatCard({ label, title, value, color }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
       <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{label}</span>
       <h4 className="text-xl font-black text-slate-800 mb-6 tracking-tight">{title}</h4>
       <div className="flex items-baseline gap-2">
          <span className={`text-4xl font-black italic tracking-tighter ${color.replace('bg-', 'text-')}`}>{value}</span>
          <span className="text-sm font-bold text-slate-300">명</span>
       </div>
    </div>
  );
}
