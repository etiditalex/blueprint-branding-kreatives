import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Portfolio - Blueprint Branding Kreatives",
  description: "View our portfolio of successful web design, branding, and digital marketing projects.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Showcasing our successful projects in web design, branding, and digital marketing
            </p>
          </div>
        </div>
        <PortfolioGrid />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}

