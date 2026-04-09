/**
 * Product architecture diagrams (SVG)
 *
 * Recreates the system topology illustrations from the original
 * solmo.co.kr product detail pages without using any external images.
 * Each diagram is responsive (viewBox + min-width on mobile scroll).
 */

const DIAGRAMS = {
  "fortinet-utm": FortinetUtmDiagram,
  "piolink-waf": PiolinkWafDiagram,
  "mail-i": MailiDiagram,
  "webkeeper": WebkeeperDiagram,
  "genian-nac": GenianNacDiagram,
  "hiware": HiwareDiagram,
};

export default function ProductDiagram({ id }) {
  const Component = DIAGRAMS[id];
  if (!Component) return null;
  return (
    <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10">
      <div className="mb-8">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2 block">
          System Architecture
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          시스템 구성도
        </h2>
        <p className="text-sm font-medium text-slate-500 leading-relaxed">
          제품의 표준 배치 구성과 트래픽 흐름을 다이어그램으로 표현했습니다.
        </p>
      </div>
      <div className="w-full overflow-x-auto">
        <Component />
      </div>
    </section>
  );
}

/* ──────────── Common SVG defs ──────────── */
function ArrowMarkers() {
  return (
    <defs>
      <marker id="arrRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
      </marker>
      <marker id="arrBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
      </marker>
      <marker id="arrSlate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
      </marker>
    </defs>
  );
}

