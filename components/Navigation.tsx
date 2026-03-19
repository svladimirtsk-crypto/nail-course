"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Phone } from "lucide-react";
import { SITE } from "@/lib/content";

const links = [
  { href: "#audience", label: "Для кого" },
  { href: "#program", label: "Программа" },
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
      <motion.header initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
          ${scrolled ? "bg-[rgb(var(--bg))]/80 backdrop-blur-2xl border-b border-white/[0.04]" : ""}`}>
        <div className="wrap sx flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[rgb(var(--accent))] to-[#d91a63] flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-sm text-white/80">{SITE.name.split(".")[0]}<span className="text-[rgb(var(--accent))]">.</span>{SITE.name.split(".")[1]}</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 text-[13px] muted hover:text-white transition-colors rounded-lg">{l.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 px-2 py-1.5 text-[13px] muted-soft hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" /><span className="hidden lg:inline">{SITE.phoneFormatted}</span>
            </a>
            <a href="#enroll" className="btn text-white text-[13px] px-4 py-2">Записаться</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.06]" aria-label="Меню">
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgb(var(--bg))]/97 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-5">
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.04 }}
                className="text-xl font-semibold muted hover:text-white">{l.label}</motion.a>
            ))}
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-[rgb(var(--accent))] mt-3">
              <Phone className="w-4 h-4" />{SITE.phoneFormatted}
            </a>
            <a href="#enroll" onClick={() => setOpen(false)} className="btn text-white px-8 py-3 mt-2">Записаться</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
