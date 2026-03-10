"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AlertTriangle,
  TrendingDown,
  Frown,
  Target,
  Zap,
  Crown,
} from "lucide-react";

const pains = [
  {
    icon: TrendingDown,
    title: "Пилишь за 1 500₽",
    description:
      "12 часов работы, а в конце месяца — слёзы. Клиенты не видят разницы и не готовы платить больше.",
  },
  {
    icon: AlertTriangle,
    title: "Отслойки на 2-й неделе",
    description:
      "Перепробовала 10 баз — не помогает. Потому что проблема не в базе. Проблема в технике.",
  },
  {
    icon: Frown,
    title: "Застряла на одном уровне",
    description:
      "YouTube не работает. Нет наставника, который поправит руку. Годы идут, навыки — на месте.",
  },
];

const solutions = [
  {
    icon: Target,
    title: "Чек ×3",
    description:
      "Архитектура + гель = клиенты ВИДЯТ разницу. И платят за неё без вопросов.",
  },
  {
    icon: Zap,
    title: "Носка 4+ недель",
    description:
      "Гель + правильный опил = ногти-скала. Никаких сколов и переделок.",
  },
  {
    icon: Crown,
    title: "Статус топ-мастера",
    description:
      "Сертификат, портфолио, современная техника. Ты — профессионал, а не «девочка с маникюром».",
  },
];

function AnimatedCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {children}
    </motion.div>
  );
}

export default function ForWhom() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section id="for-whom" className="relative section-padding">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="container-narrow">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Узнаёшь себя?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5">
            Этот курс для тех,
            <br />
            кто <span className="text-gradient">устал терпеть</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto">
            Если хотя бы один пункт — про тебя, значит, пора менять подход
          </p>
        </motion.div>

        {/* Pains */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {pains.map((pain, i) => (
            <AnimatedCard key={pain.title} index={i}>
              <div className="glass-card p-6 sm:p-7 h-full group hover:border-red-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 group-hover:bg-red-500/20 transition-colors">
                  <pain.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{pain.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Mini testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-5 sm:p-6 mb-12 sm:mb-16 border-l-2 border-accent/50"
        >
          <p className="text-sm sm:text-base text-text-secondary italic leading-relaxed">
            «Я 3 года работала за 1 200₽ и думала, что это потолок. После курса
            Елены подняла чек до 3 500₽ — и клиенты только рады.»
          </p>
          <p className="text-xs text-text-muted mt-2">
            — Ольга, 28 лет, мастер после курса
          </p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12 sm:mb-16"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center shadow-[0_0_40px_rgba(255,45,123,0.3)]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M12 5v14m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Solutions header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold">
            После курса всё{" "}
            <span className="text-gradient">будет иначе</span>
          </h3>
        </motion.div>

        {/* Solutions */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {solutions.map((sol, i) => (
            <AnimatedCard key={sol.title} index={i}>
              <div className="glass-card p-6 sm:p-7 h-full group hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <sol.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{sol.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {sol.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
