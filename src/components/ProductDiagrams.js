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
  "ta-prs": TaPrsDiagram,
  "gaaiho-pdf": GaaihoPdfDiagram,
  "xsecuritas": XSecuritasDiagram,
  "qradar": QRadarDiagram,
  "dbsafer": DbSaferDiagram,
  "uprint": UPrintDiagram,
  "acronis": AcronisDiagram,
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

/* ──────────── 7. TA-PRS / TA-FDM (PMS) ──────────── */
function TaPrsDiagram() {
  return (
    <svg viewBox="0 0 1000 600" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title strip */}
      <text x="500" y="40" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0f172a">
        자동화된 패치관리시스템(PMS) 구축으로
      </text>
      <text x="500" y="68" textAnchor="middle" fontSize="20" fontWeight="800" fill="#dc2626">
        전사적인 보안 수준 강화
      </text>

      {/* Center upward arrow split into top "보안사고 최소화" and bottom "운영의 편의성 제고" */}
      <g>
        {/* Outer arrow shape pointing up */}
        <path
          d="M 430 250 L 430 360 L 380 360 L 500 240 L 620 360 L 570 360 L 570 250 Z"
          fill="#bfdbfe"
          stroke="#60a5fa"
          strokeWidth="2"
        />
        <text x="500" y="295" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">보안사고</text>
        <text x="500" y="315" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1e3a8a">최소화</text>

        {/* Bottom darker block — 운영 편의성 */}
        <rect x="430" y="370" width="140" height="100" rx="6" fill="#1e3a8a" />
        <text x="500" y="408" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">운영의</text>
        <text x="500" y="428" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">편의성 제고</text>
      </g>

      {/* Dotted divider lines (decorative dots) */}
      {[...Array(8)].map((_, i) => (
        <circle key={`l${i}`} cx={345} cy={250 + i * 28} r="2.5" fill="#cbd5e1" />
      ))}
      {[...Array(8)].map((_, i) => (
        <circle key={`r${i}`} cx={655} cy={250 + i * 28} r="2.5" fill="#cbd5e1" />
      ))}

      {/* ── Left card: 패치 자동/강제 설치 + 현황 수집 ── */}
      <g>
        <rect x="40" y="220" width="290" height="320" rx="14" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
        {/* Header bullets */}
        <text x="60" y="250" fontSize="12" fontWeight="800" fill="#1e3a8a">▪ 패치 자동/강제 설치 및 업데이트</text>
        <text x="60" y="272" fontSize="12" fontWeight="800" fill="#1e3a8a">▪ 현황 수집 및 통계</text>

        {/* Item 01 */}
        <text x="60" y="320" fontSize="32" fontWeight="800" fill="#bfdbfe">01</text>
        <text x="115" y="312" fontSize="11" fontWeight="700" fill="#0f172a">운영체제 및 어플리케이션에 대한</text>
        <text x="115" y="328" fontSize="11" fontWeight="700" fill="#0f172a">자동화된 패치관리로 각종 취약점을</text>
        <text x="115" y="344" fontSize="11" fontWeight="700" fill="#0f172a">제거하고 보안수준을 강화</text>

        {/* Item 02 */}
        <text x="60" y="430" fontSize="32" fontWeight="800" fill="#bfdbfe">02</text>
        <text x="115" y="418" fontSize="11" fontWeight="700" fill="#0f172a">해킹, 자료유출 방지 등 PC보호로</text>
        <text x="115" y="434" fontSize="11" fontWeight="700" fill="#0f172a">보안사고 최소화 및 각종 악성코드 및</text>
        <text x="115" y="450" fontSize="11" fontWeight="700" fill="#0f172a">좀비PC로 인한 트래픽 발생방지와</text>
        <text x="115" y="466" fontSize="11" fontWeight="700" fill="#0f172a">네트워크 가용성 확보</text>
      </g>

      {/* ── Right card: 최소인원 최대효율 + 친화력 ── */}
      <g>
        <rect x="670" y="220" width="290" height="320" rx="14" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
        <text x="690" y="250" fontSize="12" fontWeight="800" fill="#1e3a8a">▪ 최소인원을 통한 최대 효율 달성</text>
        <text x="690" y="272" fontSize="12" fontWeight="800" fill="#1e3a8a">▪ 기존 환경과의 친화력 극대화</text>

        {/* Item 01 */}
        <text x="690" y="320" fontSize="32" fontWeight="800" fill="#bfdbfe">01</text>
        <text x="745" y="312" fontSize="11" fontWeight="700" fill="#0f172a">조직 전반에 걸친 일관성 있는</text>
        <text x="745" y="328" fontSize="11" fontWeight="700" fill="#0f172a">패치관리정책 수립 및 운용</text>

        {/* Item 02 */}
        <text x="690" y="395" fontSize="32" fontWeight="800" fill="#bfdbfe">02</text>
        <text x="745" y="387" fontSize="11" fontWeight="700" fill="#0f172a">최소한의 인력을 통한 운영 효율성</text>
        <text x="745" y="403" fontSize="11" fontWeight="700" fill="#0f172a">극대화</text>

        {/* Item 03 */}
        <text x="690" y="470" fontSize="32" fontWeight="800" fill="#bfdbfe">03</text>
        <text x="745" y="462" fontSize="11" fontWeight="700" fill="#0f172a">중앙 집중적인 관제를 통한</text>
        <text x="745" y="478" fontSize="11" fontWeight="700" fill="#0f172a">총괄적인 관리</text>
      </g>

      {/* Bottom legend */}
      <rect x="20" y="560" width="960" height="32" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="500" y="581" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1e3a8a">
        Windows PC · 서버 OS · 어플리케이션 · 백신 통합 패치 자동 배포
      </text>
    </svg>
  );
}

