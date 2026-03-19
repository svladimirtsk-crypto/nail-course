import { Sparkles, Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="py-8 sx pb-20 sm:pb-8">
      <div className="wrap border-t border-white/[0.04] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[rgb(var(--accent))] to-[#d91a63] flex items-center justify-center">
            <Sparkles className="w-2.5 h-2.5 text-white" />
          </div>
          <span className="font-bold text-[11px] muted-soft">{SITE.name}</span>
        </a>
        <div className="flex items-center gap-3 text-[11px] muted-soft">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-1 hover:text-white/50 transition-colors"><Phone className="w-3 h-3" />{SITE.phoneFormatted}</a>
          <a href={SITE.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white/50 transition-colors"><MessageCircle className="w-3 h-3" />TG</a>
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white/50 transition-colors"><MessageCircle className="w-3 h-3" />WA</a>
        </div>
        <div className="text-[10px] text-white/[0.12]">
          © {new Date().getFullYear()} · <a href="/privacy" className="underline hover:text-white/25 transition-colors">Конфиденциальность</a> · <a href="/offer" className="underline hover:text-white/25 transition-colors">Оферта</a>
        </div>
      </div>
    </footer>
  );
}
