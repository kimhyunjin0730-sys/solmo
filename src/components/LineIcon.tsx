/**
 * 제품 features에서 쓰는 라인 스타일 SVG 아이콘.
 * PPT의 간결한 outline 아이콘과 결을 맞춤 (emoji / AI 아이콘 ❌).
 *
 * features[i].icon에 키를 박아 두면 페이지가 이 컴포넌트로 매핑.
 */

export type LineIconName =
  | 'shield-check'
  | 'clock'
  | 'monitor'
  | 'key'
  | 'globe'
  | 'lock'
  | 'database'
  | 'server'
  | 'network'
  | 'cloud'
  | 'users'
  | 'shield'
  | 'gauge'
  | 'radar'
  | 'eye'
  | 'wand'
  | 'list-checks'
  | 'bar-chart'
  | 'branch'
  | 'agent'
  | 'gateway'
  | 'policy'
  | 'activity'
  | 'hand'
  | 'brain'
  | 'expand'
  | 'savings'
  | 'refresh-ccw'
  | 'crosshair'
  | 'camera-off'
  | 'user-check'
  | 'file-text'
  | 'mail'
  | 'send'
  | 'package'
  | 'factory'
  | 'usb'
  | 'workflow'
  | 'search'
  | 'zap';

const COMMON = {
  width: 32,
  height: 32,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function LineIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const cls = className ?? 'w-8 h-8';
  const props = { ...COMMON, className: cls };

  switch (name as LineIconName) {
    case 'shield-check':
      return (
        <svg {...props}>
          <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 16 14" />
        </svg>
      );
    case 'monitor':
      return (
        <svg {...props}>
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="18" x2="12" y2="21" />
        </svg>
      );
    case 'key':
      return (
        <svg {...props}>
          <circle cx="7" cy="14" r="4" />
          <path d="M10 11 21 0" />
          <path d="m17 4 3 3" />
          <path d="m15 6 3 3" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case 'lock':
      return (
        <svg {...props}>
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      );
    case 'database':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case 'server':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="7" rx="2" />
          <rect x="3" y="14" width="18" height="7" rx="2" />
          <line x1="7" y1="6.5" x2="7.01" y2="6.5" />
          <line x1="7" y1="17.5" x2="7.01" y2="17.5" />
        </svg>
      );
    case 'network':
      return (
        <svg {...props}>
          <rect x="2" y="2" width="6" height="6" rx="1" />
          <rect x="16" y="2" width="6" height="6" rx="1" />
          <rect x="9" y="16" width="6" height="6" rx="1" />
          <path d="M5 8v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M12 12v4" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...props}>
          <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8 6 6 0 0 0-11.6 2.3A4 4 0 0 0 6 19h11.5z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2 21a7 7 0 0 1 14 0" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M22 19a5 5 0 0 0-6-4.5" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
        </svg>
      );
    case 'gauge':
      return (
        <svg {...props}>
          <path d="M3 12a9 9 0 1 1 18 0" />
          <path d="m12 12 4-4" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case 'radar':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case 'eye':
      return (
        <svg {...props}>
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'wand':
      return (
        <svg {...props}>
          <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M17.8 6.2 19 5M3 21l9-9M12.2 6.2 11 5" />
        </svg>
      );
    case 'list-checks':
      return (
        <svg {...props}>
          <path d="m3 7 2 2 4-4" />
          <path d="m3 17 2 2 4-4" />
          <line x1="12" y1="6" x2="21" y2="6" />
          <line x1="12" y1="12" x2="21" y2="12" />
          <line x1="12" y1="18" x2="21" y2="18" />
        </svg>
      );
    case 'bar-chart':
      return (
        <svg {...props}>
          <line x1="4" y1="20" x2="4" y2="10" />
          <line x1="10" y1="20" x2="10" y2="4" />
          <line x1="16" y1="20" x2="16" y2="14" />
          <line x1="22" y1="20" x2="22" y2="8" />
        </svg>
      );
    /** PPT의 분기 트리 아이콘 — TACACS 계정 검증/연결 의미 */
    case 'branch':
      return (
        <svg {...props}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M8 7l8 4M8 17l8-4" />
        </svg>
      );
    /** Genian ZTNA — PC + 톱니 (agent), 게이트웨이, 정책서버 */
    case 'agent':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="8" y1="20" x2="16" y2="20" />
          <line x1="12" y1="16" x2="12" y2="20" />
          <circle cx="17" cy="9" r="1.5" />
        </svg>
      );
    case 'gateway':
      return (
        <svg {...props}>
          <path d="M3 13a4 4 0 0 0 4-4 5 5 0 0 1 10 0 4 4 0 0 0 0 8H7a4 4 0 0 1-4-4z" />
          <line x1="9" y1="16" x2="9" y2="20" />
          <line x1="15" y1="16" x2="15" y2="20" />
        </svg>
      );
    case 'policy':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="6" rx="1" />
          <rect x="3" y="13" width="18" height="6" rx="1" />
          <line x1="7" y1="8" x2="7.01" y2="8" />
          <line x1="7" y1="16" x2="7.01" y2="16" />
        </svg>
      );
    /** 연속성·생동 — 심전도 파형 */
    case 'activity':
      return (
        <svg {...props}>
          <polyline points="3 12 8 12 10 6 14 18 16 12 21 12" />
        </svg>
      );
    /** 공격 차단 — 손바닥 STOP */
    case 'hand':
      return (
        <svg {...props}>
          <path d="M9 11V5a1.5 1.5 0 0 1 3 0v6" />
          <path d="M12 11V4a1.5 1.5 0 0 1 3 0v8" />
          <path d="M15 12V6a1.5 1.5 0 0 1 3 0v9a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6v-3a1.5 1.5 0 0 1 3 0v2" />
        </svg>
      );
    /** AI 두뇌 */
    case 'brain':
      return (
        <svg {...props}>
          <path d="M9 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 1 5 3 3 0 0 0 4 2 3 3 0 0 0 3-2V5z" />
          <path d="M15 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-1 5 3 3 0 0 1-4 2 3 3 0 0 1-3-2V5z" />
          <line x1="12" y1="9" x2="12" y2="9.01" />
        </svg>
      );
    /** 확장성 — 양방향 화살표 (out arrows) */
    case 'expand':
      return (
        <svg {...props}>
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      );
    /** 비용 절감 — 동전에 화살표 down */
    case 'savings':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v8" />
          <path d="M9 13l3 3 3-3" />
        </svg>
      );
    /** 자동 복구 — 순환 화살표 */
    case 'refresh-ccw':
      return (
        <svg {...props}>
          <polyline points="1 4 1 10 7 10" />
          <polyline points="23 20 23 14 17 14" />
          <path d="M3.5 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.65 4.36A9 9 0 0 0 20.5 15" />
        </svg>
      );
    /** 표적 / 공격표면 — 크로스헤어 */
    case 'crosshair':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      );
    /** 캡처 차단 — 카메라 + 슬래시 */
    case 'camera-off':
      return (
        <svg {...props}>
          <path d="M21 7v10a2 2 0 0 1-2 2h-2.5" />
          <path d="M14.5 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2l1.5-2h7" />
          <line x1="3" y1="3" x2="21" y2="21" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    /** 사용자 인증 — 체크 사용자 */
    case 'user-check':
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2 21a7 7 0 0 1 14 0" />
          <polyline points="17 11 19 13 23 9" />
        </svg>
      );
    /** 문서 / 출력 */
    case 'file-text':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
        </svg>
      );
    /** 이메일 */
    case 'mail':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      );
    /** 발송 — 종이비행기 */
    case 'send':
      return (
        <svg {...props}>
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );
    /** 패키지 / 박스 */
    case 'package':
      return (
        <svg {...props}>
          <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
          <line x1="3" y1="7" x2="12" y2="11" />
          <line x1="12" y1="11" x2="21" y2="7" />
          <line x1="12" y1="11" x2="12" y2="21" />
        </svg>
      );
    /** 공장 / OT */
    case 'factory':
      return (
        <svg {...props}>
          <path d="M3 21V11l5 3V11l5 3V11l5 3v7z" />
          <line x1="3" y1="21" x2="21" y2="21" />
          <line x1="9" y1="17" x2="9.01" y2="17" />
          <line x1="14" y1="17" x2="14.01" y2="17" />
        </svg>
      );
    /** USB 디바이스 */
    case 'usb':
      return (
        <svg {...props}>
          <rect x="9" y="14" width="6" height="7" rx="1" />
          <line x1="12" y1="14" x2="12" y2="6" />
          <polyline points="9 9 12 6 15 9" />
          <circle cx="9" cy="3" r="1" />
          <circle cx="15" cy="3" r="1" />
          <line x1="9" y1="3" x2="15" y2="3" />
        </svg>
      );
    /** 워크플로 — 노드 연결 */
    case 'workflow':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <path d="M9 6h6M18 9v6M6 9v6a2 2 0 0 0 2 2h7" />
        </svg>
      );
    /** 검색 — 돋보기 */
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16" y2="16" />
        </svg>
      );
    /** 신속 / 전력 — 번개 */
    case 'zap':
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
