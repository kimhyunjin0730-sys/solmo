import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '인증 및 특허',
  description:
    '솔모정보기술의 보유 인증 / 자격 / 특허 — ISO 4종, 메인비즈·이노비즈, GS 1등급, 신용평가 BB+, 그리고 보안 특허.',
};

type Cert = {
  title: string;
  img: string;
  desc: string;
  /** 다운로드 가능한 원본 PDF 경로. 있으면 카드 클릭 시 새 탭으로 열림 */
  pdf?: string;
  /** 인증 유효기간 (있을 경우) */
  period?: string;
};

const CORPORATE_CERTS: readonly Cert[] = [
  {
    title: '벤처기업확인서',
    img: '/images/인증 및 특허/19.6.17-21.6.16벤처기업확인서_page-0001.jpg',
    desc: '기술력과 미래 성장 가치를 인정받은 혁신 벤처 기업',
  },
  {
    title: '정보통신공사업등록증',
    img: '/images/인증 및 특허/정보통신공사업등록증_page-0001.jpg',
    desc: '전문적인 정보통신 설비 시공 및 유지관리 적격 업체',
  },
  {
    title: '기업부설연구소인정서',
    img: '/images/인증 및 특허/기업부설연구소인정서_page-0001.jpg',
    desc: '독자적 보안 기술 연구 및 신기술 창출을 위한 전담 연구소',
  },
  {
    title: '소프트웨어사업자 신고',
    img: '/certs/software-business-cert-preview.jpg',
    pdf: '/certs/software-business-cert.pdf',
    desc: '컴퓨터 관련 서비스 및 패키지 SW 개발 공급 공식 사업자 (2025년 결산 기준, 발급일 2026.04.15)',
    period: '2026 갱신',
  },
  {
    title: '중소기업확인서',
    img: '/certs/sme-cert-preview.jpg',
    pdf: '/certs/sme-cert.pdf',
    desc: '대한민국 중소벤처기업부 인증 유망 중소기업',
    period: '2026.04.01 ~ 2027.03.31',
  },
  {
    title: '메인비즈 (MAIN-BIZ) 확인서',
    img: '/certs/mainbiz-cert-preview.jpg',
    pdf: '/certs/mainbiz-cert.pdf',
    desc: '경영혁신형 중소기업 인증 — 마케팅·조직·인사·생산 등 비기술 분야 혁신 역량 검증',
    period: '2025.01.14 ~ 2028.01.13',
  },
  {
    title: '이노비즈 (INNO-BIZ) 확인서',
    img: '/certs/innobiz-cert-preview.jpg',
    pdf: '/certs/innobiz-cert.pdf',
    desc: '기술혁신형 중소기업 인증 — 기술 우위·R&D 역량을 정부가 공인',
    period: '2024.12.23 ~ 2027.12.22',
  },
];

const QUALITY_CERTS: readonly Cert[] = [
  {
    title: 'ISO 통합 인증 (4종)',
    img: '/certs/iso-certs-preview.jpg',
    pdf: '/certs/iso-certs.pdf',
    desc: 'ISO 9001 (품질) · ISO 14001 (환경) · ISO 37301 (컴플라이언스) · ISO 45001 (안전보건) 통합 운영 인증',
    period: '2025 신규',
  },
  {
    title: '기업신용등급 BB+',
    img: '/certs/credit-rating-bb-plus-preview.jpg',
    pdf: '/certs/credit-rating-bb-plus.pdf',
    desc: '한국평가데이터 2025년 신용평가 — 안정적 현금흐름과 우수한 재무 건전성·거래 신뢰도',
    period: '2026.04.24 ~ 2027.04.23',
  },
];

const PATENTS: readonly Cert[] = [
  {
    title: '무선랜 터보 통신 특허',
    img: '/images/인증 및 특허/특허증_page-0001.jpg',
    desc: '무선랜 이용 터보 다중 수신 장치 및 시스템 기술',
  },
  {
    title: '다기능 인터폰 장치 특허',
    img: '/images/인증 및 특허/특허증_page-0002.jpg',
    desc: '스마트 홈 보안 연동을 위한 다기능 인터폰 기술',
  },
  {
    title: '수배전반 안전 관리 특허',
    img: '/images/인증 및 특허/특허증_page-0003.jpg',
    desc: '전력 설비 안전 관리 및 지능형 도어락 제어 시스템',
  },
  {
    title: '통합 보안 제어 특허',
    img: '/images/인증 및 특허/특허증_page-0004.jpg',
    desc: '다각도 보안 관제를 위한 지능형 제어 시스템',
  },
];

