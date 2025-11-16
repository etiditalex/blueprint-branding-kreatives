"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/lib/siteConfig";

export default function WebsitesSection() {
  // Filter only website items (those with actual URLs)
  const websiteItems = portfolioItems.filter(
    (item) => item.url && item.url !== "#" && !item.url.startsWith("#")
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Websites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteItems.map((item) => (
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
                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold px-6 py-3 bg-accent-500 rounded-lg hover:bg-accent-600 transition-colors"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-600 font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  View Live Site →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


