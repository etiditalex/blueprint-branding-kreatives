import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import InfographicSection from "@/components/sections/InfographicSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import PortfolioPreviewSection from "@/components/sections/PortfolioPreviewSection";
import CtaSection from "@/components/sections/CtaSection";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description: "A digital marketing and brand development company providing creative solutions to make your brand memorable, trusted, and reliable.",
  openGraph: {
    type: "website",
    title: "Blueprint Branding Kreatives - Digital Marketing & Brand Development",
    description: "A digital marketing and brand development company providing creative solutions to make your brand memorable, trusted, and reliable.",
  },
};

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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
    </>
  );
}
