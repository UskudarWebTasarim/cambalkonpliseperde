import { ChevronRight, Star, Shield, Truck, Award } from "lucide-react";
import Link from "next/link";

function PliseFoldIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background architectural grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="500" y2={i * 50} stroke="#404e5e" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" stroke="#404e5e" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Main plise perde illustration */}
      <div className="relative w-[280px] md:w-[340px] lg:w-[380px] animate-float">
        <svg
          viewBox="0 0 380 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl"
        >
          {/* Window frame */}
          <rect x="20" y="20" width="340" height="440" rx="6" fill="#f0f4f0" stroke="#dde5dd" strokeWidth="2" />
          <rect x="20" y="20" width="340" height="440" rx="6" fill="url(#windowGlass)" />

          {/* Sky/outside view */}
          <rect x="24" y="24" width="332" height="432" rx="4" fill="url(#skyGrad)" />

          {/* Balcony/building outside */}
          <rect x="80" y="280" width="220" height="180" rx="2" fill="#e8edf2" opacity="0.6" />
          <rect x="100" y="300" width="60" height="80" fill="#c8d4e0" opacity="0.5" rx="2" />
          <rect x="220" y="300" width="60" height="80" fill="#c8d4e0" opacity="0.5" rx="2" />

          {/* Plise perde folds */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const y = 30 + i * 36;
            const isMain = i % 2 === 0;
            return (
              <g key={i}>
                {/* Fold shadow */}
                <rect
                  x="24"
                  y={y}
                  width="332"
                  height={isMain ? 24 : 12}
                  fill={isMain ? "rgba(131,189,129,0.18)" : "rgba(131,189,129,0.08)"}
                />
                {/* Fold top line */}
                <line
                  x1="24"
                  y1={y}
                  x2="356"
                  y2={y}
                  stroke={isMain ? "#83bd81" : "#aed4ac"}
                  strokeWidth={isMain ? 2.5 : 1.2}
                  opacity={isMain ? 1 : 0.7}
                />
                {/* Fold texture dots */}
                {isMain &&
                  Array.from({ length: 12 }, (_, j) => (
                    <circle
                      key={j}
                      cx={50 + j * 26}
                      cy={y + 12}
                      r="1.5"
                      fill="#83bd81"
                      opacity="0.25"
                    />
                  ))}
              </g>
            );
          })}

          {/* Top rail */}
          <rect x="20" y="20" width="340" height="22" rx="4" fill="url(#railGrad)" />
          <rect x="20" y="20" width="340" height="8" rx="4" fill="#6aaa68" />

          {/* Bottom rail */}
          <rect x="20" y="454" width="340" height="6" rx="3" fill="#404e5e" />

          {/* Side rails */}
          <rect x="20" y="20" width="8" height="440" rx="2" fill="#5a8a58" />
          <rect x="352" y="20" width="8" height="440" rx="2" fill="#5a8a58" />

          {/* Handle cord */}
          <circle cx="190" cy="454" r="8" fill="#404e5e" />
          <circle cx="190" cy="454" r="4" fill="#6b7d8f" />

          {/* Window frame outline */}
          <rect x="20" y="20" width="340" height="440" rx="6" fill="none" stroke="#404e5e" strokeWidth="3" />

          {/* Gradients */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dbeeff" />
              <stop offset="100%" stopColor="#eef4f0" />
            </linearGradient>
            <linearGradient id="windowGlass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8fca8d" />
              <stop offset="100%" stopColor="#6aaa68" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating badge: Avrupa Standartı */}
        <div className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2 border border-[#dde5dd]">
          <div className="w-7 h-7 rounded-full bg-[#003399] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[8px] font-bold">EU</span>
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#1e2a35] leading-none">Avrupa</div>
            <div className="text-[9px] text-[#718096] leading-none mt-0.5">Standartları</div>
          </div>
        </div>

        {/* Floating badge: UV Koruma */}
        <div className="absolute -bottom-2 -left-4 md:-left-8 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2 border border-[#dde5dd]">
          <div className="w-7 h-7 rounded-full bg-[#83bd81] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[9px] font-bold">UV</span>
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#1e2a35] leading-none">UPF50+</div>
            <div className="text-[9px] text-[#718096] leading-none mt-0.5">Koruma</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2d3844 0%, #404e5e 45%, #3a5e3a 100%)" }}
      aria-label="Ana tanıtım bölümü"
    >
      {/* Plise fold background pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0"
            style={{ top: `${i * 44}px`, height: i % 2 === 0 ? "3px" : "1px", background: "#83bd81" }}
          />
        ))}
      </div>

      {/* Right glow */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20"
        style={{ background: "radial-gradient(ellipse at 80% 50%, #83bd81 0%, transparent 70%)" }} />

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }} />

      <div className="relative max-w-[1566px] mx-auto px-5 sm:px-8 w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="animate-slide-left">
            {/* Breadcrumb tag */}
            <div className="inline-flex items-center gap-2 bg-[#e8f5e7] text-[#404e5e] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-[#c8e6c8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#83bd81] animate-pulse" />
              Türkiye Üretimi · Avrupa Teslimat
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.15] tracking-tight mb-6">
              <span className="text-[#83bd81]">Cam Balkon</span>
              <br />
              <span className="text-white">Plise Perde</span>
              <br />
              <span className="text-white/70 text-3xl sm:text-4xl lg:text-[42px] font-semibold">
                Sistemleri
              </span>
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              <strong className="text-white">Fenetre Systems</strong> imzasıyla Gebze fabrikasında üretilen{" "}
              <Link href="/" className="text-[#83bd81] font-semibold hover:underline underline-offset-2">
                plise perde sistemleri
              </Link>
              , cam balkonunuzu her mevsim yaşanabilir bir alana dönüştürür. Özel ölçü üretim,{" "}
              <Link href="/" className="text-[#83bd81] font-semibold hover:underline underline-offset-2">
                montaj dahil teslimat
              </Link>{" "}
              ve 10 yıl garanti.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <Shield size={14} />, text: "10 Yıl Garanti" },
                { icon: <Award size={14} />, text: "CE Sertifikalı" },
                { icon: <Truck size={14} />, text: "Avrupa Teslimat" },
                { icon: <Star size={14} fill="currentColor" />, text: "4.9 / 5 Müşteri" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#404e5e] bg-white border border-[#dde5dd] rounded-full px-3 py-1.5 shadow-sm"
                >
                  <span className="text-[#83bd81]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905403363873?text=Cam%20balkon%20plise%20perde%20i%C3%A7in%20%C3%BCcretsiz%20%C3%B6l%C3%A7%C3%BCm%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] active:bg-[#5d9a5b] text-white font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#83bd81]/30 hover:shadow-xl hover:shadow-[#83bd81]/40 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ücretsiz Ölçüm İste
              </a>
              <a
                href="#urunler"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f4faf4] text-[#404e5e] font-semibold text-base px-6 py-4 rounded-xl border border-[#dde5dd] transition-all duration-200 hover:border-[#83bd81] hover:-translate-y-0.5"
              >
                Ürün Kataloğu
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex gap-6 mt-10 pt-8 border-t border-white/20">
              {[
                { num: "15+", label: "Yıl Deneyim" },
                { num: "50K+", label: "Kurulum" },
                { num: "7", label: "Ülke Teslimat" },
                { num: "%98", label: "Memnuniyet" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold text-[#83bd81]">{stat.num}</div>
                  <div className="text-[11px] text-white/60 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative h-[420px] md:h-[500px] animate-slide-right">
            <PliseFoldIllustration />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-[11px] text-white/50 font-medium">Aşağı kaydır</span>
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#83bd81] rounded-full animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
}
