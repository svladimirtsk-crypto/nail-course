"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => {
      const s = window.scrollY > 500;
      const el = document.getElementById("enroll");
      const near = el ? el.getBoundingClientRect().top < window.innerHeight + 80 : false;
      setShow(s && !near);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 70, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-0 inset-x-0 z-50 p-3 bg-[rgb(var(--bg))]/90 backdrop-blur-xl border-t border-white/[0.04] sm:hidden">
          <a href="#enroll" className="btn w-full flex items-center justify-center text-white text-sm py-3.5 font-semibold">
            Записаться на курс
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
