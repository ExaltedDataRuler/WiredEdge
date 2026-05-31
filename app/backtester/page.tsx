"use client";

import Link from "next/link";

export default function Backtester() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-5xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 03 • TOOLS</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">BACKTESTER</h1>
            <p className="mt-4 text-xl text-[#a8a0b8]">Test your algorithms against historical data. Refine before live deployment.</p>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="glass p-12 rounded-3xl">
          <div className="text-center py-12">
            <div className="text-6xl mb-6">📈</div>
            <div className="text-3xl font-medium tracking-tight text-[#00ffcc]">COMING SOON</div>
            <div className="mt-4 text-[#a8a0b8]">Full backtesting engine with strategy builder, performance metrics, and walk-forward analysis.</div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          Q2 2026 • ADVANCED PROTOCOL
        </div>
      </div>
    </div>
  );
}