"use client";

import Link from "next/link";

export default function Stats() {
  const stats = [
    { label: "TOTAL NODES", value: "8,691", change: "+142 today" },
    { label: "ACTIVE USERS", value: "47,392", change: "+3.2%" },
    { label: "HANDSHAKES TODAY", value: "1,284", change: "+18%" },
    { label: "TRADING VOLUME", value: "$2.4M", change: "+41%" },
    { label: "SIGNALS FIRED", value: "892", change: "+27%" },
    { label: "PROTOCOL UPTIME", value: "99.97%", change: "30 days" },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • OPS</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">STATS</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-10 rounded-3xl">
              <div className="text-xs tracking-[0.4em] text-[#a8a0b8]/60">{stat.label}</div>
              <div className="text-6xl font-medium text-[#00ffcc] tabular-nums mt-4 tracking-tighter">{stat.value}</div>
              <div className="text-xs text-[#a8a0b8] mt-3">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          REAL-TIME • LAST UPDATED SECONDS AGO
        </div>
      </div>
    </div>
  );
}