/* ──────────── 1. Fortinet UTM ──────────── */
function FortinetUtmDiagram() {
  // 8 security functions arranged radially around 4 central squares
  const cx = 700;
  const cy = 280;
  const r = 200;
  const functions = [
    { angle: -90, label: "Anti-Virus" },
    { angle: -45, label: "Anti-Spam" },
    { angle: 0, label: "IPS" },
    { angle: 45, label: "VPN" },
    { angle: 90, label: "Firewall" },
    { angle: 135, label: "SSL VPN" },
    { angle: 180, label: "IDS" },
    { angle: 225, label: "QoS" },
  ];

  return (
    <svg viewBox="0 0 1000 560" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="20" y="20" width="280" height="40" rx="20" fill="#dcfce7" stroke="#86efac" />
      <text x="160" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#15803d">위협 관리의 통합</text>

      {/* Subtitle */}
      <text x="20" y="90" fontSize="11" fontWeight="700" fill="#0f172a">
        Firewall · VPN · Anti-Virus · IDS · IPS · Anti-Spam · SSL VPN · QoS
      </text>
      <text x="20" y="108" fontSize="11" fontWeight="600" fill="#64748b">
        여러 보안 기능을 단일 장비에서 통합적으로 수행하는 시스템
      </text>

      {/* Center 2x2 red squares — UTM core */}
      <g>
        <rect x={cx - 70} y={cy - 70} width="60" height="60" rx="6" fill="#dc2626" />
        <rect x={cx + 10} y={cy - 70} width="60" height="60" rx="6" fill="#dc2626" />
        <rect x={cx - 70} y={cy + 10} width="60" height="60" rx="6" fill="#dc2626" />
        <rect x={cx + 10} y={cy + 10} width="60" height="60" rx="6" fill="#dc2626" />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">
          FortiGate
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">UTM Core</text>
      </g>

      {/* 8 surrounding shields with arrows pointing in */}
      {functions.map((f, i) => {
        const rad = (f.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        // Arrow end point near center (just outside the 2x2 grid ~80px)
        const ax = cx + 90 * Math.cos(rad);
        const ay = cy + 90 * Math.sin(rad);
        return (
          <g key={i}>
            {/* Shield outline */}
            <path
              d={`M ${x - 32} ${y - 38} L ${x + 32} ${y - 38} L ${x + 32} ${y + 8} Q ${x + 32} ${y + 38} ${x} ${y + 42} Q ${x - 32} ${y + 38} ${x - 32} ${y + 8} Z`}
              fill="#fff"
              stroke="#64748b"
              strokeWidth="2"
            />
            <text x={x} y={y - 5} textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">
              {f.label}
            </text>
            <text x={x} y={y + 12} textAnchor="middle" fontSize="9" fontWeight="600" fill="#94a3b8">
              Module
            </text>
            {/* Arrow to center */}
            <line
              x1={x + 35 * Math.cos(rad + Math.PI)}
              y1={y + 35 * Math.sin(rad + Math.PI)}
              x2={ax}
              y2={ay}
              stroke="#dc2626"
              strokeWidth="2"
              markerEnd="url(#arrRed)"
            />
          </g>
        );
      })}

      {/* Bottom note */}
      <rect x="20" y="510" width="960" height="35" rx="8" fill="#fef2f2" stroke="#fecaca" />
      <text x="500" y="533" textAnchor="middle" fontSize="11" fontWeight="800" fill="#991b1b">
        ASIC 가속 하드웨어 + 전용 Secure OS · 5,000종 이상 공격 패턴 실시간 차단
      </text>
    </svg>
  );
}

/* ──────────── 2. PIOLINK WEBFRONT-K (WAF) ──────────── */
function PiolinkWafDiagram() {
  return (
    <svg viewBox="0 0 1000 560" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="20" y="20" width="200" height="40" rx="20" fill="#fecaca" stroke="#fca5a5" />
      <text x="120" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#991b1b">[ 구축 사례 ]</text>

      {/* Internet cloud */}
      <g>
        <ellipse cx="200" cy="130" rx="65" ry="30" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
        <text x="200" y="135" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1d4ed8">Internet</text>
      </g>

      {/* Client (top right) */}
      <g>
        <rect x="820" y="80" width="100" height="70" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="870" y="115" textAnchor="middle" fontSize="22">💻</text>
        <text x="870" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">Client</text>
      </g>

      {/* HTTPS line client → through to bottom */}
      <line x1="870" y1="150" x2="870" y2="290" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 4" />
      <text x="885" y="220" fontSize="11" fontWeight="800" fill="#dc2626">HTTPS</text>

      {/* HTTP horizontal arrow from L3 to WAF */}
      <line x1="500" y1="280" x2="755" y2="280" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrRed)" />
      <text x="620" y="270" textAnchor="middle" fontSize="12" fontWeight="800" fill="#dc2626">HTTP</text>

      {/* 2 Firewalls (brick pattern) */}
      <g>
        <rect x="160" y="195" width="80" height="80" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="200" y="245" textAnchor="middle" fontSize="11" fontWeight="800" fill="#991b1b">FW</text>
        <text x="200" y="260" textAnchor="middle" fontSize="9" fontWeight="600" fill="#7f1d1d">Firewall #1</text>
      </g>
      <g>
        <rect x="260" y="195" width="80" height="80" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="300" y="245" textAnchor="middle" fontSize="11" fontWeight="800" fill="#991b1b">FW</text>
        <text x="300" y="260" textAnchor="middle" fontSize="9" fontWeight="600" fill="#7f1d1d">Firewall #2</text>
      </g>

      {/* Internet → FW lines */}
      <line x1="200" y1="160" x2="200" y2="195" stroke="#94a3b8" strokeWidth="2" />
      <line x1="240" y1="160" x2="300" y2="195" stroke="#94a3b8" strokeWidth="2" />

      {/* L3 switches */}
      <g>
        <rect x="380" y="260" width="120" height="50" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="440" y="290" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1d4ed8">L3 Switch</text>
      </g>

      {/* FW → L3 */}
      <line x1="250" y1="275" x2="380" y2="285" stroke="#94a3b8" strokeWidth="2" />

      {/* WEBFRONT-K appliance (yellow highlight) */}
      <g>
        <rect x="755" y="240" width="180" height="80" rx="10" fill="#fde047" stroke="#ca8a04" strokeWidth="3" />
        <text x="845" y="270" textAnchor="middle" fontSize="14" fontWeight="800" fill="#854d0e">WEBFRONT-K</text>
        <text x="845" y="288" textAnchor="middle" fontSize="10" fontWeight="700" fill="#854d0e">웹 방화벽 (WAF)</text>
        <text x="845" y="304" textAnchor="middle" fontSize="9" fontWeight="600" fill="#a16207">PIOLINK</text>
      </g>

      {/* HTTP arrow to WAF input continues to backend */}
      <line x1="845" y1="320" x2="845" y2="380" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrRed)" />
      <text x="860" y="355" fontSize="10" fontWeight="700" fill="#dc2626">HTTP</text>

      {/* Web Server farm (left, 4 servers) */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={150 + i * 70} y="380" width="55" height="80" rx="4" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
            <text x={177 + i * 70} y="415" textAnchor="middle" fontSize="20">🖥</text>
            <text x={177 + i * 70} y="445" textAnchor="middle" fontSize="9" fontWeight="700" fill="#475569">WS{i + 1}</text>
          </g>
        ))}
        <text x="290" y="485" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">Web Server Farm</text>
      </g>

      {/* L3 → Web Server lines */}
      <line x1="430" y1="310" x2="200" y2="380" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="440" y1="310" x2="270" y2="380" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="450" y1="310" x2="340" y2="380" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="460" y1="310" x2="410" y2="380" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Backend protected servers (right) */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={755 + i * 50} y="395" width="40" height="65" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x={775 + i * 50} y="425" textAnchor="middle" fontSize="16">🛡</text>
            <text x={775 + i * 50} y="445" textAnchor="middle" fontSize="8" fontWeight="700" fill="#15803d">Protected</text>
          </g>
        ))}
        <text x="845" y="485" textAnchor="middle" fontSize="11" fontWeight="800" fill="#15803d">Protected Web Servers</text>
      </g>

      {/* Bottom legend */}
      <rect x="20" y="510" width="960" height="35" rx="8" fill="#fffbeb" stroke="#fde68a" />
      <text x="500" y="533" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400e">
        부하분산 · SSL 오프로딩 · 이중화(HA) 구성 · L7 웹 보안
      </text>
    </svg>
  );
}

