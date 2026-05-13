import type { Metadata } from 'next';
import { SolutionCategoryView } from '@/components/SolutionCategoryView';

export const metadata: Metadata = {
  title: '네트워크 보안',
  description:
    'FortiNet · Radware · Genian · PIOLINK · IBM QRadar 등 9종 네트워크 보안 솔루션 라인업.',
};

export default function Page() {
  return <SolutionCategoryView categoryId="network-security" />;
}
