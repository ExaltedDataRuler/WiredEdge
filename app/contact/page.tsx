"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-3xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • SUPPORT</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">CONTACT</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="glass p-12 rounded-3xl">
          <div className="text-xl">For protocol support, node issues, or trading edge inquiries:</div>
          
          <div className="mt-12 space-y-8">
            <div>
              <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">DISCORD</div>
              <div className="text-[#00ffcc] mt-2">discord.gg/wirededge</div>
            </div>
            <div>
              <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">X / TWITTER</div>
              <div className="text-[#00ffcc] mt-2">@WiredEdge</div>
            </div>
            <div>
              <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">SIGNAL</div>
              <div className="text-[#00ffcc] mt-2">+1 (555) WIRED-EDGE</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          RESPONSE TIME • UNDER 4 HOURS
        </div>
      </div>
    </div>
  );
}