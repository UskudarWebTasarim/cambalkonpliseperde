import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/FenetreSystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fenetresystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com/FenetreSystems",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/fenetresystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://tr.pinterest.com/fenetresystems/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@FenetreSystems",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.55 12 19.55 12 19.55s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 11.75a29 29 0 00-.46-5.33z" />
        <polygon fill="white" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

const internalLinks = [
  { label: "Cam Balkon Plise Perde", href: "/" },
  { label: "Pliseli Perde Sistemleri", href: "/" },
  { label: "Katlamalı Balkon Perdesi", href: "/#urunler" },
  { label: "Cam Balkon Perdesi Fiyatları", href: "/#iletisim" },
  { label: "Akordeon Cam Perdesi", href: "/#cam-balkon-plise-perde-detay" },
  { label: "Balkon Plise Sistemi", href: "/#surec" },
  { label: "Cam Balkon Güneşlik Perdesi", href: "/#uygulama" },
  { label: "Isı Yalıtımlı Balkon Perdesi", href: "/#cam-balkon-plise-perde-detay" },
  { label: "Plise Perde Montaj", href: "/#surec" },
  { label: "Fenetre Plise Perde", href: "/" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#2d3844] text-white" role="contentinfo">
      {/* Main footer grid */}
      <div className="max-w-[1566px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#83bd81] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                  <line x1="6" y1="9" x2="30" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="6" y1="15" x2="30" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
                  <line x1="6" y1="21" x2="30" y2="21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="6" y1="27" x2="30" y2="27" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
                </svg>
              </div>
              <div>
                <a
                  href="https://www.fenetresystems.com"
                  rel="dofollow"
                  target="_blank"
                  className="block text-[15px] font-bold text-white hover:text-[#83bd81] transition-colors"
                >
                  Fenetre Systems
                </a>
                <span className="text-[11px] text-[#6b7d8f]">Cam Balkon Plise Perde</span>
              </div>
            </div>

            <p className="text-[#8fa4b8] text-sm leading-relaxed mb-5">
              Gebze, Kocaeli'nde üretim yapan Fenetre Systems, Türkiye ve Avrupa'ya yönelik
              plise perde, sineklik ve perde sistemleri üretmektedir.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#83bd81] flex items-center justify-center transition-colors text-[#8fa4b8] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products column */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Ürünlerimiz</h3>
            <ul className="space-y-2.5">
              {[
                "Cam Balkon Plise Perde",
                "Sineklik",
                "Plise Sineklik",
                "Plise Perde",
                "Jaluzi Perde",
                "Düet Perde",
                "Zip Perde",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#urunler"
                    className="text-sm text-[#8fa4b8] hover:text-[#83bd81] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6b7d8f] group-hover:bg-[#83bd81] transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Internal links column */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">Hızlı Bağlantılar</h3>
            <ul className="space-y-2.5">
              {internalLinks.slice(0, 8).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8fa4b8] hover:text-[#83bd81] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6b7d8f] group-hover:bg-[#83bd81] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5">İletişim</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+905403363873"
                  className="flex items-start gap-3 text-[#8fa4b8] hover:text-[#83bd81] transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#83bd81]" />
                  <span className="text-sm">+90 540 336 38 73</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905403363873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#8fa4b8] hover:text-[#83bd81] transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" className="mt-0.5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm">WhatsApp: +90 540 336 38 73</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fenetresystems.com"
                  className="flex items-start gap-3 text-[#8fa4b8] hover:text-[#83bd81] transition-colors"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#83bd81]" />
                  <span className="text-sm">info@fenetresystems.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#8fa4b8]">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#83bd81]" />
                <address className="text-sm not-italic leading-relaxed">
                  Cumhuriyet Mah. 2233 Sok.<br />
                  No:4/A Gebze / Kocaeli
                </address>
              </li>
            </ul>

            <div className="mt-5 text-xs text-[#6b7d8f]">
              <p>Pzt–Cts: 09:00 – 18:00</p>
              <p className="mt-1">Pazar: Kapalı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1566px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6b7d8f] text-xs">
            © {new Date().getFullYear()} Cam Balkon Plise Perde — Tüm hakları saklıdır.
            Tüm ürünler{" "}
            <a
              href="https://www.fenetresystems.com"
              rel="dofollow"
              target="_blank"
              className="text-[#83bd81] hover:underline font-semibold"
            >
              Fenetre Systems
            </a>{" "}
            markası altında üretilmektedir.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#6b7d8f]">
            <span>Üretim: Gebze, Kocaeli, Türkiye</span>
            <span className="w-1 h-1 rounded-full bg-[#6b7d8f]" />
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-sm bg-[#003399] inline-flex items-center justify-center">
                <span className="text-white text-[7px] font-bold">EU</span>
              </span>
              Avrupa Standartları
            </span>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding */}
      <div className="h-16 md:hidden bg-[#2d3844]" />
    </footer>
  );
}
