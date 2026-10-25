import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'
import BlogCard from '@/components/BlogCard'
import LucideIcon from '@/components/LucideIcon'

export const metadata = {
  title: 'Blog & Government Service Guides | Suhana Service Center',
  description: 'Read the latest step-by-step guides on Aadhaar, PAN, Passport, Gazette name changes, Domicile certificates & digital tools at Suhana Service Center Virar.',
  keywords: ['aadhaar card tips', 'pan card guide', 'passport application guide', 'gazette name change guide', 'domicile certificate guide', 'government services blog virar'],
  alternates: {
    canonical: '/blog',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Official Guides & Blog | Suhana Service Center',
    description: 'Helpful government service guides, document checklists, and citizen tips.',
  },
}

export default async function BlogPage() {
  const getBlogs = unstable_cache(
    async () => await prisma.blog.findMany({
      where: {
        isPublished: true,
        OR: [
          { scheduledAt: null },
          { scheduledAt: { lte: new Date() } }
        ]
      },
      orderBy: { createdAt: 'desc' },
      select: { id: true, title: true, slug: true, image: true, category: true, createdAt: true, author: true, excerpt: true }
    }),
    ['blog-list-v2'],
    { tags: ['blogs'] }
  )

  let blogs = []
  try {
    blogs = await getBlogs()
  } catch (e) {
    console.warn('blogs not available:', e.message)
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* Sleek, Professional Compact Hero Section */}
      <section className="hero-gradient relative pt-24 sm:pt-28 pb-12 sm:pb-14 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          
          {/* Compact Breadcrumb */}
          <nav className="flex justify-center mb-3">
            <ol className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 text-blue-100 shadow-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="text-blue-300">›</li>
              <li className="text-white font-bold">Blog</li>
            </ol>
          </nav>

          {/* Crisp, Balanced Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-2.5 tracking-tight leading-tight">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Updates</span>
          </h1>

          {/* Concise Subtitle */}
          <p className="text-blue-100/90 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Latest official guides, document requirements, and step-by-step assistance for government and digital services.
          </p>

        </div>

        {/* Subtle Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 24" fill="#f8fafc" className="w-full h-5 sm:h-6 block">
            <path d="M0,12 C360,24 1080,0 1440,12 L1440,24 L0,24 Z" />
          </svg>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Results Summary Bar */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 flex-wrap gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                All Published Guides
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Verified procedures according to latest Maharashtra & Central Government norms.
              </p>
            </div>
            <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {blogs.length} Articles Available
            </span>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="h-full">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          {/* Assistance CTA Card */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                Expert Assistance
              </span>
              <h3 className="text-xl sm:text-2xl font-black">Need Help with Any Application or Document?</h3>
              <p className="text-blue-200 text-xs sm:text-sm max-w-xl">
                Avoid form rejections and office visits. Let Suhana Service Center manage your document drafting, online submission, and verification.
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap gap-3 flex-shrink-0">
              <a
                href="https://wa.me/917709709243"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-black px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
              >
                <LucideIcon name="MessageCircle" size={16} />
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="bg-white hover:bg-blue-50 text-blue-900 font-black px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
              >
                Visit Center
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
