const apps = [
  {
    title: "Konut Balkonu",
    desc: "Apartman dairelerindeki katlanır cam balkon sistemlerine montaj. Dar profil yapısı, küçük balkonda da ferah görünüm sağlar.",
    tag: "En Çok Tercih",
    bg: "from-[#e8f5e7] to-[#d4ecd3]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="12" y="16" width="40" height="36" rx="3" fill="#83bd81" opacity="0.2" />
        <rect x="12" y="16" width="40" height="36" rx="3" stroke="#83bd81" strokeWidth="2" />
        {[22, 30, 38, 44].map((y, i) => (
          <line key={i} x1="12" y1={y} x2="52" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.8 : 0.4} />
        ))}
        <path d="M8 16 L32 8 L56 16" stroke="#404e5e" strokeWidth="2" fill="none" />
        <rect x="26" y="38" width="12" height="14" rx="1" fill="#404e5e" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Villa ve Yazlık",
    desc: "Geniş cam cephe açıklıklarında çift ray sistemi uygulaması. Hem ısı kontrolü hem de estetik odaklı tasarım.",
    tag: "Özel Üretim",
    bg: "from-[#e8edf4] to-[#dae2ef]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="6" y="24" width="52" height="30" rx="3" fill="#404e5e" opacity="0.1" />
        <rect x="6" y="24" width="52" height="30" rx="3" stroke="#404e5e" strokeWidth="2" />
        {[30, 38, 46, 52].map((y, i) => (
          <line key={i} x1="6" y1={y} x2="58" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.7 : 0.35} />
        ))}
        <path d="M2 24 L32 6 L62 24" stroke="#404e5e" strokeWidth="2.5" fill="none" />
        <rect x="22" y="38" width="20" height="16" rx="1" fill="#404e5e" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Ofis ve İşyeri",
    desc: "Kurumsal cam cephe sistemleri için motorlu veya manuel plise perde. Özel baskılı kumaş seçeneği mevcuttur.",
    tag: "Kurumsal",
    bg: "from-[#f0edf8] to-[#e4dff2]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="8" width="48" height="48" rx="3" fill="#9c88d0" opacity="0.1" />
        <rect x="8" y="8" width="48" height="48" rx="3" stroke="#9c88d0" strokeWidth="2" />
        {[16, 24, 32, 40, 48].map((y, i) => (
          <line key={i} x1="8" y1={y} x2="56" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.7 : 0.35} />
        ))}
        <line x1="28" y1="8" x2="28" y2="56" stroke="#9c88d0" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Kafe ve Restoran",
    desc: "Sezonluk açık oturma alanlarında hava geçirgenliği ve güneş kontrolü. Hijyenik kumaş kaplama seçenekleri.",
    tag: "Ticari Kullanım",
    bg: "from-[#fdf3e8] to-[#f8e8d0]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="18" width="48" height="36" rx="3" fill="#e87030" opacity="0.1" />
        <rect x="8" y="18" width="48" height="36" rx="3" stroke="#e87030" strokeWidth="2" />
        {[24, 32, 40, 46].map((y, i) => (
          <line key={i} x1="8" y1={y} x2="56" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.7 : 0.35} />
        ))}
        <path d="M8 18 Q32 10 56 18" stroke="#e87030" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Otel ve Rezidans",
    desc: "Toplu üretim ve standart kurulum imkânıyla otel projelerinde ekonomi. Merkezi motorlu kontrol sistemiyle uyumludur.",
    tag: "Proje Bazlı",
    bg: "from-[#e8f4fd] to-[#d4eaf8]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="10" y="6" width="44" height="52" rx="3" fill="#1a8adf" opacity="0.1" />
        <rect x="10" y="6" width="44" height="52" rx="3" stroke="#1a8adf" strokeWidth="2" />
        {[12, 22, 32, 42, 52].map((y) =>
          [16, 32, 48].map((x, j) => (
            <rect key={`${y}${j}`} x={x - 5} y={y - 3} width="10" height="8" rx="1" fill="#83bd81" opacity="0.2" />
          ))
        )}
      </svg>
    ),
  },
  {
    title: "Deniz Manzaralı Daire",
    desc: "Tuz ve nem dirençli profil kaplama ile kıyı bölgelerine özel üretim. Translucent kumaşla manzarayı kapatmadan güneş filtresi.",
    tag: "Sahil Çözümü",
    bg: "from-[#e4f5fa] to-[#d0ecf5]",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="10" y="14" width="44" height="36" rx="3" fill="#0891b2" opacity="0.1" />
        <rect x="10" y="14" width="44" height="36" rx="3" stroke="#0891b2" strokeWidth="2" />
        {[20, 28, 36, 42].map((y, i) => (
          <line key={i} x1="10" y1={y} x2="54" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2 : 1} opacity={i % 2 === 0 ? 0.7 : 0.35} />
        ))}
        <path d="M10 50 Q22 44 32 48 Q42 52 54 46" stroke="#0891b2" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>
    ),
  },
];

export default function Applications() {
  return (
    <section id="uygulamalar" className="py-24 bg-white border-t-4 border-[#404e5e]" aria-label="Uygulama örnekleri">
      <div className="max-w-[1566px] mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-3 bg-[#e8f5e7] px-3 py-1.5 rounded-full">
            Uygulama Alanları
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a35] mb-4">
            Her Mekâna Özel Çözüm
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
            Konut balkonundan otel projelerine,{" "}
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">
              balkon dekorasyon perdesi
            </a>{" "}
            ihtiyacı duyan her alan için farklı konfigürasyonlar üretiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 bg-gradient-to-br ${app.bg} border border-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="mb-5">{app.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-bold text-[#1e2a35] text-[17px] group-hover:text-[#404e5e] transition-colors">
                  {app.title}
                </h3>
                <span className="text-[10px] font-bold text-[#83bd81] bg-white/70 px-2 py-0.5 rounded-full ml-auto whitespace-nowrap">
                  {app.tag}
                </span>
              </div>
              <p className="text-sm text-[#4a5568] leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
