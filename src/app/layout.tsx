import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { QueryProvider } from '@/providers/QueryProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://solmo.vercel.app'),
  title: {
    default: '솔모정보기술 | Total Security Partner',
    template: '%s | 솔모정보기술',
  },
  description:
    '초연결 및 AI 시대, 정보보안은 기업의 생존과 경쟁력을 좌우합니다. 솔모정보기술은 22년의 신뢰를 바탕으로 네트워크·단말·애플리케이션·OT 보안 솔루션을 제공합니다.',
  openGraph: {
    title: '솔모정보기술 | Total Security Partner',
    description:
      '네트워크·단말·애플리케이션·OT 보안을 아우르는 종합 보안 솔루션 파트너.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <Header />
          <main className="flex-grow pt-20 lg:pt-24">{children}</main>
          <Footer />
          <ChatBot />
        </QueryProvider>
      </body>
    </html>
  );
}
