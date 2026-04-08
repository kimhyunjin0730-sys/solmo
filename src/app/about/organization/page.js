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
    <div className="space-y-20 sm:space-y-28 lg:space-y-32 pb-20 sm:pb-32 lg:pb-40">
      <div className="text-center max-w-3xl mx-auto px-2">
        <span className="text-blue-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-widest mb-3 sm:mb-4 block">Organization</span>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-5 sm:mb-8 leading-tight">효율적인 의사결정 체계</h3>
        <p className="text-slate-500 font-bold text-sm sm:text-base lg:text-lg leading-relaxed">
          솔모정보기술은 전문성과 신뢰를 바탕으로 각 부서 간의 유기적인 협력 체계를 구축하고 있습니다.
        </p>
      </div>

      {/* Organization Chart */}
      <OrgChart />

      {/* Human Resources Statistics */}
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
         <div className="order-2 lg:order-1">
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">전문 엔지니어 중심의 <br />인력 현황</h4>
            <p className="text-slate-500 font-bold text-sm sm:text-[15px] leading-relaxed mb-8 sm:mb-12">
               총 47명의 구성원 중 50% 이상이 특급 및 고급 기술자로 구성되어 있습니다.
               이는 대규모 공공 및 금융 프로젝트에서 솔모정보기술이 신뢰받는 가장 큰 이유입니다.
            </p>
            <div className="space-y-5 sm:space-y-6">
               {personnelData.map((item) => (
                 <div key={item.label} className="flex gap-4 sm:gap-6 items-start">
                    <div className="mt-2 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                    <div className="min-w-0 flex-1">
                       <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                          <span className="text-base sm:text-lg font-black text-slate-900">{item.label}</span>
                          <span className="text-blue-600 font-black text-lg sm:text-xl italic">{item.value}%</span>
                       </div>
                       <p className="text-xs font-bold text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="relative group order-1 lg:order-2">
            <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-[100px]"></div>
            <div className="relative bg-white p-8 sm:p-12 lg:p-16 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl border border-slate-100 flex justify-center items-center">
               <svg viewBox="0 0 100 100" className="w-full max-w-[260px] sm:max-w-[350px]">
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

/* ────────────── Organization Chart ────────────── */

const DIVISIONS = [
  { dept: "사업1부", team: "솔루션사업팀" },
  { dept: "사업2부", team: "NW기술팀" },
  { dept: "사업3부", team: "보안관제사업팀" },
  { dept: "SI사업부", team: "SI사업팀" },
];

function OrgChart() {
  return (
    <div className="relative p-5 sm:p-10 lg:p-16 bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] border border-slate-100">
      {/* Desktop: tree diagram */}
      <div className="hidden md:block">
        <DesktopTree />
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden">
        {/* CEO */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white rounded-full px-8 py-4 shadow-lg shadow-indigo-900/20 text-center">
            <div className="text-[9px] font-black uppercase tracking-[0.25em] opacity-70 mb-0.5">CEO</div>
            <div className="text-base font-black tracking-tight">대표이사</div>
          </div>
        </div>

        <MobileConnector />

        {/* Staff line */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-slate-200 rounded-2xl px-3 py-3 text-center">
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Staff</div>
            <div className="text-xs font-black text-slate-700 tracking-tight">기업부설연구소</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl px-3 py-3 text-center">
            <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Staff</div>
            <div className="text-xs font-black text-slate-700 tracking-tight">경영관리부</div>
          </div>
        </div>

        <MobileConnector />

        {/* 4 Divisions — combined dept + team cards */}
        <div className="space-y-3">
          {DIVISIONS.map((d) => (
            <div
              key={d.dept}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Department header */}
              <div className="bg-[#001F5B] text-white px-5 py-2.5 flex items-center justify-between">
                <span className="text-xs font-black tracking-tight">{d.dept}</span>
                <span className="text-[9px] font-black uppercase tracking-widest opacity-50">Division</span>
              </div>
              {/* Team body */}
              <div className="px-5 py-4 flex items-center justify-between">
                <div className="text-base font-black text-slate-900 tracking-tight">{d.team}</div>
                <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopTree() {
  // 4 columns centered at 12.5%, 37.5%, 62.5%, 87.5%
  const colCenters = [12.5, 37.5, 62.5, 87.5];

  return (
    <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: "5 / 4" }}>
      {/* SVG connecting lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* CEO → staff junction (vertical) */}
        <line x1="50" y1="14" x2="50" y2="32" stroke="#cbd5e1" strokeWidth="0.3" />
        {/* Staff horizontal line (research lab ↔ admin) */}
        <line x1="22" y1="32" x2="78" y2="32" stroke="#cbd5e1" strokeWidth="0.3" />
        {/* CEO → divisions junction (vertical, continues past staff) */}
        <line x1="50" y1="32" x2="50" y2="52" stroke="#cbd5e1" strokeWidth="0.3" />
        {/* Horizontal bus to 4 divisions */}
        <line
          x1={colCenters[0]}
          y1="52"
          x2={colCenters[3]}
          y2="52"
          stroke="#cbd5e1"
          strokeWidth="0.3"
        />
        {/* 4 vertical drops to division boxes */}
        {colCenters.map((cx) => (
          <line key={`d-${cx}`} x1={cx} y1="52" x2={cx} y2="60" stroke="#cbd5e1" strokeWidth="0.3" />
        ))}
        {/* Division → team connectors */}
        {colCenters.map((cx) => (
          <line key={`t-${cx}`} x1={cx} y1="72" x2={cx} y2="80" stroke="#cbd5e1" strokeWidth="0.3" />
        ))}
      </svg>

      {/* CEO */}
      <Node
        title="대표이사"
        tag="CEO"
        highlight
        style={{ top: "0%", left: "50%", transform: "translateX(-50%)" }}
      />

      {/* Staff functions */}
      <Node
        title="기업부설연구소"
        muted
        style={{ top: "27%", left: "22%", transform: "translateX(-50%)" }}
      />
      <Node
        title="경영관리부"
        muted
        style={{ top: "27%", left: "78%", transform: "translateX(-50%)" }}
      />

      {/* Divisions */}
      {DIVISIONS.map((d, i) => (
        <Node
          key={d.dept}
          title={d.dept}
          dark
          style={{
            top: "55%",
            left: `${colCenters[i]}%`,
            transform: "translateX(-50%)",
          }}
        />
      ))}

      {/* Teams */}
      {DIVISIONS.map((d, i) => (
        <TeamNode
          key={d.team}
          title={d.team}
          style={{
            top: "75%",
            left: `${colCenters[i]}%`,
            transform: "translateX(-50%)",
          }}
        />
      ))}
    </div>
  );
}

function Node({ title, tag, highlight, dark, muted, style }) {
  let cls =
    "absolute px-5 py-3 rounded-full text-sm font-black tracking-tight whitespace-nowrap shadow-md border transition-all";
  if (highlight)
    cls +=
      " bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white border-indigo-500 px-7 py-4 text-base shadow-xl shadow-indigo-900/20";
  else if (dark) cls += " bg-[#001F5B] text-white border-[#001F5B]";
  else if (muted) cls += " bg-white text-slate-500 border-slate-200";
  else cls += " bg-white text-slate-700 border-slate-200";

  return (
    <div className={cls} style={style}>
      {tag && (
        <span className="text-[9px] font-black uppercase tracking-widest opacity-70 mr-2">
          {tag}
        </span>
      )}
      {title}
    </div>
  );
}

function TeamNode({ title, style }) {
  return (
    <div
      className="absolute bg-white border border-slate-200 rounded-2xl px-4 py-4 text-center shadow-sm hover:border-blue-600 hover:shadow-md transition-all min-w-[110px]"
      style={style}
    >
      <div className="text-xs font-black text-slate-900 tracking-tight leading-tight">
        {title}
      </div>
    </div>
  );
}

function MobileConnector() {
  return <div className="w-px h-5 bg-slate-300 mx-auto my-3"></div>;
}
