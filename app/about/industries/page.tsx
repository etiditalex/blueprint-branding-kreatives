import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Industries We Serve - Blueprint Branding Kreatives",
  description: "Discover the industries we serve with our branding and digital marketing services.",
};

export default function IndustriesPage() {
  const industries = [
    {
      name: "Real Estate",
      description: "Property listings, virtual tours, and real estate marketing solutions.",
      icon: "🏠",
    },
    {
      name: "E-commerce",
      description: "Online store optimization, product SEO, and conversion optimization.",
      icon: "🛒",
    },
    {
      name: "Healthcare",
      description: "Medical practice websites, patient engagement, and healthcare marketing.",
      icon: "🏥",
    },
    {
      name: "Education",
      description: "Educational institution websites, student recruitment, and learning platforms.",
      icon: "🎓",
    },
    {
      name: "Technology",
      description: "Tech company branding, SaaS marketing, and digital product promotion.",
      icon: "💻",
    },
    {
      name: "Finance",
      description: "Financial services branding, compliance-focused design, and trust-building.",
      icon: "💰",
    },
    {
      name: "Hospitality",
      description: "Hotel and restaurant websites, booking systems, and tourism marketing.",
      icon: "🍽️",
    },
    {
      name: "Non-Profit",
      description: "Cause-based marketing, donation platforms, and community engagement.",
      icon: "🤝",
    },
    {
      name: "Retail",
      description: "Retail store branding, product marketing, and customer experience design.",
      icon: "🛍️",
    },
    {
      name: "Professional Services",
      description: "Law firms, consulting, accounting, and professional service marketing.",
      icon: "💼",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Serving clients across various industries with specialized solutions
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                We serve clients across various industries, each with unique needs and challenges. Our expertise allows us to adapt our services to meet industry-specific requirements, ensuring that our solutions are tailored to your business context and target audience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Whether you're in real estate, healthcare, e-commerce, or any other industry, we have the knowledge and experience to help you succeed online. Our team stays updated with industry trends and best practices to deliver solutions that work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary-50 hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-16 bg-accent-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Don't See Your Industry?</h3>
              <p className="text-gray-700 mb-6">
                We work with businesses across all industries. Contact us to discuss how we can help your specific industry.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