/* ──────────── 3. Mail-i (Hyboost) Network DLP ──────────── */
function MailiDiagram() {
  return (
    <svg viewBox="0 0 1000 580" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="350" y="20" width="300" height="40" rx="20" fill="#dbeafe" stroke="#93c5fd" />
      <text x="500" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1d4ed8">[ 시스템 구성도 ]</text>

      {/* 2 INTERNET clouds */}
      <ellipse cx="350" cy="110" rx="70" ry="32" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
      <text x="350" y="115" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1d4ed8">INTERNET</text>

      <ellipse cx="550" cy="110" rx="70" ry="32" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
      <text x="550" y="115" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1d4ed8">INTERNET</text>

      {/* 2 routers */}
      <g>
        <circle cx="350" cy="200" r="22" fill="#fff" stroke="#64748b" strokeWidth="2" />
        <text x="350" y="206" textAnchor="middle" fontSize="14">📡</text>
      </g>
      <g>
        <circle cx="550" cy="200" r="22" fill="#fff" stroke="#64748b" strokeWidth="2" />
        <text x="550" y="206" textAnchor="middle" fontSize="14">📡</text>
      </g>

      <line x1="350" y1="142" x2="350" y2="178" stroke="#94a3b8" strokeWidth="2" />
      <line x1="550" y1="142" x2="550" y2="178" stroke="#94a3b8" strokeWidth="2" />

      {/* 2 Firewalls */}
      <g>
        <rect x="310" y="245" width="80" height="60" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="350" y="280" textAnchor="middle" fontSize="11" fontWeight="800" fill="#991b1b">Firewall</text>
      </g>
      <g>
        <rect x="510" y="245" width="80" height="60" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="550" y="280" textAnchor="middle" fontSize="11" fontWeight="800" fill="#991b1b">Firewall</text>
      </g>
      <text x="240" y="280" fontSize="10" fontWeight="700" fill="#64748b">Firewall</text>

      <line x1="350" y1="222" x2="350" y2="245" stroke="#94a3b8" strokeWidth="2" />
      <line x1="550" y1="222" x2="550" y2="245" stroke="#94a3b8" strokeWidth="2" />

      {/* 2 Backbone Switches */}
      <g>
        <rect x="290" y="335" width="120" height="60" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="350" y="365" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Backbone</text>
        <text x="350" y="380" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Switch</text>
      </g>
      <g>
        <rect x="490" y="335" width="120" height="60" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="550" y="365" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Backbone</text>
        <text x="550" y="380" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Switch</text>
      </g>
      <text x="200" y="370" fontSize="10" fontWeight="700" fill="#64748b">Backbone Switch</text>

      <line x1="350" y1="305" x2="350" y2="335" stroke="#94a3b8" strokeWidth="2" />
      <line x1="550" y1="305" x2="550" y2="335" stroke="#94a3b8" strokeWidth="2" />

      {/* TAP from switches to Hyboost */}
      <line x1="610" y1="365" x2="730" y2="365" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />
      <text x="670" y="358" textAnchor="middle" fontSize="9" fontWeight="700" fill="#059669">TAP</text>

      {/* 정보전송 기록관리 영역 box */}
      <g>
        <rect x="730" y="320" width="240" height="100" rx="10" fill="#fff" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" />
        <text x="850" y="345" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">정보전송 기록관리 영역</text>
        {/* Hyboost appliance */}
        <rect x="780" y="360" width="140" height="40" rx="6" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
        <text x="850" y="385" textAnchor="middle" fontSize="13" fontWeight="800" fill="#854d0e">Hyboost</text>
      </g>

      {/* User groups bottom */}
      {[
        { x: 230, label: "내부직원", icon: "👥" },
        { x: 430, label: "외부직원", icon: "👥" },
        { x: 630, label: "IT/DB 관리자", icon: "👨‍💼" },
      ].map((u) => (
        <g key={u.label}>
          <rect x={u.x} y="460" width="150" height="80" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
          <text x={u.x + 75} y="495" textAnchor="middle" fontSize="22">{u.icon}</text>
          <text x={u.x + 75} y="525" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">{u.label}</text>
        </g>
      ))}

      {/* Lines from backbone to users */}
      <line x1="305" y1="395" x2="305" y2="460" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="505" y1="395" x2="505" y2="460" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="600" y1="395" x2="700" y2="460" stroke="#94a3b8" strokeWidth="1.5" />
    </svg>
  );
}

