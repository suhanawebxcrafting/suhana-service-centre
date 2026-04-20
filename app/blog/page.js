import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import BlogCard from '@/components/BlogCard'
import LucideIcon from '@/components/LucideIcon'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({ where: { isPublished: true }, orderBy: { createdAt: 'desc' } })
  
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
                <LucideIcon name="MessageCircle" size={20} />
                WhatsApp Us
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

