'use client';
import Image from "next/image";

export default function NetworkSecurityPage() {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20 pt-10 px-8">
      {/* ────────────── HERO ────────────── */}
      <header className="relative max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">
          Network Security
        </span>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
          경계 없는 보안,<br />
          <span className="text-blue-600">지능형 네트워크 방어.</span>
        </h2>
        <p className="text-slate-500 font-bold text-sm lg:text-base leading-relaxed max-w-2xl">
          외부 위협 탐지부터 내부 자산 식별까지, (주)솔모정보기술의 검증된 네트워크 보안 라인업이 귀사의 인프라를 보호합니다.
        </p>

        {/* Quick Index */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-6 gap-3">
          {[
            { id: "fortinet", label: "UTM" },
            { id: "piolink", label: "WAF" },
            { id: "dlp", label: "Mail DLP" },
            { id: "webkeeper", label: "Filtering" },
            { id: "nac", label: "NAC" },
            { id: "hiware", label: "IAM" },
          ].map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="text-center px-4 py-3 rounded-full border border-slate-200 text-xs font-black tracking-wider uppercase text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              {it.label}
            </a>
          ))}
        </div>
      </header>

      {/* ────────────── 1. FORTINET UTM ────────────── */}
      <section id="fortinet" className="scroll-mt-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                Gold Partner
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                01 / Unified Threat Management
              </span>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Fortinet<br />FortiGate UTM
            </h3>
            <p className="text-slate-500 font-bold leading-relaxed mb-10">
              Firewall, VPN, Anti-Virus, IPS 등 필수 보안 기능을 단일 장비에서 통합 수행하는 차세대 보안 시스템입니다. ASIC 기반 가속화 하드웨어와 전용 Secure OS로 성능 저하 없는 강력한 보안을 보장합니다.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Stat value="5,000+" label="공격 패턴 차단" />
              <Stat value="ASIC" label="하드웨어 가속" />
              <Stat value="VDOM" label="가상 도메인 지원" />
              <Stat value="L2-L7" label="전 계층 방어" />
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50 rounded-[2.5rem] border border-slate-100 p-10 lg:p-12">
            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-8">
              Key Capabilities
            </h4>
            <ul className="space-y-6">
              <SpecRow num="01" title="능동적 침입 차단" desc="DoS/DDoS, Scan, Flood, ICMP 등 5,000종 이상의 공격 패턴을 실시간 자동 업데이트로 차단합니다." />
              <SpecRow num="02" title="통합 보안 엔진" desc="Firewall · VPN(IPSec/SSL/L2TP) · IDS/IPS · Anti-Virus/Spam을 단일 장비에서 통합 수행." />
              <SpecRow num="03" title="유연한 모드" desc="NAT · PAT · Transparent(Bridge) 모드 및 가상 도메인(VDOM) 완벽 지원." />
              <SpecRow num="04" title="강력한 암호화" desc="DES, 3DES, AES 암호화와 SHA-1, MD5 인증으로 안전한 익명 통신 보장." />
            </ul>
          </div>
        </div>
      </section>

      {/* ────────────── 2. PIOLINK WAF (DARK CARD) ────────────── */}
      <section id="piolink" className="scroll-mt-32">
        <div className="bg-[#001F5B] rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>

          <div className="relative grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-4 block">
                02 / Web Application Firewall
              </span>
              <h3 className="text-4xl lg:text-5xl font-black mb-8 tracking-tighter">
                PIOLINK<br />WEBFRONT-K
              </h3>
              <p className="text-white/60 font-bold leading-relaxed mb-10 max-w-xl">
                웹 어플리케이션 전용 보안 솔루션으로, SQL Injection, XSS 등 웹 해킹으로부터 서버를 보호하고 개인정보 유출을 원천 방지합니다. 웹 인프라 앞단에 설치되어 모든 유입 트래픽을 감시합니다.
              </p>
              <ul className="space-y-3">
                {[
                  "웹 사이트 정적/동적 컨텐츠 변조 사전 차단",
                  "개인정보 및 신용카드 정보 불법 유출 방지",
                  "SSL 오프로딩으로 웹 서버 부하 경감",
                  "고가용성(HA) 이중화 구성 지원",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-bold text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <DarkCell big="L7" sub="Web Layer 방어" />
              <DarkCell big="HA" sub="이중화 무중단" />
              <DarkCell big="LB" sub="부하 분산" />
              <DarkCell big="SSL" sub="암호화 처리" />
              <div className="col-span-2 p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-3">
                  Compliance Ready
                </div>
                <p className="text-sm font-bold text-white/70 leading-relaxed">
                  보안 위반 사례 발생 시 법적 대응을 위한 근거를 확보하며, 안정적 서비스 운영으로 고객의 신뢰를 강화합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── 3 & 4. DLP + WEBKEEPER (DUO) ────────────── */}
      <div className="grid lg:grid-cols-2 gap-8">
        <DuoCard
          id="dlp"
          tag="03 / Network DLP"
          title="소만사 Mail-i"
          desc="이메일, 메신저, SNS, 웹하드 등 외부 채널을 모니터링하여 비즈니스 정보의 외부 유출을 상시 감사하는 서비스입니다."
          features={[
            "SMTP / WEBMAIL 실시간 모니터링 및 저장",
            "첨부파일 키워드 정밀 검사 및 원본 보관",
            "개인정보 전송 시 즉시 통보 및 차단",
            "백본 스위치 통합 / 분산 환경 중앙 관리",
          ]}
        />
        <DuoCard
          id="webkeeper"
          tag="04 / Filtering"
          title="WebKeeper SG"
          desc="비업무 사이트 및 악성코드 유포 사이트 접속을 통제하여 업무 생산성과 시스템 안정성을 동시에 확보합니다."
          features={[
            "업무 / 비업무 사이트 정책별 통제",
            "HTTPS(SSL) 암호화 트래픽 정교한 제어",
            "P2P · 웹하드 등 대역폭 점유 프로그램 차단",
            "1,000명 기준 연간 약 7.5억 원 비용 절감",
          ]}
          highlight
        />
      </div>

      {/* ────────────── 5. GENIAN NAC (ARCHITECTURE) ────────────── */}
      <section id="nac" className="scroll-mt-32">
        <div className="bg-slate-50 rounded-[3rem] border border-slate-100 p-12 lg:p-16 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: Description */}
            <div className="lg:col-span-5">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">
                05 / Network Access Control
              </span>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Genian NAC
              </h3>
              <p className="text-slate-500 font-bold leading-relaxed mb-10">
                자산과 사용자를 식별하여 권한을 차등 부여합니다. 보안 정책 미준수 단말은 접속을 즉시 차단하여 청정한 네트워크 환경을 유지합니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-base font-black text-slate-900 mb-1">네트워크 실명화</div>
                  <p className="text-xs font-bold text-slate-400 leading-relaxed">단말 인증을 통한 사용자 식별</p>
                </div>
                <div>
                  <div className="text-base font-black text-slate-900 mb-1">외부인 통제</div>
                  <p className="text-xs font-bold text-slate-400 leading-relaxed">방문객 접속 범위 자동 제한</p>
                </div>
                <div>
                  <div className="text-base font-black text-slate-900 mb-1">무결성 점검</div>
                  <p className="text-xs font-bold text-slate-400 leading-relaxed">단말 보안 정책 준수 여부 검사</p>
                </div>
                <div>
                  <div className="text-base font-black text-slate-900 mb-1">BYOD 통합</div>
                  <p className="text-xs font-bold text-slate-400 leading-relaxed">유무선 단일 정책 관리</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Architecture diagram (no overflow) */}
            <div className="lg:col-span-7">
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-6">
                System Architecture
              </h4>
              <div className="space-y-4">
                <ArchCard
                  step="01"
                  tag="Policy Server"
                  title="유무선 통합 관리 및 정책 배포"
                  desc="중앙 정책 서버 & 콘솔에서 전사 보안 정책을 일괄 배포"
                />
                <ArchCard
                  step="02"
                  tag="Network Sensor"
                  title="실시간 패킷 수집 및 차단 수행"
                  desc="네트워크 접점에서 단말 정보 수집 및 강제 통제"
                />
                <ArchCard
                  step="03"
                  tag="Optional Agent"
                  title="PC 자산 및 장치 관리 확장"
                  desc="필요한 그룹에만 선택 설치하여 무결성 검사 수행"
                />
              </div>

              {/* Deployment options */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["On-Premise", "Cloud", "Virtual Machine"].map((d) => (
                  <div
                    key={d}
                    className="text-center py-4 bg-white rounded-2xl border border-slate-200 text-xs font-black uppercase tracking-wider text-slate-700"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── 6. NETAND HIWARE (IAM) ────────────── */}
      <section id="hiware" className="scroll-mt-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
            06 / Identity & Access Management
          </span>
          <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">
            NETAND HIWARE
          </h3>
          <p className="text-slate-500 font-bold leading-relaxed">
            계정의 생성부터 삭제까지의 Life-cycle 관리와 모든 사용자의 권한·명령어를 통제하는 통합 보안 감사 솔루션. 컴플라이언스 준수 및 보안 감사에 완벽 대응합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IAMCard
            title="접근 차단"
            desc="인증 미등록 IP 및 MAC 주소로부터의 모든 접근을 원천 차단하여 운영 시스템을 보호합니다."
          />
          <IAMCard
            title="중앙 집중 통제"
            desc="접속 IP, MAC, 시간 설정 및 2-Factor 인증을 통한 정교한 권한 분배를 수행합니다."
          />
          <IAMCard
            title="명령어 제어"
            desc="그룹별, 장비별 등 다양한 조건에 따라 명령어 권한을 설정하고 실시간 통제합니다."
          />
          <IAMCard
            title="스케줄 관리"
            desc="작업 시간 및 유휴 시간을 날짜, 요일, 시간 단위로 세밀하게 설정 가능합니다."
          />
          <IAMCard
            title="실시간 모니터링"
            desc="현재 작업 중인 모든 세션에 대해 실시간 모니터링 및 감사를 수행합니다."
          />
          <IAMCard
            title="HR 시스템 연동"
            desc="기업 내 인사 시스템 및 전자결재 시스템과의 유연한 연동 개발을 지원합니다."
          />
        </div>
      </section>

      {/* ────────────── CTA ────────────── */}
      <section className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3 block">
              Consulting & Deployment
            </span>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3">
              네트워크 보안, 솔모와 함께 시작하세요.
            </h3>
            <p className="text-white/50 font-bold">
              구축 환경 진단부터 솔루션 선정, 운영까지 — 전 과정을 지원합니다.
            </p>
          </div>
          <a
            href="tel:024028054"
            className="shrink-0 px-8 py-5 bg-white text-slate-900 rounded-full text-sm font-black tracking-wider hover:bg-blue-500 hover:text-white transition-all"
          >
            02-402-8054 →
          </a>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      </section>
    </div>
  );
}

