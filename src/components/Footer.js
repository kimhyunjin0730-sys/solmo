'use client';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white py-20 border-t border-white/5 overflow-hidden">
      {/* Aurora background glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>
      {/* Top accent gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <div className="relative w-[180px] h-[45px] brightness-0 invert opacity-90">
                <Image src="/SOLMO_Logo.png" alt="SOLMO" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-white/40 text-sm font-bold leading-relaxed max-w-sm italic">
              "고객과 함께 성장하는 최고의 보안 파트너" <br />
              (주)솔모정보기술은 20년 이상의 노하우와 독보적인 기술력으로 <br />
              기업의 소중한 정보를 보호합니다.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "인사말", href: "/about/greetings" },
                { label: "연혁", href: "/about/history" },
                { label: "인증 및 특허", href: "/about/certifications" },
                { label: "조직도", href: "/about/organization" }
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "네트워크 보안", href: "/solutions/network-security" },
                { label: "내부정보유출 보안", href: "/solutions/data-leakage-prevention" },
                { label: "어플리케이션 보안", href: "/solutions/application-security" },
                { label: "백업 및 복구", href: "/solutions/backup-recovery" }
              ]}
            />
            <FooterLinkGroup
              title="Services"
              links={[
                { label: "보안취약점 분석", href: "/services/vulnerability-analysis" },
                { label: "보안프린트 구축", href: "/services/secure-printing" },
                { label: "통합 유지보수", href: "/services/maintenance" }
              ]}
            />
            <FooterLinkGroup
              title="Clients"
              links={[
                { label: "고객사 현황", href: "/clients" }
              ]}
            />
            <FooterLinkGroup
              title="Support"
              links={[
                { label: "영업 문의", href: "/support/contact" },
                { label: "오시는 길", href: "/support/location" }
              ]}
            />
          </div>
        </div>

        {/* Info & Bottom */}
        <div className="pt-12 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/40 text-xs font-bold uppercase tracking-wider">
                <span>대표이사 : 이병두</span>
                <span className="opacity-30">|</span>
                <span>사업자등록번호 : 122-81-74607</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/40 text-xs font-bold uppercase tracking-wider">
                <span>주소 : 서울특별시 광진구 아차산로 309, 남장빌딩 2층</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/40 text-xs font-bold">
                <span>Tel. <a href="tel:024028054" className="hover:text-white transition-colors">02-402-8054</a></span>
                <span>Fax. 02-402-8055</span>
                <span>Email : <a href="mailto:solmoit01@solmo.co.kr" className="hover:text-white transition-colors">solmoit01@solmo.co.kr</a></span>
              </div>
            </div>
            
            <div className="lg:text-right">
              <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
                © 2026 SOLMO INFORMATION TECHNOLOGY. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ title, links }) {
  return (
    <div className="space-y-6">
      <h4 className="text-blue-500 font-black text-xs uppercase tracking-[0.3em]">{title}</h4>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href} className="text-white/40 text-xs font-bold hover:text-white transition-colors tracking-tight">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
