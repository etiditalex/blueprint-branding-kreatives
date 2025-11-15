import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/sections/BlogGrid";

export const metadata: Metadata = {
  title: "Insights & Blog - Blueprint Branding Kreatives",
  description: "Read our latest insights, tips, and articles on digital marketing, branding, web design, and business growth.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Insights & Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in digital marketing and branding
            </p>
          </div>
        </div>
        <BlogGrid />
      </div>
      <Footer />
    </main>
  );
}

