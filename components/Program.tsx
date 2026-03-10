"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Layers,
  Gauge,
  PenTool,
  Palette,
  ShieldCheck,
  Wrench,
  Scissors,
  Sparkles,
  RotateCcw,
  BookOpen,
  TrendingUp,
  FileCheck,
} from "lucide-react";

type Tab = "beginner" | "advanced";

const beginnerModules = [
  {
    icon: BookOpen,
    title: "Фундамент без воды",
    description:
      "Строение ногтя, стерилизация, инструменты. Разница геля и гель-лака — почему мы навсегда прощаемся со вторым.",
    span: "col-span-1",
    accent: true,
  },
  {
    icon: Wrench,
    title: "Аппарат — твой лучший друг",
    description:
      "Фрезы, обороты, техника. Безупречная кутикула с первого раза.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: Layers,
    title: "Архитектура без мучений",
    description:
      "Апекс, арки, выкладка. Превращаем непонятный термин в навык, который даёт +2 000₽ к чеку.",
    span: "col-span-1 sm:col-span-2",
    accent: true,
  },
  {
    icon: PenTool,
    title: "Опил, который решает",
    description:
      "Выкладка → полимеризация → опил формы → свободный край изнутри. Секрет носки 4+ недель.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: Palette,
    title: "Цвет и дизайн",
    description:
      "Французский, градиент, блёстки. Покрытие поверх геля — чистое декоративное искусство.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: Gauge,
    title: "Скорость без потери качества",
    description:
      "Полный цикл на модели от снятия до финиша. Учимся работать быстро и без ошибок.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: FileCheck,
    title: "Экзамен и сертификат",
    description:
      "Самостоятельная работа на модели. Разбор ошибок. Как найти первых клиентов. Сертификат — в руки.",
    span: "col-span-1 sm:col-span-2",
    accent: true,
  },
];

const advancedModules = [
  {
    icon: RotateCcw,
    title: "Перезагрузка мышления",
    description:
      "Почему гель-лак — прошлый век. Материаловедение: как гель меняет подход к работе на 180°.",
    span: "col-span-1 sm:col-span-2",
    accent: true,
  },
  {
    icon: Layers,
    title: "Архитектура уровня PRO",
    description:
      "Апекс, боковые и продольные арки. Разбор на вашем уровне — не с нуля, а с точки, где вы сейчас.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: Scissors,
    title: "Опил как искусство",
    description:
      "Выкладка → опил сверху → свободный край изнутри. Разница в носке — катастрофическая.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: ShieldCheck,
    title: "Проблемные ногти",
    description:
      "Тонкие, ломкие, трамплин, онихолизис. Ремонт и коррекция — без паники.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "Разбор ваших работ",
    description:
      "Принесите фото своих работ. Разберём каждую ошибку. Увеличим скорость без потери качества.",
    span: "col-span-1",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "Практика и сертификат",
    description:
      "Отработка на модели. Работа над вашими слабыми местами. Сертификат повышения квалификации.",
    span: "col-span-1 sm:col-span-2",
    accent: false,
  },
];

export default function Program() {
  const [activeTab, setActiveTab] = useState<Tab>("beginner");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const modules = activeTab === "beginner" ? beginnerModules : advancedModules;

  return (
    <section
      id="program"
      className="relative section-padding bg-gradient-to-b from-surface via-accent/[0.02] to-surface"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute left-0 top-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container-narrow relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Программа
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5">
            Не{" "}
            <span className="line-through text-text-muted">
              теория из YouTube
            </span>
            <br />
            <span className="text-gradient">Система, которая работает</span>
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-card border border-surface-border">
            <button
              onClick={() => setActiveTab("beginner")}
              className={`px-4 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "beginner"
                  ? "bg-gradient-accent text-white shadow-lg shadow-accent/20"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              <span className="sm:hidden">🚀 За 7 дней</span>
              <span className="hidden sm:inline">
                🚀 Топ-мастер за 7 дней
              </span>
            </button>
            <button
              onClick={() => setActiveTab("advanced")}
              className={`px-4 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "advanced"
                  ? "bg-gradient-accent text-white shadow-lg shadow-accent/20"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              <span className="sm:hidden">⚡ Квалификация</span>
              <span className="hidden sm:inline">
                ⚡ Повышение квалификации
              </span>
            </button>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${mod.span} group`}
            >
              <div
                className={`glass-card p-6 sm:p-7 h-full transition-all duration-300 hover:border-accent/30 ${
                  mod.accent ? "bg-accent/[0.04]" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    mod.accent
                      ? "bg-accent/15 group-hover:bg-accent/25"
                      : "bg-surface-elevated group-hover:bg-accent/10"
                  }`}
                >
                  <mod.icon
                    className={`w-5 h-5 ${
                      mod.accent
                        ? "text-accent"
                        : "text-text-secondary group-hover:text-accent"
                    } transition-colors`}
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  {mod.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Format Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass-card p-6 sm:p-8"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                {activeTab === "beginner" ? "7 дней" : "1 день"}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                Длительность
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                {activeTab === "beginner" ? "до 3 чел" : "1-2 чел"}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                В группе
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                Очно
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                Москва, Березовая аллея, 7Б
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
