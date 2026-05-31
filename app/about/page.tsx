"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-3xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • INFO</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">ABOUT</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="prose prose-invert max-w-none text-[#a8a0b8] space-y-8">
          <p><strong>Wired Edge</strong> is the definitive, obsessively polished rebuild of THE WIRED — a cyberpunk intelligence interface built for those who operate in the shadows of data.</p>
          
          <div>
            <div className="font-medium text-[#00ffcc] mb-3">What We Are</div>
            <p>A protocol-driven platform combining OSINT, live trading execution, and collective intelligence. Every element is crafted with maximum detail and zero tolerance for broken experiences.</p>
          </div>

          <div>
            <div className="font-medium text-[#00ffcc] mb-3">Built With</div>
            <p>Next.js 15 • Tailwind 4 • Strict TypeScript • Pure Protocol 7 energy</p>
          </div>

          <p className="text-xs text-[#a8a0b8]/60 mt-12">Version 1.0.0 • 31 May 2026 • Rebuilt from the ground up</p>
        </div>
      </div>
    </div>
  );
}