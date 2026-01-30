"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Printer } from "lucide-react";

const features = [
  "Business Cards & Stationery",
  "Brochures & Flyers",
  "Posters & Banners",
  "Large Format Printing",
  "Digital Printing",
  "Offset Printing",
];

export default function PrintingServicePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-left sm:text-center"
          >
            <div className="flex justify-start sm:justify-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
                <Printer className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900">
              Print Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed [text-align:justify] sm:text-center">
              High-quality digital and offset printing that represents your brand with clarity and
              professionalism—whether it’s business stationery, brochures, or large-format work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Print that looks premium</h2>
                <p className="text-lg text-gray-600 leading-relaxed [text-align:justify] sm:[text-align:left]">
                  We help you choose the right materials and finishes for your brand, then deliver
                  clean, professional print outputs that are consistent with your identity.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed [text-align:justify] sm:[text-align:left]">
                  Need design too? We can design your artwork and prepare print-ready files for a
                  smooth production process.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900">Print deliverables</h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="mt-10 sm:mt-14 flex justify-start sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-accent-500 text-black rounded-lg font-extrabold tracking-wide hover:bg-accent-400 transition-colors"
              >
                Get a Printing Quote
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

