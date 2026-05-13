import type { Metadata } from 'next';
import { SolutionCategoryView } from '@/components/SolutionCategoryView';

export const metadata: Metadata = {
  title: '단말 / 서버 보안',
  description:
    'DBSAFER · NETAND HIWARE · AppCheck · Trend Vision One — DB·OS 접근 통제와 단말 보호를 통합.',
};

export default function Page() {
  return <SolutionCategoryView categoryId="endpoint-server-security" />;
}
