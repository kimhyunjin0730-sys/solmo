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
                    <Link href="#greetings" className="block px-4 py-3 hover:bg-slate-50 rounded-xl text-[11px] font-black text-slate-500 hover:text-[#001F5B] transition-all">인사말</Link>
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

      {/* 1. Greetings (CEO Message) */}
      <section id="greetings" className="py-40 bg-white scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square md:aspect-video rounded-3xl bg-slate-100 overflow-hidden shadow-2xl">
             <Image src="/office-bg.png" alt="CEO Message" fill className="object-cover" />
             <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex items-center justify-center p-12">
                <div className="text-white text-center">
                   <p className="text-2xl md:text-3xl font-black leading-tight mb-6">
                      "고객과 함께 성장하는 <br /> 보안 파트너, 솔모정보기술입니다."
                   </p>
                   <div className="w-12 h-1 bg-blue-500 mx-auto mb-6"></div>
                   <p className="text-white/80 font-bold tracking-widest uppercase text-sm">CEO 이병두</p>
                </div>
             </div>
          </div>
          <div>
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">CEO Message</span>
            <h2 className="text-[#001F5B] text-4xl md:text-5xl font-black tracking-tight mb-10 leading-tight">
               신뢰를 바탕으로 <br />
               미래를 열어가는 조력자
            </h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
               <p>
                  (주)솔모정보기술은 2002년 설립 이래 보안 솔루션 구축 및 유지보수, 소프트웨어 및 보안 시스템 납품 등 기업 전산실 구축과 수탁 보안 운영 분야에서 전문성을 쌓아왔습니다.
               </p>
               <p>
                  끊임없이 변화하는 IT 환경 속에서 고객사의 비즈니스 가치를 보호하고 만족도를 높이기 위해 경쟁력 있는 최적의 솔루션을 제공하고 있습니다. 단순히 기술을 납품하는 것을 넘어, 고객의 신뢰를 바탕으로 함께 미래를 열어가는 든든한 조력자가 되기 위해 모든 임직원이 최선을 다하겠습니다.
               </p>
               <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <AboutStat label="Established" value="2002.10" />
                  <div className="text-right">
                     <span className="block text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1">Company Name</span>
                     <span className="text-2xl font-black text-slate-900">(주)솔모정보기술</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. History (Timeline) */}
      <section id="history" className="py-40 bg-slate-50 scroll-mt-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
           <div className="text-center mb-24">
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Our Journey</span>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter">솔모정보기술 22년 역사</h3>
           </div>
           
           <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200"></div>
              
              <div className="space-y-16 lg:space-y-0">
                 {/* Recent Activity */}
                 <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
                    <div className="lg:text-right">
                       <h4 className="text-3xl font-black text-blue-600 mb-4">2019 - Present</h4>
                       <p className="text-slate-400 font-bold mb-8">혁신과 도약의 시기</p>
                    </div>
                    <div className="relative pl-8 lg:pl-0 border-l-2 lg:border-l-0 border-blue-500">
                       <ul className="space-y-4 text-slate-600 font-medium list-disc list-inside lg:list-none">
                          <li><span className="text-blue-600 font-bold">HCL</span> 파트너 계약 및 포스코DX 협력사 선정</li>
                          <li>자체 솔루션 <span className="text-blue-600 font-bold">X-Securitas</span> 개발 및 조달 등록</li>
                          <li>금융권(새마을금고) 및 공공(국립암센터) 대형 구축</li>
                          <li>울산항만공사 영상회의 시스템 및 ISMS 강화</li>
                       </ul>
                    </div>
                 </div>

                 <div className="lg:h-24 hidden lg:block"></div>

                 {/* Growth Period */}
                 <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative order-2 lg:order-1 text-right lg:pr-8 pr-0 border-r-0 lg:border-r-2 lg:border-blue-500">
                       <ul className="space-y-4 text-slate-600 font-medium">
                          <li>벤처기업확인 및 연구소 중심 성장</li>
                          <li>IBM, Acronis, HP, PNP시큐어 파트너십</li>
                          <li><span className="text-blue-600 font-bold">Fortinet</span> 최우수 파트너 및 Expert 승격</li>
                       </ul>
                    </div>
                    <div className="order-1 lg:order-2">
                       <h4 className="text-3xl font-black text-blue-600 mb-4">2013 - 2018</h4>
                       <p className="text-slate-400 font-bold mb-8 italic">기술력 확보 및 시장 확대</p>
                    </div>
                 </div>

                 <div className="lg:h-24 hidden lg:block"></div>

                 {/* Foundation */}
                 <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
                    <div className="lg:text-right">
                       <h4 className="text-3xl font-black text-blue-600 mb-4">2002 - 2012</h4>
                       <p className="text-slate-400 font-bold mb-8">신뢰의 시작</p>
                    </div>
                    <div className="relative pl-8 lg:pl-0 border-l-2 lg:border-l-0 border-blue-500">
                       <ul className="space-y-4 text-slate-600 font-medium list-disc list-inside lg:list-none">
                          <li>2009년 **(주)솔모정보기술** 법인명 변경</li>
                          <li>2002년 ㈜에이투지정보기술 설립</li>
                          <li>정보통신공사업 등록 및 다수 특허 보유</li>
                          <li>기업부설연구소 설립으로 독자 기술 확보</li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Certifications (Grid Layout) */}
      <section id="certifications" className="py-40 bg-white scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Competency</span>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter">인증 및 특허</h3>
              </div>
              <p className="text-slate-400 font-bold text-lg max-w-md">최고의 기술력을 증명하는 대내외 인증 현황입니다.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CertCard title="기업 인증" items={["벤처기업확인서", "정보통신공사업 등록증", "소프트웨어사업자 신고", "직접생산확인증명서"]} icon="🏢" />
              <CertCard title="기술 및 품질" items={["GS 인증 1등급 보유", "기업부설연구소 인정서", "신용평가등급 BB+", "기술역량 우수기업"]} icon="🏆" />
              <CertCard title="보유 특허" items={["무선랜 관련 특허", "다기능 인터폰 특허", "수배전반 안전관리 특허", "도어락 보안 특허"]} icon="💡" />
           </div>
        </div>
      </section>

      {/* 4. Organization (Visual Chart) */}
      <section id="organization" className="py-40 bg-[#001F5B] scroll-mt-24 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
           <div className="text-center mb-24">
              <span className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4 block">Structure</span>
              <h3 className="text-5xl font-black tracking-tighter mb-8">조직도 및 인력인프라</h3>
              <p className="text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
                 유기적인 협력 체계를 통해 신속한 의사결정과 <br />
                 전문적인 보안 서비스를 제공하고 있습니다.
              </p>
           </div>

           {/* Organization Tree Visualization */}
           <div className="relative pt-12">
              <div className="flex justify-center mb-16">
                 <div className="bg-white text-[#001F5B] px-12 py-5 rounded-2xl font-black text-xl shadow-2xl relative z-10 transition-transform hover:scale-105">
                    대표이사 (CEO)
                 </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
                 {/* Connection Lines (Simplification for responsiveness) */}
                 <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-blue-500/30"></div>
                 
                 <OrgNode title="기업부설연구소" desc="자체 솔루션 개발 및 기술 연구" accent />
                 <OrgNode title="경영관리부" desc="기업 운영 및 경영 지원" />
                 <OrgNode title="사업 1부" desc="솔루션사업팀 / 컨설팅" />
                 <OrgNode title="사업 2부" desc="NW기술팀 / 기술지원" />
                 <OrgNode title="사업 3부" desc="보안관제사업팀 / 수탁관리" />
                 <OrgNode title="SI 사업부" desc="SI사업팀 / 인프라구축" />
              </div>
              
              <div className="mt-24 pt-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h4 className="text-2xl font-black mb-6">전문 인력 현황</h4>
                    <div className="flex items-baseline gap-4 mb-8">
                       <span className="text-6xl font-black text-blue-400">47</span>
                       <span className="text-xl font-bold opacity-50">Total Experts</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-4 rounded-xl">
                          <span className="block text-[10px] opacity-40 uppercase tracking-widest mb-1">Expert Class</span>
                          <span className="text-lg font-bold">특급전문가 9명</span>
                       </div>
                       <div className="bg-white/5 p-4 rounded-xl">
                          <span className="block text-[10px] opacity-40 uppercase tracking-widest mb-1">High Class</span>
                          <span className="text-lg font-bold">고급전문가 15명</span>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <p className="text-white/40 text-sm leading-relaxed">
                       솔모정보기술은 전체 인원의 90% 이상이 기술직으로 구성된 엔지니어 중심의 기업입니다. 
                       정기적인 기술 교육과 워크숍을 통해 시장 변화에 대응하고 있습니다.
                    </p>
                    <div className="bg-blue-600/20 border border-blue-500/30 p-6 rounded-2xl">
                       <div className="flex justify-between items-center mb-2">
                          <span className="font-bold">기술 전문성 만족도</span>
                          <span className="text-blue-400 font-black italic">98%</span>
                       </div>
                       <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-[98%] h-full bg-blue-500"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
      
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

function CertCard({ title, items, icon }) {
  return (
    <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-500 hover:bg-white hover:shadow-2xl transition-all group">
       <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
       <h4 className="text-xl font-black text-[#001F5B] mb-6">{title}</h4>
       <ul className="space-y-3">
          {items.map((item, idx) => (
             <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover:bg-blue-500"></div>
                {item}
             </li>
          ))}
       </ul>
    </div>
  );
}

function OrgNode({ title, desc, accent }) {
  return (
    <div className="relative group">
       <div className={`p-8 rounded-2xl border transition-all h-full ${accent ? "bg-blue-600 border-transparent" : "bg-white/5 border-white/10 hover:bg-white/10"}`}>
          <h4 className={`text-lg font-black mb-2 ${accent ? "text-white" : "text-blue-400"}`}>{title}</h4>
          <p className={`text-xs font-medium leading-relaxed ${accent ? "text-white/70" : "text-white/40"}`}>{desc}</p>
       </div>
    </div>
  );
}
