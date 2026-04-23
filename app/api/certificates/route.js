import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const certs = await prisma.certificate.findMany({
      orderBy: { sortOrder: 'asc' }
    })
    return NextResponse.json(certs)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const data = await req.json()
    const cert = await prisma.certificate.create({ data })
    return NextResponse.json(cert)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create certificate' }, { status: 500 })
  }
}
