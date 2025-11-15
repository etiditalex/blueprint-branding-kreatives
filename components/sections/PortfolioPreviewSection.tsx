import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/lib/siteConfig";

export default function PortfolioPreviewSection() {
  const featuredItems = portfolioItems.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our successful projects in web design, branding, and digital marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-600 font-semibold">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

