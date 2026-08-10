import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import LucideIcon from '@/components/LucideIcon'
import BlogContent from '@/components/BlogContent'

export const revalidate = 3600 // ISR: re-generate at most once per hour

export async function generateMetadata({ params }) {
  const blog = await prisma.blog.findUnique({ where: { slug: params.slug } })
  if (!blog || !blog.isPublished) return { title: 'Blog Not Found' }
  const shortExcerpt = blog.excerpt ? blog.excerpt.slice(0, 145) + (blog.excerpt.length > 145 ? '...' : '') : ''
  return {
    title: `${blog.title} | Suhana Service Center`,
    description: shortExcerpt,
    keywords: [blog.category, 'suhana service center', 'virar', blog.title.toLowerCase()],
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: shortExcerpt,
      images: blog.image ? [{ url: blog.image }] : [],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug }
  })

  if (!blog || !blog.isPublished) {
    notFound()
  }

  // Estimate reading time
  const wordCount = blog.content.split(/\s+/).length
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    image: blog.image ? [blog.image] : [],
    datePublished: new Date(blog.createdAt).toISOString(),
    dateModified: new Date(blog.updatedAt).toISOString(),
    author: [{
      '@type': 'Person',
      name: blog.author || 'Suhana Service Center',
      url: 'https://suhanaservicecentre.in/about'
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Suhana Service Center',
      logo: {
        '@type': 'ImageObject',
        url: 'https://suhanaservicecentre.in/logo.png'
      }
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pb-12">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-8 hover:text-blue-800 transition-colors group">
            <LucideIcon name="ArrowLeft" size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blogs
          </Link>

          {/* Category Badge */}
          <div className="mb-5">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.15em] shadow-lg shadow-blue-500/20">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-[1.15] tracking-tight" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-semibold pb-8">
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <LucideIcon name="Calendar" size={14} className="text-blue-500" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <LucideIcon name="User" size={14} className="text-blue-500" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <LucideIcon name="Clock" size={14} className="text-blue-500" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
            <Image src={blog.image} alt={blog.title} width={896} height={504} className="w-full h-auto object-cover" priority />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <BlogContent content={blog.content} />
      </div>

      {/* Author Card / CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100/50 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 flex-shrink-0">
            S
          </div>
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-black text-gray-900 mb-1">Suhana Service center</h3>
            <p className="text-gray-500 text-sm font-medium">Your trusted partner for government & digital services in Virar East. Visit us for expert assistance!</p>
          </div>
          <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-2xl transition-all hover:-translate-y-0.5 shadow-md shadow-green-500/20 flex items-center gap-2 text-sm flex-shrink-0">
            <LucideIcon name="MessageCircle" size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Share Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex items-center justify-center gap-4">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Share this article</span>
        <div className="h-px flex-1 bg-gray-100"></div>
      </div>
    </main>
  )
}
