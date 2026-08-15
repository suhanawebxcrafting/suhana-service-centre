import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET /api/videos — public, returns all active videos ordered by sortOrder (or all videos if all=true is passed)
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const showAll = searchParams.get('all') === 'true'

    const videos = await prisma.videoCard.findMany({
      where: showAll ? undefined : { isActive: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    })
    return NextResponse.json(videos)
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

// POST /api/videos — admin: create new video card
export async function POST(req) {
  try {
    const body = await req.json()
    const { title, description, videoUrl, thumbnailUrl, isActive, sortOrder } = body
    if (!title || !videoUrl) {
      return NextResponse.json({ error: 'title and videoUrl are required' }, { status: 400 })
    }
    const video = await prisma.videoCard.create({
      data: {
        title,
        description: description || null,
        videoUrl,
        thumbnailUrl: thumbnailUrl || null,
        isActive: isActive !== undefined ? isActive : true,
        sortOrder: sortOrder || 0,
      },
    })
    const { revalidateTag } = require('next/cache')
    revalidateTag('videos')
    return NextResponse.json(video, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
