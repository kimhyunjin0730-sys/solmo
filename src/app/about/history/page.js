'use client';
import { useState } from "react";
import Image from "next/image";

export default function HistoryPage() {
  const [filter, setFilter] = useState("All");

  const historyData = [
    // 2019 - Present
    { year: "2019 - Present", category: "Partner", title: "HCL 파트너 계약 체결 (AppScan)" },
    { year: "2019 - Present", category: "Partner", title: "포스코DX 협력사 선정 및 Infoblox 파트너 등록" },
    { year: "2019 - Present", category: "Partner", title: "Fortinet Expert 파트너 승격 및 Verkada 파트너 등록" },
    { year: "2019 - Present", category: "Innovation", title: "스크린 워터마크(xSecuritas) 솔루션 자체 개발 및 조달 등록" },
    { year: "2019 - Present", category: "Project", title: "포스코 리눅스 서버용 백신(TrendMicro) 구축" },
    { year: "2019 - Present", category: "Project", title: "금융: MG새마을금고중앙회 업무자동화 및 DDoS 구축" },
    { year: "2019 - Present", category: "Project", title: "산업: 현대중공업 ISS 방화벽 및 셀트리온 로그관리 구축" },
    { year: "2019 - Present", category: "Project", title: "교육/의료: 건국대학교 NAC 및 국립암센터 빅데이터 플랫폼 구축" },
    { year: "2019 - Present", category: "Project", title: "공공: 울산항만공사 대/중회의실 영상회의 시스템 구축" },
    { year: "2019 - Present", category: "Partner", title: "기업 신용평가 등급 BB+ 상향 (한국평가데이타)" },
    
    // 2017 - 2018
    { year: "2017 - 2018", category: "Achievement", title: "Fortinet 최우수 파트너 수상" },
    { year: "2017 - 2018", category: "Partner", title: "파키스탄 글로벌 기업 'D'사와 방산 관련 LOA 체결" },
    { year: "2017 - 2018", category: "Project", title: "포스코대우 NW APT 대응 장비 구축" },
    { year: "2017 - 2018", category: "Project", title: "포스코 해외법인 보안클라우드 방화벽 및 로그 연동 구축" },
    { year: "2017 - 2018", category: "Project", title: "포스코에너지 네트워크 보안솔루션(NAC) 구축" },
    { year: "2017 - 2018", category: "Project", title: "RIST 웹키퍼 및 피엔알 ERP 백업(Acronis) 구축" },

    // 2013 - 2016
    { year: "2013 - 2016", category: "Partner", title: "HP / IBM e-Security 공식 파트너 등록" },
    { year: "2013 - 2016", category: "Partner", title: "아크로니스(Acronis) 백업 파트너 유치" },
    { year: "2013 - 2016", category: "Innovation", title: "국가 벤처기업확인 등록" },
    { year: "2013 - 2016", category: "Achievement", title: "국방과학기술 수출 중개업 등록" },

    // 2002 - 2012
    { year: "2002 - 2012", category: "Foundation", title: "㈜에이투지정보기술 설립 (2002.10.09)" },
    { year: "2002 - 2012", category: "Foundation", title: "(주)솔모정보기술 법인명 변경 출범 (2009)" },
    { year: "2002 - 2012", category: "Foundation", title: "기업부설연구소 설립 및 정보통신공사업 등록" },
    { year: "2002 - 2012", category: "Partner", title: "한국전력공사 협력업체 등록 및 Fortinet Gold 파트너 승격" },
    { year: "2002 - 2012", category: "Innovation", title: "무선랜 터보 통신 및 다기능 인터폰 특허 등록" },
    { year: "2002 - 2012", category: "Innovation", title: "수배전반 안전관리 및 지능형 도어락 특허 등록" },
  ];

  const categories = ["All", "Project", "Partner", "Innovation", "Foundation"];
  const filteredData = filter === "All" ? historyData : historyData.filter(item => item.category === filter);

  return (
    <div className="pb-40">
      {/* Visual Header */}
      <section className="relative h-[400px] mb-20 flex items-center justify-center overflow-hidden">
         <Image src="/office-bg.png" alt="Office Background" fill className="object-cover opacity-20" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
         <div className="relative z-10 text-center px-8">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Our Journey</span>
            <h3 className="text-6xl font-black text-slate-900 tracking-tighter leading-tight italic">연혁 및 실적</h3>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-8">
         <div className="flex gap-3 flex-wrap mb-16">
            {categories.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                   filter === cat 
                     ? "bg-[#001F5B] text-white shadow-xl" 
                     : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                 }`}
               >
                 {cat === "Project" ? "주요 실적" : cat === "Partner" ? "파트너십" : cat === "Innovation" ? "기술 혁신" : cat === "Foundation" ? "설립 기초" : "전체"}
               </button>
            ))}
         </div>

         <div className="space-y-32">
            {["2019 - Present", "2017 - 2018", "2013 - 2016", "2002 - 2012"].map((period) => {
               const periodItems = filteredData.filter(item => item.year === period);
               if (periodItems.length === 0) return null;
               
               return (
                  <div key={period} className="grid lg:grid-cols-12 gap-16">
                     <div className="lg:col-span-3">
                        <div className="sticky top-40 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                           <div className="text-sm font-black text-blue-600 mb-2 uppercase tracking-widest">Period</div>
                           <div className="text-3xl font-black text-[#001F5B] italic leading-none">{period}</div>
                           <div className="mt-8 w-12 h-1 bg-blue-600 rounded-full"></div>
                        </div>
                     </div>
                     <div className="lg:col-span-9 space-y-4">
                        {periodItems.map((item, idx) => (
                           <div key={idx} className="flex gap-8 group">
                              <div className="flex flex-col items-center">
                                 <div className="w-4 h-4 rounded-full border-4 border-blue-600 group-hover:bg-blue-600 transition-colors"></div>
                                 <div className="w-px h-full bg-slate-100 min-h-[40px]"></div>
                              </div>
                              <div className="pb-8">
                                 <div className="flex items-center gap-4 mb-2">
                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.category}</span>
                                    <div className="h-px flex-grow bg-slate-50"></div>
                                 </div>
                                 <p className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors leading-tight">{item.title}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
    </div>
  );
}
