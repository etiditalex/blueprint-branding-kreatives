import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "On-Page SEO - Blueprint Branding Kreatives",
  description: "On-page SEO optimization services to improve your website's search rankings.",
};

export default function OnPageSEOPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              On-Page SEO
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Optimize Your Website Content</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                On-page SEO involves optimizing elements directly on your website, including title tags, meta descriptions, headers, content, images, and internal linking. We ensure every page is optimized for search engines while maintaining excellent user experience.
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

