"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ольга, 28 лет",
    role: "С нуля → мастер",
    text: "Пришла с нулём. Через 7 дней взяла первых клиентов. Через 2 месяца — полная запись. Чек 3 500₽.",
    stars: 5,
  },
  {
    name: "Марина, 34 года",
    role: "Мастер → топ-мастер",
    text: "3 года работала гель-лаком. После курса перешла на гель — чек вырос на 40%, отслоек больше нет.",
    stars: 5,
  },
  {
    name: "Катя, 38 лет",
    role: "Офис → своё дело",
    text: "Думала, что в 38 поздно начинать. Ошибалась. Через месяц уволилась из офиса. Не жалею ни секунды.",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative section-padding bg-surface-elevated/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Они уже <span className="text-gradient">сделали это</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                «{t.text}»
              </p>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-accent">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
