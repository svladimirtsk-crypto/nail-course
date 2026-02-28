"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  Zap,
  CheckCircle2,
  ArrowRight,
  Crown,
  Clock,
  Users,
  BookOpen,
  Wrench,
  Award,
  MessageCircle,
  Target,
  Layers,
  Scissors,
  BarChart3,
  FileCheck,
} from "lucide-react";

const plans = [
  {
    id: "advanced",
    icon: Zap,
    badge: null,
    name: "Повышение квалификации",
    tagline: "Для действующих мастеров",
    price: "10 000",
    period: "за курс",
    description:
      "Ты уже работаешь, но хочешь перейти на гель и увеличить чек. Индивидуальный формат — разберём именно твои ошибки.",
    features: [
      { icon: Clock, text: "2-3 дня обучения" },
      { icon: Users, text: "Индивидуально / до 2 человек" },
      { icon: Layers, text: "Архитектура и выкладка геля" },
      { icon: Scissors, text: "Опил свободного края изнутри" },
      { icon: Wrench, text: "Работа с проблемными ногтями" },
      { icon: BarChart3, text: "Разбор ваших работ по фото" },
      { icon: Target, text: "Практика на моделях" },
      { icon: FileCheck, text: "Сертификат повышения квалификации" },
      { icon: MessageCircle, text: "Поддержка после курса" },
    ],
    accent: false,
  },
  {
    id: "beginner",
    icon: Rocket,
    badge: "ХИТОВЫЙ ВЫБОР",
    name: "Топ-мастер за 7 дней",
    tagline: "С нуля до первых клиентов",
    price: "45 000",
    period: "за курс",
    description:
      "Полный интенсив для тех, кто начинает с абсолютного нуля. За 7 дней — от «никогда не держала аппарат» до «могу работать с клиентами».",
    features: [
      { icon: Clock, text: "7 дней, с 10:00 до 16:00" },
      { icon: Users, text: "Мини-группа до 3 человек" },
      { icon: BookOpen, text: "Теория + практика каждый день" },
      { icon: Wrench, text: "Аппаратный маникюр с нуля" },
      { icon: Layers, text: "Гель, архитектура, выкладка" },
      { icon: Scissors, text: "Техника опила и свободный край" },
      { icon: Target, text: "Работа на моделях с 3-го дня" },
      { icon: Award, text: "Диплом гос. образца" },
      { icon: Wrench, text: "Все материалы и инструменты включены" },
      { icon: MessageCircle, text: "Чат поддержки после выпуска" },
      { icon: FileCheck, text: "Список материалов для старта" },
    ],
    accent: true,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative section-padding">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute right-1/4 top-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-narrow relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Тарифы
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5">
            Инвестиция, которая
            <br />
            <span className="text-gradient">окупается за неделю</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Средний мастер в Москве зарабатывает 150 000–300 000 ₽/мес.
            Посчитайте сами.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`relative rounded-3xl overflow-hidden ${
                plan.accent
                  ? "border-2 border-accent/40 shadow-[0_0_60px_rgba(255,45,123,0.1)]"
                  : "border border-surface-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="bg-gradient-accent text-white text-xs font-bold text-center py-2 tracking-wider">
                  <Crown className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                  {plan.badge}
                </div>
              )}

              <div
                className={`p-6 sm:p-8 ${
                  plan.accent ? "bg-accent/[0.04]" : "bg-surface-card"
                }`}
              >
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      plan.accent ? "bg-accent/15" : "bg-surface-elevated"
                    }`}
                  >
                    <plan.icon
                      className={`w-5 h-5 ${
                        plan.accent ? "text-accent" : "text-text-secondary"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <p className="text-text-muted text-xs">{plan.tagline}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black">
                      {plan.price}
                    </span>
                    <span className="text-lg text-text-muted">₽</span>
                  </div>
                  <span className="text-sm text-text-muted">{plan.period}</span>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 pb-6 border-b border-surface-border/50">
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <feature.icon
                        className={`w-4 h-4 shrink-0 ${
                          plan.accent ? "text-accent" : "text-text-muted"
                        }`}
                      />
                      <span className="text-sm text-text-secondary">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#enroll"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.accent
                      ? "btn-primary"
                      : "bg-surface-elevated border border-surface-border text-white hover:border-accent/50 hover:bg-accent/5"
                  }`}
                >
                  Записаться
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Installment Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-text-muted text-sm mt-8"
        >
          💳 Возможна рассрочка — обсудим индивидуально
        </motion.p>
      </div>
    </section>
  );
}