import Link from 'next/link'
import LucideIcon from './LucideIcon'

export default function BlogCard({ blog }) {
  const isNew = blog.createdAt && (new Date() - new Date(blog.createdAt) <= 24 * 60 * 60 * 1000)

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            width={400}
            height={224}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <LucideIcon name="Image" size={48} className="text-gray-300" />
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md animate-pulse">
              NEW
            </span>
          )}
          <span className="bg-blue-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-3">
          <LucideIcon name="Calendar" size={14} />
          <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : 'Recent'}</span>
          <span className="mx-1">•</span>
          <LucideIcon name="User" size={14} />
          <span>{blog.author}</span>
        </div>

        <h3 className="text-blue-900 font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/link"
          >
            Read Full Article
            <LucideIcon
              name="ArrowRight"
              size={16}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

