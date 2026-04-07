'use client';
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for nodemailer would go here
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 mb-24 animate-reveal">
         <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-4 block text-center lg:text-left">Get in Touch</span>
         <h1 className="text-5xl md:text-7xl font-black text-[#001F5B] leading-tight mb-8 tracking-tighter text-center lg:text-left">
           보안 파트너를 <br />
           <span className="text-blue-500">지금 만나보세요.</span>
         </h1>
         <p className="text-slate-400 text-xl font-medium max-w-2xl leading-relaxed text-center lg:text-left">
            보안 솔루션 도입, 파트너십 제안 등 궁금하신 내용을 남겨주시면 <br />
            (주)솔모정보기술의 전문가가 24시간 이내에 신속히 답변해 드립니다. [cite: 19]
         </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-16 items-start">
         {/* Sidebar Info */}
         <div className="lg:col-span-4 space-y-12">
            <ContactInfoBlock 
              icon="🏢" 
              title="대표 연락처" 
              value="02-402-8054" 
              desc="평일 09:00 - 18:00 (점심시간 12:00 - 13:00) [cite: 8]" 
            />
            <ContactInfoBlock 
              icon="✉️" 
              title="이메일 문의" 
              value="solmoit01@solmo.co.kr" 
              desc="솔루션 도입 및 기술 협력 관련 상세 문의 [cite: 10]" 
            />
            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
               <h4 className="text-lg font-black text-[#001F5B] mb-4">도입 가이드 신청</h4>
               <p className="text-sm font-bold text-slate-500 leading-relaxed mb-6">X-Securitas 스크린 워터마크 솔루션 및 보안 컨설팅 상세 브로셔를 이메일로 보내드립니다.</p>
               <button className="w-full py-4 bg-[#001F5B] text-white font-black rounded-2xl hover:bg-blue-900 transition-all text-xs tracking-widest uppercase shadow-xl shadow-blue-900/20">Download PDF</button>
            </div>
         </div>

         {/* Form Area */}
         <div className="lg:col-span-8 bg-slate-50 rounded-[4rem] p-10 md:p-20 shadow-inner border border-slate-100">
            {submitted ? (
              <div className="text-center py-20 animate-reveal">
                 <div className="text-6xl mb-8">✅</div>
                 <h2 className="text-3xl font-black text-slate-900 mb-4">문의가 성공적으로 접수되었습니다.</h2>
                 <p className="text-slate-500 font-bold mb-10 text-lg">기재해주신 연락처로 담당자가 신속히 연락드리겠습니다.</p>
                 <button onClick={() => setSubmitted(false)} className="px-10 py-4 border-2 border-slate-200 rounded-2xl font-black text-slate-400 hover:bg-white hover:text-slate-900 transition-all">새 문의 작성하기</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 animate-reveal">
                 <div className="grid md:grid-cols-2 gap-8">
                    <FormInput label="성함 / 직함 *" placeholder="예) 홍길동 부장" required />
                    <FormInput label="회사명 / 기관명 *" placeholder="예) (주)솔모정보기술" required />
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                    <FormInput label="연락처 *" placeholder="예) 010-1234-5678" required />
                    <FormInput label="이메일 *" placeholder="예) example@solmo.co.kr" type="email" required />
                 </div>
                 <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">문의 유형 *</label>
                    <select className="w-full bg-white border border-slate-200 rounded-3xl p-6 outline-none focus:border-blue-500 transition-all font-black text-slate-900 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTkgOWwtNyA3LTctNyIvPjwvc3ZnPg==')] bg-[length:24px] bg-[right_24px_center] bg-no-repeat">
                       <option>솔루션 도입 문의</option>
                       <option>유지보수 / 기술 지원</option>
                       <option>보안 컨설팅 의뢰</option>
                       <option>기타 제휴 문의</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">상세 문의 내용 *</label>
                    <textarea 
                      placeholder="도입 수량, 현재 인프라 환경 등 상세 내용을 입력해 주시면 더 정확한 상담이 가능합니다." 
                      rows={6} 
                      className="w-full bg-white border border-slate-200 rounded-[2.5rem] p-8 outline-none focus:border-blue-500 transition-all font-medium text-slate-900 leading-relaxed"
                      required
                    ></textarea>
                 </div>
                 
                 <div className="flex items-center gap-4 ml-2">
                    <input type="checkbox" id="privacy" className="w-5 h-5 accent-blue-600 cursor-pointer" required />
                    <label htmlFor="privacy" className="text-xs font-bold text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">개인정보 수집 및 이용에 동의합니다. (필수)</label>
                 </div>

                 <button type="submit" className="w-full py-6 bg-blue-600 text-white font-black rounded-full hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 text-lg uppercase tracking-widest">
                    Submit Inquiry
                 </button>
              </form>
            )}
         </div>
      </div>

      <style jsx global>{`
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-reveal { animation: reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}

function ContactInfoBlock({ icon, title, value, desc }) {
  return (
    <div className="flex gap-6 group">
       <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex-shrink-0 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 group-hover:bg-blue-600 transition-all group-hover:text-white">
          {icon}
       </div>
       <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">{title}</span>
          <h4 className="text-xl font-black text-[#001F5B] mb-2">{value}</h4>
          <p className="text-xs font-bold text-slate-400 leading-relaxed">{desc}</p>
       </div>
    </div>
  );
}

function FormInput({ label, placeholder, type = "text", required = false }) {
  return (
    <div>
       <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">{label}</label>
       <input 
         type={type} 
         placeholder={placeholder} 
         className="w-full bg-white border border-slate-200 rounded-full p-5 px-8 outline-none focus:border-blue-500 transition-all font-bold text-slate-900 placeholder:text-slate-200" 
         required={required}
       />
    </div>
  );
}
