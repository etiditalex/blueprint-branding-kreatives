import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Local SEO - Blueprint Branding Kreatives",
  description: "Local SEO services to help your business appear in local search results.",
};

export default function LocalSEOPage() {
  const services = [
    {
      title: "Google Business Profile",
      description: "Optimize and manage your Google Business Profile to appear in local search results and Google Maps.",
      icon: "📍",
    },
    {
      title: "Local Citations",
      description: "Build consistent local citations across directories and platforms to improve local visibility.",
      icon: "📋",
    },
    {
      title: "Local Content",
      description: "Create location-specific content that targets local keywords and attracts nearby customers.",
      icon: "📝",
    },
    {
      title: "Review Management",
      description: "Manage and respond to customer reviews to build trust and improve local rankings.",
      icon: "⭐",
    },
    {
      title: "Local Link Building",
      description: "Build links from local websites, directories, and community organizations.",
      icon: "🔗",
    },
    {
      title: "NAP Consistency",
      description: "Ensure your Name, Address, and Phone number are consistent across all platforms.",
      icon: "✅",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Local SEO
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Dominate local search results and attract customers in your area
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Dominate Local Search Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Local SEO helps your business appear in local search results when customers search for products or services in your area. We optimize your Google Business Profile, local citations, and location-based content to drive foot traffic and local online visibility.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you have a single location or multiple locations, our local SEO strategies help you connect with customers who are actively looking for businesses like yours in their area. We focus on improving your visibility in "near me" searches and local map results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Local SEO Results</h3>
              <p className="text-gray-700 mb-4">
                Our local SEO services help you achieve:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Higher rankings in local search results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Increased visibility in Google Maps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>More "near me" search appearances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Higher click-through rates from local searches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Increased foot traffic and phone calls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
