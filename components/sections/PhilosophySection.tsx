import { philosophySection } from "@/lib/siteConfig";

export default function PhilosophySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900">
          {philosophySection.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            {philosophySection.content}
          </p>
        </div>
      </div>
    </section>
  );
}

