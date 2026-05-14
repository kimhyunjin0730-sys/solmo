/**
 * 제품 카탈로그.
 *
 * 출처: 솔모정보기술 홈페이지 개편 기획 (홈페이지_솔루션_260511.pptx)
 *  - 4대 카테고리 / 21개 제품
 *  - 각 항목의 설명문은 PPT 본문 그대로 옮긴 뒤 줄바꿈/오탈자만 손봤음
 */

import type {
  Product,
  ProductCategory,
  ProductCategoryId,
} from '@/types/product';

export const CATEGORIES: readonly ProductCategory[] = [
  {
    id: 'network-security',
    name: '네트워크 보안',
    englishName: 'Network Security',
    tagline:
      '경계 보안, 접근 통제, 위협 탐지·대응까지 — 네트워크 전 영역을 지키는 멀티 벤더 라인업.',
  },
  {
    id: 'endpoint-server-security',
    name: '단말 / 서버 보안',
    englishName: 'Endpoint & Server Security',
    tagline:
      'DB·OS 접근 통제, 안티랜섬, 차세대 백신으로 단말과 서버를 동시에 방어합니다.',
  },
  {
    id: 'application-security',
    name: '애플리케이션 보안',
    englishName: 'Application Security',
    tagline:
      '워터마크·출력·이메일·VDI·백업까지, 업무 애플리케이션 전 구간의 정보 유출을 차단합니다.',
  },
  {
    id: 'ot-security',
    name: 'OT 보안 & 시스템',
    englishName: 'OT Security & Infrastructure',
    tagline:
      '생산 현장(OT)과 인프라 스토리지까지, IT 보안의 경계를 산업 환경으로 확장합니다.',
  },
] as const;

export const CATEGORY_BY_ID: Record<ProductCategoryId, ProductCategory> =
  Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
    ProductCategoryId,
    ProductCategory
  >;

// ───────────────────────────────────────────────────────────────────
// 1. 네트워크 보안 (9개)
// ───────────────────────────────────────────────────────────────────

