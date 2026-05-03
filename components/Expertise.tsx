const stats = [
  { value: "15+", label: "Yıl Sektör Deneyimi", detail: "2010'dan bu yana kesintisiz üretim" },
  { value: "50K+", label: "Tamamlanan Kurulum", detail: "Türkiye ve Avrupa dahil" },
  { value: "98%", label: "Müşteri Memnuniyeti", detail: "Son 1.200 anket verisi" },
  { value: "7", label: "Avrupa Ülkesi", detail: "Doğrudan teslimat ağı" },
  { value: "60+", label: "Renk Seçeneği", detail: "Kumaş + profil kombinasyonu" },
  { value: "3", label: "Gün Ekspres Üretim", detail: "Acil siparişlerde hız garantisi" },
];

const certs = [
  { code: "CE", label: "CE Uygunluk", color: "#003399" },
  { code: "EN", label: "EN 13561", color: "#404e5e" },
  { code: "ISO", label: "ISO 9001:2015", color: "#83bd81" },
  { code: "UPF", label: "UPF 50+", color: "#e87030" },
];

export default function Expertise() {
  return (
    <section className="py-24 bg-[#f4faf4] border-t-4 border-[#83bd81]" aria-label="Deneyim ve uzmanlık">
      <div className="max-w-[1566px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Stats */}
          <div>
            <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-4 bg-white px-3 py-1.5 rounded-full border border-[#c8e6c8]">
              Rakamlarla Fenetre Systems
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a35] mb-4 leading-snug">
              Deneyim Rakamlar<br />ile Konuşur
            </h2>
            <p className="text-[#4a5568] leading-relaxed mb-10">
              <a href="/" className="text-[#83bd81] font-semibold hover:underline">Cam balkon güneşlik perdesi</a> alanında
              onbeş yılı aşkın deneyim, rastgele bir süre değil. Her kurulumdan öğrenilen bir şey var; bu birikim
              ürüne yansır, müşteriye hissedilir.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#dde5dd] rounded-2xl p-5 hover:border-[#83bd81] hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl font-extrabold text-[#83bd81] mb-1">{s.value}</div>
                  <div className="text-sm font-bold text-[#1e2a35] mb-1">{s.label}</div>
                  <div className="text-xs text-[#718096]">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certs + visual */}
          <div>
            <div className="bg-white rounded-2xl border border-[#dde5dd] p-8 mb-6 shadow-sm">
              <h3 className="font-bold text-[#1e2a35] text-[17px] mb-6">Sertifikalar ve Standartlar</h3>
              <div className="grid grid-cols-2 gap-4">
                {certs.map((c) => (
                  <div key={c.code} className="flex items-center gap-3 p-3 bg-[#fafbf9] rounded-xl border border-[#dde5dd]">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-[13px] flex-shrink-0"
                      style={{ background: c.color }}
                    >
                      {c.code}
                    </div>
                    <span className="text-sm font-semibold text-[#1e2a35]">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline visual */}
            <div className="bg-[#404e5e] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <svg viewBox="0 0 160 160" fill="none">
                  <circle cx="160" cy="0" r="120" stroke="#83bd81" strokeWidth="1.5" fill="none" />
                  <circle cx="160" cy="0" r="80" stroke="#83bd81" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <h3 className="font-bold text-[17px] mb-5 relative">Kilometre Taşları</h3>
              <div className="space-y-4 relative">
                {[
                  { year: "2010", event: "Fenetre Systems kuruldu, ilk üretim hattı devreye girdi." },
                  { year: "2014", event: "Avrupa ihracatına başlandı; ilk Almanya teslimatı gerçekleşti." },
                  { year: "2017", event: "ISO 9001:2015 belgesi alındı, kalite sistemi resmileşti." },
                  { year: "2021", event: "10.000. kurulum tamamlandı; fabrika kapasitesi genişletildi." },
                  { year: "2024", event: "50.000+ kurulum hedefine ulaşıldı; 7 ülkeye teslimat standart hale geldi." },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-4">
                    <span className="text-[#83bd81] font-extrabold text-sm w-10 flex-shrink-0 mt-0.5">{item.year}</span>
                    <div className="w-2 h-2 rounded-full bg-[#83bd81] flex-shrink-0 mt-1.5" />
                    <p className="text-[#b8c4cf] text-sm leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
