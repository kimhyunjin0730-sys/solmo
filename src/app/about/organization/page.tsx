'use client';

import type { CSSProperties } from 'react';

type Personnel = {
  label: string;
  value: number;
  color: string;
  desc: string;
};

const PERSONNEL_DATA: readonly Personnel[] = [
  {
    label: '특급 기술자',
    value: 19,
    color: '#001F5B',
    desc: '고도의 전문 지식과 풍부한 실무 경험 보유',
  },
  {
    label: '고급 기술자',
    value: 31,
    color: '#3B82F6',
    desc: '복합적인 해결 능력을 갖춘 보안 전문가',
  },
  {
    label: '중급 기술자',
    value: 21,
    color: '#60A5FA',
    desc: '검증된 프로젝트 수행 및 운영 역량',
  },
  {
    label: '초급 기술자',
    value: 29,
    color: '#BFDBFE',
    desc: '패기와 열정을 갖춘 차세대 기술 인력',
  },
];

/** CEO 직속 스태프 부서 (사업부와 별개). */
const STAFF_UNITS = ['경영관리팀', '기업부설연구소', 'SI사업부'] as const;

/** 사업부 6개. PPT 회사개요 조직도. */
type Division = {
  /** 부서명 */
  dept: string;
  /** 사업 영역 */
  scope: readonly string[];
};

const DIVISIONS: readonly Division[] = [
  {
    dept: '사업 1부',
    scope: ['시스템접근제어', '백업솔루션', '서버 백신'],
  },
  {
    dept: '사업 2부',
    scope: ['방화벽', '무선보안'],
  },
  {
    dept: '사업 3부',
    scope: ['NAC', '통합로그관리', '그 외 보안솔루션'],
  },
  {
    dept: '사업 4부',
    scope: ['네트워크 보안'],
  },
  {
    dept: '솔루션사업부',
    scope: ['VDI', '보안복합기', 'Radware'],
  },
  {
    dept: '기술지원부',
    scope: ['사업지원', '고객관리', '유지보수'],
  },
];

