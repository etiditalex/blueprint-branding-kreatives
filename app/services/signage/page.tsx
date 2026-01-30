"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Signpost } from "lucide-react";

const features = [
  "Storefront Signs",
  "Indoor Signage",
  "Vehicle Branding & Wraps",
  "Banners & Flags",
  "LED Signs",
  "Custom Fabrication",
];

export default function SignSolutionsServicePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 shadow-lg">
                <Signpost className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="mt-8 text-5xl md:text-6xl font-bold text-gray-900">
              Sign Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Indoor and outdoor signage that boosts visibility and makes a strong first impression.
              From storefront branding to wayfinding and LED signs, we help you stand out in real
              spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
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
                <h2 className="text-4xl font-bold text-gray-900">Visibility that lasts</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We design and produce signage that aligns with your brand identity and works in
                  the real world—readable, durable, and professionally finished.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you need a single storefront sign or a full signage system, we’ll guide
                  you from design to fabrication to installation-ready delivery.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900">Signage services</h3>
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

            <div className="mt-14 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-accent-500 text-black rounded-lg font-extrabold tracking-wide hover:bg-accent-400 transition-colors"
              >
                Request a Signage Quote
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

