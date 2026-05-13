import type { Metadata } from 'next';
import { SolutionCategoryView } from '@/components/SolutionCategoryView';

export const metadata: Metadata = {
  title: 'OT 보안 & 시스템',
  description:
    'TXOne OT Zero Trust + Hitachi Storage — 산업 현장의 보안과 미션 크리티컬 인프라.',
};

export default function Page() {
  return <SolutionCategoryView categoryId="ot-security" />;
}
