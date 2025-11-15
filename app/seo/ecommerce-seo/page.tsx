import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "E-commerce SEO - Blueprint Branding Kreatives",
  description: "Specialized SEO services for e-commerce websites to increase online sales.",
};

export default function EcommerceSEOPage() {
  const features = [
    {
      title: "Product Page Optimization",
      description: "Optimize individual product pages with targeted keywords, compelling descriptions, and structured data.",
      icon: "📦",
    },
    {
      title: "Category Page SEO",
      description: "Optimize category and collection pages to rank for broad product searches.",
      icon: "🗂️",
    },
    {
      title: "Shopping Feed Optimization",
      description: "Optimize product feeds for Google Shopping and other comparison shopping engines.",
      icon: "🛍️",
    },
    {
      title: "Site Architecture",
      description: "Improve site structure and navigation to help search engines crawl and index your products.",
      icon: "🏗️",
    },
    {
      title: "Mobile Optimization",
      description: "Ensure your e-commerce site is fully optimized for mobile users and mobile search.",
      icon: "📱",
    },
    {
      title: "Conversion Optimization",
      description: "Optimize for both search rankings and conversions to maximize revenue from organic traffic.",
      icon: "💰",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              E-commerce SEO
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Specialized SEO for online stores to increase product visibility and drive sales
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Boost Your Online Sales</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                E-commerce SEO requires specialized strategies to optimize product pages, improve conversion rates, and increase visibility for product searches. We optimize your online store to rank higher for relevant product keywords and drive qualified traffic that converts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our e-commerce SEO services focus on improving your product visibility in search results, enhancing user experience, and optimizing the entire customer journey from search to purchase. We understand the unique challenges of e-commerce SEO and implement strategies specifically designed for online retailers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-accent-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">E-commerce SEO Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Higher product visibility in search results</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Increased organic traffic to product pages</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Better ranking for product-related keywords</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Improved conversion rates and sales</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Enhanced Google Shopping visibility</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Long-term sustainable growth</span>
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
