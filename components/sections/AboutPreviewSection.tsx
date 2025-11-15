import Link from "next/link";
import { aboutSection, philosophySection } from "@/lib/siteConfig";

export default function AboutPreviewSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
              {aboutSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {aboutSection.content.substring(0, 300)}...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                {philosophySection.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {philosophySection.content.substring(0, 250)}...
              </p>
            </div>

            <div className="group bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-white transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mb-6">
                ✨
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-primary-100 leading-relaxed">
                We combine creativity with strategy, technology with human insight, and innovation with proven methods to deliver exceptional results that drive your business forward.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Learn More About Us</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
