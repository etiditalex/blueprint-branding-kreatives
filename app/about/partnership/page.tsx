import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Partnership - Blueprint Branding Kreatives",
  description: "Partner with Blueprint Branding Kreatives for comprehensive branding and digital marketing solutions.",
};

export default function PartnershipPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Partnership
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Building Strategic Partnerships</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe in building long-term partnerships with our clients, working together as an extension of your team. Our partnership approach focuses on understanding your business goals, challenges, and vision to deliver solutions that drive sustainable growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you're a startup or an established business, we're committed to being your trusted partner in branding and digital marketing, providing ongoing support and strategic guidance to help you achieve your objectives.
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

