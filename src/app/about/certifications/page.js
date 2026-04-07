'use client';

const certs = [
  { id: "gs", name: "GS인증 (1등급)", desc: "Software Quality Certificate", icon: "GS" },
  { id: "venture", name: "벤처기업확인", desc: "Venture Business Certification", icon: "V" },
  { id: "comm", name: "정보통신공사업 면허", desc: "IT Communication Business License", icon: "C" },
  { id: "patent", name: "특허 및 지적재산권", desc: "Multiple Patents & IP Rights", icon: "P" },
  { id: "credit", name: "신용등급 BB+", desc: "2025.04 기준 (한국평가데이타)", icon: "R" }
];

export default function CertificationsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-24">
      <header className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[10px] font-black text-blue-700 mb-6 tracking-widest uppercase">
          Certifications & Patents
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#1d1d1d] tracking-tight leading-tight">
          검증된 기술력과 <br />
          <span className="text-[#004a99]">공신력 있는 인증</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert) => (
          <div key={cert.id} className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_15px_30px_-10px_rgba(15,23,42,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] hover:border-blue-200 transition-all duration-500 overflow-hidden">
            {/* Visual Header */}
            <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500 bg-gradient-to-br from-blue-700 to-indigo-800 text-white font-black text-2xl shadow-xl shadow-blue-900/10`}>
              {cert.icon}
            </div>
            
            <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tighter group-hover:text-blue-700 transition-colors">{cert.name}</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 opacity-60">{cert.desc}</p>
            
            <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
               (주)솔모정보기술은 공신력 있는 기관의 인증을 통해 정보보안 분야의 전문적 기술 역량을 지속적으로 검증받고 있습니다.
            </p>

            {/* Ambient Background Logo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 opacity-0 group-hover:opacity-100 blur-[40px] rounded-full pointer-events-none transition-opacity duration-700"></div>
          </div>
        ))}
      </div>

      {/* Philosophy Callout */}
      <div className="pt-24 text-center">
         <p className="text-slate-400 font-bold text-sm tracking-tight leading-relaxed max-w-2xl mx-auto">
            솔모정보기술은 단순한 자격 획득을 넘어, 모든 프로젝트에서 최상의 품질과 신뢰를 보장하기 위해 엄격한 표준을 준수합니다.
         </p>
      </div>
    </div>
  );
}
