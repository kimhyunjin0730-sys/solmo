import type { ProductFeature } from '@/types/product';

/**
 * 단말/서버·애플리케이션·OT 카테고리 제품의 핵심기능을 홈 화면 ServiceCard
 * 스타일로 렌더 — 큰 사진 배경 + 어두운 그라데이션 + 우측 하단 ↓ 화살표.
 *
 * 일반 아이콘 박스 카드보다 무게감·프리미엄 톤이 강해 PPT 본문 카테고리
 * (Endpoint / Application / OT) 의 분위기와 맞춤.
 */

/** 아이콘 키 → 의미 맞는 Unsplash 사진 URL.
 *  쿼리 파라미터로 동일 크기·품질 강제. */
const PHOTO_BY_ICON: Record<string, string> = {
  // Security / shield / lock
  shield:
    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200',
  'shield-check':
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
  lock:
    'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=1200',
  // Database / server / storage
  database:
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
  server:
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
  'hard-drive':
    'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=1200',
  // Cloud / network
  cloud:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
  network:
    'https://images.unsplash.com/photo-1591808216268-ce0b82787efe?auto=format&fit=crop&q=80&w=1200',
  globe:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
  // AI / brain / radar / monitoring
  brain:
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
  radar:
    'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1200',
  monitor:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  eye:
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200',
  // Mail / send
  mail:
    'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1200',
  send:
    'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1200',
  // OT / factory / usb
  factory:
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200',
  usb:
    'https://images.unsplash.com/photo-1592664474505-fea3df37d1cd?auto=format&fit=crop&q=80&w=1200',
  // Operations / savings / package / refresh — Acronis 백업·복구 톤
  gauge:
    'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1200',
  savings:
    'https://images.unsplash.com/photo-1579621908742-d4c4bb6f7f37?auto=format&fit=crop&q=80&w=1200',
  // 30+ workload protection — multi-cloud / data center 톤
  package:
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1400',
  // 빠르고 안정적인 복구 — 데이터센터 서버 랙 (속도·복원 톤)
  'refresh-ccw':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1400',
  // File / users / camera
  'file-text':
    'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1200',
  'user-check':
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200',
  users:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200',
  'camera-off':
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
  // Crosshair / expand
  crosshair:
    'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=1200',
  expand:
    'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1200',
  // Workflow / search / zap
  workflow:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  search:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
  zap:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
};

const FALLBACK_PHOTO =
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200';

function getPhoto(iconKey: string): string {
  return PHOTO_BY_ICON[iconKey] ?? FALLBACK_PHOTO;
}

export function FeaturePhotoGrid({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  // 3-col when features have 3 (Trend, Acronis, Proofpoint), else 2-col
  const cols =
    features.length === 3
      ? 'lg:grid-cols-3'
      : features.length >= 4
        ? 'lg:grid-cols-2'
        : 'lg:grid-cols-2';

  return (
    <div className={`grid grid-cols-1 gap-5 sm:gap-6 ${cols}`}>
      {features.map((f, idx) => (
        <FeaturePhotoCard key={f.title} feature={f} index={idx} />
      ))}
    </div>
  );
}

function FeaturePhotoCard({
  feature,
  index,
}: {
  feature: ProductFeature;
  index: number;
}) {
  const bg = getPhoto(feature.icon);
  return (
    <article className="group relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bg}
        alt=""
        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1400ms]"
      />

      {/* Layered gradients — top fade for legibility on top text, bottom for body */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F5B]/30 via-transparent to-transparent" />

      {/* Decorative corner: number stamp + accent line */}
      <div className="absolute top-7 sm:top-8 left-7 sm:left-8 flex items-center gap-3">
        <span className="font-mono text-[10px] font-medium text-blue-300/80 uppercase tracking-[0.4em]">
          Feature
        </span>
        <div className="h-px w-10 bg-blue-300/40" />
        <span className="font-display text-blue-300 font-bold text-base tabular-nums tracking-tight">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Decorative top-right corner accent — subtle circle motif */}
      <svg
        className="absolute top-6 right-6 sm:top-7 sm:right-7 opacity-30 group-hover:opacity-50 transition-opacity"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <circle cx="24" cy="24" r="3" fill="white" />
      </svg>

      {/* Body */}
      <div className="absolute bottom-7 sm:bottom-9 left-7 sm:left-9 right-7 sm:right-9">
        <h4 className="font-display text-white text-2xl sm:text-[28px] font-bold mb-3 tracking-tight leading-[1.15]">
          {feature.title}
        </h4>

        {/* Accent line */}
        <div className="h-0.5 w-10 bg-blue-400 mb-4 group-hover:w-16 transition-all duration-500" />

        {feature.bullets && feature.bullets.length > 0 ? (
          <ul className="space-y-1.5">
            {feature.bullets.map((b) => (
              <li
                key={b}
                className="text-white/75 text-sm font-medium leading-relaxed flex items-start gap-2"
              >
                <span className="text-blue-400 shrink-0">–</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white/75 text-sm sm:text-[15px] font-medium leading-relaxed">
            {feature.description}
          </p>
        )}
      </div>
    </article>
  );
}
