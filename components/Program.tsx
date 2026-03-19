"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROGRAM_DATA } from "@/lib/content";
import type { ProgramModule } from "@/lib/content";
import ProgramModal from "./ProgramModal";

type Tab = "beginner" | "pro";

export default function Program() {
  const [tab, setTab] = useState<Tab>("beginner");
  const [activeModule, setActiveModule] = useState<ProgramModule | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const cur = PROGRAM_DATA[tab];

  return (
    <>
      <section id="program" className="sy sx" ref={ref}>
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
            <p className="label mb-3">Программа</p>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">Что вы освоите</h2>
          </motion.div>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }}
            className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-7">
            {(["beginner", "pro"] as Tab[]).map(t => (
              <button key={t} onClick={() => { setTab(t); setActiveModule(null); }}
                className={`px-4 sm:px-5 py-2 rounded-lg text-[13px] font-semibold transition-all
                  ${tab === t ? "btn text-white shadow-lg" : "muted hover:text-white"}`}>
                {PROGRAM_DATA[t].tab}
              </button>
            ))}
          </motion.div>

          {/* Cards Grid */}
          <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cur.modules.map((mod, i) => (
              <motion.button key={mod.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActiveModule(mod)}
                className="glass p-5 text-left group hover:border-[rgb(var(--accent))]/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md"
                    style={{ background: "rgb(var(--accent) / 0.08)", color: "rgb(var(--accent))" }}>
                    {mod.num}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/15 group-hover:text-[rgb(var(--accent))] transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white/85 mb-1.5">{mod.title}</h3>
                <p className="text-[13px] muted leading-snug">{mod.tagline}</p>
              </motion.button>
            ))}
          </motion.div>

          <p className="text-[11px] muted-soft mt-4 text-center sm:text-left">
            Нажмите на модуль, чтобы увидеть подробности
          </p>
        </div>
      </section>

      <ProgramModal module={activeModule} onClose={() => setActiveModule(null)} />
    </>
  );
}
