"use client";

export default function MapSection() {
  const mapUrl = "https://share.google/KNv7xE0BpDAS6ppZY";
  const locationName = "Blueprint Branding Kreatives";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
            Find Us
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full relative bg-gray-200">
              {/* Google Maps Embed - You can replace this with the actual embed code from your Google Maps link */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.8!3d-1.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE4JzAwLjAiUyAzNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2ske!4v1234567890!5m2!1sen!2ske&q=Blueprint+Branding+Kreatives"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Blueprint Branding Kreatives Location"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {locationName}
              </h3>
              <p className="text-gray-600 mb-4">
                Visit our location or get directions using the map above.
              </p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                Open in Google Maps
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

