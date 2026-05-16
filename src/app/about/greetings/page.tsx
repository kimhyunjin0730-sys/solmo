import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '인사말',
  description:
    '솔모정보기술 대표이사 이병두 인사말 — 초연결 및 AI 시대, 정보보안은 기업의 생존과 경쟁력을 좌우합니다.',
};

export default function GreetingsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-10 space-y-12">
      <section className="space-y-6">
        <h4 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-[1.25]">
          <span className="text-blue-600">초연결 및 AI 시대</span>, 정보보안은
          기업의 생존과 경쟁력을 좌우합니다.
        </h4>
        <div className="space-y-6 text-slate-500 font-bold text-[17px] leading-relaxed">
          <p>
            안녕하십니까. <br />
            솔모정보기술 대표이사 이병두입니다.
          </p>
          <p>
            초연결 및 AI 시대로 접어든 오늘날, 정보보안은 단순히 데이터를
            보호하는 기술을 넘어 기업의 생존과 경쟁력을 좌우하는 핵심 가치로
            자리 잡고 있습니다.
          </p>
          <p>
            저희 회사는 설립 이래 정보통신 보안 분야의 핵심 기술력을 바탕으로
            고객의 소중한 정보자산을 보호하는 데 최선을 다해왔습니다.
          </p>
          <p>
            또한, 끊임없는 연구와 혁신을 통해 진화 발전하는 사이버 위협에
            선제적으로 대응하여, 고객에게 검증된 최적의 보안 솔루션을
            제공하고 있습니다.
          </p>
          <p>
            솔모정보기술은 단순한 보안기술 공급 회사를 넘어 고객의 안전한
            비즈니스 성장을 함께하는{' '}
            <span className="text-slate-900">전략적 파트너</span>가 되고자
            합니다.
          </p>
          <p>
            앞으로도 차별화된 기술 혁신과 책임감 있는 서비스를 바탕으로
            대한민국 정보보안 산업을 선도하는 기업으로 도약하겠습니다.
          </p>
          <p>
            끝으로 변함없는 관심과 성원을 보내주시는 고객 및 파트너 여러분께
            깊이 감사드립니다.
          </p>
          <p className="text-slate-900 text-lg font-black pt-2">감사합니다.</p>
        </div>

        {/* Signature */}
        <div className="pt-6 flex items-baseline gap-3 flex-wrap">
          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            대표이사
          </span>
          <span className="font-display text-2xl font-bold text-slate-900 tracking-tight">
            이병두
          </span>
          <span className="font-serif italic text-lg text-slate-400">
            Lee Byung-Doo
          </span>
        </div>
      </section>

    </div>
  );
}
