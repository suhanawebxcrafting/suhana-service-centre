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
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Convert file to base64 for Cloudinary
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileBase64 = `data:${file.type};base64,${buffer.toString('base64')}`

    // Upload to Cloudinary
    const uploadRes = await cloudinary.uploader.upload(fileBase64, {
      folder: 'suhana-xerox-orders',
      resource_type: 'auto',
    })

    // Save to Database
    const order = await prisma.xeroxOrder.create({
      data: {
        customerName: name,
        phoneNumber: phone,
        address: address,
        distance: distance,
        deliveryCharge: deliveryCharge,
        documentUrl: uploadRes.secure_url,
      },
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('XEROX_SUBMISSION_ERROR:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
