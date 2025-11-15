import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Hosting & Domain Registration - Blueprint Branding Kreatives",
  description: "Reliable web hosting and domain name registration services for your business.",
};

export default function WebHostingDomainPage() {
  const features = [
    {
      title: "Fast & Reliable Hosting",
      description: "Our hosting infrastructure ensures 99.9% uptime with fast loading speeds and optimal performance.",
      icon: "⚡",
    },
    {
      title: "Domain Registration",
      description: "Secure your perfect domain name with our easy registration process and domain management tools.",
      icon: "🌍",
    },
    {
      title: "SSL Certificates",
      description: "Free SSL certificates included to ensure your website is secure and trusted by visitors.",
      icon: "🔒",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to help you whenever you need assistance.",
      icon: "💬",
    },
    {
      title: "Email Hosting",
      description: "Professional email accounts with your domain name for enhanced brand credibility.",
      icon: "📧",
    },
    {
      title: "Backup Services",
      description: "Automatic daily backups to protect your website data and ensure quick recovery.",
      icon: "💾",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Web Hosting & Domain Registration
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Secure, fast, and reliable hosting solutions for your business
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Reliable Hosting Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide secure, fast, and reliable web hosting services to ensure your website is always accessible to your customers. Our hosting solutions are optimized for performance and include 24/7 support, ensuring your online presence remains stable and responsive.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our hosting infrastructure is built on modern technology with robust security measures, regular backups, and scalable resources that grow with your business. Whether you're running a small business website or a large e-commerce platform, we have hosting solutions tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Domain Name Registration</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Secure your online identity with our domain registration services. We help you find and register the perfect domain name for your business, ensuring it's memorable, aligned with your brand, and available for registration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our domain management tools make it easy to manage your domains, set up DNS records, and configure email forwarding. We support all major domain extensions (.com, .co.ke, .org, etc.) and provide expert guidance to help you choose the best domain for your business.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Hosting Features</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      Unlimited bandwidth and storage
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      Free SSL certificates
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      One-click WordPress installation
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      cPanel control panel
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      Daily automated backups
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">Domain Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      Domain name search and registration
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      Domain transfer services
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      DNS management tools
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      Email forwarding setup
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-600 mr-2">✓</span>
                      Domain privacy protection
                    </li>
                  </ul>
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
