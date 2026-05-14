/**
 * Proofpoint 이메일 보안 3-카드 일러스트.
 * PPT 원본의 단순 글로브/클라우드 톤을 살리되 multi-color · depth 를
 * 더해 한 단계 위의 시각화를 제공한다.
 */

type IconProps = { className?: string };

const SIZE = { width: 96, height: 96, viewBox: '0 0 96 96', fill: 'none' };

const NAVY = '#001F5B';
const NAVY_2 = '#1E3A8A';
const BLUE = '#2563EB';
const SKY = '#3B82F6';
const SKY_2 = '#60A5FA';
const SKY_SOFT = '#DBEAFE';
const MINT = '#10B981';
const AMBER = '#F59E0B';

/** 검증된 솔루션 제품군 — 입체 글로브 + 위도/경도 + 체크 마크 */
export function VerifiedGlobeIcon({ className }: IconProps) {
  return (
    <svg
      {...SIZE}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pp-globe-fill" cx="35%" cy="35%" r="75%">
          <stop offset="0%" stopColor={SKY_2} />
          <stop offset="55%" stopColor={BLUE} />
          <stop offset="100%" stopColor={NAVY} />
        </radialGradient>
      </defs>
      {/* 그림자 */}
      <ellipse cx="48" cy="84" rx="22" ry="3" fill={NAVY} opacity="0.12" />

      {/* 글로브 본체 */}
      <circle cx="48" cy="46" r="30" fill="url(#pp-globe-fill)" />

      {/* 위도 선 (3개) */}
      <ellipse
        cx="48"
        cy="46"
        rx="30"
        ry="10"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <ellipse
        cx="48"
        cy="46"
        rx="30"
        ry="20"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
        opacity="0.45"
      />
      <line
        x1="18"
        y1="46"
        x2="78"
        y2="46"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.5"
      />

      {/* 경도 선 */}
      <ellipse
        cx="48"
        cy="46"
        rx="10"
        ry="30"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <line
        x1="48"
        y1="16"
        x2="48"
        y2="76"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.55"
      />

      {/* 하이라이트 */}
      <ellipse cx="38" cy="34" rx="9" ry="6" fill="white" opacity="0.18" />

      {/* 우상단 검증 배지 */}
      <circle cx="74" cy="20" r="10" fill={MINT} />
      <path
        d="m69.5 20.5 3 3 5-6"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** 클라우드 사용 속도 및 혁신 — 클라우드 + 속도 라인 + 데이터 노드 */
export function CloudVelocityIcon({ className }: IconProps) {
  return (
    <svg
      {...SIZE}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pp-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={SKY_2} />
          <stop offset="100%" stopColor={BLUE} />
        </linearGradient>
      </defs>
      {/* 후광 클라우드 */}
      <path
        d="M22 38c0-9 7-15 15-15 5 0 9 2 12 6 2-2 5-3 8-3 7 0 12 5 12 12 4 1 7 5 7 9 0 6-5 10-11 10H26c-6 0-11-4-11-10 0-4 3-8 7-9z"
        fill={SKY_SOFT}
        opacity="0.6"
      />
      {/* 메인 클라우드 */}
      <path
        d="M24 44c0-8 6-13 13-13 4 0 8 2 10 5 2-2 4-3 7-3 6 0 11 4 11 11 3 1 6 4 6 8 0 5-4 8-9 8H28c-5 0-9-3-9-8 0-4 2-7 5-8z"
        fill="url(#pp-cloud)"
      />
      {/* 하이라이트 */}
      <path
        d="M30 38c1-4 5-6 8-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
      />

      {/* 속도/데이터 라인 — 클라우드 아래에서 좌→우로 흐름 */}
      <line
        x1="14"
        y1="74"
        x2="34"
        y2="74"
        stroke={NAVY}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="38"
        y1="74"
        x2="58"
        y2="74"
        stroke={BLUE}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="62"
        y1="74"
        x2="82"
        y2="74"
        stroke={SKY}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 데이터 노드 */}
      <circle cx="14" cy="74" r="3.5" fill={NAVY} />
      <circle cx="36" cy="74" r="4" fill={BLUE} />
      <circle cx="60" cy="74" r="4" fill={SKY} />
      <circle cx="82" cy="74" r="3.5" fill={MINT} />

      {/* 클라우드→노드 down-link */}
      <line
        x1="36"
        y1="62"
        x2="36"
        y2="70"
        stroke={BLUE}
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      <line
        x1="60"
        y1="62"
        x2="60"
        y2="70"
        stroke={SKY}
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />

      {/* 속도 표식 */}
      <path
        d="M68 38l8-4-2 5 6-2-6 6"
        stroke={AMBER}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** 광범위한 인텔리전스 및 가시성 — 글로브 + 레이더 스캔 + 위협 점 */
export function IntelligenceIcon({ className }: IconProps) {
  return (
    <svg
      {...SIZE}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pp-intel" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={SKY_SOFT} />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 레이더 후광 */}
      <circle cx="48" cy="48" r="42" fill="url(#pp-intel)" />

      {/* 외곽 링 */}
      <circle
        cx="48"
        cy="48"
        r="34"
        stroke={SKY}
        strokeWidth="1"
        strokeDasharray="2 3"
        fill="none"
        opacity="0.6"
      />
      <circle
        cx="48"
        cy="48"
        r="24"
        stroke={BLUE}
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />

      {/* 중앙 글로브 */}
      <circle cx="48" cy="48" r="16" fill={NAVY} />
      <ellipse
        cx="48"
        cy="48"
        rx="16"
        ry="6"
        stroke={SKY}
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <line
        x1="32"
        y1="48"
        x2="64"
        y2="48"
        stroke={SKY}
        strokeWidth="1"
        opacity="0.7"
      />
      <ellipse
        cx="48"
        cy="48"
        rx="6"
        ry="16"
        stroke={SKY}
        strokeWidth="1"
        fill="none"
        opacity="0.7"
      />
      <line
        x1="48"
        y1="32"
        x2="48"
        y2="64"
        stroke={SKY}
        strokeWidth="1"
        opacity="0.55"
      />

      {/* 레이더 스캔 sweep */}
      <path
        d="M48 48 L48 14 A34 34 0 0 1 78 30 Z"
        fill={SKY}
        opacity="0.18"
      />

      {/* 위협 포인트 (4) */}
      <circle cx="20" cy="30" r="3" fill={AMBER} />
      <circle cx="20" cy="30" r="6" fill={AMBER} opacity="0.25" />
      <circle cx="76" cy="68" r="3" fill={NAVY_2} />
      <circle cx="80" cy="34" r="2.5" fill={MINT} />
      <circle cx="24" cy="72" r="2.5" fill={SKY_2} />

      {/* 십자 가시선 */}
      <line x1="48" y1="6" x2="48" y2="12" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="84" x2="48" y2="90" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="48" x2="12" y2="48" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="84" y1="48" x2="90" y2="48" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const PROOFPOINT_ICONS = {
  globe: VerifiedGlobeIcon,
  cloud: CloudVelocityIcon,
  radar: IntelligenceIcon,
} as const;

export function ProofpointIcon({
  iconKey,
  className,
}: {
  iconKey: string;
  className?: string;
}) {
  const Component =
    PROOFPOINT_ICONS[iconKey as keyof typeof PROOFPOINT_ICONS];
  if (!Component) return null;
  return <Component className={className} />;
}
