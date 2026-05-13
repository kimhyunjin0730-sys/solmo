/**
 * 제품 카탈로그 도메인 타입.
 * 솔모정보기술이 취급하는 4대 보안 솔루션 카테고리.
 */

export type ProductCategoryId =
  | 'network-security'
  | 'endpoint-server-security'
  | 'application-security'
  | 'ot-security';

export type ProductCategory = {
  id: ProductCategoryId;
  /** 카테고리 표시명 (한국어) */
  name: string;
  /** 카테고리 부제 (영문) */
  englishName: string;
  /** 카테고리 한줄 요약 */
  tagline: string;
};

export type ProductFeature = {
  /** Lucide / emoji 등 키. 렌더 컴포넌트에서 매핑 */
  icon: string;
  title: string;
  description: string;
};

/** PPT에서 추출한 실제 자산. /public/images/products/{id}/ 에 저장됨. */
export type ProductAssets = {
  /** 벤더 로고 (작은 이미지). 절대 경로 (`/images/products/{id}/logo.png`) */
  logo?: string;
  /** 제품 대표 이미지 (큰 다이어그램/스크린샷) */
  hero?: string;
  /** 핵심 기능별 작은 아이콘 (64x64 정도). 카드 좌상단에 chip으로 렌더. */
  featureImages?: readonly string[];
  /**
   * 핵심 기능별 와이드 스크린샷/패널 (300x250 정도).
   * 카드 상단 풀폭으로 렌더 (object-contain). QRadar SIEM/SOAR/EDR 같은
   * 제품 화면 캡처에 적합.
   */
  featureScreenshots?: readonly string[];
  /**
   * 본문에 끼워 넣을 추가 다이어그램들(구성도, 컴포넌트 그리드 등).
   * 각 항목은 캡션과 함께 별도 섹션으로 렌더된다.
   * 예: Genian ZTNA의 구성 요소(Agent/G/W/Policy) + 도입 구성(On-Prem/Cloud/Hybrid).
   */
  diagrams?: readonly { src: string; caption: string }[];
};

export type Product = {
  /** URL slug (영문, kebab-case) */
  id: string;
  /** 정렬용 카테고리 ID */
  categoryId: ProductCategoryId;
  /** 제품명 (영문 표기 우선) */
  name: string;
  /** 벤더명 */
  vendor: string;
  /** 한 줄 카드 설명 */
  shortDescription: string;
  /** 상세 페이지 상단 설명 (1~3 문단) */
  longDescription: string;
  /** 핵심 기능 카드 */
  features: ProductFeature[];
  /**
   * 핵심 기능을 카드 대신 단순 불릿 리스트로 보여주고 싶을 때 사용.
   * (예: PIOLINK는 PPT가 한 박스 안 3열 불릿 그리드.)
   * 이 값이 있으면 features 카드 그리드 대신 이 리스트가 렌더됨.
   */
  featureBullets?: readonly string[];
  /**
   * "그룹 타이틀 + 체크 불릿" 형태의 카드 그리드.
   * (예: NX Portrait PPT는 4개의 큰 기능 카드, 각 카드 안에 ✓ 세부 항목.)
   * features / featureBullets 보다 우선순위가 높다.
   */
  featureGroups?: readonly {
    title: string;
    /** 이모지 또는 단축키 (예: 'wand', 'gauge', '🛡') */
    icon?: string;
    bullets: readonly string[];
  }[];
  /** PPT에서 추출한 시각 자산 (로고·히어로·기능 아이콘) */
  assets?: ProductAssets;
  /** 공식 사이트 */
  officialUrl?: string;
  /** 상세 페이지 강조 태그 (예: 'GS 1등급', 'AI 기반') */
  badges?: string[];
};
