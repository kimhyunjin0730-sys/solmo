'use client';

export default function SecurePrintingPage() {
  return (
    <div className="space-y-12 pb-10">
      <header className="max-w-4xl">
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">
          Security Print Service
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug">
          종이 문서를 통한 정보 유출, <span className="text-blue-600">스마트 보안 출력</span>으로 원천 차단합니다.
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          자체 솔루션 X-Securitas 기반의 스크린 및 출력물 워터마크 기술을 적용하여
          어떤 복합기 환경에서도 완벽한 문서 보안과 이력 관리를 실현합니다.
        </p>
      </header>

      {/* 핵심 기능 3카드 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <FeatureCard
          icon="💧"
          title="워터마크 자동 삽입"
          desc="인쇄 시 사용자 정보(ID, IP, 날짜 등)를 투명/반투명하게 삽입하여 유출 경로를 추적합니다."
        />
        <FeatureCard
          icon="🚫"
          title="출력 승인 및 통제"
          desc="민감 정보 포함 시 출력을 즉시 차단하거나 관리자 승인 후 인쇄가 가능하게 합니다."
        />
        <FeatureCard
          icon="📜"
          title="상세 이력 관리"
          desc="누가, 언제, 어떤 내용을 출력했는지 상세 로그 기록과 원본 이미지 저장을 통한 철저한 감사를 지원합니다."
        />
      </section>

      {/* 시스템 아키텍처 다이어그램 (SVG 직접 작성) */}
      <section className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="mb-8">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2 block">
            System Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            보안 출력 시스템 구성도
          </h3>
          <p className="text-slate-500 font-medium text-sm mt-2">
            사용자 → Print 서버 → 사원증 인증 → 어느 복합기에서든 출력. 모든 작업은 보안·관제 서버에 자동 기록됩니다.
          </p>
        </div>

        <PrintArchitectureDiagram />

        {/* 범례 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-100">
          <Legend color="bg-rose-500" label="출력 흐름" />
          <Legend color="bg-blue-500" label="인증·이력 저장" />
          <Legend color="bg-emerald-500" label="관리자 모니터링" />
          <Legend color="bg-amber-500" label="중앙 관제" />
        </div>
      </section>

      {/* Market Leader Edge */}
      <section className="bg-slate-900 text-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-2xl relative z-10">
          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-3 block">
            Market Leader Edge
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
            솔모만의 차별화된 보안 출력 기술
          </h3>
          <p className="text-base font-medium leading-relaxed mb-8 text-white/70">
            기업 환경의 복합기 구성을 그대로 유지하면서 독보적인 보안 레이어를 추가할 수 있는 것이 솔모만의 차별화된 기술력입니다.
          </p>
          <ul className="space-y-3 text-sm font-bold text-white/60">
            <li className="flex items-center gap-3"><span className="text-blue-400">✔</span> 하이브리드 환경(사내외) 완벽 지원</li>
            <li className="flex items-center gap-3"><span className="text-blue-400">✔</span> 사용자 보안 의식 제고 및 심리적 억제 효과</li>
            <li className="flex items-center gap-3"><span className="text-blue-400">✔</span> 법적 준거성(DLP) 대응 체계 완성</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all group">
      <div className="text-4xl mb-6">{icon}</div>
      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 tracking-tight">{title}</h4>
      <p className="text-sm font-medium text-slate-500 leading-relaxed mb-5">{desc}</p>
      <div className="w-10 h-1 bg-blue-500 rounded-full group-hover:w-full transition-all"></div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <span className="text-[11px] font-bold text-slate-600">{label}</span>
    </div>
  );
}

/* ──────────────── Print Architecture Diagram (SVG) ──────────────── */

function PrintArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 1000 560"
        className="w-full h-auto min-w-[700px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="보안 출력 시스템 구성도"
      >
        <defs>
          <marker id="arrowRose" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
          </marker>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
          <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
          </marker>
        </defs>

        {/* ── User (left) ── */}
        <g>
          <rect x="30" y="80" width="140" height="100" rx="14" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="100" y="115" textAnchor="middle" fontSize="32">👤</text>
          <text x="100" y="155" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">사용자</text>
          <text x="100" y="172" textAnchor="middle" fontSize="10" fontWeight="600" fill="#64748b">User PC</text>
        </g>

        {/* ── Print Server (center) ── */}
        <g>
          <rect x="350" y="80" width="160" height="100" rx="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
          <text x="430" y="115" textAnchor="middle" fontSize="28">🖨</text>
          <text x="430" y="148" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1d4ed8">Print Server</text>
          <text x="430" y="166" textAnchor="middle" fontSize="10" fontWeight="600" fill="#64748b">출력 작업 큐 관리</text>
        </g>

        {/* ── Security Server ── */}
        <g>
          <rect x="350" y="220" width="160" height="80" rx="14" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
          <text x="430" y="252" textAnchor="middle" fontSize="13" fontWeight="800" fill="#047857">🛡 보안 서버</text>
          <text x="430" y="275" textAnchor="middle" fontSize="10" fontWeight="600" fill="#64748b">키워드 검색·분석</text>
        </g>

        {/* ── Monitoring Server ── */}
        <g>
          <rect x="350" y="340" width="160" height="80" rx="14" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <text x="430" y="372" textAnchor="middle" fontSize="13" fontWeight="800" fill="#b45309">📊 관제 서버</text>
          <text x="430" y="395" textAnchor="middle" fontSize="10" fontWeight="600" fill="#64748b">중앙 통합 운영</text>
        </g>

        {/* ── User → Print Server (rose, 출력 흐름) ── */}
        <line x1="170" y1="130" x2="345" y2="130" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrowRose)" />
        <text x="257" y="118" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f43f5e">출력 실행</text>

        {/* ── Print Server → Security Server (blue, 이력) ── */}
        <line x1="430" y1="180" x2="430" y2="218" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrowBlue)" />

        {/* ── Security Server → Monitoring Server (blue, 이력) ── */}
        <line x1="430" y1="300" x2="430" y2="338" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrowBlue)" />

        {/* ── Three MFP locations (right column) ── */}
        <g>
          {/* MFP 1 - A지역 */}
          <rect x="700" y="60" width="200" height="100" rx="14" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="730" y="100" textAnchor="middle" fontSize="28">🖨</text>
          <text x="780" y="92" fontSize="12" fontWeight="800" fill="#0f172a">A지역 (10층)</text>
          <text x="780" y="110" fontSize="10" fontWeight="600" fill="#64748b">사원증 인증 출력</text>
          <text x="780" y="128" fontSize="10" fontWeight="600" fill="#64748b">📤 결과물 출력</text>
          <circle cx="755" cy="135" r="5" fill="#10b981" />

          {/* MFP 2 - B지역 */}
          <rect x="700" y="200" width="200" height="100" rx="14" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="730" y="240" textAnchor="middle" fontSize="28">🖨</text>
          <text x="780" y="232" fontSize="12" fontWeight="800" fill="#0f172a">B지역 (7층)</text>
          <text x="780" y="250" fontSize="10" fontWeight="600" fill="#64748b">복사 / 이력 저장</text>
          <text x="780" y="268" fontSize="10" fontWeight="600" fill="#64748b">📷 이미지 자동 백업</text>
          <circle cx="755" cy="275" r="5" fill="#10b981" />

          {/* MFP 3 - C지역 */}
          <rect x="700" y="340" width="200" height="100" rx="14" fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="730" y="380" textAnchor="middle" fontSize="28">🖨</text>
          <text x="780" y="372" fontSize="12" fontWeight="800" fill="#0f172a">C지역 (1층)</text>
          <text x="780" y="390" fontSize="10" fontWeight="600" fill="#64748b">스캔 / 팩스 / E-mail</text>
          <text x="780" y="408" fontSize="10" fontWeight="600" fill="#64748b">📨 송신 이력 추적</text>
          <circle cx="755" cy="415" r="5" fill="#10b981" />
        </g>

        {/* ── Print Server → MFPs (rose, 출력 데이터 전송) ── */}
        <path d="M 510 110 Q 600 90 695 105" stroke="#f43f5e" strokeWidth="2.5" fill="none" markerEnd="url(#arrowRose)" />
        <path d="M 510 130 Q 600 175 695 245" stroke="#f43f5e" strokeWidth="2.5" fill="none" markerEnd="url(#arrowRose)" />
        <path d="M 510 150 Q 600 250 695 385" stroke="#f43f5e" strokeWidth="2.5" fill="none" markerEnd="url(#arrowRose)" />

        {/* ── MFPs → Security Server (blue dashed, 이력 백업) ── */}
        <path d="M 700 110 Q 580 200 510 245" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" markerEnd="url(#arrowBlue)" />
        <path d="M 700 250 L 510 255" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" markerEnd="url(#arrowBlue)" />
        <path d="M 700 390 Q 600 320 510 270" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeDasharray="3 3" markerEnd="url(#arrowBlue)" />

        {/* ── Admin (bottom-left) ── */}
        <g>
          <rect x="30" y="380" width="170" height="100" rx="14" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
          <text x="115" y="415" textAnchor="middle" fontSize="28">🧑‍💼</text>
          <text x="115" y="445" textAnchor="middle" fontSize="13" fontWeight="800" fill="#047857">관리자</text>
          <text x="115" y="463" textAnchor="middle" fontSize="10" fontWeight="600" fill="#64748b">웹 콘솔 모니터링</text>
        </g>

        {/* ── Admin → Monitoring Server (green) ── */}
        <line x1="200" y1="395" x2="345" y2="370" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowGreen)" />
        <text x="270" y="368" textAnchor="middle" fontSize="11" fontWeight="700" fill="#10b981">실시간 감시</text>

        {/* ── Title at bottom ── */}
        <text x="500" y="525" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0f172a">
          1EA 서버 통합 운영 — 복합기 위치 제약 없는 자유로운 문서 업무
        </text>
        <text x="500" y="545" textAnchor="middle" fontSize="11" fontWeight="600" fill="#64748b">
          중앙 집중 관리 시스템 · 사용자별 사용량 확인 · 비용 관리
        </text>
      </svg>
    </div>
  );
}
