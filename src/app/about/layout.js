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
      {/* Sub-navigation Tabs (sticky just below the fixed header) */}
      <div className="pt-20 sm:pt-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex gap-6 sm:gap-8 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 pb-3 pt-3 text-xs sm:text-sm font-bold tracking-tight transition-all relative ${
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

      <main className="max-w-7xl mx-auto px-5 sm:px-8 pt-6 sm:pt-8 pb-20 animate-reveal">
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
