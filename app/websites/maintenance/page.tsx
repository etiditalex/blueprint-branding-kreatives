import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Website Maintenance - Blueprint Branding Kreatives",
  description: "Professional website maintenance services to keep your site running smoothly.",
};

export default function WebsiteMaintenancePage() {
  const services = [
    {
      title: "Regular Updates",
      description: "Keep your website's core software, plugins, and themes up-to-date to ensure security and compatibility.",
      icon: "🔄",
    },
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring and malware scanning to protect your website from threats and attacks.",
      icon: "🛡️",
    },
    {
      title: "Backup Services",
      description: "Automated daily backups with easy restoration options to protect your valuable data.",
      icon: "💾",
    },
    {
      title: "Performance Optimization",
      description: "Regular performance audits and optimization to ensure fast loading times and optimal user experience.",
      icon: "⚡",
    },
    {
      title: "Content Updates",
      description: "Regular content updates, blog posts, and page modifications to keep your site fresh and engaging.",
      icon: "📝",
    },
    {
      title: "Technical Support",
      description: "Dedicated technical support for any issues, questions, or custom modifications you need.",
      icon: "🔧",
    },
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
      price: "Starting at Ksh. 15,000/month",
      features: [
        "Monthly updates",
        "Security monitoring",
        "Weekly backups",
        "Email support",
        "Performance reports",
      ],
    },
    {
      name: "Premium Maintenance",
      price: "Starting at Ksh. 35,000/month",
      features: [
        "Weekly updates",
        "24/7 security monitoring",
        "Daily backups",
        "Priority support",
        "Monthly content updates",
        "Performance optimization",
      ],
    },
    {
      name: "Enterprise Maintenance",
      price: "Custom Quote",
      features: [
        "Daily updates",
        "Advanced security",
        "Real-time backups",
        "Dedicated support",
        "Unlimited content updates",
        "Custom development",
        "Analytics & reporting",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Website Maintenance
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Keep your website running smoothly with professional maintenance services
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Keep Your Website Running Smoothly</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Regular website maintenance is essential for optimal performance, security, and user experience. Our maintenance services include updates, backups, security monitoring, and performance optimization to ensure your website stays up-to-date, secure, and performing at its best.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We ensure your website stays current with the latest security patches, software updates, and performance enhancements, so you can focus on running your business while we handle the technical aspects. Our proactive approach prevents issues before they become problems, saving you time and money.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Maintenance Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {maintenancePlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-lg p-8 ${
                      index === 1 ? "border-2 border-primary-600 transform scale-105" : "border border-gray-200"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                    <div className="text-2xl font-bold text-primary-600 mb-6">{plan.price}</div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                        index === 1
                          ? "bg-primary-600 hover:bg-primary-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      Get Started
                    </Link>
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
