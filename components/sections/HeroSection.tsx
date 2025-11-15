"use client";

import { useTypingAnimation } from "@/lib/hooks/useTypingAnimation";
import { heroSection } from "@/lib/siteConfig";
import Link from "next/link";

export default function HeroSection() {
  const typingText = useTypingAnimation(heroSection.typingWords, 100, 50, 2000);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden pt-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-white drop-shadow-lg">
          {heroSection.title}
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-100 drop-shadow-md">
          {heroSection.description}
        </p>
        <div className="h-16 sm:h-20 flex items-center justify-center mb-8">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-400 drop-shadow-lg">
            {typingText}
            <span className="animate-pulse text-accent-300">|</span>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {heroSection.ctaButtons.map((button) => (
            <Link
              key={button.text}
              href={button.href}
              className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
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
    </section>
  );
}

