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
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/10">
      {/* Sub-navigation Tabs */}
      <div className="pt-32 pb-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-8 flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-4 text-sm font-bold tracking-tight transition-all relative ${
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

      <main className="max-w-[1400px] mx-auto px-8 py-20 pb-40 animate-reveal">
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
