import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// PUT /api/videos/[id] — update video card
export async function PUT(req, { params }) {
  try {
    const body = await req.json()
    const { title, description, videoUrl, thumbnailUrl, isActive, sortOrder } = body
    const video = await prisma.videoCard.update({
      where: { id: params.id },
      data: {
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(videoUrl && { videoUrl }),
        ...(thumbnailUrl !== undefined && { thumbnailUrl }),
        ...(isActive !== undefined && { isActive }),
        ...(sortOrder !== undefined && { sortOrder }),
      },
    })
    const { revalidateTag } = require('next/cache')
    revalidateTag('videos')
    return NextResponse.json(video)
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

// DELETE /api/videos/[id] — delete video card
export async function DELETE(req, { params }) {
  try {
    await prisma.videoCard.delete({ where: { id: params.id } })
    const { revalidateTag } = require('next/cache')
    revalidateTag('videos')
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
