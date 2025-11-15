import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "General SEO - Blueprint Branding Kreatives",
  description: "Comprehensive general SEO services to improve your website's search engine rankings.",
};

export default function GeneralSEOPage() {
  const services = [
    {
      title: "Keyword Research & Strategy",
      description: "Identify the most valuable keywords for your business and develop a comprehensive SEO strategy.",
      icon: "🔍",
    },
    {
      title: "Content Optimization",
      description: "Optimize your existing content and create new SEO-friendly content that ranks well.",
      icon: "📝",
    },
    {
      title: "Link Building",
      description: "Build high-quality backlinks from authoritative websites to boost your domain authority.",
      icon: "🔗",
    },
    {
      title: "Competitor Analysis",
      description: "Analyze your competitors' SEO strategies and identify opportunities to outperform them.",
      icon: "📊",
    },
    {
      title: "Performance Tracking",
      description: "Monitor your SEO performance with detailed analytics and regular reporting.",
      icon: "📈",
    },
    {
      title: "SEO Audits",
      description: "Comprehensive website audits to identify and fix SEO issues affecting your rankings.",
      icon: "🔎",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              General SEO
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Comprehensive SEO strategy to improve your overall search engine visibility
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Comprehensive SEO Strategy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our general SEO services provide a comprehensive approach to improving your website's search engine visibility. We analyze your current performance, identify opportunities, and implement strategies to boost your rankings across all major search engines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our holistic approach covers all aspects of SEO, from technical optimization to content strategy and link building. We work closely with you to understand your business goals and develop a customized SEO plan that delivers measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Initial SEO audit and competitor analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Comprehensive keyword research and strategy development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>On-page and technical SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Content creation and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Link building and off-page SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Monthly performance reports and strategy adjustments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
