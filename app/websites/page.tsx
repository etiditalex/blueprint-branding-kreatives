import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Websites - Blueprint Branding Kreatives",
  description: "Professional website services including web hosting, domain registration, content creation, and website maintenance.",
};

export default function WebsitesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Website Services
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Comprehensive website solutions from hosting to maintenance
            </p>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
                We offer complete website services to help your business establish and maintain a strong online presence. From hosting and domain registration to content creation and ongoing maintenance, we've got you covered.
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