const networkSecurityProducts: Product[] = [
  {
    id: 'fortinet',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/fortinet/logo.png',
      featureImages: ['/images/products/fortinet/feature-1.png', '/images/products/fortinet/feature-2.png', '/images/products/fortinet/feature-3.png', '/images/products/fortinet/feature-4.png', '/images/products/fortinet/feature-5.png', '/images/products/fortinet/feature-6.png'],
    },
    name: 'FortiGate UTM / VPN',
    vendor: 'FortiNet',
    shortDescription:
      '글로벌 네트워크 방화벽 점유율 50% 이상의 차세대 방화벽(NGFW).',
    longDescription:
      'FortiGate 네트워크 방화벽은 전 세계 네트워크 방화벽 시장 점유율 50% 이상을 차지하고 있습니다.\nFortiGate 차세대 방화벽(NGFW)은 하이브리드 환경에서 데이터와 자산, 사용자를 효과적으로 보호합니다.\n특히 고도화된 보안 프로세서를 통해 네트워크 성능을 가속화하며, 데이터 침해, 랜섬웨어, 클라우드 기반 애플리케이션 증가에 따른 위협을 실시간으로 차단합니다. 또한 FortiGate NGFW는 FortiGuard AI 기반 보안 서비스를 제공하여 최신 지능형 위협에도 빠르고 정확하게 대응하며, 사이버 공격 예방과 보안 위험 관리를 지원합니다.',
    badges: ['Fortinet Expert Partner', 'NGFW'],
    officialUrl: 'https://www.fortinet.com/kr',
    features: [
      {
        icon: 'ai',
        title: '지능형 AI 위협 방어',
        description:
          'FortiGuard AI 기반 보안 서비스가 알려지지 않은 신·변종 공격까지 실시간으로 차단합니다.',
      },
      {
        icon: 'asic',
        title: '전용 하드웨어 가속',
        description:
          '전용 ASIC 보안 프로세서가 암호화·검사 처리량을 끌어올려 성능 저하 없이 보호합니다.',
      },
      {
        icon: 'vpn',
        title: '통합 하이브리드 VPN',
        description:
          'IPSec·SSL VPN을 단일 어플라이언스에서 운영하며 본사·지사·재택을 안전하게 연결합니다.',
      },
      {
        icon: 'vdom',
        title: '고효율 가상화 보안 (VDOM)',
        description:
          '하나의 장비를 다수의 가상 도메인으로 분리해 멀티 테넌트 환경을 효율적으로 운영합니다.',
      },
      {
        icon: 'sdwan',
        title: '지능형 하이브리드 SD-WAN',
        description:
          '애플리케이션 인지 기반 경로 선택으로 회선 품질을 최적화하고 비용을 절감합니다.',
      },
      {
        icon: 'ztna',
        title: '제로 트러스트 보안 접속 (ZTNA)',
        description:
          '신뢰 전제 없이 사용자·디바이스를 지속적으로 검증해 최소 권한 원칙으로 접근을 통제합니다.',
      },
    ],
  },
  {
    id: 'radware',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/radware/logo.png',
    },
    name: 'Radware DDoS',
    vendor: 'Radware',
    shortDescription:
      '모든 유형의 AI 기반 DDoS 공격으로부터 네트워크와 애플리케이션을 보호합니다.',
    longDescription:
      'Radware DDoS 솔루션은 분산 서비스 거부(DDoS) 공격으로부터 네트워크와 애플리케이션을 보호하기 위해 설계된 고성능 보안 시스템입니다. 이 솔루션은 실시간 트래픽 분석과 인텔리전스 기반 위협 탐지를 통해 다양한 유형의 DDoS 공격을 신속하게 식별하고 자동으로 차단합니다.',
    officialUrl: 'https://www.radware.com',
    features: [
      {
        icon: 'activity',
        title: '비즈니스 연속성 유지',
        description:
          '최신 AI 기반 공격으로부터 서버 및 핵심 애플리케이션의 다운타임을 방지합니다.',
      },
      {
        icon: 'hand',
        title: '정교한 공격을 차단',
        description:
          '자동화된 실시간 시그니처로 가장 까다로운 제로데이 공격, DNS DDoS, 웹 DDoS 공격(복호화 필요 없음)까지 실시간 차단합니다.',
      },
      {
        icon: 'brain',
        title: '오탐 최소화',
        description:
          'AI 기반 행동 탐지 기능으로 악성 공격을 차단하면서 정상 트래픽은 그대로 통과시킵니다.',
      },
      {
        icon: 'monitor',
        title: '가시성과 관리 간소화',
        description:
          '고급 보안 대시보드로 모든 배포 환경에서 네트워크·공격 주기·완화 조치에 대한 통합 가시성을 확보합니다.',
      },
      {
        icon: 'expand',
        title: '유연성과 확장성을 갖춘 배포',
        description:
          '6Gbps부터 800Gbps까지 확장 가능한 솔루션으로 통합 가상·온프레미스·하이브리드 환경 모두를 보호합니다.',
      },
      {
        icon: 'savings',
        title: '총 소유 비용 절감',
        description:
          'AI와 자동화로 수동 작업을 줄이면서 동시에 완벽한 DDoS 공격 방어를 보장합니다.',
      },
    ],
  },
  {
    id: 'network-blackbox',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/network-blackbox/logo.png',
    },
    name: 'Network BlackBox',
    vendor: 'Quad Miners',
    shortDescription:
      '풀패킷 캡처 기반의 NDR(Network Detection and Response) 솔루션.',
    longDescription:
      '네트워크 블랙박스는 풀패킷 캡처 기반의 트래픽 전수검사를 통해 보안운영의 자동화를 지원하는 차별화된 차세대 NDR(Network Detection and Response) 솔루션입니다.\n\n풀패킷 캡쳐 및 수집(Capture & Collection)1 — 탐지(detection)2 — 헌팅(hunting)3  — 포렌식(forensic)4 — 대응(response)5의 5단계 핵심 기능을 모두 갖춰 사고 발생 시 신속한 원인 분석과 대응이 가능합니다.',
    officialUrl: 'https://quadminers.com/',
    features: [
      {
        icon: 'capture',
        title: '풀패킷 캡쳐 및 수집 (Capture & Collect)',
        description: '손실 없는 패킷 수집 및 분산 저장.',
      },
      {
        icon: 'detect',
        title: '탐지 (Detection)',
        description: '시그니처 / 행위 / 분석 기반 위협 탐지.',
      },
      {
        icon: 'hunt',
        title: '헌팅 (Hunting)',
        description: '잠재 위협 헌팅으로 보안사고 예방.',
      },
      {
        icon: 'forensic',
        title: '포렌식 (Forensic)',
        description: '추적, 탐지 및 헌팅된 위협 확정.',
      },
      {
        icon: 'response',
        title: '대응 (Response)',
        description: '보안팀의 신속한 대응 연계.',
      },
    ],
  },
  {
    id: 'piolink',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/piolink/logo.png',
    },
    name: 'PIOLINK SWITCH',
    vendor: 'PIOLINK',
    shortDescription:
      'L4/L7 스위치와 침입방지(IPS) 기능을 결합한 통합 네트워크 어플라이언스.',
    longDescription:
      '파이오링크 PAS-K는 중대형 기업 및 기관의 네트워크 보안을 목적한 차세대 방화벽 및 침입방지 시스템(IPS)입니다. 이 장비는 네트워크 트래픽을 실시간으로 분석하여 애플리케이션 기반의 세밀한 제어와 다양한 보안 위협으로부터 네트워크를 보호합니다.',
    officialUrl: 'https://www.piolink.com/kr',
    features: [],
    featureBullets: [
      '다양한 부하분산(Load Balancing)',
      '다양한 리다이렉션',
      '다양한 이중화(Failover)',
      'TCP 멀티플렉싱',
      'REST API',
      '서버 오프로드',
      '네트워크 주소 변환',
      '네트워크 레벨 보안',
      'DDoS 방어 및 서버 정보 은폐',
      'Script 기반 제어 및 설정',
      'HTTP 압축 및 메모리 캐싱',
      '네트워크 방화벽',
      '트랜잭션 보장 및 HTML 최적화',
      '트래픽 폭주 제어 및 연결 보장',
      '클라우드 오케스트레이션 연동 플러그인 등',
    ],
  },
  {
    id: 'genian-ztna',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/genian-ztna/logo.png',
      diagrams: [
        {
          src: '/images/products/genian-ztna/components.png',
          caption:
            '구성 요소 — ZTNA Agent · ZTNA G/W · ZTNA Policy',
        },
        {
          src: '/images/products/genian-ztna/architecture.png',
          caption:
            'Genian ZTNA 구성 — On-Prem / Cloud / Hybrid 배포 모델',
        },
      ],
    },
    name: 'Genian ZTNA / NAC',
    vendor: 'Genians',
    shortDescription:
      'Genian ZTNA(제로 트러스트 네트워크 액세스) — 사용자·기기 신뢰도를 지속 검증하는 첨단 보안 솔루션.',
    longDescription:
      'Genian ZTNA(제로 트러스트 네트워크 액세스) 시스템은 전통적인 경계 기반 보안 모델을 탈피하여, 사용자와 기기의 신뢰도를 지속적으로 검증하며 최소 권한 원칙에 따라 네트워크 접근을 제어하는 첨단 보안 솔루션입니다.',
    badges: ['Zero Trust'],
    officialUrl: 'https://www.genians.co.kr/',
    features: [],
  },
  {
    id: 'nx-portrait',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/nx-portrait/logo.png',
    },
    name: 'NX Portrait',
    vendor: '엘로이큐브',
    shortDescription:
      '방화벽 정책의 효율적이고 체계적인 관리를 지원하는 정책관리 솔루션.',
    longDescription:
      '엘로이큐브사의 NX Portrait는 방화벽 정책의 효율적이고 체계적인 관리를 지원하는 정책관리 솔루션입니다. 이 솔루션은 다양한 네트워크 환경에서 방화벽 정책의 생성, 수정, 배포 과정을 자동화하며, 실시간으로 정책의 효과성과 위반 여부를 모니터링할 수 있게 설계되었습니다.',
    officialUrl: 'https://www.nxportrait.com/',
    features: [],
    featureGroups: [
      {
        icon: '📝',
        title: '정책 신청 및 결재 승인 기능',
        bullets: [
          '신규 정책, 연장, 삭제 신청',
          '정책 Scale-In, Scale-Out 신청',
        ],
      },
      {
        icon: '⚙️',
        title: '정책 설계 및 적용 자동화 기능',
        bullets: ['대상 방화벽 자동 추천', 'NAT 객체 자동 설계'],
      },
      {
        icon: '📈',
        title: '3Tib/Day 이상 대량 Traffic 처리',
        bullets: [
          '대량 Traffic 수신 및 검색 기능',
          'Traffic 최적화 및 적용 자동화',
        ],
      },
      {
        icon: '🖥️',
        title: '장비 정책 분석 및 보안 감사 기능',
        bullets: ['정책 별 상관, 비교, Meta 분석', 'Compliance Scoring'],
      },
    ],
  },
  {
    id: 'entrolink',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/entrolink/logo.png',
    },
    name: '무선인증',
    vendor: '엔트로링크',
    shortDescription:
      '기업 및 공공기관의 무선 네트워크 환경을 대상으로 안전한 사용자 인증과 접속 관리를 제공하는 종합 보안 솔루션입니다.',
    longDescription:
      '엔트로링크 무선인증 솔루션은 기업 및 공공기관의 무선 네트워크 환경을 대상으로 안전한 사용자 인증과 접속 관리를 제공하는 종합 보안 솔루션입니다. 유무선 통합 인증부터 OTP, 자원 관리, 명령어 검증까지 모듈별 라인업으로 구성됩니다.',
    officialUrl: 'http://www.entrolink.com/',
    features: [
      {
        icon: 'shield-check',
        title: 'PPX-AnyLink',
        description: 'H/W 기반의 유·무선 통합 인증 보안 제품.',
      },
      {
        icon: 'clock',
        title: 'PPX-OTP',
        description:
          '정해진 시간 동안만 유효한 일회성 비밀번호 생성 및 검증 시스템.',
      },
      {
        icon: 'monitor',
        title: 'PPX-IPADM',
        description: 'H/W 및 S/W 기반의 통합 자원 관리 제품.',
      },
      {
        icon: 'branch',
        title: 'PPX-TACACS',
        description: '관리자 및 명령어 검증 시스템.',
      },
      {
        icon: 'globe',
        title: 'WEB Portal',
        description: '관리자의 CALL을 최소화할 수 있는 시스템.',
      },
    ],
  },
  {
    id: 'kornic-glory-wips',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/kornic-glory-wips/logo.png',
    },
    name: 'WIPS 무선인증',
    vendor: '코닉글로리',
    shortDescription:
      '무선 네트워크 환경에서 발생할 수 있는 다양한 위협을 실시간 탐지·차단하는 고성능 무선 침입 방지 시스템.',
    longDescription:
      '코닉오토메이션의 WIPS(Wireless Intrusion Prevention System) 솔루션은 무선 네트워크 환경에서 발생할 수 있는 다양한 위협을 실시간으로 탐지하고 차단하는 고성능 무선 침입 방지 시스템입니다. 이 솔루션은 무선 AP 주변 환경을 지속적으로 모니터링하며, 무단 접속 시도, 악성 AP, 세션 하이재킹 등 다양한 무선 공격을 신속하게 식별하여 네트워크 보안을 강화합니다.',
    officialUrl: 'https://www.kornicglory.co.kr/',
    features: [
      {
        icon: 'shield-check',
        title: '외부 무선 위협 차단',
        description:
          '내부정보 유출 방지 / 내부 사용자 + 외부 접속 방지 / 방문자 관리',
        bullets: [
          '내부정보 유출 방지',
          '내부 사용자 + 외부 접속 방지',
          '방문자 관리',
        ],
      },
      {
        icon: 'users',
        title: '자가 단말 제어 및 외부시스템 연동',
        description:
          '인가되지 않은 비인가 AP / 사용자 무선 기기 관리 / 스마트폰 테더링 차단 / 인증솔루션 + 자산정보 관리 제어',
        bullets: [
          '인가되지 않은 비인가 AP',
          '사용자 무선 기기 관리',
          '스마트폰을 이용한 테더링',
          '인증솔루션 + 자산 정보 관리 제어',
        ],
      },
      {
        icon: 'radar',
        title: '지능형 무선 자산 가시성 확보',
        description:
          '외부 해킹 공격 방어 및 무선 해킹 모니터링 / 외부 침입 신호 위치추적 및 삼각측량법 / WEP Cracking',
        bullets: [
          '외부 해킹 공격 방어 및 무선 해킹 모니터링',
          '외부 침입 신호 위치추적 및 삼각측량법을 활용한 표시',
          'WEP Cracking',
        ],
      },
    ],
  },
  {
    id: 'qradar',
    categoryId: 'network-security',
    assets: {
      logo: '/images/products/qradar/logo.png',
      featureScreenshots: [
        '/images/products/qradar/feature-1.png',
        '/images/products/qradar/feature-2.png',
        '/images/products/qradar/feature-3.png',
      ],
    },
    name: 'QRadar',
    vendor: 'IBM',
    shortDescription:
      'SIEM·SOAR·EDR을 아우르는 통합 위협 탐지 및 대응 플랫폼.',
    longDescription:
      'IBM® QRadar®는 기업내 위협을 보다 효율적으로 탐지하고 대응할 수 있도록 설계된 위협 탐지 및 대응 솔루션입니다. 대규모 기업 환경을 지원하며, 보안팀이 주요 핵심 기술 전반에 걸쳐 보안 태세를 강화할 수 있도록 돕습니다.',
    officialUrl: 'https://www.ibm.com/products/qradar',
    features: [
      {
        icon: 'search',
        title: 'IBM QRadar® SIEM',
        description:
          '대량 로그를 상관 분석해 의미 있는 위협 인시던트만 추립니다.',
      },
      {
        icon: 'workflow',
        title: 'IBM QRadar SOAR',
        description:
          '플레이북 기반 자동 대응으로 평균 대응 시간(MTTR)을 단축합니다.',
      },
      {
        icon: 'monitor',
        title: 'IBM QRadar EDR',
        description: '엔드포인트 행위 가시화로 위협 전파를 차단합니다.',
      },
    ],
  },
];

