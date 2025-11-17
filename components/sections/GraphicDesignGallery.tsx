"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  url?: string;
}

export default function GraphicDesignGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      const response = await fetch(`/api/portfolio?category=Graphic Design&_t=${timestamp}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });

      if (response.ok) {
        const data = await response.json();
        // Filter only graphic design items (those without actual URLs or with #)
        const graphicDesignItems = (data.data || []).filter(
          (item: PortfolioItem) => !item.url || item.url === "#" || item.url.startsWith("#")
        );
        setItems(graphicDesignItems);
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
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
            Graphic Design Portfolio
          </h2>
          <p className="text-center text-gray-500">No graphic design portfolio items available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
          Graphic Design Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-100 rounded-lg"
              onClick={() => setSelectedImage(item.image_url)}
            >
              <Image
                src={item.image_url}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/80 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-white/90 text-xs">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Portfolio Image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              unoptimized
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
