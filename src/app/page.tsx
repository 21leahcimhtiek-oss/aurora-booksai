import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="text-xl font-bold text-white">ReadAI</div>
        <div className="flex gap-4">
          <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
          <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Get Started
          </Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm px-3 py-1 rounded-full mb-6">
          AI-Powered
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          AI book recommendations and reading assistant
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          ReadAI uses advanced AI to give you personalized, actionable insights. Start free, upgrade when ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
            Start Free
          </Link>
          <Link href="/pricing" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors">
            View Pricing
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Everything you need</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="text-violet-400 text-2xl mb-3">AI</div>
            <h3 className="text-white font-semibold mb-2">Book recommendations</h3>
            <p className="text-gray-400 text-sm">Powered by advanced AI for maximum results.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="text-violet-400 text-2xl mb-3">AI</div>
            <h3 className="text-white font-semibold mb-2">Reading summaries</h3>
            <p className="text-gray-400 text-sm">Powered by advanced AI for maximum results.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="text-violet-400 text-2xl mb-3">AI</div>
            <h3 className="text-white font-semibold mb-2">Discussion questions</h3>
            <p className="text-gray-400 text-sm">Powered by advanced AI for maximum results.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="text-violet-400 text-2xl mb-3">AI</div>
            <h3 className="text-white font-semibold mb-2">Reading tracker</h3>
            <p className="text-gray-400 text-sm">Powered by advanced AI for maximum results.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="text-violet-400 text-2xl mb-3">AI</div>
            <h3 className="text-white font-semibold mb-2">Author insights</h3>
            <p className="text-gray-400 text-sm">Powered by advanced AI for maximum results.</p>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="bg-violet-600/10 border border-violet-500/20 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 mb-8">Join thousands of users already using ReadAI.</p>
          <Link href="/dashboard" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors inline-block">
            Start Free Today
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-gray-500 text-sm">
        &copy; 2026 ReadAI. All rights reserved.
      </footer>
    </main>
  )
}
