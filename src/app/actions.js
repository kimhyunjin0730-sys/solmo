'use server';

import nodemailer from "nodemailer";
import { getPrisma } from "@/lib/prisma";

/**
 * Inquiry submission with FULL DECOUPLING:
 * - DB save and email send are independent steps
 * - DB failure does NOT prevent email delivery
 * - Email failure does NOT prevent the user from getting a success response
 *   (we still return success because the message reached us via at least one channel)
 * - Each step logs its own error to Vercel Functions logs
 */
export async function submitInquiry(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  let dbSaved = false;
  let mailSent = false;
  let dbError = null;
  let mailError = null;
  let inquiryId = null;

  // ── Step 1: DB save (best-effort) ──
  try {
    const prisma = getPrisma();
    const inquiry = await prisma.inquiry.create({
      data: { name, email, message },
    });
    inquiryId = inquiry.id;
    dbSaved = true;
    console.log("[inquiry] saved to DB:", inquiryId);
  } catch (err) {
    dbError = err?.message || String(err);
    console.error("[inquiry] DB save FAILED:", dbError);
    // Don't return — keep going to email
  }

  // ── Step 2: Email send (independent) ──
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const receiver = process.env.RECEIVER_EMAIL || "kimhyunjin0730@gmail.com";

  if (!smtpUser || !smtpPass) {
    mailError = "SMTP credentials not set in environment";
    console.error("[inquiry] " + mailError);
  } else {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: smtpUser, pass: smtpPass },
      });

      // Verify the SMTP connection first — fails fast with a clear error
      try {
        await transporter.verify();
        console.log("[inquiry] SMTP connection verified");
      } catch (verifyErr) {
        console.error("[inquiry] SMTP verify failed:", verifyErr?.message || verifyErr);
      }

      const safeName = String(name || "").slice(0, 200);
      const safeEmail = String(email || "").slice(0, 200);
      const safeMessage = String(message || "").slice(0, 5000);
      const safeDbStatus = dbSaved
        ? `✅ DB 저장됨 (ID: ${inquiryId})`
        : `⚠ DB 저장 실패 (${dbError || "unknown"})`;

      const htmlContent = `
        <div style="font-family: 'Apple SD Gothic Neo', sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #001F5B, #4338ca); color: white; padding: 28px 32px;">
            <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.2em; opacity: 0.7; margin-bottom: 8px;">SOLMO WEB INQUIRY</div>
            <h1 style="margin: 0; font-size: 22px; font-weight: 800;">새로운 홈페이지 문의 접수</h1>
            <p style="margin: 8px 0 0; font-size: 13px; opacity: 0.8;">${new Date().toLocaleString("ko-KR")}</p>
          </div>
          <div style="padding: 28px 32px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #64748b; width: 130px;">성함 / 기업명</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;">${escapeHtml(safeName)}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #64748b;">이메일</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #0f172a;"><a href="mailto:${escapeHtml(safeEmail)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(safeEmail)}</a></td>
              </tr>
              <tr>
                <td style="padding: 14px 0; vertical-align: top; font-size: 12px; font-weight: 700; color: #64748b;">문의 내용</td>
                <td style="padding: 14px 0; font-size: 14px; color: #0f172a; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(safeMessage)}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 12px 16px; background: #f8fafc; border-radius: 8px; font-size: 11px; color: #64748b;">
              ${safeDbStatus}
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f8fafc; font-size: 11px; color: #94a3b8; text-align: center;">
            이 메일은 solmo.vercel.app 자동 발송 시스템에서 전송되었습니다.
          </div>
        </div>
      `;

      const info = await transporter.sendMail({
        from: `"SOLMO Web" <${smtpUser}>`,
        to: receiver,
        replyTo: email,
        subject: `[솔모 문의] ${name}님 — ${String(message).slice(0, 30)}...`,
        html: htmlContent,
      });
      mailSent = true;
      console.log("[inquiry] email sent:", info.messageId, "to:", receiver);
    } catch (err) {
      mailError = err?.message || String(err);
      console.error("[inquiry] email send FAILED:", mailError);
    }
  }

  // ── Step 3: Return result ──
  // We consider it a success if EITHER channel succeeded
  const success = dbSaved || mailSent;

  if (!success) {
    return {
      success: false,
      error: `문의 전송 실패. DB: ${dbError || "?"} / Mail: ${mailError || "?"}`,
    };
  }

  return {
    success: true,
    inquiryId,
    dbSaved,
    mailSent,
    ...(dbError ? { dbWarning: dbError } : {}),
    ...(mailError ? { mailWarning: mailError } : {}),
  };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
