import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateSlug } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    
    // Update slug if title is changed but slug is not provided
    if (data.title && !data.slug) {
      data.slug = generateSlug(data.title);
    }
    
    const blog = await prisma.blog.update({
      where: { id: params.id },
      data
    });

    // Trigger on-demand ISR revalidation for homepage, blog listing, the updated post, and sitemap
    revalidatePath('/')
    revalidatePath('/blog')
    revalidatePath(`/blog/${blog.slug}`)
    revalidatePath('/sitemap.xml')

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const blog = await prisma.blog.delete({
      where: { id: params.id }
    });

    // Trigger on-demand ISR revalidation for homepage, blog listing, the deleted post, and sitemap
    if (blog) {
      revalidatePath('/')
      revalidatePath('/blog')
      revalidatePath(`/blog/${blog.slug}`)
      revalidatePath('/sitemap.xml')
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
