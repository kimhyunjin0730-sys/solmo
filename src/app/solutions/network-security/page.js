'use client';
import Image from "next/image";

export default function NetworkSecurityPage() {
  return (
    <div className="space-y-32 pb-40">
      {/* Header */}
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Cyber Defense</span>
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
          경계를 넘어 자산까지 <br />
          <span className="text-blue-600">완벽한 네트워크 보호.</span>
        </h2>
        <p className="text-slate-500 font-bold text-lg leading-relaxed">
          솔모정모기술은 차세대 방화벽부터 NAC, 유해사이트 차단까지 
          다층 방어 체계를 구축하여 외부 위협을 원천 봉쇄합니다.
        </p>
      </header>

      {/* 1. Fortinet UTM */}
      <section className="scroll-mt-32" id="fortinet">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <div className="flex items-center gap-4 mb-8">
                 <Image src="/images/product/fortinet-logo.png" alt="Fortinet" width={140} height={40} className="object-contain" />
                 <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded">Gold Partner</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Fortinet 통합위협관리 (UTM)</h3>
              <p className="text-slate-500 font-bold leading-relaxed mb-10">
                 Firewall, VPN, Anti-Virus, IPS 등 필수 보안 기능을 단일 장비에서 통합 수행하는 차세대 보안 시스템입니다. 
                 ASIC 기반 가속화 하드웨어와 전용 Secure OS를 통해 성능 저하 없는 강력한 보안을 보장합니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <FeatureItem title="5,000+ 공격 차단" desc="실시간 업데이트되는 방대한 공격 패턴 DB" />
                 <FeatureItem title="ASIC 가속" desc="하드웨어 수준의 고속 패킷 처리 전용 칩셋" />
                 <FeatureItem title="멀티 VPN" desc="IPSec, SSL, L2TP 등 다양한 원격 접속 지원" />
                 <FeatureItem title="사전 방역" desc="악성 코드가 유입되기 전 게이트웨이 단계 차단" />
              </div>
           </div>
           <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
              <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-8">Detailed Specs</h4>
              <ul className="space-y-6">
                 <li className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-sm font-black text-slate-400">네트워크 편의</span>
                    <span className="text-sm font-bold text-slate-900">DHCP relay, WINS 지원</span>
                 </li>
                 <li className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-sm font-black text-slate-400">가상화Domain</span>
                    <span className="text-sm font-bold text-slate-900">Virtual Domain (NAT/Transparent)</span>
                 </li>
                 <li className="flex justify-between border-b border-slate-200 pb-4">
                    <span className="text-sm font-black text-slate-400">보안 인증</span>
                    <span className="text-sm font-bold text-slate-900">SHA-1, MD5 및 AES 암호화</span>
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* 2. PIOLINK WAF */}
      <section className="scroll-mt-32" id="piolink">
        <div className="p-16 rounded-[4rem] bg-[#001F5B] text-white relative overflow-hidden group">
           <div className="relative z-10 flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2">
                 <Image src="/images/product/piolink-logo.png" alt="PIOLINK" width={120} height={30} className="brightness-0 invert mb-8" />
                 <h3 className="text-3xl font-black mb-6 tracking-tight">WEBFRONT-K (WAF)</h3>
                 <p className="text-white/60 font-bold leading-relaxed mb-12">
                    웹 어플리케이션 전용 보안 솔루션으로, SQL Injection 등 웹 해킹으로부터 서버를 보호하고 개인정보 유출을 원천 방지합니다.
                 </p>
                 <div className="space-y-6">
                    <li className="flex items-center gap-4 text-sm font-bold"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 웹 사이트 임의 변조 사전 차단</li>
                    <li className="flex items-center gap-4 text-sm font-bold"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> SSL 오프로딩으로 웹 서버 부하 경감</li>
                    <li className="flex items-center gap-4 text-sm font-bold"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> 고가용성(HA) 이중화 구성 지원</li>
                 </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 items-center">
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                    <div className="text-2xl font-black mb-2">Service Protection</div>
                    <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">웹 서버 완벽 보호</p>
                 </div>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                    <div className="text-2xl font-black mb-2">DLP Compliance</div>
                    <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">개인정보 유출 방지</p>
                 </div>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </section>

      {/* 3 & 4. Hyboost & Webkeeper */}
      <div className="grid lg:grid-cols-2 gap-12">
         <section className="p-12 border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all">
            <h4 className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4">Network DLP</h4>
            <h3 className="text-2xl font-black text-slate-900 mb-6">Hyboost 모니터링</h3>
            <p className="text-slate-500 text-[15px] font-bold leading-relaxed mb-10">이메일, 메신저, SNS를 통한 비즈니스 정보 유출 상시 감사.</p>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
               <li>• 첨부파일 내용까지 상세 로깅</li>
               <li>• 개인정보 전송 시 즉시 통보 기능</li>
               <li>• 하드웨어 일체형(Appliance) 제공</li>
            </ul>
         </section>
         <section className="p-12 border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all">
            <h4 className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4">Filtering Solution</h4>
            <h3 className="text-2xl font-black text-slate-900 mb-6">소만사 Webkeeper SG</h3>
            <p className="text-slate-500 text-[15px] font-bold leading-relaxed mb-10">비업무 사이트 및 파일공유 차단으로 업무 집중도 향상.</p>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
               <li>• 연간 7.5억 원 비용 절감 효과 (1,000명 기준)</li>
               <li>• HTTPS(SSL) 암호화 트래픽 제어</li>
               <li>• 국내 1위 방대한 유해 DB 상시 업데이트</li>
            </ul>
         </section>
      </div>

      {/* 5. Genian NAC */}
      <section className="bg-slate-50 p-20 rounded-[4rem] relative overflow-hidden">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:order-2">
               <Image src="/images/product/genian.png" alt="Genian" width={180} height={50} className="mb-8" />
               <h3 className="text-3xl font-black text-slate-900 mb-6">네트워크 접근 제어 (NAC)</h3>
               <p className="text-slate-500 font-bold leading-relaxed mb-12">
                  자산과 사용자를 식별하여 권한을 차등 부여합니다. 보안 정책 미준수 단말은 접속을 즉시 차단하여 청정한 네트워크 환경을 유지합니다.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                     <span className="text-lg font-black block mb-2">네트워크 실명화</span>
                     <p className="text-xs font-bold text-slate-400">단말 인증을 통한 사용자 식별</p>
                  </div>
                  <div>
                     <span className="text-lg font-black block mb-2">외부인 통제</span>
                     <p className="text-xs font-bold text-slate-400">방문객 접속 범위 자동 제한</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-full space-y-4">
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <span className="text-blue-600 font-black text-[10px] uppercase">Policy Server</span>
                  <p className="text-sm font-bold text-slate-900">유무선 통합 관리 및 정책 배포</p>
               </div>
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 translate-x-12">
                  <span className="text-blue-600 font-black text-[10px] uppercase">Network Sensor</span>
                  <p className="text-sm font-bold text-slate-900">실시간 패킷 수집 및 차단 수행</p>
               </div>
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 translate-x-24">
                  <span className="text-blue-600 font-black text-[10px] uppercase">Optional Agent</span>
                  <p className="text-sm font-bold text-slate-900">PC 자산 및 장치 관리 확장</p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. HIWARE 6 */}
      <section>
         <div className="text-center mb-20">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Identity Access Management</span>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">NETAND HIWARE 6</h3>
            <p className="text-slate-500 font-bold max-w-2xl mx-auto italic">운영 시스템의 계정 생명주기 관리와 접근 통제의 표준.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center uppercase">
            <div className="md:col-span-1 flex flex-col items-center justify-center mb-8 lg:mb-0">
               <Image src="/images/product/netand.png" alt="Netand" width={200} height={60} className="mb-4" />
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
               <IAMCard title="중앙 집중 통제" desc="IP, MAC, 시간별 2-Factor 인증" />
               <IAMCard title="명령어 제어" desc="그룹별 실시간 명령어 금찰어 적용" />
            </div>
            <div className="md:col-span-3">
               <IAMCard title="스케줄 관리" desc="작업 시간 날짜/요일별 세밀 설정" />
            </div>
         </div>
      </section>
    </div>
  );
}

function FeatureItem({ title, desc }) {
  return (
    <div className="p-6 bg-blue-50/50 rounded-2xl">
       <div className="text-blue-600 font-black mb-1">{title}</div>
       <div className="text-[11px] font-bold text-slate-400">{desc}</div>
    </div>
  );
}

function IAMCard({ title, desc }) {
   return (
      <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-600 transition-colors">
         <div className="text-lg font-black text-slate-900 mb-4">{title}</div>
         <p className="text-[11px] font-black text-slate-400 leading-relaxed italic">{desc}</p>
      </div>
   );
}
