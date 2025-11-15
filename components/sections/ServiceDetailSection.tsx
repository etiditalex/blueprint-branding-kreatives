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
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              {serviceId === "graphic-design" && "🎨"}
              {serviceId === "web-design-seo" && "💻"}
              {serviceId === "branding-solutions" && "🎯"}
              {serviceId === "digital-marketing" && "📈"}
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
              {service.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all duration-300 group/item"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
