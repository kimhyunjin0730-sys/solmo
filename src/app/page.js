'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("2023");

  const historyData = {
    "2023": {
      label: "2023 ~ 현재",
      items: [
        { strong: "Infoblox", rest: " 파트너 등록" },
        { strong: "기업신용등급 BB+ 상향", rest: " (한국평가데이타)" },
        { strong: "서울지역 일학습병행 엠버서더", rest: " 선정" },
        { strong: "효성인포메이션시스템", rest: " 파트너 등록" },
        { strong: "Fortinet Expert", rest: " 파트너 승격" },
        { strong: "버카다(Verkada)", rest: " 파트너 등록" },
      ]
    },
    "2020": {
      label: "2020 ~ 2022",
      items: [
        { strong: "HCL 파트너 계약 체결", rest: " (AppScan)" },
        { strong: "X-Securitas 출시", rest: " — 스크린워터마크 솔루션 조달 등록" },
        { strong: "Citrix", rest: " 파트너 등록" },
        { strong: "고숙련일학습병행", rest: " 학습기업 등록" },
      ]
    },
    "2015": {
      label: "2015 ~ 2019",
      items: [
        { strong: "Fortinet 최우수 파트너 수상", rest: "" },
        { strong: "넷앤드 HIWARE", rest: " 파트너 등록" },
        { strong: "HP 파트너 등록", rest: " / 신용등급 B+" },
        { strong: "국방과학기술 수출 중개업", rest: " 등록" },
      ]
    },
    "2013": {
      label: "2013 ~ 2014",
      items: [
        { strong: "IBM e-Security", rest: " 파트너 등록" },
        { strong: "아크로니스 백업 파트너 등록", rest: "" },
        { strong: "벤처기업확인", rest: " 등록" },
        { strong: "PNP시큐어 영업 파트너", rest: " 등록" },
      ]
    },
    "2002": {
      label: "2002 ~ 2012",
      items: [
        { strong: "2002", rest: " — ㈜에이투지정보기술 설립" },
        { strong: "2009", rest: " — (주)솔모정보기술 법인명 변경" },
        { strong: "2010", rest: " — 기업부설연구소 설립 / 정보통신공사업 등록" },
        { strong: "2011", rest: " — Fortinet Gold 파트너 승격" },
        { strong: "특허 등록", rest: " — 무선랜, 다기능인터폰, 수배전반 안전관리" },
      ]
    },
  };

  const solutionCategories = [
    {
      category: "네트워크 보안",
      color: "blue",
      items: [
        { name: "Fortinet FortiGate", tag: "UTM / VPN", note: "통합 위협 관리" },
        { name: "PIOLINK WEBFRONT-K", tag: "WAF", note: "웹 방화벽" },
        { name: "Genian NAC", tag: "NAC", note: "네트워크 접근 제어" },
        { name: "NETAND HIWARE", tag: "IAM / Access Control", note: "계정 및 접근 통제" },
        { name: "Network DLP / URL Filter", tag: "DLP / Proxy", note: "Mail-i / WebKeeper" },
      ]
    },
    {
      category: "내부정보유출 보안",
      color: "indigo",
      items: [
        { name: "xSecuritas", tag: "Watermark", note: "스크린 워터마크 (자체개발)" },
        { name: "DBSAFER", tag: "DB Security", note: "DB 접근 제어" },
        { name: "IBM QRadar", tag: "SIEM / SOAR", note: "통합 로그 관리" },
        { name: "Sindoh uPrint", tag: "Secure Print", note: "보안 복합기 시스템" },
      ]
    },
    {
      category: "어플리케이션 보안",
      color: "sky",
      items: [
        { name: "ITStation TA-PRS / FDM", tag: "PMS / FDM", note: "패치 및 배포 관리" },
        { name: "Gaaiho PDF Suite", tag: "PDF / Office", note: "문서 관리 솔루션" },
      ]
    },
    {
      category: "백업 및 복구",
      color: "violet",
      items: [
        { name: "Acronis Cyber Protect", tag: "Backup / DR", note: "이미지 백업 및 재해 복구" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/10 overflow-x-hidden scroll-smooth pt-20">

      {/* ── Hero ── */}
      <section id="top" className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/office-bg.png"
            alt="Security Background"
            fill
            className="object-cover opacity-25 invert"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10 w-full animate-reveal">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.4em] mb-6 block">
              Total IT Security Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-8">
              미래를 보호하는 <br />
              <span className="text-blue-400">지능형 보안의 기준.</span>
            </h1>
            <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed mb-12">
              (주)솔모정보기술은 22년의 신뢰와 화이트해커급 기술력을 바탕으로
              귀사의 소중한 정보 자산을 가장 안전하게 지켜드립니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#solutions"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider"
              >
                솔루션 보기
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
              >
                전문가 상담
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-[#001F5B]">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <StatItem value="22" unit="년" label="업력" />
          <StatItem value="47" unit="명" label="전문 기술인력" />
          <StatItem value="GS" unit="1등급" label="소프트웨어 인증" />
          <StatItem value="BB+" unit="" label="기업신용등급" />
        </div>
      </section>

      {/* ── Solution Grid ── */}
      <section id="solutions" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-14">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3 block">전략 제품</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">보안 솔루션 포트폴리오</h2>
            <p className="text-slate-500 text-base max-w-xl leading-relaxed">
              글로벌 파트너사의 검증된 제품과 솔모의 자체 기술이 결합된 종합 보안 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutionCategories.map((cat) => (
              <div key={cat.category} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-7 py-5 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-800">{cat.category}</h3>
                </div>
                <div className="divide-y divide-slate-50">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between px-7 py-4 hover:bg-slate-50 transition-colors">
                      <div>
                        <p className="text-sm font-bold text-slate-800">{item.name}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.note}</p>
                      </div>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3 block">사업 영역</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">SOLMO Services</h2>
            </div>
            <Link
              href="/services/vulnerability-analysis"
              className="text-blue-600 font-bold text-sm uppercase tracking-wider border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-colors"
            >
              전체 서비스 →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              id="01"
              title="보안취약점 분석"
              role="Security Consulting"
              desc="모의해킹 및 소스코드 진단을 통한 잠재적 위협 식별"
              bg="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              href="/services/vulnerability-analysis"
            />
            <ServiceCard
              id="02"
              title="보안프린트 구축"
              role="X-Securitas Solution"
              desc="스크린 및 출력물 워터마크 삽입을 통한 기밀 유출 방지"
              bg="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
              href="/services/secure-printing"
            />
            <ServiceCard
              id="03"
              title="통합 유지보수"
              role="ITO Management"
              desc="시스템 전반의 안정적 운영을 위한 24/365 위탁 관리"
              bg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              href="/services/maintenance"
            />
          </div>
        </div>
      </section>

      {/* ── History ── */}
      <section id="history" className="py-24 bg-slate-900 overflow-hidden scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar */}
            <div className="lg:w-64 shrink-0">
              <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 block">Our Heritage</span>
              <h2 className="text-4xl font-black text-white tracking-tight mb-10">
                솔모 22년<br />성장의 기록
              </h2>
              <div className="flex flex-col gap-2">
                {Object.entries(historyData).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-5 py-4 rounded-xl text-left text-sm font-bold transition-all ${
                      activeTab === key
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-white/50 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {val.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white/5 rounded-3xl border border-white/10 p-10 min-h-[400px]">
              {historyData[activeTab] && (
                <div className="animate-reveal space-y-4">
                  <h3 className="text-white font-black text-xl mb-8">
                    {historyData[activeTab].label}
                  </h3>
                  {historyData[activeTab].items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
                      <span className="text-blue-400 mt-1">▸</span>
                      <p className="text-white/80 text-sm leading-relaxed">
                        <strong className="text-white font-bold">{item.strong}</strong>
                        {item.rest}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section id="clients" className="py-24 bg-white border-b border-slate-100 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-14">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3 block">References</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">주요 고객사</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ClientGroup
              label="금융"
              clients={["MG새마을금고", "하나손해보험", "Sh수협은행", "SC제일은행", "KB금융그룹", "한화생명", "미래에셋자산운용", "DGB금융그룹"]}
            />
            <ClientGroup
              label="기업 / 제조"
              clients={["with POSCO", "GS칼텍스", "GS EPS", "DN오토모티브", "LG에너지솔루션", "KOREAN AIR", "롯데정보통신", "POONGSAN"]}
            />
            <ClientGroup
              label="공공"
              clients={["한국수력원자력", "NICE평가정보", "KoROAD 도로교통공단", "울산항만공사", "BPA 부산항만공사", "국민건강보험", "KRIHS 국토연구원"]}
            />
            <ClientGroup
              label="교육 / 병원"
              clients={["서울대학교", "성균관대학교", "연세대학교 의료원", "국립암센터", "삼광의료재단", "Seegene"]}
            />
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-slate-900 border-t border-white/5 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="bg-[#001F5B] p-16 md:p-20 text-white">
            <h2 className="text-3xl font-black mb-2">문의하기</h2>
            <p className="text-white/50 text-sm mb-10">전문 컨설턴트가 빠르게 답변드립니다.</p>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="성함 / 기업명"
                className="w-full bg-white/8 border border-white/20 rounded-lg px-5 py-4 text-sm placeholder-white/40 focus:bg-white/10 focus:border-blue-400 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full bg-white/8 border border-white/20 rounded-lg px-5 py-4 text-sm placeholder-white/40 focus:bg-white/10 focus:border-blue-400 outline-none transition-all"
              />
              <textarea
                placeholder="문의 상세 내용"
                rows={4}
                className="w-full bg-white/8 border border-white/20 rounded-xl px-5 py-4 text-sm placeholder-white/40 focus:bg-white/10 focus:border-blue-400 outline-none transition-all resize-none"
              />
              <button className="w-full py-4 bg-blue-600 rounded-lg font-bold hover:bg-blue-500 transition-colors text-sm uppercase tracking-widest">
                문의 제출
              </button>
            </form>
          </div>
          <div className="bg-slate-900 p-16 md:p-20 text-white">
            <h2 className="text-3xl font-black mb-2">연락처</h2>
            <p className="text-white/50 text-sm mb-10">평일 09:00 – 18:00 운영</p>
            <div className="space-y-10">
              <ContactInfo label="대표 전화" value="02-402-8054" desc="평일 09:00 - 18:00" />
              <ContactInfo label="이메일" value="solmoit01@solmo.co.kr" desc="기술협력 및 상세 견적 문의" />
              <ContactInfo label="주소" value="서울특별시 광진구 아차산로 309" desc="남장빌딩 2층 (구의역 1번 출구 도보 5분)" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 py-10 px-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-xs font-medium uppercase tracking-widest">
          © 2026 SOLMO Information Technology Co., Ltd. All rights reserved.
        </p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function ServiceCard({ id, title, role, desc, bg, href }) {
  return (
    <div className="group relative h-[420px] rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300">
      <img src={bg} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8">
        <span className="text-blue-400 font-black text-2xl italic mb-1 block">{id}</span>
        <h4 className="text-lg font-black text-white mb-1">{title}</h4>
        <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-3">{role}</div>
        <p className="text-white/60 text-xs leading-relaxed mb-6">{desc}</p>
        <Link
          href={href}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white text-base group-hover:bg-blue-600 transition-colors"
        >
          →
        </Link>
      </div>
    </div>
  );
}

function StatItem({ value, unit, label }) {
  return (
    <div>
      <div className="text-5xl font-black tracking-tight mb-2 text-white">
        {value}
        {unit && <span className="text-lg text-blue-400 ml-1">{unit}</span>}
      </div>
      <p className="text-white/50 text-xs font-semibold tracking-widest uppercase">{label}</p>
    </div>
  );
}

function ContactInfo({ label, value, desc }) {
  return (
    <div>
      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1 block">{label}</span>
      <h4 className="text-base font-bold text-white mb-1">{value}</h4>
      <p className="text-white/40 text-xs leading-snug">{desc}</p>
    </div>
  );
}

function ClientGroup({ label, clients }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6">
      <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{label}</h4>
      <ul className="space-y-2">
        {clients.map((c) => (
          <li key={c} className="text-sm text-slate-600 font-medium flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
