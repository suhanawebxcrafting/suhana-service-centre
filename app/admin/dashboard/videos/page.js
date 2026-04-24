'use client'
import { useState, useEffect } from 'react'

export default function AdminVideosPage() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [toast, setToast] = useState(null)

  const emptyForm = { title: '', description: '', videoUrl: '', thumbnailUrl: '', isActive: true, sortOrder: 0 }
  const [form, setForm] = useState(emptyForm)
  const [uploadMode, setUploadMode] = useState('url') // 'url' | 'file'
  const [fileInput, setFileInput] = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/videos')
      const data = await res.json()
      // Admin view: fetch all (including inactive) — for now we filter none
      setVideos(Array.isArray(data) ? data : [])
    } catch { setVideos([]) } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const openAdd = () => { setForm(emptyForm); setEditTarget(null); setUploadMode('url'); setFileInput(null); setShowForm(true) }
  const openEdit = (v) => { setForm({ title: v.title, description: v.description || '', videoUrl: v.videoUrl, thumbnailUrl: v.thumbnailUrl || '', isActive: v.isActive, sortOrder: v.sortOrder }); setEditTarget(v); setUploadMode('url'); setShowForm(true) }

  const handleFileUpload = async (file) => {
    if (!file) return
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload-video', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) {
        setForm(f => ({ ...f, videoUrl: data.url }))
        showToast('Video uploaded successfully!')
      } else {
        showToast(data.error || 'Upload failed', 'error')
      }
    } catch (e) { showToast('Upload failed: ' + e.message, 'error') }
    finally { setUploading(false) }
  }

  const handleSave = async () => {
    if (!form.title || !form.videoUrl) { showToast('Title and video URL are required', 'error'); return }
    setSaving(true)
    try {
      const method = editTarget ? 'PUT' : 'POST'
      const url = editTarget ? `/api/videos/${editTarget.id}` : '/api/videos'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, sortOrder: parseInt(form.sortOrder) || 0 }) })
      if (!res.ok) throw new Error((await res.json()).error)
      showToast(editTarget ? 'Video updated!' : 'Video added!')
      setShowForm(false)
      load()
    } catch (e) { showToast(e.message, 'error') }
    finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this video?')) return
    try {
      await fetch(`/api/videos/${id}`, { method: 'DELETE' })
      showToast('Deleted!')
      load()
    } catch (e) { showToast(e.message, 'error') }
  }

  const toggleActive = async (v) => {
    await fetch(`/api/videos/${v.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isActive: !v.isActive }) })
    load()
  }

  function isYT(url) { return /youtube\.com|youtu\.be/.test(url) }
  function getYTId(url) { const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/); return m ? m[1] : null }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-xl text-white text-sm font-semibold transition-all ${toast.type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}>
          {toast.msg}
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-blue-950">🎬 Video Cards</h1>
            <p className="text-gray-500 text-sm mt-1">Add videos via file upload or URL (YouTube/MP4). They appear in a carousel on the homepage.</p>
          </div>
          <button onClick={openAdd} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/20 text-sm">
            + Add Video
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="font-bold text-blue-900 text-base mb-5">{editTarget ? 'Edit Video' : 'Add New Video'}</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Title *</label>
                <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. How to Apply for Aadhaar Card" />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Description</label>
                <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={2} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none" placeholder="Short description..." />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Video Source *</label>
                <div className="flex gap-3 mb-3">
                  <button onClick={() => setUploadMode('url')} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${uploadMode === 'url' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}>🔗 Paste URL</button>
                  <button onClick={() => setUploadMode('file')} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${uploadMode === 'file' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}>📁 Upload File</button>
                </div>

                {uploadMode === 'url' ? (
                  <input value={form.videoUrl} onChange={e => setForm(f => ({ ...f, videoUrl: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="https://youtube.com/watch?v=... or /videos/file.mp4" />
                ) : (
                  <div>
                    <input type="file" accept="video/*" onChange={e => { setFileInput(e.target.files[0]); handleFileUpload(e.target.files[0]) }} className="w-full border border-dashed border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-500 cursor-pointer" />
                    {uploading && <p className="text-blue-600 text-xs mt-2 font-semibold">⏳ Uploading...</p>}
                    {form.videoUrl && !uploading && <p className="text-green-600 text-xs mt-2 font-semibold">✅ Uploaded: {form.videoUrl}</p>}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Thumbnail URL (optional)</label>
                <input value={form.thumbnailUrl} onChange={e => setForm(f => ({ ...f, thumbnailUrl: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="https://... (auto-set for YouTube)" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-wider">Sort Order</label>
                <input type="number" value={form.sortOrder} onChange={e => setForm(f => ({ ...f, sortOrder: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" min="0" />
              </div>

              <div className="flex items-center gap-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={form.isActive} onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
                </label>
                <span className="text-sm font-semibold text-gray-700">Active (visible on homepage)</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={saving || uploading} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors">
                {saving ? 'Saving...' : editTarget ? 'Update Video' : 'Add Video'}
              </button>
              <button onClick={() => setShowForm(false)} className="border border-gray-200 text-gray-600 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-50 transition-colors">Cancel</button>
            </div>
          </div>
        )}

        {/* Video list */}
        {loading ? (
          <div className="text-center py-20 text-gray-400 font-semibold">Loading...</div>
        ) : videos.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
            <div className="text-5xl mb-4">🎬</div>
            <p className="text-gray-500 font-semibold">No videos yet. Add your first video!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map(v => {
              const ytId = isYT(v.videoUrl) ? getYTId(v.videoUrl) : null
              const thumb = v.thumbnailUrl ? v.thumbnailUrl : ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null
              return (
                <div key={v.id} className={`bg-white rounded-2xl overflow-hidden border shadow-sm transition-all ${v.isActive ? 'border-gray-100' : 'border-red-100 opacity-70'}`}>
                  <div className="h-36 bg-gradient-to-br from-blue-900 to-blue-700 relative">
                    {thumb && <img src={thumb} alt={v.title} className="w-full h-full object-cover" />}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <svg className="text-white" width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    {!v.isActive && <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">Hidden</div>}
                    {ytId && <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">YouTube</div>}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-blue-900 text-sm line-clamp-1 mb-1">{v.title}</h3>
                    {v.description && <p className="text-gray-400 text-xs line-clamp-1 mb-3">{v.description}</p>}
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(v)} className="flex-1 text-center text-xs font-bold text-blue-600 border border-blue-200 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">Edit</button>
                      <button onClick={() => toggleActive(v)} className={`flex-1 text-center text-xs font-bold py-1.5 rounded-lg transition-colors border ${v.isActive ? 'text-orange-600 border-orange-200 hover:bg-orange-50' : 'text-green-600 border-green-200 hover:bg-green-50'}`}>{v.isActive ? 'Hide' : 'Show'}</button>
                      <button onClick={() => handleDelete(v.id)} className="flex-1 text-center text-xs font-bold text-red-600 border border-red-200 py-1.5 rounded-lg hover:bg-red-50 transition-colors">Delete</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
