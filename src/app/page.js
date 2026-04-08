'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/10 overflow-x-hidden scroll-smooth pt-20">
      
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
              <SolutionCard title="Fortinet UTM" brand="Expert Partner" desc="차세대 방화벽 통합 관리 시스템" />
              <SolutionCard title="PIOLINK WAF" brand="Web Security" desc="웹 어플리케이션 취약점 탐지/차단" />
              <SolutionCard title="X-Securitas" brand="SOLMO Original" desc="자체 개발 스크린 워터마크" highlighted />
              <SolutionCard title="IBM QRadar" brand="SIEM / SOAR" desc="통합 로그 분석 및 위협 대응" />
              <SolutionCard title="DBSafer" brand="DB Access Control" desc="데이터베이스 가상화 및 정책 제어" />
              <SolutionCard title="HIWARE 6" brand="IAM Solution" desc="시스템 접근 통제 및 계정 관리" />
           </div>
        </div>
      </section>
      
      {/* Service Area */}
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
                 desc="모의해킹 및 소스코드 진단을 통한 잠재적 위협 식별" 
                 bg="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                 href="/services/vulnerability-analysis"
               />
            </div>
            <div id="secu-print" className="scroll-mt-32">
               <ServiceCard 
                 id="02" 
                 title="보안프린트 구축" 
                 role="X-Securitas Solution"
                 desc="스크린 및 출력물 워터마크 삽입을 통한 기밀 유출 방지" 
                 bg="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
                 href="/services/secure-printing"
               />
            </div>
            <div id="maintenance" className="scroll-mt-32">
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
        </div>
      </section>

      {/* Full Integrated History Section */}
      <section id="history" className="py-40 bg-slate-50 border-y border-slate-100 scroll-mt-24">
         <div className="max-w-[1400px] mx-auto px-8">
            <div className="text-center mb-24">
               <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Our Legacy</span>
               <h3 className="text-5xl font-black text-slate-900 tracking-tighter">솔모 22년의 탄탄한 기록</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-20">
               {/* Column 1: Newer History (2013 - Present) */}
               <div className="space-y-20">
                  <div className="space-y-8">
                     <h4 className="text-3xl font-black text-[#001F5B] flex items-center gap-4">
                        2019 - Present
                        <div className="h-0.5 flex-grow bg-blue-600/20"></div>
                     </h4>
                     <div className="space-y-8 pl-4 border-l-2 border-blue-600/10">
                        <div>
                           <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">파트너십 및 인증</p>
                           <ul className="space-y-2 text-sm font-bold text-slate-600">
                              <li>• HCL 파트너 계약 체결 (AppScan)</li>
                              <li>• <strong className="text-slate-900">포스코DX</strong> 협력사 선정</li>
                              <li>• Infoblox 파트너 등록</li>
                              <li>• 기업 신용평가 등급 <strong className="text-blue-600 font-black">BB+</strong> 상향</li>
                              <li>• Fortinet Expert 파트너 승격</li>
                              <li>• 버카다(Verkada) 파트너 등록</li>
                              <li>• 고숙련 일학습병행 학습기업 등록 및 서울지역 앰버서더 선정</li>
                           </ul>
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">자체 개발 및 구축 실적</p>
                           <ul className="space-y-3 text-sm font-bold text-slate-600">
                              <li>• 스크린 워터마크 솔루션 <strong className="text-slate-900">X-Securitas</strong> 개발, 출시 및 조달 등록</li>
                              <li>• <strong className="text-slate-900">포스코 그룹</strong>: 리눅스 서버용 백신 솔루션 구축, AI서버 렌탈 및 UTM 운영 인프라 구축</li>
                              <li>• <strong className="text-slate-900">포스코인터내셔널</strong>: ISMS 강화 보안 솔루션 및 포티넷 방화벽 구축</li>
                              <li>• <strong className="text-slate-900">포스코인터내셔널</strong>: Genian NAC 차단센서 구축</li>
                              <li>• <strong className="text-slate-900">포스코에너지</strong>: DB 접근제어(DBSAFER) 및 MDM 시스템 구축</li>
                              <li>• <strong className="text-slate-900">포스코인재창조원</strong>: 서버 백신 구축</li>
                              <li>• <strong className="text-slate-900">포스코대우</strong>: 시스템 로그 관리 및 서버 보안 구축</li>
                              <li>• <strong className="text-slate-900">포스코플랜텍-광양</strong>: 영상시스템 구축</li>
                              <li>• <strong className="text-blue-700">금유/은행</strong>: <strong className="text-slate-900">MG새마을금고중앙회</strong> 업무자동화시스템 및 FDS 업그레이드 구축</li>
                              <li>• <strong className="text-blue-700">금융</strong>: <strong className="text-slate-900">새마을금고중앙회</strong> DDoS(ONE-d 5000) 및 메시지 통합 관리시스템 구축</li>
                              <li>• <strong className="text-slate-900">국립암센터</strong> 빅데이터 플랫폼 구축, <strong className="text-slate-900">한국보건의료연구원</strong> ACRONIS OS 백업 구축</li>
                              <li>• <strong className="text-slate-900">건국대학교</strong> NAC 구축, <strong className="text-slate-900">울산항만공사</strong> 영상회의실 구축</li>
                              <li>• <strong className="text-slate-900">현대중공업</strong> ISS 방화벽 구축, <strong className="text-slate-900">셀트리온 헬스케어</strong> 로그관리 구축</li>
                              <li>• <strong className="text-slate-900">포스코건설</strong> 더샵 플랫폼 개발 취약점 진단 및 모의해킹</li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-3xl font-black text-slate-400 flex items-center gap-4">
                        2017 - 2018
                        <div className="h-0.5 flex-grow bg-slate-200"></div>
                     </h4>
                     <div className="space-y-8 pl-4 border-l-2 border-slate-100">
                        <ul className="space-y-3 text-sm font-bold text-slate-500">
                           <li>• Fortinet 최우수 파트너 수상 및 Citrix 파트너 등록</li>
                           <li>• 파키스탄 글로벌 기업 "D"사와 방산 관련 LOA 체결</li>
                           <li>• <strong className="text-slate-800">포스코대우</strong> NW APT 장비 및 E-DLP 솔루션 구축</li>
                           <li>• RIST 웹키퍼 및 DDOS 보안장비 구축</li>
                           <li>• 피엔알 ERP시스템 백업 SW(Acronis) 구축</li>
                           <li>• <strong className="text-slate-800">포스코</strong> 해외법인 보안클라우드 방화벽 및 로그연동장치 구축</li>
                           <li>• <strong className="text-slate-800">포스코에너지</strong> 정보유출 방지를 위한 네트워크 보안솔루션(NAC) 구축</li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* Column 2: Older History (2002 - 2016) */}
               <div className="space-y-20">
                  <div className="space-y-8">
                     <h4 className="text-3xl font-black text-slate-400 flex items-center gap-4">
                        2013 - 2016
                        <div className="h-0.5 flex-grow bg-slate-200"></div>
                     </h4>
                     <div className="space-y-8 pl-4 border-l-2 border-slate-100">
                        <ul className="space-y-3 text-sm font-bold text-slate-500">
                           <li>• <strong className="text-slate-800">HP, IBM e-Security, Acronis</strong> 파트너 등록</li>
                           <li>• PNP시큐어 영업 파트너 및 효성인포메이션시스템 파트너 등록</li>
                           <li>• <strong className="text-slate-800">벤처기업확인</strong> 등록 및 국방과학기술 수출 중개업 등록</li>
                        </ul>
                     </div>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-3xl font-black text-slate-400 flex items-center gap-4">
                        2002 - 2012
                        <div className="h-0.5 flex-grow bg-slate-200"></div>
                     </h4>
                     <div className="space-y-8 pl-4 border-l-2 border-slate-100">
                        <div>
                           <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">회사 설립 및 기반</p>
                           <ul className="space-y-2 text-sm font-bold text-slate-500">
                              <li>• 2002년 10월 09일: <strong className="text-slate-900">㈜에이투지정보기술</strong> 설립</li>
                              <li>• 2009년: <strong className="text-slate-900">(주)솔모정보기술</strong> 법인명 변경 출범</li>
                              <li>• 기업부설연구소 설립 및 정보통신공사업 등록</li>
                              <li>• <strong className="text-slate-900">한국전력공사</strong> 협력 업체 등록 (2004)</li>
                              <li>• Fortinet Gold 파트너 승격 및 PNP시큐어 기술 파트너 등록</li>
                           </ul>
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">기술 특허 확보</p>
                           <ul className="space-y-2 text-sm font-bold text-slate-500">
                              <li>• 2003년 무선랜 터보 다중 수신장치 특허 등록</li>
                              <li>• 2009년 다기능 인터폰 장치 특허 등록</li>
                              <li>• 수배전반 안전관리 및 도어락 특허 등록</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
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
                 <ContactInfo label="Main Line" value="02-402-8054" desc="평일 09:00 - 18:00" />
                 <ContactInfo label="E-mail" value="solmoit01@solmo.co.kr" desc="기술협력 및 상세 견적" />
                 <ContactInfo label="Address" value="서울특별시 광진구 아차산로 309" desc="구의역 1번 출구 도보 5분" />
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

function ServiceCard({ id, title, role, desc, bg, href }) {
  return (
    <div className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transition-all hover:-translate-y-4">
       <img src={bg} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
       <div className="absolute bottom-10 left-10 right-10">
          <span className="text-blue-500 font-black text-xl italic mb-2 block">{id}</span>
          <h4 className="text-xl font-black text-white mb-2">{title}</h4>
          <div className="text-[10px] font-black text-blue-400 opacity-80 uppercase tracking-widest mb-4">{role}</div>
          <p className="text-white/50 text-[11px] font-bold leading-relaxed mb-8">{desc}</p>
          <Link href={href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg group-hover:bg-blue-600 transition-colors pointer-events-auto">→</Link>
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
