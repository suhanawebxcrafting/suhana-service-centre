'use client'

import { useState, useEffect } from 'react'
import { Loader2, Plus, Edit2, Trash2, Globe, Lock } from 'lucide-react'

export default function BlogsDashboard() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingBlog, setEditingBlog] = useState(null)

  const [form, setForm] = useState({ title: '', excerpt: '', content: '', category: '', image: '', author: 'Suhana Team', isPublished: true })

  useEffect(() => {
    fetchBlogs()
  }, [])

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
      if (editingBlog) {
        await fetch(`/api/blogs/${editingBlog.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        })
      } else {
        await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        })
      }
      setEditingBlog(null)
      setForm({ title: '', excerpt: '', content: '', category: '', image: '', author: 'Suhana Team', isPublished: true })
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

  const editBlog = (blog) => {
    setEditingBlog(blog)
    setForm(blog)
  }

  if (loading) {
    return <div className="h-full flex justify-center items-center"><Loader2 className="animate-spin text-blue-600 w-10 h-10" /></div>
  }

  return (
    <>
      <header className="bg-white border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Blog Management</h1>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">All Posts</h2>
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
              {blog.image && <img src={blog.image} className="w-20 h-20 object-cover rounded-xl" alt="thumb" />}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{blog.title}</h3>
                  {blog.isPublished ? <Globe size={14} className="text-green-500" /> : <Lock size={14} className="text-gray-400" />}
                </div>
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
                <label className="block text-xs font-bold text-gray-400 mb-1">Category</label>
                <input required type="text" value={form.category} onChange={e => setForm({...form, category: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Image URL</label>
                <input type="text" value={form.image} onChange={e => setForm({...form, image: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
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
                <button type="button" onClick={() => {setEditingBlog(null); setForm({ title: '', excerpt: '', content: '', category: '', image: '', author: 'Suhana Team', isPublished: true })}} className="w-full mt-2 text-xs font-bold text-gray-500 hover:text-gray-700 p-2">
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
