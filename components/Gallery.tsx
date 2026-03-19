"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const images = [
  { src: "/gallery-1.jpg", alt: "Результат — гель" },
  { src: "/gallery-2.jpg", alt: "Процесс работы" },
  { src: "/gallery-3.jpg", alt: "Архитектура" },
  { src: "/gallery-4.jpg", alt: "На занятии" },
  { src: "/gallery-5.jpg", alt: "Студия" },
  { src: "/gallery-6.jpg", alt: "Дизайн" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scroll = (dir: "l" | "r") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "l" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="section-y overflow-hidden">
        <div className="wrap section-x mb-6 flex items-end justify-between">
          <div>
            <p className="label mb-2">Уровень работ</p>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Реальные результаты техники
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll("l")} aria-label="Назад"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-white/[0.12] transition-colors">
              <ChevronLeft className="w-4 h-4 text-white/40" />
            </button>
            <button onClick={() => scroll("r")} aria-label="Вперёд"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-white/[0.12] transition-colors">
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>

        <div ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-5 sm:px-6 lg:px-8 pb-2 cursor-grab active:cursor-grabbing">
          {images.map((img, i) => (
            <motion.button key={img.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setLightbox(i)}
              className="shrink-0 w-[60vw] sm:w-[38vw] md:w-[28vw] lg:w-[22vw] aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <Image src={img.src} alt={img.alt} fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 60vw,(max-width:1024px) 38vw, 22vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-5"
            onClick={() => setLightbox(null)}>
            <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              aria-label="Закрыть">
              <X className="w-5 h-5 text-white" />
            </button>

            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : images.length - 1); }}
              className="absolute left-3 sm:left-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              aria-label="Предыдущее">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <motion.div key={lightbox} initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="relative w-full max-w-2xl aspect-[4/5] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              <Image src={images[lightbox].src} alt={images[lightbox].alt}
                fill className="object-cover" sizes="90vw" />
            </motion.div>

            <button onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < images.length - 1 ? lightbox + 1 : 0); }}
              className="absolute right-3 sm:right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              aria-label="Следующее">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === lightbox ? "bg-white" : "bg-white/20"}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
