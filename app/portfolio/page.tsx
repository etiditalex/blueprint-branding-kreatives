"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ExternalLink } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Graphic Design", "Branding", "Web Design", "Digital Marketing", "Print", "Signage"];

const portfolioItems = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Branding",
    description: "Complete brand identity redesign for a tech startup",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Design",
    description: "Responsive e-commerce platform with modern UI/UX",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description: "Multi-platform social media marketing campaign",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 4,
    title: "Logo Design Collection",
    category: "Graphic Design",
    description: "Creative logo designs for various industries",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 5,
    title: "Storefront Signage",
    category: "Signage",
    description: "Eye-catching outdoor signage for retail business",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 6,
    title: "Print Marketing Materials",
    category: "Print",
    description: "Professional brochures and business cards",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 7,
    title: "Corporate Branding",
    category: "Branding",
    description: "Comprehensive branding package for corporation",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 8,
    title: "Portfolio Website",
    category: "Web Design",
    description: "Creative portfolio website for artist",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
  {
    id: 9,
    title: "Packaging Design",
    category: "Graphic Design",
    description: "Innovative packaging solutions for product line",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our creative work and see how we've helped businesses transform their brands
              and achieve success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-24 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                        <p className="text-white/90 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-900/80 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                  {selectedItem.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  View Project
                  <ExternalLink className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

