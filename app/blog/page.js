import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import BlogCard from '@/components/BlogCard'
import LucideIcon from '@/components/LucideIcon'

export const revalidate = 3600 // ISR: re-generate at most once per hour

export const metadata = {
  title: 'Blog — Tips & Guides | Suhana Service Centre',
  description: 'Read latest tips and guides on Aadhaar, PAN, Passport & government services at Suhana Service Centre Virar.',
  keywords: ['aadhaar card tips', 'pan card guide', 'passport application guide', 'government services blog virar', 'digital services tips'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog — Suhana Service Centre Virar',
    description: 'Helpful guides and latest updates on government & digital services.',
  },
}

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    where: {
      isPublished: true,
      OR: [
        { scheduledAt: null },
        { scheduledAt: { lte: new Date() } }
      ]
    },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <main className="min-h-screen pt-24 lg:pt-32 pb-20">
      {/* Header Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-blue-50/50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex justify-center mb-6 animate-fade-up">
            <ol className="flex items-center gap-2 text-sm font-semibold text-gray-500">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li className="text-gray-300"><LucideIcon name="ChevronRight" size={14} /></li>
              <li className="text-blue-600">Blog</li>
            </ol>
          </nav>

          <h1 className="text-4xl lg:text-6xl font-black text-blue-950 mb-6 animate-fade-up">
            Insights & <span className="text-blue-600">Updates</span>
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl max-w-2xl mx-auto font-medium animate-fade-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Stay informed with our latest articles on government services, digital tools, and helpful guides for daily tasks.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogs.map((blog, index) => (
              <div key={blog.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          {/* Empty State / More coming soon */}
          <div className="mt-20 text-center py-16 px-8 bg-blue-50/30 rounded-3xl border border-blue-100 border-dashed">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4 shadow-sm border border-blue-50">
              <LucideIcon name="Sparkles" size={32} />
            </div>
            <h3 className="text-blue-900 font-bold text-xl mb-2">More Content Coming Soon</h3>
            <p className="text-gray-500">We regular update our blog with more helpful guides and news.</p>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="mt-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-900 to-blue-950 rounded-[40px] p-10 lg:p-16 relative overflow-hidden text-center lg:text-left">
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10 lg:flex items-center gap-12">
            <div className="flex-grow">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                Need help with any<br />Online Application?
              </h2>
              <p className="text-blue-200 text-lg mb-8 lg:mb-0 max-w-md">
                Our experts are ready to assist you with all your digital and government service needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-1 shadow-xl shadow-green-500/20 flex items-center justify-center gap-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.124.558 4.118 1.535 5.848L4 29l8.374-2.194A11.95 11.95 0 0016.002 27C22.631 27 28 21.631 28 15.002 28 8.373 22.631 3 16.002 3zm0 21.846c-1.894 0-3.662-.503-5.19-1.38l-.372-.22-3.86 1.012 1.03-3.756-.24-.386A9.844 9.844 0 016.154 15c0-5.43 4.418-9.846 9.848-9.846S25.846 9.57 25.846 15c0 5.432-4.416 9.846-9.844 9.846zm5.404-7.37c-.297-.148-1.754-.866-2.026-.965-.272-.099-.47-.148-.668.149-.198.297-.766.965-.939 1.162-.173.198-.347.223-.644.075-.297-.149-1.254-.462-2.388-1.473-.883-.786-1.479-1.756-1.652-2.053-.173-.297-.018-.457.13-.605.133-.133.297-.347.445-.52.148-.174.198-.298.297-.496.099-.198.05-.372-.025-.52-.074-.149-.668-1.61-.915-2.203-.241-.579-.487-.5-.668-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.015-1.04 2.476 0 1.46 1.065 2.872 1.213 3.07.148.198 2.095 3.2 5.077 4.487.71.306 1.263.488 1.695.624.712.227 1.36.195 1.872.118.571-.085 1.757-.719 2.006-1.413.248-.693.248-1.287.173-1.412-.074-.124-.272-.198-.57-.347z" />
                </svg>                WhatsApp Us
              </a>
              <Link href="/contact" className="bg-white hover:bg-gray-50 text-blue-900 font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-1 shadow-xl shadow-white/10 flex items-center justify-center gap-2">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

