'use client';

import { useState } from 'react';

type HistoryCategory =
  | 'Project'
  | 'Partner'
  | 'Innovation'
  | 'Foundation'
  | 'Achievement';

type HistoryItem = {
  year: string;
  category: HistoryCategory;
  title: string;
};

const HISTORY_DATA: readonly HistoryItem[] = [
  // ─────────── 2024 - Present ───────────
  {
    year: '2024 - Present',
    category: 'Achievement',
    title: 'ISO 9001 / 14001 / 27001 / 45001 4종 인증 획득 (2025.07)',
  },
  {
    year: '2024 - Present',
    category: 'Partner',
    title: 'Fortinet Expert 파트너 승격 (2024.06)',
  },
  {
    year: '2024 - Present',
    category: 'Partner',
    title: 'TXOne Networks 공식 Reseller 계약 체결 (OT 보안)',
  },
  {
    year: '2024 - Present',
    category: 'Partner',
    title: 'PIOLINK 골드 파트너 자격 유지 / 갱신',
  },
  {
    year: '2024 - Present',
    category: 'Project',
    title: '금융: MG새마을금고중앙회 업무자동화 및 DDoS 구축',
  },
  {
    year: '2024 - Present',
    category: 'Project',
    title: '제조: 한진해운 네트워크 보안 진단 (원격재해 대비)',
  },
  {
    year: '2024 - Present',
    category: 'Project',
    title: '제조: MG캐피탈 VDI 구축',
  },
  {
    year: '2024 - Present',
    category: 'Project',
    title: '교육/의료: 인천대학교 차세대 IPS 구축',
  },

  // ─────────── 2019 - 2023 ───────────
  {
    year: '2019 - 2023',
    category: 'Partner',
    title: 'HCL 파트너 계약 체결 (AppScan)',
  },
  {
    year: '2019 - 2023',
    category: 'Partner',
    title: 'Citrix 파트너 등록',
  },
  {
    year: '2019 - 2023',
    category: 'Partner',
    title: '포스코DX 협력사 선정 및 Infoblox 파트너 등록',
  },
  {
    year: '2019 - 2023',
    category: 'Innovation',
    title:
      '스크린 워터마크(xSecuritas) 솔루션 자체 개발 및 조달 등록 (2021)',
  },
  {
    year: '2019 - 2023',
    category: 'Achievement',
    title: '기업 신용평가 등급 BB+ 상향 (한국평가데이타)',
  },
  {
    year: '2019 - 2023',
    category: 'Project',
    title: '포스코 리눅스 서버용 백신(TrendMicro) 구축',
  },
  {
    year: '2019 - 2023',
    category: 'Project',
    title: '산업: 현대중공업 ISS 방화벽 및 셀트리온 로그관리 구축',
  },
  {
    year: '2019 - 2023',
    category: 'Project',
    title: '교육/의료: 건국대학교 NAC 및 국립암센터 빅데이터 플랫폼 구축',
  },
  {
    year: '2019 - 2023',
    category: 'Project',
    title: '공공: 울산항만공사 대/중회의실 영상회의 시스템 구축',
  },

  // ─────────── 2011 - 2018 ───────────
  {
    year: '2011 - 2018',
    category: 'Achievement',
    title: 'Fortinet 최우수 파트너 수상',
  },
  {
    year: '2011 - 2018',
    category: 'Partner',
    title: '파키스탄 글로벌 기업 D사와 방산 관련 LOA 체결',
  },
  {
    year: '2011 - 2018',
    category: 'Partner',
    title: 'HP / IBM e-Security 공식 파트너 등록',
  },
  {
    year: '2011 - 2018',
    category: 'Partner',
    title: '아크로니스(Acronis) 백업 파트너 등록',
  },
  {
    year: '2011 - 2018',
    category: 'Partner',
    title: 'NETAND HIWARE 파트너 등록',
  },
  {
    year: '2011 - 2018',
    category: 'Project',
    title: '포스코대우 NW APT 대응 장비 구축',
  },
  {
    year: '2011 - 2018',
    category: 'Project',
    title: '포스코 해외법인 보안클라우드 방화벽 및 로그 연동 구축',
  },
  {
    year: '2011 - 2018',
    category: 'Project',
    title: '포스코에너지 네트워크 보안솔루션(NAC) 구축',
  },
  {
    year: '2011 - 2018',
    category: 'Project',
    title: 'RIST 웹키퍼 및 피엔알 ERP 백업(Acronis) 구축',
  },
  {
    year: '2011 - 2018',
    category: 'Innovation',
    title: '국가 벤처기업확인 등록 / 여성기업 인증',
  },

  // ─────────── 2002 - 2010 ───────────
  {
    year: '2002 - 2010',
    category: 'Foundation',
    title: '㈜에이투지정보기술 설립 (2002.10.09) — 정보통신공사업 등록',
  },
  {
    year: '2002 - 2010',
    category: 'Foundation',
    title: '㈜솔모정보기술 법인명 변경 출범 (2009)',
  },
  {
    year: '2002 - 2010',
    category: 'Foundation',
    title: '기업부설연구소 설립',
  },
  {
    year: '2002 - 2010',
    category: 'Partner',
    title: '한국전력공사 협력업체 등록 및 Fortinet Gold 파트너 승격',
  },
  {
    year: '2002 - 2010',
    category: 'Innovation',
    title: '무선랜 터보 통신 및 다기능 인터폰 특허 등록 (2003, 2004)',
  },
  {
    year: '2002 - 2010',
    category: 'Innovation',
    title: '수배전반 안전관리 및 지능형 도어락 특허 등록 (2010)',
  },
];

