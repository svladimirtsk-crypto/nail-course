"use client";

import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-accent flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight">
              ELENA<span className="text-accent">.</span>NAIL
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href="#for-whom"
              className="hover:text-white transition-colors"
            >
              Для кого
            </a>
            <a href="#author" className="hover:text-white transition-colors">
              Автор
            </a>
            <a href="#program" className="hover:text-white transition-colors">
              Программа
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Тарифы
            </a>
          </div>

          {/* Copy */}
          <div className="text-xs text-text-muted flex items-center gap-1">
            © {new Date().getFullYear()} · Сделано с
            <Heart className="w-3 h-3 text-accent" />
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 pt-6 border-t border-surface-border/30 text-center">
          <p className="text-xs text-text-muted leading-relaxed max-w-lg mx-auto">
            ИП Елена · ИНН: XXX · ОГРНИП: XXX
            <br />
            Москва, Березовая аллея, 7Б ·{" "}
            <a
              href="/privacy"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>{" "}
            ·{" "}
            <a
              href="/offer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Оферта
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}