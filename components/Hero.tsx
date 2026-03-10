"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Award, Clock, Star, ChevronRight } from "lucide-react";

const stats = [
  { icon: Clock, value: "10 лет", label: "практики" },
  { icon: Award, value: "Гос", label: "диплом" },
  { icon: Star, value: "5.0", label: "рейтинг" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative nail image — right side, desktop only */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 hidden lg:block opacity-20 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
          alt=""
          fill
          className="object-cover rounded-l-3xl mask-fade-left"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-surface/50 to-surface" />
      </div>

      <div className="relative z-10 container-narrow section-padding pt-28 sm:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Набор открыт — осталось 2 места
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6"
          >
            Делай ногти,
            <br />
            которые стоят{" "}
            <span className="text-gradient">в&nbsp;3&nbsp;раза дороже</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Авторский курс от инструктора с{" "}
            <span className="text-white font-medium">10-летним стажем</span> и{" "}
            <span className="text-white font-medium">дипломом гособразца</span>
            . Гель, архитектура, опил — современная техника, которая заменяет
            устаревший гель-лак.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          >
            <a
              href="#enroll"
              className="btn-primary text-base w-full sm:w-auto flex items-center justify-center gap-2 py-4"
            >
              Занять место в группе
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#program"
              className="w-full sm:w-auto text-center px-6 py-3 text-sm text-text-muted hover:text-white transition-colors"
            >
              ↓ Смотреть программу
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="flex flex-col items-center gap-1 p-3 sm:p-4 rounded-2xl bg-surface-card/50 border border-surface-border/30"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent mb-1" />
                <span className="text-lg sm:text-2xl font-bold">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted uppercase tracking-widest">
            Листай
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
