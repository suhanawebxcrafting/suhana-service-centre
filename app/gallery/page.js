export const metadata = {
  title: 'Gallery | Suhana Service centre Virar',
  description: 'Photos of Suhana Service centre — our office and work at Virar.',
}

const galleryItems = [
  { emoji: '🏢', title: 'Our Office', desc: 'Modern, well-equipped service centre' },
  { emoji: '💻', title: 'Digital Services', desc: 'All online services on fast computers' },
  { emoji: '🖨️', title: 'Printing Station', desc: 'Color & B/W printing, scanning, lamination' },
  { emoji: '💳', title: 'Smart Card Printing', desc: 'PVC card printing for all IDs' },
  { emoji: '📋', title: 'Document Processing', desc: 'All government document services' },
  { emoji: '🤝', title: 'Customer Service', desc: 'Dedicated, friendly staff' },
  { emoji: '📱', title: 'Mobile Services', desc: 'Recharge, bill payment, mobile banking' },
  { emoji: '🏛️', title: 'Govt Services', desc: 'All government portal services' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-16 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-centre">
          <div className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🖼️ Gallery
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            Our <span className="text-orange-400">Gallery</span>
          </h1>
          <p className="text-blue-200 text-base">A glimpse of our service centre and work</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white"><path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" /></svg>
        </div>
      </section>

      <section className="py-14 pattern-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-centre mb-10">
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Our well-equipped service centre in Virar is ready to serve you with all government and digital services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                <div className="h-44 bg-gradient-to-br from-blue-50 to-blue-100 flex items-centre justify-centre">
                  <span className="text-7xl">{item.emoji}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-centre mt-10 bg-blue-50 rounded-2xl p-7 border border-blue-100">
            <p className="text-gray-600 text-sm mb-4">
              📸 Want to see more? Visit our centre at Virar (East) or contact us on WhatsApp!
            </p>
            <a href="https://wa.me/917709709243" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-centre gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors">
              💬 Chat with Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

