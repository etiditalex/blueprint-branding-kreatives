import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Let's work together to create a memorable brand that stands out and drives results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Book a Consultation
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
          >
            Get in Touch
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

