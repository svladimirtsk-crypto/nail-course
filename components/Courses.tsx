"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  BookOpen, Wrench, Layers, PenTool, Palette, Gauge, FileCheck,
  RotateCcw, Scissors, ShieldCheck, TrendingUp, Sparkles,
  ChevronDown,
} from "lucide-react";

type Tab = "beginner" | "pro";

const data = {
  beginner: {
    title: "С нуля — за 7 дней",
    subtitle: "Для тех, кто входит в профессию и хочет сразу встать на сильную техническую базу",
    format: "7 дней · очно · группа до 3 чел · материалы включены",
    modules: [
      { icon: BookOpen, t: "База без воды", d: "Строение ногтя, стерилизация, инструменты. Почему гель, а не гель-лак." },
      { icon: Wrench, t: "Аппаратный маникюр", d: "Фрезы, обороты, техника. Чистая кутикула с первого раза." },
      { icon: Layers, t: "Гель и верхние формы", d: "Выкладка, архитектура, работа с верхними формами — создание формы, а не просто покрытия." },
      { icon: PenTool, t: "Архитектурный опил", d: "Опил формы сверху + свободный край изнутри. Секрет прочности и носки." },
      { icon: Palette, t: "Цвет и дизайн", d: "Покрытие поверх геля: френч, градиент, базовые дизайны." },
      { icon: Gauge, t: "Скорость и практика", d: "Полный цикл на моделях. Работа быстро, точно, без ошибок." },
      { icon: FileCheck, t: "Экзамен и сертификат", d: "Самостоятельная работа на модели. Разбор. Сертификат." },
    ],
  },
  pro: {
    title: "Повышение квалификации",
    subtitle: "Для мастеров, которые хотят перейти с гель-лака на гель и верхние формы",
    format: "1 день · индивидуально или до 2 чел · материалы включены",
    modules: [
      { icon: RotateCcw, t: "Переход на гель", d: "Материаловедение. Почему гель меняет подход к работе кардинально." },
      { icon: Layers, t: "Архитектура PRO", d: "Апекс, арки, выкладка. Разбор на вашем уровне, не с нуля." },
      { icon: Sparkles, t: "Верхние формы", d: "Работа с верхними формами для точного, повторяемого результата." },
      { icon: Scissors, t: "Опил и свободный край", d: "Опил сверху + изнутри. Техника, дающая принципиально другую носку." },
      { icon: ShieldCheck, t: "Сложные ногти", d: "Тонкие, ломкие, трамплин. Ремонт и коррекция." },
      { icon: TrendingUp, t: "Разбор ваших работ", d: "Анализ ошибок по фото. Практика на модели. Сертификат." },
    ],
  },
};

function AccordionItem({ icon: Icon, t, d }: { icon: any; t: string; d: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)}
      className="w-full text-left p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]
        hover:border-white/[0.08] transition-colors group">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-[#FF2D7B] shrink-0" />
          <span className="text-sm font-semibold text-white/80">{t}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/20 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden">
            <p className="text-xs text-white/35 leading-relaxed mt-2 pl-7">{d}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Courses() {
  const [tab, setTab] = useState<Tab>("beginner");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const cur = data[tab];

  return (
    <section id="courses" className="section-y section-x bg-white/[0.01]" ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="mb-8">
          <p className="label mb-3">Программа обучения</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Два формата — <span className="text-gradient">одна сильная техника</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.15 }}
          className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-8">
          {(["beginner", "pro"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                tab === t
                  ? "bg-[#FF2D7B] text-white shadow-lg shadow-[#FF2D7B]/20"
                  : "text-white/40 hover:text-white/60"
              }`}>
              {t === "beginner" ? "С нуля · 7 дней" : "PRO · 1 день"}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}>

            <div className="glass p-5 sm:p-7 mb-4">
              <h3 className="text-lg font-bold mb-1">{cur.title}</h3>
              <p className="text-xs text-white/40 mb-3">{cur.subtitle}</p>
              <span className="inline-block text-[11px] font-medium text-[#FF2D7B]/80 bg-[#FF2D7B]/[0.08] px-3 py-1 rounded-full">
                {cur.format}
              </span>
            </div>

            <div className="space-y-2">
              {cur.modules.map((m) => (
                <AccordionItem key={m.t} icon={m.icon} t={m.t} d={m.d} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
