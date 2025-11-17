"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  image_url: string;
  url?: string;
  technologies?: string[];
}

export default function WebsitesSection() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    // Refresh every 30 seconds to catch updates
    const interval = setInterval(fetchItems, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchItems = async () => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/portfolio?category=Real Estate&_t=${timestamp}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });

      if (response.ok) {
        const data = await response.json();
        // Filter only website items (those with actual URLs)
        const websiteItems = (data.data || []).filter(
          (item: PortfolioItem) => item.url && item.url !== "#" && !item.url.startsWith("#")
        );
        setItems(websiteItems);
      }
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
            Our Websites
          </h2>
          <p className="text-center text-gray-500">No website portfolio items available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Websites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={item.url || "#"}
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
                {item.description && (
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                )}
                {item.technologies && item.technologies.length > 0 && (
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
                )}
                {item.url && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-semibold text-sm"
                  >
                    View Live Site →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
