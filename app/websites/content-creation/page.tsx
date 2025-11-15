import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Content Creation - Blueprint Branding Kreatives",
  description: "Professional front-end content creation services for your website.",
};

export default function ContentCreationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Content Creation
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Front-End Content Creation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our content creation services focus on creating engaging, user-friendly front-end content that captures your audience's attention. We develop compelling copy, visuals, and interactive elements that enhance user experience and drive conversions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From landing pages to product descriptions, we create content that not only looks great but also communicates your brand message effectively and drives business results.
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

