import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Testimonials - Blueprint Branding Kreatives",
  description: "Read what our clients say about working with Blueprint Branding Kreatives.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Client Name",
      company: "Company Name",
      text: "Blueprint Branding Kreatives transformed our online presence. Their team is professional, creative, and results-driven.",
    },
    {
      name: "Client Name",
      company: "Company Name",
      text: "Working with Blueprint has been an excellent experience. They understood our vision and delivered beyond our expectations.",
    },
    {
      name: "Client Name",
      company: "Company Name",
      text: "The team at Blueprint helped us establish a strong brand identity that truly represents who we are. Highly recommended!",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Testimonials
            </h1>
          </div>
        </div>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}

