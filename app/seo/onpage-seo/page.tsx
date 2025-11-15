import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "On-Page SEO - Blueprint Branding Kreatives",
  description: "On-page SEO optimization services to improve your website's search rankings.",
};

export default function OnPageSEOPage() {
  const elements = [
    {
      title: "Title Tags",
      description: "Optimize page titles to include target keywords and compelling descriptions.",
      icon: "🏷️",
    },
    {
      title: "Meta Descriptions",
      description: "Write compelling meta descriptions that encourage clicks and include keywords.",
      icon: "📄",
    },
    {
      title: "Header Tags",
      description: "Structure content with proper H1, H2, H3 tags for better SEO and readability.",
      icon: "📑",
    },
    {
      title: "Image Optimization",
      description: "Optimize images with descriptive alt text and proper file names.",
      icon: "🖼️",
    },
    {
      title: "Internal Linking",
      description: "Create strategic internal links to improve site structure and page authority.",
      icon: "🔗",
    },
    {
      title: "URL Structure",
      description: "Create clean, keyword-rich URLs that are easy to read and understand.",
      icon: "🔤",
    },
    {
      title: "Content Quality",
      description: "Create high-quality, keyword-optimized content that provides value to users.",
      icon: "✍️",
    },
    {
      title: "Schema Markup",
      description: "Implement structured data to help search engines understand your content.",
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
              On-Page SEO
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Optimize your website content and structure for better search engine rankings
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Optimize Your Website Content</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                On-page SEO involves optimizing elements directly on your website, including title tags, meta descriptions, headers, content, images, and internal linking. We ensure every page is optimized for search engines while maintaining excellent user experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our on-page SEO services focus on improving the elements that search engines use to understand and rank your content. We optimize each page individually while maintaining consistency across your entire website, ensuring both search engines and users can easily navigate and understand your content.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {elements.map((element, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{element.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{element.title}</h3>
                  <p className="text-gray-700 text-sm">{element.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-accent-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">On-Page SEO Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Keyword-optimized title tags and meta descriptions</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Proper heading structure (H1, H2, H3)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Optimized images with alt text</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Strategic internal linking structure</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Clean, keyword-rich URLs</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>High-quality, optimized content</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Schema markup implementation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Mobile-friendly optimization</span>
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
