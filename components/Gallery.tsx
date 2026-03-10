"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "Результат — идеальный гель",
    label: "Результат",
  },
  {
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80",
    alt: "Процесс работы с гелем",
    label: "Процесс",
  },
  {
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80",
    alt: "Архитектура ногтя",
    label: "Архитектура",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
    alt: "На занятии курса",
    label: "На занятии",
  },
  {
    src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80",
    alt: "Студия маникюра",
    label: "Студия",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Дизайн ногтей",
    label: "Дизайн",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container-narrow mb-10 text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Реальные результаты
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">
            Работы учениц,{" "}
            <span className="text-gradient">не стоковые фото</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 scrollbar-hide pb-4">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="snap-center shrink-0 w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
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
