import { serviceDetails } from "@/lib/siteConfig";

interface ServiceDetailSectionProps {
  serviceId: keyof typeof serviceDetails;
}

export default function ServiceDetailSection({
  serviceId,
}: ServiceDetailSectionProps) {
  const service = serviceDetails[serviceId];

  if (!service) return null;

  return (
    <section id={serviceId} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
            {service.title}
          </h2>
          <p className="text-xl text-gray-700 mb-8">{service.description}</p>
          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

