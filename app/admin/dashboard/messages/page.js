'use client'

import { useState, useEffect } from 'react'
import { Loader2, Mail, CheckCircle2, Trash2 } from 'lucide-react'

export default function MessagesDashboard() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/contact')
      const data = await res.json()
      setMessages(data)
    } catch (error) {
      console.error('Fetch error:', error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (id, isRead) => {
    try {
      await fetch('/api/contact', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isRead }),
      })
      fetchMessages()
    } catch (error) {
      alert('Failed to update status')
    }
  }

  const deleteMessage = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return
    try {
      await fetch('/api/contact', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      fetchMessages()
    } catch (error) {
      alert('Failed to delete message')
    }
  }

  if (loading) {
    return (
      <div className="h-full flex items-centre justify-centre">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    )
  }

  return (
    <>
      <header className="bg-white border-b border-gray-100 p-6 flex flex-col md:flex-row md:items-centre justify-between gap-4 sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Contact Messages</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-0.5">Manage Customer Inquiries</p>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto space-y-4">
        {messages.length === 0 ? (
          <div className="text-centre py-12 text-gray-400 font-medium">No messages found.</div>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className={`bg-white rounded-2xl p-6 shadow-sm border transition-all ${msg.isRead ? 'border-gray-100' : 'border-blue-200 shadow-blue-500/10'}`}>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-centre gap-3 mb-2">
                    <h3 className="font-bold text-gray-900">{msg.name}</h3>
                    {!msg.isRead && <span className="bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">New</span>}
                    <span className="text-xs text-gray-400">{new Date(msg.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="flex items-centre gap-4 text-sm text-gray-600 mb-4">
                    <span>Phone: <a href={`tel:${msg.phone}`} className="text-blue-600 hover:underline">{msg.phone}</a></span>
                    {msg.email && <span>Email: {msg.email}</span>}
                    {msg.service && <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">Service: {msg.service}</span>}
                  </div>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-xl text-sm border border-gray-100 whitespace-pre-wrap">
                    {msg.message || 'No additional message provided.'}
                  </p>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button onClick={() => markAsRead(msg.id, !msg.isRead)} className={`p-2 rounded-lg transition-all ${msg.isRead ? 'bg-gray-50 text-gray-500 hover:bg-gray-100' : 'bg-green-50 text-green-600 hover:bg-green-100'}`} title={msg.isRead ? "Mark as unread" : "Mark as read"}>
                    <CheckCircle2 size={18} />
                  </button>
                  <button onClick={() => deleteMessage(msg.id)} className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-all" title="Delete Message">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}
