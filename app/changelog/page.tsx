"use client";

import Link from "next/link";

export default function Changelog() {
  const entries = [
    { version: "v1.0.0", date: "31 May 2026", changes: ["Initial heavy polish rebuild", "Full Trading Edge with live signals", "GripNet 2.0 (zero broken ASCII)", "Premium design system + glassmorphism", "10 polished pages with heavy detail"] },
    { version: "v0.9.0", date: "30 May 2026", changes: ["Core architecture + Next.js 15 setup", "Basic cyberpunk foundation", "Navigation + layout system"] },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • MEMO</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">CHANGELOG</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-12">
          {entries.map((entry, i) => (
            <div key={i} className="border-l-2 border-[#00ffcc]/40 pl-8">
              <div className="flex items-baseline gap-4">
                <div className="font-display text-3xl text-[#00ffcc]">{entry.version}</div>
                <div className="text-xs text-[#a8a0b8]">{entry.date}</div>
              </div>
              <ul className="mt-6 space-y-3 text-[#a8a0b8]">
                {entry.changes.map((change, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-[#00ffcc]">→</span> {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          MORE UPDATES COMING • BUILT WITH OBSESSIVE DETAIL
        </div>
      </div>
    </div>
  );
}