"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";
import Link from "next/link";
import { useState } from "react";

export default function ContentCreationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    package: "",
    duration: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to Supabase
    console.log("Form submission:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! We'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        package: "",
        duration: "",
        message: "",
        consent: false,
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const seoPackages = [
    {
      name: "Basic SEO Package",
      price: "Ksh. 53,800",
      description: "Essential SEO services for small to mid-sized WordPress business websites",
      features: [
        "On-page, Local, and Technical SEO",
        "Keyword research & SEO strategy",
        "Optimized headers and images",
        "Lead capture forms",
        "Google submission",
        "14 working days delivery",
        "One month support and maintenance",
      ],
    },
    {
      name: "Premium SEO Package",
      price: "Ksh. 107,400",
      description: "All-encompassing SEO solution for large-scale WordPress eCommerce websites",
      features: [
        "On-page, Technical, Local, Product, and Content SEO",
        "Comprehensive SEO audits",
        "WooCommerce or Magento support",
        "Optimized landing pages",
        "Multi-vendor store setup",
        "Three months maintenance and support",
      ],
    },
    {
      name: "Elite SEO Package",
      price: "Custom Quote",
      description: "Tailored SEO package for large-scale WordPress eCommerce websites",
      features: [
        "Unlimited pages and products",
        "All advanced SEO services",
        "Vendor onboarding",
        "Google AdSense integration",
        "Affiliate program creation",
        "Multi-vendor environments",
        "Custom delivery time and support",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Content Creation & Marketing
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              SEO-Optimized Content Creation & Marketing to Maximize Your ROI
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To truly make an impact, your content needs to be SEO-optimized. At Blueprint Branding Kreatives, we specialize in combining content creation with advanced SEO strategies to ensure that your content not only resonates with your audience but also ranks high on search engines like Google.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our SEO-optimized content creation & marketing service ensures that every piece of content—be it blog posts, landing pages, or product descriptions—is tailored to attract both your target audience and search engine algorithms. By using AI-driven tools and advanced keyword research, we craft content that strikes a balance between human-centric storytelling and search engine visibility.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We don't just write content; we write strategic content that's designed to boost engagement, increase traffic, and ultimately drive conversions. Every page we create is built with SEO in mind, ensuring it meets both the technical requirements of search engines and the intent of your audience.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Whether you're looking to improve your organic rankings, engage your visitors with informative content, or position your brand as an authority, our service ensures your content is crafted to achieve your marketing goals. We focus on delivering quality over quantity, ensuring that the content you publish resonates with your audience while meeting all SEO best practices.
                </p>
              </div>

              {/* Why It's Important */}
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                  Why SEO-Optimized Content Creation & Marketing is Important
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Higher Search Rankings</h3>
                    <p className="text-gray-700">
                      SEO-optimized content plays a pivotal role in improving your website's search engine rankings. When your content is structured around relevant keywords and search intent, it signals to search engines that your page provides value to users, leading to higher visibility on search engine result pages (SERPs).
                    </p>
                  </div>
                  <div className="bg-accent-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Greater Reach</h3>
                    <p className="text-gray-700">
                      SEO-optimized content is key to driving organic traffic to your website. Through thorough keyword research and strategic optimization, we ensure that your content ranks for search queries related to your products or services.
                    </p>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Improved Engagement & Conversions</h3>
                    <p className="text-gray-700">
                      Our SEO-optimized content not only ranks well, but it also drives engagement by addressing your audience's pain points and needs. Engaged visitors are more likely to spend more time on your site and take actions like subscribing or making a purchase.
                    </p>
                  </div>
                  <div className="bg-accent-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Competitive Edge</h3>
                    <p className="text-gray-700">
                      With the digital marketplace becoming increasingly competitive, SEO-optimized content gives you an edge over competitors who may not be leveraging SEO effectively. Our service ensures that your content is structured to outperform other content in your industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Makes Us Different */}
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
                  What Makes Our SEO-Optimized Content Creation & Marketing Different
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">AI-Powered Content Strategy</h3>
                    <p className="text-gray-700">
                      We integrate cutting-edge AI tools to enhance content creation and keyword optimization, ensuring that your content aligns with the latest search engine trends and user behavior.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent-500 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Keyword Research & Integration</h3>
                    <p className="text-gray-700">
                      Our process starts with thorough keyword research, identifying the best keywords for your business and industry. We integrate these keywords into your content naturally, ensuring it ranks well without compromising quality.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive Content Strategy</h3>
                    <p className="text-gray-700">
                      We go beyond individual pieces of content. Our service includes strategic content planning and distribution, ensuring your content aligns with your overall digital marketing goals.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent-500 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Content That Converts</h3>
                    <p className="text-gray-700">
                      We understand that SEO isn't just about ranking high—it's about creating content that drives results. Every piece of content we create is designed to resonate with your audience and encourage actions that benefit your business.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Deliver Results */}
              <div className="mb-16 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                  How We Deliver Results
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Tailored Content</h3>
                    <p className="text-gray-700 text-sm">
                      We create content tailored to your brand's voice, target audience, and industry.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">On-Page SEO Optimization</h3>
                    <p className="text-gray-700 text-sm">
                      From meta tags to image alt texts and URL structure, we ensure every technical aspect is optimized.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">Performance Tracking & Analytics</h3>
                    <p className="text-gray-700 text-sm">
                      We continuously track performance, monitoring key metrics like organic traffic, engagement, and conversion rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Packages Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                SEO Pricing & Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the perfect SEO package for your WordPress website or platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {seoPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-8 ${
                    index === 1 ? "border-2 border-primary-600 transform scale-105" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setFormData({ ...formData, package: pkg.name })}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      index === 1
                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                  Get a Quick Quote
                </h2>
                <p className="text-lg text-gray-600">
                  Need help? Get in touch for general inquiries, pricing & packages or training & consultation
                </p>
                <div className="mt-4">
                  <a
                    href="tel:+2540796988686"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (+254) 0796988686
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Your Personal Information
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Provide your basic contact information so that we know how to get in touch with you.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-semibold text-gray-900">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-semibold text-gray-900">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-semibold text-gray-900">
                      Phone/Mobile *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold text-gray-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="package" className="block mb-2 font-semibold text-gray-900">
                    Select a Package *
                  </label>
                  <p className="text-sm text-gray-600 mb-3">See all features</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Select an SEO Package for WordPress websites or platforms
                  </p>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a package</option>
                    <option value="Basic SEO Package">Basic SEO Package - Ksh. 53,800</option>
                    <option value="Premium SEO Package">Premium SEO Package - Ksh. 107,400</option>
                    <option value="Elite SEO Package">Elite SEO Package - Custom Quote</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 font-semibold text-gray-900">
                    Project Duration *
                  </label>
                  <p className="text-sm text-gray-600 mb-3">
                    How long would you prefer your website to be optimized? once/ one-off or continually?
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="duration"
                        value="One-off/ Short-Term SEO - 14 Days"
                        checked={formData.duration === "One-off/ Short-Term SEO - 14 Days"}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      <span className="text-gray-700">One-off/ Short-Term SEO - 14 Days (On-page + Technical + Local SEO)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="duration"
                        value="Long-Term SEO - 3-6 Months"
                        checked={formData.duration === "Long-Term SEO - 3-6 Months"}
                        onChange={handleChange}
                        required
                        className="mr-2"
                      />
                      <span className="text-gray-700">Long-Term SEO - 3 - 6 Months (All-Inclusive SEO Solution)</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-semibold text-gray-900">
                    Tell us a bit more about your request or business needs *
                  </label>
                  <p className="text-sm text-gray-600 mb-3">
                    Provide website link(s) for analysis and a brief introduction about your brand.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    placeholder="Enter your message..."
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to have this website store my submitted information so they can respond to my inquiry *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="py-12 bg-primary-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-6">Explore Our Other Services</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/seo"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                SEO Writing Services
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                eCommerce Services
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                WordPress Website Design Packages
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Google & PPC Advertising
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Graphic Design
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
              >
                Contact us now
              </Link>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
