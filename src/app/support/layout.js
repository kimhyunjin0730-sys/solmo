'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SupportLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "영업문의", href: "/support/contact" },
    { name: "오시는 길", href: "/support/location" },
  ];

  return (
    <div className="min-h-screen bg-dot-grid font-sans selection:bg-blue-500/10 relative">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"></div>

      {/* Sub-navigation Tabs */}
      <div className="pt-16 sm:pt-20 bg-white/70 backdrop-blur-md border-b border-slate-200/70 relative">
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

      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-6 sm:pt-8 pb-20 animate-reveal relative">
        {children}
      </main>

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
