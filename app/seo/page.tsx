import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Services - Blueprint Branding Kreatives",
  description: "Comprehensive SEO services including general SEO, e-commerce SEO, local SEO, on-page SEO, and technical SEO.",
};

export default function SEOPage() {
  const seoServices = [
    {
      title: "General SEO",
      description: "Comprehensive SEO strategy to improve your overall search engine visibility and rankings.",
      href: "/seo/general-seo",
      icon: "🎯",
    },
    {
      title: "E-commerce SEO",
      description: "Specialized SEO for online stores to increase product visibility and drive sales.",
      href: "/seo/ecommerce-seo",
      icon: "🛒",
    },
    {
      title: "Local SEO",
      description: "Optimize your business for local search results and attract nearby customers.",
      href: "/seo/local-seo",
      icon: "📍",
    },
    {
      title: "On-Page SEO",
      description: "Optimize your website's content and structure for better search engine rankings.",
      href: "/seo/onpage-seo",
      icon: "📄",
    },
    {
      title: "Technical SEO",
      description: "Improve your website's technical foundation for better crawling and indexing.",
      href: "/seo/technical-seo",
      icon: "⚙️",
    },
  ];

  const benefits = [
    {
      title: "Increased Visibility",
      description: "Rank higher in search results and get discovered by more potential customers.",
      icon: "👁️",
    },
    {
      title: "Organic Traffic Growth",
      description: "Drive qualified traffic to your website without paid advertising costs.",
      icon: "📈",
    },
    {
      title: "Better User Experience",
      description: "SEO improvements enhance site speed, usability, and overall user experience.",
      icon: "✨",
    },
    {
      title: "Long-Term Results",
      description: "Build sustainable organic traffic that continues to grow over time.",
      icon: "🚀",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              SEO Services
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Comprehensive SEO solutions to improve your search engine rankings
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                Our SEO services are designed to improve your website's visibility in search engine results, drive organic traffic, and increase conversions. We offer specialized SEO solutions tailored to your business needs, whether you're a local business, e-commerce store, or enterprise company.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                With years of experience and proven strategies, we help businesses achieve sustainable growth through search engine optimization. Our data-driven approach ensures measurable results and continuous improvement of your online presence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {seoServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-primary-600 font-semibold group-hover:text-primary-700">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
                Benefits of Our SEO Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-700 text-sm">{benefit.description}</p>
                  </div>
                ))}
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
