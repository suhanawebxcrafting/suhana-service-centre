'use client'
import { useState, useRef } from 'react'

function getYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

function isYouTubeUrl(url) {
  return /youtube\.com|youtu\.be/.test(url)
}

function VideoCard({ video, onPlay }) {
  const ytId = isYouTubeUrl(video.videoUrl) ? getYouTubeId(video.videoUrl) : null
  const thumb = video.thumbnailUrl
    ? video.thumbnailUrl
    : ytId
    ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
    : null

  return (
    <div
      className="group relative flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:-translate-y-1"
      onClick={() => onPlay(video)}
    >
      {/* Thumbnail */}
      <div className="relative h-44 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        {thumb ? (
          <img src={thumb} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="text-white/30" width="64" height="64" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg width="24" height="24" fill="#2563eb" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        {/* YouTube badge */}
        {ytId && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">YouTube</div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-blue-900 text-sm leading-snug line-clamp-2 mb-1">{video.title}</h3>
        {video.description && (
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{video.description}</p>
        )}
      </div>
    </div>
  )
}

function VideoModal({ video, onClose }) {
  const ytId = isYouTubeUrl(video.videoUrl) ? getYouTubeId(video.videoUrl) : null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        <div className="aspect-video w-full bg-black">
          {ytId ? (
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full"
              title={video.title}
            />
          )}
        </div>

        <div className="p-4 bg-white">
          <h3 className="font-bold text-blue-900 text-base">{video.title}</h3>
          {video.description && <p className="text-gray-500 text-sm mt-1">{video.description}</p>}
        </div>
      </div>
    </div>
  )
}

export default function VideoCarousel({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null)
  const scrollRef = useRef(null)

  if (!videos || videos.length === 0) return null

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="relative">
        {/* Left arrow */}
        {videos.length > 3 && (
          <button
            onClick={() => scroll(-1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center border border-gray-100 hover:bg-blue-50 transition-colors"
          >
            <svg width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        )}

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map(v => (
            <div key={v.id} className="snap-start">
              <VideoCard video={v} onPlay={setActiveVideo} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        {videos.length > 3 && (
          <button
            onClick={() => scroll(1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full items-center justify-center border border-gray-100 hover:bg-blue-50 transition-colors"
          >
            <svg width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        )}
      </div>

      {/* Modal */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  )
}
