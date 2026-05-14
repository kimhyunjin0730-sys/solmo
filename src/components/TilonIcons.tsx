/**
 * Tilon VDI(Dstation) 4-모듈 일러스트 아이콘.
 * DDS · DAC · DDP · DMS — 각 모듈의 본질을 isometric 톤의
 * multi-color SVG로 표현한다. PPT 원본의 단순 outline 아이콘 톤보다
 * 한 단계 위의 illustrative 표현이 목표.
 */

type IconProps = { className?: string };

const SIZE = { width: 96, height: 96, viewBox: '0 0 96 96', fill: 'none' };

const NAVY = '#0B2A5B';
const NAVY_DEEP = '#001F5B';
const SKY = '#3B82F6';
const SKY_SOFT = '#DBEAFE';
const MINT = '#10B981';
const AMBER = '#F59E0B';
const CORAL = '#EF4444';
const PAPER = '#F8FAFC';

/** DDS — 디렉터리 트리 + 사용자 노드 (조직도/허브) */
export function DDSIcon({ className }: IconProps) {
  return (
    <svg
      {...SIZE}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 배경 후광 */}
      <circle cx="48" cy="48" r="42" fill={SKY_SOFT} opacity="0.5" />

      {/* 연결선 */}
      <path
        d="M48 36 V52 M48 52 H24 V64 M48 52 H48 V64 M48 52 H72 V64"
        stroke={NAVY}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* 루트 디렉터리 카드 */}
      <rect
        x="32"
        y="20"
        width="32"
        height="20"
        rx="3"
        fill={NAVY_DEEP}
      />
      <rect x="36" y="26" width="14" height="2" rx="1" fill={SKY} />
      <rect x="36" y="30" width="20" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="36" y="34" width="10" height="2" rx="1" fill="white" opacity="0.5" />

      {/* 좌측 사용자 노드 */}
      <circle cx="24" cy="70" r="8" fill="white" stroke={NAVY} strokeWidth="2" />
      <circle cx="24" cy="67.5" r="2.5" fill={SKY} />
      <path
        d="M19 73c0-3 2.5-4.5 5-4.5s5 1.5 5 4.5"
        stroke={SKY}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* 중앙 사용자 노드 */}
      <circle cx="48" cy="72" r="9" fill={SKY} />
      <circle cx="48" cy="69" r="2.8" fill="white" />
      <path
        d="M42 76c0-3 3-5 6-5s6 2 6 5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* 우측 사용자 노드 */}
      <circle cx="72" cy="70" r="8" fill="white" stroke={NAVY} strokeWidth="2" />
      <circle cx="72" cy="67.5" r="2.5" fill={MINT} />
      <path
        d="M67 73c0-3 2.5-4.5 5-4.5s5 1.5 5 4.5"
        stroke={MINT}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* 작은 액센트 점 */}
      <circle cx="80" cy="22" r="2" fill={AMBER} />
      <circle cx="16" cy="28" r="1.5" fill={CORAL} />
    </svg>
  );
}

