'use client'

import { useState, useEffect } from 'react'
import { Loader2, Plus, Edit2, Trash2, Globe, Lock, Sparkles } from 'lucide-react'

export default function BlogsDashboard() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingBlog, setEditingBlog] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [generatingAi, setGeneratingAi] = useState(false)
  const [popup, setPopup] = useState(null)
  const [autoBlogEnabled, setAutoBlogEnabled] = useState(false)
  const [loadingSettings, setLoadingSettings] = useState(true)

  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '', category: '', image: '', author: 'Suhana Team', isPublished: true, scheduledAt: '' })

  useEffect(() => {
    fetchBlogs()
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/settings?key=ai_blog_auto_generate')
      const data = await res.json()
      setAutoBlogEnabled(data.value === 'true')
    } catch (e) {
      console.error(e)
    } finally {
      setLoadingSettings(false)
    }
  }

  const toggleAutoBlog = async () => {
    const newValue = !autoBlogEnabled
    setAutoBlogEnabled(newValue)
    try {
      await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'ai_blog_auto_generate', value: newValue.toString() })
      })
    } catch (e) {
      alert('Failed to update settings')
      setAutoBlogEnabled(!newValue)
    }
  }

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs')
      const data = await res.json()
      setBlogs(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = { ...form }
      if (payload.scheduledAt) {
        payload.scheduledAt = new Date(payload.scheduledAt).toISOString()
      } else {
        payload.scheduledAt = null
      }

      if (editingBlog) {
        await fetch(`/api/blogs/${editingBlog.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      } else {
        await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      }
      setEditingBlog(null)
      setForm({ title: '', slug: '', excerpt: '', content: '', category: '', image: '', author: 'Suhana Team', isPublished: true, scheduledAt: '' })
      fetchBlogs()
    } catch (error) {
      alert('Failed to save blog')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this blog post?')) return
    try {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      fetchBlogs()
    } catch (error) {
      alert('Failed to delete blog')
    }
  }

  const togglePublish = async (blog) => {
    try {
      await fetch(`/api/blogs/${blog.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: !blog.isPublished })
      })
      fetchBlogs()
    } catch (error) {
      alert('Failed to toggle publish status')
    }
  }

  const handleGenerateAI = async () => {
    setGeneratingAi(true)
    setPopup(null)
    try {
      const res = await fetch('/api/admin/generate-blog', { method: 'POST' })
      const data = await res.json()
      if (res.ok) {
        setPopup({ type: 'success', message: data.message })
        fetchBlogs()
      } else {
        setPopup({ type: 'error', message: data.error || 'Failed to generate blog' })
      }
    } catch (error) {
      setPopup({ type: 'error', message: 'Network error generating blog' })
    } finally {
      setGeneratingAi(false)
      setTimeout(() => setPopup(null), 5000)
    }
  }

  const editBlog = (blog) => {
    setEditingBlog(blog)
    setForm({
      ...blog,
      scheduledAt: blog.scheduledAt ? new Date(blog.scheduledAt).toISOString().slice(0, 16) : ''
    })
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploadingImage(true)
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await fetch('/api/upload-image', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.url) {
        setForm({ ...form, image: data.url })
      } else {
        alert(data.error || 'Upload failed')
      }
    } catch (err) {
      alert('Upload failed')
    } finally {
      setUploadingImage(false)
    }
  }

  if (loading) {
    return <div className="h-full flex justify-center items-center"><Loader2 className="animate-spin text-blue-600 w-10 h-10" /></div>
  }

  return (
    <>
      {popup && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg border flex items-start gap-3 max-w-sm animate-fade-in ${popup.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-green-50 border-green-200 text-green-800'}`}>
          <div className="flex-1 text-sm font-semibold">{popup.message}</div>
          <button onClick={() => setPopup(null)} className="text-gray-400 hover:text-gray-600">×</button>
        </div>
      )}
      <header className="bg-white border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Blog Management</h1>
        </div>
        <div className="flex items-center gap-6">
          {/* AI Start/Stop Button */}
          {loadingSettings ? (
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl">
              <Loader2 size={14} className="animate-spin text-gray-400" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loading...</span>
            </div>
          ) : (
            <button 
              onClick={toggleAutoBlog}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-black text-xs transition-all border shadow-sm ${
                autoBlogEnabled 
                  ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100 ring-2 ring-green-500/10' 
                  : 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100 ring-2 ring-red-500/10'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${autoBlogEnabled ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'}`}></div>
              <span>AUTO-BLOG: {autoBlogEnabled ? 'RUNNING' : 'STOPPED'}</span>
            </button>
          )}

          <button 
            onClick={handleGenerateAI} 
            disabled={generatingAi}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition disabled:opacity-50"
          >
            {generatingAi ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
            {generatingAi ? 'Generating...' : 'Auto-Generate Draft'}
          </button>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">All Posts</h2>
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
              {blog.image && <img src={blog.image} className="w-20 h-20 object-cover rounded-xl" alt="thumb" />}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{blog.title}</h3>
                    {blog.isPublished ? <Globe size={14} className="text-green-500" /> : <Lock size={14} className="text-gray-400" />}
                  </div>
                  <label className="flex items-center cursor-pointer relative">
                    <input type="checkbox" className="sr-only peer" checked={blog.isPublished} onChange={() => togglePublish(blog)} />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                    <span className="ml-2 text-[10px] font-bold text-gray-500 uppercase w-12">{blog.isPublished ? 'Published' : 'Draft'}</span>
                  </label>
                </div>
                {blog.scheduledAt && (
                  <p className="text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-1">
                    Scheduled: {new Date(blog.scheduledAt).toLocaleString()}
                  </p>
                )}
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{blog.excerpt}</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => editBlog(blog)} className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1"><Edit2 size={12}/> Edit</button>
                  <button onClick={() => handleDelete(blog.id)} className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 px-3 py-1.5 rounded-lg flex items-center gap-1"><Trash2 size={12}/> Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-96">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sticky top-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-2">
              <Plus size={16} /> {editingBlog ? 'Edit Post' : 'Create Post'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Title</label>
                <input required type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Slug (SEO Friendly URL)</label>
                <input type="text" placeholder="auto-generated-if-empty" value={form.slug || ''} onChange={e => setForm({...form, slug: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Category</label>
                <input required type="text" value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1">Upload Image</label>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                  {uploadingImage && <p className="text-xs text-blue-500 mt-1">Uploading...</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1">Or Image URL</label>
                  <input type="text" value={form.image} onChange={e => setForm({...form, image: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Schedule Publish Date (Optional)</label>
                <input type="datetime-local" value={form.scheduledAt} onChange={e => setForm({...form, scheduledAt: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Excerpt</label>
                <textarea required rows={3} value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Content</label>
                <textarea required rows={6} value={form.content} onChange={e => setForm({...form, content: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="pub" checked={form.isPublished} onChange={e => setForm({...form, isPublished: e.target.checked})} className="w-4 h-4 text-blue-600 rounded bg-gray-100 border-gray-300" />
                <label htmlFor="pub" className="text-sm font-medium text-gray-700">Published</label>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-black py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                {editingBlog ? 'Update Post' : 'Publish Post'}
              </button>
              {editingBlog && (
                <button type="button" onClick={() => {setEditingBlog(null); setForm({ title: '', slug: '', excerpt: '', content: '', category: '', image: '', author: 'Suhana Team', isPublished: true, scheduledAt: '' })}} className="w-full mt-2 text-xs font-bold text-gray-500 hover:text-gray-700 p-2">
                  Cancel Edit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
