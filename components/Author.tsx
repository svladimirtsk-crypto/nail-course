"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { AUTHOR } from "@/lib/content";

export default function Author() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="author" className="sy sx bg-white/[0.01]" ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="glass p-5 sm:p-7 flex flex-col sm:flex-row gap-5 sm:gap-7 items-start">
          {/* Photo */}
          <div className="w-full sm:w-40 md:w-48 shrink-0 aspect-square sm:aspect-[3/4] rounded-xl overflow-hidden relative border border-white/[0.06]">
            <Image src="/author.jpg" alt={AUTHOR.name} fill className="object-cover" sizes="(max-width:640px) 100vw, 200px" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="label mb-2">{AUTHOR.label}</p>
            <h2 className="text-xl font-black mb-3">{AUTHOR.name}</h2>
            <p className="text-[13px] sm:text-sm muted leading-relaxed mb-4">{AUTHOR.bio}</p>
            <div className="flex flex-wrap gap-1.5">
              {AUTHOR.facts.map(f => (
                <span key={f} className="px-2.5 py-1 text-[10px] sm:text-[11px] font-medium muted-soft bg-white/[0.04] border border-white/[0.06] rounded-lg">{f}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
