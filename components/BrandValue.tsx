import { Factory, Users, Globe, Trophy, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: <Factory size={22} className="text-[#83bd81]" />,
    title: "Kendi Fabrikamızda Üretim",
    text: "Gebze'deki 4.200 m² kapalı üretim alanında sipariş başına kesim, dikiş ve montaj yapılır. Hiçbir ürün stoğa alınmaz; her perde size özeldir.",
  },
  {
    icon: <Trophy size={22} className="text-[#83bd81]" />,
    title: "Avrupa Standartlarında Kalite",
    text: "EN 13561 dış güneşlik standartı, CE uygunluğu ve ISO 9001:2015 kalite yönetim sistemi belgelerine sahibiz. Bu belgeler masa başı değil, üretim hattında yaşayan standartlardır.",
  },
  {
    icon: <Globe size={22} className="text-[#83bd81]" />,
    title: "7 Ülkeye Doğrudan Teslimat",
    text: "Almanya, Hollanda, Belçika, Fransa, Avusturya, İsviçre ve daha pek çok Avrupa ülkesine DHL / DPD ortaklığıyla 4–10 gün içinde adrese teslim hizmetimiz vardır.",
  },
  {
    icon: <Users size={22} className="text-[#83bd81]" />,
    title: "Deneyimli Kurulum Ekibi",
    text: "Türkiye genelinde 18 bölgede aktif kurulum ekibimiz çalışır. Her montajcı en az 3 yıllık sektör tecrübesine sahiptir ve yerinde ölçümden son vida torkuna kadar sorumludur.",
  },
  {
    icon: <Zap size={22} className="text-[#83bd81]" />,
    title: "Hızlı Üretim ve Teslimat",
    text: "Standart siparişlerde ortalama 7–10 iş günü üretim süresi. Acil taleplerde 3–4 gün ekspres üretim seçeneği mevcuttur.",
  },
  {
    icon: <Heart size={22} className="text-[#83bd81]" />,
    title: "Satış Sonrası Destek",
    text: "Montaj sonrası 10 yıl mekanik garanti. Kumaş yıpranmalarında parça değişimi, profil sorunlarında yerinde servis. Yalnızca ürün satmıyor; uzun vadeli güven sunuyoruz.",
  },
];

export default function BrandValue() {
  return (
    <section className="py-24 bg-[#404e5e] relative overflow-hidden" aria-label="Marka değerleri">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0"
            style={{ top: `${i * 80}px`, height: "2px", background: "#83bd81" }}
          />
        ))}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="256" cy="0" r="200" stroke="#83bd81" strokeWidth="2" fill="none" />
          <circle cx="256" cy="0" r="150" stroke="#83bd81" strokeWidth="1.5" fill="none" />
          <circle cx="256" cy="0" r="100" stroke="#83bd81" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-[1566px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-4 bg-[#83bd81]/15 px-3 py-1.5 rounded-full border border-[#83bd81]/25">
            Neden Fenetre Systems?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-snug">
            Yalnızca Perde Satmıyoruz.{" "}
            <span className="text-[#83bd81]">Güven İnşa Ediyoruz.</span>
          </h2>
          <p className="text-[#8fa4b8] text-lg leading-relaxed max-w-2xl">
            2010 yılından bu yana <strong className="text-white">Fenetre Systems</strong> markasıyla ürettiğimiz
            her ürün, müşterimizin yaşam alanında onlarca yıl kalıcı olacak şekilde tasarlanmaktadır. Bu sorumluluk,
            hammadde seçiminden son montaj vidasına kadar her adımda hissedilir.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#83bd81]/40 rounded-xl p-6 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#83bd81]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#83bd81]/25 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-white font-bold text-[16px] mb-3 leading-snug">{v.title}</h3>
              <p className="text-[#8fa4b8] text-sm leading-relaxed group-hover:text-[#aabcc8] transition-colors">
                {v.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "2010", label: "Kuruluş Yılı", sub: "15 yıldır sektörde" },
            { num: "4.200", label: "m² Fabrika", sub: "Gebze, Kocaeli" },
            { num: "50.000+", label: "Tamamlanan Kurulum", sub: "Türkiye ve Avrupa" },
            { num: "ISO 9001", label: "Kalite Belgesi", sub: "2015 sürümü" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-[#83bd81] mb-1">{s.num}</div>
              <div className="text-sm font-semibold text-white mb-0.5">{s.label}</div>
              <div className="text-xs text-[#6b7d8f]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
