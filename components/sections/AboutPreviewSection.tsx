import Link from "next/link";
import { aboutSection, philosophySection } from "@/lib/siteConfig";

export default function AboutPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gray-900">
            {aboutSection.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            {aboutSection.content.substring(0, 300)}...
          </p>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {philosophySection.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {philosophySection.content.substring(0, 250)}...
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

