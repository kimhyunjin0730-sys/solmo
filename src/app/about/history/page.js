'use client';
import { useState } from "react";

export default function HistoryPage() {
  const [filter, setFilter] = useState("All");

  const historyData = [
    // 2019 - Present
    { year: "2019 - Present", category: "Business", title: "HCL 파트너 계약 체결 (AppScan)" },
    { year: "2019 - Present", category: "Innovation", title: "스크린 워터마크(xSecuritas) 솔루션 자체 개발" },
    { year: "2019 - Present", category: "Project", title: "RIST DDOS Secui MFD 2100 인프라 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코 리눅스 서버용 백신(TrendMicro) 솔루션 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코대우 시스템 로그 관리 및 서버 보안 솔루션 구축" },
    { year: "2019 - Present", category: "Project", title: "새마을금고중앙회 DDos(ONE-d 5000) 통합 구축" },
    { year: "2019 - Present", category: "Project", title: "국립암센터 빅데이터 플랫폼 구축 지원" },
    { year: "2019 - Present", category: "Project", title: "새마을금고 메시지 통합 관리시스템 구축" },
    { year: "2019 - Present", category: "Project", title: "MG새마을금고 FDS 업그레이드 구축" },
    { year: "2019 - Present", category: "Project", title: "현대중공업 ISS 방화벽 솔루션 구축" },
    { year: "2019 - Present", category: "Project", title: "건국대학교 전체 캠퍼스 NAC 시스템 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코에너지 DB 접근제어 DBSAFER 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코인재창조원 Trendmicro OSCE 서버 백신 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코 AI서버 렌탈 서비스 및 보안장치(UTM) 운영 인프라 구축" },
    { year: "2019 - Present", category: "Project", title: "HomeCity사업 통합하자관리(CS)시스템 보안취약점 점검 및 모의해킹" },
    { year: "2019 - Present", category: "Project", title: "포스코건설 더샵 플랫폼 개발 취약점 진단 및 모의해킹" },
    { year: "2019 - Present", category: "Project", title: "포스코플랜텍-광양 영상시스템 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코인터내셔널 ISMS 강화 보안 솔루션 및 포티넷 방화벽 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코에너지 MDM 시스템 통합 구축" },
    { year: "2019 - Present", category: "Project", title: "MG새마을금고중앙회 업무자동화시스템 구축" },
    { year: "2019 - Present", category: "Project", title: "셀트리온 헬스케어 포티넷 로그관리 시스템 구축" },
    { year: "2019 - Present", category: "Project", title: "한국보건의료연구원 ACRONIS OS 백업 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코인터내셔널 Genian NAC 차단센서 지점 구축" },
    { year: "2019 - Present", category: "Project", title: "울산항만공사 영상회의실(대회의실/중회의실) 구축" },

    // 2017 - 2018
    { year: "2017 - 2018", category: "Business", title: "파키스탄 글로벌 기업 'D'사와 방산 관련 LOA 체결" },
    { year: "2017 - 2018", category: "Business", title: "Fortinet 최우수 파트너(Expert) 수상" },
    { year: "2017 - 2018", category: "Project", title: "포스코대우 NW APT 대응 장비 구축" },
    { year: "2017 - 2018", category: "Project", title: "RIST 웹키퍼(WebKeeper) 보안장치 구축" },
    { year: "2017 - 2018", category: "Project", title: "피엔알 ERP시스템 백업 SW(Acronis) 구축" },
    { year: "2017 - 2018", category: "Project", title: "포스코대우 E-DLP 솔루션(매체제어 기능 포함) 구축" },
    { year: "2017 - 2018", category: "Project", title: "포스코 해외법인 보안클라우드 방화벽 및 로그 연동 시스템 구축" },
    { year: "2017 - 2018", category: "Project", title: "RIST DDOS Secui MFD 2100 고도화 구축" },
    { year: "2017 - 2018", category: "Project", title: "포스코에너지 내부 정보 유출 방지(NAC) 솔루션 구축" },

    // 2015 - 2016
    { year: "2015 - 2016", category: "Business", title: "HP 공식 파트너 계약 체결" },
    { year: "2015 - 2016", category: "Business", title: "국방과학기술 수출 중개업 공식 등록" },

    // 2013 - 2014
    { year: "2013 - 2014", category: "Business", title: "IBM e-Security 공식 파트너 계약 체결" },
    { year: "2013 - 2014", category: "Business", title: "Acronis(아크로니스) 백업 솔루션 파트너 계약" },
    { year: "2013 - 2014", category: "Business", title: "PNP시큐어 영업 파트너 계약 체결" },
    { year: "2013 - 2014", category: "Innovation", title: "국가 벤처기업확인 등록" },

    // 2002 - 2012
    { year: "2002 - 2012", category: "Innovation", title: "기업부설 연구소 설립 자격 획득" },
    { year: "2002 - 2012", category: "Innovation", title: "정보통신공사업 면허 등록" },
    { year: "2002 - 2012", category: "Innovation", title: "수배전반 안전관리 및 도어락 기술 특허 등록" },
    { year: "2002 - 2012", category: "Business", title: "PNP시큐어 기술 전담 파트너 계약" },
    { year: "2002 - 2012", category: "Business", title: "Fortinet Gold 파트너 자격 승격" },
    { year: "2002 - 2012", category: "Business", title: "(주)솔모정보기술 법인명 변경 출범" },
    { year: "2002 - 2012", category: "Innovation", title: "다기능 인터폰 관련 기술 특허 등록" },
    { year: "2002 - 2012", category: "Business", title: "Fortinet(포티넷) 공식 파트너 계약 체결" },
    { year: "2002 - 2012", category: "Business", title: "한국전력공사(KEPCO) 공식 협력 업체 등록" },
    { year: "2002 - 2012", category: "Innovation", title: "2003 무선랜 관련 터보 통신 특허 등록" },
  ];

  const categories = ["All", "Project", "Business", "Innovation"];
  const filteredData = filter === "All" ? historyData : historyData.filter(item => item.category === filter);

  return (
    <div className="max-w-[1400px] mx-auto pb-40">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
         <div className="max-w-xl">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Timeline</span>
            <h3 className="text-6xl font-black text-slate-900 tracking-tighter leading-tight">
               솔모가 걸어온 <br />
               <span className="text-blue-600">22년의 보안 로드맵.</span>
            </h3>
         </div>
         
         <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  filter === cat 
                    ? "bg-[#001F5B] text-white border-transparent shadow-2xl shadow-blue-900/30 -translate-y-1" 
                    : "bg-white text-slate-400 border-slate-100 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                {cat === "Project" ? "Major Projects" : cat === "Business" ? "Partnerships" : cat === "Innovation" ? "Intelligence" : "Every Step"}
              </button>
            ))}
         </div>
      </div>
      
      <div className="relative pt-20">
         {/* Vertical center line */}
         <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-blue-600 via-slate-200 to-transparent"></div>
         
         <div className="space-y-12">
            {filteredData.map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 animate-reveal ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                 <div className="lg:w-1/2 px-10">
                    <div className={`p-8 rounded-[2.5rem] bg-white border border-slate-50 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500 ${idx % 2 !== 0 ? "lg:text-left" : "lg:text-right"}`}>
                       <h4 className="text-2xl font-black text-blue-600 mb-2 italic tracking-tighter">{item.year}</h4>
                       <p className="text-slate-900 font-bold text-[17px] leading-snug">{item.title}</p>
                       <span className={`inline-block mt-4 px-4 py-1.5 text-[9px] font-black rounded-lg uppercase tracking-widest ${
                          item.category === "Project" ? "bg-blue-50 text-blue-600" : 
                          item.category === "Business" ? "bg-slate-900 text-white" : 
                          "bg-emerald-50 text-emerald-600"
                       }`}>
                          {item.category}
                       </span>
                    </div>
                 </div>
                 
                 {/* Timeline Node */}
                 <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center shadow-lg">
                    <div className={`w-3 h-3 rounded-full ${
                          item.category === "Project" ? "bg-blue-600" : 
                          item.category === "Business" ? "bg-slate-900" : 
                          "bg-emerald-500"
                    }`}></div>
                 </div>
                 
                 <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
         </div>
      </div>

      <style jsx global>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
