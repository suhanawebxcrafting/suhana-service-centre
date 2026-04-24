import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateSlug } from '@/lib/utils'

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Generate slug if not provided
    if (data.title && !data.slug) {
      data.slug = generateSlug(data.title);
    }
    
    const blog = await prisma.blog.create({ data });
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
