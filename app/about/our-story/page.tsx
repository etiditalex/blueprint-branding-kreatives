import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Our Story - Blueprint Branding Kreatives",
  description: "Learn about the journey and story behind Blueprint Branding Kreatives.",
};

export default function OurStoryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Story
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Journey Begins</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Blueprint Branding Kreatives was founded with a vision to help businesses create memorable, trusted brands that resonate with their target audiences. Our journey began with a simple belief: every business deserves a strong brand identity that sets them apart in the marketplace.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, we've grown from a small creative agency to a comprehensive digital marketing and brand development company, serving clients across various industries with innovative solutions and exceptional results.
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

