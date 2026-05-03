import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="iletisim"
      className="py-24 bg-[#83bd81] relative overflow-hidden"
      aria-label="Son çağrı ve iletişim"
    >
      {/* Background plise pattern */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0"
            style={{
              top: `${i * 32}px`,
              height: i % 2 === 0 ? "3px" : "1px",
              background: "white",
            }}
          />
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-2 border-white/20" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/15" />

      <div className="relative max-w-[1566px] mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 border border-white/30">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Ücretsiz Keşif ve Ölçüm
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Balkonunuzu{" "}
          <span className="relative inline-block">
            Dönüştürmeye
            <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-white/50" />
          </span>{" "}
          Hazır mısınız?
        </h2>

        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          <Link href="/" className="text-white font-semibold underline underline-offset-4 hover:no-underline">
            Cam balkon perdesi
          </Link>{" "}
          siparişi vermeden önce bir uzmanımızla konuşmanızı öneririz. Yerinde ölçüm, kumaş seçimi ve
          fiyat teklifi — tamamı ücretsiz, hiçbir yükümlülük yoktur.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/905403363873?text=Cam%20balkon%20plise%20perde%20i%C3%A7in%20%C3%BCcretsiz%20ke%C5%9Fif%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#83bd81] font-bold px-7 py-4 rounded-xl text-[16px] hover:bg-[#f4faf4] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <MessageCircle size={20} />
            WhatsApp ile Başla
          </a>
          <a
            href="tel:+905403363873"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white/60 font-bold px-7 py-4 rounded-xl text-[16px] hover:bg-white/10 hover:border-white transition-all"
          >
            <Phone size={20} />
            +90 540 336 38 73
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
          {[
            "✓ Ücretsiz keşif",
            "✓ Yazılı fiyat teklifi",
            "✓ Montaj dahil",
            "✓ 10 yıl garanti",
            "✓ Aynı gün cevap",
          ].map((item) => (
            <span key={item} className="font-medium">
              {item}
            </span>
          ))}
        </div>

        {/* Bayilik CTA */}
        <div className="mt-12 bg-white/10 border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="font-bold text-white text-[17px] mb-2">Bayilik Fırsatı</h3>
          <p className="text-white/70 text-sm mb-4">
            Kendi şehrinde veya ülkende Fenetre Systems bayisi ol. Teknik destek, stok desteği ve özel
            fiyatlarla kazancını artır.
          </p>
          <a
            href="https://wa.me/905403363873?text=Fenetre%20Systems%20bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#83bd81] font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#f4faf4] transition-all"
          >
            <MessageCircle size={15} />
            Bayilik için WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
