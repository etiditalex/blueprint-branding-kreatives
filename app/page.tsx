"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import PastWorkCarousel from "@/components/PastWorkCarousel";
import PartnersLogoCarousel from "@/components/PartnersLogoCarousel";

export default function Home() {
  const [seoLeadForm, setSeoLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSeoLeadSubmitting, setIsSeoLeadSubmitting] = useState(false);
  const [isSeoLeadSubmitted, setIsSeoLeadSubmitted] = useState(false);

  const [trainingEnquiryForm, setTrainingEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    workshop: "",
  });
  const [isTrainingEnquirySubmitting, setIsTrainingEnquirySubmitting] = useState(false);
  const [isTrainingEnquirySubmitted, setIsTrainingEnquirySubmitted] = useState(false);

  const handleSeoLeadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoLeadForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTrainingEnquiryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTrainingEnquiryForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSeoLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSeoLeadSubmitting(true);

    // Simulate submission (wire to API when ready)
    setTimeout(() => {
      setIsSeoLeadSubmitting(false);
      setIsSeoLeadSubmitted(true);
      setSeoLeadForm({
        name: "",
        email: "",
        phone: "",
      });

      setTimeout(() => setIsSeoLeadSubmitted(false), 5000);
    }, 1200);
  };

  const handleTrainingEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTrainingEnquirySubmitting(true);

    // Simulate submission (wire to API when ready)
    setTimeout(() => {
      setIsTrainingEnquirySubmitting(false);
      setIsTrainingEnquirySubmitted(true);
      setTrainingEnquiryForm({
        name: "",
        phone: "",
        email: "",
        workshop: "",
      });

      setTimeout(() => setIsTrainingEnquirySubmitted(false), 5000);
    }, 1200);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Intro Section (matches screenshot style) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
            </div>

            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] text-gray-900/80">
              WELCOME TO BLUEPRINT BRANDING KREATIVES
            </p>

            <h2 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08]">
              A Strategic Branding Agency
              <br />
              delivering High Value
              <br />
              Results
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Centered Intro Copy Section (matches screenshot style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Welcome to Blueprint Branding Kreatives, a leading branding and digital marketing
              agency based in Mombasa, Nyali — Links Road, opposite Kigotho&apos;s Hotel. It’s rare
              to find a creative firm that doesn’t describe itself as “passionate”, which can make
              identifying the right partner for your business a challenging task.
            </p>

            <p className="mt-12 text-lg md:text-xl text-gray-400 leading-relaxed">
              Strategic branding combines art, research, and execution—and we’re well-practiced. We
              use our experience and market understanding to differentiate your brand, define the
              most effective routes to market, and optimise lead generation and conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Process (3-column, no top icons) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">Our Process</h2>
          </motion.div>

          <div className="mt-16 grid lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                label: "PRE-LAUNCH",
                title: "Marketing Strategy",
                description:
                  "We work with you to clarify your goals, audience, and positioning. A focused strategy helps your brand stand out and sets the direction for messaging, design, and conversion.",
                number: "01",
              },
              {
                label: "BRAND DESIGN",
                title: "Branding, Websites,\nPhotography",
                description:
                  "We prepare your business for the market by building a strong identity and designing a modern website. We also support content creation—including photography—to ensure campaigns succeed.",
                number: "02",
              },
              {
                label: "LAUNCH",
                title: "Digital Marketing",
                description:
                  "We optimise digital platforms for awareness, lead generation, and conversions. Then we keep your business winning by executing and improving the marketing strategy over time.",
                number: "03",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="text-center"
              >
                <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                  {item.label}
                </p>

                <h3 className="mt-6 text-3xl md:text-4xl font-extrabold text-gray-900 whitespace-pre-line">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-10 flex flex-col items-center">
                  <span className="h-14 w-1.5 bg-accent-500/70" />
                  <span className="mt-4 text-base font-semibold tracking-[0.2em] text-gray-900">
                    {item.number}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Work Carousel (full width) */}
      <PastWorkCarousel />

      {/* Digital Marketing Excellence (headline section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
            </div>

            <p className="text-xs md:text-sm font-semibold tracking-[0.45em] text-gray-900/80">
              DIGITAL MARKETING EXCELLENCE
            </p>

            <h2 className="mt-10 text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08]">
              A Comprehensive Approach to
              <br />
              Strategic Marketing with 7 Years
              <br />
              Experience
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Step 1 (image left, content right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: full-height image */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg"
                  alt="Graphic design poster"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-transparent" />
          </div>

          {/* Right: centered content */}
          <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 1
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Marketing Strategy
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                Start with a plan
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                Strategic Marketing is anything but the act of randomly spending budgets and
                resources on trial-and-error campaigns. A marketing plan is critical.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 2 (content left, image right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: centered content */}
          <div className="order-2 lg:order-1 px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 2
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Creative Writing Services
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                Content Marketing Strategy
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                Content is King! The success of other marketing projects—brand positioning, lead
                generation, and SEO—depends on the content strategy. We create relevant, engaging,
                unique, searchable, and powerful content for your brand.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: full-height image */}
          <div className="order-1 lg:order-2 relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768908922/content-concept_1_eyoqeg.jpg"
                  alt="Content marketing illustration"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-primary-900/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Step 3 (image left, content right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: full-height image */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp"
                  alt="Brand design portfolio poster"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-transparent" />
          </div>

          {/* Right: centered content */}
          <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 3
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Creative Brand Design
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                Next, your branding
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                An effective brand sets you apart from the competition and attracts more clients.
                We design your marketing materials and everything your business needs to present
                itself to the market and win.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 4 (content left, image right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: centered content */}
          <div className="order-2 lg:order-1 px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 4
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Website Design &amp; Development
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                Next, your website
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                Most of your marketing efforts are directed to your website, so it’s crucial that
                it’s beautifully designed and professionally developed to attract, retain, and
                convert visitors into clients. Blueprint Branding Kreatives specializes in just
                that.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: full-height image */}
          <div className="order-1 lg:order-2 relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            {/* Inner padded area so the full image stays visible */}
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768909627/3562984_wkh3a5.jpg"
                  alt="Website and marketing illustration"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-primary-900/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Step 5 (image left, content right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: full-height image */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768910394/man-taking_1_tthbuw.jpg"
                  alt="Photography and videography"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-transparent" />
          </div>

          {/* Right: centered content */}
          <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 5
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Photography &amp; Videography Studio
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                Next, some good photos
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                The quality of your photos and videos directly impact the success of your digital
                marketing campaigns. A creative approach here is paramount. The world has also gone
                video first, so needless to say that you need some Marketing Intelligence magic.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 6 (content left, image right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: centered content */}
          <div className="order-2 lg:order-1 px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 6
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Publishing House
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                Next, Publishing Solutions
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                If you are looking for a great publisher for your magazine, book, newsletter, or
                annual report, you&apos;ll be pleased to know that we offer unparalleled publishing
                solutions. Our heavy investment in this division avails you the right team and
                marketing resources for your publication.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: full-height image */}
          <div className="order-1 lg:order-2 relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768911070/front-view-specialized_t0bphp.jpg"
                  alt="Publishing and marketing materials"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-primary-900/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Step 7 (image left, content right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: full-height image */}
          <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768911529/advisory-board-members_mhvahl.jpg"
                  alt="Digital marketing team meeting"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-transparent" />
          </div>

          {/* Right: centered content */}
          <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 7
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Digital Marketing
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                You&apos;re now good to go...
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                As a leading full service Digital Marketing Agency, we build and manage your online
                brand presence, captivate your audience, and help you reach new markets. Blueprint
                Branding Kreatives is your creative digital partner driving cost-effective results to
                fuel your growth.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Step 8 (content left, image right) */}
      <section className="bg-white w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left: centered content */}
          <div className="order-2 lg:order-1 px-6 sm:px-10 lg:px-16 py-16 lg:py-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl mx-auto text-center"
            >
              <div className="flex justify-center mb-7">
                <span className="h-12 w-1.5 bg-accent-500 rounded-full" />
              </div>

              <p className="text-sm font-semibold tracking-[0.25em] text-accent-500">
                STEP 8
              </p>

              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-accent-500">
                Media &amp; Advertising
              </h3>

              <p className="mt-4 text-xl md:text-2xl text-gray-500">
                Get people talking
              </p>

              <p className="mt-10 text-lg md:text-xl text-gray-400 leading-relaxed">
                If you are going to invest in advertising, it is best to let a professional
                marketing agency handle it for you, to ensure that both the message and the
                platform are on point for maximum ROI.
              </p>

              <Link
                href="/services"
                className="mt-10 inline-flex items-center justify-center text-accent-500 hover:text-accent-600 font-semibold tracking-wide"
              >
                Read more
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: full-height image */}
          <div className="order-1 lg:order-2 relative w-full h-[360px] sm:h-[460px] lg:h-[760px] bg-white">
            <div className="absolute inset-0 p-6 sm:p-8 lg:p-10">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768911945/blogger-using_1_xtoag6.jpg"
                  alt="Media and advertising planning"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-primary-900/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* SEO Lead Capture (matches screenshot style) */}
      <section className="py-20 bg-black w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[0.08em] uppercase leading-none">
              <span className="block md:whitespace-nowrap">
                Is Your Website Ranking on 1st Page
              </span>
              <span className="block md:whitespace-nowrap">of Google?</span>
            </h2>

            <p className="mt-6 text-sm md:text-base font-semibold tracking-[0.25em] text-accent-500 uppercase">
              Grow traffic &amp; increase revenue with marketing intelligence!
            </p>

            <p className="mt-8 text-base md:text-lg text-white/75 leading-relaxed max-w-4xl mx-auto">
              SEO is the best way to get more high-quality website traffic and generate more leads.
              Request a proposal from the Marketing Intelligence search optimization experts today!
            </p>

            <form
              onSubmit={handleSeoLeadSubmit}
              className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch max-w-5xl mx-auto"
            >
              <div className="md:col-span-1">
                <label htmlFor="seo-lead-name" className="sr-only">
                  Name
                </label>
                <input
                  id="seo-lead-name"
                  name="name"
                  required
                  value={seoLeadForm.name}
                  onChange={handleSeoLeadChange}
                  placeholder="Name"
                  className="w-full h-14 rounded-none bg-transparent border border-white/25 px-6 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="seo-lead-email" className="sr-only">
                  Email
                </label>
                <input
                  id="seo-lead-email"
                  name="email"
                  type="email"
                  required
                  value={seoLeadForm.email}
                  onChange={handleSeoLeadChange}
                  placeholder="Email"
                  className="w-full h-14 rounded-none bg-transparent border border-white/25 px-6 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="seo-lead-phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="seo-lead-phone"
                  name="phone"
                  type="tel"
                  required
                  value={seoLeadForm.phone}
                  onChange={handleSeoLeadChange}
                  placeholder="Phone Number"
                  className="w-full h-14 rounded-none bg-transparent border border-white/25 px-6 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500/60"
                />
              </div>

              <button
                type="submit"
                disabled={isSeoLeadSubmitting}
                className="h-14 rounded-none bg-accent-500 hover:bg-accent-600 text-white font-extrabold tracking-[0.2em] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSeoLeadSubmitting ? "Sending..." : "Send"}
              </button>

              {isSeoLeadSubmitted && (
                <div className="md:col-span-4 text-center text-accent-200">
                  Thanks! We&apos;ll get back to you shortly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <PartnersLogoCarousel
        title="OUR PARTNERS"
        subtitle="Partners we’ve worked with and collaborated with"
        logos={[
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916091/patrners_8_jfohuq.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916086/patrners_7_lmiutv.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916085/patrners_6_mgsndr.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916085/patrners_12_c3vw7x.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916085/patrners_10_ic2qxw.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916083/patrners_9_cle6sx.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916082/patrners_5_lhyn9i.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916081/patrners_13_wisnih.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916080/patrners_11_m5g0ky.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768915280/PAVI_LOGO_REBRAND_c81iah.png",
        ]}
        speedSeconds={40}
      />

      {/* Connect With Us (headline section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="flex justify-center mb-10">
              <span className="h-16 w-1.5 bg-accent-500 rounded-full" />
            </div>

            <p className="text-xs md:text-sm font-semibold tracking-[0.65em] text-gray-900/80">
              CONNECT WITH US
            </p>

            <h2 className="mt-10 text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05]">
              Work with The Most Sought-After
              <br />
              Branding &amp; SEO Strategists
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Digital Workshops + Training Enquiry (matches screenshot style) */}
      <section className="py-20 w-full relative overflow-hidden">
        {/* Background image (full width) */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768911945/blogger-using_1_xtoag6.jpg"
            alt="Workshop background"
            fill
            className="object-cover object-center"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-900/45 to-primary-900/55" />
        </div>

        {/* Centered card (previous design) */}
        <div className="relative z-10 min-h-[640px] lg:min-h-[560px] flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
            <div className="w-full max-w-6xl mx-auto bg-white rounded-[22px] shadow-2xl border border-black/5 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                  {/* Left: Express interest */}
                  <div className="p-10 sm:p-12 lg:p-14 flex flex-col items-center text-center">
                    <p className="text-xs md:text-sm font-semibold tracking-[0.45em] text-accent-500">
                      EXPRESS INTEREST
                    </p>

                    <h3 className="mt-8 text-4xl md:text-5xl font-extrabold text-gray-900">
                      Digital Workshops
                    </h3>

                    <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-md">
                      Express your interest in attending our digital marketing workshops. From training to
                      troubleshooting, these are game-changing for individuals and corporate teams looking
                      to up their digital marketing game!
                    </p>

                    <Link
                      href="/services"
                      className="mt-12 inline-flex items-center justify-center px-10 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-extrabold tracking-[0.2em] uppercase"
                    >
                      Read more
                    </Link>
                  </div>

                  {/* Right: Training enquiry form */}
                  <div className="p-10 sm:p-12 lg:p-14 border-t border-black/5 lg:border-t-0 lg:border-l border-black/5">
                    <p className="text-xs md:text-sm font-semibold tracking-[0.45em] text-accent-500 text-center">
                      TRAINING ENQUIRY
                    </p>

                    <form onSubmit={handleTrainingEnquirySubmit} className="mt-10 space-y-6 max-w-lg mx-auto">
                      <div>
                        <label htmlFor="training-name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="training-name"
                          name="name"
                          required
                          value={trainingEnquiryForm.name}
                          onChange={handleTrainingEnquiryChange}
                          placeholder="Name"
                          className="w-full h-14 rounded-xl bg-white border border-black/10 px-6 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
                        />
                      </div>

                      <div>
                        <label htmlFor="training-phone" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          id="training-phone"
                          name="phone"
                          type="tel"
                          required
                          value={trainingEnquiryForm.phone}
                          onChange={handleTrainingEnquiryChange}
                          placeholder="Phone Number"
                          className="w-full h-14 rounded-xl bg-white border border-black/10 px-6 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
                        />
                      </div>

                      <div>
                        <label htmlFor="training-email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="training-email"
                          name="email"
                          type="email"
                          required
                          value={trainingEnquiryForm.email}
                          onChange={handleTrainingEnquiryChange}
                          placeholder="Email"
                          className="w-full h-14 rounded-xl bg-white border border-black/10 px-6 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
                        />
                      </div>

                      <div>
                        <label htmlFor="training-workshop" className="sr-only">
                          Select Workshop
                        </label>
                        <select
                          id="training-workshop"
                          name="workshop"
                          required
                          value={trainingEnquiryForm.workshop}
                          onChange={handleTrainingEnquiryChange}
                          className="w-full h-14 rounded-xl bg-white border border-black/10 px-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
                        >
                          <option value="">Select Workshop</option>
                          <option value="seo">SEO Workshop</option>
                          <option value="digital-marketing">Digital Marketing Workshop</option>
                          <option value="social-media">Social Media Marketing Workshop</option>
                          <option value="content">Content Marketing Workshop</option>
                          <option value="ads">Ads &amp; Media Buying Workshop</option>
                        </select>
                      </div>

                      {isTrainingEnquirySubmitted && (
                        <div className="text-center text-accent-600 font-semibold">
                          Thanks! We&apos;ll contact you shortly.
                        </div>
                      )}

                      <div className="pt-2 flex justify-center">
                        <button
                          type="submit"
                          disabled={isTrainingEnquirySubmitting}
                          className="inline-flex items-center justify-center px-12 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-extrabold tracking-[0.2em] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {isTrainingEnquirySubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

