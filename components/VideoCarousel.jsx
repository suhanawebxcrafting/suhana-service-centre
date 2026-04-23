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

  if (!videos || videos.length === 0) return null

  const sliderItems = [...videos, ...videos, ...videos]

  return (
    <>
      <div className="relative w-full py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        {/* Fade Overlays (only on desktop) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        {/* Manual Scroll Container */}
        <div className="flex overflow-x-auto pb-6 pt-2 px-4 md:px-32 snap-x snap-mandatory scrollbar-hide gap-4">
          {videos.map((v) => (
            <div key={v.id} className="flex-shrink-0 snap-center">
              <VideoCard video={v} onPlay={setActiveVideo} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Modal */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  )
}
