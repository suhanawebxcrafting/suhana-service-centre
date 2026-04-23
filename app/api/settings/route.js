import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')
  
  if (!key) {
    const all = await prisma.systemSetting.findMany()
    return NextResponse.json(all)
  }

  const setting = await prisma.systemSetting.findUnique({ where: { key } })
  return NextResponse.json(setting || { key, value: null })
}

export async function POST(req) {
  try {
    const { key, value } = await req.json()
    
    if (!key || value === undefined) {
      return NextResponse.json({ error: 'Key and value required' }, { status: 400 })
    }

    const setting = await prisma.systemSetting.upsert({
      where: { key },
      update: { value: String(value) },
      create: { key, value: String(value) }
    })

    return NextResponse.json(setting)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update setting' }, { status: 500 })
  }
}
