'use client';
import Image from "next/image";

export default function OrganizationPage() {
  const departments = [
    {
      name: "기업부설연구소",
      role: "자체 솔루션 개발 및 기술 연구",
      desc: "X-Securitas 등 핵심 보안 솔루션 R&D",
      color: "border-blue-600 bg-blue-50"
    },
    {
      name: "경영관리부",
      role: "경영 지원 및 기업 운영",
      desc: "인사, 재무, 기획 등 전반적 경영 관리",
      color: "border-slate-400 bg-slate-50"
    },
    {
      name: "사업 1부",
      role: "솔루션사업팀",
      desc: "보안 솔루션 영업 및 전문 컨설팅",
      color: "border-[#001F5B] bg-white"
    },
    {
      name: "사업 2부",
      role: "NW기술팀",
      desc: "네트워크 보안 인프라 기술 지원",
      color: "border-[#001F5B] bg-white"
    },
    {
      name: "사업 3부",
      role: "보안관제사업팀",
      desc: "보안 운영 및 상시 수탁 관제 서비스",
      color: "border-[#001F5B] bg-white"
    },
    {
      name: "SI 사업부",
      role: "SI사업팀",
      desc: "시스템 통합 및 대규모 인프라 구축",
      color: "border-[#001F5B] bg-white"
    }
  ];

  return (
    <div className="animate-reveal">
      <div className="mb-16">
        <h2 className="text-3xl font-black text-slate-900 mb-6">조직도</h2>
        <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
          (주)솔모정보기술은 각 부서 간의 유기적인 협력 체계를 통해 <br />
          신속한 의사결정과 전문적인 보안 서비스를 제공하고 있습니다.
        </p>
      </div>

      {/* Organizational Hierarchy Chart */}
      <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden mb-24 border border-slate-100 shadow-inner">
         <div className="flex flex-col items-center relative z-10">
            {/* CEO Node */}
            <div className="w-64 p-8 bg-[#001F5B] text-white rounded-3xl shadow-2xl text-center relative z-20 mb-20 transform hover:scale-105 transition-transform">
               <span className="text-[10px] font-black tracking-widest opacity-60 uppercase mb-2 block">Leadership</span>
               <h3 className="text-2xl font-black italic tracking-widest">대표이사</h3>
               <div className="mt-2 text-[11px] font-bold opacity-40">CEO</div>
               {/* Vertical Connector */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-[#001F5B] to-slate-200"></div>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative">
               {/* Horizontal branch line for big screens */}
               <div className="hidden lg:block absolute top-0 left-[16.6%] right-[16.6%] h-0.5 bg-slate-200 -translate-y-px"></div>
               
               {departments.map((dept, idx) => (
                 <div key={dept.name} className="relative group">
                    {/* Vertical Connector to branch line */}
                    <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-200"></div>
                    
                    <div className={`p-8 rounded-[2rem] border-2 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl ${dept.color} relative z-10`}>
                       <h4 className="text-lg font-black text-slate-900 mb-2">{dept.name}</h4>
                       <div className="text-sm font-black text-blue-600 mb-4">{dept.role}</div>
                       <p className="text-xs font-bold text-slate-400 leading-relaxed">{dept.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-[120px] opacity-30 -ml-48 -mb-48"></div>
      </div>

      {/* Manpower Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6">전문 인력 현황</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
               전체 47명의 인력 중 대다수가 국가 공인 자격 및 전문 기술 등급을 보유하고 있으며, 
               수많은 보안 프로젝트 수행 경험을 바탕으로 최상의 성능을 보장합니다.
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-slate-900 text-white rounded-2xl shadow-xl">
               <span className="text-xs font-bold opacity-60 uppercase tracking-widest">Total Force</span>
               <span className="text-2xl font-black italic">47</span>
               <span className="text-xs font-bold opacity-60 uppercase tracking-widest">Technicians</span>
            </div>
         </div>

         <div className="grid grid-cols-2 gap-4">
            <StatBox label="특급" value="9" desc="수석 엔지니어" border="border-blue-600" />
            <StatBox label="고급" value="15" desc="선임 엔지니어" border="border-blue-400" />
            <StatBox label="중급" value="10" desc="전임 엔지니어" border="border-slate-300" />
            <StatBox label="초급" value="13" desc="주니어 엔지니어" border="border-slate-200" />
         </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, desc, border }) {
  return (
    <div className={`p-8 rounded-3xl bg-white border-b-4 ${border} shadow-lg shadow-slate-100 text-center transition-transform hover:scale-105`}>
       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">{label}</span>
       <div className="text-3xl font-black text-slate-900 mb-1">{value}<span className="text-sm ml-1 opacity-40 italic">명</span></div>
       <span className="text-[10px] font-bold text-slate-400">{desc}</span>
    </div>
  );
}
