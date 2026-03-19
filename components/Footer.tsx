import { Sparkles, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 section-x pb-20 sm:pb-10">
      <div className="wrap">
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#FF2D7B] to-[#d91a63] flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-xs text-white/60">ELENA<span className="text-[#FF2D7B]">.</span>GEL</span>
          </a>

          <div className="flex items-center gap-4 text-[11px] text-white/25">
            <a href="tel:+79999777655" className="flex items-center gap-1 hover:text-white/50 transition-colors">
              <Phone className="w-3 h-3" /> +7 999 977-76-55
            </a>
            <a href="https://t.me/kogotkimsk" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white/50 transition-colors">
              <MessageCircle className="w-3 h-3" /> Telegram
            </a>
            <a href="https://wa.me/79999777655" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white/50 transition-colors">
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </a>
          </div>

          <div className="text-[10px] text-white/15">
            © {new Date().getFullYear()} ·{" "}
            <a href="/privacy" className="underline underline-offset-2 hover:text-white/30 transition-colors">Конфиденциальность</a>
            {" · "}
            <a href="/offer" className="underline underline-offset-2 hover:text-white/30 transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