/* ──────────── 4. WebKeeper SG ──────────── */
function WebkeeperDiagram() {
  return (
    <svg viewBox="0 0 1000 580" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="350" y="20" width="300" height="40" rx="20" fill="#dbeafe" stroke="#93c5fd" />
      <text x="500" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1d4ed8">[ 시스템 구성도 ]</text>

      {/* Internet cloud */}
      <ellipse cx="450" cy="110" rx="70" ry="32" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
      <text x="450" y="115" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1d4ed8">Internet</text>

      {/* Router */}
      <g>
        <circle cx="450" cy="190" r="24" fill="#fff" stroke="#64748b" strokeWidth="2" />
        <text x="450" y="196" textAnchor="middle" fontSize="14">📡</text>
        <text x="490" y="195" fontSize="10" fontWeight="700" fill="#64748b">Router</text>
      </g>
      <line x1="450" y1="142" x2="450" y2="166" stroke="#94a3b8" strokeWidth="2" />

      {/* Firewall (brick) */}
      <g>
        <rect x="410" y="235" width="80" height="55" rx="4" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
        <text x="450" y="268" textAnchor="middle" fontSize="11" fontWeight="800" fill="#991b1b">Firewall</text>
      </g>
      <line x1="450" y1="214" x2="450" y2="235" stroke="#94a3b8" strokeWidth="2" />

      {/* TAP point */}
      <g>
        <rect x="410" y="320" width="80" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
        <text x="450" y="345" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">TAP</text>
      </g>
      <line x1="450" y1="290" x2="450" y2="320" stroke="#94a3b8" strokeWidth="2" />

      {/* TAP → HyBoost */}
      <line x1="490" y1="340" x2="640" y2="340" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />
      <text x="565" y="332" textAnchor="middle" fontSize="9" fontWeight="700" fill="#059669">스니핑 방식의 네트워크 감시</text>

      {/* HyBoost for WebkeeperSG */}
      <g>
        <rect x="640" y="305" width="200" height="70" rx="10" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />
        <text x="740" y="332" textAnchor="middle" fontSize="13" fontWeight="800" fill="#854d0e">HyBoost</text>
        <text x="740" y="350" textAnchor="middle" fontSize="11" fontWeight="700" fill="#a16207">for WebkeeperSG™</text>
        <text x="740" y="366" textAnchor="middle" fontSize="9" fontWeight="600" fill="#a16207">소만사</text>
      </g>

      {/* Backbone Switch with X marks (blocking) */}
      <g>
        <rect x="290" y="395" width="120" height="55" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="350" y="423" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Backbone</text>
        <text x="350" y="438" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Switch (본사)</text>
        {/* X marks */}
        <line x1="305" y1="402" x2="318" y2="415" stroke="#dc2626" strokeWidth="2.5" />
        <line x1="318" y1="402" x2="305" y2="415" stroke="#dc2626" strokeWidth="2.5" />
      </g>
      <g>
        <rect x="490" y="395" width="120" height="55" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        <text x="550" y="423" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Backbone</text>
        <text x="550" y="438" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Switch (지사)</text>
        <line x1="505" y1="402" x2="518" y2="415" stroke="#dc2626" strokeWidth="2.5" />
        <line x1="518" y1="402" x2="505" y2="415" stroke="#dc2626" strokeWidth="2.5" />
      </g>

      <line x1="430" y1="360" x2="350" y2="395" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="470" y1="360" x2="550" y2="395" stroke="#94a3b8" strokeWidth="1.5" />

      {/* 유해사이트 차단 badge */}
      <g>
        <rect x="640" y="420" width="160" height="30" rx="15" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="720" y="440" textAnchor="middle" fontSize="11" fontWeight="800" fill="#b45309">⚠ 유해사이트 차단</text>
      </g>
      <text x="720" y="465" textAnchor="middle" fontSize="9" fontWeight="700" fill="#92400e">차단 안내 메시지 전송</text>

      {/* User groups bottom */}
      <g>
        <rect x="200" y="490" width="280" height="65" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="340" y="515" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">본사 사용자</text>
        {[0, 1, 2].map((i) => (
          <text key={i} x={250 + i * 60} y="545" textAnchor="middle" fontSize="20">💻</text>
        ))}
      </g>
      <g>
        <rect x="500" y="490" width="280" height="65" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <text x="640" y="515" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">지사 사용자</text>
        {[0, 1, 2].map((i) => (
          <text key={i} x={550 + i * 60} y="545" textAnchor="middle" fontSize="20">💻</text>
        ))}
      </g>

      <line x1="350" y1="450" x2="350" y2="490" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="550" y1="450" x2="550" y2="490" stroke="#94a3b8" strokeWidth="1.5" />
    </svg>
  );
}

