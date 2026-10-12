"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { buttonClass } from "@/components/Button";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-ink/10 bg-paper/90 backdrop-blur" : "border-transparent bg-paper",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5 text-brand" aria-label={`${siteConfig.name}, ir al inicio`}>
          <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <rect x="7" y="8" width="18" height="4" rx="2" fill="#ffffff" />
            <rect x="7" y="15" width="11" height="4" rx="2" fill="#ffffff" />
            <rect x="7" y="22" width="14" height="3" rx="1.5" fill="#22d3ee" />
          </svg>
          <span className="font-display text-xl font-semibold tracking-tight">{siteConfig.name}</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="py-2 text-[0.95rem] font-medium text-ink/80 transition-colors hover:text-brand">
              {item.label}
            </a>
          ))}
          <a href="#contacto" className={buttonClass("primary", "min-h-11 px-5 text-[0.95rem]")}>
            Solicitar cotización
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full text-ink hover:bg-ink/5 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="menu-movil" hidden={!open} className="border-t border-ink/10 bg-paper px-5 pb-6 pt-2 md:hidden">
        <nav aria-label="Móvil" className="flex flex-col">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-ink/10 text-lg font-medium"
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className={buttonClass("primary", "mt-5")}>
            Solicitar cotización
          </a>
        </nav>
      </div>
    </header>
  );
}
