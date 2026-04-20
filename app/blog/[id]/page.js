import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import LucideIcon from '@/components/LucideIcon'

export const dynamic = 'force-dynamic'

export default async function BlogPostPage({ params }) {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id }
  })

  if (!blog || !blog.isPublished) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8 hover:text-blue-800 transition-colors">
          <LucideIcon name="ArrowLeft" size={16} /> Back to Blogs
        </Link>
        <span className="bg-blue-100 text-blue-700 text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block">
          {blog.category}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 font-semibold mb-8 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-1.5">
            <LucideIcon name="Calendar" size={16} /> {new Date(blog.createdAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1.5">
            <LucideIcon name="User" size={16} /> {blog.author}
          </div>
        </div>
        
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-3xl mb-10 object-cover shadow-sm border border-gray-100" />
        )}
        
        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          {blog.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  )
}
