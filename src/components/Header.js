'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    id: "company",
    label: "COMPANY",
    items: [
      { label: "인사말", href: "/about/greetings" },
      { label: "연혁", href: "/about/history" },
      { label: "인증 및 특허", href: "/about/certifications" },
      { label: "조직도", href: "/about/organization" },
    ],
  },
  {
    id: "solutions",
    label: "SOLUTIONS",
    items: [
      { label: "네트워크 보안", href: "/solutions/network-security" },
      { label: "어플리케이션 보안", href: "/solutions/application-security" },
      { label: "내부정보유출 보안", href: "/solutions/data-leakage-prevention" },
      { label: "백업 및 복구", href: "/solutions/backup-recovery" },
    ],
  },
  {
    id: "services",
    label: "SERVICES",
    items: [
      { label: "보안취약점 분석", href: "/services/vulnerability-analysis" },
      { label: "보안프린트 구축", href: "/services/secure-printing" },
      { label: "통합 유지보수", href: "/services/maintenance" },
    ],
  },
  {
    id: "clients",
    label: "CLIENTS",
    href: "/clients",
  },
  {
    id: "support",
    label: "SUPPORT",
    items: [
      { label: "영업문의", href: "/support/contact" },
      { label: "오시는 길", href: "/support/location" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null); // mobile accordion
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-white border-b border-slate-100"
        }`}
        style={{ paddingTop: "max(0.875rem, env(safe-area-inset-top))" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer shrink-0">
            <div className="relative w-[120px] sm:w-[140px] lg:w-[150px] h-[30px] sm:h-[36px] lg:h-[38px]">
              <Image src="/SOLMO_Logo.png" alt="SOLMO" fill priority className="object-contain" />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
            {NAV.map((section) =>
              section.href ? (
                <Link
                  key={section.id}
                  href={section.href}
                  className="hover:text-[#001F5B] transition-colors"
                >
                  {section.label}
                </Link>
              ) : (
                <div key={section.id} className="relative group">
                  <button className="group-hover:text-[#001F5B] transition-colors flex items-center gap-1">
                    {section.label}
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-60 space-y-1 text-left uppercase">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}

            <Link
              href="/support/contact"
              className="ml-4 px-7 py-3 bg-[#001F5B] text-white rounded-full hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/10"
            >
              문의하기
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={mobileOpen}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 -mr-2 active:scale-95 transition-transform"
          >
            <span className="block w-6 h-0.5 bg-[#001F5B] rounded-full mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-[#001F5B] rounded-full mb-1.5"></span>
            <span className="block w-4 h-0.5 bg-[#001F5B] rounded-full ml-auto"></span>
          </button>
        </div>
      </nav>

      {/* ───────── Mobile Drawer ───────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm animate-fade-in"
          />

          {/* Slide-in panel */}
          <aside
            className="absolute top-0 right-0 bottom-0 w-[88%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in-r"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="relative w-[120px] h-[30px]"
              >
                <Image src="/SOLMO_Logo.png" alt="SOLMO" fill className="object-contain" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="메뉴 닫기"
                className="w-11 h-11 -mr-2 flex items-center justify-center text-slate-500 active:scale-90 transition-transform"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav list (scrollable) */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-4">
              {NAV.map((section) =>
                section.href ? (
                  <Link
                    key={section.id}
                    href={section.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 mx-1 rounded-2xl text-base font-bold tracking-tight active:bg-slate-100 transition-all ${
                      pathname === section.href ? "text-[#001F5B]" : "text-slate-700"
                    }`}
                  >
                    {section.label}
                    <span className="text-slate-300 text-lg">›</span>
                  </Link>
                ) : (
                  <MobileSection
                    key={section.id}
                    section={section}
                    open={openSection === section.id}
                    onToggle={() =>
                      setOpenSection(openSection === section.id ? null : section.id)
                    }
                    pathname={pathname}
                    onNavigate={() => setMobileOpen(false)}
                  />
                )
              )}
            </nav>

            {/* Footer CTA */}
            <div className="border-t border-slate-100 p-4 space-y-3 bg-slate-50">
              <Link
                href="/support/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-[#001F5B] text-white rounded-2xl text-sm font-black tracking-tight shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-transform"
              >
                문의하기 →
              </Link>
              <a
                href="tel:024028054"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl text-sm font-bold active:scale-[0.98] transition-transform"
              >
                📞 02-402-8054
              </a>
            </div>
          </aside>

          <style jsx global>{`
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slide-in-r {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-fade-in { animation: fade-in 0.25s ease-out both; }
            .animate-slide-in-r { animation: slide-in-r 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; }
          `}</style>
        </div>
      )}
    </>
  );
}

function MobileSection({ section, open, onToggle, pathname, onNavigate }) {
  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 mx-1 rounded-2xl text-base font-bold text-slate-700 tracking-tight active:bg-slate-100 transition-all"
        aria-expanded={open}
      >
        <span>{section.label}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="px-2 pb-2 space-y-1 animate-fade-in">
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`block px-6 py-3 mx-1 rounded-xl text-sm font-semibold active:bg-blue-50 transition-all ${
                pathname === item.href
                  ? "text-[#001F5B] bg-blue-50"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
