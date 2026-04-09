'use client';
import Image from "next/image";

export default function SecurePrintingPage() {
  return (
    <div className="space-y-12 lg:space-y-16 px-8 pt-10 pb-20">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-3 block">Security Print Service</span>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
          종이 문서를 통한 정보 유출, <br />
          <span className="text-blue-600">스마트 보안 출력</span>으로 원천 차단합니다.
        </h2>
        <p className="text-slate-500 font-bold text-sm lg:text-base leading-relaxed">
          자체 솔루션인 **X-Securitas** 기반의 스크린 및 출력물 워터마크 기술을 적용하여 
          어떤 복합기 환경에서도 완벽한 문서 보안과 이력 관리를 실현합니다.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-2xl transition-all duration-500 group">
            <div className="text-4xl mb-8">💧</div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">워터마크 자동 삽입</h4>
            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6">인쇄 시 사용자 정보(ID, IP, 날짜 등)를 투명/반투명하게 삽입하여 유출 경로를 추적합니다.</p>
            <div className="w-10 h-2 bg-blue-500 rounded-full group-hover:w-full transition-all"></div>
         </div>
         <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-2xl transition-all duration-500 group">
            <div className="text-4xl mb-8">🚫</div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">출력 승인 및 통제</h4>
            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6">민감 정보(개인정보 등) 포함 시 출력을 즉시 차단하거나 관리자 승인 후 인쇄가 가능하게 합니다.</p>
            <div className="w-10 h-2 bg-blue-500 rounded-full group-hover:w-full transition-all"></div>
         </div>
         <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-2xl transition-all duration-500 group">
            <div className="text-4xl mb-8">📜</div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-6 tracking-tight">상세 이력 관리</h4>
            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6">누가, 언제, 어떤 내용을 출력했는지에 대한 상세 로그 기록과 원본 이미지 저장을 통한 철저한 감사를 지원합니다.</p>
            <div className="w-10 h-2 bg-blue-500 rounded-full group-hover:w-full transition-all"></div>
         </div>
      </section>

      <section className="bg-slate-900 text-white rounded-[4rem] p-16 md:p-24 relative overflow-hidden">
         <div className="max-w-2xl relative z-10">
            <h3 className="text-3xl font-black mb-8 italic text-blue-500 uppercase tracking-tighter">Market Leader Edge</h3>
            <p className="text-xl font-bold leading-relaxed mb-12">
               "기업 환경의 복합기 구성을 그대로 유지하면서 독보적인 보안 레이어를 추가할 수 있는 것이 솔모만의 차별화된 기술력입니다."
            </p>
            <ul className="space-y-6 text-sm font-bold opacity-60">
               <li className="flex items-center gap-4">✔ 하이브리드 환경(사내외) 완벽 지원</li>
               <li className="flex items-center gap-4">✔ 사용자 보안 의식 제고 및 심리적 억제 효과</li>
               <li className="flex items-center gap-4">✔ 법적 준거성(DLP) 대응 체계 완성</li>
            </ul>
         </div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 pointer-events-none"></div>
      </section>

      <section className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl bg-white border border-slate-100 p-12">
         <div className="relative w-full h-full">
            <Image 
              src="/images/services/보안프린트.jpg" 
              alt="보안프린트 구축" 
              fill 
              className="object-contain"
            />
         </div>
         <div className="absolute inset-x-0 bottom-0 p-16 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
            <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Smart Security Print Solutions</h3>
            <p className="text-white/70 font-bold text-lg">보이지 않는 기술로 가장 확실한 자산 유출 방지를 실현합니다.</p>
         </div>
      </section>
    </div>
  );
}
