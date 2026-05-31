import Link from "next/link";

export default function WiredEdge() {
  return (
    <div className="min-h-screen bg-[#06040c] text-[#e4dff0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#00ffcc]" />
            <span className="text-xs tracking-[0.5em] text-[#00ffcc]">PROTOCOL 7 • REBUILT</span>
            <div className="h-px w-12 bg-[#00ffcc]" />
          </div>

          <h1 className="font-mono text-[92px] leading-none tracking-[-4.2px] text-[#00ffcc]">
            WIRED EDGE
          </h1>
          <p className="mt-6 text-2xl text-[#a8a0b8] max-w-2xl mx-auto">
            The definitive, obsessively polished rebuild.<br />Zero errors. Maximum detail.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/trading" className="group block border border-[#00ffcc]/30 hover:border-[#00ffcc] p-10 rounded-3xl transition-all">
            <div className="text-[#00ffcc] text-xs tracking-[0.4em] mb-4">LAYER 03</div>
            <div className="text-4xl font-medium tracking-tight group-hover:text-[#00ffcc] transition-colors">TRADING EDGE</div>
            <div className="mt-4 text-sm text-[#a8a0b8]">Live signals • Algorithm deployment • Real-time PnL</div>
          </Link>

          <div className="border border-[#ff00aa]/30 p-10 rounded-3xl">
            <div className="text-[#ff00aa] text-xs tracking-[0.4em] mb-4">LAYER 02</div>
            <div className="text-4xl font-medium tracking-tight">GRIP NET</div>
            <div className="mt-4 text-sm text-[#a8a0b8]">Completely rebuilt • Clean responsive design • No broken ASCII</div>
          </div>

          <div className="border border-[#00ffcc]/30 p-10 rounded-3xl">
            <div className="text-[#00ffcc] text-xs tracking-[0.4em] mb-4">NEW</div>
            <div className="text-4xl font-medium tracking-tight">PROTOCOL LABS</div>
            <div className="mt-4 text-sm text-[#a8a0b8]">Advanced analytics • Better organized components • Zero technical debt</div>
          </div>
        </div>

        <div className="mt-24 text-center text-xs tracking-[0.3em] text-[#a8a0b8]">
          HEAVY POLISH • BETTER ORGANIZATION • ERROR-FREE • FRESH DEPLOYMENT
        </div>
      </div>
    </div>
  );
}