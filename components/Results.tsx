"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trophy,
  Banknote,
  Shield,
  Heart,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const results = [
  {
    icon: Trophy,
    title: "Современная техника",
    details: "Гель, архитектура, опил — то, что отличает топ-мастера от «ещё одной девочки с маникюром».",
  },
  {
    icon: Banknote,
    title: "Чек от 3 000₽ за процедуру",
    details: "Когда клиент видит архитектуру и носку 4+ недель — он сам готов платить больше.",
  },
  {
    icon: Shield,
    title: "Диплом / Сертификат",
    details: "Официальный документ, который подтверждает вашу квалификацию и даёт право работать легально.",
  },
  {
    icon: Heart,
    title: "Уверенность в каждом ногте",
    details: "Больше никаких «а вдруг отслоится». Вы знаете технику — и она работает.",
  },
];

const outcomes = [
  "Полная запись в первый месяц",
  "Портфолио с курса для соцсетей",
  "Список материалов для старта",
  "Поддержка в чате после обучения",
  "Навык работы на реальных моделях",
  "Возможность повысить чек на 50-200%",
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative section-padding">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Результат
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5">
            Что ты <span className="text-gradient">заберёшь</span> с собой
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Не просто знания — а систему, которая сразу начинает приносить
            деньги
          </p>
        </motion.div>

        {/* Results Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-12">
          {results.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-6 sm:p-8 group hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 sm:p-8 bg-accent/[0.03]"
        >
          <h3 className="text-lg font-bold mb-6 text-center">
            А ещё вы получите:
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {outcomes.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-text-secondary">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}