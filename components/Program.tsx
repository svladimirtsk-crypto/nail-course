"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { PROGRAM } from "@/lib/content";

type Tab = "beginner" | "pro";

export default function Program() {
  const [tab, setTab] = useState<Tab>("beginner");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const cur = PROGRAM.formats[tab];
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="program" className="sy sx" ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <p className="label mb-3">{PROGRAM.label}</p>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">{PROGRAM.title}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-6">
          {(["beginner", "pro"] as Tab[]).map(t => (
            <button key={t} onClick={() => { setTab(t); setExpanded(null); }}
              className={`px-4 sm:px-5 py-2 rounded-lg text-[13px] font-semibold transition-all
                ${tab === t ? "btn text-white shadow-lg" : "muted hover:text-white"}`}>
              {PROGRAM.formats[t].tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}
            className="space-y-2.5">
            {cur.modules.map((mod, i) => {
              const isOpen = expanded === i;
              return (
                <button key={mod.title} onClick={() => setExpanded(isOpen ? null : i)}
                  className={`w-full text-left glass p-4 sm:p-5 transition-colors
                    ${isOpen ? "border-[rgb(var(--accent))]/20 bg-[rgb(var(--accent))]/[0.03]" : "hover:border-white/[0.1]"}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `rgb(var(--accent) / ${isOpen ? 0.15 : 0.07})`, color: `rgb(var(--accent))` }}>
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-white/85">{mod.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 muted-soft transition-transform shrink-0 ${isOpen ? "rotate-90" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-3 ml-9 space-y-1.5">
                        {mod.items.map(item => (
                          <li key={item} className="text-[13px] muted leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: `rgb(var(--accent) / 0.5)` }} />
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
