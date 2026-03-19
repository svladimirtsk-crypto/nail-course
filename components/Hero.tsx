"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { HERO } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <Image src="/hero-bg.jpg" alt="" fill priority className="object-cover opacity-50" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg))] via-[rgb(var(--bg))]/75 to-[rgb(var(--bg))]/40" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full blur-[100px]" style={{ background: "rgb(var(--accent) / 0.06)" }} />

      <div className="relative z-10 wrap sx pt-20 sm:pt-24 pb-14 sm:pb-20">
        <div className="max-w-xl">
          {/* Chips */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
            className="flex flex-wrap gap-1.5 mb-5">
            {HERO.chips.map(c => (
              <span key={c} className="px-2.5 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-white/40 border border-white/[0.07] rounded-full">{c}</span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.06 }}
            className="text-[1.55rem] leading-[1.15] sm:text-[2.1rem] md:text-4xl font-black tracking-tight mb-4">
            {HERO.headline.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <><br /><span className="tg">{line}</span></> : line}
              </span>
            ))}
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.12 }}
            className="text-[14px] sm:text-[15px] text-white/50 leading-relaxed mb-7 max-w-md">
            {HERO.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-2.5">
            <a href="#enroll" className="btn text-white text-sm px-6 py-3.5 flex items-center justify-center gap-2">
              {HERO.cta}<ChevronRight className="w-4 h-4" />
            </a>
            <a href="#program" className="text-sm text-white/35 hover:text-white/60 text-center px-4 py-3.5 transition-colors">
              {HERO.ctaSecondary} ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
