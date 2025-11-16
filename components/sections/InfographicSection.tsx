"use client";

import Image from "next/image";
import { useState } from "react";

const infographicData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197552/Graphic_designs_7_m3sfez.jpg",
    title: "Brand Identity",
    description: "Creating memorable brand identities that resonate with your audience",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197551/Graphic_designs_1_iliqmd.jpg",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive results",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_10_ozivar.jpg",
    title: "Web Design",
    description: "Modern, responsive websites that convert visitors into customers",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197552/Graphic_designs_8_m0aa8f.jpg",
    title: "Creative Solutions",
    description: "Innovative design solutions tailored to your business needs",
  },
];

export default function InfographicSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary-700">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Visual Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our creative work and design expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infographicData.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-60"
                  }`}
                />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg mb-2">
                    {item.title}
                  </h3>
                  <p
                    className={`text-white/90 text-sm transition-all duration-500 ${
                      hoveredIndex === index
                        ? "opacity-100 max-h-20"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Shine Effect */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


