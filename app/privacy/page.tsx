"use client";

import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-3xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LEGAL</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">PRIVACY</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="prose prose-invert max-w-none text-[#a8a0b8] space-y-8">
          <p>We collect minimal data. Your signals, searches, and activity stay within the Wired.</p>
          
          <div>
            <div className="font-medium text-[#00ffcc] mb-3">What We Collect</div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anonymous usage metrics (no personal data)</li>
              <li>Session signals for protocol optimization</li>
              <li>Public node interactions</li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-[#00ffcc] mb-3">What We Don’t Do</div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sell or share your data</li>
              <li>Track across external sites</li>
              <li>Store personal identifiers</li>
            </ul>
          </div>

          <p className="text-xs text-[#a8a0b8]/60 mt-12">Last updated 31 May 2026 • Protocol 7 compliant</p>
        </div>
      </div>
    </div>
  );
}