const steps = [
  {
    num: "01",
    title: "Ücretsiz Keşif ve Ölçüm",
    desc: "Uzman ekibimiz evinize gelir, cam balkon çerçevesini inceler ve hassas ölçüm alır. Bu ziyaret tamamen ücretsizdir. Ziyaret sırasında kumaş örnekleri ve profil renk kartlarını beraberinizde getiririz.",
    detail: "Ölçüm süresi: 20–40 dk · 7 gün / Pazartesi–Cumartesi · Ücretsiz",
    color: "#83bd81",
  },
  {
    num: "02",
    title: "Tasarım Onayı",
    desc: "Ölçüm sonrası kumaş türü, renk ve profil seçimlerinizi birlikte belirleriz. Talep edilirse dijital görselleştirme sunulur. Sipariş onayı yazılı olarak yapılır; sürpriz olmaz.",
    detail: "Dijital önizleme · Yazılı sipariş formu · Değişiklik imkânı",
    color: "#6aaa68",
  },
  {
    num: "03",
    title: "Fabrikada Özel Üretim",
    desc: "Onaylanan ölçü ve seçimler doğrultusunda Gebze fabrikamızda üretim başlar. Kumaş kesimi CNC hassasiyetinde yapılır. Profil alüminyumu kesim, dikiş ve mekanizma montajı sırayla tamamlanır.",
    detail: "Üretim süresi: 7–10 iş günü · Ekspres seçenek: 3–4 gün",
    color: "#5d9a5b",
  },
  {
    num: "04",
    title: "Kalite Kontrol",
    desc: "Her ürün fabrikadan çıkmadan önce iki aşamalı kontrol sürecinden geçer. Boyut doğruluğu, kumaş gerilimi ve mekanizma işlevi denetlenir. Sorunlu ürün hiçbir koşulda sevk edilmez.",
    detail: "EN 13561 standart testi · 50.000 açma-kapama simülasyonu",
    color: "#4d8a4b",
  },
  {
    num: "05",
    title: "Montaj ve Teslim",
    desc: "Uzman kurulum ekibimiz belirlenen tarihte gelir, perdeyi takar, çalışmasını test eder ve temizliği yapar. Kullanım kılavuzu ve garanti belgesi elden teslim edilir. Siz sadece beğenin.",
    detail: "Montaj süresi: 30–90 dk · Temizlik dahil · Garanti belgesi elden",
    color: "#3d7a3b",
  },
];

export default function Process() {
  return (
    <section id="surec" className="py-24 bg-white relative border-t-4 border-[#404e5e]" aria-label="Çalışma süreci">
      <div className="max-w-[1566px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-3 bg-[#e8f5e7] px-3 py-1.5 rounded-full">
            Çalışma Sürecimiz
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a35] mb-4">
            Keşiften Montaja — 5 Adım
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
            Her aşamada sizi bilgilendiririz. Sürpriz yoktur; yalnızca önceden konuşulmuş plan uygulanır.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#83bd81] via-[#5d9a5b] to-[#3d7a3b] md:-translate-x-0.5 hidden sm:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } mb-10`}
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-white text-lg shadow-lg"
                    style={{ background: step.color, boxShadow: `0 8px 24px ${step.color}40` }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`md:w-[46%] ${
                    i % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                  }`}
                >
                  <div className="bg-[#fafbf9] border border-[#dde5dd] rounded-2xl p-6 hover:border-[#83bd81] hover:shadow-md transition-all duration-300 ml-[72px] md:ml-0">
                    <h3 className="font-bold text-[#1e2a35] text-[17px] mb-2">{step.title}</h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed mb-3">{step.desc}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#718096] bg-[#e8f5e7] px-2.5 py-1.5 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                      {step.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#4a5568] mb-4">Süreci başlatmak hazır mısınız?</p>
          <a
            href="https://wa.me/905403363873?text=Cam%20balkon%20plise%20perde%20ke%C5%9Fif%20randevusu%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ücretsiz Keşif Randevusu Al
          </a>
        </div>
      </div>
    </section>
  );
}
