"use client";

import { useState } from "react";
import Link from "next/link";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const mockResults = [
    { title: "OSINT Directory", type: "INDEX", desc: "8,691 nodes indexed" },
    { title: "FMHY Wired", type: "MEDIA", desc: "Streaming • Music • AI • Privacy" },
    { title: "Signal Trap", type: "TOOL", desc: "Fingerprint • IP • Bot Score" },
    { title: "Trading Edge", type: "PROTOCOL", desc: "Live signals • Algorithm deployment" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = mockResults.filter(r => 
      r.title.toLowerCase().includes(query.toLowerCase()) || 
      r.desc.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.length ? filtered : mockResults);
  };

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-24">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • SEARCH</div>
          <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-4">WIRED SEARCH</h1>
          <p className="mt-4 text-xl text-[#a8a0b8]">8,691 nodes indexed across reality and the collective network.</p>
        </div>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the mesh..."
              className="w-full bg-[#0a0814] border border-[#ff00aa]/30 focus:border-[#00ffcc] text-lg px-8 py-5 rounded-2xl outline-none placeholder:text-[#a8a0b8]/50"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 neon-btn text-xs px-8 py-3">
              SEARCH
            </button>
          </div>
        </form>

        {results.length > 0 && (
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="text-xs tracking-[0.4em] text-[#a8a0b8]/60 mb-6 px-2">RESULTS • {results.length} NODES</div>
            <div className="space-y-4">
              {results.map((r, i) => (
                <div key={i} className="glass p-8 rounded-2xl flex justify-between items-center group">
                  <div>
                    <div className="text-xl font-medium tracking-tight text-[#00ffcc] group-hover:underline">{r.title}</div>
                    <div className="text-sm text-[#a8a0b8] mt-1">{r.desc}</div>
                  </div>
                  <div className="text-xs px-4 py-1 border border-[#00ffcc]/40 text-[#00ffcc]">{r.type}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-24 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          POWERED BY PROTOCOL 7 • REAL-TIME INDEX
        </div>
      </div>
    </div>
  );
}