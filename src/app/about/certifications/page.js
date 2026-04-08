export default function CertificationsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
         <div>
           <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Competency</span>
           <h3 className="text-5xl font-black text-slate-900 tracking-tighter">인증 및 특허</h3>
         </div>
         <p className="text-slate-400 font-bold text-lg max-w-md">최고의 기술력을 증명하는 대내외 인증 현황입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <CertCard title="기업 인증" items={["벤처기업확인서", "정보통신공사업 등록증", "소프트웨어사업자 신고", "중소기업확인서", "직접생산확인증명서"]} icon="🏢" />
         <CertCard title="기술 및 품질" items={["GS(Good Software) 인증 1등급 보유", "기업부설연구소 인정서", "신용평가등급 BB+ (한국평가데이타)", "기술역량 우수기업"]} icon="🏆" />
         <CertCard title="보유 특허" items={["무선랜 관련 특허", "다기능 인터폰 특허", "수배전반 안전관리 특허", "도어락 보안 특허", "정보 유출 방지 시스템 특허"]} icon="💡" />
      </div>

      <div className="mt-32 p-12 rounded-[3rem] bg-slate-50 border border-slate-100 text-center">
         <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-3xl mx-auto">
            (주)솔모정보기술은 단순한 자격 획득을 넘어, <br />
            실제 프로젝트 현장에서 검증된 기술력으로 최고의 보안 품질을 보장합니다.
         </p>
      </div>
    </div>
  );
}

function CertCard({ title, items, icon }) {
  return (
    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-blue-500 hover:shadow-2xl transition-all group">
       <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">{icon}</div>
       <h4 className="text-2xl font-black text-[#001F5B] mb-8 tracking-tight">{title}</h4>
       <ul className="space-y-4">
          {items.map((item, idx) => (
             <li key={idx} className="flex items-center gap-4 text-[15px] font-bold text-slate-500">
                <div className="w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors"></div>
                {item}
             </li>
          ))}
       </ul>
    </div>
  );
}