/* ──────────── 8. Gaaiho PDF Suite ──────────── */
function GaaihoPdfDiagram() {
  const blocks = [
    {
      x: 80,
      topColor: "#ea580c",
      topLabel1: "PDF",
      topLabel2: "READER",
      bottomLabel1: "PDF",
      bottomLabel2: "강력한 편집",
    },
    {
      x: 380,
      topColor: "#16a34a",
      topLabel1: "PDF Converter",
      topLabel2: "(다양한 PDF 생성)",
      bottomLabel1: "PDF Manager",
      bottomLabel2: "(편리한 PDF 관리)",
    },
    {
      x: 680,
      topColor: "#2563eb",
      topLabel1: "PDF OCR",
      topLabel2: "(광학문자인식)",
      bottomLabel1: "Cloud 연결 · 음성읽기",
      bottomLabel2: "주석 · Office · 디지털서명",
    },
  ];

  return (
    <svg viewBox="0 0 1000 600" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* 3 stacked color blocks */}
      {blocks.map((b, i) => (
        <g key={i}>
          {/* Top colored half — drawn as a parallelogram-like shape with diagonal cut */}
          <path
            d={`M ${b.x} 30 L ${b.x + 240} 30 L ${b.x + 240} 220 L ${b.x} 270 Z`}
            fill={b.topColor}
          />
          <text x={b.x + 120} y="125" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">
            {b.topLabel1}
          </text>
          <text x={b.x + 120} y="155" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
            {b.topLabel2}
          </text>

          {/* Bottom grey half — opposite diagonal */}
          <path
            d={`M ${b.x} 270 L ${b.x + 240} 220 L ${b.x + 240} 380 L ${b.x} 380 Z`}
            fill="#9ca3af"
          />
          <text x={b.x + 120} y="320" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff">
            {b.bottomLabel1}
          </text>
          <text x={b.x + 120} y="345" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
            {b.bottomLabel2}
          </text>
        </g>
      ))}

      {/* Legend section */}
      <g>
        <text x="80" y="430" fontSize="14" fontWeight="800" fill="#ea580c">
          1. Gaaiho PDF DOC
        </text>
        <text x="245" y="430" fontSize="12" fontWeight="600" fill="#0f172a">
          : PDF 문서 편집 등 대부분의 기능을 구현하는 어플리케이션 프로그램
        </text>

        <text x="80" y="465" fontSize="14" fontWeight="800" fill="#16a34a">
          2. Gaaiho PDF Converter
        </text>
        <text x="100" y="487" fontSize="12" fontWeight="600" fill="#0f172a">
          PDF 다양한 생성기능 (병합, 분할, 대량변환)
        </text>
        <text x="100" y="507" fontSize="12" fontWeight="600" fill="#0f172a">
          PDF 역변환 기능 제공 (워드형식, 엑셀형식 등의 문서변환)
        </text>

        <text x="80" y="540" fontSize="14" fontWeight="800" fill="#2563eb">
          3. Gaaiho PDF Manager
        </text>
        <text x="280" y="540" fontSize="12" fontWeight="600" fill="#0f172a">
          : PC에 있는 PDF 문서의 탐색, 관리 등
        </text>
      </g>

      {/* Bottom note */}
      <rect x="20" y="565" width="960" height="28" rx="8" fill="#f1f5f9" stroke="#cbd5e1" />
      <text x="500" y="584" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">
        Reader · Editor · Converter · Manager · OCR — 통합 PDF 솔루션
      </text>
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

/* ──────────── 9. xSecuritas Screen Watermark ──────────── */
function XSecuritasDiagram() {
  return (
    <svg viewBox="0 0 1000 580" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Top description */}
      <text x="20" y="30" fontSize="11" fontWeight="700" fill="#0f172a">
        화면 캡처, 동영상 캡처, 스마트폰·카메라 등의 유출 및 출력 자료, 이메일, 외장장치, SNS 등
      </text>
      <text x="20" y="48" fontSize="11" fontWeight="700" fill="#0f172a">
        다양한 경로를 통해 소중한 기업 정보가 유출되는 사건이 급증하고 있어
      </text>
      <text x="20" y="66" fontSize="11" fontWeight="700" fill="#dc2626">
        정보가 처음으로 노출되는 PC 화면부터 관리 필요성이 제기되고 있습니다.
      </text>

      {/* Left: product box artwork */}
      <g>
        <rect x="40" y="100" width="180" height="220" rx="6" fill="#1e3a8a" />
        <rect x="55" y="115" width="150" height="80" rx="3" fill="#1e40af" />
        <text x="130" y="145" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">xSecuritas Screen</text>
        <text x="130" y="160" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">Watermark</text>
        <text x="130" y="180" textAnchor="middle" fontSize="9" fontWeight="700" fill="#bfdbfe">Enterprise v5.3</text>
        {/* Disc circle */}
        <circle cx="130" cy="250" r="45" fill="#1e40af" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="130" cy="250" r="20" fill="#1e3a8a" />
        <circle cx="130" cy="250" r="6" fill="#1e40af" />
        <text x="130" y="310" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">SOLMO</text>
      </g>

      {/* GS certificate label */}
      <rect x="40" y="335" width="180" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" />
      <text x="130" y="354" textAnchor="middle" fontSize="11" fontWeight="800" fill="#b45309">GS 1등급 (Good Software)</text>

      {/* Right purple flow zone */}
      <rect x="270" y="100" width="710" height="270" rx="14" fill="#faf5ff" stroke="#a78bfa" strokeWidth="2" />

      {/* Web page + Security layer */}
      <g>
        <rect x="295" y="170" width="90" height="70" rx="6" fill="#fff" stroke="#94a3b8" />
        <text x="340" y="200" textAnchor="middle" fontSize="20">🖥</text>
        <text x="340" y="225" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0f172a">웹페이지</text>
      </g>

      <text x="402" y="210" fontSize="20" fontWeight="800" fill="#7c3aed">+</text>

      <g>
        <rect x="420" y="170" width="100" height="70" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="2" />
        <text x="470" y="195" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5b21b6">SecuritySecurity</text>
        <text x="470" y="207" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5b21b6">SecuritySecurity</text>
        <text x="470" y="219" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5b21b6">SecuritySecurity</text>
        <text x="470" y="232" textAnchor="middle" fontSize="9" fontWeight="700" fill="#0f172a">보안레이어</text>
      </g>

      {/* Branch arrows */}
      <line x1="525" y1="180" x2="610" y2="135" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrSlate)" />
      <line x1="525" y1="225" x2="610" y2="270" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrSlate)" />

      {/* Top branch: 특정 페이지/창 보안 */}
      <g>
        <rect x="610" y="105" width="120" height="60" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="670" y="130" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5b21b6">특정 페이지/</text>
        <text x="670" y="145" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5b21b6">창에 대한 보안</text>
      </g>

      {/* Bottom branch: 디스플레이 전체 보안 */}
      <g>
        <rect x="610" y="240" width="120" height="60" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="670" y="265" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5b21b6">디스플레이</text>
        <text x="670" y="280" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5b21b6">전체에 대한 보안</text>
      </g>

      {/* 화면촬영 */}
      <line x1="730" y1="135" x2="785" y2="180" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrSlate)" />
      <line x1="730" y1="270" x2="785" y2="225" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrSlate)" />

      <g>
        <rect x="785" y="170" width="80" height="70" rx="6" fill="#fff" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="825" y="200" textAnchor="middle" fontSize="22">📷</text>
        <text x="825" y="225" textAnchor="middle" fontSize="10" fontWeight="800" fill="#5b21b6">화면촬영</text>
      </g>

      <line x1="865" y1="205" x2="900" y2="205" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arrSlate)" />

      <g>
        <rect x="900" y="160" width="75" height="90" rx="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="937" y="190" textAnchor="middle" fontSize="20">🖼</text>
        <text x="937" y="215" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5b21b6">촬영이미지에</text>
        <text x="937" y="228" textAnchor="middle" fontSize="9" fontWeight="800" fill="#5b21b6">보안정보 표시</text>
      </g>

      {/* 정책개념 label */}
      <text x="40" y="410" fontSize="14" fontWeight="800" fill="#dc2626">정책개념</text>
      <line x1="40" y1="420" x2="980" y2="420" stroke="#dc2626" strokeWidth="1.5" />

      {/* 4 hexagon policy items */}
      {[
        { x: 70, label1: "Web", label2: "Console", label3: "을 이용한", label4: "정책 관리", desc: "관리자는 그룹/사용자에게 배포할 워터마크 정책을 Web Console로 작성" },
        { x: 320, label1: "USER별로", label2: "동일 정책,", label3: "그룹별 정책", label4: "모두 가능", desc: "모든 사용자에게 동일 정책 또는 그룹/사용자별 각각의 정책 적용" },
        { x: 570, label1: "Agent", label2: "작동유무", label3: "와 무관한", label4: "워터마크 표시", desc: "에이전트 프로그램이 실행 중이어도 정책에 따라 워터마크 표시 유무 결정" },
        { x: 820, label1: "Agent", label2: "접속여부", label3: "에 따른", label4: "정책 수립", desc: "AD, SSO 또는 에이전트 프로그램 로그온 때 적용 받는 정책 설정 가능" },
      ].map((p, i) => (
        <g key={i}>
          {/* Hexagon */}
          <polygon
            points={`${p.x + 35},435 ${p.x + 70},455 ${p.x + 70},495 ${p.x + 35},515 ${p.x},495 ${p.x},455`}
            fill="#a78bfa"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          <text x={p.x + 35} y={460} textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">{p.label1}</text>
          <text x={p.x + 35} y={472} textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">{p.label2}</text>
          <text x={p.x + 35} y={484} textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">{p.label3}</text>
          <text x={p.x + 35} y={496} textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">{p.label4}</text>

          {/* Description text */}
          <foreignObject x={p.x + 75} y={440} width={i === 3 ? 155 : 165} height={75}>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#475569", lineHeight: 1.4, fontFamily: "inherit" }}>
              {p.desc}
            </div>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
}

/* ──────────── 10. IBM QRadar SIEM ──────────── */
function QRadarDiagram() {
  return (
    <svg viewBox="0 0 1000 580" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />
      <defs>
        <linearGradient id="qradarFunnel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="500" y="30" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0f172a">
        차세대 SIEM — 정밀한 상관관계 분석 및 컴플라이언스 관리
      </text>

      {/* ── LEFT: 확장된 데이터 소스 ── */}
      <rect x="40" y="60" width="200" height="460" rx="14" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="140" y="85" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1d4ed8">확장된 데이터 소스</text>

      {[
        { y: 110, icon: "🛡", label: "보안 디바이스" },
        { y: 165, icon: "🖥", label: "서버와 메인프레임" },
        { y: 220, icon: "🌐", label: "네트워크 및 가상 활동" },
        { y: 275, icon: "🗄", label: "데이터 활동" },
        { y: 330, icon: "📦", label: "어플리케이션 활동" },
        { y: 385, icon: "⚙", label: "구성 정보" },
        { y: 440, icon: "⚠", label: "취약성과 위협" },
        { y: 495, icon: "👤", label: "사용자와 Identity" },
      ].map((d, i) => (
        <g key={i}>
          <circle cx="80" cy={d.y} r="18" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="80" y={d.y + 6} textAnchor="middle" fontSize="16">{d.icon}</text>
          <text x="110" y={d.y + 5} fontSize="10" fontWeight="700" fill="#1d4ed8">{d.label}</text>
        </g>
      ))}

      {/* ── CENTER: Funnel (gradient triangle pointing right) ── */}
      <g>
        <polygon
          points="270,100 720,260 270,420"
          fill="url(#qradarFunnel)"
          stroke="#7c3aed"
          strokeWidth="2"
        />
        <text x="430" y="200" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">자동화된</text>
        <text x="430" y="220" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">위반행위</text>
        <text x="430" y="240" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">식별</text>

        <text x="510" y="290" fontSize="10" fontWeight="700" fill="#fff">대규모의 데이터 축소</text>
        <text x="510" y="310" fontSize="10" fontWeight="700" fill="#fff">자동화된 데이터 수집·자산 발견과</text>
        <text x="510" y="324" fontSize="10" fontWeight="700" fill="#fff">프로파일링</text>
        <text x="510" y="344" fontSize="10" fontWeight="700" fill="#fff">실시간 자동화된 통합 Analytics</text>
      </g>

      {/* ── RIGHT: 우선순위별 인시던트 + monitor ── */}
      <g>
        {/* Red incident badge */}
        <ellipse cx="800" cy="220" rx="80" ry="32" fill="#dc2626" />
        <text x="800" y="218" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">우선순위 별</text>
        <text x="800" y="234" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">인시던트</text>

        {/* Arrow from funnel to badge */}
        <line x1="720" y1="260" x2="800" y2="252" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrRed)" />

        {/* Suspicious incident label */}
        <text x="870" y="160" fontSize="10" fontWeight="700" fill="#64748b">의심스러운</text>
        <text x="870" y="175" fontSize="10" fontWeight="700" fill="#64748b">인시던트</text>
        <text x="870" y="195" fontSize="20">🕵</text>

        {/* Monitor with charts */}
        <rect x="730" y="290" width="160" height="100" rx="6" fill="#fff" stroke="#0f172a" strokeWidth="2" />
        <rect x="740" y="300" width="140" height="80" fill="#f1f5f9" />
        {/* Mini chart bars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={750 + i * 25} y={340 - i * 8} width="15" height={30 + i * 8} fill="#3b82f6" />
        ))}
        {/* Monitor stand */}
        <rect x="795" y="390" width="30" height="10" fill="#0f172a" />
        <rect x="780" y="400" width="60" height="6" rx="2" fill="#0f172a" />
      </g>

      {/* 내재된 인텔리전스 */}
      <g>
        <rect x="730" y="430" width="200" height="60" rx="10" fill="#1e3a8a" />
        <text x="830" y="460" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">내재된 인텔리전스</text>
        <text x="830" y="478" textAnchor="middle" fontSize="9" fontWeight="600" fill="#bfdbfe">활동 기준선 + 비정상 탐지</text>
      </g>

      {/* Bottom note */}
      <rect x="20" y="540" width="960" height="32" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="500" y="561" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">
        포괄적 상관관계 분석 · 실시간 통합 Analytics · 컴플라이언스 자동화
      </text>
    </svg>
  );
}

/* ──────────── 11. DBSafer ──────────── */
function DbSaferDiagram() {
  return (
    <svg viewBox="0 0 1000 560" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="350" y="20" width="300" height="40" rx="20" fill="#dbeafe" stroke="#93c5fd" />
      <text x="500" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1d4ed8">[ 시스템 구성도 ]</text>

      {/* ── LEFT: User clients ── */}
      <g>
        <rect x="60" y="100" width="160" height="80" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="100" y="148" textAnchor="middle" fontSize="32">💻</text>
        <text x="180" y="135" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">WINDOWS</text>
        <text x="180" y="152" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">사용자</text>
        <text x="180" y="170" textAnchor="middle" fontSize="20">👤</text>
      </g>

      <g>
        <rect x="60" y="210" width="160" height="80" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="100" y="258" textAnchor="middle" fontSize="32">💻</text>
        <text x="180" y="245" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">Mac OS</text>
        <text x="180" y="262" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">사용자</text>
        <text x="180" y="280" textAnchor="middle" fontSize="20">👤</text>
      </g>

      <g>
        <rect x="60" y="380" width="160" height="80" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="100" y="428" textAnchor="middle" fontSize="32">💻</text>
        <text x="180" y="425" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">사용자</text>
        <text x="180" y="450" textAnchor="middle" fontSize="20">👤</text>
      </g>

      {/* WAS (small middle box) */}
      <g>
        <rect x="280" y="370" width="100" height="100" rx="6" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
        <text x="330" y="410" textAnchor="middle" fontSize="20">🗃</text>
        <text x="330" y="445" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9a3412">WAS</text>
        <text x="330" y="462" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9a3412">User Tracer</text>
      </g>

      {/* User → DBSAFER lines */}
      <line x1="220" y1="140" x2="430" y2="240" stroke="#3b82f6" strokeWidth="2" />
      <line x1="220" y1="250" x2="430" y2="260" stroke="#3b82f6" strokeWidth="2" />
      <line x1="220" y1="420" x2="280" y2="420" stroke="#3b82f6" strokeWidth="2" />
      <line x1="380" y1="420" x2="430" y2="290" stroke="#3b82f6" strokeWidth="2" />

      {/* ── CENTER: DBSAFER appliance ── */}
      <g>
        <rect x="430" y="180" width="180" height="160" rx="14" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth="2" />
        {/* Server icon */}
        <rect x="490" y="220" width="60" height="80" rx="4" fill="#fff" />
        <line x1="500" y1="235" x2="540" y2="235" stroke="#1e3a8a" strokeWidth="2" />
        <line x1="500" y1="250" x2="540" y2="250" stroke="#1e3a8a" strokeWidth="2" />
        <line x1="500" y1="265" x2="540" y2="265" stroke="#1e3a8a" strokeWidth="2" />
        <line x1="500" y1="280" x2="540" y2="280" stroke="#1e3a8a" strokeWidth="2" />
        <text x="520" y="320" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">DBSAFER DB</text>
      </g>

      {/* ── RIGHT: DBMS group (cyan circle area) ── */}
      <g>
        <ellipse cx="820" cy="220" rx="160" ry="120" fill="#cffafe" stroke="#06b6d4" strokeWidth="2" />
        <text x="900" y="115" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0369a1">상용 DBMS</text>

        {/* Oracle */}
        <ellipse cx="850" cy="160" rx="32" ry="10" fill="#fff" stroke="#dc2626" strokeWidth="1.5" />
        <text x="850" y="164" textAnchor="middle" fontSize="9" fontWeight="800" fill="#dc2626">ORACLE</text>

        {/* SQL Server */}
        <ellipse cx="900" cy="200" rx="40" ry="10" fill="#fff" stroke="#dc2626" strokeWidth="1.5" />
        <text x="900" y="204" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0f172a">SQL Server</text>

        {/* Sybase IQ */}
        <ellipse cx="870" cy="240" rx="40" ry="10" fill="#fff" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="870" y="244" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0369a1">Sybase IQ</text>

        {/* MySQL */}
        <ellipse cx="820" cy="280" rx="32" ry="10" fill="#fff" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="820" y="284" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0369a1">MySQL</text>

        {/* Server Agent label */}
        <rect x="730" y="135" width="80" height="22" rx="11" fill="#fbbf24" />
        <text x="770" y="151" textAnchor="middle" fontSize="9" fontWeight="800" fill="#78350f">Server Agent</text>
      </g>

      {/* DBSAFER → DBMS line */}
      <line x1="610" y1="260" x2="700" y2="220" stroke="#1d4ed8" strokeWidth="2.5" markerEnd="url(#arrBlue)" />

      {/* Security admin (bottom) */}
      <g>
        <rect x="540" y="400" width="160" height="100" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="580" y="450" textAnchor="middle" fontSize="32">👨‍💼</text>
        <text x="650" y="445" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5b21b6">보안</text>
        <text x="650" y="463" textAnchor="middle" fontSize="11" fontWeight="800" fill="#5b21b6">관리자</text>
      </g>

      <line x1="520" y1="340" x2="620" y2="400" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />

      {/* Bottom legend */}
      <rect x="20" y="520" width="960" height="32" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="500" y="541" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">
        Gateway 방식 · 스니핑 · 서버 에이전트 또는 하이브리드 구성
      </text>
    </svg>
  );
}

/* ──────────── 12. Sindoh uPrint ──────────── */
function UPrintDiagram() {
  return (
    <svg viewBox="0 0 1000 580" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="350" y="20" width="300" height="40" rx="20" fill="#dbeafe" stroke="#93c5fd" />
      <text x="500" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1d4ed8">[ 시스템 구성도 ]</text>

      {/* ── LEFT: 8층 사용자 PC + 관리자 ── */}
      <g>
        <rect x="40" y="100" width="160" height="120" rx="8" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="120" y="160" textAnchor="middle" fontSize="44">💻</text>
        <text x="120" y="195" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0f172a">8층 사무실</text>
        <text x="120" y="210" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748b">(사용자 PC)</text>
      </g>

      {/* Animated dot trail (SPOOL DATA) */}
      {[0, 1, 2].map((i) => (
        <circle key={`s${i}`} cx="240" cy={150 + i * 12} r="2.5" fill="#94a3b8" />
      ))}
      <text x="260" y="170" fontSize="10" fontWeight="700" fill="#64748b">SPOOL DATA</text>

      {/* 관리자 모니터링 */}
      <g>
        <rect x="40" y="240" width="160" height="100" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="120" y="290" textAnchor="middle" fontSize="32">🖥</text>
        <text x="120" y="320" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">관리자 (모니터링)</text>
      </g>

      {/* ── CENTER: Cloud Printing system ── */}
      <g>
        <rect x="350" y="190" width="160" height="180" rx="14" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
        {/* Cloud icon */}
        <ellipse cx="430" cy="225" rx="36" ry="16" fill="#fff" stroke="#2563eb" strokeWidth="1.5" />
        <text x="430" y="230" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Cloud</text>
        <text x="430" y="244" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1d4ed8">Printing</text>

        {/* 3 sub-modules */}
        <rect x="370" y="260" width="120" height="22" rx="3" fill="#fff" stroke="#94a3b8" />
        <text x="430" y="276" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">Web Service</text>

        <rect x="370" y="290" width="120" height="22" rx="3" fill="#fff" stroke="#94a3b8" />
        <text x="430" y="306" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">DB</text>

        <rect x="370" y="320" width="120" height="22" rx="3" fill="#fff" stroke="#94a3b8" />
        <text x="430" y="336" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">HTML</text>

        {/* User authentication note */}
        <text x="430" y="395" textAnchor="middle" fontSize="9" fontWeight="800" fill="#dc2626">사원증을 인증한</text>
        <text x="430" y="408" textAnchor="middle" fontSize="9" fontWeight="800" fill="#dc2626">복합기로 PRINT OUT</text>
      </g>

      {/* User → Cloud arrows */}
      <line x1="200" y1="160" x2="345" y2="220" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrSlate)" />
      <line x1="200" y1="290" x2="345" y2="290" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrSlate)" />

      {/* Trail dots from cloud to right */}
      {[0, 1, 2, 3].map((i) => (
        <text key={`tr${i}`} x={520 + i * 18} y="290" fontSize="14" fontWeight="800" fill="#dc2626">▸</text>
      ))}

      {/* ── RIGHT: 2 floors of MFP output ── */}
      {/* 10층 컬러 복합기 */}
      <g>
        <rect x="620" y="100" width="320" height="170" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
        {/* Color printer icon */}
        <rect x="640" y="120" width="80" height="80" rx="4" fill="#fff" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="650" y="130" width="60" height="20" fill="#0ea5e9" />
        <rect x="650" y="155" width="60" height="20" fill="#fbbf24" />
        <text x="680" y="220" textAnchor="middle" fontSize="9" fontWeight="800" fill="#92400e">10층 컬러 복합기</text>
        <text x="680" y="235" textAnchor="middle" fontSize="9" fontWeight="700" fill="#92400e">결과물 출력</text>

        {/* Document arrows */}
        {[0, 1, 2].map((i) => (
          <text key={`d10${i}`} x={745 + i * 14} y="160" fontSize="14" fontWeight="800" fill="#dc2626">▸</text>
        ))}

        {/* Output documents */}
        <rect x="800" y="120" width="50" height="65" rx="3" fill="#fff" stroke="#64748b" />
        <text x="825" y="155" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0f172a">A</text>
        <rect x="855" y="120" width="50" height="65" rx="3" fill="#fff" stroke="#64748b" />
        <text x="880" y="155" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0f172a">A</text>
        <text x="855" y="220" fontSize="9" fontWeight="800" fill="#92400e">인쇄 실행 후</text>
        <text x="855" y="234" fontSize="9" fontWeight="800" fill="#92400e">10층 복합기에서</text>
        <text x="855" y="248" fontSize="9" fontWeight="800" fill="#92400e">결과물 출력</text>
      </g>

      {/* 7층 흑백 복합기 */}
      <g>
        <rect x="620" y="290" width="320" height="170" rx="10" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" />
        {/* B&W printer icon */}
        <rect x="640" y="310" width="80" height="80" rx="4" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
        <rect x="650" y="320" width="60" height="40" fill="#1e293b" />
        <rect x="650" y="365" width="60" height="20" fill="#94a3b8" />
        <text x="680" y="410" textAnchor="middle" fontSize="9" fontWeight="800" fill="#475569">7층 흑백 복합기</text>
        <text x="680" y="425" textAnchor="middle" fontSize="9" fontWeight="700" fill="#475569">결과물 출력</text>

        {[0, 1, 2].map((i) => (
          <text key={`d7${i}`} x={745 + i * 14} y="350" fontSize="14" fontWeight="800" fill="#dc2626">▸</text>
        ))}

        <rect x="800" y="310" width="50" height="65" rx="3" fill="#fff" stroke="#64748b" />
        <text x="825" y="345" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0f172a">A</text>
        <rect x="855" y="310" width="50" height="65" rx="3" fill="#fff" stroke="#64748b" />
        <text x="880" y="345" textAnchor="middle" fontSize="20" fontWeight="800" fill="#0f172a">A</text>
        <text x="855" y="410" fontSize="9" fontWeight="800" fill="#475569">인쇄 실행 후</text>
        <text x="855" y="424" fontSize="9" fontWeight="800" fill="#475569">7층 복합기에서</text>
        <text x="855" y="438" fontSize="9" fontWeight="800" fill="#475569">결과물 출력</text>
      </g>

      {/* Bottom legend */}
      <rect x="20" y="500" width="960" height="60" rx="8" fill="#fffbeb" stroke="#fde68a" />
      <text x="500" y="525" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400e">
        ※ 전사 단일 프린터 드라이브 사용 — 사용자 편의성 증대
      </text>
      <text x="500" y="545" textAnchor="middle" fontSize="10" fontWeight="700" fill="#a16207">
        사원증 인증 후 어느 복합기에서나 출력 가능 · 모든 작업 이력 저장
      </text>
    </svg>
  );
}

