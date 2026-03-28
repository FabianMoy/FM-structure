"use client";
 
import { useState, useRef, useEffect } from "react";
import { LuX } from "react-icons/lu";
import type { LegalPopoverProps } from "@/types/legal";
import { legalContent } from "@/data/legalContent";
 
export default function LegalPopover({ type, label }: LegalPopoverProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const content = legalContent[type];
 
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
 
  return (
    <li className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="text-sm text-slate-400 hover:text-white transition-colors text-left"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {label}
      </button>
 
      {open && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-modal="true"
          aria-label={content.title}
          className="absolute bottom-full mb-3 right-0 w-80 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 z-50 overflow-hidden"
          style={{
            animation: "popoverIn 0.2s ease forwards",
          }}
        >
          <style>{`
            @keyframes popoverIn {
              from { opacity: 0; transform: translateY(8px) scale(0.97); }
              to   { opacity: 1; transform: translateY(0)   scale(1); }
            }
          `}</style>
 
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div>
              <p className="text-white font-semibold text-sm">{content.title}</p>
              <p className="text-slate-500 text-xs mt-0.5">
                Actualizado: {content.lastUpdated}
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="text-slate-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
            >
              <LuX size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="px-5 py-4 space-y-4 max-h-72 overflow-y-auto scrollbar-thin">
            {content.sections.map((section) => (
              <div key={section.heading}>
                <p className="text-white text-xs font-semibold mb-1">
                  {section.heading}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
 
          <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02]">
            <p className="text-slate-600 text-[11px]">
              © {new Date().getFullYear()} FM Structure
            </p>
          </div>
        </div>
      )}
    </li>
  );
}

 