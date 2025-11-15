import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Technical SEO - Blueprint Branding Kreatives",
  description: "Technical SEO services to improve your website's technical foundation for better search rankings.",
};

export default function TechnicalSEOPage() {
  const technicalAreas = [
    {
      title: "Site Speed Optimization",
      description: "Improve page load times through code optimization, image compression, and caching strategies.",
      icon: "⚡",
    },
    {
      title: "Mobile-First Design",
      description: "Ensure your site is fully optimized for mobile devices and passes mobile usability tests.",
      icon: "📱",
    },
    {
      title: "Site Architecture",
      description: "Optimize site structure, navigation, and URL hierarchy for better crawling and indexing.",
      icon: "🏗️",
    },
    {
      title: "XML Sitemaps",
      description: "Create and optimize XML sitemaps to help search engines discover and index your pages.",
      icon: "🗺️",
    },
    {
      title: "Robots.txt",
      description: "Properly configure robots.txt to guide search engine crawlers effectively.",
      icon: "🤖",
    },
    {
      title: "HTTPS & Security",
      description: "Ensure your site uses HTTPS and implements proper security measures.",
      icon: "🔒",
    },
    {
      title: "Crawlability",
      description: "Fix crawl errors and ensure all important pages are accessible to search engines.",
      icon: "🕷️",
    },
    {
      title: "Core Web Vitals",
      description: "Optimize for Google's Core Web Vitals to improve user experience and rankings.",
      icon: "📊",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Technical SEO
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Optimize your website's technical foundation for better search rankings
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Optimize Your Website's Technical Foundation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Technical SEO focuses on improving the technical aspects of your website that affect search engine crawling and indexing. We optimize site speed, mobile-friendliness, site structure, schema markup, and fix technical issues that may be preventing your site from ranking well.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Even the best content won't rank well if search engines can't properly crawl and index your site. Our technical SEO services ensure your website's foundation is solid, allowing search engines to efficiently discover, crawl, and index your content.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {technicalAreas.map((area, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{area.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{area.title}</h3>
                  <p className="text-gray-700 text-sm">{area.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Technical SEO Audit Includes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Site speed analysis and optimization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Mobile usability testing and fixes</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Site structure and navigation review</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>XML sitemap creation and optimization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Robots.txt configuration</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>HTTPS and security implementation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Crawl error identification and fixes</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">✓</span>
                  <span>Core Web Vitals optimization</span>
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