/* ──────────── 13. Acronis Cyber Protect ──────────── */
function AcronisDiagram() {
  return (
    <svg viewBox="0 0 1000 600" className="w-full h-auto min-w-[700px]" xmlns="http://www.w3.org/2000/svg">
      <ArrowMarkers />

      {/* Title */}
      <rect x="350" y="20" width="300" height="40" rx="20" fill="#fed7aa" stroke="#fb923c" />
      <text x="500" y="46" textAnchor="middle" fontSize="14" fontWeight="800" fill="#9a3412">[ 시스템 구성 ]</text>

      {/* ── On-Premise zone (top) ── */}
      <rect x="40" y="80" width="920" height="220" rx="14" fill="#fff7ed" stroke="#fb923c" strokeWidth="2" strokeDasharray="6 4" />
      <text x="500" y="105" textAnchor="middle" fontSize="13" fontWeight="800" fill="#9a3412">On-Premise 구성</text>

      {/* On-Premise sub-zone */}
      <g>
        <rect x="60" y="120" width="380" height="170" rx="10" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="80" y="145" fontSize="11" fontWeight="800" fill="#0f172a">On-Premise</text>

        {/* Web 콘솔 + Network Storage */}
        <rect x="80" y="160" width="100" height="60" rx="6" fill="#dbeafe" stroke="#3b82f6" />
        <text x="130" y="180" textAnchor="middle" fontSize="20">🖥</text>
        <text x="130" y="205" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1d4ed8">Web 콘솔</text>

        <ellipse cx="240" cy="190" rx="35" ry="12" fill="#fff" stroke="#64748b" />
        <rect x="205" y="190" width="70" height="30" fill="#fff" stroke="#64748b" />
        <ellipse cx="240" cy="220" rx="35" ry="12" fill="#fff" stroke="#64748b" />
        <text x="240" y="244" textAnchor="middle" fontSize="9" fontWeight="800" fill="#475569">Network Storage</text>

        {/* 관리서버 */}
        <rect x="310" y="155" width="100" height="105" rx="6" fill="#fff" stroke="#fb923c" strokeWidth="1.5" />
        <rect x="335" y="170" width="50" height="65" rx="3" fill="#fb923c" />
        <line x1="343" y1="180" x2="377" y2="180" stroke="#fff" strokeWidth="1.5" />
        <line x1="343" y1="190" x2="377" y2="190" stroke="#fff" strokeWidth="1.5" />
        <line x1="343" y1="200" x2="377" y2="200" stroke="#fff" strokeWidth="1.5" />
        <line x1="343" y1="210" x2="377" y2="210" stroke="#fff" strokeWidth="1.5" />
        <text x="360" y="255" textAnchor="middle" fontSize="9" fontWeight="800" fill="#9a3412">관리서버</text>

        {/* TAPE 장치 */}
        <text x="270" y="280" fontSize="9" fontWeight="700" fill="#475569">TAPE 장치 · SAN 스토리지</text>
      </g>

      {/* Acronis Data Center (right) */}
      <g>
        <rect x="470" y="120" width="470" height="170" rx="10" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="490" y="145" fontSize="11" fontWeight="800" fill="#0f172a">Acronis Data Center</text>

        {/* Acronis Cloud Storage */}
        <ellipse cx="560" cy="190" rx="55" ry="22" fill="#fed7aa" stroke="#fb923c" strokeWidth="2" />
        <text x="560" y="188" textAnchor="middle" fontSize="10" fontWeight="800" fill="#9a3412">Acronis</text>
        <text x="560" y="200" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9a3412">Cloud Storage</text>

        {/* Devices grid */}
        <g>
          <rect x="640" y="160" width="60" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="670" y="190" textAnchor="middle" fontSize="22">🖥</text>
          <text x="670" y="220" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Physical</text>
          <text x="670" y="232" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Server</text>
        </g>
        <g>
          <rect x="710" y="160" width="60" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="740" y="190" textAnchor="middle" fontSize="22">⚙</text>
          <text x="740" y="220" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Virtual</text>
          <text x="740" y="232" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Host</text>
        </g>
        <g>
          <rect x="780" y="160" width="60" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="810" y="190" textAnchor="middle" fontSize="22">💻</text>
          <text x="810" y="220" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">PC · Mac</text>
        </g>
        <g>
          <rect x="850" y="160" width="80" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="890" y="190" textAnchor="middle" fontSize="22">📱</text>
          <text x="890" y="220" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Mobile</text>
          <text x="890" y="232" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Azure · AWS · O365</text>
        </g>

        <text x="785" y="265" textAnchor="middle" fontSize="9" fontWeight="800" fill="#9a3412">Agents</text>
      </g>

      {/* Connection between on-prem and Acronis cloud */}
      <line x1="440" y1="200" x2="475" y2="190" stroke="#fb923c" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />

      {/* ── Cloud zone (bottom) ── */}
      <rect x="40" y="320" width="920" height="220" rx="14" fill="#fff7ed" stroke="#fb923c" strokeWidth="2" strokeDasharray="6 4" />
      <text x="500" y="345" textAnchor="middle" fontSize="13" fontWeight="800" fill="#9a3412">Cloud 구성</text>

      {/* On-Premise side */}
      <g>
        <rect x="60" y="360" width="380" height="170" rx="10" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="80" y="385" fontSize="11" fontWeight="800" fill="#0f172a">On-Premise</text>

        <rect x="80" y="400" width="100" height="60" rx="6" fill="#dbeafe" stroke="#3b82f6" />
        <text x="130" y="420" textAnchor="middle" fontSize="20">🖥</text>
        <text x="130" y="445" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1d4ed8">Web 콘솔</text>

        <text x="280" y="430" textAnchor="middle" fontSize="9" fontWeight="800" fill="#475569">Network Storage</text>
        <ellipse cx="280" cy="450" rx="35" ry="12" fill="#fff" stroke="#64748b" />
        <rect x="245" y="450" width="70" height="30" fill="#fff" stroke="#64748b" />
        <ellipse cx="280" cy="480" rx="35" ry="12" fill="#fff" stroke="#64748b" />
      </g>

      {/* Acronis Data Center bottom */}
      <g>
        <rect x="470" y="360" width="470" height="170" rx="10" fill="#fff" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="490" y="385" fontSize="11" fontWeight="800" fill="#0f172a">관리서버 · Acronis Data Center</text>

        {/* Stack of orange servers */}
        <g transform="translate(540, 400)">
          <rect x="0" y="0" width="40" height="80" rx="3" fill="#fb923c" />
          <rect x="50" y="0" width="40" height="80" rx="3" fill="#fb923c" />
          <line x1="8" y1="15" x2="32" y2="15" stroke="#fff" strokeWidth="1.5" />
          <line x1="8" y1="30" x2="32" y2="30" stroke="#fff" strokeWidth="1.5" />
          <line x1="8" y1="45" x2="32" y2="45" stroke="#fff" strokeWidth="1.5" />
          <line x1="8" y1="60" x2="32" y2="60" stroke="#fff" strokeWidth="1.5" />
          <line x1="58" y1="15" x2="82" y2="15" stroke="#fff" strokeWidth="1.5" />
          <line x1="58" y1="30" x2="82" y2="30" stroke="#fff" strokeWidth="1.5" />
          <line x1="58" y1="45" x2="82" y2="45" stroke="#fff" strokeWidth="1.5" />
          <line x1="58" y1="60" x2="82" y2="60" stroke="#fff" strokeWidth="1.5" />
        </g>
        <text x="585" y="500" textAnchor="middle" fontSize="9" fontWeight="800" fill="#9a3412">Acronis Cloud</text>
        <text x="585" y="513" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9a3412">Management &amp; Storage</text>

        {/* Devices */}
        <g>
          <rect x="660" y="395" width="60" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="690" y="425" textAnchor="middle" fontSize="22">🖥</text>
          <text x="690" y="455" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Physical</text>
        </g>
        <g>
          <rect x="730" y="395" width="60" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="760" y="425" textAnchor="middle" fontSize="22">⚙</text>
          <text x="760" y="455" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Virtual</text>
        </g>
        <g>
          <rect x="800" y="395" width="60" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="830" y="425" textAnchor="middle" fontSize="22">💻</text>
          <text x="830" y="455" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">PC · Mac</text>
        </g>
        <g>
          <rect x="870" y="395" width="60" height="50" rx="4" fill="#fff" stroke="#64748b" />
          <text x="900" y="425" textAnchor="middle" fontSize="22">📱</text>
          <text x="900" y="455" textAnchor="middle" fontSize="8" fontWeight="700" fill="#475569">Mobile</text>
        </g>
        <text x="795" y="490" textAnchor="middle" fontSize="9" fontWeight="800" fill="#9a3412">Agents</text>
      </g>

      {/* Connection */}
      <line x1="440" y1="440" x2="475" y2="440" stroke="#fb923c" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrSlate)" />

      {/* Bottom legend */}
      <rect x="20" y="555" width="960" height="32" rx="8" fill="#fff7ed" stroke="#fed7aa" />
      <text x="500" y="576" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9a3412">
        21개 이상 플랫폼 지원 · 랜섬웨어 사전 차단 · 블록체인 데이터 무결성 공증
      </text>
    </svg>
  );
}
