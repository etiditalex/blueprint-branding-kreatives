"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary-900 overflow-hidden pt-24">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <h1 className="text-[20rem] font-black text-white select-none">CREATIVE</h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-20">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              MAKE YOUR{" "}
              <span className="text-accent-500">BRAND</span>{" "}
              <br />
              MEMORABLE
            </h1>

            <div className="space-y-2 text-lg md:text-xl text-white/90">
              <p>Best Branding & Design Company in the Industry!!!</p>
              <p>Let us make your brand stand out!</p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-500 text-white font-bold text-lg rounded-lg hover:bg-accent-500 transition-all transform hover:scale-105 shadow-lg"
            >
              GET FREE CONSULTATION
            </Link>
          </motion.div>

          {/* Right Side - Lightbulb Icon */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent-500/30 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Lightbulb */}
              <div className="relative">
                <Lightbulb className="w-64 h-64 md:w-80 md:h-80 text-accent-500 drop-shadow-2xl" fill="currentColor" />
                
                {/* Inner Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-400/50 rounded-full blur-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900 to-transparent"></div>
    </section>
  );
}
