"use client";

import Link from "next/link";

export default function Chat() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 02 • LIVE</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">WIRED CHAT</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="glass p-12 rounded-3xl h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-6 text-sm">
            <div className="flex gap-4">
              <div className="text-[#00ffcc]">[NAVI]</div>
              <div>Welcome to the Wired. What signal are you chasing today?</div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#ff00aa]">[USER]</div>
              <div>Looking for BTC setups.</div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#00ffcc]">[NAVI]</div>
              <div>Check the Trading Edge. Neural Momentum is firing strong right now.</div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <input type="text" placeholder="Type your message..." className="flex-1 bg-[#0a0814] border border-[#ff00aa]/30 px-6 py-4 rounded-2xl text-sm outline-none" />
            <button className="neon-btn px-8">SEND</button>
          </div>
        </div>

        <div className="mt-8 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          SIMULATED • REAL-TIME CHAT COMING SOON
        </div>
      </div>
    </div>
  );
}