// ───────────────────────────────────────────────────────────────────
// 2. 단말 / 서버 보안 (4개)
// ───────────────────────────────────────────────────────────────────

const endpointServerProducts: Product[] = [
  {
    id: 'dbsafer',
    categoryId: 'endpoint-server-security',
    assets: {
      logo: '/images/products/dbsafer/logo.png',
      hero: '/images/products/dbsafer/hero.png',
    },
    name: 'DBSAFER',
    vendor: 'PNP Secure',
    shortDescription:
      'DB 접근 통제 및 감사. SQL 단위 권한과 작업 로그를 통합 관리.',
    longDescription:
      'DBSAFER DB는 개인정보 데이터베이스에 대한 접근 및 권한 제어, SQL 감사 등을 통해 개인정보 유출을 차단합니다. 국내 접근제어 솔루션 중 유일하게 Server Agent를 활용해 우회접속까지 완벽하게 차단합니다. 제품 연동 및 클라우드 환경 지원 등을 통해 기업 상황에 최적화 된 운영 환경을 보장합니다.',
    officialUrl: 'https://www.pnpsecure.com/02_1_dbsafer-db/',
    features: [
      {
        icon: 'database',
        title: '전수 접근 통제',
        description: 'DB 세션·SQL 단위로 인가/거부 정책을 적용합니다.',
      },
      {
        icon: 'server',
        title: 'Server Agent로 우회 차단',
        description:
          '네트워크 우회 접속까지 에이전트로 완벽 차단합니다.',
      },
      {
        icon: 'cloud',
        title: '클라우드/가상화 대응',
        description: '온프레미스와 클라우드 DB 모두 단일 정책으로 관리합니다.',
      },
    ],
  },
  {
    id: 'netand-hiware',
    categoryId: 'endpoint-server-security',
    assets: {
      logo: '/images/products/netand-hiware/logo.png',
    },
    name: 'HIWARE',
    vendor: 'NETAND',
    shortDescription:
      '서버·네트워크·DB·AD까지 아우르는 통합 시스템 접근 통제(IAM/PAM).',
    longDescription:
      'HIWARE는 주요 IT 인프라 시스템의 보안 관리에 꼭 필요한 제품라인업으로 구성된 국내 대표 통합 접근제어 및 계정관리(IAM) 솔루션입니다. HIWARE는 접근제어와 계정관리 기술을 바탕으로, 국내 최초이자 유일하게 서버, 네트워크 장비, 데이터베이스, Active Directory, CCTV 등 주요 IT 인프라 시스템의 보안관리 기능을 제공합니다.',
    officialUrl: 'https://www.netand.co.kr',
    features: [
      {
        icon: 'server',
        title: '시스템 접근제어 (HIWARE PSM)',
        description:
          '서버, 네트워크 등 시스템에 대한 접근제어와 권한 관리.',
      },
      {
        icon: 'database',
        title: 'DB 접근제어 (HIWARE DBAM)',
        description:
          '데이터베이스에 대한 접근제어와 권한 관리.',
      },
      {
        icon: 'shield-check',
        title: '시스템 계정관리 (HIWARE iM)',
        description:
          '서버, 네트워크 등 시스템에 대한 계정 및 패스워드 통합 관리.',
      },
      {
        icon: 'database',
        title: 'DB 계정관리 (HIWARE DBM)',
        description:
          '데이터베이스에 대한 계정 및 패스워드 통합 관리.',
      },
      {
        icon: 'user-check',
        title: 'AD 계정관리 (HIWARE ADiM)',
        description:
          'Active Directory에 대한 계정 및 패스워드 통합 관리.',
      },
      {
        icon: 'key',
        title: 'SSH CA 키 관리 (HIWARE SecureKey)',
        description:
          '제로트러스트를 위한 서명키 인증 보안.',
      },
      {
        icon: 'monitor',
        title: 'CCTV 패스워드 관리 (HIWARE CCTV PM)',
        description:
          'CCTV의 계정 현황 및 패스워드 관리.',
      },
      {
        icon: 'lock',
        title: '모바일 OTP (HIWARE MobileOTP)',
        description:
          '사용자 인증 강화를 위한 추가 보안 인증.',
      },
    ],
  },
  {
    id: 'appcheck',
    categoryId: 'endpoint-server-security',
    assets: {
      logo: '/images/products/appcheck/logo.png',
    },
    name: 'AppCheck Pro',
    vendor: '체크멀(Checkmal)',
    shortDescription:
      '랜섬웨어 방어 특화 안티멀웨어. 예방·탐지·복구·자동 격리를 한 번에.',
    longDescription:
      '앱체크는 랜섬웨어 사전 방어, 탐지, 차단, 자동 복구까지 한번에 해결합니다. 뿐만 아니라 취약점 가드와 클리너 기능으로 다양한 환경에 대응하여 정보 자산을 안전하게 보호할 수 있는 안티랜섬웨어 전문 솔루션입니다.',
    badges: ['Anti-Ransomware'],
    officialUrl: 'https://www.checkmal.com/',
    features: [
      {
        icon: 'shield',
        title: '악의적인 랜섬웨어 위협으로부터의 보호',
        description:
          '강력한 랜섬웨어 방어 기능은 체크멀의 상황인식기반 랜섬웨어 행위 엔진에 의해 제공되며 실시간으로 클라우드없이 파일 훼손을 분석하여 차단합니다.',
      },
      {
        icon: 'lock',
        title: '랜섬가드',
        description:
          '랜섬웨어에 의해 손상되는 파일은 드라이버 수준에서 보호되는 디렉터리에 원본파일이 실시간으로 백업하여 최소한의 디스크 공간만 효율적으로 사용합니다.',
      },
      {
        icon: 'database',
        title: '탐지 실패시에도 데이터를 복구 가능',
        description:
          '통합된 스케줄 백업은 파일을 보호하는 추가 계층을 제공합니다. 파일 변경을 실시간으로 추적하고 변경된 파일만 누적 백업합니다.',
      },
      {
        icon: 'shield-check',
        title: '기존 백신과 호환되는 편리함',
        description:
          '기존에 설치되어있는 바이러스 백신 소프트웨어는 랜섬웨어의 실행전에 감지하고 차단하며, AppCheck Pro는 파일의 손상 행위를 감지하고 이를 중단합니다. 이렇게 기존의 백신 소프트웨어가 설치되어 있더라도 충돌없이 동시에 설치, 운용할 수 있습니다.',
      },
    ],
  },
  {
    id: 'trendmicro-vision-one',
    categoryId: 'endpoint-server-security',
    assets: {
      logo: '/images/products/trendmicro-vision-one/logo.png',
    },
    name: 'Trend Vision One',
    vendor: 'Trend Micro',
    shortDescription:
      'AI 기반 통합 사이버 보안 플랫폼. XDR + ASRM(공격 표면 위험 관리).',
    longDescription:
      'Trend Micro의 Vision One은 AI 기반 통합 사이버 보안 플랫폼으로, 엔드포인트·이메일·네트워크·클라우드 등 다양한 계층을 아우르는 XDR(Extended Detection & Response)과 공격 표면 위험 관리(ASRM)를 제공하는 차세대 보안 솔루션입니다. 기업의 디지털 자산을 전방위적으로 보호하고, 위협 탐지·대응·위험 관리까지 단일 콘솔에서 수행할 수 있는 것이 핵심입니다.',
    officialUrl: 'https://www.trendmicro.com/ko_kr',
    features: [
      {
        icon: 'gauge',
        title: '운영 효율성',
        description:
          '단일 콘솔에서 위협 탐지·대응·위험 관리까지 수행하여 보안팀의 업무 효율을 끌어올립니다.',
      },
      {
        icon: 'savings',
        title: '절감된 비용',
        description:
          '분산된 솔루션을 통합 플랫폼으로 일원화하여 라이선스·운영 비용을 절감합니다.',
      },
      {
        icon: 'globe',
        title: '포괄적 범위',
        description:
          '엔드포인트·이메일·네트워크·클라우드를 아우르는 XDR + ASRM으로 전방위 디지털 자산을 보호합니다.',
      },
    ],
  },
];

