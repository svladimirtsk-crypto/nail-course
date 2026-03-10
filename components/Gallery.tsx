"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const images = [
  { src: "/gallery-1.jpg", alt: "Идеальный гель-маникюр", label: "Результат" },
  { src: "/gallery-2.jpg", alt: "Процесс работы с гелем", label: "Процесс" },
  { src: "/gallery-3.jpg", alt: "Работа ученицы", label: "Ученица" },
  { src: "/gallery-4.jpg", alt: "На занятии курса", label: "На занятии" },
  { src: "/gallery-5.jpg", alt: "Студия и материалы", label: "Студия" },
  { src: "/gallery-6.jpg", alt: "Дизайн ногтей", label: "Дизайн" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container-narrow mb-10 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
              Реальные результаты
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Работы учениц,{" "}
              <span className="text-gradient">не стоковые фото</span>
            </h2>
          </div>

          {/* Desktop scroll buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/5 transition-all"
              aria-label="Предыдущие фото"
            >
              <ChevronLeft className="w-5 h-5 text-text-secondary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/5 transition-all"
              aria-label="Следующие фото"
            >
              <ChevronRight className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scrollable gallery */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
      >
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="snap-center shrink-0 w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] aspect-square rounded-2xl overflow-hidden relative group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 70vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-sm font-medium">{img.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
