'use client';

import { useState } from 'react';

/**
 * 통합된 3개 카테고리. '성과/인증' 필터는 제거하고 '연혁(History)' 으로 흡수.
 *
 *   History — 회사 자체 이벤트(설립, 인증, 특허, 법인명 변경, 등급 등)
 *   Partner — 글로벌 벤더와의 파트너 등록·승격
 *   Project — 고객사 구축 실적
 */
type HistoryCategory = 'History' | 'Partner' | 'Project';

type HistoryItem = {
  year: string;
  category: HistoryCategory;
  title: string;
};

const HISTORY_DATA: readonly HistoryItem[] = [
  // ─────────── 2020 – Present ───────────
  // 주요 실적
  {
    year: '2020 – Present',
    category: 'Project',
    title: '금융: MG새마을금고 정보시스템 인프라 증설 구축',
  },
  {
    year: '2020 – Present',
    category: 'Project',
    title: '산업: 대한항공 네트워크 인프라 개선 (차세대 방화벽 구축)',
  },
  {
    year: '2020 – Present',
    category: 'Project',
    title: '금융: MG캐피탈 VDI 구축',
  },
  {
    year: '2020 – Present',
    category: 'Project',
    title: '공공: 한국산업인력공단 서버 납품',
  },
  {
    year: '2020 – Present',
    category: 'Project',
    title: '교육/의료: 국민대학교 방화벽 IPS 리뉴얼 구축',
  },
  // 파트너십
  {
    year: '2020 – Present',
    category: 'Partner',
    title: '라드웨어 보안 총판',
  },
  {
    year: '2020 – Present',
    category: 'Partner',
    title: 'HCL (App Scan) 파트너',
  },
  { year: '2020 – Present', category: 'Partner', title: 'Citrix 파트너' },
  { year: '2020 – Present', category: 'Partner', title: '틸론 파트너' },
  {
    year: '2020 – Present',
    category: 'Partner',
    title: 'TXOne Networks Reseller',
  },
  {
    year: '2020 – Present',
    category: 'Partner',
    title: '파이오링크 골드 파트너 승격',
  },
  {
    year: '2020 – Present',
    category: 'Partner',
    title: '포티넷 Expert 승급 (2024.06)',
  },
  // 연혁 (인증·특허·기술혁신)
  {
    year: '2020 – Present',
    category: 'History',
    title:
      '스크린 워터마크 (xSecuritas) 솔루션 자체 개발 및 조달 등록 (2021)',
  },
  {
    year: '2020 – Present',
    category: 'History',
    title: '기업 신용평가 등급 BB+ 상향 (한국평가데이타)',
  },
  {
    year: '2020 – Present',
    category: 'History',
    title: 'ISO 인증 4종 획득 (2025.07) — 9001 / 14001 / 37301 / 45001',
  },

  // ─────────── 2011 – 2020 ───────────
  // 연혁
  {
    year: '2011 – 2020',
    category: 'History',
    title: '국방과학기술 수출 중개업 등록',
  },
  {
    year: '2011 – 2020',
    category: 'History',
    title: '국가 벤처기업확인 등록 (2011.06.17)',
  },
  {
    year: '2011 – 2020',
    category: 'History',
    title: 'Fortinet 최우수 파트너 수상',
  },
  // 파트너십
  {
    year: '2011 – 2020',
    category: 'Partner',
    title: 'IBM e-Security 파트너',
  },
  {
    year: '2011 – 2020',
    category: 'Partner',
    title: 'PNP시큐어 영업·기술 파트너',
  },
  { year: '2011 – 2020', category: 'Partner', title: 'HP 파트너' },
  {
    year: '2011 – 2020',
    category: 'Partner',
    title: '넷앤드 HIWARE 파트너',
  },
  {
    year: '2011 – 2020',
    category: 'Partner',
    title: '아크로니스 (Acronis) 백업 파트너 유치',
  },
  {
    year: '2011 – 2020',
    category: 'Partner',
    title: '파키스탄 글로벌 기업 D사와 방산 관련 LOA 체결',
  },
  // 주요 실적
  {
    year: '2011 – 2020',
    category: 'Project',
    title: '포스코대우 NW APT 대응 장비 구축',
  },
  {
    year: '2011 – 2020',
    category: 'Project',
    title: '포스코 해외법인 보안클라우드 방화벽 및 로그 연동 구축',
  },
  {
    year: '2011 – 2020',
    category: 'Project',
    title: '포스코에너지 네트워크 보안솔루션 (NAC) 구축',
  },
  {
    year: '2011 – 2020',
    category: 'Project',
    title: 'RIST 웹키퍼 및 피엔알 ERP 백업 (Acronis) 구축',
  },

  // ─────────── 2002 – 2010 ───────────
  // 파트너십
  {
    year: '2002 – 2010',
    category: 'Partner',
    title: '포티넷 파트너 등록 (2009.12)',
  },
  {
    year: '2002 – 2010',
    category: 'Partner',
    title: '한국전력공사 협력업체 등록 및 Fortinet Gold 파트너 승격',
  },
  // 연혁
  {
    year: '2002 – 2010',
    category: 'History',
    title: '㈜에이투지정보기술 설립 (2002.10.09)',
  },
  {
    year: '2002 – 2010',
    category: 'History',
    title: '무선랜 터보 통신 및 다기능 인터폰 특허 등록 (2003, 2004)',
  },
  {
    year: '2002 – 2010',
    category: 'History',
    title: '㈜솔모정보기술 법인명 변경 출범 (2009)',
  },
  {
    year: '2002 – 2010',
    category: 'History',
    title: '정보통신공사업 등록 (2010)',
  },
  {
    year: '2002 – 2010',
    category: 'History',
    title: '수배전반 안전관리 및 지능형 도어락 특허 등록 (2010)',
  },
  {
    year: '2002 – 2010',
    category: 'History',
    title: '기업부설연구소 설립 (2011)',
  },
];

