"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const infographicImages = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197550/Graphic_designs_22_xvkvbw.jpg",
    title: "Creative Branding Solutions",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197550/Graphic_designs_21_cmr8zs.jpg",
    title: "Digital Marketing Excellence",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197550/Graphic_designs_6_nmbohn.jpg",
    title: "Web Design Innovation",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197551/Graphic_designs_2_hcpb3l.jpg",
    title: "Strategic Visual Communication",
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197551/Graphic_designs_4_b2qihj.jpg",
    title: "Brand Identity Development",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % infographicImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? infographicImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === infographicImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {infographicImages.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-2xl"
                priority={index === 0}
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl" />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {infographicImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

