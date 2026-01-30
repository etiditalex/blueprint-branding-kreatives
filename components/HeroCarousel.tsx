"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  cta: string;
  ctaLink: string;
  image?: string;
  services?: string[];
  overlay: string;
  icon?: LucideIcon;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Transform Your Brand with Creative Excellence",
    subtitle: "Blueprint Branding Kreatives",
    tag: "Creative Solutions",
    description:
      "We provide strategic, creative, and technical expertise to offer end-to-end solutions in Design, Branding, Digital & Offset Printing, and Indoor & Outdoor Sign Solutions.",
    cta: "Get Started",
    ctaLink: "/contact",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
    overlay: "from-primary-900/90",
  },
  {
    id: 2,
    title: "Graphic Design & Branding Solutions",
    subtitle: "Make Your Brand Memorable",
    tag: "Visual Identity",
    description:
      "Creative visual solutions that capture your brand essence. From logos to comprehensive brand identity, we design visuals that make a lasting impact and resonate with your target audience.",
    cta: "Explore Services",
    ctaLink: "/services#graphic-design",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg",
    services: ["Logo Design", "Brand Identity", "Marketing Materials"],
    overlay: "from-primary-800/85",
  },
  {
    id: 3,
    title: "Digital Marketing & Web Solutions",
    subtitle: "Boost Your Online Presence",
    tag: "Digital Excellence",
    description:
      "Strategic digital marketing campaigns and modern web design to enhance your online presence, engage your audience, and drive business growth through data-driven strategies.",
    cta: "View Services",
    ctaLink: "/services#digital-marketing",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_19_io5nbn.jpg",
    services: ["Web Design", "SEO Optimization", "Social Media Marketing"],
    overlay: "from-primary-800/85",
  },
  {
    id: 4,
    title: "Print & Sign Solutions",
    subtitle: "Complete Visual Communication",
    tag: "Print & Signage",
    description:
      "High-quality printing services and custom signage solutions for all your business needs. From business cards to large format prints and storefront signs, we deliver professional results.",
    cta: "Learn More",
    ctaLink: "/services#printing",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_17_ivt6x3.jpg",
    services: ["Digital Printing", "Offset Printing", "Custom Signage"],
    overlay: "from-primary-800/85",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-24">
      <AnimatePresence mode="wait" custom={direction}>
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Left Side - Text Content */}
                  <div className={`relative bg-gradient-to-br ${slide.overlay} to-primary-900/95 flex items-center p-6 md:p-10 lg:p-12 overflow-y-auto max-h-screen`}>
                    <div className="relative z-10 max-w-2xl w-full space-y-4 md:space-y-5 my-auto">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        <span className="px-3 py-1.5 md:px-4 bg-accent-500/20 text-accent-300 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">
                          {slide.subtitle}
                        </span>
                        <span className="px-3 py-1.5 md:px-4 bg-white/10 text-white rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">
                          {slide.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                        {slide.description}
                      </p>

                      {/* Services List (if available) */}
                      {slide.services && (
                        <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                          {slide.services.map((service, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-white/80"
                            >
                              <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></div>
                              <span className="text-xs md:text-sm lg:text-base">{service}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="pt-4 md:pt-6">
                        <Link
                          href={slide.ctaLink}
                          className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-accent-500 text-white rounded-lg font-bold text-base md:text-lg hover:bg-accent-600 transition-all transform hover:scale-105 shadow-xl"
                        >
                          {slide.cta}
                          <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                        </Link>
                      </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-grid-pattern"></div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative bg-gray-900 overflow-hidden">
                    {slide.image ? (
                      <>
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-primary-900/30 to-transparent"></div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-900">
                        {slide.icon && (
                          <div className="relative">
                            <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-3xl"></div>
                            <div className="relative bg-accent-500/10 backdrop-blur-sm p-12 rounded-3xl border border-accent-500/20">
                              <slide.icon className="w-32 h-32 text-accent-500" />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-accent-500"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

