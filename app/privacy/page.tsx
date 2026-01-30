"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 bg-white">
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-left sm:text-center"
          >
            <div className="text-sm uppercase tracking-[0.35em] text-accent-500 font-semibold">
              Legal
            </div>
            <h1 className="mt-5 font-serif italic text-4xl md:text-5xl text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-12 sm:pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-8 [text-align:justify] sm:[text-align:left]"
          >
            <p>
              Blueprint Branding Kreatives (“we”, “our”, “us”) respects your privacy and is committed
              to protecting your personal information. This Privacy Policy explains what we collect,
              how we use it, and the choices you have.
            </p>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Information we collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details you submit (name, email, phone number, message).</li>
                <li>Basic usage data (pages visited, device/browser info) for analytics.</li>
                <li>Any information you choose to share with us during a consultation.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">How we use your information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to enquiries and provide requested services.</li>
                <li>To improve our website experience and content.</li>
                <li>To communicate service updates when you request them.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
              <p>
                We may use cookies to improve site performance and measure traffic. You can control
                cookies through your browser settings. See our{" "}
                <Link href="/cookies" className="text-accent-500 hover:text-accent-400">
                  Cookie Policy
                </Link>{" "}
                for details.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Your choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can request access, correction, or deletion of your information.</li>
                <li>You can opt out of non-essential communications at any time.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
              <p>
                For privacy questions, email{" "}
                <a
                  href="mailto:blueprintbrandingkreatives@gmail.com"
                  className="text-accent-500 hover:text-accent-400 break-words"
                >
                  blueprintbrandingkreatives@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:+254780460617" className="text-accent-500 hover:text-accent-400">
                  +254 780 460 617
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

