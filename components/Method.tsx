"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Shield, TrendingUp, Gem } from "lucide-react";

const points = [
  {
    icon: Layers,
    title: "Архитектура, а не покрытие",
    text: "Гель позволяет выстроить форму, апекс и арки — то, что невозможно сделать гель-лаком. Это другой уровень прочности и визуала.",
  },
  {
    icon: Shield,
    title: "Носка 4–5 недель без сколов",
    text: "Правильная выкладка + опил свободного края изнутри = ногти, которые не отслаиваются и не ломаются.",
  },
  {
    icon: TrendingUp,
    title: "Выше чек, сильнее позиция",
    text: "Мастер, работающий с гелем и верхними формами, выделяется на рынке. Клиенты видят разницу — и готовы платить за неё.",
  },
  {
    icon: Gem,
    title: "Верхние формы — скорость + точность",
    text: "Создание формы через верхние формы даёт повторяемый, чистый результат без долгого выпиливания.",
  },
];

export default function Method() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="method" className="section-y section-x" ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="max-w-lg mb-10">
          <p className="label mb-3">Почему этот подход</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-3">
            Гель-лак — массовый сегмент.
            <br />
            <span className="text-gradient">Гель — профессиональная эволюция.</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed">
            Современный рынок ценит форму, прочность и визуально дорогой результат.
            Работа с гелем, верхними формами и архитектурным опилом — это технический
            фундамент, который отделяет сильного мастера от массы.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3">
          {points.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              className="glass p-5 group hover:border-[#FF2D7B]/20 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FF2D7B]/[0.08] flex items-center justify-center shrink-0 mt-0.5
                  group-hover:bg-[#FF2D7B]/[0.15] transition-colors">
                  <p.icon className="w-4.5 h-4.5 text-[#FF2D7B]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white/90 mb-1">{p.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{p.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
