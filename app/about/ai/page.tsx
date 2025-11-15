import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "How We Use AI - Blueprint Branding Kreatives",
  description: "Discover how Blueprint Branding Kreatives leverages AI technology to enhance our services.",
};

export default function AIPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              How We Use AI
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Leveraging AI for Better Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Blueprint Branding Kreatives, we embrace artificial intelligence to enhance our creative and marketing processes. We use AI tools for content analysis, SEO optimization, design inspiration, and data-driven insights that help us deliver more effective campaigns.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AI helps us analyze market trends, optimize content for better performance, and provide personalized solutions that drive results. However, we believe AI complements human creativity rather than replaces it, ensuring every project maintains a personal touch and strategic thinking.
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

