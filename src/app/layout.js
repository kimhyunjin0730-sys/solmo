import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const metadata = {
  title: "(주)솔모정보기술 | Total Security Partner",
  description:
    "20년 이상의 업력, 금융·공공·대기업 보안 솔루션 전문 기업 (주)솔모정보기술입니다. X-Securitas 등 혁신적인 보안 기술을 제공합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow pt-20 lg:pt-24">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
