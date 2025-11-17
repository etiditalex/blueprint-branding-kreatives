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
  featured?: boolean;
}

export default function PortfolioPreviewSection() {
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
      const response = await fetch(`/api/portfolio?featured=true&_t=${timestamp}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });

      if (response.ok) {
        const data = await response.json();
        // Get first 6 featured items
        setItems((data.data || []).slice(0, 6));
      }
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return null; // Don't show section if no items
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our successful projects and creative solutions
          </p>
        </div>

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
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
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
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {item.description}
                  </p>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {item.url && item.url !== "#" && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                  >
                    View Project →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
