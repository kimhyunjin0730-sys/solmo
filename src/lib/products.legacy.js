/**
 * Product catalog — solutions overview cards link here for detail pages.
 * Used by /solutions/products/[id] dynamic route.
 */

export const PRODUCTS = {
  // ─────────────────── NETWORK SECURITY ───────────────────
  "fortinet-utm": {
    id: "fortinet-utm",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "UTM / VPN",
    name: "FortiGate UTM / VPN",
    vendor: "Fortinet",
    badge: "Gold Partner",
    shortDesc:
      "통합위협관리(UTM)와 사외접속(VPN)을 단일 어플라이언스에서 제공하는 차세대 방화벽.",
    logo: "/images/product/logo.png",
    overview:
      "Fortinet FortiGate는 ASIC 기반 가속 하드웨어와 전용 Secure OS를 탑재한 차세대 보안 시스템입니다. Firewall · VPN · Anti-Virus · IPS · Anti-Spam 등 필수 보안 기능을 단일 장비에서 통합 수행하며, 성능 저하 없는 강력한 보안을 보장합니다. (주)솔모정보기술은 Fortinet의 Gold Partner로서 최우수 파트너 수상 이력을 보유하고 있습니다.",
    keyFeatures: [
      { icon: "🛡", title: "능동적 침입 차단", desc: "5,000종 이상의 공격 패턴을 실시간 자동 업데이트로 차단" },
      { icon: "⚡", title: "ASIC 가속", desc: "하드웨어 수준의 고속 패킷 처리 전용 칩셋으로 성능 보장" },
      { icon: "🔐", title: "멀티 VPN", desc: "PPTP · IPSec · SSL · L2TP 등 다양한 원격 접속 프로토콜 지원" },
      { icon: "🌐", title: "VDOM 가상화", desc: "단일 장비에서 다수의 가상 도메인 운영, NAT/Transparent 모드" },
    ],
    specs: [
      { label: "운영체제", value: "FortiOS (전용 Secure OS)" },
      { label: "지원 모드", value: "NAT · PAT · Transparent (Bridge)" },
      { label: "암호화", value: "DES · 3DES · AES" },
      { label: "인증", value: "SHA-1 · MD5" },
      { label: "고가용성", value: "Active-Active / Active-Passive HA" },
      { label: "관리", value: "FortiManager · FortiAnalyzer" },
    ],
    useCases: [
      { title: "지점 VPN 통합", desc: "본사-지사 간 IPSec VPN으로 안전한 통신망 구축" },
      { title: "DMZ 게이트웨이", desc: "외부 노출 서비스의 1차 방어선" },
      { title: "내부 망분리", desc: "VDOM으로 부서별 트래픽 격리" },
    ],
  },

  "piolink-waf": {
    id: "piolink-waf",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "WAF",
    name: "WEBFRONT-K",
    vendor: "PIOLINK",
    shortDesc:
      "웹 서버 취약점 공격 및 해킹을 탐지·차단하는 웹 어플리케이션 보안 특화 솔루션.",
    logo: "/images/product/logo (1).png",
    overview:
      "PIOLINK WEBFRONT-K는 웹 어플리케이션에 존재하는 보안 취약점과 웹 공격을 탐지·차단하는 전용 솔루션입니다. 웹 인프라 앞단에 설치되어 모든 유입 트래픽을 감시하며, SQL Injection · XSS 등 OWASP Top 10 위협으로부터 서비스를 보호합니다.",
    keyFeatures: [
      { icon: "🚫", title: "공격 차단", desc: "웹 해킹 및 어플리케이션 취약점 공격 실시간 차단" },
      { icon: "🔒", title: "정보 유출 방지", desc: "개인정보 · 신용카드 정보 불법 유출 차단" },
      { icon: "🛡", title: "변조 방지", desc: "웹 사이트 임의 변조를 사전에 차단" },
      { icon: "⚖️", title: "부하 분산", desc: "Load Balancing · SSL Offloading 통합 제공" },
    ],
    specs: [
      { label: "구성 방식", value: "단독 / 이중화 (HA)" },
      { label: "설치 위치", value: "웹 서버 앞단 인라인" },
      { label: "보안 계층", value: "L7 (Application Layer)" },
      { label: "관리", value: "Web Console" },
    ],
    useCases: [
      { title: "공공 웹 서비스 보호", desc: "법적 컴플라이언스 대응이 필수인 공공기관 웹사이트" },
      { title: "전자상거래 보호", desc: "고객 결제·개인정보 처리 사이트의 방어선" },
    ],
  },

  "webkeeper": {
    id: "webkeeper",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "URL Filtering",
    name: "WebKeeper SG",
    vendor: "소만사",
    shortDesc:
      "유해 사이트 및 비업무 사이트 접속을 통제하여 업무 생산성과 시스템 안정성을 동시에 확보.",
    logo: "/images/product/6.png",
    overview:
      "임직원의 인터넷 사용에 대한 통제 및 관리를 통해 비즈니스 정보의 외부 유출을 방지합니다. 또한 악성코드 유포 및 파일공유 사이트를 차단하여 내부 사용자의 중요 데이터를 보호하고 시스템의 안정성을 확보하는 보안 서비스입니다.",
    keyFeatures: [
      { icon: "🌐", title: "사이트 통제 관리", desc: "업무용·비업무용 웹사이트를 명확히 구분하여 정책별 통제" },
      { icon: "🔐", title: "HTTPS 통제", desc: "암호화된 HTTPS 접속에 대해서도 정교한 접속 통제" },
      { icon: "📊", title: "트래픽 제어", desc: "P2P · 웹하드 등 대역폭 점유 프로그램 통제" },
      { icon: "🔄", title: "DB 업데이트", desc: "국내 1위 웹사이트 DB 주기적 최신화" },
    ],
    specs: [
      { label: "구성", value: "Server 모듈 + Engine 모듈" },
      { label: "장비 형태", value: "하드웨어 일체형 Appliance" },
      { label: "감시 방식", value: "스니핑 (Sniffing) — 네트워크 부하 없음" },
      { label: "배치", value: "백본 스위치" },
    ],
    useCases: [
      { title: "비용 절감", desc: "1,000명 기준 연간 약 7.5억 원의 비용 절감 효과 (업무 집중도 향상)" },
      { title: "악성코드 차단", desc: "P2P · 웹하드 차단으로 DDoS 등 사전 방지" },
    ],
  },

  "mail-i": {
    id: "mail-i",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "Network DLP",
    name: "Mail-i (Hyboost)",
    vendor: "소만사",
    shortDesc:
      "이메일·메신저·웹하드·SNS 등 외부로 발송되는 채널을 모니터링하여 내부 정보 유출을 상시 감사하는 Network DLP.",
    logo: "/images/product/6.png",
    overview:
      "회사 외부로 발송되는 이메일, 메신저, 웹하드, SNS 서비스 등을 모니터링하여 비즈니스 정보의 외부 유출을 방지하며, 내부 정보의 외부 유출을 상시 감사하는 보안 서비스입니다. 백본 스위치에 일체형 장비(Hyboost)로 구성되어 분산 환경에서도 중앙 통합 관리가 가능합니다.",
    keyFeatures: [
      { icon: "📨", title: "이메일 모니터링", desc: "제목·본문은 물론 첨부파일 내용까지 상세 로깅 수행" },
      { icon: "🌐", title: "다양한 채널", desc: "상용 웹메일 · 메신저 · 웹하드 · SNS 모니터링 지원" },
      { icon: "🔍", title: "검색·검출", desc: "개인정보 및 특정 키워드 검색 기능 제공" },
      { icon: "🚨", title: "통보 기능", desc: "외부 전송되는 개인정보 자료 검출 시 즉시 통보" },
    ],
    specs: [
      { label: "구성", value: "Server 모듈 + Engine 모듈" },
      { label: "장비 형태", value: "하드웨어 일체형 Appliance (Hyboost)" },
      { label: "배치", value: "네트워크 백본 스위치" },
      { label: "관리", value: "분산 환경 중앙 통합 관리" },
      { label: "컴플라이언스", value: "개인정보보호법 시행령 제6조 3항 준수" },
    ],
    useCases: [
      { title: "내부 정보 유출 방지", desc: "임직원·협력체 모니터링을 통한 정보 유출 방지 및 보안성 강화" },
      { title: "보안 의식 제고", desc: "직원의 보안 의식 강화를 통해 유출 사고 및 잠재적 피해 최소화" },
      { title: "법적 준수", desc: "개인정보보호법 및 시행령·고시 완벽 준수" },
    ],
  },

  "wips": {
    id: "wips",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "WIPS",
    name: "Fire Power (WIPS)",
    vendor: "네오리진 (구. 코닉글로리)",
    shortDesc:
      "무선 침입 방지 시스템 — 비인가 AP 탐지부터 무선 공격 차단까지 무선 네트워크 보안 관리.",
    logo: "/images/product/sdfsdf.png",
    overview:
      "기업의 무선 네트워크 환경에서 발생할 수 있는 비인가 AP, Rogue Device, 무선 공격을 실시간으로 탐지하고 자동으로 차단하는 WIPS(Wireless Intrusion Prevention System) 솔루션입니다.",
    keyFeatures: [
      { icon: "📡", title: "Rogue AP 탐지", desc: "비인가 AP를 자동 탐지하고 즉시 차단" },
      { icon: "🚨", title: "무선 공격 대응", desc: "DoS · MITM · Evil Twin 공격에 능동 대응" },
      { icon: "🔒", title: "정책 위반 격리", desc: "무선 정책 위반 단말 자동 격리" },
      { icon: "📊", title: "실시간 분석", desc: "무선 트래픽 실시간 분석 및 리포팅" },
    ],
    specs: [
      { label: "탐지 방식", value: "전용 센서 기반" },
      { label: "관리", value: "중앙 통합 관리 콘솔" },
    ],
    useCases: [
      { title: "공공기관 무선망 보호", desc: "보안 등급이 높은 시설의 무선 환경 보호" },
      { title: "기업 BYOD 환경", desc: "BYOD 환경에서의 무선 접근 통제" },
    ],
  },

  "genian-nac": {
    id: "genian-nac",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "NAC",
    name: "Genian NAC",
    vendor: "Genian",
    shortDesc:
      "강력한 인증과 단말 무결성 점검으로 내부 네트워크를 청정하게 유지하는 NAC 솔루션.",
    logo: "/images/product/genian.png",
    overview:
      "강력한 인증을 통해 자산과 사용자를 식별하고, 네트워크 접근에 대한 권한을 차등 부여합니다. 특정 단말 및 IP/서브넷/VLAN 등 사용자 접속 권한을 제어하며, 단말의 보안 상태를 점검·조치하여 내부 보안 관리 체계를 완성합니다.",
    keyFeatures: [
      { icon: "🆔", title: "네트워크 실명화", desc: "네트워크를 사용 중인 단말의 인증을 통한 사용자 식별" },
      { icon: "🚪", title: "외부 사용자 통제", desc: "방문자 및 외부 협력 업체의 네트워크 사용 범위 제한" },
      { icon: "🔍", title: "단말 무결성 관리", desc: "보안 정책 준수 여부에 따른 단말 관리 및 PC 무결성 검사" },
      { icon: "🔐", title: "접근 권한 분리", desc: "사용자 직급이나 역할 등 권한에 따른 네트워크 구역 분리" },
    ],
    specs: [
      { label: "구축 형태", value: "On-Premise / Cloud / VM (Virtual Machine)" },
      { label: "구성 요소", value: "Policy Server & Console + Network Sensor + Agent" },
      { label: "지원", value: "유무선 통합 (BYOD 환경 최적화)" },
    ],
    useCases: [
      { title: "보안 정책 집중화", desc: "모든 단말에 일관된 보안 정책 적용" },
      { title: "규정 이행 강제화", desc: "사내 보안 규정을 지키지 않은 단말 접속 차단" },
      { title: "BYOD 통합 관리", desc: "개인 기기 업무 활용 환경에서도 통합 관리" },
    ],
  },

  "infoblox-dns": {
    id: "infoblox-dns",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "DNS / DDI",
    name: "Trinzic DDI",
    vendor: "Infoblox",
    shortDesc:
      "DNS · DHCP · IPAM을 통합 관리하는 DDI 솔루션. 중요 네트워크 서비스의 가시성과 가용성을 보장.",
    logo: "/images/product/9.png",
    overview:
      "Infoblox Trinzic DDI는 DNS, DHCP, IPAM(IP Address Management)을 통합 관리하는 엔터프라이즈급 솔루션입니다. 안정적인 DNS 서비스와 함께 DNS 기반의 보안 위협을 차단합니다.",
    keyFeatures: [
      { icon: "🛡", title: "DNS 보안", desc: "DNS Tunneling · DGA 등 DNS 기반 위협 차단" },
      { icon: "📋", title: "IPAM 통합", desc: "전사 IP 주소 통합 관리 및 자동화" },
      { icon: "⚡", title: "고가용성", desc: "이중화 구성으로 무중단 DNS · DHCP 서비스" },
      { icon: "📜", title: "감사 로깅", desc: "중앙 정책 관리 및 변경 이력 추적" },
    ],
    specs: [
      { label: "통합 기능", value: "DNS + DHCP + IPAM (DDI)" },
      { label: "고가용성", value: "Grid Architecture HA" },
      { label: "보안", value: "DNS Firewall · Threat Insight" },
    ],
    useCases: [
      { title: "엔터프라이즈 DNS", desc: "대규모 조직의 안정적 DNS 인프라" },
      { title: "DNS 위협 차단", desc: "악성 도메인 접근을 DNS 단계에서 차단" },
    ],
  },

  "cisco-ips": {
    id: "cisco-ips",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "IPS / Switch",
    name: "Cisco Fire Power · Catalyst",
    vendor: "Cisco",
    shortDesc:
      "글로벌 표준의 침입차단(IPS) 시스템과 L2/L3 네트워크 스위치 라인업.",
    logo: "/images/product/7.png",
    overview:
      "Cisco의 차세대 침입차단 시스템 Fire Power와 엔터프라이즈 네트워크 인프라의 표준인 Catalyst Series 스위치 라인업을 제공합니다. Threat Intelligence 기반의 실시간 위협 차단과 함께 SIEM 연동을 지원합니다.",
    keyFeatures: [
      { icon: "🚨", title: "Fire Power IPS", desc: "차세대 침입 탐지/차단 시스템" },
      { icon: "🌐", title: "Catalyst 스위치", desc: "엔터프라이즈 백본을 위한 L2/L3 스위치" },
      { icon: "🧠", title: "Threat Intelligence", desc: "Cisco Talos 위협 인텔리전스 기반 실시간 차단" },
      { icon: "🔗", title: "SIEM 연동", desc: "QRadar 등 SIEM과 통합 운영" },
    ],
    specs: [
      { label: "라인업", value: "Fire Power 1000/2000/4000 시리즈" },
      { label: "스위치", value: "Catalyst 9000 시리즈" },
      { label: "관리", value: "Cisco DNA Center / FMC" },
    ],
    useCases: [
      { title: "데이터센터 IPS", desc: "백본 트래픽의 실시간 침입 차단" },
      { title: "엔터프라이즈 LAN", desc: "사무실 네트워크 백본 구축" },
    ],
  },

  "piolink-l4": {
    id: "piolink-l4",
    category: "network-security",
    categoryLabel: "네트워크 보안",
    cat: "L4 Switch",
    name: "PAS-K · KV · KS Series",
    vendor: "PIOLINK",
    shortDesc:
      "L4 네트워크 스위치 — 부하 분산(Load Balancing) 및 트래픽 최적화로 서비스 안정성 보장.",
    logo: "/images/product/logo (1).png",
    overview:
      "PIOLINK의 L4 스위치 라인업은 서비스의 안정성과 확장성을 보장하기 위한 부하 분산 솔루션입니다. SSL 오프로딩, 헬스체크, HA 구성 등 엔터프라이즈 서비스에 필수적인 기능을 제공합니다.",
    keyFeatures: [
      { icon: "⚖️", title: "부하 분산", desc: "L4 ~ L7 부하 분산 및 헬스체크" },
      { icon: "🔐", title: "SSL 가속", desc: "SSL 오프로딩으로 백엔드 서버 부하 경감" },
      { icon: "🔁", title: "이중화", desc: "Active-Active HA 구성으로 무중단 서비스" },
      { icon: "📊", title: "트래픽 가시성", desc: "통계 리포트 및 실시간 모니터링" },
    ],
    specs: [
      { label: "라인업", value: "PAS-K · KV · KS" },
      { label: "지원 계층", value: "L4 ~ L7" },
      { label: "관리", value: "Web GUI · CLI" },
    ],
    useCases: [
      { title: "웹 서비스 부하 분산", desc: "다중 웹 서버 간 트래픽 분산" },
      { title: "글로벌 서비스 확장", desc: "GSLB로 지역별 트래픽 라우팅" },
    ],
  },

  // ─────────────────── APPLICATION SECURITY ───────────────────
  "ta-prs": {
    id: "ta-prs",
    category: "application-security",
    categoryLabel: "어플리케이션 보안",
    cat: "PMS / FDM",
    name: "TA-PRS · TA-FDM",
    vendor: "ITStation",
    shortDesc:
      "패치관리(PMS) 및 배포관리(FDM) 솔루션. OS 및 필수 SW의 보안 패치를 중앙에서 자동 관리.",
    logo: "/images/product/logo (2).png",
    overview:
      "윈도우 계열 PC 및 서버에 대한 보안 패치를 중앙에서 자동 관리하여 보안 공백을 최소화하고, 정보 자원의 안정성을 확보합니다. 운영체제뿐 아니라 백신, PC보안, 개인정보관리 등 필수 소프트웨어의 중앙 관리 체계를 확립합니다.",
    keyFeatures: [
      { icon: "🔄", title: "자동 패치", desc: "운영체제 및 어플리케이션에 대한 패치 자동/강제 설치" },
      { icon: "📊", title: "현황 관리", desc: "전사 단말의 패치 적용 현황 수집 및 통계 리포트" },
      { icon: "🛡", title: "취약점 제거", desc: "자동화된 패치 관리로 보안 약점 사전 제거" },
      { icon: "⚡", title: "단말 보호", desc: "해킹 및 자료 유출 방지로 보안 사고 최소화" },
    ],
    specs: [
      { label: "지원 OS", value: "Windows · Linux 서버" },
      { label: "관리", value: "중앙 통합 관리 콘솔" },
      { label: "배포", value: "자동 / 수동 / 강제 배포 모드" },
    ],
    useCases: [
      { title: "전사 PC 관리", desc: "수천 대 단말의 패치 일괄 관리" },
      { title: "취약점 사전 예방", desc: "최신 보안 패치 즉시 적용으로 외부 공격 차단" },
    ],
  },

  "ta-str": {
    id: "ta-str",
    category: "application-security",
    categoryLabel: "어플리케이션 보안",
    cat: "Security Automation",
    name: "TA-STR",
    vendor: "ITStation",
    shortDesc:
      "보안 이벤트 자동 대응 솔루션. 탐지된 위협에 사전 정의된 시나리오로 자동 대응.",
    logo: "/images/product/logo (2).png",
    overview:
      "보안 솔루션에서 탐지된 이벤트에 대해 사전 정의된 시나리오에 따라 자동으로 차단·격리·알림 작업을 수행하는 보안 자동화 솔루션입니다.",
    keyFeatures: [
      { icon: "🤖", title: "자동 대응", desc: "보안 이벤트 자동 대응 워크플로우" },
      { icon: "🔗", title: "통합 제어", desc: "기존 보안 솔루션과 연동" },
      { icon: "🚫", title: "자동 격리", desc: "정책 기반 자동 격리·차단" },
      { icon: "📋", title: "감사 로깅", desc: "대응 결과 리포팅 및 감사 로그" },
    ],
    specs: [
      { label: "연동", value: "FortiGate · QRadar · 기타 보안 솔루션" },
      { label: "워크플로우", value: "GUI 기반 시나리오 설계" },
    ],
    useCases: [
      { title: "SOC 자동화", desc: "관제팀의 단순 반복 대응 업무 자동화" },
    ],
  },

  "reaqta-edr": {
    id: "reaqta-edr",
    category: "application-security",
    categoryLabel: "어플리케이션 보안",
    cat: "EDR",
    name: "ReaQta",
    vendor: "IBM",
    shortDesc:
      "AI 기반 행위 분석으로 알려지지 않은 위협까지 실시간 탐지하는 EDR 솔루션.",
    logo: "/images/product/logo (4).png",
    overview:
      "IBM ReaQta는 AI 기반의 NanoOS 기술을 활용하여 단말에서 발생하는 모든 행위를 실시간으로 분석하고, 알려지지 않은 위협까지 탐지·대응하는 차세대 EDR 솔루션입니다.",
    keyFeatures: [
      { icon: "🧠", title: "AI 분석", desc: "AI 기반 단말 행위 분석 (NanoOS 기술)" },
      { icon: "🦠", title: "위협 탐지", desc: "랜섬웨어 · APT · 제로데이 위협 탐지" },
      { icon: "⚡", title: "자동 격리", desc: "원클릭 위협 사냥 및 자동 격리" },
      { icon: "🗺", title: "위협 매핑", desc: "MITRE ATT&CK 기반 위협 매핑" },
    ],
    specs: [
      { label: "기술", value: "NanoOS — 커널 수준 가시성" },
      { label: "AI 모델", value: "행위 기반 머신러닝" },
      { label: "통합", value: "IBM QRadar SIEM/SOAR 연동" },
    ],
    useCases: [
      { title: "랜섬웨어 방어", desc: "암호화 시도 즉시 탐지 및 차단" },
      { title: "APT 추적", desc: "장기 잠복형 공격의 행위 패턴 분석" },
    ],
  },

  "gaaiho-pdf": {
    id: "gaaiho-pdf",
    category: "application-security",
    categoryLabel: "어플리케이션 보안",
    cat: "Document",
    name: "Gaaiho PDF Suite",
    vendor: "Gaaiho",
    shortDesc:
      "글로벌 수준의 PDF 전문 편집 및 관리 솔루션. 합리적인 가격으로 문서 보안과 생산성을 제공.",
    logo: "/images/product/Gaaiho.png",
    overview:
      "Gaaiho는 PDF 리더, 편집기, 변환기 및 관리 도구를 포함하는 통합 솔루션으로, 기업의 문서 업무 프로세스를 혁신합니다. 단순한 뷰어를 넘어 강력한 편집 기능과 스마트한 관리 기능을 제공합니다.",
    keyFeatures: [
      { icon: "✏️", title: "강력한 편집", desc: "텍스트와 이미지를 직접 수정하는 편집 환경" },
      { icon: "🔄", title: "PDF 변환", desc: "Word/Excel 역변환 및 일괄 변환" },
      { icon: "🔍", title: "OCR", desc: "이미지 PDF를 검색 가능한 텍스트로 변환" },
      { icon: "✍️", title: "전자서명", desc: "디지털 서명으로 페이퍼리스 업무 지원" },
    ],
    specs: [
      { label: "구성", value: "Doc + Converter + Manager" },
      { label: "암호화", value: "256-bit AES" },
      { label: "OCR", value: "다국어 OCR 엔진" },
    ],
    useCases: [
      { title: "문서 디지털화", desc: "스캔 문서를 검색 가능한 데이터로 변환" },
      { title: "전자결재", desc: "디지털 서명으로 종이 없는 결재 환경" },
    ],
  },

  // ─────────────────── DATA LEAKAGE PREVENTION ───────────────────
  "xsecuritas": {
    id: "xsecuritas",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "Watermark",
    name: "X-Securitas",
    vendor: "SOLMO (자체 개발)",
    badge: "GS 1등급",
    shortDesc:
      "사용자 정보 기반 워터마크를 화면에 실시간 오버레이하여 다양한 경로의 정보 노출을 원천 방지.",
    logo: "/images/product/logo (3).png",
    overview:
      "X-Securitas는 (주)솔모정보기술이 자체 개발한 스크린워터마크 솔루션입니다. 화면 캡처, 동영상 캡처는 물론 스마트폰 촬영을 통한 정보 유출까지 사용자 정보가 포함된 워터마크로 추적 가능하게 만듭니다. GS 1등급 인증을 보유한 검증된 솔루션입니다.",
    keyFeatures: [
      { icon: "🛡", title: "실시간 워터마크", desc: "사용자 정보 기반 워터마크 실시간 오버레이" },
      { icon: "📱", title: "촬영 추적", desc: "스마트폰 촬영 시에도 워터마크로 유출자 추적" },
      { icon: "⚙️", title: "유연한 정책", desc: "그룹/사용자 기반 정책 배포 및 중앙 제어" },
      { icon: "⚡", title: "고성능 엔진", desc: "PC 성능 저하 없는 보안 엔진" },
    ],
    specs: [
      { label: "인증", value: "GS 1등급 (Good Software)" },
      { label: "버전", value: "Enterprise v5.3" },
      { label: "관리", value: "Web Console" },
      { label: "연동", value: "AD · SSO · 에이전트 로그인 상태" },
    ],
    useCases: [
      { title: "원천 유출 차단", desc: "캡처·촬영·외장장치 전송 등 모든 유출 경로 억제" },
      { title: "사후 추적", desc: "유출 사고 발생 시 워터마크로 즉시 책임자 파악" },
    ],
  },

  "qradar": {
    id: "qradar",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "SIEM / SOAR",
    name: "IBM QRadar",
    vendor: "IBM",
    shortDesc:
      "통합로그관리(SIEM)와 보안 오케스트레이션 자동화·응답(SOAR)을 결합한 차세대 보안 인텔리전스 플랫폼.",
    logo: "/images/product/logo (4).png",
    overview:
      "IBM QRadar는 단순한 로그 수집·분석을 넘어, 네트워크 플로우와 취약점 정보를 통합 수집하여 정밀한 상관관계 분석을 수행합니다. SIEM과 SOAR 기능을 결합하여 위협 탐지부터 자동 대응까지의 전 과정을 지원합니다.",
    keyFeatures: [
      { icon: "🔗", title: "상관관계 분석", desc: "수집된 데이터의 포괄적인 상관관계 분석" },
      { icon: "📡", title: "실시간 수집", desc: "다양한 로그 소스의 실시간 수집 및 통합" },
      { icon: "🤖", title: "SOAR 자동화", desc: "플레이북 기반 신속 대응 자동화" },
      { icon: "📊", title: "통합 뷰", desc: "단일 GUI로 모든 보안 이벤트 가시화" },
    ],
    specs: [
      { label: "배포", value: "On-Premise / Cloud / VM" },
      { label: "데이터 소스", value: "보안 디바이스 · 서버 · 네트워크 · 어플리케이션" },
      { label: "지능형 분석", value: "활동 기준선 + 비정상 탐지" },
    ],
    useCases: [
      { title: "통합 보안 관제", desc: "전사 보안 이벤트 단일 콘솔 관제" },
      { title: "컴플라이언스 대응", desc: "각종 규제 및 내부 보안 컴플라이언스 자동화" },
    ],
  },

  "dbsafer": {
    id: "dbsafer",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "DB Access Control",
    name: "DBSafer",
    vendor: "PNP Secure",
    shortDesc:
      "DB 및 시스템 접속 권한 통제와 작업 로깅을 제공하는 통합 보안 감사 솔루션.",
    logo: "/images/product/dsf.png",
    overview:
      "DB 접근제어 및 감사 솔루션은 데이터베이스에 대한 모든 접근과 권한을 중앙에서 제어합니다. 실시간 SQL 감사 및 로깅을 통해 DB를 통한 대량의 내부 정보 유출 위험을 원천적으로 차단합니다.",
    keyFeatures: [
      { icon: "🚪", title: "접근 통제", desc: "가상계정, IP, 접속 APP 기반 정교한 통제" },
      { icon: "🔐", title: "권한 제어", desc: "명령어 · 테이블 · 컬럼 단위 상세 제어" },
      { icon: "📋", title: "전수 감사", desc: "모든 SQL 내역 감사 및 로깅" },
      { icon: "📊", title: "리포팅", desc: "정책 준수 통계 분석 및 정기 리포트" },
    ],
    specs: [
      { label: "접속 방식", value: "Gateway / Sniffing / Server-Agent / Hybrid" },
      { label: "감사 단위", value: "SQL · Table · Column" },
      { label: "특징", value: "별도 에이전트 설치 없는 Gateway 방식 지원" },
    ],
    useCases: [
      { title: "DBA 작업 통제", desc: "특권 사용자의 DB 작업 전수 감사" },
      { title: "개인정보 마스킹", desc: "민감 정보 자동 마스킹 적용" },
    ],
  },

  "privacy-i": {
    id: "privacy-i",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "Endpoint DLP",
    name: "Privacy-i",
    vendor: "소만사",
    shortDesc:
      "단말 데이터 검출 및 관리(E-DLP) 솔루션. 개인정보 및 기밀 파일의 단말 저장·이동을 통제.",
    logo: "/images/product/6.png",
    overview:
      "단말 내 개인정보 및 기밀 파일을 자동으로 스캔·식별하고, 외부 전송 경로를 통제하는 Endpoint DLP 솔루션입니다.",
    keyFeatures: [
      { icon: "🔍", title: "자동 스캔", desc: "단말 내 개인정보·기밀 파일 자동 탐지" },
      { icon: "🚫", title: "전송 통제", desc: "USB · 이메일 · 메신저 등 외부 전송 차단" },
      { icon: "⚡", title: "실시간 차단", desc: "정책 위반 시 실시간 차단 및 알림" },
      { icon: "📋", title: "감사 로그", desc: "모든 활동 로깅 및 컴플라이언스 리포트" },
    ],
    specs: [
      { label: "탐지 대상", value: "주민번호 · 카드번호 · 기밀 키워드" },
      { label: "통제 범위", value: "USB · 메일 · 메신저 · 클라우드" },
    ],
    useCases: [
      { title: "개인정보 통제", desc: "개인정보보호법 준수를 위한 단말 통제" },
    ],
  },

  "hiware": {
    id: "hiware",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "IAM",
    name: "HIWARE 6",
    vendor: "넷앤드 (NETAND)",
    shortDesc:
      "통합시스템 접근통제 및 계정권한 관리 솔루션. 운영 시스템 계정의 Life-cycle 관리.",
    logo: "/images/product/netand.png",
    overview:
      "주요 정보시스템의 계정 생성부터 수정·삭제·권한 회수까지의 전 과정을 관리합니다. 모든 사용자의 권한과 명령어를 통제하며, 상세 감사를 통해 컴플라이언스 준수 및 보안 감사에 완벽 대응합니다.",
    keyFeatures: [
      { icon: "🚪", title: "접근 차단", desc: "인증 미등록 IP/MAC 주소 원천 차단" },
      { icon: "🔐", title: "중앙 통제", desc: "2-Factor 인증 및 권한 분배" },
      { icon: "⌨️", title: "명령어 제어", desc: "그룹·장비별 명령어 권한 설정 및 통제" },
      { icon: "📊", title: "실시간 모니터링", desc: "현재 작업 중인 모든 세션 실시간 감시" },
    ],
    specs: [
      { label: "구성", value: "이중화(HA) 아키텍처" },
      { label: "연동", value: "HR · 전자결재 시스템" },
      { label: "지원 OS", value: "Linux · Unix · Windows Server" },
    ],
    useCases: [
      { title: "특권 계정 관리", desc: "Root · Admin 계정의 Life-cycle 관리" },
      { title: "감사 대응", desc: "ISMS · ISO 27001 등 감사 증빙 자동화" },
    ],
  },

  "vormetric": {
    id: "vormetric",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "Encryption",
    name: "Vormetric",
    vendor: "Thales (탈레스)",
    shortDesc:
      "정형/비정형 데이터 암호화 솔루션. DB·파일·클라우드 데이터를 투명하게 암호화.",
    logo: "/images/product/sdfsdf.png",
    overview:
      "Thales Vormetric은 DB · 파일 · 클라우드 데이터를 투명하게 암호화하여 컴플라이언스 요구사항에 대응하는 글로벌 표준 암호화 솔루션입니다. 어플리케이션 변경 없이 적용 가능합니다.",
    keyFeatures: [
      { icon: "🔐", title: "통합 암호화", desc: "DB · 파일 · 클라우드 통합 암호화" },
      { icon: "🔑", title: "키 관리", desc: "KMS 키 중앙 관리 및 정책 통제" },
      { icon: "👻", title: "투명 암호화", desc: "어플리케이션 변경 없이 적용" },
      { icon: "✅", title: "컴플라이언스", desc: "GDPR · PCI-DSS · 개인정보보호법 대응" },
    ],
    specs: [
      { label: "암호화 알고리즘", value: "AES-256 / 국정원 검증" },
      { label: "키 관리", value: "FIPS 140-2 Level 3 HSM" },
    ],
    useCases: [
      { title: "DB 컬럼 암호화", desc: "민감 정보 컬럼 단위 암호화" },
      { title: "파일 시스템 암호화", desc: "전체 파일 시스템 투명 암호화" },
    ],
  },

  "uprint": {
    id: "uprint",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "Print Security",
    name: "Sindoh uPrint",
    vendor: "신도리코",
    shortDesc:
      "스마트 오피스 환경에 최적화된 출력 보안 및 이력 관리 시스템.",
    logo: "/images/product/1.png",
    overview:
      "사원증 인증과 uPrint 시스템을 통해 공간 제약 없이 안전하고 편리한 출력 환경을 제공하는 중앙집중형 문서보안 솔루션입니다.",
    keyFeatures: [
      { icon: "🪪", title: "사원증 인증", desc: "RFID 카드 태깅을 통한 본인 인증 후 출력물 수거" },
      { icon: "🖨", title: "uPrint 시스템", desc: "특정 기기에 종속되지 않고 사내 어디서나 출력" },
      { icon: "📜", title: "이력 관리", desc: "복사 · 프린트 · 팩스 · 스캔 모든 이력 로깅" },
      { icon: "🌐", title: "Web 관리", desc: "웹 브라우저로 전사 출력 현황 통합 관리" },
    ],
    specs: [
      { label: "안정성", value: "이중화(HA) 구성" },
      { label: "드라이버", value: "전사 단일 프린터 드라이버" },
      { label: "버전", value: "MPS 4.0 (클라우드 복합기 지원)" },
    ],
    useCases: [
      { title: "방치 문서 차단", desc: "인증된 사용자만 출력물 수거 가능" },
      { title: "비용 절감", desc: "불필요한 사내 출력물 획기적 감소" },
    ],
  },

  "blancco": {
    id: "blancco",
    category: "data-leakage-prevention",
    categoryLabel: "내부정보유출 보안",
    cat: "Data Eraser",
    name: "Blancco Drive Eraser",
    vendor: "Blancco",
    shortDesc:
      "글로벌 표준의 데이터 완전 삭제 솔루션. 폐기 자산의 데이터를 복원 불가능하게 영구 삭제.",
    logo: "/images/product/16.png",
    overview:
      "Blancco Drive Eraser는 디스크·SSD·모바일 데이터를 국제 표준 알고리즘으로 영구 삭제하고, 삭제 인증서를 자동 발급하여 폐기 의무를 증빙하는 글로벌 표준 솔루션입니다.",
    keyFeatures: [
      { icon: "🗑", title: "영구 삭제", desc: "디스크 · SSD · 모바일 데이터 복원 불가 삭제" },
      { icon: "📜", title: "국제 표준", desc: "NIST 800-88 · DoD 5220.22-M 알고리즘" },
      { icon: "📄", title: "삭제 인증서", desc: "자동 발급 및 영구 보관" },
      { icon: "🌐", title: "원격 삭제", desc: "원격 일괄 삭제 워크플로우" },
    ],
    specs: [
      { label: "지원 매체", value: "HDD · SSD · NVMe · 모바일" },
      { label: "표준", value: "NIST 800-88 / DoD 5220.22-M / 25개 국제 표준" },
    ],
    useCases: [
      { title: "PC 폐기 시 삭제", desc: "내용연수 만료 PC의 안전한 폐기" },
      { title: "GDPR 대응", desc: "개인정보보호법 폐기 의무 증빙" },
    ],
  },
};

export const PRODUCT_LIST = Object.values(PRODUCTS);

export function getProduct(id) {
  return PRODUCTS[id] || null;
}

export function getProductsByCategory(category) {
  return PRODUCT_LIST.filter((p) => p.category === category);
}

// Map URL category to display info
export const CATEGORY_INFO = {
  "network-security": {
    label: "네트워크 보안",
    href: "/solutions/network-security",
  },
  "application-security": {
    label: "어플리케이션 보안",
    href: "/solutions/application-security",
  },
  "data-leakage-prevention": {
    label: "내부정보유출 보안",
    href: "/solutions/data-leakage-prevention",
  },
  "backup-recovery": {
    label: "백업 및 복구",
    href: "/solutions/backup-recovery",
  },
};
