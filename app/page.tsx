import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import MainProductDetail from "@/components/MainProductDetail";
import BrandValue from "@/components/BrandValue";
import MaterialQuality from "@/components/MaterialQuality";
import Process from "@/components/Process";
import Expertise from "@/components/Expertise";
import Applications from "@/components/Applications";
import ServiceAreas from "@/components/ServiceAreas";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileSticky from "@/components/MobileSticky";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Products />
        <MainProductDetail />
        <BrandValue />
        <MaterialQuality />
        <Process />
        <Expertise />
        <Applications />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileSticky />
    </>
  );
}
