"use client";

import { motion } from "motion/react";

/** Composición decorativa: ventanas superpuestas sobre un panel oscuro. */
export function HeroVisual() {
  return (
    <div role="img" aria-label="Composición abstracta de una página web en escritorio y celular" className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden rounded-[2rem] bg-ink">
      <div aria-hidden="true" className="bg-dots bg-dots-fade absolute inset-0 text-white/20" />

      <div aria-hidden="true" className="absolute right-[6%] top-[8%] w-[74%] rounded-xl border border-white/10 bg-slate p-3.5">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-white/30" />
          <span className="size-2 rounded-full bg-white/30" />
          <span className="size-2 rounded-full bg-white/30" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="col-span-2 h-16 rounded-md bg-white/10" />
          <div className="h-16 rounded-md bg-cyan/80" />
          <div className="col-span-3 h-2.5 w-1/2 rounded-full bg-white/15" />
        </div>
        <div className="mb-10 mt-3 h-2.5 w-2/3 rounded-full bg-white/10" />
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[8%] left-[6%] w-[62%] rounded-xl bg-paper p-4 shadow-soft"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-2 w-1/4 rounded-full bg-ink/25" />
        <div className="mt-4 space-y-2">
          <div className="h-3.5 w-11/12 rounded-full bg-ink" />
          <div className="h-3.5 w-3/5 rounded-full bg-ink" />
        </div>
        <div className="mt-3 h-2 w-4/5 rounded-full bg-ink/20" />
        <div className="mt-5 h-8 w-28 rounded-full bg-brand" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[6%] right-[8%] w-[21%] rounded-2xl bg-white p-1.5 shadow-soft"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="aspect-[9/16] rounded-xl bg-mist p-1.5">
          <div className="h-1/3 rounded-md bg-brand" />
          <div className="mt-1.5 h-1.5 rounded-full bg-ink/20" />
          <div className="mt-1 h-1.5 w-2/3 rounded-full bg-ink/15" />
          <div className="mt-2.5 h-3.5 rounded-full bg-cyan" />
        </div>
      </motion.div>
    </div>
  );
}
