"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] py-20 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768996139/contact-us-communication-support-service-assistance-concept_1_vuq9dw.jpg"
            alt="Contact us"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Contact Section (as per screenshot) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: copy + contact details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="text-lg md:text-xl text-gray-400 leading-relaxed space-y-8">
                <p>
                  Selecting the right marketing agency can make all the difference for your business.
                  So what sets Blueprint Branding Kreatives apart?
                </p>
                <p>
                  Strategic, creative thinking — and in marketing, creativity drives success. Our team
                  blends branding, design, and SEO expertise to deliver campaigns that create real
                  visibility and measurable return on investment (ROI).
                </p>
              </div>

              <div className="mt-14 grid sm:grid-cols-2 gap-x-14 gap-y-14">
                <div>
                  <div className="font-serif italic text-3xl text-gray-900">Our Address</div>
                  <div className="mt-5 text-lg text-gray-400 leading-relaxed">
                    Mombasa, Nyali — Links Road,
                    <br />
                    opposite Kigotho&apos;s Hotel.
                  </div>
                </div>

                <div>
                  <div className="font-serif italic text-3xl text-gray-900">Our Phone</div>
                  <div className="mt-5 text-lg text-gray-400 leading-relaxed space-y-1">
                    <div>
                      Office line:{" "}
                      <a
                        href="tel:+254780460617"
                        className="hover:text-gray-500 transition-colors"
                      >
                        +254 780 460 617
                      </a>
                    </div>
                    <div>
                      WhatsApp Only:{" "}
                      <a
                        href="https://wa.me/254745922163"
                        className="hover:text-gray-500 transition-colors"
                      >
                        +254 745 922 163
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-serif italic text-3xl text-gray-900">Our Email</div>
                  <div className="mt-5 text-lg text-gray-400 leading-relaxed">
                    <a
                      href="mailto:blueprintbrandingkreatives@gmail.com"
                      className="hover:text-gray-500 transition-colors break-words"
                    >
                      blueprintbrandingkreatives@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <div className="font-serif italic text-3xl text-gray-900">Follow Us</div>
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl ml-auto space-y-10"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md px-6 py-5 text-lg text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 resize-none"
                  />
                </div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-100 px-5 py-4 rounded-md"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-base">Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-6 rounded-md font-extrabold tracking-wide hover:bg-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif italic text-4xl md:text-5xl text-gray-900">
              Blueprint Branding Kreatives
            </h2>
            <p className="mt-3 text-lg text-gray-400">Find us on Google Maps</p>
          </div>
        </div>

        {/* Full-width map */}
        <div className="mt-10 w-full overflow-hidden border-y border-black/10">
          <iframe
            title="Blueprint Branding Kreatives location on Google Maps"
            src="https://www.google.com/maps?q=Blueprint%20Branding%20Kreatives&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px] md:h-[560px]"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mt-6">
            <a
              href="https://share.google/dqoa6wuioklVnpJo0"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-[0.25em] text-accent-500 hover:text-accent-400 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

