import fs from "node:fs";
import path from "node:path";

/**
 * 사이트 지식베이스 — 마크다운 파일 + 정적 회사 정보를 묶어 시스템 프롬프트로 만든다.
 * 서버 시작 시 한 번 읽어 캐시하고, 모든 챗봇 호출에 컨텍스트로 주입한다.
 */

const KNOWLEDGE_DIR = path.join(process.cwd(), "my-js-web");

const STATIC_INFO = `
# (주)솔모정보기술 핵심 정보

- 회사명: (주)솔모정보기술 (SOLMO Information Technology)
- 업력: 20년 이상
- 주소: 서울특별시 광진구 아차산로 309 남장빌딩 2층 (우)05028
- 대표 전화: 02-402-8054
- 팩스: 02-402-8055
- 이메일: solmoit01@solmo.co.kr
- 영업시간: 평일 09:00 – 18:00 (점심 12:00 – 13:00)
- 대표 솔루션: X-Securitas(자체 개발 스크린워터마크), Fortinet UTM, PIOLINK WAF, Genian NAC, Acronis Cyber Protect 등

## 서비스 카테고리
1. 네트워크 보안 (UTM/WAF/NAC/DLP/유해사이트/IAM)
2. 어플리케이션 보안 (패치관리, 문서관리)
3. 내부정보유출 보안 (스크린워터마크, SIEM, DB접근제어, 출력보안)
4. 백업 및 복구 (Acronis Cyber Protect)

## 주요 고객사 (총 37개사+)
- 금융: MG새마을금고, 하나손해보험, Sh수협은행, SC제일은행, KB금융그룹, 한화생명, 미래에셋, DGB, NS홈쇼핑, 招商证券
- 기업/제조: POSCO, GS칼텍스, GS EPS, DN오토모티브, yesco, LG에너지솔루션, KOREAN AIR, 동진쎄미켐, 롯데정보통신, POONGSAN
- 공공: 한국수력원자력, NICE평가정보, TTA, KoROAD, KRIHS, 울산항만공사, BPA부산항만공사, 국민건강보험, KIAST, KTC
- 교육/병원: 서울대, 성균관대, 연세대 의료원, 용인예술과학대, 삼광의료재단, 국립암센터, Seegene

## 조직도
- 대표이사 직속
  - 스태프: 기업부설연구소, 경영관리부
  - 사업1부 → 솔루션사업팀
  - 사업2부 → NW기술팀
  - 사업3부 → 보안관제사업팀
  - SI사업부 → SI사업팀
- 인력 47명 (특급 19% / 고급 31% / 중급 21% / 초급 29%)
`.trim();

let cachedKnowledge = null;

export function loadKnowledge() {
  if (cachedKnowledge) return cachedKnowledge;

  const sections = [STATIC_INFO];

  try {
    const files = fs.readdirSync(KNOWLEDGE_DIR).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      try {
        const raw = fs.readFileSync(path.join(KNOWLEDGE_DIR, file), "utf-8");
        // Strip [cite_start], [cite: 123] markers + frontmatter separators that confuse the model
        const cleaned = raw
          .replace(/\[cite_start\]/g, "")
          .replace(/\[cite:[^\]]*\]/g, "")
          .replace(/^\/+/gm, "")
          .trim();
        sections.push(`\n# 파일: ${file}\n\n${cleaned}`);
      } catch (e) {
        console.warn(`[knowledge] failed to read ${file}:`, e.message);
      }
    }
  } catch (e) {
    console.warn("[knowledge] failed to load directory:", e.message);
  }

  cachedKnowledge = sections.join("\n\n---\n\n");
  return cachedKnowledge;
}

export function buildSystemPrompt() {
  const knowledge = loadKnowledge();
  return `당신은 (주)솔모정보기술 공식 웹사이트의 고객 상담 챗봇 "솔모봇(SolmoBot)"입니다.

[역할]
- 솔모정보기술의 솔루션, 서비스, 회사 정보, 고객사, 조직, 연락처에 대해 친절하고 전문적으로 답변합니다.
- 한국어를 기본으로 사용하되, 사용자가 영어/중국어로 질문하면 같은 언어로 답합니다.
- 답변은 간결하고 구조적으로 작성하되, 필요할 때만 불릿이나 번호를 사용합니다.
- 솔루션 추천 시 제품명과 핵심 기능을 함께 언급합니다.
- 도입/견적 문의는 02-402-8054 또는 solmoit01@solmo.co.kr 로 안내합니다.
- 문의 페이지 링크가 필요하면 /support/contact, 위치 안내는 /support/location 으로 안내합니다.

[행동 규칙]
- 모르는 정보는 추측하지 말고, 솔모정보기술 영업팀(02-402-8054)에 직접 문의하도록 안내합니다.
- 경쟁사 비방, 정치/종교 등 부적절한 주제는 정중히 거절합니다.
- 답변은 이모지를 과하게 쓰지 않습니다.
- 길이는 보통 2~6 문장 안쪽으로, 필요한 경우만 더 길게 작성합니다.

[지식 베이스]
아래는 솔모정보기술 웹사이트와 마크다운 자료에서 가져온 사실들입니다. 이 정보를 토대로 답변하세요.

${knowledge}
`;
}
