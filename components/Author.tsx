"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const milestones = [
  {
    year: "2016",
    text: "Начало пути — первый клиент, первые ошибки, первый опыт",
  },
  {
    year: "2023",
    text: "Получение диплома инструктора гос. образца. Полный переход на гель — прощай, гель-лак",
  },
  {
    year: "2024",
    text: "Своя авторская программа обучения",
  },
  {
    year: "2026",
    text: "Запуск обновлённого курса с фокусом на архитектуру",
  },
];

const credentials = [
  { icon: GraduationCap, text: "Диплом гос. образца" },
  { icon: CalendarDays, text: "10 лет практики" },
  { icon: ShieldCheck, text: "Действующий мастер" },
];

export default function Author() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="author"
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container-narrow relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Автор курса
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Елена — <span className="text-gradient">10 лет в деле</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Photo + Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Photo */}
            <div className="relative mb-8">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-surface-border">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Инструктор Елена за работой"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 right-4 glass-card px-5 py-3 flex items-center gap-3 shadow-2xl">
                <Award className="w-8 h-8 text-accent" />
                <div>
                  <div className="text-sm font-bold">Диплом</div>
                  <div className="text-xs text-text-muted">гос. образца</div>
                </div>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-3 gap-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card p-3 sm:p-4 flex flex-col items-center gap-2 text-center"
                >
                  <cred.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-medium leading-tight">
                    {cred.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Quote + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Quote */}
            <div className="glass-card p-6 sm:p-8 mb-8">
              <div className="text-accent text-4xl font-serif leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-lg sm:text-xl leading-relaxed mb-4">
                Я не преподаю по учебнику. Я каждый день работаю с клиентами и
                знаю, что{" "}
                <span className="text-white font-semibold">
                  реально нужно мастеру
                </span>
                , чтобы зарабатывать и кайфовать от своей работы.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Несколько лет назад я перешла с гель-лака на гель — и это
                изменило всё: носка выросла, клиенты стали возвращаться, чек
                увеличился в три раза. Теперь я передаю этот опыт.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent/50 group-hover:bg-accent transition-colors shrink-0 mt-1.5" />
                    {i < milestones.length - 1 && (
                      <div className="w-px h-full bg-surface-border min-h-[40px]" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="text-accent text-sm font-bold">
                      {item.year}
                    </span>
                    <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
