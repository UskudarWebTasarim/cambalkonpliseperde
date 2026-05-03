import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const productIcons: Record<string, React.ReactElement> = {
  sineklik: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="4" y="4" width="40" height="40" rx="4" stroke="#83bd81" strokeWidth="2" fill="none" />
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`h${i}`} x1="4" y1={11 + i * 6} x2="44" y2={11 + i * 6} stroke="#83bd81" strokeWidth="0.8" opacity="0.6" />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`v${i}`} x1={11 + i * 6} y1="4" x2={11 + i * 6} y2="44" stroke="#83bd81" strokeWidth="0.8" opacity="0.6" />
      ))}
    </svg>
  ),
  pliseSineklik: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="4" y="4" width="40" height="40" rx="4" stroke="#83bd81" strokeWidth="2" fill="none" />
      {[8, 16, 24, 32, 40].map((y, i) => (
        <g key={i}>
          <path d={`M4 ${y} Q24 ${y - 6} 44 ${y}`} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2 : 1} fill="none" opacity={i % 2 === 0 ? 1 : 0.5} />
        </g>
      ))}
    </svg>
  ),
  plisePerde: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="6" y="4" width="36" height="40" rx="3" stroke="#83bd81" strokeWidth="2" fill="#f4faf4" />
      {[10, 16, 22, 28, 34, 40].map((y, i) => (
        <line key={i} x1="6" y1={y} x2="42" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2.5 : 1.2} opacity={i % 2 === 0 ? 1 : 0.5} />
      ))}
    </svg>
  ),
  jaluzi: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="4" y="6" width="40" height="36" rx="3" stroke="#83bd81" strokeWidth="2" fill="none" />
      {[12, 18, 24, 30, 36].map((y, i) => (
        <rect key={i} x="4" y={y - 3} width="40" height="5" rx="1" fill="#83bd81" opacity={0.2 + i * 0.1} />
      ))}
      <line x1="36" y1="4" x2="36" y2="44" stroke="#83bd81" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  ),
  duet: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="4" y="4" width="40" height="40" rx="3" stroke="#83bd81" strokeWidth="2" fill="none" />
      {[10, 18, 26, 34, 42].map((y, i) => (
        <g key={i}>
          <rect x="4" y={y - 3} width="40" height="4" rx="1" fill="#83bd81" opacity="0.15" />
          <rect x="4" y={y + 2} width="40" height="2" rx="1" fill="#6aaa68" opacity="0.3" />
        </g>
      ))}
    </svg>
  ),
  zip: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="6" y="4" width="36" height="40" rx="3" stroke="#83bd81" strokeWidth="2" fill="none" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="#83bd81" strokeWidth="2.5" />
      <rect x="4" y="4" width="5" height="40" rx="2" fill="#404e5e" opacity="0.2" />
      <rect x="39" y="4" width="5" height="40" rx="2" fill="#404e5e" opacity="0.2" />
      {[12, 18, 30, 36].map((y, i) => (
        <line key={i} x1="9" y1={y} x2="39" y2={y} stroke="#83bd81" strokeWidth="0.8" opacity="0.4" />
      ))}
    </svg>
  ),
};

const otherProducts = [
  {
    slug: "sineklik",
    title: "Sineklik",
    description: "Tüm pencere ve kapı tiplerine uyumlu, alüminyum çerçeveli sineklik sistemleri.",
    icon: "sineklik",
  },
  {
    slug: "plise-sineklik",
    title: "Plise Sineklik",
    description: "Katlanabilir yapısıyla kapı sinekliklerinde en çok tercih edilen pratik çözüm.",
    icon: "pliseSineklik",
  },
  {
    slug: "plise-perde",
    title: "Plise Perde",
    description: "Pencere içi montaj için üretilen, ışık kontrolü sağlayan hassas plise sistemler.",
    icon: "plisePerde",
  },
  {
    slug: "jaluzi-perde",
    title: "Jaluzi Perde",
    description: "Ahşap, PVC veya alüminyum lamelli; yatay ve dikey jaluzi perde modelleri.",
    icon: "jaluzi",
  },
  {
    slug: "duet-perde",
    title: "Düet Perde",
    description: "Çift katmanlı stor; tek kasadan hem şeffaf hem de karartma özelliği sunar.",
    icon: "duet",
  },
  {
    slug: "zip-perde",
    title: "Zip Perde",
    description: "Rüzgar ve ışık kontrolü için kenar kanallarla güçlendirilmiş dış mekan perdesi.",
    icon: "zip",
  },
];

