import { Sparkles, Heart, Phone, MessageCircle } from "lucide-react";

const footerLinks = [
  { href: "#for-whom", label: "Для кого" },
  { href: "#author", label: "Автор" },
  { href: "#program", label: "Программа" },
  { href: "#pricing", label: "Тарифы" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-5 pb-24 sm:pb-12">
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
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copy */}
          <div className="text-xs text-text-muted flex items-center gap-1">
            © {currentYear} · Сделано с
            <Heart className="w-3 h-3 text-accent" />
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-8 pt-6 border-t border-surface-border/30 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="tel:+79999777655"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            +7 999 977-76-55
          </a>
          <a
            href="https://t.me/kogotkimsk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Telegram
          </a>
          <a
            href="https://wa.me/79999777655"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Legal */}
        <div className="mt-6 text-center">
          <p className="text-xs text-text-muted leading-relaxed">
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
