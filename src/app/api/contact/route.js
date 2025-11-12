// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Regex for validating email addresses (RFC 5322 simplified version)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Basic sanitization (remove <script> tags etc.)
function sanitize(input) {
  if (typeof input !== "string") return "";
  return input.replace(/<[^>]*>?/gm, ""); 
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract and sanitize form inputs
    const firstName = sanitize(formData.get('firstName'));
    const lastName = sanitize(formData.get('lastName'));
    const email = sanitize(formData.get('email'));
    const phone = sanitize(formData.get('phone'));
    const company = sanitize(formData.get('company'));
    const serviceType = sanitize(formData.get('serviceType'));
    const message = sanitize(formData.get('message'));

    // ✅ Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // ✅ Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    // ✅ Mapping function for friendly service type display
    const getServiceDisplay = (type) => {
      const map = {
        Consulting: 'FSX Consulting',
        Support: 'FSX Support',
        Development: 'FSX Tech',
        Event: 'FSX Events',
        Connect: 'FSX Connect',
        Academy: 'FSX Academy'
      };
      return map[type] || type || 'Not specified';
    };

    // ✅ Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", 
      port: 587,
      secure: false,
      auth: {
        user: "mrchidubem8@gmail.com", 
        pass: "uyosmsrgampbbqla", 
      },
    });

    // ✅ Enhanced HTML Email Template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0D519A, #20A89F); padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 0;">📩 New Fsx Contact Request</h2>
          </div>

          <!-- Body -->
          <div style="padding: 20px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Service Type:</strong> ${getServiceDisplay(serviceType)}</p>
            <p><strong>Message:</strong></p>
            <p style="background:#f1f1f1; padding:10px; border-radius:5px;">${message}</p>
          </div>

          <!-- Footer -->
          <div style="background: #0D519A; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0;">Fransunisoft © ${new Date().getFullYear()} | Secure Mail</p>
          </div>
        </div>
      </div>
    `;

    // ✅ Send email
    const info = await transporter.sendMail({
      from: `"FSX Contact" <mrchidubem8@gmail.com>`,
      to: "hello@fransunisoft.com", 
      subject: `FSX Inquiry from ${firstName} ${lastName}`,
      html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { success: false, error: "An error occurred while sending your request." },
      { status: 500 }
    );
  }
}