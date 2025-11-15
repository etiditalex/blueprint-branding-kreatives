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
      answer: "We offer comprehensive digital marketing and brand development services including web design, graphic design, SEO, branding solutions, content creation, website maintenance, web hosting, and domain registration. We also provide specialized services like e-commerce SEO, local SEO, and technical SEO.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while comprehensive branding projects can take 6-12 weeks. SEO campaigns typically show results within 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups to large corporations. We tailor our services to meet your specific needs and budget. We offer flexible packages and can scale our services as your business grows.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is customized based on your project requirements. We offer flexible packages for different services and can work within your budget. Contact us for a free consultation and detailed quote tailored to your needs.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer ongoing support and maintenance services to ensure your website and digital presence continue to perform optimally after launch. We have various maintenance plans available, from basic monthly updates to comprehensive enterprise-level support.",
    },
    {
      question: "Can you help with existing websites?",
      answer: "Absolutely! We can help optimize, redesign, or maintain existing websites. We'll analyze your current site, identify areas for improvement, and implement enhancements to boost performance and user experience.",
    },
    {
      question: "Do you offer SEO services?",
      answer: "Yes, we offer comprehensive SEO services including general SEO, e-commerce SEO, local SEO, on-page SEO, and technical SEO. We develop customized SEO strategies based on your business goals and industry.",
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We combine creative excellence with strategic thinking and technical expertise. Our team uses AI-powered tools alongside human creativity, we focus on building long-term partnerships, and we're committed to delivering measurable results. We also offer comprehensive services from branding to digital marketing under one roof.",
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
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Still Have Questions?</h3>
                <p className="text-gray-700 mb-6">
                  We're here to help! Contact us for more information or to discuss your specific needs.
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
        </div>

        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
