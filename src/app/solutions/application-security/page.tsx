import type { Metadata } from 'next';
import { SolutionCategoryView } from '@/components/SolutionCategoryView';

export const metadata: Metadata = {
  title: '애플리케이션 보안',
  description:
    'xSecuritas · 신도 보안출력 · Proofpoint · Cisco ESA · 틸론 VDI · Acronis — 화면/문서/메일/VDI/백업 보안.',
};

export default function Page() {
  return <SolutionCategoryView categoryId="application-security" />;
}
