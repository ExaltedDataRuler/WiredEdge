"use client";

import Link from "next/link";

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-3xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 03 • ACCOUNT</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">SETTINGS</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl">
            <div className="font-medium text-[#00ffcc] mb-4">PROFILE</div>
            <div className="text-[#a8a0b8]">Username: @exaltedruler<br />Joined: 12 MAR 2025<br />Tier: PROTOCOL 7</div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <div className="font-medium text-[#00ffcc] mb-4">NOTIFICATIONS</div>
            <div className="text-[#a8a0b8]">Signal Alerts: ON<br />Deployment Confirmations: ON<br />Community Mentions: OFF</div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <div className="font-medium text-[#00ffcc] mb-4">API KEY</div>
            <div className="font-mono text-xs text-[#a8a0b8] break-all">we_****************************</div>
            <button className="mt-4 neon-btn text-xs px-6 py-2">REGENERATE</button>
          </div>
        </div>
      </div>
    </div>
  );
}