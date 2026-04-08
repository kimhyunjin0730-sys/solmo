export default function HistoryPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-24">
         <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Our Journey</span>
         <h3 className="text-5xl font-black text-slate-900 tracking-tighter">솔모정보기술 22년 역사</h3>
      </div>
      
      <div className="relative">
         {/* Vertical line for desktop */}
         <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-200"></div>
         
         <div className="space-y-16 lg:space-y-0">
            {/* Recent Activity */}
            <div className="lg:grid lg:grid-cols-2 gap-24 items-center relative">
               <div className="lg:text-right">
                  <h4 className="text-4xl font-black text-blue-600 mb-2 italic">2019 - Present</h4>
                  <p className="text-slate-400 font-bold mb-8 uppercase tracking-widest text-xs">Innovation & Growth</p>
               </div>
               <div className="relative pl-8 lg:pl-0 border-l-2 lg:border-l-0 border-blue-500">
                  <ul className="space-y-4 text-slate-600 font-medium">
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span><span className="text-blue-600 font-bold">HCL</span> 파트너 계약 및 포스코DX 협력사 선정</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>자체 솔루션 <span className="text-blue-600 font-bold">X-Securitas</span> 개발 및 조달 등록</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>금융권(새마을금고) 및 공공(국립암센터) 대형 구축</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>울산항만공사 영상회의 시스템 및 ISMS 강화</span>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="lg:h-32 hidden lg:block"></div>

            {/* Growth Period */}
            <div className="lg:grid lg:grid-cols-2 gap-24 items-center relative">
               <div className="relative order-2 lg:order-1 text-right lg:pr-8 pr-0 border-r-0 lg:border-r-2 lg:border-blue-500">
                  <ul className="space-y-4 text-slate-600 font-medium">
                     <li className="flex items-start justify-end gap-3">
                        <span>벤처기업확인 및 연구소 중심 성장</span>
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                     </li>
                     <li className="flex items-start justify-end gap-3">
                        <span>IBM, Acronis, HP, PNP시큐어 파트너십</span>
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                     </li>
                     <li className="flex items-start justify-end gap-3">
                        <span><span className="text-blue-600 font-bold">Fortinet</span> 최우수 파트너 및 Expert 승격</span>
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                     </li>
                  </ul>
               </div>
               <div className="order-1 lg:order-2">
                  <h4 className="text-4xl font-black text-blue-600 mb-2 italic">2013 - 2018</h4>
                  <p className="text-slate-400 font-bold mb-8 uppercase tracking-widest text-xs">Technical Expansion</p>
               </div>
            </div>

            <div className="lg:h-32 hidden lg:block"></div>

            {/* Foundation */}
            <div className="lg:grid lg:grid-cols-2 gap-24 items-center relative">
               <div className="lg:text-right">
                  <h4 className="text-4xl font-black text-blue-600 mb-2 italic">2002 - 2012</h4>
                  <p className="text-slate-400 font-bold mb-8 uppercase tracking-widest text-xs">The Beginning</p>
               </div>
               <div className="relative pl-8 lg:pl-0 border-l-2 lg:border-l-0 border-blue-500">
                  <ul className="space-y-4 text-slate-600 font-medium">
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>2009년 **(주)솔모정보기술** 법인명 변경</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>2002년 ㈜에이투지정보기술 설립</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>정보통신공사업 등록 및 다수 특허 보유</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        <span>기업부설연구소 설립으로 독자 기술 확보</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
