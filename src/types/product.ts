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
  /** 공식 사이트 */
  officialUrl?: string;
  /** 상세 페이지 강조 태그 (예: 'GS 1등급', 'AI 기반') */
  badges?: string[];
};
