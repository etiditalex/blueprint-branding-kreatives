"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "TechStart Solutions",
    industry: "Technology",
    logo: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
    testimonial:
      "Blueprint Branding Kreatives transformed our brand identity completely. Their creative approach and attention to detail helped us stand out in a competitive market.",
    rating: 5,
    project: "Complete Brand Identity & Web Design",
  },
  {
    id: 2,
    name: "GreenLeaf Organics",
    industry: "Retail",
    logo: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
    testimonial:
      "Working with Blueprint was a game-changer for our business. Their digital marketing strategies increased our online presence significantly.",
    rating: 5,
    project: "Digital Marketing & Social Media",
  },
  {
    id: 3,
    name: "Urban Spaces Realty",
    industry: "Real Estate",
    logo: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
    testimonial:
      "The team at Blueprint understood our vision perfectly. Their graphic design work and print materials have elevated our brand image tremendously.",
    rating: 5,
    project: "Graphic Design & Print Solutions",
  },
  {
    id: 4,
    name: "Culinary Delights",
    industry: "Food & Beverage",
    logo: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
    testimonial:
      "From logo design to signage, Blueprint delivered exceptional results. Our storefront looks amazing and attracts more customers daily.",
    rating: 5,
    project: "Branding & Sign Solutions",
  },
  {
    id: 5,
    name: "FitLife Gym",
    industry: "Fitness",
    logo: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
    testimonial:
      "Blueprint's comprehensive branding solution helped us establish a strong presence in the fitness industry. Highly recommended!",
    rating: 5,
    project: "Complete Branding Package",
  },
  {
    id: 6,
    name: "EduTech Academy",
    industry: "Education",
    logo: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
    testimonial:
      "The web design and SEO services provided by Blueprint have significantly improved our online visibility and student enrollment.",
    rating: 5,
    project: "Web Design & SEO Optimization",
  },
];

const stats = [
  { number: "200+", label: "Happy Clients" },
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "15+", label: "Years of Experience" },
];

export default function Clients() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Clients</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're proud to work with businesses of all sizes, helping them build memorable brands
              and achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Testimonials from businesses we've helped succeed</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{client.name}</h3>
                    <p className="text-sm text-gray-600">{client.industry}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-4">{client.testimonial}</p>
                <p className="text-sm text-primary-600 font-semibold">{client.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's work together to transform your brand and achieve your business goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-accent-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


