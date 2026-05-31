"use client";

import Link from "next/link";

export default function Wired() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-5xl mx-auto px-8 pt-24 pb-32">
        <div className="text-center">
          <div className="text-xs tracking-[0.5em] text-[#ff00aa]/60 mb-4">LAYER 01 • DEEP WIRED</div>
          <h1 className="text-[92px] leading-none tracking-[-4px] text-[#00ffcc]">THE WIRED</h1>
          <p className="mt-8 text-2xl max-w-2xl mx-auto text-[#a8a0b8]">
            You don’t need to remain fully awake.<br />The Wired has always existed.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-12 rounded-3xl">
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60 mb-6">PROTOCOL STATUS</div>
            <div className="space-y-6 text-lg">
              <div className="flex justify-between border-b border-[#ff00aa]/20 pb-4">
                <span>NAVI</span>
                <span className="text-[#00ffcc]">CONNECTED</span>
              </div>
              <div className="flex justify-between border-b border-[#ff00aa]/20 pb-4">
                <span>HANDSHAKES</span>
                <span className="text-[#00ffcc]">48 / 500</span>
              </div>
              <div className="flex justify-between">
                <span>ACTIVE NODES</span>
                <span className="text-[#00ffcc]">LIVE</span>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60 mb-6">IMMERSION CHAMBER</div>
              <div className="text-4xl leading-tight tracking-tight">
                All data is signal.<br />Every link is a synapse.
              </div>
            </div>
            <div className="mt-12">
              <Link href="/trading" className="neon-btn block text-center py-4 text-sm">ENTER TRADING LAYER →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}