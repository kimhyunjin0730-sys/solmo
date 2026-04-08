'use client';

export default function OrganizationPage() {
  const personnelData = [
    { label: "특급 기술자", value: 19, color: "#001F5B", desc: "고도의 전문 지식과 풍부한 실무 경험 보유" },
    { label: "고급 기술자", value: 31, color: "#3B82F6", desc: "복합적인 해결 능력을 갖춘 보안 전문가" },
    { label: "중급 기술자", value: 21, color: "#60A5FA", desc: "검증된 프로젝트 수행 및 운영 역량" },
    { label: "초급 기술자", value: 29, color: "#BFDBFE", desc: "패기와 열정을 갖춘 차세대 기술 인력" },
  ];

  // SVG Pie Chart Calculation
  let cumulativeValue = 0;
  const paths = personnelData.map((item) => {
    const startAngle = (cumulativeValue / 100) * 360;
    cumulativeValue += item.value;
    const endAngle = (cumulativeValue / 100) * 360;

    const startX = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
    const startY = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
    const endX = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
    const endY = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);

    const largeArcFlag = item.value > 50 ? 1 : 0;

    return (
      <path
        key={item.label}
        d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
        fill={item.color}
        className="hover:opacity-80 transition-opacity cursor-pointer"
      />
    );
  });

  return (
    <div className="space-y-32 pb-40">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Organization</span>
        <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">효율적인 의사결정 체계</h3>
        <p className="text-slate-500 font-bold text-lg leading-relaxed">
          솔모정보기술은 전문성과 신뢰를 바탕으로 각 부서 간의 유기적인 협력 체계를 구축하고 있습니다.
        </p>
      </div>

      {/* Organization Chart Visual - FIXED HIERARCHY */}
      <div className="relative p-12 bg-slate-50 rounded-[4rem] border border-slate-100">
        <div className="flex flex-col items-center">
           {/* Level 1: CEO */}
           <OrgItem title="대표이사 (CEO)" highlight />
           
           <div className="w-px h-16 bg-slate-300"></div>
           
           {/* Level 2: Two Hubs */}
           <div className="grid grid-cols-2 gap-20 relative px-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-slate-300 pointer-events-none"></div>
              
              <div className="flex flex-col items-center">
                 <div className="w-px h-10 bg-slate-300"></div>
                 <OrgItem title="기업부설연구소" />
                 <p className="mt-4 text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded">X-Securitas 자체 개발</p>
              </div>

              <div className="flex flex-col items-center">
                 <div className="w-px h-10 bg-slate-300"></div>
                 <OrgItem title="경영관리부" subtitle="전반적인 기업 운영 및 경영 지원" />
                 
                 <div className="w-px h-16 bg-slate-300"></div>
                 
                 {/* Level 3: Departments under Management Admin */}
                 <div className="grid grid-cols-2 gap-x-12 gap-y-12">
                    <div className="flex flex-col items-center">
                       <div className="w-px h-8 bg-slate-300"></div>
                       <DeptItem title="사업1부" team="솔루션사업팀" />
                    </div>
                    <div className="flex flex-col items-center">
                       <div className="w-px h-8 bg-slate-300"></div>
                       <DeptItem title="사업2부" team="NW보안팀" />
                    </div>
                    <div className="flex flex-col items-center">
                       <div className="w-px h-8 bg-slate-300"></div>
                       <DeptItem title="사업3부" team="보안관제사업팀" />
                    </div>
                    <div className="flex flex-col items-center">
                       <div className="w-px h-8 bg-slate-300"></div>
                       <DeptItem title="SI사업부" team="SI사업팀" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Human Resources Statistics */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">
         <div>
            <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">전문 엔지니어 중심의 <br />인력 현황</h4>
            <p className="text-slate-500 font-bold text-[15px] leading-relaxed mb-12">
               총 47명의 구성원 중 50% 이상이 특급 및 고급 기술자로 구성되어 있습니다. 
               이는 대규모 공공 및 금융 프로젝트에서 솔모정보기술이 신뢰받는 가장 큰 이유입니다.
            </p>
            <div className="space-y-6">
               {personnelData.map((item) => (
                 <div key={item.label} className="flex gap-6 items-start">
                    <div className="mt-2 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                    <div>
                       <div className="flex items-baseline gap-3 mb-1">
                          <span className="text-lg font-black text-slate-900">{item.label}</span>
                          <span className="text-blue-600 font-black text-xl italic">{item.value}%</span>
                       </div>
                       <p className="text-xs font-bold text-slate-400">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="relative group">
            <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-[100px]"></div>
            <div className="relative bg-white p-16 rounded-[4rem] shadow-2xl border border-slate-100 flex justify-center items-center">
               <svg viewBox="0 0 100 100" className="w-full max-w-[350px]">
                  {paths}
                  <circle cx="50" cy="50" r="22" fill="white" />
                  <text x="50" y="47" textAnchor="middle" fill="#001F5B" className="text-[6px] font-black uppercase tracking-widest">Total</text>
                  <text x="50" y="55" textAnchor="middle" fill="#001F5B" className="text-[10px] font-black leading-none">47</text>
               </svg>
            </div>
         </div>
      </div>
    </div>
  );
}

function OrgItem({ title, subtitle, highlight }) {
  return (
    <div className={`px-12 py-6 rounded-3xl text-[15px] font-black tracking-tighter uppercase shadow-xl transition-all relative ${
      highlight 
        ? "bg-[#001F5B] text-white" 
        : "bg-white text-slate-600 border border-slate-200"
    }`}>
      {title}
      {subtitle && <p className="text-[9px] font-bold opacity-40 mt-1 normal-case">{subtitle}</p>}
    </div>
  );
}

function DeptItem({ title, team }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-44 text-center group hover:border-blue-600 transition-colors">
       <div className="text-[10px] font-bold text-blue-600 mb-1">{title}</div>
       <div className="text-xs font-black text-slate-900 group-hover:text-blue-700 transition-colors">{team}</div>
    </div>
  );
}
