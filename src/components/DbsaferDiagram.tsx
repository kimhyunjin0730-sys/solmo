import type { ProductFeature } from '@/types/product';

/**
 * DBSAFER All-in-One 접근제어 다이어그램.
 * PPT 슬라이드의 4-모듈 헥사곤 구성 재현:
 *   DBSAFER DB  — DB 접근제어
 *   DBSAFER AM  — SYSTEM 접근제어
 *   DBSAFER OS  — OS 접근제어
 *   DBSAFER IM  — 통합계정관리
 *
 * 상단에 곡선 브래킷("All-in-One 접근제어" … "DB·OS 작업 감사/제어")과
 * 중앙 자물쇠 모티브로 PPT 톤을 살린다.
 */

type ModuleStyle = {
  /** 헥사곤 그라데이션 */
  grad: string;
  /** 코드 배지 텍스트 컬러 */
  code: string;
  /** 하단 한국어 라벨 컬러 */
  label: string;
};

const MODULE_STYLES: Record<string, ModuleStyle> = {
  'dbsafer-db': {
    grad: 'from-sky-400 to-sky-600',
    code: 'text-sky-600',
    label: 'text-sky-700',
  },
  'dbsafer-am': {
    grad: 'from-emerald-400 to-teal-600',
    code: 'text-teal-600',
    label: 'text-teal-700',
  },
  'dbsafer-os': {
    grad: 'from-violet-400 to-purple-600',
    code: 'text-purple-600',
    label: 'text-purple-700',
  },
  'dbsafer-im': {
    grad: 'from-amber-400 to-orange-500',
    code: 'text-amber-600',
    label: 'text-amber-700',
  },
};

/** 정육각형(flat-top) 클립 패스 */
const HEX_CLIP =
  'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)';

function HexModule({ feature }: { feature: ProductFeature }) {
  const style = MODULE_STYLES[feature.icon] ?? MODULE_STYLES['dbsafer-db'];
  // title: "DBSAFER DB" → code "DB"
  const code = feature.title.replace(/^DBSAFER\s*/i, '') || feature.title;
  // description: "DB 접근제어 — 디비세이퍼 DB" → 앞부분 / 뒷부분
  const [role, korName] = feature.description.split('—').map((s) => s.trim());

  return (
    <div className="flex flex-col items-center group">
      {/* 헥사곤 */}
      <div className="relative w-[110px] h-[110px] sm:w-[128px] sm:h-[128px] group-hover:-translate-y-1.5 transition-transform duration-500">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${style.grad} shadow-lg`}
          style={{ clipPath: HEX_CLIP }}
        />
        {/* 안쪽 살짝 밝은 면 */}
        <div
          className="absolute inset-[6px] bg-white/10"
          style={{ clipPath: HEX_CLIP }}
        />
        {/* 라벨 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-mono text-[8px] sm:text-[9px] font-bold text-white/70 tracking-[0.2em] uppercase">
            DBSAFER
          </span>
          <span className="font-display text-white text-xl sm:text-2xl font-extrabold tracking-tight leading-none mt-0.5">
            {code}
          </span>
        </div>
      </div>

      {/* 하단 카드 — PPT 톤: 큰 역할 텍스트 + 부제(디비세이퍼 XX) */}
      <div className="mt-3 bg-white border border-slate-200 rounded-2xl px-4 py-4 text-center w-full group-hover:border-slate-300 group-hover:shadow-md transition-all">
        <p className="font-display text-[16px] sm:text-[18px] font-extrabold text-[#001F5B] tracking-tight leading-tight break-keep">
          {role}
        </p>
        {korName && (
          <p className={`text-[12px] sm:text-[13px] font-bold ${style.label} mt-1.5 break-keep`}>
            {korName}
          </p>
        )}
      </div>
    </div>
  );
}

export function DbsaferDiagram({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200 rounded-3xl p-6 sm:p-10 overflow-hidden">
      {/* 배경 점 그리드 */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #001F5B 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 상단 헤더 — 브래킷 라벨 */}
      <div className="relative flex items-center justify-between mb-6 sm:mb-8 gap-4">
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold text-blue-600 tracking-[0.15em] uppercase">
          <span className="hidden sm:inline-block w-8 h-px bg-blue-300" />
          All-in-One 접근제어
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#001F5B] text-white">
          <span className="text-xs">🔒</span>
          <span className="font-display text-sm font-bold tracking-tight">
            DBSAFER
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 tracking-[0.15em] uppercase">
          DB·OS 작업 감사/제어
          <span className="hidden sm:inline-block w-8 h-px bg-slate-300" />
        </div>
      </div>

      {/* 연결 버스 라인 */}
      <div className="relative mb-1">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* 4-모듈 헥사곤 그리드 */}
      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-4">
        {features.map((f) => (
          <HexModule key={f.title} feature={f} />
        ))}
      </div>

      {/* 하단 캡션 */}
      <p className="relative mt-7 text-center text-[12px] sm:text-[13px] font-medium text-slate-500 break-keep">
        DB · System · OS · 통합계정을 하나의 정책으로 통제하는 All-in-One 접근제어
        플랫폼
      </p>
    </div>
  );
}
