"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileSticky() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden mobile-safe"
      role="complementary"
      aria-label="Hızlı iletişim"
    >
      <div className="flex">
        <a
          href="tel:+905403363873"
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#404e5e] text-white py-4 font-semibold text-[15px] active:bg-[#2d3844] transition-colors"
          aria-label="Telefon ile ara: +90 540 336 38 73"
        >
          <Phone size={18} />
          <span>Ara</span>
        </a>
        <a
          href="https://wa.me/905403363873?text=Cam%20balkon%20plise%20perde%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-4 font-semibold text-[15px] active:bg-[#1da851] transition-colors"
          aria-label="WhatsApp ile mesaj gönder"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
