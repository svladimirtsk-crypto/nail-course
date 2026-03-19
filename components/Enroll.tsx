"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, MessageCircle, Loader2, CheckCircle2, MapPin } from "lucide-react";
import { SITE } from "@/lib/content";

export default function Enroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", phone: "", course: "beginner" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true); setError("");
    const courseName = form.course === "beginner" ? "С нуля — 7 дней (45 000₽)" : "Повышение квалификации (10 000₽)";
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: SITE.web3formsKey, subject: `Заявка: ${courseName}`, from_name: SITE.name, name: form.name, phone: form.phone, course: courseName }),
      });
      const json = await res.json();
      json.success ? setSent(true) : setError("Ошибка. Попробуйте ещё раз или позвоните.");
    } catch { setError("Ошибка сети. Позвоните нам."); }
    finally { setSending(false); }
  };

  return (
    <section id="enroll" className="sy sx bg-white/[0.01]" ref={ref}>
      <div className="wrap max-w-lg">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <p className="label mb-3">Запись</p>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-1">Забронировать место</h2>
          <p className="text-[13px] muted-soft mb-5">Елена свяжется в течение нескольких часов</p>

          <div className="glass p-5 sm:p-7">
            {sent ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-5">
                <CheckCircle2 className="w-9 h-9 mx-auto mb-3" style={{ color: "#4ade80" }} />
                <h3 className="text-lg font-bold mb-1">Отправлено</h3>
                <p className="text-[13px] muted mb-5">Обычно отвечаем быстро</p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"><MessageCircle className="w-3.5 h-3.5" />Telegram</a>
                  <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium"><MessageCircle className="w-3.5 h-3.5" />WhatsApp</a>
                  <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] muted-soft text-xs font-medium"><Phone className="w-3.5 h-3.5" />Позвонить</a>
                </div>
              </motion.div>
            ) : (
              <>
                <form onSubmit={submit} className="space-y-4">
                  <input type="checkbox" name="botcheck" className="hidden" />
                  <div>
                    <label className="block text-xs font-medium muted mb-1.5">Имя</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Как вас зовут?"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[rgb(var(--accent))]/30 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium muted mb-1.5">Телефон или Telegram</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+7"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[rgb(var(--accent))]/30 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium muted mb-1.5">Формат</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[{ v: "beginner", l: "С нуля · 7 дней", p: "45 000 ₽" }, { v: "pro", l: "PRO · 1 день", p: "10 000 ₽" }].map(o => (
                        <button key={o.v} type="button" onClick={() => setForm({ ...form, course: o.v })}
                          className={`p-3 rounded-xl border text-left transition-all text-xs ${form.course === o.v ? "border-[rgb(var(--accent))]/35 bg-[rgb(var(--accent))]/[0.06]" : "border-white/[0.06] bg-white/[0.02]"}`}>
                          <div className="font-semibold text-white/70 mb-0.5">{o.l}</div>
                          <div className="text-[10px] muted-soft">{o.p}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  {error && <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">{error}</div>}
                  <button type="submit" disabled={sending} className="btn w-full text-white text-sm py-3.5 flex items-center justify-center gap-2 disabled:opacity-60">
                    {sending ? <><Loader2 className="w-4 h-4 animate-spin" />Отправляю…</> : <><Send className="w-4 h-4" />Записаться</>}
                  </button>
                  <p className="text-[10px] muted-soft text-center">
                    Нажимая, вы соглашаетесь с <a href="/privacy" className="underline">политикой конфиденциальности</a> и <a href="/offer" className="underline">офертой</a>
                  </p>
                </form>
                <div className="mt-4 pt-3.5 border-t border-white/[0.04] flex gap-2">
                  <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-green-600/[0.06] border border-green-600/[0.1] text-green-400 text-[11px] font-medium"><MessageCircle className="w-3 h-3" />WhatsApp</a>
                  <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-500/[0.06] border border-blue-500/[0.1] text-blue-400 text-[11px] font-medium"><MessageCircle className="w-3 h-3" />Telegram</a>
                  <a href={`tel:${SITE.phone}`} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] muted-soft text-[11px] font-medium"><Phone className="w-3 h-3" />Звонок</a>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 mt-3 text-[11px] muted-soft"><MapPin className="w-3 h-3" />{SITE.address}</div>
        </motion.div>
      </div>
    </section>
  );
}
