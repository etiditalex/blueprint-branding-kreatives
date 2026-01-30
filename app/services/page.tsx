"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  Globe,
  TrendingUp,
  Printer,
  Signpost,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creative visual solutions that capture your brand essence and communicate your message effectively. From logos to marketing materials, we design visuals that make an impact.",
    features: [
      "Logo Design & Brand Identity",
      "Marketing Collaterals",
      "Social Media Graphics",
      "Print Design",
      "Packaging Design",
      "Illustration & Infographics",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "branding",
    icon: Layers,
    title: "Branding Solutions",
    description:
      "Comprehensive brand identity development and strategy. We help you build a memorable brand that resonates with your target audience and stands out in the market.",
    features: [
      "Brand Strategy & Positioning",
      "Brand Identity Design",
      "Brand Guidelines",
      "Brand Voice & Messaging",
      "Brand Audit & Analysis",
      "Rebranding Services",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design & SEO Services",
    description:
      "Modern, responsive websites that not only look great but also perform exceptionally. Combined with SEO strategies to boost your online visibility and drive traffic.",
    features: [
      "Responsive Web Design",
      "UI/UX Design",
      "E-commerce Solutions",
      "SEO Optimization",
      "Website Maintenance",
      "Performance Optimization",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing & Content Optimization",
    description:
      "Strategic digital marketing campaigns to enhance your online presence, engage your audience, and drive business growth through data-driven strategies.",
    features: [
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "PPC Advertising",
      "Analytics & Reporting",
      "Marketing Automation",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "printing",
    icon: Printer,
    title: "Digital & Offset Printing",
    description:
      "High-quality printing services for all your business needs. From business cards to large format prints, we deliver professional results that represent your brand well.",
    features: [
      "Business Cards & Stationery",
      "Brochures & Flyers",
      "Posters & Banners",
      "Large Format Printing",
      "Digital Printing",
      "Offset Printing",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "signage",
    icon: Signpost,
    title: "Indoor & Outdoor Sign Solutions",
    description:
      "Custom signage solutions that enhance your brand visibility. From storefront signs to indoor wayfinding, we create signs that make a lasting impression.",
    features: [
      "Storefront Signs",
      "Indoor Signage",
      "Vehicle Wraps",
      "Banner & Flag Design",
      "LED Signs",
      "Custom Fabrication",
    ],
    color: "from-teal-500 to-blue-500",
  },
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Blueprint Branding Kreatives offers creative services including Graphic Design,
              Branding Solutions, Web Design and SEO Services, Digital Marketing & Content
              Optimization to enhance businesses' online presence and brand identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} space-y-6`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } relative`}
                >
                  <div
                    className={`relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.color} opacity-90`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-white/20" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your brand and boost your business
              performance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

