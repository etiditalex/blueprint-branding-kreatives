"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const features = [
  "Logo Design & Brand Identity",
  "Marketing Collaterals",
  "Social Media Graphics",
  "Posters & Banners",
  "Packaging Design",
  "Illustration & Infographics",
];

export default function GraphicDesignServicePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-screen py-20 overflow-hidden flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768985375/top-view-items_1_yfssqq.jpg"
            alt="Graphic design"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Service intro (as per screenshot) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-left sm:text-center"
          >
            <div className="text-accent-500 text-3xl md:text-4xl font-serif italic">
              Our Services
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900">
              Creative Graphic Design
            </h2>

            <div className="mt-6 flex items-center justify-start sm:justify-center">
              <svg
                width="84"
                height="24"
                viewBox="0 0 84 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-accent-500"
              >
                <path
                  d="M12 12c5-7 13-7 18 0M54 12c5-7 13-7 18 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M39 13l3-4 3 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-10 md:mt-12 max-w-5xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed space-y-8 [text-align:justify] sm:text-center">
              <p>
                An effective design reflects and supports your business strategy, sets you apart
                from the competition, engages your customers, and strengthens trust in your brand.
                We offer creative graphic design services for corporates, organisations, SMEs, and
                startups.
              </p>
              <p>
                From posters and social media creatives to marketing collateral and packaging, we
                design visuals that communicate clearly and look premium across print and digital.
                We serve clients from Mombasa, Nyali — Links Road, opposite Kigotho&apos;s Hotel.
              </p>
            </div>

            <ul className="mt-10 max-w-4xl mx-auto text-left text-lg md:text-xl text-gray-600 leading-relaxed list-disc pl-6 space-y-3">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <p className="mt-10 max-w-5xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed [text-align:justify] sm:text-center">
              Please contact us for a tailored proposal and quote on your design project — we’ll be
              delighted to demonstrate our capacity to deliver exceptional results.
            </p>

            <div className="mt-10 text-lg md:text-xl text-gray-600">
              <div>
                Email:{" "}
                <a
                  href="mailto:blueprintbrandingkreatives@gmail.com"
                  className="text-accent-500 hover:text-accent-400 transition-colors"
                >
                  blueprintbrandingkreatives@gmail.com
                </a>
              </div>
              <div className="mt-2">
                Call or WhatsApp on{" "}
                <span className="text-gray-700">
                  <a
                    href="https://wa.me/254780460617"
                    className="hover:text-gray-700 transition-colors"
                  >
                    0780 460 617
                  </a>
                  {" / "}
                  <a
                    href="https://wa.me/254745922163"
                    className="hover:text-gray-700 transition-colors"
                  >
                    0745 922 163
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work CTA (as per screenshot) */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-center">
          <h2 className="text-white font-extrabold uppercase tracking-widest text-4xl md:text-6xl">
            CHECK OUT OUR WORK
          </h2>
          <Link
            href="/about#gallery"
            className="mt-8 inline-block text-accent-500 hover:text-accent-400 transition-colors uppercase tracking-[0.25em]"
          >
            CLICK HERE
          </Link>
        </div>
      </section>

      {/* Quote form (as per screenshot) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-left sm:text-center font-serif italic text-4xl md:text-6xl text-gray-800 leading-tight">
              Get Creative Brand Design Quote
            </h2>

            <form
              className="mt-12 md:mt-16 space-y-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="quote-name" className="sr-only">
                  Name
                </label>
                <input
                  id="quote-name"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                />
              </div>

              <div>
                <label htmlFor="quote-email" className="sr-only">
                  Email
                </label>
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                />
              </div>

              <div>
                <label htmlFor="quote-phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="quote-phone"
                  name="phone"
                  inputMode="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-5 rounded-md font-extrabold tracking-wide hover:bg-black transition-colors"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

