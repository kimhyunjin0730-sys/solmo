import type { ProductFeature } from '@/types/product';

/**
 * HIWARE(NETAND) 8-모듈 라인업.
 * PPT 슬라이드의 8개 제품 카드를 3개 카테고리로 묶어 재현:
 *   접근제어      — PSM · DBAM
 *   계정관리      — iM · DBM · ADiM
 *   기타 인증·관리 — SecureKey · CCTV PM · MobileOTP
 */

type Category = 'access' | 'account' | 'etc';

const META: Record<
  string,
  { code: string; category: Category }
> = {
  'hiware-psm': { code: 'PSM', category: 'access' },
  'hiware-dbam': { code: 'DBAM', category: 'access' },
  'hiware-im': { code: 'iM', category: 'account' },
  'hiware-dbm': { code: 'DBM', category: 'account' },
  'hiware-adim': { code: 'ADiM', category: 'account' },
  'hiware-securekey': { code: 'SecureKey', category: 'etc' },
  'hiware-cctv': { code: 'CCTV PM', category: 'etc' },
  'hiware-otp': { code: 'MobileOTP', category: 'etc' },
};

const CATEGORY_META: Record<
  Category,
  { label: string; tag: string; accent: string; chip: string; ring: string }
> = {
  access: {
    label: '접근제어 솔루션',
    tag: 'Access Control',
    accent: 'text-blue-600',
    chip: 'bg-blue-50 text-blue-700 border-blue-200',
    ring: 'group-hover:border-blue-400/50',
  },
  account: {
    label: '계정관리 솔루션',
    tag: 'Account Management',
    accent: 'text-emerald-600',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    ring: 'group-hover:border-emerald-400/50',
  },
  etc: {
    label: '기타 인증·관리 솔루션',
    tag: 'Auth & Management',
    accent: 'text-amber-600',
    chip: 'bg-amber-50 text-amber-700 border-amber-200',
    ring: 'group-hover:border-amber-400/50',
  },
};

/** 카테고리별 미니 글리프 */
function Glyph({ category }: { category: Category }) {
  if (category === 'access') {
    // 방패 + 잠금
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 4l11 4v8c0 7-5 12-11 16-6-4-11-9-11-16V8z" fill="#1E40AF" />
        <rect x="13" y="16" width="10" height="8" rx="1.5" fill="white" />
        <path d="M14.5 16v-2a3.5 3.5 0 0 1 7 0v2" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  if (category === 'account') {
    // 사용자 + 키
    return (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="15" cy="13" r="6" fill="#059669" />
        <path d="M5 30c0-6 4.5-9 10-9s10 3 10 9" fill="#059669" />
        <circle cx="27" cy="22" r="5" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
        <path d="M30 25l4 4M32 27l-1.5 1.5" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  // etc — 인증/체크
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14" fill="#F59E0B" />
      <path d="M12 18.5l4 4 8-9" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ModuleCard({ feature }: { feature: ProductFeature }) {
  const meta = META[feature.icon];
  if (!meta) return null;
  const cat = CATEGORY_META[meta.category];
  // title: "시스템 접근제어 (HIWARE PSM)" → "시스템 접근제어"
  const name = feature.title.replace(/\s*\(HIWARE[^)]*\)\s*/i, '').trim();

  return (
    <article
      className={`group relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:shadow-md ${cat.ring} transition-all duration-300`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="shrink-0">
          <Glyph category={meta.category} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-display text-[15px] sm:text-base font-bold text-[#001F5B] tracking-tight leading-tight break-keep">
            {name}
          </h4>
          <span
            className={`font-mono text-[10px] font-bold ${cat.accent} tracking-[0.1em]`}
          >
            HIWARE {meta.code}
          </span>
        </div>
      </div>
      <p className="text-[13px] font-medium text-slate-500 leading-relaxed break-keep mb-4">
        {feature.description}
      </p>
      <span
        className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border ${cat.chip}`}
      >
        {cat.label}
      </span>
    </article>
  );
}

export function HiwareLineup({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  const groups: { category: Category; items: ProductFeature[] }[] = [
    { category: 'access', items: [] },
    { category: 'account', items: [] },
    { category: 'etc', items: [] },
  ];
  for (const f of features) {
    const meta = META[f.icon];
    if (!meta) continue;
    groups.find((g) => g.category === meta.category)?.items.push(f);
  }

  return (
    <div className="space-y-8">
      {groups.map(({ category, items }) => {
        if (items.length === 0) return null;
        const cat = CATEGORY_META[category];
        return (
          <section key={category}>
            {/* 카테고리 헤더 */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`font-mono text-[10px] font-bold ${cat.accent} tracking-[0.25em] uppercase`}
              >
                {cat.tag}
              </span>
              <span className="text-sm font-bold text-slate-700">
                {cat.label}
              </span>
              <span className="font-mono text-[11px] text-slate-300 tabular-nums">
                {String(items.length).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>
            {/* 모듈 카드 그리드 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((f) => (
                <ModuleCard key={f.title} feature={f} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
