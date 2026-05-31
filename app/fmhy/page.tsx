"use client";

import Link from "next/link";

export default function FMHY() {
  const categories = [
    { name: "STREAMING", items: "Netflix • Disney+ • Prime • Hulu • Max" },
    { name: "MUSIC", items: "Spotify • Apple Music • Tidal • Deezer" },
    { name: "AI TOOLS", items: "ChatGPT • Claude • Midjourney • Grok • Perplexity" },
    { name: "PRIVACY", items: "VPNs • Password Managers • Encrypted Mail" },
    { name: "GAMING", items: "Steam • Epic • GOG • Itch.io" },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 02 • MEDIA VAULT</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">FMHY WIRED</h1>
            <p className="mt-4 text-xl text-[#a8a0b8]">8,500+ collective media links — streaming, music, AI, privacy, gaming.</p>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="glass p-10 rounded-3xl group">
              <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60 mb-4">CATEGORY {String(i+1).padStart(2, "0")}</div>
              <div className="text-4xl font-medium tracking-tight text-[#00ffcc] group-hover:text-white transition-colors">{cat.name}</div>
              <div className="mt-6 text-[#a8a0b8] leading-relaxed">{cat.items}</div>
              <div className="mt-8 text-xs tracking-[0.3em] text-[#a8a0b8]/70 group-hover:text-[#00ffcc] transition-colors">BROWSE LINKS →</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          UPDATED DAILY • PROTOCOL 7 POWERED
        </div>
      </div>
    </div>
  );
}