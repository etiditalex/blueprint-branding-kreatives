import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Services - Blueprint Branding Kreatives",
  description: "Professional website services including web hosting, domain registration, content creation, and website maintenance.",
};

export default function WebsitesPage() {
  const services = [
    {
      title: "Web Hosting & Domain Registration",
      description: "Secure, reliable hosting solutions and domain name registration to establish your online presence.",
      href: "/websites/web-hosting-domain",
      icon: "🌐",
      features: ["Fast & Reliable Hosting", "Domain Registration", "SSL Certificates", "24/7 Support"],
    },
    {
      title: "Content Creation",
      description: "SEO-optimized content creation and marketing services to maximize your ROI and drive conversions.",
      href: "/websites/content-creation",
      icon: "✍️",
      features: ["SEO-Optimized Content", "AI-Powered Strategy", "Content Marketing", "Performance Tracking"],
    },
    {
      title: "Website Maintenance",
      description: "Ongoing website maintenance to keep your site secure, updated, and performing at its best.",
      href: "/websites/maintenance",
      icon: "🔧",
      features: ["Regular Updates", "Security Monitoring", "Backup Services", "Performance Optimization"],
    },
  ];

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

        {/* Main Content */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                We offer complete website services to help your business establish and maintain a strong online presence. From hosting and domain registration to content creation and ongoing maintenance, we provide end-to-end solutions that ensure your website performs optimally and drives business results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Our team of experts combines technical expertise with creative solutions to deliver websites that not only look great but also convert visitors into customers. Whether you're launching a new site or optimizing an existing one, we have the tools and knowledge to help you succeed online.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg
                          className="w-4 h-4 text-primary-600 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="text-primary-600 font-semibold group-hover:text-primary-700">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
                Why Choose Our Website Services
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
                  <p className="text-gray-700">
                    Our experienced team of developers, designers, and content creators work together to deliver exceptional results.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Results</h3>
                  <p className="text-gray-700">
                    We've helped numerous businesses improve their online presence and achieve their digital marketing goals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Ongoing Support</h3>
                  <p className="text-gray-700">
                    We provide continuous support and maintenance to ensure your website remains secure and up-to-date.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Custom Solutions</h3>
                  <p className="text-gray-700">
                    Every business is unique, and we tailor our services to meet your specific needs and objectives.
                  </p>
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
