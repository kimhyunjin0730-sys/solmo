'use client';
import { useState } from "react";

export default function HistoryPage() {
  const [filter, setFilter] = useState("All");

  const historyData = [
    { year: "2019 - Present", category: "Business", title: "HCL 파트너 계약 체결 (AppScan)" },
    { year: "2019 - Present", category: "Innovation", title: "스크린 워터마크(xSecuritas) 솔루션 자체 개발" },
    { year: "2019 - Present", category: "Project", title: "MG새마을금고 FDS 업그레이드 및 메시지 통합 관리 구축" },
    { year: "2019 - Present", category: "Project", title: "포스코인터내셔널 ISMS 강화 및 NW보안 인프라 구축" },
    { year: "2019 - Present", category: "Project", title: "국립암센터 빅데이터 플랫폼 구축" },
    { year: "2019 - Present", category: "Project", title: "울산항만공사 영상회의 시스템 구축" },
    { year: "2019 - Present", category: "Project", title: "건국대학교 NAC 구축" },
    { year: "2017 - 2018", category: "Business", title: "Fortinet 최우수 파트너(Expert) 선정" },
    { year: "2017 - 2018", category: "Business", title: "파키스탄 글로벌 기업 'D'사 방산 LOA 체결" },
    { year: "2017 - 2018", category: "Project", title: "포스코대우 E-DLP 및 NW APT 장비 구축" },
    { year: "2017 - 2018", category: "Project", title: "RIST 웹키퍼 및 DDOS 보안장비 구축" },
    { year: "2015 - 2016", category: "Business", title: "HP 파트너 계약 체결" },
    { year: "2015 - 2016", category: "Business", title: "국방과학기술 수출 중개업 등록" },
    { year: "2013 - 2014", category: "Business", title: "IBM e-Security 파트너 및 아크로니스 파트너 계약" },
    { year: "2013 - 2014", category: "Business", title: "PNP시큐어 영업 파트너 계약 체결" },
    { year: "2013 - 2014", category: "Innovation", title: "벤처기업확인 등록" },
    { year: "2002 - 2012", category: "Innovation", title: "기업부설 연구소 설립 및 정보통신공사업 등록" },
    { year: "2002 - 2012", category: "Innovation", title: "다기능 인터폰 및 무선랜 관련 특허 다수 등록" },
    { year: "2002 - 2012", category: "Business", title: "(주)솔모정보기술 법인명 변경 (2009)" },
    { year: "2002 - 2012", category: "Business", title: "에이투지정보기술 설립 (2002)" },
  ];

  const categories = ["All", "Project", "Business", "Innovation"];
  const filteredData = filter === "All" ? historyData : historyData.filter(item => item.category === filter);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
         <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Our Journey</span>
         <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-12">솔모정보기술 22년 역사</h3>
         
         <div className="flex justify-center gap-3 flex-wrap">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-[#001F5B] text-white shadow-xl shadow-blue-900/20" 
                    : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                }`}
              >
                {cat === "Project" ? "주요 구축 사례" : cat === "Business" ? "비즈니스 성장" : cat === "Innovation" ? "연구 및 인증" : "전체보기"}
              </button>
            ))}
         </div>
      </div>
      
      <div className="relative pt-10">
         <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200"></div>
         
         <div className="space-y-12">
            {filteredData.map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                 <div className="lg:w-1/2 px-10 text-center lg:text-left">
                    <div className={`${idx % 2 !== 0 ? "lg:text-left" : "lg:text-right"}`}>
                       <h4 className="text-2xl font-black text-blue-600 mb-2 italic">{item.year}</h4>
                       <p className="text-slate-900 font-bold text-lg leading-tight">{item.title}</p>
                       <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-[10px] font-black text-slate-400 rounded uppercase tracking-widest">{item.category}</span>
                    </div>
                 </div>
                 <div className="relative z-10 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
                 <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
