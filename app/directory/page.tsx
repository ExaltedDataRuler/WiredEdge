"use client";

import Link from "next/link";

export default function Directory() {
  const categories = [
    { name: "OSINT & RECON", count: 1240, color: "#00ffcc" },
    { name: "MEDIA & STREAMING", count: 2890, color: "#ff00aa" },
    { name: "PRIVACY & SECURITY", count: 760, color: "#00ffcc" },
    { name: "AI & TOOLS", count: 1540, color: "#ff00aa" },
    { name: "TRADING & FINANCE", count: 420, color: "#00ffcc" },
    { name: "GAMING & ENTERTAINMENT", count: 980, color: "#ff00aa" },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • INDEX</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">DIRECTORY</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="glass p-12 rounded-3xl group cursor-pointer hover:border-[#00ffcc]/50 border border-transparent transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs tracking-[0.4em] text-[#a8a0b8]/60">CATEGORY {String(i+1).padStart(2, "0")}</div>
                  <div className="text-4xl font-medium tracking-tight mt-4 text-[#00ffcc] group-hover:text-white transition-colors">{cat.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-medium text-[#ff00aa] tabular-nums">{cat.count}</div>
                  <div className="text-xs text-[#a8a0b8]/60 mt-1">NODES</div>
                </div>
              </div>
              <div className="mt-12 text-xs tracking-[0.3em] text-[#a8a0b8]/70 group-hover:text-[#00ffcc] transition-colors">BROWSE CATEGORY →</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          8,691 TOTAL NODES • LAST INDEXED 31 MAY 2026
        </div>
      </div>
    </div>
  );
}