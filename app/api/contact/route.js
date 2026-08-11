import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendAdminNotification, sendCustomerReply } from '@/lib/email'

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const data = await req.json();
    const message = await prisma.contactMessage.create({ data });

    // Send email to Admin
    const adminSubject = `New Contact Inquiry: ${data.subject || 'Suhana Service Centre'}`;
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `;
    await sendAdminNotification(adminSubject, adminHtml);

    // Send Auto-Reply to Customer
    if (data.email) {
      const customerSubject = `Thank you for contacting Suhana Service Centre`;
      const customerHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb;">Hello ${data.name},</h2>
          <p>Thank you for reaching out to <strong>Suhana Service Centre</strong>.</p>
          <p>We have received your message regarding "<strong>${data.subject || 'your inquiry'}</strong>". Our team will review it and get back to you as soon as possible.</p>
          <br/>
          <p><strong>Your Message:</strong></p>
          <blockquote style="border-left: 4px solid #e5e7eb; padding-left: 1rem; color: #6b7280; font-style: italic;">
            ${data.message}
          </blockquote>
          <br/>
          <p>If you need immediate assistance, feel free to call or WhatsApp us at <strong>+91 77097 09243</strong>.</p>
          <br/>
          <p>Best regards,<br/><strong>Suhana Service Centre Team</strong><br/>Virar East</p>
        </div>
      `;
      await sendCustomerReply(data.email, customerSubject, customerHtml);
    }

    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { id, isRead } = await req.json();
    const updated = await prisma.contactMessage.update({
      where: { id },
      data: { isRead }
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    await prisma.contactMessage.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
