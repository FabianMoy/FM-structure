"use client";

import { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Link from "next/link";
import type { NavLink } from "@/types";
import NavItem from "./NavItem";
import Motion from "../../animation/Motion";

interface MobileMenuToggleProps {
  navLinks: NavLink[];
}

export default function MobileMenuToggle({ navLinks }: MobileMenuToggleProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden text-slate-300 hover:text-white"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <LuX size={24} aria-hidden="true" /> : <LuMenu size={24} aria-hidden="true" />}
      </button>

      {open && (
        <Motion
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              onClick={() => setOpen(false)}
              className="block py-2"
            />
          ))}
          <a
            href='https://wa.link/ffd26q'
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="mt-4 px-5 py-3 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all"
            onClick={() => setOpen(false)}
          >
            Contactar
          </a>
        </Motion>
      )}
    </>
  );
}