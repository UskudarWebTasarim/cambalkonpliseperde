import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cambalkonpliseperde.com"),
  title: {
    default: "Cam Balkon Plise Perde Balkonunuzu Cennete Çevirin",
    template: "%s | Cam Balkon Plise Perde",
  },
  description:
    "Cam Balkon Plise Perde ile balkonunuzu yıl boyu kullanılabilir hale getirin. Özel ölçü üretim, uzman montaj ve estetik çözümler.",
  keywords: [
    "cam balkon plise perde",
    "plise perde",
    "cam balkon perdesi",
    "pliseli perde",
    "balkon plise sistemi",
    "akordeon cam perdesi",
    "katlamalı balkon perdesi",
    "cam balkon güneşlik perdesi",
    "plise sineklik",
    "plise perde fiyat",
    "cam balkon perde montaj",
    "gebze plise perde",
    "kocaeli perde",
  ],
  authors: [{ name: "Cam Balkon Plise Perde", url: "https://cambalkonpliseperde.com" }],
  creator: "Cam Balkon Plise Perde",
  publisher: "Cam Balkon Plise Perde",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://cambalkonpliseperde.com",
    siteName: "Cam Balkon Plise Perde – Fenetre Systems",
    title: "Cam Balkon Plise Perde | Fenetre Systems",
    description:
      "Fenetre Systems üretimi cam balkon plise perde sistemleri. Özel ölçü üretim, montaj dahil Türkiye teslimat, Avrupa'ya 4-10 gün teslimat.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cam Balkon Plise Perde | Fenetre Systems",
    description: "Türkiye üretimi, Avrupa standartlarında cam balkon plise perde sistemleri.",
    site: "@FenetreSystems",
    creator: "@FenetreSystems",
  },
  alternates: {
    canonical: "https://cambalkonpliseperde.com",
    languages: { "tr-TR": "https://cambalkonpliseperde.com" },
  },
  verification: {
    google: "fenetre-systems-google-verify",
  },
  category: "home improvement",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cam balkon plise perde ne işe yarar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cam balkon plise perde, cam balkon içine monte edilen yatay katlamalı perde sistemidir. Günışığını filtreler, dışarıya karşı mahremiyet sağlar ve ısı transferini azaltır. Balkon açıkken 6–8 cm'lik dar bir sıkıştırma kütlesine dönüşür.",
      },
    },
    {
      "@type": "Question",
      name: "Plise perde ne kadar dayanır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Doğru bakım şartlarında 10–15 yıl sorunsuz kullanım beklentisi vardır. Fenetre Systems mekanizması 50.000 açma-kapama testinden geçirilir.",
      },
    },
    {
      "@type": "Question",
      name: "Avrupa'ya teslimat yapılıyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Almanya, Hollanda, Belçika, Fransa, Avusturya, İsviçre ve tüm AB ülkelerine 4–10 iş günü içinde kapıya teslim yapılmaktadır. DHL/DPD ile takip numaralı kargo.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi cam balkon sistemleriyle uyumlu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Katlanır cam balkon (akordeon), sürgülü cam balkon ve kış bahçesi sistemlerinin tamamıyla çalışır. PVC, alüminyum ve paslanmaz çelik profilli çerçevelerin hepsine montaj yapılabilir.",
      },
    },
    {
      "@type": "Question",
      name: "Garanti süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "10 yıl mekanik garanti verilmektedir. Kumaş garantisi 3 yıldır. Yanlış kullanım garantiyi geçersiz kılar.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://cambalkonpliseperde.com/#organization",
      name: "Fenetre Systems",
      url: "https://cambalkonpliseperde.com",
      logo: "https://cambalkonpliseperde.com/logo.png",
      description:
        "Türkiye'nin önde gelen cam balkon plise perde üreticisi. Özel ölçü üretim, Türkiye geneli montaj, Avrupa teslimat hizmetleri.",
      foundingDate: "2010",
      telephone: "+905403363873",
      email: "info@fenetresystems.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cumhuriyet Mah. 2233 Sok. No:4/A",
        addressLocality: "Gebze",
        addressRegion: "Kocaeli",
        postalCode: "41400",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.8021",
        longitude: "29.4474",
      },
      sameAs: [
        "https://www.facebook.com/FenetreSystems/",
        "https://www.instagram.com/fenetresystems/",
        "https://x.com/FenetreSystems",
        "https://www.linkedin.com/company/fenetresystems/",
        "https://tr.pinterest.com/fenetresystems/",
        "https://www.youtube.com/@FenetreSystems",
        "https://www.fenetresystems.com",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "Country", name: "Almanya" },
        { "@type": "Country", name: "Hollanda" },
        { "@type": "Country", name: "Belçika" },
        { "@type": "Country", name: "Fransa" },
        { "@type": "Country", name: "Avusturya" },
        { "@type": "Country", name: "İsviçre" },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://cambalkonpliseperde.com/#product",
      name: "Cam Balkon Plise Perde",
      brand: { "@type": "Brand", name: "Fenetre Systems" },
      description:
        "Cam balkonlara özel yatay katlamalı plise perde sistemi. Alüminyum profil, özel dokuma polyester kumaş. UV koruma, ısı yalıtımı, mahremiyet. Özel ölçü üretim.",
      manufacturer: { "@type": "Organization", name: "Fenetre Systems" },
      countryOfOrigin: "TR",
      offers: {
        "@type": "Offer",
        priceCurrency: "TRY",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Fenetre Systems" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "35",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  );
}