// ───────────────────────────────────────────────────────────────────
// 3. 애플리케이션 보안 (6개)
// ───────────────────────────────────────────────────────────────────

const applicationProducts: Product[] = [
  {
    id: 'xsecuritas',
    categoryId: 'application-security',
    assets: {
      logo: '/images/products/xsecuritas/logo.png',
      hero: '/images/products/xsecuritas/hero.png',
    },
    name: 'xSecuritas Screen Watermark',
    vendor: 'xSecuritas',
    shortDescription:
      '화면 워터마크·캡처 차단·웹캠 워터마크로 화면 기반 유출을 차단.',
    longDescription:
      'xSecuritas는 스크린 워터마크 솔루션은 화면 워터마크, 캡처 방지, 출력 및 웹캠 워터마크 기술을 통해 화면 기반 정보 유출을 방지하는 기업용 보안 솔루션으로, Windows·macOS·Linux·VDI 환경을 지원하며 ISO 27001 및 SOC 2 Type II 기준을 충족합니다.',
    badges: ['ISO 27001', 'SOC 2 Type II'],
    officialUrl: 'https://www.xsecuritas.com',
    features: [
      {
        icon: 'eye',
        title: '동적 워터마크',
        description:
          '사용자 ID·시간·IP를 화면에 동적으로 새겨 유출 추적을 가능하게 합니다.',
      },
      {
        icon: 'camera-off',
        title: '캡처 차단',
        description: 'Print Screen·녹화 도구·웹캠 촬영까지 차단합니다.',
      },
      {
        icon: 'monitor',
        title: '멀티 OS / VDI',
        description: 'Windows·macOS·Linux·VDI 모두 단일 정책으로 운영합니다.',
      },
    ],
  },
  {
    id: 'sindoh-secure-print',
    categoryId: 'application-security',
    assets: {
      logo: '/images/products/sindoh-secure-print/logo.jpeg',
      hero: '/images/products/sindoh-secure-print/hero.png',
    },
    name: '신도 보안출력',
    vendor: '신도(SINDOH)',
    shortDescription:
      '출력 시점의 정보 유출을 방어하는 특화 솔루션. 사용자 인증·체크·모니터링 일체.',
    longDescription:
      '신도리코 보안복합기는 기업의 문서 출력 및 관리 과정에서 발생할 수 있는 보안 위협을 효과적으로 차단하는 보안 특화 복합기 솔루션입니다. 사용자 인증 기술 기반으로 비인가 사용자의 출력 및 기기 접근을 차단하며, 출력 기록의 체계적 관리 및 모니터링 기능을 제공합니다. 또한, 보안 문서 워터마크 삽입과 같은 출력물 자체에 대한 보안 기능도 포함하여 문서 유출 방지와 위변조 방지에 특화되어 있습니다.',
    officialUrl: 'https://www.sindoh.com',
    features: [
      {
        icon: 'user-check',
        title: '사용자 인증 출력',
        description: '본인 인증 후에만 출력하도록 보안 큐를 적용합니다.',
      },
      {
        icon: 'file-text',
        title: '워터마크/복사 방지',
        description: '인쇄물에 사용자 정보를 새기고 복사 시 추적을 남깁니다.',
      },
      {
        icon: 'monitor',
        title: '출력 모니터링',
        description: '출력 이력·매수를 실시간으로 추적합니다.',
      },
    ],
  },
  {
    id: 'proofpoint',
    categoryId: 'application-security',
    assets: {
      logo: '/images/products/proofpoint/logo.png',
    },
    name: 'Proofpoint Email Protection',
    vendor: 'Proofpoint',
    shortDescription:
      '대규모 이메일 환경의 표적·피싱 공격을 실시간 식별하고 차단합니다.',
    longDescription:
      'Proofpoint 메일 보안 솔루션은 기업과 조직의 이메일 환경을 대상으로 고도화된 위협을 효과적으로 탐지하고 차단하기 위해 설계된 종합 보안 플랫폼입니다. 스팸 메일과 피싱 공격, 악성코드 및 랜섬웨어 전달 시도를 실시간으로 식별하여 사용자와 인프라를 보호합니다.',
    officialUrl: 'https://www.proofpoint.com/kr',
    features: [
      {
        icon: 'globe',
        title: '검증된 솔루션 제품군',
        description:
          '글로벌 표준 수준의 위협 인텔리전스와 메일 보안 라인업으로 다양한 산업·규제 환경에서 검증된 안정성을 제공합니다.',
      },
      {
        icon: 'cloud',
        title: '클라우드 사용 속도 및 혁신',
        description:
          '클라우드 기반 분석 엔진으로 신·변종 위협에 빠르게 대응하며 새로운 보안 기능을 지속적으로 제공합니다.',
      },
      {
        icon: 'radar',
        title: '광범위한 인텔리전스 및 가시성',
        description:
          '전 세계 메일 트래픽을 분석한 광범위한 위협 인텔리전스로 표적·피싱·계정 탈취 시도를 식별합니다.',
      },
    ],
  },
  {
    id: 'cisco-esa',
    categoryId: 'application-security',
    assets: {
      logo: '/images/products/cisco-esa/logo.png',
    },
    name: 'Cisco Email Security Appliance',
    vendor: 'Cisco',
    shortDescription:
      '인바운드·아웃바운드 메일 트래픽을 통합 보호하는 엔터프라이즈 메일 보안.',
    longDescription:
      'Cisco Email Security Appliance(Cisco ESA)는 기업 및 기관의 이메일 환경을 대상으로 설계된 고성능 이메일 보안 솔루션입니다. 이 시스템은 스팸 메일, 피싱 공격, 악성코드, 랜섬웨어 등 다양한 이메일 기반 위협을 실시간으로 탐지하고 차단하여 안전한 이메일 통신을 보장합니다.',
    officialUrl:
      'https://www.cisco.com/site/us/en/products/security/secure-email/index.html',
    features: [
      {
        icon: 'mail',
        title: '인바운드 보안',
        description: '스팸·바이러스·피싱 등 수신 위협을 다층 차단합니다.',
      },
      {
        icon: 'send',
        title: '아웃바운드 통제',
        description: '데이터 유출(DLP) 정책으로 발신 메일을 통제합니다.',
      },
      {
        icon: 'lock',
        title: '메일 암호화',
        description: '민감 정보 발신을 자동 암호화합니다.',
      },
    ],
  },
  {
    id: 'tilon-vdi',
    categoryId: 'application-security',
    assets: {
      logo: '/images/products/tilon-vdi/logo.png',
    },
    name: '틸론 VDI (Dstation)',
    vendor: 'Tilon',
    shortDescription:
      '중앙 집중형 가상 데스크톱 환경. 장소·디바이스 제약 없는 안전한 업무 환경.',
    longDescription:
      '틸론 VDI(가상 데스크톱 인프라) 시스템은 중앙 서버에서 가상 데스크톱 환경을 구축하여 사용자가 장소와 디바이스에 구애받지 않고 안전하게 업무를 수행할 수 있도록 지원하는 솔루션입니다. 국내 VDI(가상 데스크톱 인프라) 시장 선두주자로, 공공기관·금융·기업 환경에서 데이터 보안과 업무 효율성을 동시에 제공하는 것이 핵심입니다.',
    badges: ['국내 VDI 선두'],
    officialUrl: 'https://www.tilon.com/',
    features: [
      {
        icon: 'users',
        title: 'DDS (Dstation Directory Service)',
        description:
          '사용자와 가상데스크톱을 위한 디렉터리 정보 통합 관리. DDS의 기본 AD 통합으로 운영편리 가능. 인증·계정·권한 로그 기록 (변조 불가). Active Directory를 대체한 보안성과 자체 VDI 인증 지원.',
      },
      {
        icon: 'shield-check',
        title: 'DAC (Dstation Access Control)',
        description:
          '가상망에 접근 통제. 사용자·단말(IP·MAC) 정보 기반 가상 데스크톱 접근 통제. 가상 데스크톱 자원 접근 통제. 네트워크·USB·파일 입출력 설정 통제. 사용자 데이터 보호. 화면 캡처 차단. 파일/폴더/네트워크 등 인가/거부 사용자/모듈 접근 완벽 제어.',
      },
      {
        icon: 'lock',
        title: 'DDP (Dstation Data Protection)',
        description:
          '전송 데이터 보호. 표준 프로토콜(HTTPS, TLS 1.2) 암호화 사용. RSA-2048(키교환), SHA-256(해시) 등 알고리즘 자체 보호 및 저장 데이터 보호. 모든 통신 구간 암호화와 중요 정보 저장 시 정보 가치/생성·운영 관리·이력 기밀성 및 무결성 강화.',
      },
      {
        icon: 'monitor',
        title: 'DMS (Dstation Monitoring Service)',
        description:
          '서비스·프로세스 실시간 감시로 무결성 보호. 성능 실적·로그 기록 관리자 화면에 보장. 정보 자산 모니터링과 로그 기록 관리자에게 정보 보호 및 가용성·안전성 보장. 제품 위변조 주기적 검증으로 무결성과 안전성을 보장.',
      },
    ],
  },
  {
    id: 'acronis',
    categoryId: 'application-security',
    assets: {
      logo: '/images/products/acronis/logo.png',
    },
    name: 'Acronis Cyber Protect',
    vendor: 'Acronis',
    shortDescription:
      '백업·재해복구·랜섬웨어 보호를 결합한 사이버 프로텍션 솔루션.',
    longDescription:
      'Acronis는 기업의 데이터 보호와 복구를 위한 종합 솔루션으로, 백업과 재해복구(Disaster Recovery)를 통합 제공합니다. 이 시스템은 서버, 가상화 환경, 클라우드, 엔드포인트 등 다양한 IT 인프라 환경에서 데이터 및 시스템을 신속하고 안정적으로 백업하며, 필요 시 빠른 복구가 가능합니다. Acronis는 디스크 이미지 기반 백업 방식을 사용하여 시스템 전체 또는 개별 파일 단위까지 유연한 복원 옵션을 제공합니다.',
    officialUrl: 'https://www.acronis.com/',
    features: [
      {
        icon: 'package',
        title: '30개 이상의 워크로드 보호',
        description:
          '물리적·가상·클라우드 및 모바일 환경 전반에 걸쳐 데이터를 안전하게 보호합니다.',
      },
      {
        icon: 'refresh-ccw',
        title: '빠르고 안정적인 복구',
        description:
          '어떤 기기에서든, 어떤 사고 발생 시에도 앱·시스템 및 데이터를 빠르고 안정적으로 복구합니다.',
      },
      {
        icon: 'shield',
        title: '안전한 랜섬웨어 보호',
        description:
          '머신러닝 기반 랜섬웨어 방어 및 블록체인 공증 기능으로 데이터를 보호합니다.',
      },
    ],
  },
];

