"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, ExternalLink, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Branding", "Web Design", "Graphic Design", "Digital Marketing", "Print", "Signage"];

const projects = [
  {
    id: 1,
    title: "Complete Brand Identity for TechStart",
    category: "Branding",
    description:
      "A comprehensive brand identity redesign including logo, color palette, typography, and brand guidelines for a technology startup.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    client: "TechStart Solutions",
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    category: "Web Design",
    description:
      "Modern, responsive e-commerce platform with improved user experience, SEO optimization, and conversion-focused design.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg",
    tags: ["UI/UX Design", "E-commerce", "SEO"],
    client: "GreenLeaf Organics",
  },
  {
    id: 3,
    title: "Social Media Marketing Campaign",
    category: "Digital Marketing",
    description:
      "Multi-platform social media strategy that increased engagement by 300% and brand awareness across target demographics.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_19_io5nbn.jpg",
    tags: ["Social Media", "Content Strategy", "Analytics"],
    client: "Urban Spaces Realty",
  },
  {
    id: 4,
    title: "Packaging Design Collection",
    category: "Graphic Design",
    description:
      "Innovative packaging solutions for a product line, featuring sustainable materials and eye-catching designs.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_17_ivt6x3.jpg",
    tags: ["Packaging", "Product Design", "Print"],
    client: "Culinary Delights",
  },
  {
    id: 5,
    title: "Storefront Signage System",
    category: "Signage",
    description:
      "Custom-designed indoor and outdoor signage system that enhances brand visibility and creates a memorable first impression.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
    tags: ["Outdoor Signs", "Indoor Signage", "Branding"],
    client: "FitLife Gym",
  },
  {
    id: 6,
    title: "Corporate Rebranding Project",
    category: "Branding",
    description:
      "Complete rebranding initiative for a corporation, including brand strategy, visual identity, and implementation across all touchpoints.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg",
    tags: ["Rebranding", "Brand Strategy", "Corporate Identity"],
    client: "EduTech Academy",
  },
  {
    id: 7,
    title: "Portfolio Website Design",
    category: "Web Design",
    description:
      "Creative portfolio website showcasing work with modern animations, responsive design, and optimized performance.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_19_io5nbn.jpg",
    tags: ["Portfolio", "Creative Design", "Responsive"],
    client: "Creative Agency",
  },
  {
    id: 8,
    title: "Print Marketing Materials",
    category: "Print",
    description:
      "Comprehensive print marketing package including brochures, business cards, flyers, and promotional materials.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_17_ivt6x3.jpg",
    tags: ["Print Design", "Marketing Collateral", "Branding"],
    client: "Local Business",
  },
  {
    id: 9,
    title: "Digital Marketing Strategy",
    category: "Digital Marketing",
    description:
      "End-to-end digital marketing strategy including SEO, PPC campaigns, content marketing, and analytics implementation.",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
    tags: ["SEO", "PPC", "Content Marketing"],
    client: "Growing Startup",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            className="max-w-4xl mx-auto text-left sm:text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 leading-relaxed [text-align:justify] sm:text-center">
              Explore our portfolio of successful projects across branding, design, web development,
              and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-24 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-4">
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

      {/* Projects Grid */}
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
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="relative w-full h-64 overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center px-4 py-2 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                        >
                          View Project
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-primary-600 font-semibold">Client: {project.client}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-left sm:text-center py-20">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-left sm:text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-white/90 mb-8 [text-align:justify] sm:text-center">
              Let's discuss how we can bring your vision to life with our creative expertise.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-accent-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


