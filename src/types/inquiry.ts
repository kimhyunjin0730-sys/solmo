/**
 * 문의 폼 도메인 타입. 클라이언트 검증, 서버 검증, DB, 메일 송신 모두에서 공유.
 */

export type InquiryInput = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  /** 마케팅/개인정보 수집 동의 */
  agreement: boolean;
};

export type InquirySubmitResult =
  | {
      ok: true;
      /** DB 저장 성공 여부 (메일은 별도로 보내짐) */
      saved: boolean;
      /** 메일 전송 성공 여부 */
      mailed: boolean;
    }
  | {
      ok: false;
      error: string;
      fieldErrors?: Partial<Record<keyof InquiryInput, string>>;
    };
