import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Our Team - Blueprint Branding Kreatives",
  description: "Meet the talented team behind Blueprint Branding Kreatives.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Team
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Our Expert Team</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team consists of talented designers, developers, marketers, and strategists who are passionate about creating exceptional results for our clients. Each team member brings unique expertise and creativity to every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're committed to continuous learning and staying updated with the latest trends and technologies in digital marketing, design, and branding to ensure we deliver cutting-edge solutions.
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