// ───────────────────────────────────────────────────────────────────
// 4. OT 보안 & 시스템 (2개)
// ───────────────────────────────────────────────────────────────────

const otProducts: Product[] = [
  {
    id: 'txone',
    categoryId: 'ot-security',
    assets: {
      logo: '/images/products/txone/logo.png',
      hero: '/images/products/txone/hero.png',
    },
    name: 'TXOne OT Zero Trust',
    vendor: 'TXOne Networks',
    shortDescription:
      '산업제어시스템(ICS)과 생산 환경에 특화된 OT 제로 트러스트 보안.',
    longDescription:
      'TXOne은 OT(운영기술) 환경을 위한 전문 보안 솔루션으로, 산업제어시스템(ICS) 및 제조 현장의 설비와 네트워크를 사이버 위협으로부터 보호하는 데 특화되어 있습니다. 실시간 위협 탐지 및 차단 기능을 제공하며, OT 환경에 적합한 안정성과 가용성을 보장하여 생산 설비의 안정운영을 지원합니다.',
    badges: ['OT 특화'],
    officialUrl: 'https://www.txone.com',
    features: [],
  },
  {
    id: 'hitachi-storage',
    categoryId: 'ot-security',
    assets: {
      logo: '/images/products/hitachi-storage/logo.png',
      featureImages: [
        '/images/products/hitachi-storage/feature-0.png',
        '/images/products/hitachi-storage/feature-1.png',
        '/images/products/hitachi-storage/feature-2.png',
        '/images/products/hitachi-storage/feature-3.png',
        '/images/products/hitachi-storage/feature-4.png',
      ],
    },
    name: 'Hitachi Storage',
    vendor: '효성인포메이션시스템',
    shortDescription:
      '엔터프라이즈 스토리지 인프라. 미션 크리티컬 데이터를 위한 고가용성 저장소.',
    longDescription:
      '효성인포메이션시스템의 스토리지 솔루션은 다양한 산업 분야의 데이터 저장 및 관리 요구를 충족시키기 위해 설계된 엔터프라이즈급 스토리지 시스템입니다. 이 솔루션은 고성능과 안정성을 바탕으로 대용량 데이터 처리에 최적화되어 있으며, 블록 스토리지, 파일 스토리지, 오브젝트 스토리지 등 다양한 스토리지 방식을 지원합니다.',
    features: [
      {
        icon: 'database',
        title: '올플래시 & 하이브리드 스토리지',
        description:
          '미션 크리티컬 워크로드용 올플래시와 비용 최적화 하이브리드 모델을 모두 제공합니다.',
      },
      {
        icon: 'network',
        title: '네트워크 스토리지',
        description:
          '저지연·고처리량 IO 아키텍처로 대용량 워크로드를 안정적으로 처리합니다.',
      },
      {
        icon: 'lock',
        title: '데이터 보호',
        description:
          '저장 단위 암호화·복제·스냅샷으로 데이터 손실 위험을 최소화합니다.',
      },
      {
        icon: 'monitor',
        title: '데이터센터 통합관리',
        description:
          '단일 콘솔에서 다수의 스토리지 노드를 가시화·통합 관리합니다.',
      },
      {
        icon: 'bar-chart',
        title: '비즈니스 플랫폼',
        description:
          'AI 기반 용량·성능 분석으로 운영 의사 결정과 비즈니스 인사이트를 지원합니다.',
      },
    ],
  },
];

export const PRODUCTS: readonly Product[] = [
  ...networkSecurityProducts,
  ...endpointServerProducts,
  ...applicationProducts,
  ...otProducts,
] as const;

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(
  categoryId: ProductCategoryId
): Product[] {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}
