"use client";

import Link from "next/link";

export default function FAQ() {
  const faqs = [
    { q: "Is this real trading?", a: "Signals are simulated for demo. Connect your broker API for live execution." },
    { q: "What is GripNet?", a: "A rebuilt immersive intelligence hub with clean, responsive design and zero broken ASCII." },
    { q: "How often is data updated?", a: "Real-time for signals, daily for directories and media." },
    { q: "Can I contribute?", a: "Yes. Open a PR or join the community BBS." },
    { q: "Is it free?", a: "Core is free. Premium protocols and advanced features coming soon." },
  ];

  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] font-mono">
      <div className="max-w-3xl mx-auto px-8 pt-20 pb-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] text-[#ff00aa]/60">LAYER 01 • HELP</div>
            <h1 className="text-7xl tracking-[-2px] font-medium text-[#00ffcc] mt-3">FAQ</h1>
          </div>
          <Link href="/" className="neon-btn text-xs px-8">← BACK</Link>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="glass p-8 rounded-3xl">
              <div className="font-medium text-[#00ffcc] mb-3">{faq.q}</div>
              <div className="text-[#a8a0b8]">{faq.a}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-xs tracking-[0.4em] text-[#a8a0b8]/50">
          MORE QUESTIONS? JOIN THE COMMUNITY
        </div>
      </div>
    </div>
  );
}