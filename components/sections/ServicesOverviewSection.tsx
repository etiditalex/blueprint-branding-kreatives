import { servicesOverview } from "@/lib/siteConfig";
import Link from "next/link";

export default function ServicesOverviewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
          {servicesOverview.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesOverview.items.map((service) => (
            <Link
              key={service.id}
              href="/services"
              className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-center text-gray-900 group-hover:text-primary-600 transition-colors">
                {service.name}
              </h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

