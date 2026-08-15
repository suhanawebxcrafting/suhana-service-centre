'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  BarChart3, Package, Clock, CheckCircle2, LogOut, ExternalLink, Download,
  Phone, Search, Loader2, Trash2, MapPin, Ruler, Copy, Eye, X
} from 'lucide-react'

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    } else if (status === 'authenticated') {
      fetchOrders()
    }
  }, [status])

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      if (Array.isArray(data)) {
        setOrders(data)
      } else {
        console.error('API returned non-array:', data)
        setOrders([])
      }
    } catch (error) {
      console.error('Fetch error:', error)
      setOrders([])
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, newStatus) => {
    try {
      await fetch('/api/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
      fetchOrders()
    } catch (error) {
      alert('Failed to update status')
    }
  }

  const deleteOrder = async (id) => {
    if (!confirm('Are you sure you want to delete this order?')) return
    try {
      await fetch('/api/orders', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      fetchOrders()
    } catch (error) {
      alert('Failed to delete order')
    }
  }

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'ALL' || order.status === filter
    const matchesSearch = order.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.phoneNumber?.includes(searchTerm)
    return matchesFilter && matchesSearch
  })

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'PENDING').length,
    processing: orders.filter(o => o.status === 'PROCESSING').length,
    completed: orders.filter(o => o.status === 'COMPLETED').length,
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    )
  }

  return (
    <>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Xerox Order Management</h1>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-0.5">Delivery Service Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text" placeholder="Search by name or phone..."
                className="bg-gray-50 border border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64"
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button onClick={() => signOut({ callbackUrl: '/' })} className="lg:hidden p-3 bg-red-50 text-red-600 rounded-xl">
              <LogOut size={20} />
            </button>
          </div>
        </header>

        <div className="p-6 max-w-7xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Orders', value: stats.total, icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Pending', value: stats.pending, icon: Clock, color: 'text-orange-500', bg: 'bg-orange-50' },
              { label: 'Processing', value: stats.processing, icon: Loader2, color: 'text-indigo-500', bg: 'bg-indigo-50' },
              { label: 'Completed', value: stats.completed, icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
            ].map((s, i) => (
              <div key={i} className="relative overflow-hidden bg-white rounded-3xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group transition-all duration-300 hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center shadow-sm`}>
                    <s.icon size={26} className={s.color} />
                  </div>
                  <div className="text-4xl font-black text-gray-900 tracking-tight">{s.value}</div>
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest relative z-10">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="bg-white inline-flex p-1.5 rounded-2xl shadow-sm border border-gray-100 mb-8 overflow-x-auto max-w-full hide-scrollbar">
            {['ALL', 'PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED'].map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-[11px] font-bold tracking-widest transition-all whitespace-nowrap ${filter === f ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >{f}</button>
            ))}
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-gray-100">
                    <th className="px-5 py-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">Customer</th>
                    <th className="px-4 py-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">Service</th>
                    <th className="px-4 py-5 text-[10px] font-black text-gray-500 uppercase tracking-widest">Phone</th>
                    <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Address</th>
                    <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Distance</th>
                    <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Charge</th>
                    <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Document</th>
                    <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-4 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="px-6 py-12 text-center text-gray-400 font-medium">
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/30 transition-all">
                        <td className="px-4 py-4">
                          <div className="font-bold text-gray-900 text-sm">{order.customerName}</div>
                          {order.email && <div className="text-[11px] font-medium text-gray-500 mt-0.5">{order.email}</div>}
                          <div className="text-[10px] text-gray-400 mt-0.5">{new Date(order.createdAt).toLocaleDateString()}</div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-block px-2.5 py-1 bg-purple-50 text-purple-700 rounded-md text-[10px] font-black uppercase tracking-widest max-w-[150px] truncate" title={order.serviceRequested || 'Xerox Delivery'}>
                            {order.serviceRequested || 'Xerox Delivery'}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <a href={`tel:${order.phoneNumber}`} className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium">
                            <Phone size={13} /> {order.phoneNumber}
                          </a>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-2">
                            <div className="text-xs text-gray-600 max-w-[220px] flex items-start gap-1.5">
                              <MapPin size={13} className="text-gray-400 flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{order.address}</span>
                            </div>
                            <div className="flex gap-3">
                              <button
                                onClick={() => setSelectedAddress(order.address)}
                                className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                              >
                                <Eye size={12} /> View Full
                              </button>
                              <button
                                onClick={() => copyToClipboard(order.address, order.id)}
                                className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-gray-700 flex items-center gap-1 transition-colors"
                              >
                                {copiedId === order.id ? <CheckCircle2 size={12} className="text-green-500" /> : <Copy size={12} />}
                                {copiedId === order.id ? 'Copied' : 'Copy'}
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="flex items-center gap-1 text-xs font-bold text-blue-700">
                            <Ruler size={13} /> {order.distance} km
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`text-xs font-black ${order.deliveryCharge > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                            {order.deliveryCharge > 0 ? `₹${order.deliveryCharge}` : 'FREE'}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-2">
                            {(order.documentUrls && order.documentUrls.length > 0) ? (
                              order.documentUrls.map((url, index) => (
                                <div key={index} className="flex gap-2">
                                  <a href={url} target="_blank"
                                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all">
                                    <ExternalLink size={11} /> Doc {index + 1}
                                  </a>
                                  <a href={url} download
                                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-green-100 transition-all">
                                    <Download size={11} />
                                  </a>
                                </div>
                              ))
                            ) : order.documentUrl ? (
                              <div className="flex gap-2">
                                <a href={order.documentUrl} target="_blank"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all">
                                  <ExternalLink size={11} /> View
                                </a>
                                <a href={order.documentUrl} download
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-green-100 transition-all">
                                  <Download size={11} /> Download
                                </a>
                              </div>
                            ) : (
                              <span className="text-gray-400 text-xs font-medium">No Doc</span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <select value={order.status} onChange={(e) => updateStatus(order.id, e.target.value)}
                            className={`bg-white border-2 rounded-xl text-[10px] font-black p-2.5 outline-none focus:ring-4 focus:ring-opacity-20 transition-all uppercase tracking-wider cursor-pointer shadow-sm ${order.status === 'PENDING' ? 'border-orange-200 text-orange-600 focus:ring-orange-500' :
                                order.status === 'PROCESSING' ? 'border-indigo-200 text-indigo-600 focus:ring-indigo-500' :
                                  order.status === 'COMPLETED' ? 'border-green-200 text-green-600 focus:ring-green-500' :
                                    'border-red-200 text-red-600 focus:ring-red-500'
                              }`}
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="PROCESSING">PROCESSING</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELLED">CANCELLED</option>
                          </select>
                        </td>
                        <td className="px-4 py-4">
                          <button onClick={() => deleteOrder(order.id)}
                            className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-all" title="Delete Order">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      {selectedAddress && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scale-up">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-black text-gray-900 flex items-center gap-2 uppercase tracking-widest text-xs">
                <MapPin size={16} className="text-blue-600" /> Full Delivery Address
              </h3>
              <button onClick={() => setSelectedAddress(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-gray-700 leading-relaxed whitespace-pre-wrap break-words font-medium">
                {selectedAddress}
              </div>
              <button
                onClick={() => { copyToClipboard(selectedAddress, 'modal'); setSelectedAddress(null) }}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
              >
                <Copy size={16} /> Copy Address & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
