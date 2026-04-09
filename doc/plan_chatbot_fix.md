# 챗봇 지능 고도화 구현 계획 (plan.md)

## 1. 개요
챗봇(솔모봇)이 "회사 소개", "제품 소개" 등 핵심 질문에 대해 상황(API 연결 여부)에 관계없이 정확하게 답변할 수 있도록 로직을 보강한다.

## 2. 접근 방식
- **강력한 Fallback**: OpenAI API를 사용할 수 없는 상황에서도 `STATIC_INFO`를 기반으로 최소한의 회사/제품 소개가 가능하도록 하드코딩된 로직을 보강한다.
- **프롬프트 전략 최적화**: 시스템 프롬프트 상단에 "회사가 누구인지", "어떤 제품을 파는지"에 대한 요약 답변 가이드를 추가하여 모델이 지식 베이스를 더 잘 활용하도록 유도한다.
- **데이터 로딩 검증**: 지식 베이스 로딩 시 로그를 강화하여 실제 파일이 읽히고 있는지 확인한다.

## 3. 상세 변경 사항

### A. `src/app/api/chat/route.js` 수정
- `fallbackReply` 함수에 "회사", "제품", "솔루션" 키워드 대응 로직 추가.
- `STATIC_INFO`의 내용을 일부 공유하여 일관성 유지.

### B. `src/lib/knowledge.js` 수정
- `STATIC_INFO`를 더 명확하고 구조화된 형태로 개선.
- 시스템 프롬프트의 `[역할]` 섹션을 보강하여 정체성 확립.

## 4. 코드 스니펫

### `fallbackReply` 개선 예시
```javascript
function fallbackReply(userMessage) {
  const text = (userMessage || "").toLowerCase();
  
  // 회사 소개 대응
  if (text.includes("회사") || text.includes("어떤") || text.includes("솔모")) {
    return "(주)솔모정보기술은 20년 이상의 업력을 가진 통합 IT 보안 파트너입니다. 네트워크 보안, 내부정보유출 방지, 백업 및 복구 등 기업의 귀중한 정보 자산을 보호하는 전문 솔루션을 제공합니다.";
  }
  
  // 제품/솔루션 소개 대응
  if (text.includes("제품") || text.includes("솔루션") || text.includes("서비스")) {
    return "솔모정보기술은 다음과 같은 핵심 솔루션을 제공합니다:\n1. 네트워크 보안: Fortinet UTM, PIOLINK WAF, Genian NAC\n2. 내부정보유출방지: X-Securitas(스크린워터마크), 보안출력\n3. 어플리케이션 보안: ITStation, Gaaiho PDF\n4. 백업: Acronis Cyber Protect\n상세 정보는 홈페이지의 SOLUTIONS 메뉴를 확인해주세요.";
  }
  
  // ...기존 로직
}
```

## 5. 파일 경로
- `src/app/api/chat/route.js`
- `src/lib/knowledge.js`

## 6. 트레이드오프 및 고려사항
- **데이터 중복**: `STATIC_INFO`와 `fallbackReply`에 유사한 텍스트가 중복될 수 있으나, API 장애 시의 사용자 경험을 위해 필요함.
- **토큰 사용량**: 모든 마크다운을 시스템 프롬프트에 넣는 방식은 비용이 발생하나, 현재 파일 규모(약 60KB)로는 `gpt-4o-mini`에서 충분히 수용 가능함.

## 7. 인풋 페이징 지원 (공통 준수 사항)
- 본 작업은 채팅 데이터 조회 작업이 포함될 수 있으므로, 향후 채팅 내역 조회 기능 구현 시 인풋 페이징(Cursor-based)을 적용할 것을 명시함. (현재는 실시간 응답 위주)

---
**위 계획에 대해 검토 및 승인을 요청드립니다. 승인 후 구현을 시작합니다.**
