import LucideIcon from '@/components/LucideIcon'

export default function FAQSection({
  faqs = [],
  title = 'Frequently Asked Questions',
  highlight = 'Questions',
  subtitle = "Find fast, clear answers to common questions about our services, procedures, and delivery.",
  badge = 'Help & FAQs',
  className = '',
  includeSchema = true,
}) {
  if (!faqs || faqs.length === 0) return null

  // Normalize FAQs to { q, a }
  const normalizedFaqs = faqs.map(item => ({
    q: item.q || item.question || '',
    a: item.a || item.answer || '',
  })).filter(item => item.q && item.a)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: normalizedFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  // Split title if highlight is provided
  const titleParts = highlight && title.includes(highlight)
    ? title.split(highlight)
    : [title]

  return (
    <section className={`py-12 lg:py-16 relative bg-white overflow-hidden ${className}`}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-blue-50/70 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-up">
          {badge && (
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest mb-3 border border-blue-100 shadow-sm">
              <LucideIcon name="HelpCircle" size={12} className="text-blue-600" /> {badge}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-black text-blue-950 mb-2.5 tracking-tight">
            {titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <span className="text-blue-600">{highlight}</span>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </h2>
          {subtitle && (
            <p className="text-gray-500 text-sm sm:text-[15px] max-w-xl mx-auto font-medium">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3.5">
          {normalizedFaqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer list-none select-none">
                <span className="font-bold text-gray-800 text-[15px] sm:text-[16px] pr-4 group-hover:text-blue-600 transition-colors">
                  {faq.q}
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50/80 flex items-center justify-center text-blue-600 flex-shrink-0 transition-all duration-300 group-open:rotate-180 group-open:bg-blue-600 group-open:text-white">
                  <LucideIcon name="ChevronDown" size={16} />
                </span>
              </summary>
              <div className="px-4 sm:px-5 pb-5 text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                <div className="w-full h-px bg-gray-100 mb-3.5"></div>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