export default function Products() {
  return (
    <section id="urunler" className="py-24 bg-[#f4faf4] relative border-t-4 border-[#83bd81]" aria-label="Ürün kataloğu">
      {/* Top diagonal fill */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-br from-[#fafbf9] to-[#f0f7f0]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      />

      <div className="max-w-[1566px] mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-3 bg-[#e8f5e7] px-3 py-1.5 rounded-full">
            Ürün Kataloğu
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a35] mb-4">
            Ürünlerimiz
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
            Fenetre Systems çatısı altında üretilen tüm perde sistemleri, <strong>EN 13561</strong> ve{" "}
            <strong>CE standartlarına</strong> uygun olarak Gebze fabrikasından çıkmaktadır.
          </p>
        </div>

        {/* Main Product - Cam Balkon Plise Perde - Featured */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#404e5e] to-[#2d3844] mb-12 shadow-2xl">
          {/* Background plise pattern */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 14 }, (_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0"
                style={{
                  top: `${i * 36}px`,
                  height: i % 2 === 0 ? "4px" : "2px",
                  background: "#83bd81",
                  opacity: i % 2 === 0 ? 1 : 0.5,
                }}
              />
            ))}
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: content */}
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 bg-[#83bd81]/20 text-[#83bd81] text-xs font-bold px-3 py-1.5 rounded-full mb-6 border border-[#83bd81]/30">
                ⭐ Ana Ürünümüz
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug">
                <Link href="/" className="hover:text-[#83bd81] transition-colors">
                  Cam Balkon Plise Perde
                </Link>
              </h2>
              <p className="text-[#b8c4cf] leading-relaxed mb-6 text-[15px]">
                Katlanır ve sürgülü cam balkon sistemleriyle tam uyumlu.{" "}
                <strong className="text-white">Yatay plise katlamalı</strong> kumaş yapısı, balkon açıkken perdeler
                neredeyse görünmez olur. Işık filtreli, yarı saydam ve karartma kumaş seçenekleri mevcuttur.
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "UV Koruma UPF50+",
                  "Özel Ölçü Üretim",
                  "Alüminyum Profil",
                  "Kolay Montaj",
                  "10 Yıl Garanti",
                  "Motorlu Seçenek",
                ].map((f) => (
                  <span
                    key={f}
                    className="text-xs font-semibold text-white/80 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905403363873?text=Cam%20balkon%20plise%20perde%20teklif%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-[#83bd81]/30"
                >
                  Teklif Al
                  <ArrowRight size={15} />
                </a>
                <Link
                  href="/#cam-balkon-plise-perde-detay"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/25 hover:border-white/50 font-semibold px-5 py-3 rounded-xl text-sm transition-all"
                >
                  Detaylı İncele
                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right: visual */}
            <div className="hidden lg:flex items-center justify-center p-8">
              <div className="relative">
                <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[240px]">
                  <rect x="10" y="10" width="280" height="340" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(131,189,129,0.3)" strokeWidth="2" />
                  {Array.from({ length: 10 }, (_, i) => {
                    const y = 20 + i * 32;
                    return (
                      <g key={i}>
                        <rect x="10" y={y} width="280" height={i % 2 === 0 ? 20 : 12} fill={`rgba(131,189,129,${i % 2 === 0 ? 0.12 : 0.05})`} />
                        <line x1="10" y1={y} x2="290" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.8 : 0.4} />
                      </g>
                    );
                  })}
                  <rect x="10" y="10" width="280" height="18" rx="4" fill="rgba(131,189,129,0.25)" />
                  <rect x="10" y="342" width="280" height="8" rx="3" fill="rgba(64,78,94,0.5)" />
                  <rect x="10" y="10" width="10" height="340" rx="2" fill="rgba(131,189,129,0.2)" />
                  <rect x="280" y="10" width="10" height="340" rx="2" fill="rgba(131,189,129,0.2)" />
                </svg>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#83bd81]/5 blur-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Other products grid */}
        <div>
          <h3 className="text-xl font-bold text-[#1e2a35] mb-6">Diğer Ürünlerimiz</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProducts.map((product) => (
              <div
                key={product.slug}
                className="product-card bg-white border border-[#dde5dd] rounded-xl p-6 group cursor-pointer hover:border-[#83bd81]"
              >
                <div className="mb-4">{productIcons[product.icon]}</div>
                <h3 className="text-[17px] font-bold text-[#1e2a35] mb-2 group-hover:text-[#83bd81] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-[#718096] leading-relaxed mb-4">{product.description}</p>
                <a
                  href="https://wa.me/905403363873"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#83bd81] text-sm font-semibold hover:gap-2 transition-all"
                >
                  Teklif İste <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
