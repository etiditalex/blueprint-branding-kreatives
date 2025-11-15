import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Web Hosting & Domain Registration - Blueprint Branding Kreatives",
  description: "Reliable web hosting and domain name registration services for your business.",
};

export default function WebHostingDomainPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Web Hosting & Domain Registration
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Reliable Hosting Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide secure, fast, and reliable web hosting services to ensure your website is always accessible to your customers. Our hosting solutions are optimized for performance and include 24/7 support.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-12">Domain Name Registration</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Secure your online identity with our domain registration services. We help you find and register the perfect domain name for your business, ensuring it's memorable and aligned with your brand.
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

