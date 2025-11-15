import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import ServiceDetailSection from "@/components/sections/ServiceDetailSection";
import InfographicSection from "@/components/sections/InfographicSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Our Services - Blueprint Branding Kreatives",
  description: "Comprehensive digital marketing and brand development services including web design, SEO, graphic design, and branding solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        {/* Modern Hero Section */}
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Tailored services to elevate your brand and drive business growth
            </p>
          </div>
        </div>

        {/* Services Overview with Modern Cards */}
        <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <ServicesOverviewSection />
        </div>

        {/* Infographic Section */}
        <InfographicSection />

        {/* Service Details with Modern Design */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-24">
              <ServiceDetailSection serviceId="graphic-design" />
              <ServiceDetailSection serviceId="web-design-seo" />
              <ServiceDetailSection serviceId="branding-solutions" />
              <ServiceDetailSection serviceId="digital-marketing" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-primary-200 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  200+
                </div>
                <div className="text-primary-200 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-primary-200 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-primary-200 font-medium">Client Satisfaction</div>
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
