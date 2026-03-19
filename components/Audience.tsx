"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { AUDIENCE } from "@/lib/content";

export default function Audience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [tab, setTab] = useState<"beginner" | "pro">("beginner");
  const cur = AUDIENCE.tabs.find(t => t.id === tab)!;

  return (
    <section id="audience" className="sy sx" ref={ref}>
      <div className="wrap">
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="label mb-3">{AUDIENCE.label}</motion.p>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.08 }}
          className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-7">
          {AUDIENCE.tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-4 sm:px-5 py-2 rounded-lg text-[13px] font-semibold transition-all
                ${tab === t.id ? "btn text-white shadow-lg" : "muted hover:text-white"}`}>
              {t.tab}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
          className="glass p-5 sm:p-7">
          <h3 className="text-lg sm:text-xl font-bold mb-4">{cur.title}</h3>
          <ul className="space-y-2.5 mb-5">
            {cur.points.map(p => (
              <li key={p} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: `rgb(var(--accent))` }} />
                <span className="text-[13px] sm:text-sm muted leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
            <p className="text-[13px] sm:text-sm text-white/70 leading-relaxed">{cur.result}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
