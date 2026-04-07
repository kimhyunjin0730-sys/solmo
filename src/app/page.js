'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/10 overflow-x-hidden scroll-smooth">
      
      {/* Permanent Fixed Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-white border-b border-slate-100"}`}>
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          <Link href="#top" className="flex items-center gap-3 cursor-pointer">
            <div className="relative w-[150px] h-[38px]">
              <Image src="/SOLMO_Logo.png" alt="SOLMO" fill priority className="object-contain" />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[12px] font-bold text-slate-500 uppercase tracking-widest">
            {/* 1. COMPANY Dropdown */}
            <div className="relative group">
               <button className="group-hover:text-[#001F5B] transition-colors flex items-center gap-1">COMPANY</button>
               <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-52 space-y-1">
                    <Link href="#about" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">인사말</Link>
                    <Link href="#history" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">연혁</Link>
                    <Link href="#certifications" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">인증 및 특허</Link>
                    <Link href="#organization" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">조직도</Link>
                  </div>
               </div>
            </div>

            {/* 2. SOLUTIONS Dropdown */}
            <div className="relative group">
               <button className="group-hover:text-[#001F5B] transition-colors flex items-center gap-1">SOLUTIONS</button>
               <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-60 space-y-1">
                    <Link href="#solutions" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">네트워크 보안</Link>
                    <Link href="#solutions" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all opacity-50">어플리케이션 보안</Link>
                    <Link href="#solutions" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all opacity-50">내부정보유출 보안</Link>
                    <Link href="#solutions" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all opacity-50">백업 및 복구</Link>
                  </div>
               </div>
            </div>
            
            {/* 3. SERVICES Dropdown */}
            <div className="relative group">
               <button className="group-hover:text-[#001F5B] flex items-center gap-1 transition-colors">SERVICES</button>
               <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-60 space-y-1">
                    <Link href="#secu-analysis" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">보안취약점 분석</Link>
                    <Link href="#secu-print" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">보안프린트 구축</Link>
                    <Link href="#maintenance" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">통합 유지보수</Link>
                  </div>
               </div>
            </div>

            {/* 4. SUPPORT Dropdown */}
            <div className="relative group">
               <button className="group-hover:text-[#001F5B] transition-colors flex items-center gap-1">SUPPORT</button>
               <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-5 w-52 space-y-1">
                    <Link href="#contact" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">영업문의</Link>
                    <Link href="#contact" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all opacity-50">오시는 길</Link>
                  </div>
               </div>
            </div>
            
            <Link href="#contact" className="ml-4 px-8 py-3 bg-[#001F5B] text-white rounded-full hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/10">문의하기</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative h-screen flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
          <Image 
            src="/office-bg.png" 
            alt="Security Background" 
            fill 
            className="object-cover opacity-30 invert"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10 w-full animate-reveal">
           <div className="max-w-4xl">
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-8 block">Total IT Security Partner</span>
              <h1 className="text-5xl md:text-[84px] font-black text-white leading-[1.05] tracking-tighter mb-12">
                미래를 보호하는 <br />
                <span className="text-blue-500">지능형 보안의 기준.</span>
              </h1>
              <p className="text-white/50 text-xl font-medium max-w-2xl leading-relaxed mb-16">
                (주)솔모정보기술은 22년의 신뢰와 화이트해커급 기술력을 바탕으로 <br />
                귀사의 소중한 정보 자산을 가장 안전하게 지켜드립니다.
              </p>
              <div className="flex gap-4">
                 <Link href="#solutions" className="px-10 py-5 bg-blue-600 text-white font-black rounded-lg hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 uppercase tracking-tighter">View Solutions</Link>
                 <Link href="#contact" className="px-10 py-5 border border-white/20 text-white font-black rounded-lg hover:bg-white/10 transition-all uppercase tracking-tighter">Expert Consulting</Link>
              </div>
           </div>
        </div>
      </section>

      {/* 1. About Us (Greetings) */}
      <section id="about" className="py-40 bg-white scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-video rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
             <Image src="/office-bg.png" alt="About SOLMO" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
             <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
          <div>
            <h2 className="text-[#001F5B] text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">
               2002년부터 이어온 <br />
               신뢰의 기술 파트너
            </h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
               <p>
                  (주)솔모정보기술은 기업의 전산실 구축 및 수탁 보안 운영을 통해 22년간 끊임없이 성장해온 전문 보안 SI 기업입니다.
               </p>
               <p>
                  네트워크 망분리, 시스템 이전, ITO 위탁운영 등 고객의 요구에 최적화된 맞춤형 보안 설계를 제안하며, 특히 자체 개발한 GS 1등급 스크린 워터마크 솔루션으로 시장을 선도하고 있습니다.
               </p>
               <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
                  <AboutStat label="Established" value="2002.10" />
                  <AboutStat label="Technical Force" value="47 Experts" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. History (Timeline Placeholder) */}
      <section id="history" className="py-40 bg-slate-50 scroll-mt-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
           <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-20 text-center">솔모정보기술 22년의 역사</h3>
           <div className="relative">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200"></div>
              <div className="space-y-24">
                 <HistoryItem year="2022" text="기업부설연구소 설립 및 자체 보안 솔루션 고도화" side="left" />
                 <HistoryItem year="2015" text="포스코 그룹사 및 금융권 통합 유지보수 확대" side="right" />
                 <HistoryItem year="2005" text="보안 네트워크 인프라 구축 솔루션 공급 개시" side="left" />
                 <HistoryItem year="2002" text="솔모정보기술 주식회사 설립" side="right" />
              </div>
           </div>
        </div>
      </section>

      {/* 3. Certifications & Organization (Grid Stats) */}
      <div id="certifications" className="scroll-mt-24"></div>
      <div id="organization" className="scroll-mt-24"></div>
      
      {/* Service Area with Individual Anchors */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Business Area</span>
              <h3 className="text-5xl font-black text-slate-900 tracking-tight">SOLMO Services</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div id="secu-analysis" className="scroll-mt-32">
               <ServiceCard 
                 id="01" 
                 title="보안취약점 분석" 
                 role="Security Consulting"
                 desc="모의해킹 및 소스코드 진단을 통한 잠재적 위협 식별 [cite: 171]" 
                 bg="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
               />
            </div>
            <div id="secu-print" className="scroll-mt-32">
               <ServiceCard 
                 id="02" 
                 title="보안프린트 구축" 
                 role="X-Securitas Solution"
                 desc="스크린 및 출력물 워터마크 삽입을 통한 기밀 유출 방지 [cite: 179]" 
                 bg="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
               />
            </div>
            <div id="maintenance" className="scroll-mt-32">
               <ServiceCard 
                 id="03" 
                 title="통합 유지보수" 
                 role="ITO Management"
                 desc="시스템 전반의 안정적 운영을 위한 24/365 위탁 관리 [cite: 171]" 
                 bg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Grid */}
      <section id="solutions" className="py-40 bg-slate-50 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-3">
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-6 underline decoration-blue-500 decoration-8 underline-offset-8">Solutions</h3>
              <p className="text-slate-400 font-medium leading-relaxed italic text-sm">
                 업계 최고의 글로벌 파트너사와 <br />
                 솔모의 기술력이 결합되었습니다.
              </p>
           </div>
           <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <SolutionCard title="Fortinet UTM" brand="Expert Partner" desc="차세대 방화벽 통합 관리 시스템 [cite: 55]" />
              <SolutionCard title="PIOLINK WAF" brand="Web Security" desc="웹 어플리케이션 취약점 탐지/차단 [cite: 202]" />
              <SolutionCard title="X-Securitas" brand="SOLMO Original" desc="자체 개발 스크린 워터마크 [cite: 202]" highlighted />
              <SolutionCard title="IBM QRadar" brand="SIEM / SOAR" desc="통합 로그 분석 및 위협 대응" />
              <SolutionCard title="DBSafer" brand="DB Access Control" desc="데이터베이스 가상화 및 정책 제어" />
              <SolutionCard title="HIWARE 6" brand="IAM Solution" desc="시스템 접근 통제 및 계정 관리" />
           </div>
        </div>
      </section>

      {/* Stat Section */}
      <section className="py-40 bg-slate-900 relative overflow-hidden text-white">
         <div className="max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <StatItem value="22" unit="Years" label="History" />
            <StatItem value="47" unit="Experts" label="Technical Force" />
            <StatItem value="1" unit="Grade" label="GS Certification" />
            <StatItem value="BB+" unit="Rating" label="Corporate Trust" />
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 border-t border-white/5 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
           <div className="bg-[#001F5B] p-16 md:p-24 text-white">
              <h3 className="text-3xl font-black mb-10">Inquiry</h3>
              <form className="space-y-6">
                 <input type="text" placeholder="성함 / 기업명" className="w-full bg-white/5 border border-white/10 rounded-lg p-5 focus:bg-white/10 outline-none transition-all" />
                 <input type="email" placeholder="이메일 주소" className="w-full bg-white/5 border border-white/10 rounded-lg p-5 focus:bg-white/10 outline-none transition-all" />
                 <textarea placeholder="문의 상세 내용" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:bg-white/10 outline-none transition-all"></textarea>
                 <button className="w-full py-5 bg-blue-600 rounded-lg font-black hover:bg-blue-500 transition-all uppercase tracking-widest text-[13px]">Submit Request</button>
              </form>
           </div>
           <div className="bg-slate-900 p-16 md:p-24 text-white">
              <h3 className="text-3xl font-black mb-10">Contact Info</h3>
              <div className="space-y-12">
                 <ContactInfo label="Main Line" value="02-402-8054" desc="평일 09:00 - 18:00 [cite: 8]" />
                 <ContactInfo label="E-mail" value="solmoit01@solmo.co.kr" desc="기술협력 및 상세 견적 [cite: 10]" />
                 <ContactInfo label="Address" value="서울특별시 광진구 아차산로 309" desc="구의역 1번 출구 도보 5분 [cite: 13]" />
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-8 border-t border-white/5 text-center">
         <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">© 2026 SOLMO Information Technology. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;700;900&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; }
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function AboutStat({ label, value }) {
  return (
    <div>
       <span className="block text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">{label}</span>
       <span className="text-2xl font-black text-slate-900">{value}</span>
    </div>
  );
}

