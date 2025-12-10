import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(input) {
  if (typeof input !== "string") return "";
  return input.replace(/<[^>]*>?/gm, "").trim();
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const type = sanitize(formData.get('type') || '');

    //  GMAIL SETUP 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // NEWSLETTER SUBSCRIPTION 
    if (type === 'newsletter') {
      const email = sanitize(formData.get('email'));
      if (!email || !emailRegex.test(email)) {
        return NextResponse.json({ success: false, error: "Please enter a valid email" }, { status: 400 });
      }

      await transporter.sendMail({
        from: `"FSX Newsletter" <${process.env.SMTP_USER}>`,
        to: "hello@fransunisoft.com", //jokafor@capplc.com
        subject: `New Subscriber: ${email}`,
        html: `
          <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:40px;text-align:center;">
            <h2 style="color:#0D519A;">New Newsletter Subscriber!</h2>
            <p style="font-size:18px;"><strong>${email}</strong> just joined the FSX community!</p>
            <p style="color:#666;">${new Date().toLocaleString()}</p>
          </div>
        `,
      });

      return NextResponse.json({ success: true, message: "Thank you! You've been subscribed!" });
    }

    // CONTACT FORM 
    const firstName = sanitize(formData.get('firstName'));
    const lastName = sanitize(formData.get('lastName'));
    const email = sanitize(formData.get('email'));
    const phone = sanitize(formData.get('phone'));
    const company = sanitize(formData.get('company'));
    const serviceType = sanitize(formData.get('serviceType'));
    const message = sanitize(formData.get('message'));

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ success: false, error: "Please fill in all required fields." }, { status: 400 });
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const getServiceDisplay = (type) => {
      const map = {
        Consulting: 'FSX Consulting', Labs: 'FSX Labs', Development: 'FSX Tech',
        Event: 'FSX Events', Connect: 'FSX Connect', Academy: 'FSX Academy'
      };
      return map[type] || type || 'Not specified';
    };

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0D519A, #20A89F); padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 0;">New FSX Contact Request</h2>
          </div>
          <div style="padding: 20px; line-height: 1.6;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Service Interested In:</strong> ${getServiceDisplay(serviceType)}</p>
            <p><strong>Message:</strong></p>
            <div style="background:#f1f1f1; padding:15px; border-radius:8px; margin-top:10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="background: #0D519A; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">Fransunisoft © ${new Date().getFullYear()} | Secure Inquiry</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"FSX Contact Form" <${process.env.SMTP_USER}>`,
      to: "hello@fransunisoft.com",   //hello@fransunisoft.com"
      replyTo: email,
      subject: `FSX Inquiry from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Thank you! Your message has been sent successfully." });

  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ success: false, error: "Sorry, something went wrong." }, { status: 500 });
  }
}