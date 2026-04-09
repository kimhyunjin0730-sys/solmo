'use client';
import { useState } from "react";

const TEL = "02-402-8054";
const EMAIL = "solmoit01@solmo.co.kr";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    type: "솔루션 도입 문의",
    message: "",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: nodemailer / API 연동
  };

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  return (
    <div className="space-y-12 pb-20">
      {/* ───── Hero ───── */}
      <header className="max-w-4xl pt-2">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Get in Touch
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          보안 파트너를 <span className="text-blue-600">지금 만나보세요.</span>
        </h1>
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          보안 솔루션 도입, 유지보수, 컨설팅 등 궁금한 내용을 남겨주시면
          (주)솔모정보기술의 전문가가 영업일 기준 24시간 이내에 신속히 답변드립니다.
        </p>
      </header>

      {/* ───── Quick contact strip ───── */}
      <section className="grid md:grid-cols-3 gap-4">
        <QuickCard
          tag="Call"
          big={TEL}
          sub="평일 09:00 – 18:00"
          href={`tel:${TEL.replace(/-/g, "")}`}
        />
        <QuickCard
          tag="Email"
          big={EMAIL}
          sub="기술 협력 · 도입 상세 문의"
          href={`mailto:${EMAIL}`}
          small
        />
        <QuickCard
          tag="Visit"
          big="오시는 길"
          sub="서울 광진구 아차산로 309"
          href="/support/location"
        />
      </section>

      {/* ───── Form + Sidebar ───── */}
      <section className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3 block">
              Process
            </span>
            <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">
              문의 진행 절차
            </h3>
            <ol className="space-y-5">
              <ProcessStep num="01" title="문의 접수" desc="폼 제출 후 자동 확인 메일 발송" />
              <ProcessStep num="02" title="담당자 배정" desc="문의 유형에 맞는 전문가 매칭" />
              <ProcessStep num="03" title="상담 진행" desc="유선·메일·방문 미팅으로 요구사항 파악" />
              <ProcessStep num="04" title="제안서 발송" desc="맞춤 솔루션 제안 및 견적 안내" />
            </ol>
          </div>

          <div className="p-8 bg-slate-900 text-white rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full blur-[80px]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3 block">
              Direct Line
            </span>
            <h4 className="text-2xl font-black tracking-tight mb-2">긴급 기술 지원</h4>
            <p className="text-xs font-bold text-white/50 leading-relaxed mb-6">
              유지보수 계약 고객사는 24/7 핫라인으로 즉시 연결됩니다.
            </p>
            <a
              href={`tel:${TEL.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 text-blue-300 font-black text-sm"
            >
              📞 {TEL} →
            </a>
          </div>
        </aside>

        {/* Form */}
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[2.5rem] p-10 lg:p-14 shadow-sm">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-8">
                <span className="text-blue-600 text-3xl font-black">✓</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                문의가 정상 접수되었습니다.
              </h2>
              <p className="text-slate-500 font-bold mb-10">
                기재하신 연락처로 담당자가 신속히 연락드리겠습니다.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "", company: "", phone: "", email: "",
                    type: "솔루션 도입 문의", message: "", agree: false,
                  });
                }}
                className="px-8 py-4 rounded-full border border-slate-200 text-xs font-black uppercase tracking-wider text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                새 문의 작성
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-8">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3 block">
                  Inquiry Form
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  도입 / 컨설팅 문의
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="성함 / 직함" required>
                  <input
                    type="text"
                    placeholder="홍길동 부장"
                    value={form.name}
                    onChange={update("name")}
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="회사명 / 기관명" required>
                  <input
                    type="text"
                    placeholder="(주)솔모정보기술"
                    value={form.company}
                    onChange={update("company")}
                    required
                    className={inputCls}
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="연락처" required>
                  <input
                    type="tel"
                    placeholder="010-1234-5678"
                    value={form.phone}
                    onChange={update("phone")}
                    required
                    className={inputCls}
                  />
                </Field>
                <Field label="이메일" required>
                  <input
                    type="email"
                    placeholder="example@solmo.co.kr"
                    value={form.email}
                    onChange={update("email")}
                    required
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="문의 유형" required>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {[
                    "솔루션 도입 문의",
                    "유지보수 / 기술 지원",
                    "보안 컨설팅 의뢰",
                    "기타 제휴 문의",
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setForm((f) => ({ ...f, type: opt }))}
                      className={`px-4 py-3 rounded-2xl text-xs font-black tracking-tight transition-all border ${
                        form.type === opt
                          ? "bg-[#001F5B] text-white border-[#001F5B]"
                          : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="상세 문의 내용" required>
                <textarea
                  rows={6}
                  placeholder="도입 수량, 현재 인프라 환경, 도입 예정 시기 등 상세 내용을 입력해 주시면 더 정확한 상담이 가능합니다."
                  value={form.message}
                  onChange={update("message")}
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-medium text-slate-900 leading-relaxed resize-none"
                />
              </Field>

              <label className="flex items-start gap-3 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={update("agree")}
                  required
                  className="w-5 h-5 accent-blue-600 mt-0.5 cursor-pointer shrink-0"
                />
                <span className="text-xs font-bold text-slate-500 leading-relaxed">
                  개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">(필수)</span>
                  <br />
                  <span className="text-slate-400">
                    수집 항목: 성함, 회사명, 연락처, 이메일 / 이용 목적: 문의 응대 및 상담 / 보유 기간: 상담 종료 후 1년
                  </span>
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-5 bg-[#001F5B] text-white font-black rounded-full hover:bg-blue-700 transition-all text-sm uppercase tracking-[0.2em]"
              >
                Submit Inquiry →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

const inputCls =
  "w-full bg-slate-50 border border-slate-100 rounded-full px-6 py-4 outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-sm text-slate-900 placeholder:text-slate-300";

function Field({ label, required, children }) {
  return (
    <div>
      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function QuickCard({ tag, big, sub, href, small }) {
  return (
    <a
      href={href}
      className="block p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-600 hover:-translate-y-1 transition-all group"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-3 block">
        {tag}
      </span>
      <div
        className={`font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors ${
          small ? "text-lg break-all" : "text-2xl"
        }`}
      >
        {big}
      </div>
      <p className="text-xs font-bold text-slate-400">{sub}</p>
    </a>
  );
}

function ProcessStep({ num, title, desc }) {
  return (
    <li className="flex gap-4 items-start">
      <span className="text-lg font-black text-blue-600 shrink-0">{num}</span>
      <div className="min-w-0">
        <div className="text-sm font-black text-slate-900 mb-1">{title}</div>
        <p className="text-xs font-bold text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}
