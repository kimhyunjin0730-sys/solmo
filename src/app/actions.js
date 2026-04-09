'use server';

import nodemailer from "nodemailer";
import { getPrisma } from "@/lib/prisma";

export async function submitInquiry(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    const prisma = getPrisma();
    // 1. Save to Database
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        message,
      },
    });

    // 2. Send Notification Email via Nodemailer
    // IMPORTANT: Users MUST set EMAIL_USER and EMAIL_PASS in .env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', 
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // Professional HTML Table Template
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #001F5B; border-bottom: 2px solid #001F5B; padding-bottom: 10px;">[SOLMO] 새로운 홈페이지 문의 접수</h2>
        <p>홈페이지를 통해 새로운 문의가 접수되었습니다.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <th style="text-align: left; padding: 12px; background: #f8f9fa; border: 1px solid #ddd; width: 30%;">분류</th>
            <th style="text-align: left; padding: 12px; border: 1px solid #ddd;">내용</th>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">성함 / 기업명</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">이메일 주소</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">문의 상세 내용</td>
            <td style="padding: 12px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">접수 일시</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${new Date().toLocaleString('ko-KR')}</td>
          </tr>
        </table>
        <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
          이 메일은 시스템에 의해 자동 발송되었습니다.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"SOLMO Web" <${process.env.EMAIL_USER}>`,
      to: 'kimhyunjin0730@gmail.com', // User's requested test email
      subject: `[홈페이지 문의] ${name}님의 새로운 문의입니다.`,
      html: htmlContent,
    });

    return { success: true, inquiryId: inquiry.id };
  } catch (error) {
    console.error("Inquiry Submission Error:", error);
    // Even if email fails, we return success if it was saved to DB, 
    // but here we might want to know it failed.
    return { success: false, error: error.message };
  }
}