const PERIODS = [
  '2024 - Present',
  '2019 - 2023',
  '2011 - 2018',
  '2002 - 2010',
] as const;

const FILTERS: readonly { value: 'All' | HistoryCategory; label: string }[] = [
  { value: 'All', label: '전체' },
  { value: 'Project', label: '주요 실적' },
  { value: 'Partner', label: '파트너십' },
  { value: 'Innovation', label: '기술 혁신' },
  { value: 'Foundation', label: '설립 기초' },
  { value: 'Achievement', label: '성과 / 인증' },
];

export default function HistoryPage() {
  const [filter, setFilter] = useState<'All' | HistoryCategory>('All');
  const filtered =
    filter === 'All'
      ? HISTORY_DATA
      : HISTORY_DATA.filter((item) => item.category === filter);

  return (
    <div className="pb-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-8">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Our Journey
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#001F5B] tracking-tight leading-snug">
          연혁 및 실적
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          22년의 신뢰. 2002년 설립 이래 정보통신 보안 분야의 핵심 기술력을 축적해
          왔습니다.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all ${
                filter === f.value
                  ? 'bg-[#001F5B] text-white shadow-md shadow-blue-900/15'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="space-y-16 sm:space-y-24">
          {PERIODS.map((period) => {
            const items = filtered.filter((i) => i.year === period);
            if (items.length === 0) return null;
            return (
              <div
                key={period}
                className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16"
              >
                <div className="lg:col-span-3">
                  <div className="lg:sticky lg:top-40 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
                    <div className="text-[11px] font-bold text-blue-600 mb-2 uppercase tracking-[0.2em]">
                      Period
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#001F5B] leading-tight tracking-tight">
                      {period}
                    </div>
                    <div className="mt-5 w-10 h-0.5 bg-blue-600 rounded-full" />
                    <div className="mt-3 text-xs font-medium text-slate-400">
                      {items.length} entries
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-9 space-y-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex gap-5 sm:gap-6 group">
                      <div className="flex flex-col items-center pt-1">
                        <div className="w-3 h-3 rounded-full border-2 border-blue-600 group-hover:bg-blue-600 transition-colors shrink-0" />
                        <div className="w-px flex-1 bg-slate-100 min-h-[28px]" />
                      </div>
                      <div className="pb-5 sm:pb-6 min-w-0 flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {item.category}
                          </span>
                          <div className="h-px flex-grow bg-slate-100" />
                        </div>
                        <p className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors leading-relaxed">
                          {item.title}
                        </p>
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
