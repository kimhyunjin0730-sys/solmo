import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Bricolage_Grotesque, JetBrains_Mono, Fraunces } from 'next/font/google';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { QueryProvider } from '@/providers/QueryProvider';

/**
 * 타이포그래피 시스템 (셀프 호스팅)
 *
 *  --font-sans     Pretendard Variable (한글 + 라틴 본문)
 *  --font-display  SUIT (한국어 디스플레이 — 큰 헤드라인 / 강조)
 *  --font-latin    Bricolage Grotesque (라틴 전용 디스플레이 액센트)
 *  --font-serif    Fraunces (선택적 serif accent)
 *  --font-mono     JetBrains Mono (라벨·코드·tabular nums)
 */

// 한국어 본문 — Pretendard Variable (single woff2 covers 100–900)
const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-sans',
  weight: '45 920',
  style: 'normal',
  display: 'swap',
});

// 한국어 디스플레이 — SUIT 9개 weight 로컬 등록
const suit = localFont({
  src: [
    { path: '../../public/fonts/SUIT-Thin.ttf', weight: '100', style: 'normal' },
    { path: '../../public/fonts/SUIT-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../../public/fonts/SUIT-Light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/SUIT-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/SUIT-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/SUIT-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/SUIT-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/SUIT-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../../public/fonts/SUIT-Heavy.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-latin',
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
      className={`h-full antialiased ${pretendard.variable} ${suit.variable} ${bricolage.variable} ${mono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <Header />
          <main className="flex-grow pt-20 lg:pt-24">{children}</main>
          <Footer />
          <ChatBot />
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
