"use client";

import Link from "next/link";

export default function Community() {
  const threads = [
    { title: "Best new OSINT tools in 2026?", replies: 47, last: "2m ago" },
    { title: "Trading signals accuracy this month", replies: 31, last: "14m ago" },
    { title: "GripNet node recommendations", replies: 89, last: "1h ago" },
    { title: "Protocol 7 handshake issues", replies: 12, last: "3h ago" },
    { title: "New FMHY links dropped", replies: 56, last: "5h ago" },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-5xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 02 • BBS</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">COMMUNITY</h1>
            <p className="mt-4 text-xl text-[#a8a0b8]">Threaded collective board — post, reply, exist in the network.</p>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-4">
          {threads.map((thread, i) => (
            <div key={i} className="glass p-8 rounded-3xl flex justify-between items-center group cursor-pointer hover:border-[#00ffcc]/50 border border-transparent transition-all">
              <div className="font-medium text-lg tracking-tight group-hover:text-[#00ffcc] transition-colors">{thread.title}</div>
              <div className="text-right text-xs text-[#a8a0b8]">
                <div>{thread.replies} replies</div>
                <div className="mt-1 text-[#ff00aa]/60">{thread.last}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="neon-btn px-12 py-4 text-sm">NEW THREAD</button>
        </div>
      </div>
    </div>
  );
}