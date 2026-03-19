"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Phone } from "lucide-react";

const links = [
  { href: "#method", label: "Метод" },
  { href: "#courses", label: "Программа" },
  { href: "#author", label: "Автор" },
  { href: "#pricing", label: "Форматы" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
          scrolled ? "bg-[#08080a]/80 backdrop-blur-2xl border-b border-white/[0.04]" : ""
        }`}
      >
        <div className="wrap section-x flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF2D7B] to-[#d91a63] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight text-white/90">
              ELENA<span className="text-[#FF2D7B]">.</span>GEL
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white rounded-lg transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+79999777655"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] text-white/40 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">+7 999 977-76-55</span>
            </a>
            <a href="#enroll"
              className="btn-primary text-[13px] px-4 py-2 text-white">
              Записаться
            </a>
          </div>

          <button onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.06]"
            aria-label="Меню">
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#08080a]/97 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-5">
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="text-xl font-semibold text-white/60 hover:text-white">
                {l.label}
              </motion.a>
            ))}
            <motion.a href="tel:+79999777655" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-[#FF2D7B] mt-2">
              <Phone className="w-4 h-4" /> +7 999 977-76-55
            </motion.a>
            <motion.a href="#enroll" onClick={() => setOpen(false)}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="btn-primary text-white px-8 py-3 mt-2">
              Записаться
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
