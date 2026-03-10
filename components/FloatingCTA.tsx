"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Показывать после 600px скролла
      const scrolled = window.scrollY > 600;

      // Скрывать когда дошли до формы записи
      const enrollSection = document.getElementById("enroll");
      let nearForm = false;
      if (enrollSection) {
        const rect = enrollSection.getBoundingClientRect();
        nearForm = rect.top < window.innerHeight;
      }

      setShow(scrolled && !nearForm);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-surface/90 backdrop-blur-xl border-t border-surface-border/30 sm:hidden"
        >
          <a
            href="#enroll"
            className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base"
          >
            Занять место в группе
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
