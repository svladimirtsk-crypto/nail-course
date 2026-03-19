"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Crown, Phone, ChevronDown } from "lucide-react";
import { PRICING, FAQ_ITEMS, SITE } from "@/lib/content";

/* ── FAQ with CSS grid-rows animation (no layout jumps) ── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-bold mb-3">Частые вопросы</h3>
      {FAQ_ITEMS.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors overflow-hidden">
            <button onClick={() => setOpenIdx(isOpen ? null : i)}
              className="w-full text-left p-4 flex items-center justify-between gap-3"
              aria-expanded={isOpen}>
              <span className="text-[13px] sm:text-[14px] font-medium text-white/70">{f.q}</span>
              <ChevronDown className={`w-4 h-4 text-white/20 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {/* CSS grid-rows trick for smooth height animation */}
            <div className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
              <div className="overflow-hidden">
                <div className={`px-4 pb-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  <p className="text-[13px] sm:text-[14px] text-white/45 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PricingFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="sy sx" ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-8">
          <p className="label mb-3">{PRICING.label}</p>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">{PRICING.title}</h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {PRICING.plans.map((plan, i) => (
            <motion.div key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`rounded-2xl overflow-hidden ${plan.recommended ? "border-2 border-[rgb(var(--accent))]/25" : "border border-white/[0.06]"}`}>
              {plan.recommended && (
                <div className="text-[10px] font-bold text-center py-1.5 tracking-wider flex items-center justify-center gap-1"
                  style={{ background: "rgb(var(--accent))", color: "white" }}>
                  <Crown className="w-3 h-3" /> РЕКОМЕНДУЕМ
                </div>
              )}
              <div className={`p-5 sm:p-6 ${plan.recommended ? "bg-[rgb(var(--accent))]/[0.02]" : "bg-white/[0.02]"}`}>
                <h3 className="text-sm font-bold mb-0.5">{plan.name}</h3>
                <p className="text-[11px] muted-soft mb-3">{plan.duration}</p>
                <div className="mb-3">
                  <span className="text-3xl font-black">{plan.price}</span>
                  <span className="text-sm muted ml-1">₽</span>
                  <span className="block text-[11px] muted-soft mt-0.5">{plan.priceNote}</span>
                </div>
                <p className="text-[13px] muted leading-relaxed mb-4 pb-4 border-b border-white/[0.05]">{plan.desc}</p>
                <ul className="space-y-2 mb-5">
                  {plan.includes.map(inc => (
                    <li key={inc} className="text-[13px] muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "rgb(var(--accent) / 0.5)" }} />{inc}
                    </li>
                  ))}
                </ul>
                <a href="#enroll" className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all
                  ${plan.recommended ? "btn text-white" : "bg-white/[0.05] border border-white/[0.07] text-white/80 hover:border-[rgb(var(--accent))]/25"}`}>
                  Записаться<ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a href={`tel:${SITE.phone}`} className="w-full flex items-center justify-center gap-1.5 py-2 mt-2 text-[11px] muted-soft hover:text-white/50 transition-colors">
                  <Phone className="w-3 h-3" /> или позвонить
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}>
          <FAQ />
        </motion.div>
      </div>
    </section>
  );
}