function HistoryItem({ year, text, side }) {
  return (
    <div className={`flex items-center gap-12 animate-reveal ${side === 'left' ? 'flex-row-reverse text-right' : ''}`}>
       <div className="w-1/2">
          <div className="text-3xl font-black text-blue-600 mb-2 italic">{year}</div>
          <p className="text-sm font-bold text-slate-500">{text}</p>
       </div>
       <div className="relative z-10 w-4 h-4 rounded-full bg-blue-600 border-[4px] border-white shadow-xl shadow-blue-500/20"></div>
       <div className="w-1/2"></div>
    </div>
  );
}

function ServiceCard({ id, title, role, desc, bg }) {
  return (
    <div className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transition-all hover:-translate-y-4">
       <img src={bg} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
       <div className="absolute bottom-10 left-10 right-10">
          <span className="text-blue-500 font-black text-xl italic mb-2 block">{id}</span>
          <h4 className="text-xl font-black text-white mb-2">{title}</h4>
          <div className="text-[10px] font-black text-blue-400 opacity-80 uppercase tracking-widest mb-4">{role}</div>
          <p className="text-white/50 text-[11px] font-bold leading-relaxed mb-8">{desc}</p>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg group-hover:bg-blue-600 transition-colors">→</div>
       </div>
    </div>
  );
}

