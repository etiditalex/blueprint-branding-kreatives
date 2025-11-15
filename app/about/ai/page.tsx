import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "How We Use AI - Blueprint Branding Kreatives",
  description: "Discover how Blueprint Branding Kreatives leverages AI technology to enhance our services.",
};

export default function AIPage() {
  const aiApplications = [
    {
      title: "Content Analysis",
      description: "AI tools help us analyze content performance, identify trends, and optimize for better results.",
      icon: "📊",
    },
    {
      title: "SEO Optimization",
      description: "Leverage AI for keyword research, content optimization, and search trend analysis.",
      icon: "🔍",
    },
    {
      title: "Design Inspiration",
      description: "AI assists in generating design concepts and exploring creative possibilities.",
      icon: "🎨",
    },
    {
      title: "Data-Driven Insights",
      description: "AI analytics provide actionable insights to improve campaign performance and ROI.",
      icon: "💡",
    },
    {
      title: "Automation",
      description: "Streamline repetitive tasks to focus on strategic thinking and creative work.",
      icon: "⚙️",
    },
    {
      title: "Personalization",
      description: "Use AI to create personalized content and experiences for target audiences.",
      icon: "🎯",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              How We Use AI
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Leveraging artificial intelligence to enhance our creative and marketing processes
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Leveraging AI for Better Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Blueprint Branding Kreatives, we embrace artificial intelligence to enhance our creative and marketing processes. We use AI tools for content analysis, SEO optimization, design inspiration, and data-driven insights that help us deliver more effective campaigns.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AI helps us analyze market trends, optimize content for better performance, and provide personalized solutions that drive results. However, we believe AI complements human creativity rather than replaces it, ensuring every project maintains a personal touch and strategic thinking.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {aiApplications.map((app, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{app.title}</h3>
                  <p className="text-gray-700">{app.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-accent-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our AI Philosophy</h3>
              <p className="text-gray-700 mb-4">
                We view AI as a powerful tool that enhances human creativity and expertise, not a replacement for strategic thinking and personal touch. Our approach combines:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>AI-powered insights and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Human creativity and strategic thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Personalized client relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Data-driven decision making</span>
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
