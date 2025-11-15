import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Industries We Serve - Blueprint Branding Kreatives",
  description: "Discover the industries we serve with our branding and digital marketing services.",
};

export default function IndustriesPage() {
  const industries = [
    "Real Estate",
    "E-commerce",
    "Healthcare",
    "Education",
    "Technology",
    "Finance",
    "Hospitality",
    "Non-Profit",
    "Retail",
    "Professional Services",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Industries We Serve
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
                We serve clients across various industries, each with unique needs and challenges. Our expertise allows us to adapt our services to meet industry-specific requirements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-primary-50 p-6 rounded-lg text-center hover:bg-primary-100 transition-colors"
                  >
                    <p className="font-semibold text-gray-900">{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}

