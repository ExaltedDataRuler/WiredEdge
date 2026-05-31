"use client";

import Link from "next/link";

export default function Journal() {
  const entries = [
    { date: "31 MAY 2026", title: "BTC LONG hit target +4.2%", pnl: "+$2,840", note: "LSTM model performed perfectly on volume spike." },
    { date: "30 MAY 2026", title: "ETH SHORT avoided dump", pnl: "+$1,120", note: "Gamma scalp alert saved the position." },
    { date: "29 MAY 2026", title: "SOL regime switch", pnl: "-$340", note: "Volatility model misread the news event." },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 03 • LOG</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">TRADING JOURNAL</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-6">
          {entries.map((entry, i) => (
            <div key={i} className="glass p-8 rounded-3xl">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-[#a8a0b8]">{entry.date}</div>
                  <div className="text-xl font-medium tracking-tight mt-2 text-[#00ffcc]">{entry.title}</div>
                </div>
                <div className={`text-right font-medium tabular-nums ${entry.pnl.startsWith("+") ? "text-[#00ffcc]" : "text-red-400"}`}>{entry.pnl}</div>
              </div>
              <div className="mt-4 text-[#a8a0b8] text-sm">{entry.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="neon-btn px-10 py-4 text-sm">+ NEW ENTRY</button>
        </div>
      </div>
    </div>
  );
}