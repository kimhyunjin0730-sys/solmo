import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "(주)솔모정보기술 | Total Security Partner",
  description: "20년 이상의 업력, 금융·공공·대기업 보안 솔루션 전문 기업 (주)솔모정보기술입니다. X-Securitas 등 혁신적인 보안 기술을 제공합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
