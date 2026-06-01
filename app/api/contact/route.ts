import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, businessName, message } = body;

  if (!name?.trim() || !email?.trim() || !businessName?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, businessName, message" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    console.error("CONTACT_EMAIL env var is not set");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #131313; color: #e4e2e1; padding: 40px;">
      <div style="border-bottom: 1px solid #444748; padding-bottom: 24px; margin-bottom: 32px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #dac769; margin: 0 0 4px 0;">
          Pegasus Pixels
        </h1>
        <p style="font-size: 12px; color: #8e9192; margin: 0; letter-spacing: 0.1em; text-transform: uppercase;">
          Nueva Solicitud de Contacto
        </p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748; width: 140px;">
            <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #8e9192;">
              Nombre
            </span>
          </td>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748; font-size: 15px; color: #e4e2e1;">
            ${name}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748;">
            <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #8e9192;">
              Empresa
            </span>
          </td>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748; font-size: 15px; color: #e4e2e1;">
            ${businessName}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748;">
            <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #8e9192;">
              Email
            </span>
          </td>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748; font-size: 15px;">
            <a href="mailto:${email}" style="color: #dac769; text-decoration: none;">${email}</a>
          </td>
        </tr>
        ${
          phone
            ? `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748;">
            <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #8e9192;">
              Teléfono
            </span>
          </td>
          <td style="padding: 12px 0; border-bottom: 1px solid #444748; font-size: 15px; color: #e4e2e1;">
            ${phone}
          </td>
        </tr>`
            : ""
        }
      </table>

      <div style="margin-top: 32px;">
        <p style="font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #8e9192; margin: 0 0 12px 0;">
          Mensaje
        </p>
        <div style="background: #1b1c1c; border: 1px solid #444748; border-radius: 4px; padding: 20px;">
          <p style="font-size: 15px; color: #e4e2e1; line-height: 1.7; margin: 0; white-space: pre-wrap;">
            ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
          </p>
        </div>
      </div>

      <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #444748;">
        <p style="font-size: 11px; color: #8e9192; margin: 0; text-align: center;">
          © 2025 Pegasus Pixels · estudio@pegasuspixels.com
        </p>
      </div>
    </div>
  `;

  try {
    const resend = getResend();
    await resend.emails.send({
      from: "Pegasus Pixels <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: "New Website Inquiry - Pegasus Pixels",
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
