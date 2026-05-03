import Link from "next/link";

const turkeyRegions = [
  { name: "İstanbul", desc: "Anadolu ve Avrupa yakası, tüm ilçeler", time: "1–2 gün" },
  { name: "Ankara", desc: "Merkez ve tüm ilçeler", time: "2–3 gün" },
  { name: "İzmir", desc: "Bornova, Karşıyaka, Konak ve çevre", time: "2–3 gün" },
  { name: "Bursa", desc: "Nilüfer, Osmangazi, Yıldırım ve çevre", time: "1–2 gün" },
  { name: "Kocaeli / Gebze", desc: "Fabrika merkezi — aynı gün kurulum", time: "Aynı gün" },
  { name: "Antalya", desc: "Muratpaşa, Kepez, Alanya ve kıyı şeridi", time: "3–4 gün" },
  { name: "Mersin & Adana", desc: "Güney sahil hattı boyunca", time: "3–4 gün" },
  { name: "Türkiye Geneli", desc: "81 ile teslimat — kurulum için ek koordinasyon", time: "4–7 gün" },
];

const europeCountries = [
  { flag: "🇩🇪", name: "Almanya", cities: "Berlin, Frankfurt, München, Hamburg ve tüm şehirler", time: "6–8 gün" },
  { flag: "🇳🇱", name: "Hollanda", cities: "Amsterdam, Rotterdam, Den Haag ve çevre", time: "5–7 gün" },
  { flag: "🇧🇪", name: "Belçika", cities: "Brüksel, Antwerp, Gent ve tüm şehirler", time: "5–7 gün" },
  { flag: "🇫🇷", name: "Fransa", cities: "Paris, Lyon, Marseille, Bordeaux ve çevre", time: "6–9 gün" },
  { flag: "🇦🇹", name: "Avusturya", cities: "Viyana, Graz, Salzburg ve tüm şehirler", time: "6–8 gün" },
  { flag: "🇨🇭", name: "İsviçre", cities: "Zürih, Bern, Cenevre ve çevre", time: "7–10 gün" },
  { flag: "🇪🇺", name: "Diğer AB Ülkeleri", cities: "İtalya, İspanya, Polonya ve tüm AB üyeleri", time: "7–12 gün" },
];

export default function ServiceAreas() {
  return (
    <section
      id="hizmet-bolgesi"
      className="py-24 bg-[#f4faf4] relative overflow-hidden border-t-4 border-[#83bd81]"
      aria-label="Hizmet bölgeleri"
    >
      {/* Background map grid decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mapgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#404e5e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapgrid)" />
        </svg>
      </div>

      <div className="relative max-w-[1566px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-3 bg-white px-3 py-1.5 rounded-full border border-[#c8e6c8]">
            Hizmet Kapsamı
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a35] mb-4">
            Türkiye&apos;den Avrupa&apos;ya <br className="hidden sm:block" />
            <span className="text-[#83bd81]">Kapıya Teslim</span>
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
            Gebze fabrikamızdan çıkan her{" "}
            <Link href="/" className="text-[#83bd81] font-semibold hover:underline">
              cam balkon plise perde
            </Link>{" "}
            siparişi, özenle paketlenerek Türkiye genelinde montaj dahil, Avrupa&apos;ya ise kapıya teslim
            olarak gönderilmektedir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Turkey */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#e30a17] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🇹🇷</span>
              </div>
              <div>
                <h3 className="font-extrabold text-[#1e2a35] text-[18px]">Türkiye Geneli</h3>
                <p className="text-xs text-[#718096]">Montaj dahil, adrese teslim</p>
              </div>
            </div>

            <div className="space-y-3">
              {turkeyRegions.map((region) => (
                <div
                  key={region.name}
                  className="flex items-center gap-4 bg-white border border-[#dde5dd] rounded-xl px-5 py-4 hover:border-[#83bd81] transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#83bd81] flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[#1e2a35] text-sm">{region.name}</div>
                    <div className="text-xs text-[#718096] truncate">{region.desc}</div>
                  </div>
                  <div className="text-xs font-bold text-[#83bd81] bg-[#e8f5e7] px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                    {region.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-[#e8f5e7] border border-[#c8e6c8] rounded-xl p-4">
              <p className="text-sm text-[#404e5e] font-semibold">
                ✓ Tüm Türkiye siparişlerinde montaj ekibi dahildir.
              </p>
              <p className="text-xs text-[#718096] mt-1">
                Fiziksel konum dışında kalan bölgeler için taşeron ortaklar koordine edilir.
              </p>
            </div>
          </div>

          {/* Europe */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#003399] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🇪🇺</span>
              </div>
              <div>
                <h3 className="font-extrabold text-[#1e2a35] text-[18px]">Avrupa&apos;ya Teslimat</h3>
                <p className="text-xs text-[#718096]">Kapıya teslim, 4–10 iş günü</p>
              </div>
            </div>

            <div className="space-y-3">
              {europeCountries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-4 bg-white border border-[#dde5dd] rounded-xl px-5 py-4 hover:border-[#83bd81] transition-all group"
                >
                  <span className="text-2xl flex-shrink-0">{country.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[#1e2a35] text-sm">{country.name}</div>
                    <div className="text-xs text-[#718096] truncate">{country.cities}</div>
                  </div>
                  <div className="text-xs font-bold text-[#404e5e] bg-[#eef1f5] px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                    {country.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-[#404e5e] rounded-xl p-4 text-white">
              <p className="text-sm font-semibold mb-1">🚀 Avrupa Teslimat Detayları</p>
              <ul className="text-xs text-[#b8c4cf] space-y-1 mt-2">
                <li>• DHL / DPD ortaklığıyla takip numaralı kargo</li>
                <li>• Ürün demonte, hasar görmez şekilde paketlenir</li>
                <li>• Montaj kılavuzu (TR/DE/FR/NL) dahil gönderilir</li>
                <li>• Gümrük ve ihracat evrakları fabrikamızca hazırlanır</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom badge strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "📦", title: "Güvenli Paketleme", sub: "Alüminyum profiller köpük koruyucuyla, kumaş vakumlu ambalajla gönderilir." },
            { icon: "🕐", title: "Teslimat Takibi", sub: "Kargoya verilen her sipariş için aktif takip numarası SMS ile iletilir." },
            { icon: "🛡️", title: "Hasar Garantisi", sub: "Kargo kaynaklı hasarlarda ürün yeniden üretilip gönderilir, ek ücret alınmaz." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-[#dde5dd] rounded-2xl p-5 flex gap-4">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="font-bold text-[#1e2a35] text-sm mb-1">{item.title}</div>
                <div className="text-xs text-[#718096] leading-relaxed">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
