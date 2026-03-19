"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket, Zap, ArrowRight, Clock, Users, Package, FileCheck,
  MessageCircle, Phone, Crown,
} from "lucide-react";

const plans = [
  {
    id: "full",
    icon: Rocket,
    popular: true,
    name: "С нуля — полный курс",
    tag: "7 дней · до 3 человек",
    price: "45 000",
    note: "≈ 6 400 ₽ / день",
    desc: "Полный путь от нуля до уверенной работы с гелем, верхними формами и опилом. Для тех, кто входит в профессию на сильной базе.",
    features: [
      { icon: Clock, t: "7 дней, 10:00–16:00" },
      { icon: Users, t: "Мини-группа до 3 человек" },
      { icon: Package, t: "Материалы включены" },
      { icon: FileCheck, t: "Сертификат" },
      { icon: MessageCircle, t: "Поддержка после курса" },
    ],
  },
  {
    id: "pro",
    icon: Zap,
    popular: false,
    name: "Повышение квалификации",
    tag: "1 день · индивидуально",
    price: "10 000",
    note: "окупается за 3–4 процедуры",
    desc: "Переход с гель-лака на гель и верхние формы. Разбор ваших работ, постановка техники за 1 интенсивный день.",
    features: [
      { icon: Clock, t: "1 день интенсива" },
      { icon: Users, t: "До 2 человек" },
      { icon: Package, t: "Материалы включены" },
      { icon: FileCheck, t: "Сертификат" },
      { icon: MessageCircle, t: "Поддержка после курса" },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="section-y section-x" ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-10">
          <p className="label mb-3">Форматы и стоимость</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Выберите свой <span className="text-gradient">формат</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {plans.map((plan, i) => (
            <motion.div key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`rounded-2xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-[#FF2D7B]/30 shadow-[0_0_50px_rgba(255,45,123,0.08)]"
                  : "border border-white/[0.06]"
              }`}>

              {plan.popular && (
                <div className="bg-[#FF2D7B] text-white text-[11px] font-bold text-center py-1.5 tracking-wider flex items-center justify-center gap-1.5">
                  <Crown className="w-3 h-3" /> РЕКОМЕНДУЕМ
                </div>
              )}

              <div className={`p-5 sm:p-7 ${plan.popular ? "bg-[#FF2D7B]/[0.03]" : "bg-white/[0.02]"}`}>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    plan.popular ? "bg-[#FF2D7B]/[0.12]" : "bg-white/[0.05]"}`}>
                    <plan.icon className={`w-4.5 h-4.5 ${plan.popular ? "text-[#FF2D7B]" : "text-white/40"}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{plan.name}</h3>
                    <p className="text-[11px] text-white/30">{plan.tag}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-black">{plan.price}</span>
                  <span className="text-sm text-white/30 ml-1">₽</span>
                  <span className="block text-[11px] text-white/25 mt-0.5">{plan.note}</span>
                </div>

                <p className="text-xs text-white/40 leading-relaxed mb-5 pb-5 border-b border-white/[0.05]">
                  {plan.desc}
                </p>

                <div className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <div key={f.t} className="flex items-center gap-2.5">
                      <f.icon className={`w-3.5 h-3.5 shrink-0 ${plan.popular ? "text-[#FF2D7B]/60" : "text-white/20"}`} />
                      <span className="text-xs text-white/45">{f.t}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <a href="#enroll"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                      plan.popular
                        ? "btn-primary text-white"
                        : "bg-white/[0.05] border border-white/[0.08] text-white/80 hover:border-[#FF2D7B]/30"
                    }`}>
                    Записаться <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a href="tel:+79999777655"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] text-white/25 hover:text-white/50 transition-colors">
                    <Phone className="w-3 h-3" /> позвонить
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
