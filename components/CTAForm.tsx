"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function CTAForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Заменить на реальный API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="enroll"
      className="relative section-padding overflow-hidden bg-gradient-to-b from-surface via-accent/[0.05] to-surface"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-narrow relative" ref={ref}>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,45,123,0.3)]"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5">
              Готова <span className="text-gradient">начать</span>?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">
              Заполни форму — Елена свяжется в течение 2 часов
              <br className="hidden sm:block" />и ответит на все вопросы лично
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-6 sm:p-8 lg:p-10"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Заявка отправлена!
                </h3>
                <p className="text-text-secondary mb-6">
                  Елена свяжется с вами в течение 2 часов.
                  <br />
                  Обычно отвечаем за 15 минут 😉
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Написать в Telegram
                  </a>
                  <a
                    href="https://wa.me/79001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Написать в WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-text-secondary"
                    >
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Как вас зовут?"
                      className="w-full px-5 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-text-secondary"
                    >
                      Телефон или Telegram
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+7"
                      className="w-full px-5 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-white placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                    />
                  </div>

                  {/* Course Select */}
                  <div>
                    <label className="block text-sm font-medium mb-3 text-text-secondary">
                      Какой курс интересует?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, course: "beginner" })
                        }
                        className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                          formData.course === "beginner"
                            ? "border-accent/50 bg-accent/10"
                            : "border-surface-border bg-surface-elevated hover:border-surface-border/80"
                        }`}
                      >
                        <div className="text-sm font-semibold mb-1">
                          🚀 Топ-мастер за 7 дней
                        </div>
                        <div className="text-xs text-text-muted">
                          Для новичков · 45 000 ₽
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, course: "advanced" })
                        }
                        className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                          formData.course === "advanced"
                            ? "border-accent/50 bg-accent/10"
                            : "border-surface-border bg-surface-elevated hover:border-surface-border/80"
                        }`}
                      >
                        <div className="text-sm font-semibold mb-1">
                          ⚡ Повышение квалификации
                        </div>
                        <div className="text-xs text-text-muted">
                          Для мастеров · 10 000 ₽
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-base sm:text-lg py-5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Отправляю...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Занять место в группе
                      </>
                    )}
                  </button>

                  <p className="text-center text-text-muted text-xs">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных
                    данных
                  </p>
                </form>

                {/* Alternative CTA */}
                <div className="mt-6 pt-6 border-t border-surface-border/30">
                  <p className="text-center text-text-muted text-sm mb-4">
                    Или напишите напрямую:
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/79001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600/10 border border-green-600/20 text-green-400 text-sm font-medium hover:bg-green-600/20 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Telegram
                    </a>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-text-muted text-sm"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Москва, Березовая аллея, 7Б
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
