"use client";

import Link from "next/link";

export default function Performance() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-5xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 03 • ANALYTICS</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">PERFORMANCE</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[ 
            { label: "WIN RATE", value: "67.4%", change: "+4.2%" },
            { label: "AVG R:R", value: "1.8", change: "+0.3" },
            { label: "MAX DRAWDOWN", value: "-8.7%", change: "-1.2%" },
          ].map((stat, i) => (
            <div key={i} className="glass p-10 rounded-3xl text-center">
              <div className="text-xs tracking-[0.4em] text-[#a8a0b8]">{stat.label}</div>
              <div className="text-6xl font-medium text-[#00ffcc] mt-4 tabular-nums">{stat.value}</div>
              <div className="text-xs text-[#a8a0b8] mt-2">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          LAST 30 DAYS • ALL PROTOCOLS
        </div>
      </div>
    </div>
  );
}