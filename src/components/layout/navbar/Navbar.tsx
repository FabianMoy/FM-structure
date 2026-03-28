import Link from "next/link";
import { navLinks } from "@/data";
import { LuCodeXml } from "react-icons/lu";
import MobileMenuToggle from "./MobileMenuToggle";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group" aria-label="Ir al inicio">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all">
              <LuCodeXml aria-hidden="true" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">FM Structure</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks links={navLinks} />
            <a
              href='https://wa.link/ffd26q'
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Contactar
            </a>
          </div>

          <MobileMenuToggle navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
}