import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "WIRED EDGE",
    template: "%s · WIRED EDGE",
  },
  description: "The definitive, obsessively polished rebuild of THE WIRED. Bleeding-edge OSINT, live trading protocols, and cyberpunk intelligence — zero errors, maximum detail.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#06040c] text-[#e4dff0] font-mono antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#ff00aa]/20 bg-[#0a0814]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="wired-ring h-8 w-8 flex items-center justify-center">
                <span className="text-[#00ffcc] text-lg font-bold">W</span>
              </div>
              <div className="font-medium tracking-[0.2em] text-sm group-hover:text-[#00ffcc] transition-colors">WIRED EDGE</div>
            </div>

            <div className="flex items-center gap-8 text-xs tracking-[0.3em]">
              <Link href="/trading" className="hover:text-[#00ffcc] transition-colors">TRADING</Link>
              <Link href="/gripnet" className="hover:text-[#00ffcc] transition-colors">GRIPNET</Link>
              <Link href="/wired" className="hover:text-[#00ffcc] transition-colors">WIRED</Link>
              <Link href="/search" className="hover:text-[#00ffcc] transition-colors">SEARCH</Link>
              <Link href="/" className="neon-btn text-xs px-5 py-1.5">ENTER THE EDGE</Link>
            </div>
          </div>
        </nav>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}