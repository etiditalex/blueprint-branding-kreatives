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
      name: "John Mwangi",
      company: "Real Estate Developer",
      text: "Blueprint Branding Kreatives transformed our online presence. Their team is professional, creative, and results-driven. Our website traffic increased by 300% within 6 months of working with them.",
      rating: 5,
    },
    {
      name: "Sarah Wanjiku",
      company: "E-commerce Business Owner",
      text: "Working with Blueprint has been an excellent experience. They understood our vision and delivered beyond our expectations. Our sales have significantly increased since implementing their SEO strategies.",
      rating: 5,
    },
    {
      name: "David Ochieng",
      company: "Tech Startup Founder",
      text: "The team at Blueprint helped us establish a strong brand identity that truly represents who we are. Highly recommended! Their attention to detail and strategic approach made all the difference.",
      rating: 5,
    },
    {
      name: "Grace Akinyi",
      company: "Non-Profit Organization",
      text: "Blueprint's content creation and SEO services have helped us reach more people and increase engagement. Their team is responsive, professional, and truly cares about our mission.",
      rating: 5,
    },
    {
      name: "Michael Kamau",
      company: "Retail Business Owner",
      text: "We've been working with Blueprint for over a year, and the results speak for themselves. Our brand recognition has improved, and we're seeing consistent growth in our online presence.",
      rating: 5,
    },
    {
      name: "Linda Chebet",
      company: "Healthcare Provider",
      text: "Professional, reliable, and results-oriented. Blueprint helped us create a modern website and implement effective digital marketing strategies. Our patient inquiries have increased significantly.",
      rating: 5,
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
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-accent-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
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
