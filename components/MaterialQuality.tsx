import Link from "next/link";

export default function MaterialQuality() {
  return (
    <section className="py-24 bg-[#f4faf4] border-t-4 border-[#83bd81]" aria-label="Malzeme kalitesi">
      <div className="max-w-[1566px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Rich content */}
          <article className="rich-content">
            <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-4 bg-[#e8f5e7] px-3 py-1.5 rounded-full">
              Malzeme ve Kalite
            </span>

            <h2>
              <Link href="/" className="hover:text-[#83bd81] transition-colors">
                Plise Perde
              </Link>{" "}
              Kumaşı Neden Farklı?
            </h2>

            <p>
              Standart bir tül veya jaluzi kumaşıyla cam balkon plise perde kumaşını karıştırmak yaygın bir yanılgıdır.{" "}
              <strong>Plise perde kumaşı</strong>, yatay katlamaya elverişli özel bir dokuma yapısıyla üretilir.
              Fiber düzeni, katlama çizgisinde <em>yorulma ve kırılmaya</em> izin vermez. Bu yüzden aynı hizadan
              onbinlerce kez katlanmış bir kumaş, ilk günkü düzgün görünümünü korur.
            </p>

            <p>
              Fenetre Systems üretiminde kullanılan kumaşlar, <u>polyester ve cam elyaf hibrit dokumasıdır</u>.
              Cam elyaf katkısı üç kritik avantaj sağlar: antistatik yüzey (toz tutmaz), boyutsal kararlılık
              (sarkmaz, genişlemez) ve yüksek UV filtresi. Bu hammadde, standart % 100 polyester kumaşa kıyasla
              ağırlık başına %40 daha pahalıdır; ancak ömür farkı bunu fazlasıyla telafi eder.
            </p>

            <h3>Profil Sistemi ve Mekanik Kalite</h3>

            <p>
              Alüminyum ray sistemi, <strong>EN 755-9 standardına</strong> uygun 6063-T5 alaşımından üretilmektedir.
              Bu standart; korozyon direncini, yüzey kalitesini ve mekanik dayanımı birlikte garanti eder.
              <em>Toz boyama</em> yüzeyi, Avrupa standardında renk kararlılığı için 1.000 saatlik tuz spreyi
              testinden geçmektedir.
            </p>

            <table>
              <thead>
                <tr>
                  <th>Bileşen</th>
                  <th>Malzeme</th>
                  <th>Standart</th>
                  <th>Test Kriteri</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Üst / Alt Ray</strong></td>
                  <td>Al 6063-T5</td>
                  <td>EN 755-9</td>
                  <td>1.000 saat tuz spreyi</td>
                </tr>
                <tr>
                  <td><strong>Kumaş</strong></td>
                  <td>PES / Cam elyaf</td>
                  <td>ISO 105-B06</td>
                  <td>Renk haslığı: 7/8</td>
                </tr>
                <tr>
                  <td><strong>Mekanizma yayları</strong></td>
                  <td>Paslanmaz çelik</td>
                  <td>DIN 2413</td>
                  <td>50.000 döngü</td>
                </tr>
                <tr>
                  <td><strong>Kayar yataklar</strong></td>
                  <td>Asetalden POM</td>
                  <td>DIN 53455</td>
                  <td>Yağsız çalışma</td>
                </tr>
              </tbody>
            </table>

            <h3>Avrupa&apos;ya Uyum: CE ve EN 13561</h3>

            <p>
              <strong>EN 13561 standardı</strong>, dış mekan güneşlik ve perde sistemleri için Avrupa&apos;nın
              temel zorunlu standardıdır. Bu standardın kapsamındaki testler; rüzgar dayanımı
              (W1–W4 sınıfları), kar yükü kapasitesi, UV direnci ve döngü ömrünü içerir.{" "}
              <em>Fenetre Systems ürünleri</em>, bu testlerin tamamında W3 sınıfı ve üzeri performans göstermektedir.
            </p>

            <ul>
              <li>
                <strong>W3 Rüzgar Sınıfı:</strong> Saatte 120 km&apos;ye kadar rüzgarda yapısal bütünlük korunur.
              </li>
              <li>
                <strong>UV Dayanımı:</strong> 1.000 saatlik ksenon testi; renk solması %5&apos;in altında kalır.
              </li>
              <li>
                <strong>Yangın Sınıfı:</strong> Cfl-s1 (TS EN 13501-1); zemin döşemelerinde de kullanılan
                alev geciktiricili sınıf.
              </li>
              <li>
                <strong>Termal Performans:</strong> Alüminyum sıvalı kumaşta güneş ısısı %65 oranında yansıtılır.
              </li>
            </ul>
          </article>

          {/* Right: Visual breakdown */}
          <div className="space-y-5">
            {/* Product cross-section diagram */}
            <div className="bg-[#f4faf4] rounded-2xl border border-[#dde5dd] p-6">
              <h3 className="font-bold text-[#1e2a35] text-[15px] mb-5">Plise Perde Kesit Yapısı</h3>
              <div className="relative">
                <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  {/* Top rail */}
                  <rect x="20" y="20" width="320" height="28" rx="4" fill="#404e5e" />
                  <text x="50" y="38" fill="white" fontSize="11" fontWeight="600">Üst Ray — Al 6063-T5</text>

                  {/* Plise folds */}
                  {[0, 1, 2, 3, 4].map((i) => {
                    const y = 58 + i * 34;
                    return (
                      <g key={i}>
                        <rect x="20" y={y} width="320" height={i % 2 === 0 ? 22 : 12} fill={i % 2 === 0 ? "rgba(131,189,129,0.15)" : "rgba(131,189,129,0.05)"} />
                        <line x1="20" y1={y} x2="340" y2={y} stroke="#83bd81" strokeWidth={i % 2 === 0 ? 2.5 : 1.2} />
                        {i === 0 && (
                          <>
                            <line x1="344" y1={y} x2="344" y2={y + 22} stroke="#6b7d8f" strokeWidth="1" strokeDasharray="3 2" />
                            <text x="348" y={y + 14} fill="#6b7d8f" fontSize="9">Kumaş katmanı</text>
                          </>
                        )}
                      </g>
                    );
                  })}

                  {/* Bottom rail */}
                  <rect x="20" y="228" width="320" height="18" rx="3" fill="#5a6a7a" />
                  <text x="50" y="241" fill="white" fontSize="11" fontWeight="600">Alt Ray — Ağırlık profili</text>

                  {/* Labels */}
                  <text x="26" y="14" fill="#718096" fontSize="9">⟵ Vidalı montaj noktaları ⟶</text>
                </svg>
              </div>
            </div>

            {/* Material cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Kumaş Ağırlığı",
                  value: "300–450 g/m²",
                  note: "Katlama yoğunluğuna göre",
                  color: "#83bd81",
                },
                {
                  label: "UV Filtresi",
                  value: "UPF 50+",
                  note: "Karartma ve alüm. kumaşta",
                  color: "#e87030",
                },
                {
                  label: "Sıcaklık",
                  value: "−20 / +80°C",
                  note: "Tüm iklim bölgeleri",
                  color: "#1a8adf",
                },
                {
                  label: "Renk Haslığı",
                  value: "7/8 sınıf",
                  note: "ISO 105-B06 ksenon testi",
                  color: "#9c88d0",
                },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-[#dde5dd] rounded-xl p-4">
                  <div
                    className="text-xl font-extrabold mb-1"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-[#1e2a35] mb-0.5">{item.label}</div>
                  <div className="text-[10px] text-[#718096]">{item.note}</div>
                </div>
              ))}
            </div>

            {/* Certification strip */}
            <div className="bg-[#404e5e] rounded-2xl p-5 flex flex-wrap items-center justify-around gap-4">
              {[
                { code: "CE", color: "#003399", label: "CE Uygunluk" },
                { code: "EN", color: "#83bd81", label: "EN 13561" },
                { code: "ISO", color: "#e87030", label: "ISO 9001" },
                { code: "W3", color: "#1a8adf", label: "Rüzgar Sınıfı" },
              ].map((c) => (
                <div key={c.code} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-[14px]"
                    style={{ background: c.color }}
                  >
                    {c.code}
                  </div>
                  <span className="text-[10px] text-[#8fa4b8]">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
