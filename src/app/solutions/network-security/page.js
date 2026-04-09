'use client';
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "fortinet-utm",
    cat: "UTM",
    name: "FortiGate UTM / VPN",
    vendor: "Fortinet",
    badge: "Gold Partner",
    desc: "통합위협관리(UTM)와 사외접속(VPN)을 단일 어플라이언스에서 제공하는 차세대 방화벽. ASIC 기반 가속 하드웨어와 전용 Secure OS로 성능 저하 없는 강력한 보안.",
    features: [
      "5,000종 이상의 공격 패턴 차단 및 실시간 자동 업데이트",
      "Anti-Virus / IPS / Anti-Spam / SSL VPN / IPSec / L2TP",
      "DoS·DDoS·Scan·Flood 등 능동적 침입 차단",
      "VDOM 가상 도메인 및 NAT/PAT/Transparent 모드",
    ],
    logo: "/images/product/logo.png",
  },
  {
    id: "piolink-waf",
    cat: "WAF",
    name: "WEBFRONT-K",
    vendor: "PIOLINK",
    desc: "웹 어플리케이션 전용 보안 솔루션. SQL Injection, XSS 등 웹 해킹으로부터 서비스를 보호하고 개인정보 유출을 원천 방지합니다.",
    features: [
      "웹 사이트 정적/동적 컨텐츠 변조 사전 차단",
      "개인정보·신용카드 정보 불법 유출 방지",
      "SSL 오프로딩으로 웹 서버 부하 경감",
      "고가용성(HA) 이중화 구성 지원",
    ],
    logo: "/images/product/logo (1).png",
  },
  {
    id: "webkeeper",
    cat: "URL Filtering",
    name: "WebKeeper SG",
    vendor: "소만사",
    desc: "유해 사이트 및 비업무 사이트 접속을 통제하여 업무 생산성과 시스템 안정성을 동시에 확보합니다.",
    features: [
      "업무/비업무 사이트 정책별 통제",
      "HTTPS(SSL) 암호화 트래픽 정교한 제어",
      "P2P · 웹하드 등 대역폭 점유 프로그램 차단",
      "국내 1위 방대한 유해 DB 상시 업데이트",
    ],
    logo: "/images/product/6.png",
  },
  {
    id: "wips",
    cat: "WIPS",
    name: "Fire Power (WIPS)",
    vendor: "네오리진 (구. 코닉글로리)",
    desc: "무선 침입 방지 시스템. 비인가 AP 탐지부터 무선 공격 차단까지 무선 네트워크 전반의 보안을 실시간으로 관리합니다.",
    features: [
      "Rogue AP 자동 탐지 및 차단",
      "무선 DoS · MITM · Evil Twin 공격 대응",
      "무선 정책 위반 단말 자동 격리",
      "실시간 무선 트래픽 분석 및 리포팅",
    ],
    logo: "/images/product/sdfsdf.png",
  },
  {
    id: "genian-nac",
    cat: "NAC",
    name: "Genian NAC",
    vendor: "Genian",
    desc: "강력한 인증과 단말 무결성 점검으로 내부 네트워크를 청정하게 유지하는 NAC 솔루션. BYOD 환경 통합 관리.",
    features: [
      "네트워크 사용 단말 인증을 통한 실명화",
      "방문객 / 외부인 접속 범위 자동 제한",
      "On-Premise · Cloud · VM 모든 환경 지원",
      "보안 미준수 단말 즉시 격리",
    ],
    logo: "/images/product/genian.png",
  },
  {
    id: "infoblox-dns",
    cat: "DNS",
    name: "Trinzic DDI",
    vendor: "Infoblox",
    desc: "DNS / DHCP / IPAM을 통합 관리하는 DDI 솔루션. 중요 네트워크 서비스의 가시성과 가용성을 보장합니다.",
    features: [
      "DNS 보안 위협 차단 (DNS Tunneling, DGA 등)",
      "전사 IP 주소 통합 관리(IPAM)",
      "고가용성 DHCP / DNS 서비스",
      "중앙 정책 관리 및 감사 로깅",
    ],
    logo: "/images/product/9.png",
  },
  {
    id: "cisco-ips",
    cat: "IPS / Switch",
    name: "Cisco Fire Power · Catalyst",
    vendor: "Cisco",
    desc: "글로벌 표준의 침입차단(IPS) 시스템과 L2/L3 네트워크 스위치 라인업. 엔터프라이즈 네트워크 인프라의 기반.",
    features: [
      "Cisco Fire Power IPS — 차세대 침입 탐지/차단",
      "Catalyst Series L2/L3 스위치 — 엔터프라이즈 백본",
      "Threat Intelligence 기반 실시간 위협 차단",
      "통합 관리 콘솔과 SIEM 연동",
    ],
    logo: "/images/product/7.png",
  },
  {
    id: "piolink-l4",
    cat: "L4 Switch",
    name: "PAS-K · KV · KS Series",
    vendor: "PIOLINK",
    desc: "L4 네트워크 스위치 — 부하 분산(Load Balancing) 및 트래픽 최적화로 서비스의 안정성과 확장성을 보장합니다.",
    features: [
      "L4 ~ L7 부하 분산 및 헬스체크",
      "SSL 오프로딩 / 가속 처리",
      "이중화(HA) 구성으로 무중단 서비스",
      "트래픽 가시성 및 통계 리포트",
    ],
    logo: "/images/product/logo (1).png",
  },
];

export default function NetworkSecurityPage() {
  return (
    <div className="space-y-12 pb-20 pt-2 px-5 sm:px-8">
      {/* Hero */}
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Network Security
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          경계 없는 보안, <span className="text-blue-600">지능형 네트워크 방어.</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
          외부 위협 탐지부터 내부 자산 식별까지, (주)솔모정보기술의 검증된 네트워크 보안 라인업이 귀사의 인프라를 보호합니다.
        </p>
      </header>

      {/* Solution grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {SOLUTIONS.map((sol) => (
          <SolutionCard key={sol.id} sol={sol} />
        ))}
      </div>
    </div>
  );
}

function SolutionCard({ sol }) {
  return (
    <Link
      href={`/solutions/products/${sol.id}`}
      className="group bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all flex flex-col"
    >
      {/* Logo */}
      <div className="rounded-2xl px-4 py-5 flex items-center justify-center mb-5 h-24 border border-slate-100">
        <img
          src={sol.logo}
          alt={sol.vendor}
          loading="lazy"
          style={{ width: "auto", height: "auto", maxWidth: "70%", maxHeight: "100%", mixBlendMode: "multiply" }}
          className="object-contain"
        />
      </div>

      {/* Title row */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
            {sol.cat}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mt-1 group-hover:text-blue-600 transition-colors">
            {sol.name}
          </h3>
          <p className="text-xs font-bold text-slate-400 mt-1">{sol.vendor}</p>
        </div>
        {sol.badge && (
          <span className="shrink-0 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[9px] font-black uppercase tracking-wider text-amber-700">
            {sol.badge}
          </span>
        )}
      </div>

      <p className="text-slate-500 font-medium text-sm leading-relaxed mt-3 mb-5">
        {sol.desc}
      </p>

      <ul className="space-y-2">
        {sol.features.map((f, i) => (
          <li key={i} className="flex gap-2 items-start text-xs font-medium text-slate-600 leading-relaxed">
            <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-blue-600 uppercase tracking-widest">
        <span>자세히 보기</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}

