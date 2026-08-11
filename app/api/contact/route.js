import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendAdminNotification, sendCustomerReply } from '@/lib/email'
import { getContactAdminTemplate, getContactCustomerTemplate } from '@/lib/email-templates'

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
    const adminHtml = getContactAdminTemplate(data);
    await sendAdminNotification(adminSubject, adminHtml);

    // Send Auto-Reply to Customer
    if (data.email) {
      const customerSubject = `Thank you for contacting Suhana Service Centre`;
      const customerHtml = getContactCustomerTemplate(data);
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