/* ──────────── 5. Genian NAC ──────────── */
function GenianNacDiagram() {
  return (
    <svg viewBox="0 0 1000 560" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="20" y="20" width="280" height="40" rx="6" fill="#1e293b" />
      <text x="160" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">▌네트워크 접근 제어 (NAC)</text>

      {/* Cloud Policy Server (top left) */}
      <g>
        <ellipse cx="280" cy="120" rx="65" ry="32" fill="#fff" stroke="#7c3aed" strokeWidth="2" />
        <text x="280" y="115" textAnchor="middle" fontSize="11" fontWeight="800" fill="#6d28d9">aws</text>
        <text x="280" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6d28d9">Cloud Policy Server</text>
      </g>

      {/* DPI Cloud (top right) */}
      <g>
        <ellipse cx="520" cy="120" rx="65" ry="32" fill="#fff" stroke="#7c3aed" strokeWidth="2" />
        <text x="520" y="118" textAnchor="middle" fontSize="14">⚙</text>
        <text x="520" y="138" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6d28d9">DPI Cloud</text>
      </g>

      {/* Two zones */}
      {/* Cloud SMB zone */}
      <g>
        <rect x="40" y="180" width="380" height="200" rx="14" fill="#f5f3ff" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 4" />
        <rect x="60" y="170" width="120" height="24" rx="12" fill="#7c3aed" />
        <text x="120" y="187" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">Cloud: SMB</text>

        {/* Console */}
        <rect x="60" y="220" width="100" height="60" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="110" y="248" textAnchor="middle" fontSize="18">🖥</text>
        <text x="110" y="270" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6d28d9">Console</text>

        {/* Network Sensor */}
        <rect x="190" y="220" width="120" height="60" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="250" y="245" textAnchor="middle" fontSize="18">📡</text>
        <text x="250" y="265" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6d28d9">Network Sensor</text>

        {/* Devices */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={60 + i * 80} y="305" width="65" height="55" rx="4" fill="#fff" stroke="#94a3b8" />
            <text x={92 + i * 80} y="340" textAnchor="middle" fontSize="20">
              {["💻", "📱", "🖨", "📷"][i]}
            </text>
          </g>
        ))}
      </g>

      {/* On-Premise Enterprise zone */}
      <g>
        <rect x="440" y="180" width="500" height="200" rx="14" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 4" />
        <rect x="460" y="170" width="200" height="24" rx="12" fill="#5b21b6" />
        <text x="560" y="187" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">On-Premise: Enterprise</text>

        {/* Network Sensor */}
        <rect x="460" y="220" width="100" height="60" rx="6" fill="#fff" stroke="#5b21b6" strokeWidth="1.5" />
        <text x="510" y="245" textAnchor="middle" fontSize="18">📡</text>
        <text x="510" y="265" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5b21b6">Network Sensor</text>

        {/* Policy Server */}
        <rect x="580" y="220" width="120" height="60" rx="6" fill="#fff" stroke="#5b21b6" strokeWidth="1.5" />
        <text x="640" y="245" textAnchor="middle" fontSize="18">🗄</text>
        <text x="640" y="265" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5b21b6">Policy Server</text>

        {/* Console */}
        <rect x="720" y="220" width="100" height="60" rx="6" fill="#fff" stroke="#5b21b6" strokeWidth="1.5" />
        <text x="770" y="248" textAnchor="middle" fontSize="18">🖥</text>
        <text x="770" y="270" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5b21b6">Console</text>

        {/* Devices */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x={460 + i * 95} y="305" width="80" height="55" rx="4" fill="#fff" stroke="#94a3b8" />
            <text x={500 + i * 95} y="340" textAnchor="middle" fontSize="20">
              {["💻", "📱", "🖨", "📺", "📡"][i]}
            </text>
          </g>
        ))}
      </g>

      {/* Cloud → zones lines */}
      <line x1="280" y1="152" x2="280" y2="180" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="520" y1="152" x2="640" y2="180" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Bottom legend */}
      <g>
        <rect x="40" y="410" width="900" height="130" rx="10" fill="#faf5ff" stroke="#e9d5ff" />
        <text x="60" y="438" fontSize="12" fontWeight="800" fill="#5b21b6">① Policy Server &amp; Console (정책서버 &amp; 콘솔)</text>
        <text x="80" y="456" fontSize="10" fontWeight="600" fill="#64748b">유무선 네트워크를 통합 관리하고 내부 보안을 강화할 수 있도록 지원</text>
        <text x="60" y="478" fontSize="12" fontWeight="800" fill="#5b21b6">② Network Sensor (차단센서)</text>
        <text x="80" y="496" fontSize="10" fontWeight="600" fill="#64748b">유무선 단말에 대한 정보를 수집하고 강력한 통제 수행</text>
        <text x="60" y="518" fontSize="12" fontWeight="800" fill="#5b21b6">③ Agent (에이전트)</text>
        <text x="80" y="536" fontSize="10" fontWeight="600" fill="#64748b">PC 자산 관리 및 장치 사용 통제, 에이전트 설치에 따른 비용 부담 없음 (선택적 사용)</text>
      </g>
    </svg>
  );
}

