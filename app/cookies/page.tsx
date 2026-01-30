"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="pt-24 bg-white">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-sm uppercase tracking-[0.35em] text-accent-500 font-semibold">
              Legal
            </div>
            <h1 className="mt-5 font-serif italic text-4xl md:text-5xl text-gray-900">
              Cookie Policy
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-8"
          >
            <p>
              Cookies are small text files stored on your device when you visit a website. They help
              websites work properly and improve your experience.
            </p>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How we use cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To remember basic preferences (where applicable).</li>
                <li>To understand website traffic and improve performance.</li>
                <li>To measure which pages and content are most helpful.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Managing cookies</h2>
              <p>
                You can disable or delete cookies via your browser settings. Note that some site
                features may not work as expected if cookies are disabled.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Learn more</h2>
              <p>
                For more details on how we handle personal data, see our{" "}
                <Link href="/privacy" className="text-accent-500 hover:text-accent-400">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

