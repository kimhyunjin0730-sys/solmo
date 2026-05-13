/**
 * Radware 핵심기능 전용 멀티컬러 일러스트 아이콘.
 * PPT 슬라이드 4의 6개 illustration 색감/형태를 재현 (coral / navy / mint).
 *
 * 단색 LineIcon 보다 illustrative + 색감 있어 PPT 톤에 더 가깝다.
 */

type IconProps = { className?: string };

const SIZE = { width: 56, height: 56, viewBox: '0 0 64 64', fill: 'none' };

// Palette inspired by Radware PPT
const CORAL = '#F87171';
const CORAL_DEEP = '#DC2626';
const NAVY = '#1E3A8A';
const NAVY_DEEP = '#0F172A';
const MINT = '#10B981';
const SKY = '#3B82F6';

/** 비즈니스 연속성 — 흐름·연속 음표 곡선 */
export function ContinuityIcon({ className }: IconProps) {
  return (
    <svg {...SIZE} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 44c8-8 14-16 26-16 6 0 10 4 10 9s-4 8-9 8c-4 0-7-3-7-6"
        stroke={CORAL}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="14" cy="44" r="4" fill={NAVY_DEEP} />
      <circle cx="50" cy="45" r="2.5" fill={CORAL_DEEP} />
      <line x1="50" y1="45" x2="50" y2="22" stroke={NAVY_DEEP} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** 정교한 공격 차단 — 손바닥 STOP + 동작선 */
export function StopHandIcon({ className }: IconProps) {
  return (
    <svg {...SIZE} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 34V18a3 3 0 0 1 6 0v14M28 32V14a3 3 0 0 1 6 0v18M34 32V16a3 3 0 0 1 6 0v18M40 32V20a3 3 0 0 1 6 0v16a12 12 0 0 1-12 12h-2a12 12 0 0 1-12-12v-6a3 3 0 0 1 6 0v4"
        stroke={CORAL_DEEP}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FEE2E2"
      />
      <path d="M12 22l-4-2M14 28H8M14 34l-4 2" stroke={CORAL} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** 오탐 최소화 — AI 뇌 / 박스 */
export function AIBrainIcon({ className }: IconProps) {
  return (
    <svg {...SIZE} className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="18" width="36" height="28" rx="6" fill="#EFF6FF" stroke={NAVY} strokeWidth="2.5" />
      <text x="32" y="36" textAnchor="middle" fontSize="14" fontWeight="900" fill={NAVY}>
        AI
      </text>
      <circle cx="18" cy="14" r="2.5" fill={CORAL_DEEP} />
      <circle cx="46" cy="14" r="2.5" fill={MINT} />
      <circle cx="18" cy="50" r="2.5" fill={MINT} />
      <circle cx="46" cy="50" r="2.5" fill={CORAL_DEEP} />
      <line x1="18" y1="16.5" x2="18" y2="18" stroke={NAVY} strokeWidth="2" />
      <line x1="46" y1="16.5" x2="46" y2="18" stroke={NAVY} strokeWidth="2" />
      <line x1="18" y1="47.5" x2="18" y2="46" stroke={NAVY} strokeWidth="2" />
      <line x1="46" y1="47.5" x2="46" y2="46" stroke={NAVY} strokeWidth="2" />
    </svg>
  );
}

/** 가시성과 관리 간소화 — 대시보드 (차트 패널) */
export function DashboardIcon({ className }: IconProps) {
  return (
    <svg {...SIZE} className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14" width="44" height="36" rx="3" fill="#EFF6FF" stroke={NAVY} strokeWidth="2.5" />
      <line x1="10" y1="22" x2="54" y2="22" stroke={NAVY} strokeWidth="2" />
      <polyline points="16 42 22 34 28 38 36 28 44 32" stroke={CORAL_DEEP} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="40" y="40" width="3" height="5" fill={MINT} />
      <rect x="46" y="37" width="3" height="8" fill={CORAL} />
      <circle cx="14" cy="18" r="1" fill={CORAL_DEEP} />
      <circle cx="18" cy="18" r="1" fill={MINT} />
      <circle cx="22" cy="18" r="1" fill={NAVY} />
    </svg>
  );
}

/** 유연성과 확장성 — 4방향 확장 다이아몬드 */
export function ExpandDiamondIcon({ className }: IconProps) {
  return (
    <svg {...SIZE} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 8 L48 32 L32 56 L16 32 Z"
        stroke={CORAL_DEEP}
        strokeWidth="2.5"
        fill="#FEE2E2"
      />
      <path d="M32 20 v-7 M32 44 v7 M44 32 h7 M20 32 h-7" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
      <path d="m32 13-3 3 M32 13l3 3 M32 51l-3-3 M32 51l3-3 M51 32l-3-3 M51 32l-3 3 M13 32l3-3 M13 32l3 3" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3" fill={CORAL} />
    </svg>
  );
}

/** 총 소유 비용 절감 — 금지 동그라미 + $ */
export function CostSavingIcon({ className }: IconProps) {
  return (
    <svg {...SIZE} className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" stroke={CORAL_DEEP} strokeWidth="3" fill="#FEE2E2" />
      <line x1="18" y1="18" x2="46" y2="46" stroke={CORAL_DEEP} strokeWidth="3" strokeLinecap="round" />
      <text x="32" y="38" textAnchor="middle" fontSize="20" fontWeight="900" fill={NAVY}>
        $
      </text>
    </svg>
  );
}

const RADWARE_ICONS = {
  activity: ContinuityIcon,
  hand: StopHandIcon,
  brain: AIBrainIcon,
  monitor: DashboardIcon,
  expand: ExpandDiamondIcon,
  savings: CostSavingIcon,
} as const;

export function RadwareIcon({
  iconKey,
  className,
}: {
  iconKey: string;
  className?: string;
}) {
  const Component = RADWARE_ICONS[iconKey as keyof typeof RADWARE_ICONS];
  if (!Component) return null;
  return <Component className={className} />;
}
