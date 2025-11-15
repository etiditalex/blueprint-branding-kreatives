import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import InfographicSection from "@/components/sections/InfographicSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import PortfolioPreviewSection from "@/components/sections/PortfolioPreviewSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesOverviewSection />
      <InfographicSection />
      <AboutPreviewSection />
      <PortfolioPreviewSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