/** DAC — 게이트(방패) + 접근 차단 슬래시 */
export function DACIcon({ className }: IconProps) {
  return (
    <svg
      {...SIZE}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="48" cy="48" r="42" fill={SKY_SOFT} opacity="0.5" />

      {/* 방패 본체 */}
      <path
        d="M48 18 L72 26 V46 C72 60 62 70 48 78 C34 70 24 60 24 46 V26 Z"
        fill={NAVY_DEEP}
      />
      <path
        d="M48 24 L66 30 V46 C66 56 58 64 48 70 C38 64 30 56 30 46 V30 Z"
        fill={NAVY}
        opacity="0.6"
      />

      {/* 자물쇠 */}
      <rect x="40" y="44" width="16" height="14" rx="2" fill="white" />
      <path
        d="M43 44 V40 a5 5 0 0 1 10 0 V44"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="48" cy="50" r="2" fill={NAVY_DEEP} />
      <line x1="48" y1="51" x2="48" y2="54" stroke={NAVY_DEEP} strokeWidth="2" />

      {/* 좌측 접근 시도 — 화살표 통과 */}
      <path
        d="M12 48 H22"
        stroke={MINT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M18 44 L22 48 L18 52" stroke={MINT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* 우측 접근 차단 — 슬래시 */}
      <circle cx="80" cy="48" r="9" fill="white" stroke={CORAL} strokeWidth="2.5" />
      <line x1="74.5" y1="42.5" x2="85.5" y2="53.5" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" />

      {/* 상단 빛 */}
      <circle cx="58" cy="20" r="2" fill={AMBER} />
    </svg>
  );
}

/** DDP — 데이터 패킷 + 암호화 키 / TLS 자물쇠 흐름 */
export function DDPIcon({ className }: IconProps) {
  return (
    <svg
      {...SIZE}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="48" cy="48" r="42" fill={SKY_SOFT} opacity="0.5" />

      {/* 좌측 데이터 박스 */}
      <rect x="14" y="38" width="20" height="20" rx="3" fill={NAVY_DEEP} />
      <rect x="18" y="42" width="12" height="2" fill={SKY} />
      <rect x="18" y="46" width="9" height="2" fill="white" opacity="0.7" />
      <rect x="18" y="50" width="11" height="2" fill="white" opacity="0.7" />
      <rect x="18" y="54" width="7" height="2" fill="white" opacity="0.4" />

      {/* 우측 데이터 박스 */}
      <rect x="62" y="38" width="20" height="20" rx="3" fill={NAVY} />
      <rect x="66" y="42" width="12" height="2" fill={MINT} />
      <rect x="66" y="46" width="9" height="2" fill="white" opacity="0.7" />
      <rect x="66" y="50" width="11" height="2" fill="white" opacity="0.7" />
      <rect x="66" y="54" width="7" height="2" fill="white" opacity="0.4" />

      {/* 암호화 통신 라인 (점선) */}
      <path
        d="M34 48 H62"
        stroke={SKY}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2 4"
      />

      {/* 중앙 자물쇠 (암호화 표식) */}
      <circle cx="48" cy="48" r="10" fill="white" stroke={NAVY_DEEP} strokeWidth="2" />
      <rect x="43" y="46" width="10" height="8" rx="1.5" fill={NAVY_DEEP} />
      <path
        d="M44.5 46 V43 a3.5 3.5 0 0 1 7 0 V46"
        stroke={NAVY_DEEP}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="48" cy="50" r="1.2" fill={AMBER} />

      {/* RSA / TLS 라벨 점 */}
      <circle cx="24" cy="28" r="2" fill={AMBER} />
      <circle cx="72" cy="28" r="2" fill={MINT} />
      <circle cx="20" cy="68" r="1.5" fill={CORAL} />
    </svg>
  );
}

/** DMS — 모니터 + 라이브 차트/경보 */
export function DMSIcon({ className }: IconProps) {
  return (
    <svg
      {...SIZE}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="48" cy="48" r="42" fill={SKY_SOFT} opacity="0.5" />

      {/* 모니터 베젤 */}
      <rect
        x="14"
        y="20"
        width="68"
        height="46"
        rx="4"
        fill={NAVY_DEEP}
      />
      <rect x="18" y="24" width="60" height="36" rx="2" fill={PAPER} />

      {/* 모니터 스탠드 */}
      <rect x="40" y="66" width="16" height="6" fill={NAVY} />
      <rect x="32" y="72" width="32" height="4" rx="2" fill={NAVY_DEEP} />

      {/* 차트 영역 */}
      <line x1="22" y1="54" x2="74" y2="54" stroke={NAVY} strokeWidth="1" opacity="0.2" />
      <line x1="22" y1="46" x2="74" y2="46" stroke={NAVY} strokeWidth="1" opacity="0.2" />
      <line x1="22" y1="38" x2="74" y2="38" stroke={NAVY} strokeWidth="1" opacity="0.2" />

      {/* 라인 그래프 */}
      <polyline
        points="22,50 30,42 38,46 46,34 54,40 62,30 70,36 78,32"
        stroke={SKY}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="22,56 30,52 38,54 46,48 54,52 62,46 70,50 78,44"
        stroke={MINT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />

      {/* 데이터 포인트 */}
      <circle cx="46" cy="34" r="2.2" fill={SKY} />
      <circle cx="62" cy="30" r="2.2" fill={SKY} />

      {/* 경보 점 */}
      <circle cx="74" cy="28" r="3" fill={CORAL} />
      <circle cx="74" cy="28" r="6" fill={CORAL} opacity="0.25" />

      {/* 상태 LED */}
      <circle cx="22" cy="28" r="1.5" fill={MINT} />
      <circle cx="27" cy="28" r="1.5" fill={AMBER} />
    </svg>
  );
}

const TILON_ICONS = {
  dds: DDSIcon,
  dac: DACIcon,
  ddp: DDPIcon,
  dms: DMSIcon,
} as const;

export function TilonIcon({
  iconKey,
  className,
}: {
  iconKey: string;
  className?: string;
}) {
  const Component = TILON_ICONS[iconKey as keyof typeof TILON_ICONS];
  if (!Component) return null;
  return <Component className={className} />;
}
