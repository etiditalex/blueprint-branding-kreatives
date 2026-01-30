"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock, Search } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Branding Strategies for Small Businesses",
    excerpt:
      "Discover the key branding strategies that can help small businesses establish a strong market presence and connect with their target audience effectively.",
    author: "Blueprint Team",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "Branding",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
  },
  {
    id: 2,
    title: "The Power of Visual Identity in Digital Marketing",
    excerpt:
      "Learn how a strong visual identity can significantly impact your digital marketing efforts and help your brand stand out in a crowded marketplace.",
    author: "Blueprint Team",
    date: "January 10, 2024",
    readTime: "7 min read",
    category: "Digital Marketing",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg",
  },
  {
    id: 3,
    title: "Graphic Design Trends to Watch in 2024",
    excerpt:
      "Explore the latest graphic design trends that are shaping the creative industry and how you can incorporate them into your brand's visual communication.",
    author: "Blueprint Team",
    date: "January 5, 2024",
    readTime: "6 min read",
    category: "Graphic Design",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_19_io5nbn.jpg",
  },
  {
    id: 4,
    title: "How to Build a Cohesive Brand Identity",
    excerpt:
      "A comprehensive guide to building a cohesive brand identity that resonates with your audience and creates lasting impressions across all touchpoints.",
    author: "Blueprint Team",
    date: "December 28, 2023",
    readTime: "8 min read",
    category: "Branding",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_17_ivt6x3.jpg",
  },
  {
    id: 5,
    title: "SEO Best Practices for Brand Websites",
    excerpt:
      "Discover essential SEO strategies that can help your brand website rank higher in search results and attract more organic traffic.",
    author: "Blueprint Team",
    date: "December 20, 2023",
    readTime: "6 min read",
    category: "Web Design",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
  },
  {
    id: 6,
    title: "Print vs Digital: Choosing the Right Marketing Medium",
    excerpt:
      "An in-depth comparison of print and digital marketing mediums to help you make informed decisions about your marketing strategy.",
    author: "Blueprint Team",
    date: "December 15, 2023",
    readTime: "7 min read",
    category: "Marketing",
    image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg",
  },
];

const categories = ["All", "Branding", "Graphic Design", "Digital Marketing", "Web Design", "Marketing"];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const recentPosts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  }, []);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return blogPosts;

    return blogPosts.filter((post) => {
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768998400/online-message-blog-chat-communication-envelop-graphic-icon-concept_1_odz2bu.jpg"
            alt="Blog"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-14 items-start">
            {/* Left: posts */}
            <div>
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-full font-medium transition-all bg-gray-100 text-gray-700 hover:bg-primary-600 hover:text-white"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Blog Grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mt-12 lg:text-left"
              >
                <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg">
                  Load More Posts
                </button>
              </motion.div>
            </div>

            {/* Right: sidebar */}
            <aside className="space-y-10 lg:sticky lg:top-28">
              {/* Search */}
              <div className="relative">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter Keywords"
                  className="w-full h-14 rounded-md border border-black/10 bg-white px-5 pr-14 text-base text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-500">
                  <Search className="w-5 h-5" />
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <div className="font-serif italic text-4xl text-gray-900">Recent Posts</div>

                <div className="mt-8 space-y-8">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 shrink-0">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm text-gray-400">{post.date}</div>
                        <div className="mt-2 font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}


