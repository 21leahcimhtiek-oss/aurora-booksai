import Link from 'next/link'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link href="/" className="text-xl font-bold">Aurora Rayes Books Agent</Link>
        <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Get Started
        </Link>
      </nav>
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-gray-400 mb-16">Start free. Upgrade when you need more.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
            <div className="text-gray-400 text-sm font-medium mb-2">FREE</div>
            <div className="text-4xl font-bold text-white mb-1">$0</div>
            <div className="text-gray-500 text-sm mb-8">Forever free</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> 10 AI requests/day</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Basic features</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Email support</li>
            </ul>
            <Link href="/dashboard" className="block text-center border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              Start Free
            </Link>
          </div>
          <div className="bg-violet-600/10 border border-violet-500 rounded-2xl p-8 text-left relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs px-3 py-1 rounded-full font-medium">MOST POPULAR</div>
            <div className="text-violet-400 text-sm font-medium mb-2">PRO</div>
            <div className="text-4xl font-bold text-white mb-1">$7</div>
            <div className="text-gray-500 text-sm mb-8">per month &middot; $59/yr</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Unlimited AI requests</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Book recommendations</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Reading summaries</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Discussion questions</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Reading tracker</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Author insights</li>
              <li className="flex items-center gap-2 text-gray-300"><span className="text-green-400">check</span> Priority support</li>
            </ul>
            <Link href="/api/checkout?plan=pro_monthly" className="block text-center bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
