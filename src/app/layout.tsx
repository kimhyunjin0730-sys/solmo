import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Bricolage_Grotesque, JetBrains_Mono, Fraunces } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { QueryProvider } from '@/providers/QueryProvider';

/**
 * 타이포그래피 시스템
 *
 *  --font-sans     Pretendard (한글 + 라틴 모두 — 본문, UI 기본)
 *  --font-display  Bricolage Grotesque (영문 디스플레이 — 큰 헤드라인)
 *  --font-serif    Fraunces (선택적 serif accent — 풀 인용문, 이병두 등 이름)
 *  --font-mono     JetBrains Mono (라벨·코드·tabular nums)
 */

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

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
    <html
      lang="ko"
      className={`h-full antialiased ${bricolage.variable} ${mono.variable} ${fraunces.variable}`}
    >
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