/* ──────────── 6. NETAND HIWARE ──────────── */
function HiwareDiagram() {
  return (
    <svg viewBox="0 0 1000 580" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="350" y="20" width="300" height="40" rx="20" fill="#ede9fe" stroke="#c4b5fd" />
      <text x="500" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#5b21b6">[ HIWARE 구성도 ]</text>

      {/* HIWARE outer label */}
      <rect x="170" y="85" width="660" height="280" rx="12" fill="#faf5ff" stroke="#a78bfa" strokeWidth="2" />
      <rect x="190" y="75" width="220" height="24" rx="12" fill="#5b21b6" />
      <text x="300" y="92" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">서버 계정관리 및 접근통제 시스템</text>

      <rect x="430" y="75" width="120" height="24" rx="12" fill="#7c3aed" />
      <text x="490" y="92" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">HIWARE</text>

      {/* 6 modules around the center */}
      {/* Top row */}
      {[
        { x: 200, y: 115, label: "Admin", desc: "사용자관리\n계정관리\n비밀번호정책" },
        { x: 320, y: 115, label: "계정 관리", desc: "계정생성/삭제\n계정주기관리\n계정그룹관리\n로그 및 감사" },
        { x: 440, y: 115, label: "접근 제어", desc: "프로토콜 통제\n사용자 접근관리\n관리자 IP/MAC관리" },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width="100" height="100" rx="6" fill="#fff" stroke="#a78bfa" strokeWidth="1.5" />
          <rect x={m.x} y={m.y} width="100" height="22" rx="6" fill="#a78bfa" />
          <text x={m.x + 50} y={m.y + 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">{m.label}</text>
          {m.desc.split("\n").map((line, i) => (
            <text key={i} x={m.x + 50} y={m.y + 38 + i * 13} textAnchor="middle" fontSize="9" fontWeight="600" fill="#64748b">
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* Bottom row */}
      {[
        { x: 200, y: 235, label: "사용자 관리", desc: "사용자 계정관리\n사용자권한관리\n사용자히스토리" },
        { x: 320, y: 235, label: "Self-service", desc: "패스워드 변경\n권한신청 관리\n승인내역 관리" },
        { x: 440, y: 235, label: "협력업체 관리", desc: "협력업체 계정\n업체별권한 관리" },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width="100" height="100" rx="6" fill="#fff" stroke="#a78bfa" strokeWidth="1.5" />
          <rect x={m.x} y={m.y} width="100" height="22" rx="6" fill="#a78bfa" />
          <text x={m.x + 50} y={m.y + 16} textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">{m.label}</text>
          {m.desc.split("\n").map((line, i) => (
            <text key={i} x={m.x + 50} y={m.y + 38 + i * 13} textAnchor="middle" fontSize="9" fontWeight="600" fill="#64748b">
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* 통합계정관리시스템 이중화 (right of modules) */}
      <g>
        {/* Two stacked DB icons */}
        <ellipse cx="640" cy="170" rx="42" ry="14" fill="#fff" stroke="#5b21b6" strokeWidth="2" />
        <rect x="598" y="170" width="84" height="60" fill="#fff" stroke="#5b21b6" strokeWidth="2" />
        <ellipse cx="640" cy="230" rx="42" ry="14" fill="#fff" stroke="#5b21b6" strokeWidth="2" />
        <line x1="598" y1="170" x2="598" y2="230" stroke="#5b21b6" strokeWidth="2" />
        <line x1="682" y1="170" x2="682" y2="230" stroke="#5b21b6" strokeWidth="2" />

        <ellipse cx="700" cy="200" rx="42" ry="14" fill="#fff" stroke="#5b21b6" strokeWidth="2" />
        <rect x="658" y="200" width="84" height="60" fill="#fff" stroke="#5b21b6" strokeWidth="2" />
        <ellipse cx="700" cy="260" rx="42" ry="14" fill="#fff" stroke="#5b21b6" strokeWidth="2" />
        <line x1="658" y1="200" x2="658" y2="260" stroke="#5b21b6" strokeWidth="2" />
        <line x1="742" y1="200" x2="742" y2="260" stroke="#5b21b6" strokeWidth="2" />

        <text x="670" y="305" textAnchor="middle" fontSize="10" fontWeight="800" fill="#5b21b6">통합계정관리시스템</text>
        <text x="670" y="320" textAnchor="middle" fontSize="10" fontWeight="800" fill="#5b21b6">이중화 구성</text>
      </g>

      {/* 대상 장비 (right side) */}
      <g>
        <text x="870" y="100" fontSize="11" fontWeight="800" fill="#0f172a">대상 장비</text>

        <rect x="810" y="115" width="120" height="50" rx="4" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
        <text x="830" y="143" fontSize="18">🐧</text>
        <text x="900" y="146" textAnchor="end" fontSize="11" fontWeight="700" fill="#0f172a">Linux</text>

        <rect x="810" y="180" width="120" height="50" rx="4" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
        <text x="830" y="208" fontSize="18">⚙</text>
        <text x="900" y="211" textAnchor="end" fontSize="11" fontWeight="700" fill="#0f172a">Unix</text>

        <rect x="810" y="245" width="120" height="50" rx="4" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
        <text x="830" y="273" fontSize="18">🪟</text>
        <text x="900" y="276" textAnchor="end" fontSize="11" fontWeight="700" fill="#0f172a">Win Server</text>
      </g>

      {/* HIWARE → 대상장비 lines */}
      <line x1="745" y1="200" x2="810" y2="140" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />
      <line x1="745" y1="230" x2="810" y2="205" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />
      <line x1="745" y1="260" x2="810" y2="270" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />

      {/* 연동 장비 (bottom row) */}
      <text x="500" y="405" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">▼ 연동 장비</text>
      {[
        { x: 180, label: "SMS/E-mail", icon: "📨" },
        { x: 340, label: "전자결재", icon: "📋" },
        { x: 500, label: "RSA-OTP", icon: "🔑" },
        { x: 660, label: "HR", icon: "👥" },
      ].map((d) => (
        <g key={d.label}>
          <rect x={d.x} y="425" width="140" height="60" rx="6" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
          <text x={d.x + 35} y="465" textAnchor="middle" fontSize="22">{d.icon}</text>
          <text x={d.x + 90} y="460" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">{d.label}</text>
        </g>
      ))}

      {/* HIWARE → 연동장비 line */}
      <line x1="500" y1="365" x2="500" y2="425" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />

      {/* Bottom legend */}
      <rect x="20" y="510" width="960" height="40" rx="8" fill="#faf5ff" stroke="#e9d5ff" />
      <text x="500" y="528" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5b21b6">계정 Life-cycle 관리 · 명령어 통제 · 컴플라이언스 감사</text>
      <text x="500" y="544" textAnchor="middle" fontSize="9" fontWeight="600" fill="#64748b">HR · 전자결재 시스템 연동으로 사용자 변경사항 자동 반영</text>
    </svg>
  );
}
