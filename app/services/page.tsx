import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import ServiceDetailSection from "@/components/sections/ServiceDetailSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Our Services - Blueprint Branding Kreatives",
  description: "Comprehensive digital marketing and brand development services including web design, SEO, graphic design, and branding solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Comprehensive digital marketing and brand development solutions tailored to your business needs
            </p>
          </div>
        </div>
        <ServicesOverviewSection />
        <ServiceDetailSection serviceId="graphic-design" />
        <ServiceDetailSection serviceId="web-design-seo" />
        <ServiceDetailSection serviceId="branding-solutions" />
        <ServiceDetailSection serviceId="digital-marketing" />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}

