"use client";

import Link from "next/link";

export default function Help() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • SUPPORT</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">HELP CENTER</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-6">
          {[
            "How do I connect my broker?",
            "What does 'Protocol 7' mean?",
            "How accurate are the signals?",
            "Can I export my journal?",
            "How do I report a bug?",
          ].map((q, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:border-[#00ffcc]/50 border border-transparent transition-all">
              <div className="font-medium text-lg tracking-tight group-hover:text-[#00ffcc] transition-colors">{q}</div>
              <div className="text-xs tracking-[0.3em] text-[#a8a0b8]/70 group-hover:text-[#00ffcc] transition-colors">VIEW →</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          MORE IN FAQ • COMMUNITY • SUPPORT TICKETS
        </div>
      </div>
    </div>
  );
}