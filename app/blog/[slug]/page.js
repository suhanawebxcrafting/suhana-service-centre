import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import LucideIcon from '@/components/LucideIcon'
import BlogContent from '@/components/BlogContent'
import BlogCard from '@/components/BlogCard'

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

  // Fetch related articles
  const relatedBlogs = await prisma.blog.findMany({
    where: { isPublished: true, slug: { not: params.slug }, category: blog.category },
    orderBy: { createdAt: 'desc' },
    take: 3
  })

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
    <main className="min-h-screen pb-20 bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Premium Hero Section */}
      <div className="relative bg-[#0f172a] pt-32 pb-40 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -mr-96 -mt-96 opacity-70 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] -ml-64 -mb-64 opacity-60"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Back Button */}
          <div className="flex justify-center mb-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group text-sm bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 shadow-lg">
              <LucideIcon name="ArrowLeft" size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to all articles
            </Link>
          </div>

          {/* Category Badge */}
          <div className="mb-8 inline-flex items-center justify-center">
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white text-[11px] font-black px-5 py-2.5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-orange-400/50">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.15] tracking-tight max-w-4xl mx-auto drop-shadow-lg" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-300 font-medium pb-4">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <LucideIcon name="Calendar" size={16} className="text-orange-400" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <LucideIcon name="User" size={16} className="text-blue-400" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <LucideIcon name="Clock" size={16} className="text-green-400" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col lg:flex-row gap-10">
        
        {/* Floating Share Sidebar (Desktop) */}
        <div className="hidden lg:block w-16 flex-shrink-0 relative">
          <div className="sticky top-32 flex flex-col items-center gap-4 bg-white p-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest writing-vertical-rl mb-2 mt-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>Share</span>
            <div className="w-px h-8 bg-gray-200 mb-2"></div>
            <a href={`https://wa.me/?text=Check out this article: https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all hover:scale-110" title="Share on WhatsApp">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110" title="Share on Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${blog.title}&url=https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110" title="Share on X (Twitter)">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
          </div>
        </div>

        {/* Main Content Column */}
        <div className="flex-1 max-w-3xl lg:max-w-none -mt-32">
          {/* Featured Image */}
          {blog.image && (
            <div className="mb-12">
              <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white bg-white group">
                <Image src={blog.image} alt={blog.title} width={896} height={504} className="w-full h-auto object-cover aspect-[16/9] transition-transform duration-700 group-hover:scale-105" priority />
              </div>
            </div>
          )}

          {/* Blog Content */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-12 relative">
            <BlogContent content={blog.content} />
          </div>

          {/* Author Card / CTA */}
          <div className="bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-[2rem] p-8 sm:p-10 shadow-2xl relative overflow-hidden mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-orange-500/30 flex-shrink-0 transform rotate-3">
                S
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Suhana Service Centre</h3>
                <p className="text-blue-200 text-sm md:text-base font-medium max-w-lg">Your trusted partner for government & digital services in Virar East. Need help with PAN, Aadhaar, or Passport? We are just a message away!</p>
              </div>
              <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_25px_rgba(37,211,102,0.4)] flex items-center gap-3 whitespace-nowrap group">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-bounce">
                  <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          {/* Mobile Share Section */}
          <div className="lg:hidden flex flex-col items-center justify-center gap-6 mb-16 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Share this article</span>
            <div className="flex items-center gap-6">
              <a href={`https://wa.me/?text=Check out this article: https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${blog.title}&url=https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110 shadow-sm">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedBlogs && relatedBlogs.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">More Articles You Might Like</h2>
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors bg-blue-50 px-5 py-2.5 rounded-full">
              View All Articles <LucideIcon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
