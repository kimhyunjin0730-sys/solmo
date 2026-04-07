'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AboutLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "인사말", href: "/about/greetings" },
    { name: "연혁", href: "/about/history" },
    { name: "인증 및 특허", href: "/about/certifications" },
    { name: "조직도", href: "/about/organization" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/10">
      {/* Shared Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="relative w-[140px] h-[35px]">
            <Image src="/SOLMO_Logo.png" alt="SOLMO" fill priority className="object-contain" />
          </Link>
          <div className="flex items-center gap-8 text-[13px] font-bold text-slate-500">
             <Link href="/" className="hover:text-[#004a99] transition-colors uppercase">HOME</Link>
             <span className="text-slate-300">|</span>
             <span className="text-[#004a99] uppercase font-black italic">About Us</span>
          </div>
        </div>
      </nav>

      {/* Sub-navigation Tabs */}
      <div className="pt-32 pb-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-4 text-sm font-bold tracking-tight transition-all relative ${
                pathname === item.href 
                  ? "text-[#004a99]" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#004a99] rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-20 pb-40 animate-reveal">
        {children}
      </main>

      <footer className="bg-[#24292f] text-white/50 py-16 px-8 text-center text-[11px] font-medium uppercase tracking-[0.1em]">
        © {new Date().getFullYear()} SOLMO Information Tech. All rights reserved.
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700;900&display=swap');
        body { font-family: 'Outfit', sans-serif; }
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-reveal { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
