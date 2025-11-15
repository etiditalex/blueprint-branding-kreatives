import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Website Maintenance - Blueprint Branding Kreatives",
  description: "Professional website maintenance services to keep your site running smoothly.",
};

export default function WebsiteMaintenancePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Website Maintenance
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Keep Your Website Running Smoothly</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Regular website maintenance is essential for optimal performance, security, and user experience. Our maintenance services include updates, backups, security monitoring, and performance optimization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We ensure your website stays up-to-date, secure, and performing at its best, so you can focus on running your business while we handle the technical aspects.
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

