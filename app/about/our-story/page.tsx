import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Our Story - Blueprint Branding Kreatives",
  description: "Learn about the journey and story behind Blueprint Branding Kreatives.",
};

export default function OurStoryPage() {
  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Blueprint Branding Kreatives was founded with a vision to help businesses create memorable brands.",
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Expanded services to include comprehensive digital marketing and web development solutions.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Embraced AI and advanced technologies to enhance our creative and marketing processes.",
    },
    {
      year: "2025",
      title: "Today",
      description: "Serving clients across various industries with innovative solutions and exceptional results.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Our Story
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              The journey of Blueprint Branding Kreatives
            </p>
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
                Over the years, we've grown from a small creative agency to a comprehensive digital marketing and brand development company, serving clients across various industries with innovative solutions and exceptional results. Our commitment to excellence and client success has been the driving force behind our growth.
              </p>

              <div className="my-16">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Our Journey</h3>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-24 text-primary-600 font-bold text-lg">
                        {milestone.year}
                      </div>
                      <div className="flex-1 ml-8">
                        <h4 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h4>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span>Creativity and Innovation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span>Client-Centric Approach</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span>Integrity and Transparency</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">✓</span>
                    <span>Continuous Learning</span>
                  </div>
                </div>
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
