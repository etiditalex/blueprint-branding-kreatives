import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "SEO Services - Blueprint Branding Kreatives",
  description: "Comprehensive SEO services including general SEO, e-commerce SEO, local SEO, on-page SEO, and technical SEO.",
};

export default function SEOPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              SEO Services
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Comprehensive SEO solutions to improve your search engine rankings
            </p>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
                Our SEO services are designed to improve your website's visibility in search engine results, drive organic traffic, and increase conversions. We offer specialized SEO solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}