/* ──────────── Sub-components ──────────── */

function Stat({ value, label }) {
  return (
    <div className="p-5 bg-white border border-slate-100 rounded-2xl">
      <div className="text-2xl font-black text-blue-600 mb-1 tracking-tight">{value}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</div>
    </div>
  );
}

function SpecRow({ num, title, desc }) {
  return (
    <li className="flex gap-6 items-start border-b border-slate-200 pb-6 last:border-0 last:pb-0">
      <span className="text-2xl font-black text-slate-300 shrink-0">{num}</span>
      <div className="min-w-0">
        <div className="text-base font-black text-slate-900 mb-1">{title}</div>
        <p className="text-sm font-bold text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

function DarkCell({ big, sub }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
      <div className="text-3xl font-black mb-2 tracking-tighter">{big}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{sub}</div>
    </div>
  );
}

function DuoCard({ id, tag, title, desc, features, highlight }) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 p-12 rounded-[2.5rem] border transition-all hover:shadow-2xl ${
        highlight ? "bg-blue-50/40 border-blue-100" : "bg-white border-slate-100"
      }`}
    >
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-3 block">
        {tag}
      </span>
      <h3 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">{title}</h3>
      <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8">{desc}</p>
      <ul className="space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 text-sm font-bold text-slate-700 items-start">
            <span className="text-blue-600 mt-1 shrink-0">✓</span>
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ArchCard({ step, tag, title, desc }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 flex gap-5 items-start hover:border-blue-600 hover:shadow-md transition-all">
      <div className="text-3xl font-black text-slate-200 shrink-0 leading-none">{step}</div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">{tag}</div>
        <div className="text-base font-black text-slate-900 mb-1">{title}</div>
        <p className="text-xs font-bold text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function IAMCard({ title, desc }) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-600 hover:-translate-y-1 transition-all">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-6">
        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
      </div>
      <div className="text-lg font-black text-slate-900 mb-3 tracking-tight">{title}</div>
      <p className="text-sm font-bold text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}