export default function CertificationsPage() {
  return (
    <div className="space-y-12 pb-10">
      <header className="max-w-[1400px] mx-auto text-left flex flex-col md:flex-row justify-between items-end gap-6 pt-2">
        <div className="max-w-2xl">
          <span className="font-mono text-blue-600 text-[10px] font-medium uppercase tracking-[0.4em] mb-3 block">
            Proof of Innovation
          </span>
          <h3 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-[1.1]">
            기술로 증명하고{' '}
            <span className="text-blue-600">신뢰로 응답합니다.</span>
          </h3>
          <p className="text-slate-500 font-medium text-base leading-relaxed">
            솔모정보기술은{' '}
            <span className="font-display font-bold text-slate-700">22년간</span>{' '}
            축적된 지적 자산과 대내외 공인 인증을 통해 가장 안전하고 검증된
            보안 경험을 제시합니다.
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="w-32 h-32 rounded-full border border-blue-600/20 flex items-center justify-center animate-pulse">
            <span className="font-mono text-blue-600 text-[10px] font-medium uppercase tracking-[0.3em]">
              ISO Certified
            </span>
          </div>
        </div>
      </header>

      <InteractiveSection title="Corporate Foundation" data={CORPORATE_CERTS} />
      <InteractiveSection
        title="Quality Excellence"
        data={QUALITY_CERTS}
        columns={3}
      />
      <InteractiveSection title="Intellectual Property" data={PATENTS} />

      <div className="bg-slate-900 -mx-8 px-8 py-40 rounded-[5rem] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-12">
          <h4 className="font-serif italic text-5xl sm:text-6xl font-medium text-white tracking-tight">
            Technology Beyond Limits
          </h4>
          <p className="text-white/40 font-bold max-w-2xl mx-auto text-[15px] leading-relaxed">
            솔모는 안주하지 않습니다. 매년 매출의 상당 부분을 R&amp;D에
            투자하여 자체 보안 솔루션 고도화와 새로운 특허 창출을 통해 미래
            보안 시장을 선도하고 있습니다.
          </p>
          <div className="flex justify-center flex-wrap gap-12 lg:gap-32">
            <BigStatItem value="22" unit="Years" label="Operational Trust" />
            <BigStatItem value="15" unit="Patents" label="Innovation Assets" />
            <BigStatItem value="14" unit="Certs" label="Quality Standard" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}

function InteractiveSection({
  title,
  data,
  columns = 3,
}: {
  title: string;
  data: readonly Cert[];
  columns?: 2 | 3;
}) {
  const gridCols = columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
  return (
    <div className="max-w-[1400px] mx-auto space-y-16">
      <div className="flex items-center gap-8">
        <h4 className="font-mono text-sm font-medium text-blue-600 uppercase tracking-[0.5em] whitespace-nowrap">
          {title}
        </h4>
        <div className="w-full h-px bg-slate-100" />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-12`}>
        {data.map((item) => (
          <CertCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function CertCard({ item }: { item: Cert }) {
  const inner = (
    <>
      <div className="relative aspect-[3/4.2] rounded-[3.5rem] overflow-hidden bg-white border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-700">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col justify-end">
          <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4 block">
            {item.pdf ? 'Click to View PDF →' : 'Details'}
          </span>
          <p className="text-white text-base sm:text-lg font-bold leading-tight tracking-tight">
            {item.desc}
          </p>
        </div>
        {item.period && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-blue-700 tracking-wider shadow-sm">
            {item.period}
          </div>
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex items-center justify-between gap-2">
          <h5 className="text-[17px] font-black text-slate-900 tracking-tight">
            {item.title}
          </h5>
          {item.pdf && (
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest shrink-0">
              PDF ↗
            </span>
          )}
        </div>
        <div className="w-8 h-1 bg-slate-200 mt-3 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500 rounded-full" />
      </div>
    </>
  );

  return item.pdf ? (
    <a
      href={item.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      {inner}
    </a>
  ) : (
    <div className="group relative">{inner}</div>
  );
}

function BigStatItem({
  value,
  unit,
  label,
}: {
  value: string;
  unit: string;
  label: string;
}) {
  return (
    <div className="text-center group">
      <div className="font-display text-7xl sm:text-8xl font-bold text-white tracking-tight tabular-nums mb-4 group-hover:text-blue-500 transition-colors">
        {value}
        <span className="font-serif italic text-2xl text-blue-500 ml-2 font-medium">
          {unit}
        </span>
      </div>
      <div className="font-mono text-[10px] font-medium text-white/40 uppercase tracking-[0.4em]">
        {label}
      </div>
    </div>
  );
}
