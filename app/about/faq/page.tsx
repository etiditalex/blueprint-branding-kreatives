import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "FAQ - Blueprint Branding Kreatives",
  description: "Frequently asked questions about Blueprint Branding Kreatives services.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive digital marketing and brand development services including web design, graphic design, SEO, branding solutions, content creation, and website maintenance.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while comprehensive branding projects can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups to large corporations. We tailor our services to meet your specific needs and budget.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is customized based on your project requirements. We offer flexible packages and can work within your budget. Contact us for a free consultation and quote.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer ongoing support and maintenance services to ensure your website and digital presence continue to perform optimally after launch.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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

