"use client";

import { useState } from "react";
import Link from "next/link";

export default function GripNet() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: "osint", label: "OSINT SUITE", desc: "theHarvester • Amass • SpiderFoot • holehe", status: "LIVE" },
    { id: "fmhy", label: "FMHY WIRED", desc: "8,500+ collective media links", status: "STABLE" },
    { id: "trap", label: "SIGNAL TRAP", desc: "Fingerprint • IP • Bot Score • Webhooks", status: "ACTIVE" },
    { id: "tools", label: "TOOL SUITE", desc: "Shodan • VirusTotal • URLScan • AbuseIPDB", status: "LIVE" },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 02 • GRIP NET</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">GRIP NET 2.0</h1>
            <p className="mt-4 text-xl text-[#a8a0b8]">Completely rebuilt. Clean. Immersive. Zero broken ASCII.</p>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nodes.map((node, index) => (
            <div
              key={index}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              className={`glass p-10 rounded-3xl cursor-pointer transition-all border ${activeNode === node.id ? "border-[#00ffcc]" : "border-transparent hover:border-[#ff00aa]/40"}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60 mb-3">NODE {String(index + 1).padStart(2, "0")}</div>
                  <div className="text-4xl font-medium tracking-tight text-[#00ffcc]">{node.label}</div>
                </div>
                <div className={`text-xs px-4 py-1 rounded-full border ${node.status === "LIVE" ? "border-[#00ffcc] text-[#00ffcc]" : "border-[#ff00aa] text-[#ff00aa]"}`}>
                  {node.status}
                </div>
              </div>

              <div className="mt-8 text-[#a8a0b8] leading-relaxed">{node.desc}</div>

              {activeNode === node.id && (
                <div className="mt-8 pt-8 border-t border-[#ff00aa]/20 text-sm">
                  <div className="text-[#00ffcc] mb-2">NODE DETAILS</div>
                  <div className="text-[#a8a0b8]">This node is fully operational. All connections stable. Protocol 7 handshake complete.</div>
                  <div className="mt-6 text-xs tracking-[0.3em] text-[#ff00aa]">CLICK AGAIN TO COLLAPSE</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="text-xs tracking-[0.4em] text-[#a8a0b8]/60">GRIP NET 2.0 — REBUILT WITH OBSESSIVE DETAIL</div>
          <div className="mt-4 text-[#a8a0b8]">No broken ASCII. No janky layouts. Pure immersive intelligence.</div>
        </div>
      </div>
    </div>
  );
}