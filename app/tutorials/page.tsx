"use client";

import Link from "next/link";

export default function Tutorials() {
  const tutorials = [
    { title: "Getting Started with Protocol 7", level: "BEGINNER", time: "12 min" },
    { title: "Advanced OSINT Techniques", level: "INTERMEDIATE", time: "28 min" },
    { title: "Live Trading Signal Analysis", level: "ADVANCED", time: "45 min" },
    { title: "GripNet Node Management", level: "INTERMEDIATE", time: "19 min" },
    { title: "Building Custom Signal Traps", level: "ADVANCED", time: "52 min" },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-5xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 02 • DOCS</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">TUTORIALS</h1>
            <p className="mt-4 text-xl text-[#a8a0b8]">Learn the protocols. Master the edge.</p>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-4">
          {tutorials.map((tut, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:border-[#00ffcc]/50 border border-transparent transition-all">
              <div>
                <div className="font-medium text-xl tracking-tight group-hover:text-[#00ffcc] transition-colors">{tut.title}</div>
                <div className="text-xs text-[#a8a0b8] mt-2">{tut.level} • {tut.time}</div>
              </div>
              <div className="text-xs tracking-[0.3em] text-[#a8a0b8]/70 group-hover:text-[#00ffcc] transition-colors">START →</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          MORE COMING SOON • PROTOCOL 7 EDUCATION
        </div>
      </div>
    </div>
  );
}