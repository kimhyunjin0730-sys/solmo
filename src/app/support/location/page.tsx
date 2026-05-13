'use client';

import { useState, type ReactElement } from 'react';

const ADDRESS = '서울특별시 광진구 아차산로 309 남장빌딩 2층';
const ADDRESS_OLD = '서울특별시 광진구 자양동 224-23';
const POSTAL = '05028';
const TEL = '02-402-8054';
const FAX = '02-402-8055';
const EMAIL = 'solmoit01@solmo.co.kr';

const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  '서울 광진구 아차산로 309'
)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;

export default function LocationPage() {
  const [copied, setCopied] = useState<string>('');

  const copy = (text: string, key: string) => {
    if (navigator.clipboard) {
      void navigator.clipboard.writeText(text);
    }
    setCopied(key);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <div className="space-y-12 pb-10">
      <header className="max-w-4xl pt-2">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Visit Us
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          솔모정보기술 <span className="text-blue-600">오시는 길.</span>
        </h1>
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          서울특별시 광진구에 위치한 본사는 보안 컨설팅과 솔루션 데모를 위한 열린
          공간입니다. 언제든 방문하여 직접 체험해 보세요.
        </p>
      </header>

      <section className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
            <iframe
              src={MAP_SRC}
              title="솔모정보기술 위치"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <a
              href={`https://map.naver.com/p/search/${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-4 rounded-2xl border border-slate-200 text-xs font-black uppercase tracking-wider text-slate-600 hover:border-[#03C75A] hover:text-[#03C75A] transition-all"
            >
              Naver Map ↗
            </a>
            <a
              href={`https://map.kakao.com/?q=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-4 rounded-2xl border border-slate-200 text-xs font-black uppercase tracking-wider text-slate-600 hover:border-yellow-500 hover:text-yellow-600 transition-all"
            >
              Kakao Map ↗
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-4 rounded-2xl border border-slate-200 text-xs font-black uppercase tracking-wider text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Google Map ↗
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-8">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3 block">
              Head Office
            </span>
            <h3 className="text-xl font-black text-slate-900 leading-snug mb-2">
              남장빌딩 2층
            </h3>
            <p className="text-sm font-bold text-slate-500 leading-relaxed mb-2">
              {ADDRESS}
            </p>
            <p className="text-xs font-bold text-slate-400 mb-6">
              지번 · {ADDRESS_OLD} (우){POSTAL}
            </p>
            <button
              onClick={() => copy(ADDRESS, 'addr')}
              className="w-full py-3 rounded-full bg-white border border-slate-200 text-xs font-black uppercase tracking-wider text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              {copied === 'addr' ? '✓ Copied' : '주소 복사'}
            </button>
          </div>

          <ContactRow
            label="대표 전화"
            value={TEL}
            href={`tel:${TEL.replace(/-/g, '')}`}
          />
          <ContactRow label="팩스" value={FAX} />
          <ContactRow label="이메일" value={EMAIL} href={`mailto:${EMAIL}`} />
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-3 block">
              How to Get Here
            </span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">
              대중교통 안내
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <TransitCard
            num="01"
            tag="Subway"
            title="지하철"
            badge="🚇"
            routes={[
              {
                heading: '구의역 (2호선) 1번 출구',
                detail:
                  '건대입구역(2호선) 방향 도보 약 8~10분',
              },
              {
                heading: '건대입구역 (2호선 2번 / 7호선 4번 출구)',
                detail: '구의역(2호선) 방향 도보 약 8~10분',
              },
            ]}
          />
          <TransitCard
            num="02"
            tag="Bus"
            title="버스"
            badge="🚌"
            routes={[
              {
                heading:
                  '구의역(2호선) 2번 출구 앞 — 광진구청·구의역 2번출구 정류장',
                bullets: [
                  '2224 · 2227번 버스 승차 → 자양초등학교앞 정류장 하차 후 도보 약 1분',
                ],
              },
              {
                heading:
                  '건대입구역 (2호선·7호선) 5번 출구 앞 — 광진문화예술회관 정류장',
                bullets: [
                  '마을버스 광진05 승차 → 송림식당앞 하차 후 도보 약 3분',
                  '간선버스 2224 승차 → 건국대학교앞 하차 후 도보 약 5분',
                ],
              },
            ]}
          />
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex items-start gap-5">
          <span className="text-3xl shrink-0">🚗</span>
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">
              Car
            </div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight mb-1">
              자가용 방문
            </h3>
            <p className="text-sm font-bold text-slate-500 leading-relaxed">
              건물 내 방문자 주차 가능. 사전 연락 시 주차 공간 확보 안내드립니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-3 block">
              Visit Notice
            </span>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight mb-3">
              방문 전 미리 연락 부탁드립니다.
            </h3>
            <p className="text-white/50 font-bold">
              담당자가 사전에 자료와 데모 환경을 준비해 더 효율적인 미팅이
              가능합니다.
            </p>
          </div>
          <a
            href={`tel:${TEL.replace(/-/g, '')}`}
            className="shrink-0 px-8 py-5 bg-white text-slate-900 rounded-full text-sm font-black tracking-wider hover:bg-blue-500 hover:text-white transition-all"
          >
            {TEL} →
          </a>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}): ReactElement {
  const Inner = (
    <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-blue-600 transition-all bg-white group">
      <div>
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
          {label}
        </div>
        <div className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
          {value}
        </div>
      </div>
      {href && (
        <span className="text-slate-300 group-hover:text-blue-600 transition-colors">
          →
        </span>
      )}
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}

type TransitRoute = {
  heading: string;
  detail?: string;
  bullets?: readonly string[];
};

function TransitCard({
  num,
  tag,
  title,
  badge,
  routes,
}: {
  num: string;
  tag: string;
  title: string;
  badge: string;
  routes: readonly TransitRoute[];
}) {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-blue-600 hover:-translate-y-1 transition-all">
      <div className="flex items-start justify-between mb-6">
        <span className="text-3xl">{badge}</span>
        <span className="text-2xl font-black text-slate-200">{num}</span>
      </div>
      <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">
        {tag}
      </div>
      <h3 className="text-xl font-black text-slate-900 mb-5 tracking-tight">
        {title}
      </h3>

      <div className="space-y-4">
        {routes.map((r) => (
          <div key={r.heading} className="border-l-2 border-blue-100 pl-4">
            <div className="text-sm font-bold text-slate-800 leading-relaxed mb-1">
              {r.heading}
            </div>
            {r.detail && (
              <p className="text-xs font-bold text-slate-500 leading-relaxed">
                {r.detail}
              </p>
            )}
            {r.bullets && (
              <ul className="space-y-1 mt-2">
                {r.bullets.map((b, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-bold text-slate-500 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-blue-500 shrink-0">
                      {idx + 1}.
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
