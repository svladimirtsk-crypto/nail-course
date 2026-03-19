"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BENEFITS } from "@/lib/content";

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="sy sx bg-white/[0.01]" ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-8">
          <p className="label mb-3">{BENEFITS.label}</p>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">{BENEFITS.title}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {BENEFITS.items.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="glass p-5 hover:border-[rgb(var(--accent))]/15 transition-colors">
              <h3 className="text-sm font-bold text-white/85 mb-2">{b.title}</h3>
              <p className="text-[13px] muted leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
