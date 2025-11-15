"use client";

import { useTypingAnimation } from "@/lib/hooks/useTypingAnimation";
import { heroSection } from "@/lib/siteConfig";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  const typingText = useTypingAnimation(heroSection.typingWords, 100, 50, 2000);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden pt-24"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 4c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-59-9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM60 91c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM68 41c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm15 5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight">
              {heroSection.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-100 drop-shadow-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {heroSection.description}
            </p>
            
            <div className="h-20 sm:h-24 flex items-center justify-center lg:justify-start mb-10">
              <div className="relative">
                <span className="text-3xl sm:text-4xl lg:text-6xl font-bold text-accent-300 drop-shadow-2xl bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                  {typingText}
                </span>
                <span className="animate-pulse text-accent-300 ml-2">|</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              {heroSection.ctaButtons.map((button, index) => (
                <Link
                  key={button.text}
                  href={button.href}
                  className={`group relative px-10 py-5 font-bold rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-110 ${
                    index === 0
                      ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700"
                      : "bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50"
                  }`}
                >
                  <span className="relative z-10">{button.text}</span>
                  {index === 0 && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/80 font-medium">Scroll</span>
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