function SolutionCard({ title, brand, desc, highlighted }) {
  return (
    <div className={`p-10 rounded-[2rem] border transition-all ${highlighted ? "bg-[#001F5B] text-white border-transparent" : "bg-white border-slate-100 hover:border-blue-500 hover:shadow-xl"}`}>
       <span className={`text-[9px] font-black uppercase tracking-widest mb-3 block ${highlighted ? "text-blue-400" : "text-blue-600"}`}>{brand}</span>
       <h4 className="text-xl font-black mb-4 tracking-tighter">{title}</h4>
       <p className={`text-[11px] font-bold leading-relaxed ${highlighted ? "text-white/40" : "text-slate-400"}`}>{desc}</p>
    </div>
  );
}

function StatItem({ value, unit, label }) {
  return (
    <div>
       <div className="text-6xl font-black tracking-tighter mb-4 italic">{value}<span className="text-xl text-blue-500 ml-1">{unit}</span></div>
       <p className="text-[10px] font-black opacity-20 tracking-[0.3em] uppercase">{label}</p>
    </div>
  );
}

function ContactInfo({ label, value, desc }) {
  return (
    <div>
       <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-2 block">{label}</span>
       <h4 className="text-xl font-black mb-1">{value}</h4>
       <p className="text-white/20 text-[10px] font-bold leading-tight">{desc}</p>
    </div>
  );
}
