"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

const navItems = [
  { label: "Ürünler", href: "#urunler" },
  { label: "Nasıl Çalışır", href: "#surec" },
  { label: "Uygulama Örnekleri", href: "#uygulamalar" },
  { label: "Hizmet Bölgeleri", href: "#hizmet-bolgesi" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#footer" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled
          ? "shadow-[0_2px_20px_rgba(64,78,94,0.12)] border-b-2 border-[#83bd81]"
          : "border-b border-[#dde5dd]"
      }`}
    >
      <div className="max-w-[1566px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Ana Sayfa">
            <div className="relative w-9 h-9 flex-shrink-0">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="36" height="36" rx="8" fill="#83bd81" />
                {/* Plise fold icon */}
                <line x1="8" y1="10" x2="28" y2="10" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="8" y1="15" x2="28" y2="15" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7" />
                <line x1="8" y1="20" x2="28" y2="20" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="8" y1="25" x2="28" y2="25" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7" />
                <path d="M8 10 L8 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M28 10 L28 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="block text-[15px] font-extrabold text-[#1e2a35] leading-tight tracking-tight group-hover:text-[#83bd81] transition-colors">
                Fenetre Systems
              </span>
              <span className="block text-[11px] text-[#718096] font-normal leading-none tracking-wide uppercase">
                Cam Balkon Plise Perde
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Ana menü">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[#4a5568] hover:text-[#83bd81] hover:bg-[#f4faf4] rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+905403363873"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#404e5e] hover:text-[#83bd81] transition-colors"
              aria-label="Telefon numaramızı ara"
            >
              <Phone size={15} />
              <span>+90 540 336 38 73</span>
            </a>
            <a
              href="#iletisim"
              className="hidden md:flex items-center gap-1.5 bg-[#83bd81] hover:bg-[#6aaa68] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Teklif Al
              <ChevronRight size={14} />
            </a>
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[#f4faf4] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} className="text-[#404e5e]" /> : <Menu size={20} className="text-[#404e5e]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#dde5dd] py-4 space-y-1 bg-white">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#4a5568] hover:text-[#83bd81] hover:bg-[#f4faf4] rounded-lg transition-all"
                onClick={() => setMenuOpen(false)}
              >
                <ChevronRight size={14} className="text-[#83bd81]" />
                {item.label}
              </a>
            ))}
            <div className="pt-3 px-4 flex flex-col gap-2 border-t border-[#dde5dd] mt-2">
              <a
                href="tel:+905403363873"
                className="flex items-center gap-2 text-sm font-semibold text-[#404e5e] py-2"
              >
                <Phone size={15} className="text-[#83bd81]" />
                +90 540 336 38 73
              </a>
              <a
                href="#iletisim"
                className="flex items-center justify-center gap-1.5 bg-[#83bd81] text-white text-sm font-semibold px-4 py-3 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Ücretsiz Teklif Al
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
