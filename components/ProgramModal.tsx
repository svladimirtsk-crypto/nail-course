"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ProgramModule } from "@/lib/content";

type Props = {
  module: ProgramModule | null;
  onClose: () => void;
};

export default function ProgramModal({ module, onClose }: Props) {
  useEffect(() => {
    if (module) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
      window.addEventListener("keydown", handler);
      return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
    } else {
      document.body.style.overflow = "";
    }
  }, [module, onClose]);

  return (
    <AnimatePresence>
      {module && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          onClick={onClose}>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Content */}
          <motion.div
            initial={{ y: "100%", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            onClick={e => e.stopPropagation()}
            className="relative z-10 w-full sm:max-w-lg sm:mx-4 max-h-[90svh] overflow-y-auto
              bg-[#111114] border border-white/[0.06]
              rounded-t-2xl sm:rounded-2xl"
            role="dialog" aria-modal="true" aria-label={module.title}>

            {/* Header */}
            <div className="sticky top-0 z-10 bg-[#111114]/90 backdrop-blur-md border-b border-white/[0.04] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-2 py-1 rounded-md"
                  style={{ background: "rgb(var(--accent) / 0.12)", color: "rgb(var(--accent))" }}>
                  {module.num}
                </span>
                <h3 className="text-base font-bold">{module.title}</h3>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors" aria-label="Закрыть">
                <X className="w-4 h-4 text-white/50" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-5 space-y-5">
              <p className="text-[14px] text-white/50 leading-relaxed">{module.tagline}</p>

              {/* Что изучаем */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "rgb(var(--accent))" }}>Что изучаем</h4>
                <ul className="space-y-2">
                  {module.learn.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "rgb(var(--accent) / 0.5)" }} />
                      <span className="text-[13px] sm:text-[14px] text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Что отрабатываем */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "rgb(var(--accent))" }}>Что отрабатываем</h4>
                <ul className="space-y-2">
                  {module.practice.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "rgb(var(--accent) / 0.5)" }} />
                      <span className="text-[13px] sm:text-[14px] text-white/60 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Результат */}
              <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgb(var(--accent))" }}>Результат</h4>
                <p className="text-[14px] text-white/70 leading-relaxed">{module.outcome}</p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="sticky bottom-0 bg-[#111114]/90 backdrop-blur-md border-t border-white/[0.04] px-5 py-4">
              <a href="#enroll" onClick={onClose} className="btn w-full text-white text-sm py-3 flex items-center justify-center">
                Записаться на курс
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
