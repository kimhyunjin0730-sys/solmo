'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${scrolled || !isHome ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-white border-b border-slate-100"}`}>
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-[150px] h-[38px]">
            <Image src="/SOLMO_Logo.png" alt="SOLMO" fill priority className="object-contain" />
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
          {/* 1. COMPANY Dropdown */}
          <div className="relative group">
             <button className="group-hover:text-[#001F5B] transition-colors flex items-center gap-1">COMPANY</button>
             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-52 space-y-1 text-left uppercase">
                  <Link href="/about/greetings" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">인사말</Link>
                  <Link href="/about/history" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">연혁</Link>
                  <Link href="/about/certifications" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">인증 및 특허</Link>
                  <Link href="/about/organization" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">조직도</Link>
                </div>
             </div>
          </div>

          {/* 2. SOLUTIONS Dropdown */}
          <div className="relative group">
             <button className="group-hover:text-[#001F5B] transition-colors flex items-center gap-1">SOLUTIONS</button>
             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-60 space-y-1 text-left uppercase">
                  <Link href="/solutions/network-security" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">네트워크 보안</Link>
                  <Link href="/solutions/application-security" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">어플리케이션 보안</Link>
                  <Link href="/solutions/data-leakage-prevention" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">내부정보유출 보안</Link>
                  <Link href="/solutions/backup-recovery" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">백업 및 복구</Link>
                </div>
             </div>
          </div>
          
          {/* 3. SERVICES Dropdown */}
          <div className="relative group">
             <button className="group-hover:text-[#001F5B] flex items-center gap-1 transition-colors">SERVICES</button>
             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-60 space-y-1 text-left uppercase">
                  <Link href="/services/vulnerability-analysis" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">보안취약점 분석</Link>
                  <Link href="/services/secure-printing" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">보안프린트 구축</Link>
                  <Link href="/services/maintenance" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">통합 유지보수</Link>
                </div>
             </div>
          </div>

          {/* 4. CLIENTS */}
          <Link href="/clients" className="hover:text-[#001F5B] transition-colors">CLIENTS</Link>

          {/* 5. SUPPORT Dropdown */}
          <div className="relative group">
             <button className="group-hover:text-[#001F5B] transition-colors flex items-center gap-1">SUPPORT</button>
             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-52 space-y-1 text-left uppercase">
                  <Link href="/support/contact" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">영업문의</Link>
                  <Link href="/support/location" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">오시는 길</Link>
                </div>
             </div>
          </div>
          
          <Link href="/support/contact" className="ml-4 px-8 py-3 bg-[#001F5B] text-white rounded-full hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/10">문의하기</Link>
        </div>
      </div>
    </nav>
  );
}
