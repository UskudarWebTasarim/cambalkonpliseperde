"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const categories = [
  {
    label: "Ürün ve Teknik",
    items: [
      {
        q: "Cam balkon plise perde tam olarak ne işe yarar?",
        a: `<strong>Cam balkon plise perde</strong>, cam balkon içine monte edilen yatay katlamalı perde sistemidir. Günışığını filtreler, dışarıya karşı mahremiyet sağlar ve ısı transferini azaltır. <u>Balkon açıkken</u> perde, 6–8 cm'lik dar bir sıkıştırma kütlesine dönüşür. Kapatıldığında ise camın tüm yüzeyini örter. <em>Hem estetik hem de fonksiyonel</em> bir çözümdür.`,
      },
      {
        q: "Hangi cam balkon sistemleriyle uyumlu?",
        a: `Katlanır cam balkon (akordeon), sürgülü cam balkon ve kış bahçesi sistemlerinin tamamıyla çalışır. <strong>PVC, alüminyum ve paslanmaz çelik</strong> profilli çerçevelerin hepsine montaj yapılabilir. Çerçeve olmayan serbest camlara yapıştırmalı sistem uygulanır.`,
      },
      {
        q: "Kumaş türleri arasındaki fark nedir?",
        a: `Dört ana kategori vardır:<br/>
        <ul>
          <li><strong>Translucent (şeffaf):</strong> %30–60 ışık geçişi, manzaraya izin verir.</li>
          <li><strong>Dim-out (yarı saydam):</strong> %5–15 ışık geçişi, mahremiyet sağlar.</li>
          <li><strong>Blackout (karartma):</strong> %0–2 ışık geçişi, tam örtme.</li>
          <li><strong>Alüminyum sıvalı:</strong> Maksimum ısı yansıtma, güneş kontrolü.</li>
        </ul>`,
      },
      {
        q: "Cam balkon plise perde ne kadar dayanır?",
        a: `Doğru bakım şartlarında <strong>10–15 yıl</strong> sorunsuz kullanım beklentisi vardır. Fenetre Systems mekanizması 50.000 açma-kapama testinden geçirilir. Kumaş polyester–cam elyaf dokumasıdır; yıpranma oranı standart polyester kumaşa kıyasla üç kat daha düşüktür.`,
      },
      {
        q: "Motorlu sistem var mı?",
        a: `Evet. <strong>24V DC motor seçeneği</strong> mevcuttur. Uzaktan kumanda, duvar butonu veya akıllı ev sistemleriyle (Amazon Alexa, Google Home) entegre çalışır. Motorlu sistemde el rayı yoktur; perde kendiliğinden katlanır ve açılır.`,
      },
    ],
  },
  {
    label: "Ölçü ve Montaj",
    items: [
      {
        q: "Ölçüyü nasıl alabilirim?",
        a: `En doğrusu, ekibimizin yerinde ölçüm yapmasıdır. Bu ziyaret <strong>tamamen ücretsizdir</strong>. Kendiniz ölçmek isterseniz; cam içten içe <em>en ve boy olarak</em> milimetre hassasiyetinde ölçülür. Üst ve alt ray paylarını çıkarmak için bize danışmanız önerilir.`,
      },
      {
        q: "Kurulum ne kadar sürer?",
        a: `Tek bir cam paneli için 30–45 dakika yeterlidir. Geniş balkonlarda birden fazla panel varsa süre panele göre artar. <strong>Ortalama standart balkon</strong> için kurulum 60–90 dakikadır. Montaj sonrası alan temizlenerek teslim edilir.`,
      },
      {
        q: "Montaj için duvara veya çerçeveye zarar verir mi?",
        a: `<strong>Vidalı montajda</strong> profil çerçevesine küçük vidalar atılır; bu tamamen geri alınabilir bir işlemdir. <em>Yapıştırmalı seçenekte</em> ise hiçbir delik açılmaz; çift taraflı endüstriyel bantla sabitlenir. Uygulama türü, çerçeve yapısına göre belirlenir.`,
      },
      {
        q: "Kendim monte edebilir miyim?",
        a: `Teknik beceriye sahip kişiler yapabilir. Ancak <u>Türkiye siparişlerinde montaj ekibimiz dahildir</u> ve ek ücret alınmaz. Avrupa'ya gönderilen siparişlerde İngilizce, Almanca, Fransızca ve Hollandaca montaj kılavuzu pakete eklenir.`,
      },
    ],
  },
  {
    label: "Fiyat ve Garanti",
    items: [
      {
        q: "Fiyatlar neye göre değişir?",
        a: `Üç ana faktör fiyatı belirler: <strong>kumaş türü ve kalitesi</strong>, <strong>profil rengi</strong> (özel RAL için ek maliyet), ve <strong>boyut</strong>. Motorlu sistem standart fiyatın üzerine eklenir. WhatsApp üzerinden net ölçü verip anlık fiyat alabilirsiniz.`,
      },
      {
        q: "Garanti kapsamı nedir?",
        a: `<strong>10 yıl mekanik garanti</strong> verilmektedir. Bu; ray sistemi, mekanizma ve profil deformasyonunu kapsar. <em>Kumaş garantisi 3 yıldır</em>; renk solması ve yapısal bozulmaları içerir. Yanlış kullanım (kuvvetli çekme, keskin nesne teması) garantiyi geçersiz kılar.`,
      },
      {
        q: "Ödeme seçenekleri neler?",
        a: `Kapıda nakit, banka transferi ve kredi kartıyla ödeme kabul edilir. <strong>Türkiye siparişlerinde</strong> %30 depozito + teslimatta kalan ödeme seçeneği mevcuttur. Avrupa siparişlerinde peşin ödeme uygulanır.`,
      },
    ],
  },
  {
    label: "Bakım ve Temizlik",
    items: [
      {
        q: "Plise perde kumaşı nasıl temizlenir?",
        a: `Hafif kirlerde <strong>nemli bez ile silme</strong> yeterlidir. Derin temizlik için perde sistemden sökülerek ılık su ve hafif deterjanla yıkanır. <em>Çamaşır makinesine konulmaz</em>; elle elde veya duş altında temizlenir. Sıkılmadan asılarak kurutulur. Kimyasal çözücü kullanılmaz.`,
      },
      {
        q: "Mekanizmanın bakımı gerekir mi?",
        a: `Yılda bir kez <strong>silikonlu sprey</strong> uygulanması önerilir. Ray kılavuzları toz ve kirden arındırılmalıdır. Geleneksel yağ kullanılmaz; kumaşa zarar verebilir. Rutin bakım yapıldığında mekanizma ömrü önemli ölçüde uzar.`,
      },
      {
        q: "Kış aylarında soğuk havada sorun yaşar mı?",
        a: `Hayır. Ürün <strong>−20°C ile +80°C</strong> arasında çalışacak şekilde test edilmiştir. Kış koşullarında kumaş sertleşmez, mekanizma donmaz. Alüminyum profil düşük sıcaklıklara karşı yüksek direnç gösterir.`,
      },
    ],
  },
  {
    label: "Avrupa Teslimat",
    items: [
      {
        q: "Avrupa'ya nasıl gönderim yapılıyor?",
        a: `Siparişler <strong>DHL veya DPD</strong> aracılığıyla gönderilir. Ürünler demonte paketlenir; alüminyum profiller köpük koruyucuyla, kumaşlar vakumlu ambalajla sarılır. Gümrük ve ihracat evrakları fabrikamız tarafından hazırlanır. Takip numarası SMS ile bildirilir.`,
      },
      {
        q: "Avrupa'ya teslimat kaç gün sürer?",
        a: `Ülkeye göre değişmekle birlikte ortalama <strong>4–10 iş günü</strong> içinde kapıya teslim edilir. Almanya ve Hollanda'ya 6–8 gün, Fransa ve Belçika'ya 5–7 gün, Avusturya ve İsviçre'ye 6–10 gün öngörülmektedir.`,
      },
      {
        q: "Ürün hasarlı gelirse ne olur?",
        a: `Kargo kaynaklı tüm hasarlar <strong>ücretsiz olarak yeniden üretilip gönderilir</strong>. Bunun için teslimatta hasarın fotoğraflanıp aynı gün bildirilmesi yeterlidir. Ayrıca talep üzerine hasar güvencesi sigortası da eklenebilir.`,
      },
    ],
  },
  {
    label: "Bayilik",
    items: [
      {
        q: "Bayilik veya kurumsal sipariş imkânı var mı?",
        a: `Evet. Bayilik, yeniden satış ve proje bazlı toplu siparişler için <strong>WhatsApp üzerinden</strong> iletişime geçebilirsiniz. Bayilere özel fiyat listesi, teknik eğitim desteği ve promosyon malzemeleri sağlanmaktadır. Avrupa'daki Türk toplulukları için özel bayilik paketleri de mevcuttur.`,
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="sss" className="py-24 bg-white border-t-4 border-[#83bd81]" aria-label="Sıkça sorulan sorular">
      <div className="max-w-[1566px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-3 bg-white px-3 py-1.5 rounded-full border border-[#c8e6c8]">
            SSS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a35] mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-[#4a5568] max-w-xl mx-auto">
            <a href="/" className="text-[#83bd81] font-semibold hover:underline">
              Fenetre plise perde
            </a>{" "}
            hakkında merak ettiğiniz her şey burada. Bulamadığınız soruları WhatsApp üzerinden iletebilirsiniz.
          </p>
        </div>

        {/* Categories + Questions */}
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-sm font-extrabold text-[#404e5e] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#83bd81]" />
                {cat.label}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item, idx) => {
                  const key = `${cat.label}-${idx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div
                      key={key}
                      className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                        isOpen ? "border-[#83bd81] shadow-sm" : "border-[#dde5dd]"
                      }`}
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <button
                        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                        onClick={() => toggleItem(key)}
                        aria-expanded={isOpen}
                      >
                        <span
                          className="font-semibold text-[#1e2a35] text-[15px] leading-snug"
                          itemProp="name"
                        >
                          {item.q}
                        </span>
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            isOpen ? "bg-[#83bd81] text-white" : "bg-[#f2f6f2] text-[#718096]"
                          }`}
                        >
                          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          className="px-5 pb-5 text-sm text-[#4a5568] leading-relaxed rich-content"
                          itemScope
                          itemType="https://schema.org/Answer"
                          itemProp="acceptedAnswer"
                        >
                          <div
                            itemProp="text"
                            dangerouslySetInnerHTML={{ __html: item.a }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white border border-[#dde5dd] rounded-2xl p-8">
          <p className="text-[#4a5568] mb-4">
            Aradığınız soruyu bulamadınız mı? Uzman ekibimiz anında cevap verir.
          </p>
          <a
            href="https://wa.me/905403363873?text=Cam%20balkon%20plise%20perde%20hakk%C4%B1nda%20sorum%20var."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp'ta Sor
          </a>
        </div>
      </div>
    </section>
  );
}
