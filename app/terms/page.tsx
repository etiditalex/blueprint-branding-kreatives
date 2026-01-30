"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="pt-24 bg-white">
      <section className="py-16 md:py-20">
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
              Terms &amp; Conditions
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
            className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-8 [text-align:justify] sm:[text-align:left]"
          >
            <p>
              These Terms &amp; Conditions govern your use of the Blueprint Branding Kreatives
              website and any services you request from us. By using this website, you agree to these
              terms.
            </p>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Services</h2>
              <p>
                We provide branding, design, web design &amp; SEO, digital marketing, print solutions,
                and signage solutions. Any project scope, timeline, and deliverables will be agreed
                in writing before work begins.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Intellectual property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Website content (text, graphics, logos) is owned by Blueprint Branding Kreatives
                  unless otherwise stated.
                </li>
                <li>
                  Client work ownership and usage rights are defined by the project agreement and
                  invoice terms.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Payments &amp; refunds</h2>
              <p>
                Payment terms depend on the service and will be outlined in your quote/invoice. Where
                applicable, deposits may be required before commencement. Refunds (if any) are handled
                on a case-by-case basis based on work completed.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Limitation of liability</h2>
              <p>
                We aim to provide accurate information and reliable services, but we do not guarantee
                that the website will always be error-free or uninterrupted. To the maximum extent
                permitted by law, we are not liable for indirect or consequential losses.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Privacy</h2>
              <p>
                Your use of this website is also governed by our{" "}
                <Link href="/privacy" className="text-accent-500 hover:text-accent-400">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
              <p>
                Questions about these terms? Email{" "}
                <a
                  href="mailto:blueprintbrandingkreatives@gmail.com"
                  className="text-accent-500 hover:text-accent-400 break-words"
                >
                  blueprintbrandingkreatives@gmail.com
                </a>{" "}
                or visit our{" "}
                <Link href="/contact" className="text-accent-500 hover:text-accent-400">
                  Contact page
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

