import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(req, { params }) {
  try {
    const data = await req.json()
    const cert = await prisma.certificate.update({
      where: { id: params.id },
      data
    })
    const { revalidateTag } = require('next/cache')
    revalidateTag('certificates')
    return NextResponse.json(cert)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update certificate' }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    await prisma.certificate.delete({
      where: { id: params.id }
    })
    const { revalidateTag } = require('next/cache')
    revalidateTag('certificates')
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete certificate' }, { status: 500 })
  }
}
