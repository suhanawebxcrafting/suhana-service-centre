import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import cloudinary from '@/lib/cloudinary'
import { sendAdminNotification, sendCustomerReply } from '@/lib/email'

export async function POST(req) {
  try {
    const formData = await req.formData()
    const name = formData.get('name')
    const phone = formData.get('phone')
    const address = formData.get('address')
    const distance = parseFloat(formData.get('distance'))
    const deliveryCharge = parseFloat(formData.get('charge'))
    const serviceRequested = formData.get('serviceRequested') || formData.get('serviceNeeded') || 'Xerox Delivery'
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Generate a safe unique filename
    const originalName = file.name ? file.name.replace(/[^a-zA-Z0-9.]/g, '_') : 'document.pdf'
    const publicId = `${Date.now()}_${originalName}`

    // Convert file to buffer for Cloudinary
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Cloudinary using stream and resource_type 'raw' to prevent PDF corruption
    const uploadRes = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'suhana-xerox-orders',
          resource_type: 'raw',
          public_id: publicId,
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      )
      uploadStream.end(buffer)
    })

    // Save to Database
    const order = await prisma.xeroxOrder.create({
      data: {
        customerName: name,
        phoneNumber: phone,
        address: address,
        distance: distance,
        deliveryCharge: deliveryCharge,
        serviceRequested: serviceRequested,
        documentUrl: uploadRes.secure_url,
      },
    })

    const email = formData.get('email');

    // Send email to Admin
    const adminSubject = `New Xerox Order: ${serviceRequested} by ${name}`;
    const adminHtml = `
      <h2>New Xerox Delivery Order Received</h2>
      <p><strong>Customer Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Service Requested:</strong> ${serviceRequested}</p>
      <p><strong>Document Link:</strong> <a href="${uploadRes.secure_url}">View Document</a></p>
    `;
    await sendAdminNotification(adminSubject, adminHtml);

    // Send Auto-Reply to Customer
    if (email) {
      const customerSubject = `Order Received: ${serviceRequested} - Suhana Service Centre`;
      const customerHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb;">Hello ${name},</h2>
          <p>Thank you for choosing <strong>Suhana Service Centre</strong>.</p>
          <p>We have successfully received your order for "<strong>${serviceRequested}</strong>".</p>
          <br/>
          <p>Our team is currently reviewing your document. We will contact you shortly at <strong>${phone}</strong> to confirm the exact pricing and delivery time.</p>
          <br/>
          <p>If you have any urgent changes or questions, please WhatsApp us at <strong>+91 77097 09243</strong>.</p>
          <br/>
          <p>Best regards,<br/><strong>Suhana Service Centre Team</strong><br/>Virar East</p>
        </div>
      `;
      await sendCustomerReply(email, customerSubject, customerHtml);
    }

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('XEROX_SUBMISSION_ERROR:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