export default function OrganizationPage() {
  let cumulativeValue = 0;
  const paths = PERSONNEL_DATA.map((item) => {
    const startAngle = (cumulativeValue / 100) * 360;
    cumulativeValue += item.value;
    const endAngle = (cumulativeValue / 100) * 360;

    const startX = 50 + 40 * Math.cos(((startAngle - 90) * Math.PI) / 180);
    const startY = 50 + 40 * Math.sin(((startAngle - 90) * Math.PI) / 180);
    const endX = 50 + 40 * Math.cos(((endAngle - 90) * Math.PI) / 180);
    const endY = 50 + 40 * Math.sin(((endAngle - 90) * Math.PI) / 180);

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
    <div className="space-y-12 pb-10">
      <div className="text-center max-w-3xl mx-auto px-2">
        <span className="text-blue-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-widest mb-2 block">
          Organization
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">
          효율적인 의사결정 체계
        </h3>
        <p className="text-slate-500 font-bold text-xs sm:text-sm lg:text-base leading-relaxed">
          솔모정보기술은 전문성과 신뢰를 바탕으로 각 부서 간의 유기적인 협력
          체계를 구축하고 있습니다.
        </p>
      </div>

      <OrgChart />

      {/* 사업부별 업무 영역 카드 */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <h4 className="text-sm font-black text-blue-600 uppercase tracking-[0.5em] whitespace-nowrap">
            Business Scope
          </h4>
          <div className="w-full h-px bg-slate-200" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIVISIONS.map((d) => (
            <div
              key={d.dept}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-600 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-sm bg-red-500" />
                <span className="text-base font-black text-[#001F5B] tracking-tight">
                  {d.dept}
                </span>
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                사업 영역
              </div>
              <ul className="space-y-1.5">
                {d.scope.map((s) => (
                  <li
                    key={s}
                    className="text-sm font-bold text-slate-600 flex items-center gap-2"
                  >
                    <span className="text-slate-400">–</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            전문 엔지니어 중심의 <br />
            인력 현황
          </h4>
          <p className="text-slate-500 font-bold text-sm sm:text-[15px] leading-relaxed mb-8 sm:mb-12">
            총 47명의 구성원 중 50% 이상이 특급 및 고급 기술자로 구성되어
            있습니다. 이는 대규모 공공 및 금융 프로젝트에서 솔모정보기술이
            신뢰받는 가장 큰 이유입니다.
          </p>
          <div className="space-y-5 sm:space-y-6">
            {PERSONNEL_DATA.map((item) => (
              <div key={item.label} className="flex gap-4 sm:gap-6 items-start">
                <div
                  className="mt-2 w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                    <span className="text-base sm:text-lg font-black text-slate-900">
                      {item.label}
                    </span>
                    <span className="text-blue-600 font-black text-lg sm:text-xl italic">
                      {item.value}%
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group order-1 lg:order-2">
          <div className="absolute inset-0 bg-blue-100/30 rounded-full blur-[100px]" />
          <div className="relative bg-white p-8 sm:p-12 lg:p-16 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl border border-slate-100 flex justify-center items-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full max-w-[260px] sm:max-w-[350px]"
            >
              {paths}
              <circle cx="50" cy="50" r="22" fill="white" />
              <text
                x="50"
                y="47"
                textAnchor="middle"
                fill="#001F5B"
                className="text-[6px] font-black uppercase tracking-widest"
              >
                Total
              </text>
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fill="#001F5B"
                className="text-[10px] font-black leading-none"
              >
                47
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────── Organization Chart ────────────── */

function OrgChart() {
  return (
    <div className="relative p-5 sm:p-10 lg:p-14 bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] border border-slate-100">
      <div className="hidden md:block">
        <DesktopTree />
      </div>
      <div className="md:hidden">
        <MobileTree />
      </div>
    </div>
  );
}

function DesktopTree() {
  // 6 divisions evenly distributed
  const colCenters = [8.5, 25, 41.5, 58.5, 75, 91.5] as const;

  return (
    <div
      className="relative w-full max-w-6xl mx-auto"
      style={{ aspectRatio: '6 / 4' }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* CEO → staff junction */}
        <line
          x1="50"
          y1="13"
          x2="50"
          y2="50"
          stroke="#cbd5e1"
          strokeWidth="0.3"
        />
        {/* Staff left side line */}
        <line
          x1="50"
          y1="24"
          x2="22"
          y2="24"
          stroke="#cbd5e1"
          strokeWidth="0.3"
        />
        {/* Staff right side line */}
        <line
          x1="50"
          y1="36"
          x2="78"
          y2="36"
          stroke="#cbd5e1"
          strokeWidth="0.3"
        />
        {/* Horizontal bus to 6 divisions */}
        <line
          x1={colCenters[0]}
          y1="60"
          x2={colCenters[5]}
          y2="60"
          stroke="#cbd5e1"
          strokeWidth="0.3"
        />
        {/* 6 vertical drops */}
        {colCenters.map((cx) => (
          <line
            key={`drop-${cx}`}
            x1={cx}
            y1="60"
            x2={cx}
            y2="70"
            stroke="#cbd5e1"
            strokeWidth="0.3"
          />
        ))}
      </svg>

      {/* CEO */}
      <Node
        title="CEO"
        variant="highlight"
        style={{ top: '0%', left: '50%', transform: 'translateX(-50%)' }}
      />

      {/* Staff units — 좌우 분기 */}
      <Node
        title="경영관리팀"
        variant="muted"
        style={{ top: '21%', left: '22%', transform: 'translateX(-50%)' }}
      />
      <Node
        title="SI사업부"
        variant="muted"
        style={{ top: '21%', left: '78%', transform: 'translateX(-50%)' }}
      />
      <Node
        title="기업부설연구소"
        variant="muted"
        style={{ top: '33%', left: '34%', transform: 'translateX(-50%)' }}
      />

      {/* 6 Divisions */}
      {DIVISIONS.map((d, i) => (
        <Node
          key={d.dept}
          title={d.dept}
          variant="dark"
          style={{
            top: '55%',
            left: `${colCenters[i]}%`,
            transform: 'translateX(-50%)',
          }}
        />
      ))}

      {/* Each division's scope (사업 영역) under its node */}
      {DIVISIONS.map((d, i) => (
        <ScopeBox
          key={`scope-${d.dept}`}
          scopes={d.scope}
          style={{
            top: '70%',
            left: `${colCenters[i]}%`,
            transform: 'translateX(-50%)',
          }}
        />
      ))}
    </div>
  );
}

function MobileTree() {
  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white rounded-full px-8 py-4 shadow-lg shadow-indigo-900/20 text-center">
          <div className="text-[9px] font-black uppercase tracking-[0.25em] opacity-70 mb-0.5">
            CEO
          </div>
          <div className="text-base font-black tracking-tight">대표이사</div>
        </div>
      </div>

      <MobileConnector />

      <div className="grid grid-cols-3 gap-2">
        {STAFF_UNITS.map((unit) => (
          <div
            key={unit}
            className="bg-white border border-slate-200 rounded-xl px-2 py-3 text-center"
          >
            <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
              Staff
            </div>
            <div className="text-[11px] font-black text-slate-700 tracking-tight">
              {unit}
            </div>
          </div>
        ))}
      </div>

      <MobileConnector />

      <div className="space-y-3">
        {DIVISIONS.map((d) => (
          <div
            key={d.dept}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="bg-[#001F5B] text-white px-5 py-2.5 flex items-center justify-between">
              <span className="text-xs font-black tracking-tight">
                {d.dept}
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest opacity-50">
                Division
              </span>
            </div>
            <ul className="px-5 py-4 space-y-1">
              {d.scope.map((s) => (
                <li
                  key={s}
                  className="text-xs font-bold text-slate-600 flex items-center gap-2"
                >
                  <span className="text-slate-400">–</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

type NodeVariant = 'highlight' | 'dark' | 'muted' | 'default';

function Node({
  title,
  tag,
  variant = 'default',
  style,
}: {
  title: string;
  tag?: string;
  variant?: NodeVariant;
  style?: CSSProperties;
}) {
  let cls =
    'absolute px-4 py-2.5 rounded-full text-xs font-black tracking-tight whitespace-nowrap shadow-md border transition-all';
  if (variant === 'highlight')
    cls +=
      ' bg-gradient-to-br from-indigo-600 to-[#001F5B] text-white border-indigo-500 px-7 py-4 text-base shadow-xl shadow-indigo-900/20';
  else if (variant === 'dark')
    cls += ' bg-[#001F5B] text-white border-[#001F5B]';
  else if (variant === 'muted')
    cls += ' bg-white text-slate-500 border-slate-200';
  else cls += ' bg-white text-slate-700 border-slate-200';

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

function ScopeBox({
  scopes,
  style,
}: {
  scopes: readonly string[];
  style?: CSSProperties;
}) {
  return (
    <div
      className="absolute bg-cyan-50/80 border border-cyan-200 rounded-xl px-3 py-3 shadow-sm min-w-[110px] max-w-[150px]"
      style={style}
    >
      <div className="text-[8px] font-black uppercase tracking-widest text-cyan-700 mb-1.5">
        사업 영역
      </div>
      <ul className="space-y-0.5">
        {scopes.map((s) => (
          <li
            key={s}
            className="text-[10px] font-bold text-slate-700 leading-tight flex gap-1"
          >
            <span className="text-slate-400">–</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileConnector() {
  return <div className="w-px h-5 bg-slate-300 mx-auto my-3" />;
}
