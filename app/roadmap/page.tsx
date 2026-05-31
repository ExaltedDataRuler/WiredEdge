"use client";

import Link from "next/link";

export default function Roadmap() {
  const roadmap = [
    { quarter: "Q2 2026", items: ["Live broker API integration", "Advanced backtester", "Mobile app", "More algorithm models"] },
    { quarter: "Q3 2026", items: ["AI signal generator", "Community governance", "Premium protocols", "Multi-account support"] },
    { quarter: "Q4 2026", items: ["Full OSINT automation", "Real-time collaboration", "Enterprise features", "Global node network"] },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • FUTURE</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">ROADMAP</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-12">
          {roadmap.map((phase, i) => (
            <div key={i} className="border-l-2 border-[#00ffcc]/40 pl-8">
              <div className="font-display text-3xl text-[#00ffcc]">{phase.quarter}</div>
              <ul className="mt-6 space-y-3 text-[#a8a0b8]">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-[#00ffcc]">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          BUILT WITH OBSESSIVE DETAIL • MORE COMING
        </div>
      </div>
    </div>
  );
}