const PERIODS = ['2020 – Present', '2011 – 2020', '2002 – 2010'] as const;

/** 타임라인 내 카테고리 표시 순서 (연혁 → 파트너십 → 주요 실적). */
const CATEGORY_ORDER: Record<HistoryCategory, number> = {
  History: 0,
  Partner: 1,
  Project: 2,
};

const CATEGORY_LABEL_KR: Record<HistoryCategory, string> = {
  History: '연혁',
  Partner: '파트너십',
  Project: '주요 실적',
};

const FILTERS: readonly { value: 'All' | HistoryCategory; label: string }[] = [
  { value: 'All', label: '전체' },
  { value: 'History', label: '연혁' },
  { value: 'Partner', label: '파트너십' },
  { value: 'Project', label: '주요 실적' },
];

export default function HistoryPage() {
  const [filter, setFilter] = useState<'All' | HistoryCategory>('All');
  const filtered =
    filter === 'All'
      ? HISTORY_DATA
      : HISTORY_DATA.filter((item) => item.category === filter);

  return (
    <div className="pb-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-10">
        <span className="font-mono text-blue-600 text-[10px] font-medium uppercase tracking-[0.4em] mb-3 block">
          Our Journey
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#001F5B] tracking-tight leading-[1.1] mb-3">
          연혁 및 실적
        </h1>
        <p className="text-base font-medium text-slate-500 leading-relaxed">
          <span className="font-display font-bold text-slate-700">22년</span>의
          신뢰. 2002년 설립 이래 정보통신 보안 분야의 핵심 기술력을 축적해
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
            const items = filtered
              .filter((i) => i.year === period)
              .slice()
              .sort(
                (a, b) =>
                  CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category],
              );
            if (items.length === 0) return null;
            return (
              <div
                key={period}
                className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16"
              >
                <div className="lg:col-span-3">
                  <div className="lg:sticky lg:top-40 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
                    <div className="font-mono text-[10px] font-medium text-blue-600 mb-3 uppercase tracking-[0.3em]">
                      Period
                    </div>
                    <div className="font-display text-2xl sm:text-3xl font-bold text-[#001F5B] leading-tight tracking-tight tabular-nums">
                      {period}
                    </div>
                    <div className="mt-5 w-10 h-0.5 bg-blue-600 rounded-full" />
                    <div className="mt-3 font-mono text-xs font-medium text-slate-400 tabular-nums">
                      {String(items.length).padStart(2, '0')} entries
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
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-[10px] font-medium text-blue-600 uppercase tracking-[0.25em]">
                            {item.category}
                          </span>
                          <span className="text-[11px] font-bold text-slate-500">
                            {CATEGORY_LABEL_KR[item.category]}
                          </span>
                          <div className="h-px flex-grow bg-slate-100" />
                        </div>
                        <p className="text-base sm:text-lg font-semibold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors leading-relaxed">
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
