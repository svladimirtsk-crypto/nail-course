"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send, Phone, MessageCircle, Loader2, CheckCircle2,
  ChevronDown, MapPin, Sparkles,
} from "lucide-react";

const faqs = [
  { q: "Можно ли совсем с нуля?", a: "Да. 7-дневный курс рассчитан на людей без опыта. Всё — от постановки руки до работы на моделях." },
  { q: "Я мастер и работаю гель-лаком. Мне подойдёт?", a: "Именно для этого сделан однодневный интенсив: переход на гель, верхние формы, архитектурный опил. Разберём ваши работы и поставим технику." },
  { q: "Нужно ли приносить инструменты?", a: "Материалы предоставляются. Инструменты обсуждаются индивидуально перед началом курса." },
  { q: "Чем это отличается от обычных курсов?", a: "Фокус на конкретной современной технике: гель + верхние формы + опил. Не «всё обо всём», а глубокая проработка того, что реально влияет на уровень и чек." },
  { q: "Будет ли практика на моделях?", a: "Да. В 7-дневном курсе — с 3-го дня. В однодневном — в процессе обучения." },
  { q: "Есть ли рассрочка?", a: "Да, обсудим индивидуально. Напишите или позвоните." },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {faqs.map((f, i) => (
        <button key={i} onClick={() => setOpenIdx(openIdx === i ? null : i)}
          className="w-full text-left p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-white/70">{f.q}</span>
            <ChevronDown className={`w-4 h-4 text-white/20 shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
          </div>
          <AnimatePresence>
            {openIdx === i && (
              <motion.div initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }} className="overflow-hidden">
                <p className="text-xs text-white/35 leading-relaxed mt-2.5">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
}

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", phone: "", course: "beginner" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const courseName = form.course === "beginner"
      ? "С нуля — 7 дней (45 000₽)"
      : "Повышение квалификации (10 000₽)";
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "12216bf8-97dc-4b7c-9fec-879afe4a04f9",
          subject: `Заявка: ${courseName}`,
          from_name: "ELENA.GEL Landing",
          name: form.name,
          phone: form.phone,
          course: courseName,
        }),
      });
      const json = await res.json();
      if (json.success) setSent(true);
      else setError("Ошибка. Попробуйте ещё раз или позвоните.");
    } catch {
      setError("Ошибка сети. Позвоните нам напрямую.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="enroll" className="section-y section-x bg-white/[0.01]" ref={ref}>
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">

          {/* Left: Form */}
          <motion.div initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <p className="label mb-3">Запись</p>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Забронировать <span className="text-gradient">место</span>
            </h2>
            <p className="text-xs text-white/35 mb-6">Елена свяжется в течение 2 часов</p>

            <div className="glass p-5 sm:p-7">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400/80 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-1">Отправлено!</h3>
                  <p className="text-xs text-white/40 mb-5">Обычно отвечаем за 15 минут</p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <a href="https://t.me/kogotkimsk" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                      <MessageCircle className="w-3.5 h-3.5" /> Telegram
                    </a>
                    <a href="https://wa.me/79999777655" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                    <a href="tel:+79999777655"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.06] text-white/50 text-xs font-medium">
                      <Phone className="w-3.5 h-3.5" /> Позвонить
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <input type="checkbox" name="botcheck" className="hidden" />
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">Имя</label>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Как вас зовут?"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-sm placeholder:text-white/20
                        focus:outline-none focus:border-[#FF2D7B]/30 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">Телефон или Telegram</label>
                    <input type="tel" required value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-sm placeholder:text-white/20
                        focus:outline-none focus:border-[#FF2D7B]/30 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">Формат</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { v: "beginner", l: "С нуля · 7 дней", p: "45 000 ₽" },
                        { v: "pro", l: "PRO · 1 день", p: "10 000 ₽" },
                      ].map((o) => (
                        <button key={o.v} type="button"
                          onClick={() => setForm({ ...form, course: o.v })}
                          className={`p-3 rounded-xl border text-left transition-all text-xs ${
                            form.course === o.v
                              ? "border-[#FF2D7B]/40 bg-[#FF2D7B]/[0.08]"
                              : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
                          }`}>
                          <div className="font-semibold text-white/70 mb-0.5">{o.l}</div>
                          <div className="text-[10px] text-white/25">{o.p}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={sending}
                    className="btn-primary w-full text-white text-sm py-3.5 flex items-center justify-center gap-2 disabled:opacity-60">
                    {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Отправляю…</> : <><Send className="w-4 h-4" /> Записаться</>}
                  </button>

                  <p className="text-[10px] text-white/15 text-center">
                    Нажимая, вы соглашаетесь с{" "}
                    <a href="/privacy" className="underline">политикой конфиденциальности</a> и{" "}
                    <a href="/offer" className="underline">офертой</a>
                  </p>
                </form>
              )}

              {!sent && (
                <div className="mt-5 pt-4 border-t border-white/[0.04] flex gap-2">
                  <a href="https://wa.me/79999777655" target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-green-600/[0.06] border border-green-600/[0.12] text-green-400 text-[11px] font-medium">
                    <MessageCircle className="w-3 h-3" /> WhatsApp
                  </a>
                  <a href="https://t.me/kogotkimsk" target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-500/[0.06] border border-blue-500/[0.12] text-blue-400 text-[11px] font-medium">
                    <MessageCircle className="w-3 h-3" /> Telegram
                  </a>
                  <a href="tel:+79999777655"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40 text-[11px] font-medium">
                    <Phone className="w-3 h-3" /> Звонок
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mt-4 text-[11px] text-white/25">
              <MapPin className="w-3 h-3" /> Москва, Березовая аллея, 7Б
            </div>
          </motion.div>

          {/* Right: FAQ */}
          <motion.div initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.12 }}>
            <p className="label mb-3">Вопросы</p>
            <h3 className="text-lg font-bold mb-5">Частые вопросы</h3>
            <FAQ />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
