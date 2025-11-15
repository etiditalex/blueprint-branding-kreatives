import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Our Team - Blueprint Branding Kreatives",
  description: "Meet the talented team behind Blueprint Branding Kreatives.",
};

export default function TeamPage() {
  const teamRoles = [
    {
      role: "Designers",
      description: "Creative professionals who bring your brand vision to life with stunning visuals and designs.",
      icon: "🎨",
    },
    {
      role: "Developers",
      description: "Technical experts who build robust, scalable websites and digital solutions.",
      icon: "💻",
    },
    {
      role: "Marketers",
      description: "Strategic marketers who develop and execute campaigns that drive results.",
      icon: "📈",
    },
    {
      role: "Strategists",
      description: "Business strategists who help you achieve your goals with data-driven insights.",
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
              Our Team
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Meet the experts behind Blueprint Branding Kreatives
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Our Expert Team</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our team consists of talented designers, developers, marketers, and strategists who are passionate about creating exceptional results for our clients. Each team member brings unique expertise and creativity to every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're committed to continuous learning and staying updated with the latest trends and technologies in digital marketing, design, and branding to ensure we deliver cutting-edge solutions. Our collaborative approach ensures that every project benefits from diverse perspectives and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {teamRoles.map((role, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{role.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{role.role}</h3>
                  <p className="text-gray-700">{role.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto bg-accent-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What Makes Our Team Special</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Years of combined experience</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Diverse skill sets and expertise</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Passion for innovation and creativity</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Commitment to client success</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Continuous learning and development</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent-600 mr-3 mt-1">✓</span>
                  <span>Collaborative and supportive culture</span>
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
