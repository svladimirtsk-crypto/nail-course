"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TECHNIQUE } from "@/lib/content";

export default function Technique() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="sx bg-white/[0.01]" ref={ref}>
      <div className="wrap sy">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-8">
          <p className="label mb-3">{TECHNIQUE.label}</p>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            {TECHNIQUE.title.split(",").map((part, i) => i === 0 ? <span key={i}>{part.trim()},<br className="sm:hidden" /> </span> : <span key={i} className="tg">{part.trim()}</span>)}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-3">
          {TECHNIQUE.points.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.08 }}
              className="glass p-5 hover:border-[rgb(var(--accent))]/15 transition-colors">
              <h3 className="text-sm font-bold text-white/90 mb-2">{p.title}</h3>
              <p className="text-[13px] muted leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
