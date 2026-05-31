"use client";

import Link from "next/link";

export default function APIDocs() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 03 • DEV</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">API DOCS</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="glass p-12 rounded-3xl">
          <div className="text-xl mb-8">Wired Edge API v1.0</div>
          
          <div className="space-y-8 text-sm">
            <div>
              <div className="font-medium text-[#00ffcc] mb-2">GET /api/signals</div>
              <div className="text-[#a8a0b8]">Returns live trading signals. Requires API key.</div>
            </div>
            <div>
              <div className="font-medium text-[#00ffcc] mb-2">POST /api/deploy</div>
              <div className="text-[#a8a0b8]">Deploy algorithm to live environment. Body: { algorithm: string, params: object }</div>
            </div>
            <div>
              <div className="font-medium text-[#00ffcc] mb-2">GET /api/nodes</div>
              <div className="text-[#a8a0b8]">List all GripNet nodes and their status.</div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          COMING SOON • FULL OPENAPI SPEC
        </div>
      </div>
    </div>
  );
}