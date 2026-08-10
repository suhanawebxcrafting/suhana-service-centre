import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import cloudinary from '@/lib/cloudinary'

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

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('XEROX_SUBMISSION_ERROR:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

