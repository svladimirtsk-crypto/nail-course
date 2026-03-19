"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { GALLERY_IMAGES } from "@/lib/content";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", containScroll: "trimSnaps" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (lightbox !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      <section className="sy overflow-hidden">
        <div className="wrap sx mb-5 flex items-end justify-between">
          <div>
            <p className="label mb-2">Уровень работ</p>
            <h2 className="text-lg sm:text-xl font-black tracking-tight">Результаты техники</h2>
          </div>
          <div className="hidden sm:flex gap-1.5">
            <button onClick={scrollPrev} aria-label="Назад"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-white/[0.12] transition-colors">
              <ChevronLeft className="w-4 h-4 muted-soft" />
            </button>
            <button onClick={scrollNext} aria-label="Вперёд"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-white/[0.12] transition-colors">
              <ChevronRight className="w-4 h-4 muted-soft" />
            </button>
          </div>
        </div>

        <div className="sx">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3">
              {GALLERY_IMAGES.map((img, i) => (
                <motion.button key={img.src}
                  initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  onClick={() => setLightbox(i)}
                  className="shrink-0 basis-[65%] sm:basis-[40%] md:basis-[30%] lg:basis-[24%] aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer">
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:640px) 65vw,(max-width:1024px) 40vw,24vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.caption}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center z-10" aria-label="Закрыть">
              <X className="w-4 h-4 text-white" />
            </button>
            <button onClick={e => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : GALLERY_IMAGES.length - 1); }}
              className="absolute left-3 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center z-10" aria-label="Назад">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <motion.div key={lightbox} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <Image src={GALLERY_IMAGES[lightbox].src} alt={GALLERY_IMAGES[lightbox].alt} fill className="object-cover" sizes="90vw" />
            </motion.div>
            <button onClick={e => { e.stopPropagation(); setLightbox(lightbox < GALLERY_IMAGES.length - 1 ? lightbox + 1 : 0); }}
              className="absolute right-3 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center z-10" aria-label="Вперёд">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {GALLERY_IMAGES.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === lightbox ? "bg-white" : "bg-white/20"}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
