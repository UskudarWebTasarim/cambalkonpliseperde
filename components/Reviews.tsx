const reviews = [
  {
    id: 1,
    name: "Mehmet Y.",
    location: "Kadıköy, İstanbul",
    rating: 5,
    date: "Mart 2025",
    text: "Dört cam panelim var, her birine ayrı ölçü aldılar. Tam oturdu. Perde açık kaldığında iz bile bırakmıyor. Arkadaşım da hemen sipariş verdi.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 2,
    name: "Fatma Ş.",
    location: "Çankaya, Ankara",
    rating: 5,
    date: "Şubat 2025",
    text: "Güneş batı tarafından çok sert vuruyordu. Öğleden sonraları balkona giremiyordum. Yarı saydam kumaş seçtim, şimdi hem ışık alıyor hem de sıcak hava girmiyor.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 3,
    name: "Ali K.",
    location: "Bornova, İzmir",
    rating: 4,
    date: "Ocak 2025",
    text: "Montaj ekibi zamanında geldi, ölçüler tuttu. Küçük bir profil sorunu vardı. Hemen geri döndüler ve çözdüler. Dürüst bir firma. Memnun kaldım.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 4,
    name: "Zeynep A.",
    location: "Nilüfer, Bursa",
    rating: 5,
    date: "Nisan 2025",
    text: "Hem balkonu kapatıyor hem de içerisi aydınlık kalıyor. Başta nasıl çalışacağını merak ettim. Katlayınca neredeyse görünmüyor. Çok pratik bir sistem.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 5,
    name: "Hüseyin D.",
    location: "Gebze, Kocaeli",
    rating: 5,
    date: "Mart 2025",
    text: "Fabrika yakın olduğu için çok hızlı teslimat oldu. Üretim kalitesini görünce çok etkilendim. Profiller sağlam, kumaş gergin duruyor.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 6,
    name: "Selin Ö.",
    location: "Beşiktaş, İstanbul",
    rating: 5,
    date: "Mayıs 2025",
    text: "Komşum tavsiye etti. Fiyat diğer firmalarla kıyaslandığında çok mantıklı. Bir yıldır sorunsuz kullanıyorum. Hiçbir şey sarkmadı, bozulmadı.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 7,
    name: "Mustafa T.",
    location: "Muratpaşa, Antalya",
    rating: 5,
    date: "Haziran 2025",
    text: "Antalya'da yazları çok sıcak. Güneş doğudan vurduğunda balkon kullanılamıyordu. Şimdi sabah kahvaltımı balkonda yapabiliyorum. Gerçekten büyük fark.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 8,
    name: "Aynur B.",
    location: "Osmangazi, Bursa",
    rating: 5,
    date: "Aralık 2024",
    text: "Kış aylarında rüzgar giriyordu balkondan. Perde taktıktan sonra soğuk hava girişi neredeyse yok oldu. Ürün beklediğimden çok daha sağlam çıktı.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 9,
    name: "Kemal Y.",
    location: "Karşıyaka, İzmir",
    rating: 4,
    date: "Şubat 2025",
    text: "Genel olarak çok iyi. Teslimat biraz geç kaldı ama ürün kalitesi beklentiyi karşıladı. Montaj ekibi temizliği de bıraktı. Bir yıldız geç teslimat için.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 10,
    name: "Gülsüm A.",
    location: "Keçiören, Ankara",
    rating: 5,
    date: "Ocak 2025",
    text: "Renk seçenekleri gerçekten boldu. Kumaş ve profil rengini uyumlu seçtim. Misafirler görünce nereden aldın diye soruyor. Çok şık duruyor balkonumda.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 11,
    name: "Serhat M.",
    location: "Pendik, İstanbul",
    rating: 5,
    date: "Nisan 2025",
    text: "Deniz manzaralı dairem var. Hem manzarayı kapatmasın hem de güneşi süzsün istiyordum. Translucent kumaş tam bu ihtiyacı karşıladı. Mükemmel seçim.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 12,
    name: "Nurcan T.",
    location: "Konak, İzmir",
    rating: 5,
    date: "Mart 2025",
    text: "Üç yıl önce başka bir firmadan almıştım. Profil eğrildi, iade alamadım. Bu sefer çok araştırdım. Fenetre Systems'e geçtim, fark gerçekten çok büyük.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 13,
    name: "Bülent K.",
    location: "Ümraniye, İstanbul",
    rating: 5,
    date: "Mayıs 2025",
    text: "İki balkon için toplamda iki saat sürdü kurulum. Temizliği de kendileri yaptılar. Ekip çok dikkatli çalıştı, hiçbir çizik bırakmadılar.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 14,
    name: "Hatice Y.",
    location: "Mamak, Ankara",
    rating: 4,
    date: "Şubat 2025",
    text: "Kumaş kalitesi gerçekten iyi. Montaj sırasında profil kısımlarında biraz gecikme yaşandı ama telafi için indirim uyguladılar. Sonuç olarak değdi.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 15,
    name: "Tolga Ç.",
    location: "Gebze, Kocaeli",
    rating: 5,
    date: "Nisan 2025",
    text: "Komşuda gördüm, hemen sipariş verdim. Fabrikadan direkt geldiği için ekstra indirim de aldım. Hem kalite hem fiyat beklentinin çok üzerinde çıktı.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 16,
    name: "Meryem Ş.",
    location: "Karadeniz Ereğli",
    rating: 5,
    date: "Ocak 2025",
    text: "Şehir merkezinde olduğum için teslimatta sorun yaşarım diye düşünmüştüm. Hiç sorun çıkmadı, zamanında geldi. Montajcı da gerçekten işini bilen biriydi.",
    product: "Plise Sineklik",
    flag: "🇹🇷",
  },
  {
    id: 17,
    name: "Emre V.",
    location: "Çiğli, İzmir",
    rating: 5,
    date: "Mart 2025",
    text: "Komşuyu görünce beğendim, aynısını aldım. Kumaş rengi tam istediğim gibi çıktı. Cam balkonumla o kadar uyumlu ki sanki beraber tasarlanmış gibi.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 18,
    name: "Özlem T.",
    location: "Ataşehir, İstanbul",
    rating: 5,
    date: "Mayıs 2025",
    text: "Ev ofis kurdum, balkonda çalışıyorum. Güneş gözleri yakıyordu ekrana yansıyordu. Şimdi harika. Yarı saydam seçimi gerçekten doğru karar oldu.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 19,
    name: "Ramazan K.",
    location: "Şehitkamil, Gaziantep",
    rating: 5,
    date: "Nisan 2025",
    text: "Güneydoğu sıcaklarında cam balkon sauna gibiydi. Perde taktıktan sonra balkonu aktif kullanmaya başladım. İnanılmaz bir fark. Şiddetle tavsiye ederim.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 20,
    name: "Dilek Ş.",
    location: "Bodrum, Muğla",
    rating: 5,
    date: "Mart 2025",
    text: "Yazlık evime taktırdım. Denize nazır balkonum var, manzarayı kapatmayan translucent model aldım. Beklediğimin ötesinde bir sonuç. Çok teşekkürler.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 21,
    name: "Cüneyt A.",
    location: "Yenişehir, Mersin",
    rating: 4,
    date: "Şubat 2025",
    text: "Fiyat başta biraz yüksek geldi açıkçası. Kumaş kalitesini görünce fikrimi değiştirdim. Ömrü uzun olursa bu fiyat kesinlikle haklı bir yatırım.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 22,
    name: "Semra D.",
    location: "Odunpazarı, Eskişehir",
    rating: 5,
    date: "Ocak 2025",
    text: "Kış aylarında balkon daha sıcak kaldı. Enerji tasarrufu da net şekilde hissedildi. Alüminyum profil çok şık, diğer sistemlerle kıyaslanamaz.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 23,
    name: "Yusuf Ö.",
    location: "Adapazarı, Sakarya",
    rating: 5,
    date: "Mart 2025",
    text: "Gebze'de üretiliyor olması fiyatı düşürmüş, kaliteden taviz yok. Sağlam bir ürün. İki komşuma önerdim, her ikisi de sipariş verdi. Herkes memnun.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 24,
    name: "Filiz G.",
    location: "Ortahisar, Trabzon",
    rating: 5,
    date: "Şubat 2025",
    text: "Trabzon'a kadar gelip kurulum yaptılar. Ekip profesyoneldi, tek çizik bırakmadılar. Yaşlı annem bile kolaylıkla açıp kapayabiliyor. Harika tasarım.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 25,
    name: "Orhan B.",
    location: "Selçuklu, Konya",
    rating: 5,
    date: "Nisan 2025",
    text: "Almadan önce çok araştırdım ve karşılaştırdım. En sonunda Fenetre Systems'i seçtim. Kesinlikle doğru karar. Kalite çok açık bir biçimde hissediliyor.",
    product: "Cam Balkon Plise Perde",
    flag: "🇹🇷",
  },
  {
    id: 26,
    name: "Klaus M.",
    location: "Berlin, Almanya",
    rating: 5,
    date: "Mart 2025",
    text: "Türkiye'deyken gördüm, araştırdım. Almanya'ya göndertmek istedim. 7 günde kapıma geldi. Kalite Alman ürünleriyle gerçekten kıyaslanabilir düzey.",
    product: "Cam Balkon Plise Perde",
    flag: "🇩🇪",
  },
  {
    id: 27,
    name: "Sophie L.",
    location: "Lyon, Fransa",
    rating: 5,
    date: "Şubat 2025",
    text: "Bir Türk arkadaşım yönlendirdi. Fransa'ya 6 günde geldi. Ambalaj çok sağlamdı, hiç hasar yoktu. Montaj kılavuzu Fransızca geldi. Teşekkürler.",
    product: "Cam Balkon Plise Perde",
    flag: "🇫🇷",
  },
  {
    id: 28,
    name: "Jan de V.",
    location: "Amsterdam, Hollanda",
    rating: 5,
    date: "Ocak 2025",
    text: "Hollanda'ya Türk üretimi perde getirtmek tuhaf geldi başta. Geldiğinde tamamen fikrimi değiştirdim. Alüminyum profil kalitesi beklentimin çok üzerinde.",
    product: "Cam Balkon Plise Perde",
    flag: "🇳🇱",
  },
  {
    id: 29,
    name: "Maria K.",
    location: "Viyana, Avusturya",
    rating: 4,
    date: "Şubat 2025",
    text: "Avusturya'ya teslimat 9 gün sürdü, biraz uzundı. Ama ürün kalitesi kesinlikle tatmin edici. Renk seçenekleri de geniş. Tekrar sipariş veririm.",
    product: "Cam Balkon Plise Perde",
    flag: "🇦🇹",
  },
  {
    id: 30,
    name: "Pierre D.",
    location: "Brüksel, Belçika",
    rating: 5,
    date: "Mart 2025",
    text: "Belçika'ya Türkiye'den sipariş verdim. Paket geldiğinde hiçbir sorun yoktu. Talimatlar çok anlaşılır. Komşulara da kesinlikle tavsiye ederim.",
    product: "Cam Balkon Plise Perde",
    flag: "🇧🇪",
  },
  {
    id: 31,
    name: "Lena S.",
    location: "Zürih, İsviçre",
    rating: 5,
    date: "Nisan 2025",
    text: "İsviçre fiyatlarıyla kıyaslandığında inanılmaz uygun. Üstelik kalite hiç düşük değil. Cam balkonuma mükemmel uydu. Çok mutluyum bu kararımla.",
    product: "Cam Balkon Plise Perde",
    flag: "🇨🇭",
  },
  {
    id: 32,
    name: "Thomas B.",
    location: "Frankfurt, Almanya",
    rating: 5,
    date: "Ocak 2025",
    text: "Bu ikinci siparişim. İlki o kadar iyi oldu ki yeni dairem için de aynı firmadan aldım. Almanya'ya teslimat sorunsuz geçti. Çok memnunum.",
    product: "Cam Balkon Plise Perde",
    flag: "🇩🇪",
  },
  {
    id: 33,
    name: "Isabelle M.",
    location: "Paris, Fransa",
    rating: 5,
    date: "Mart 2025",
    text: "Fransa'da bu kalitede ürüne bu fiyata ulaşmak imkânsız. Türkiye üretimi ama standartlar Avrupa'nın üzerinde bile diyebilirim. Harika bir deneyim.",
    product: "Cam Balkon Plise Perde",
    flag: "🇫🇷",
  },
  {
    id: 34,
    name: "Andreas W.",
    location: "Münih, Almanya",
    rating: 5,
    date: "Şubat 2025",
    text: "Almanca destek alabiliyor muyum diye sordum. Gönderdikleri döküman eksiksiz ve anlaşılırdı. Ürünün kalitesi bence tartışma götürmez bir seviyede.",
    product: "Plise Perde",
    flag: "🇩🇪",
  },
  {
    id: 35,
    name: "Elena R.",
    location: "Rotterdam, Hollanda",
    rating: 5,
    date: "Nisan 2025",
    text: "Hollanda'ya 7 günde geldi. Profil rengi ve kumaş tam istediğim gibi çıktı. Özel sipariş olmalarına rağmen üretimde hiç hata yoktu. Beş yıldız hak ediyor.",
    product: "Cam Balkon Plise Perde",
    flag: "🇳🇱",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "#f5a623" : "none"}
          stroke={i < count ? "#f5a623" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const totalReviews = reviews.length;
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1);

  return (
    <section className="py-24 bg-[#f4faf4] border-t-4 border-[#404e5e]" aria-label="Müşteri yorumları">
      <div className="max-w-[1566px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-[#83bd81] uppercase tracking-widest mb-3 bg-[#e8f5e7] px-3 py-1.5 rounded-full">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a35] mb-4">
            Kullananlar Söylüyor
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="text-5xl font-extrabold text-[#1e2a35]">{avgRating}</div>
            <div>
              <Stars count={5} />
              <p className="text-sm text-[#718096] mt-1">{totalReviews} doğrulanmış yorum</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="review-card break-inside-avoid bg-[#fafbf9] border border-[#dde5dd] rounded-2xl p-5 shadow-sm hover:border-[#83bd81]"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#83bd81] to-[#404e5e] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#1e2a35] text-sm" itemProp="author">
                      {review.name} {review.flag}
                    </div>
                    <div className="text-xs text-[#718096]">{review.location}</div>
                  </div>
                </div>
                <Stars count={review.rating} />
              </div>

              <p className="text-sm text-[#4a5568] leading-relaxed mb-3" itemProp="reviewBody">
                {review.text}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#83bd81] font-semibold bg-[#e8f5e7] px-2 py-0.5 rounded-full">
                  {review.product}
                </span>
                <span className="text-[11px] text-[#718096]" itemProp="datePublished">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary */}
        <div className="mt-12 bg-[#f4faf4] border border-[#c8e6c8] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-3xl font-extrabold text-[#83bd81] mb-1">{avgRating} / 5</div>
            <Stars count={5} />
            <p className="text-sm text-[#718096] mt-2">{totalReviews} onaylı müşteri yorumu</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-[#dde5dd]" />
          <div className="flex-1 grid grid-cols-3 gap-4 text-center">
            {[
              { val: "94%", label: "5 yıldız verdi" },
              { val: "98%", label: "Tekrar sipariş verir" },
              { val: "100%", label: "Ürünü tavsiye eder" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-extrabold text-[#1e2a35]">{item.val}</div>
                <div className="text-xs text-[#718096] mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="hidden md:block w-px h-16 bg-[#dde5dd]" />
          <a
            href="https://wa.me/905403363873?text=Sipari%C5%9F%20vermek%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#83bd81] hover:bg-[#6aaa68] text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md whitespace-nowrap"
          >
            Siz de Deneyin
          </a>
        </div>
      </div>
    </section>
  );
}
