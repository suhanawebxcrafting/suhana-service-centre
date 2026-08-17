'use client'

import { useState, useEffect } from 'react'
import { Loader2, Plus, Edit2, Trash2, Star } from 'lucide-react'

export default function TestimonialsDashboard() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingTestimonial, setEditingTestimonial] = useState(null)

  const [form, setForm] = useState({ name: '', service: '', rating: 5, feedback: '', isFeatured: true })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials')
      const data = await res.json()
      setTestimonials(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.name.trim().length < 2) return alert('Name must be at least 2 characters')
    if (form.feedback.trim().length < 5) return alert('Feedback must be at least 5 characters')
    try {
      const payload = { ...form, rating: Number(form.rating) }
      if (editingTestimonial) {
        await fetch(`/api/testimonials/${editingTestimonial.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      } else {
        await fetch('/api/testimonials', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      }
      setEditingTestimonial(null)
      setForm({ name: '', service: '', rating: 5, feedback: '', isFeatured: true })
      fetchTestimonials()
    } catch (error) {
      alert('Failed to save testimonial')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this testimonial?')) return
    try {
      await fetch(`/api/testimonials/${id}`, { method: 'DELETE' })
      fetchTestimonials()
    } catch (error) {
      alert('Failed to delete testimonial')
    }
  }

  const editTestimonial = (item) => {
    setEditingTestimonial(item)
    setForm(item)
  }

  if (loading) {
    return <div className="h-full flex justify-center items-center"><Loader2 className="animate-spin text-blue-600 w-10 h-10" /></div>
  }

  return (
    <>
      <header className="bg-white border-b border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Testimonials Management</h1>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">All Testimonials</h2>
          {testimonials.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    {item.name}
                    {item.isFeatured && <span className="bg-orange-100 text-orange-700 text-[10px] uppercase font-black px-2 py-0.5 rounded-full">Featured</span>}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Service: {item.service}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-xl mb-4 italic">"{item.feedback}"</p>
              <div className="flex items-center gap-2">
                <button onClick={() => editTestimonial(item)} className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1"><Edit2 size={12} /> Edit</button>
                <button onClick={() => handleDelete(item.id)} className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 px-3 py-1.5 rounded-lg flex items-center gap-1"><Trash2 size={12} /> Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-96">
          <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sticky top-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-2">
              <Plus size={16} /> {editingTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Customer Name</label>
                <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Service Provided</label>
                <input required type="text" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Rating (1-5)</label>
                <input required type="number" min="1" max="5" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Feedback</label>
                <textarea required rows={4} value={form.feedback} onChange={e => setForm({ ...form, feedback: e.target.value })} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="feat" checked={form.isFeatured} onChange={e => setForm({ ...form, isFeatured: e.target.checked })} className="w-4 h-4 text-blue-600 rounded bg-gray-100 border-gray-300" />
                <label htmlFor="feat" className="text-sm font-medium text-gray-700">Featured (Show on homepage)</label>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-black py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                {editingTestimonial ? 'Update Testimonial' : 'Publish Testimonial'}
              </button>
              {editingTestimonial && (
                <button type="button" onClick={() => { setEditingTestimonial(null); setForm({ name: '', service: '', rating: 5, feedback: '', isFeatured: true }) }} className="w-full mt-2 text-xs font-bold text-gray-500 hover:text-gray-700 p-2">
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
