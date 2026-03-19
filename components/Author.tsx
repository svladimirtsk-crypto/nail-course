"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Author() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="author" className="section-y section-x bg-white/[0.01]" ref={ref}>
      <div className="wrap">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <motion.div initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06]">
              <Image src="/author.jpg" alt="Елена — автор курса" fill
                className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="label mb-3">Автор курса</p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Елена</h2>

            <div className="space-y-3 mb-6">
              <p className="text-sm text-white/45 leading-relaxed">
                Практикующий мастер с 10-летним стажем. Работаю с гелем,
                верхними формами и архитектурным опилом — техникой, которая
                даёт принципиально другой уровень прочности и визуала.
              </p>
              <p className="text-sm text-white/45 leading-relaxed">
                Несколько лет назад полностью перешла с гель-лака на гель —
                и это изменило мою работу, мой чек и качество результата.
                Теперь я передаю эту технику.
              </p>
              <p className="text-sm text-white/45 leading-relaxed">
                Это не школа на потоке. Это авторский курс с фокусом на
                глубину техники, постановку руки и точный, повторяемый результат.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Диплом инструктора гос. образца", "10 лет практики", "Действующий мастер"].map((b) => (
                <span key={b}
                  className="px-3 py-1.5 text-[11px] font-medium text-white/50 bg-white/[0.04] border border-white/[0.06] rounded-lg">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
