'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const [message, setMessage] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!message.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      const data = await res.json()
      setReply(data.reply ?? 'No response.')
    } catch {
      setReply('Error contacting AI. Check your API key.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link href="/" className="text-xl font-bold">Aurora Rayes Books Agent</Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Free Plan</span>
          <Link href="/pricing" className="bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
            Upgrade
          </Link>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-400 mb-10">Your Aurora Rayes Books Agent AI assistant is ready.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Book recommendations</div>
            <div className="text-2xl font-bold text-white">Ready</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Reading summaries</div>
            <div className="text-2xl font-bold text-white">Ready</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Discussion questions</div>
            <div className="text-2xl font-bold text-white">Ready</div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-6">AI Assistant</h2>
          {reply && (
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 mb-6 text-gray-300">
              {reply}
            </div>
          )}
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              {loading ? '...' : 'Ask'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
