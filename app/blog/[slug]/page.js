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
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-8 pb-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-200 font-semibold mb-8 hover:text-white transition-colors group text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <LucideIcon name="ArrowLeft" size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blogs
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-orange-500/30 border border-orange-400">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 leading-[1.2] tracking-tight" style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100 font-medium">
            <div className="flex items-center gap-2">
              <LucideIcon name="Calendar" size={16} className="text-orange-400" />
              <span>{new Date(blog.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
            <div className="flex items-center gap-2">
              <LucideIcon name="User" size={16} className="text-orange-400" />
              <span>{blog.author}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
            <div className="flex items-center gap-2">
              <LucideIcon name="Clock" size={16} className="text-orange-400" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {blog.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white bg-white">
            <Image src={blog.image} alt={blog.title} width={896} height={504} className="w-full h-auto object-cover aspect-[16/9]" priority />
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
          <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-[#25D366]/30 flex items-center gap-2.5 text-sm flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Share Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Share this article:</span>
          <div className="flex items-center gap-4">
            <a href={`https://wa.me/?text=Check out this article: https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all hover:scale-110 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:scale-110 shadow-sm">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${blog.title}&url=https://suhanaservicecentre.in/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all hover:scale-110 shadow-sm">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
