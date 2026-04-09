'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SolutionsLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "네트워크 보안", href: "/solutions/network-security" },
    { name: "어플리케이션 보안", href: "/solutions/application-security" },
    { name: "내부정보유출 보안", href: "/solutions/data-leakage-prevention" },
    { name: "백업 및 복구", href: "/solutions/backup-recovery" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/10">
      {/* Sub-navigation Tabs */}
      <div className="pt-16 sm:pt-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex gap-6 sm:gap-8 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 pb-3 pt-3 text-xs sm:text-sm font-bold tracking-tight transition-all relative ${
                pathname === item.href
                  ? "text-[#001F5B]"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#001F5B] rounded-full"></div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-6 sm:pt-8 pb-20 animate-reveal">
        {children}
      </main>

      <footer className="bg-slate-900 text-white/20 py-12 px-8 text-center text-[10px] font-black uppercase tracking-[0.3em]">
        © 2026 SOLMO Information Technology. All rights reserved.
      </footer>

      <style jsx global>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-reveal { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
