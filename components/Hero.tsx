"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const pills = ["Гель", "Верхние формы", "Опил", "Очно · Москва"];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <Image src="/hero-bg.jpg" alt="" fill priority
          className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/50 via-[#08080a]/80 to-[#08080a]" />
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF2D7B]/[0.07] rounded-full blur-[120px]" />

      <div className="relative z-10 wrap section-x pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-2xl">
          {/* Pills */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-6">
            {pills.map((p) => (
              <span key={p}
                className="px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/50 border border-white/[0.08] rounded-full">
                {p}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight mb-5">
            Техника, которая делает
            <br />
            <span className="text-gradient">маникюр дороже</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] sm:text-base text-white/50 leading-relaxed mb-8 max-w-lg">
            Авторский очный курс: гель, верхние формы, архитектурный опил.
            Для тех, кто хочет делать не «просто покрытие», а сильный,
            прочный, визуально дорогой результат.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3">
            <a href="#enroll"
              className="btn-primary text-white text-sm px-7 py-3.5 flex items-center justify-center gap-2">
              Записаться на курс <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#courses"
              className="text-sm text-white/40 hover:text-white px-5 py-3.5 text-center transition-colors">
              Программа и форматы ↓
            </a>
          </motion.div>
        </div>

        {/* Compact facts — horizontal scroll on mobile */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3">
          {[
            { val: "Очно", sub: "постановка руки, контроль техники" },
            { val: "С нуля и PRO", sub: "два формата обучения" },
            { val: "Авторский метод", sub: "гель · формы · опил" },
          ].map((f) => (
            <div key={f.val}
              className="shrink-0 w-[72vw] sm:w-auto glass p-4 sm:p-5">
              <div className="text-sm font-bold text-white/90 mb-1">{f.val}</div>
              <div className="text-xs text-white/35 leading-snug">{f.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
