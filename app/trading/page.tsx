"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Signal {
  id: number;
  asset: string;
  type: "LONG" | "SHORT";
  entry: number;
  target: number;
  stop: number;
  confidence: number;
  edge: string;
  time: string;
}

export default function TradingEdge() {
  const [signals, setSignals] = useState<Signal[]>([
    { id: 1, asset: "BTC/USD", type: "LONG", entry: 67240, target: 68900, stop: 66500, confidence: 87, edge: "Orderflow + LSTM", time: "14:32:17" },
    { id: 2, asset: "ETH/USD", type: "SHORT", entry: 2650, target: 2580, stop: 2685, confidence: 72, edge: "Microstructure Arb", time: "14:32:09" },
  ]);
  const [pnl, setPnl] = useState(1247.83);
  const [activeBots, setActiveBots] = useState(7);
  const [deployed, setDeployed] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPnl(p => parseFloat((p + (Math.random() - 0.48) * 14).toFixed(2)));
      setActiveBots(b => Math.max(5, Math.min(12, b + (Math.random() > 0.6 ? 1 : -1))));

      if (Math.random() > 0.65) {
        setSignals(prev => {
          const assets = ["SOL/USD", "XAU/USD", "NVDA", "SPX500"];
          const newSig: Signal = {
            id: Date.now(),
            asset: assets[Math.floor(Math.random() * assets.length)],
            type: Math.random() > 0.5 ? "LONG" : "SHORT",
            entry: parseFloat((Math.random() * 800 + 120).toFixed(2)),
            target: parseFloat((Math.random() * 800 + 180).toFixed(2)),
            stop: parseFloat((Math.random() * 800 + 60).toFixed(2)),
            confidence: Math.floor(Math.random() * 22) + 71,
            edge: ["Neural Momentum", "Gamma Scalp v4.2", "Vol Regime", "Orderflow Delta"][Math.floor(Math.random() * 4)],
            time: new Date().toLocaleTimeString("en-US", { hour12: false }),
          };
          return [newSig, ...prev.slice(0, 4)];
        });
      }
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const deployAlgo = (name: string) => {
    if (!deployed.includes(name)) {
      setDeployed([...deployed, name]);
      const toast = document.createElement("div");
      toast.className = "fixed bottom-8 right-8 bg-[#00ffcc] text-black px-8 py-3 rounded font-mono text-xs tracking-[0.3em] z-[100]";
      toast.textContent = `${name.toUpperCase()} PROTOCOL ACTIVATED`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1600);
    }
  };

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="border-b border-[#ff00aa]/20 bg-[#0a0814]/95 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-[#00ffcc] text-2xl">₿</div>
            <div>
              <div className="text-[10px] tracking-[0.4em] text-[#ff00aa]/70">LAYER 03 • TRADING</div>
              <div className="font-medium text-xl tracking-[0.1em] text-[#00ffcc]">BLEEDING EDGE</div>
            </div>
          </div>
          <Link href="/" className="neon-btn text-xs">← BACK TO WIRED EDGE</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">REAL-TIME EXECUTION LAYER</div>
            <h1 className="text-6xl tracking-[-1.5px] font-medium text-[#00ffcc] mt-2">LIVE PROTOCOLS</h1>
          </div>
          <div className="text-right">
            <div className="text-xs text-[#a8a0b8]">ACTIVE BOTS</div>
            <div className="text-4xl font-medium text-[#00ffcc] tabular-nums">{activeBots}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-[#0a0814] border border-[#00ffcc]/20 rounded-3xl p-8">
            <div className="flex justify-between mb-6">
              <div className="text-xs tracking-[0.35em] text-[#00ffcc]/70">LIVE SIGNAL FEED</div>
              <div className="text-[10px] text-[#a8a0b8]">AUTO • 3.8s</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-[#a8a0b8] text-xs tracking-widest">
                  <tr className="border-b border-[#ff00aa]/20">
                    <th className="text-left py-4 font-normal">ASSET</th>
                    <th className="text-left py-4 font-normal">DIR</th>
                    <th className="text-right py-4 font-normal">ENTRY</th>
                    <th className="text-right py-4 font-normal">TARGET</th>
                    <th className="text-right py-4 font-normal">STOP</th>
                    <th className="text-center py-4 font-normal">CONF</th>
                    <th className="text-left py-4 font-normal">EDGE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ff00aa]/10">
                  {signals.map(s => (
                    <tr key={s.id} className="hover:bg-white/[0.015] transition-colors">
                      <td className="py-5 font-medium text-[#00ffcc] tracking-wider">{s.asset}</td>
                      <td><span className={s.type === "LONG" ? "text-[#00ffcc]" : "text-red-400"}>{s.type}</span></td>
                      <td className="text-right tabular-nums">{s.entry}</td>
                      <td className="text-right text-[#00ffcc] tabular-nums">{s.target}</td>
                      <td className="text-right text-red-400 tabular-nums">{s.stop}</td>
                      <td className="text-center font-medium text-[#00ffcc]">{s.confidence}</td>
                      <td className="text-xs text-[#a8a0b8]">{s.edge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0a0814] border border-[#ff00aa]/20 rounded-3xl p-8">
            <div className="text-xs tracking-[0.35em] text-[#ff00aa]/70 mb-5">ALGORITHM ARSENAL</div>
            {[
              { name: "NEURAL MOMENTUM HUNTER", edge: "LSTM + Orderflow" },
              { name: "GAMMA SCALPER v4.2", edge: "Options Flow" },
              { name: "MICROSTRUCTURE ARBITRAGE", edge: "Book Imbalance" },
              { name: "VOLATILITY REGIME SWITCH", edge: "GARCH + HMM" },
            ].map((a, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-[#ff00aa]/10 last:border-0 group">
                <div>
                  <div className="font-medium tracking-wider group-hover:text-[#00ffcc] transition-colors">{a.name}</div>
                  <div className="text-xs text-[#a8a0b8] mt-0.5">{a.edge}</div>
                </div>
                <button onClick={() => deployAlgo(a.name)} className="neon-btn text-xs disabled:opacity-40" disabled={deployed.includes(a.name)}>
                  {deployed.includes(a.name) ? "LIVE" : "DEPLOY"}
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-12 mt-4 bg-[#0a0814] border border-[#00ffcc]/20 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-xs tracking-[0.35em] text-[#00ffcc]/70">LIVE PNL SIMULATOR</div>
                <div className="text-6xl font-medium text-[#00ffcc] tabular-nums tracking-tighter mt-2">{pnl >= 0 ? "+" : ""}{pnl}</div>
              </div>
              <div className="text-right text-xs text-[#a8a0b8]">SESSION • 31 MAY 2026<br />ALL PROTOCOLS ACTIVE</div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#00ffcc]/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}