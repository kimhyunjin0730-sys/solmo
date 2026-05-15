import Image from 'next/image';
import type { ProductFeature } from '@/types/product';

/**
 * DBSAFER 핵심기능 — PPT 원본 다이어그램 그대로.
 * 4-모듈 All-in-One 접근제어(DB/AM/OS/IM) PPT 슬라이드를 이미지로 렌더링.
 * features 데이터는 SEO·접근성 목적의 숨김 텍스트로만 유지.
 */
export function DbsaferDiagram({
  features,
}: {
  features: readonly ProductFeature[];
}) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 lg:p-10">
      <div className="relative w-full">
        <Image
          src="/images/products/dbsafer/hero.png"
          alt="DBSAFER All-in-One 접근제어 — DB · AM · OS · IM"
          width={1600}
          height={900}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* SEO·스크린 리더용 숨김 텍스트 */}
      <div className="sr-only">
        <h3>DBSAFER All-in-One 접근제어</h3>
        <ul>
          {features.map((f) => (
            <li key={f.title}>
              <strong>{f.title}</strong>: {f.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
