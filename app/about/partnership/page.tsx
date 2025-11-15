import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Partnership - Blueprint Branding Kreatives",
  description: "Partner with Blueprint Branding Kreatives for comprehensive branding and digital marketing solutions.",
};

export default function PartnershipPage() {
  const partnershipBenefits = [
    {
      title: "Long-Term Relationship",
      description: "We build lasting partnerships, not just one-time projects. Your success is our success.",
      icon: "🤝",
    },
    {
      title: "Strategic Guidance",
      description: "Get expert advice and strategic guidance to help you achieve your business objectives.",
      icon: "💼",
    },
    {
      title: "Dedicated Support",
      description: "Enjoy dedicated support and priority service as a valued partner.",
      icon: "🎯",
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business, from startup to enterprise level.",
      icon: "📈",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Partnership
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Building strategic partnerships for long-term success
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Building Strategic Partnerships</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe in building long-term partnerships with our clients, working together as an extension of your team. Our partnership approach focuses on understanding your business goals, challenges, and vision to deliver solutions that drive sustainable growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether you're a startup or an established business, we're committed to being your trusted partner in branding and digital marketing, providing ongoing support and strategic guidance to help you achieve your objectives. We invest in understanding your business deeply, so we can provide solutions that truly make a difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Partnership Approach</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-gray-900">Understanding:</strong> We take time to understand your business, industry, and unique challenges.
                </p>
                <p>
                  <strong className="text-gray-900">Collaboration:</strong> We work closely with you, keeping you informed and involved throughout the process.
                </p>
                <p>
                  <strong className="text-gray-900">Results:</strong> We focus on delivering measurable results that contribute to your business growth.
                </p>
                <p>
                  <strong className="text-gray-900">Support:</strong> We provide ongoing support and are always available when you need us.
                </p>
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
