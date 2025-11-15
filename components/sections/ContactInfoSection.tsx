import { footerContent } from "@/lib/siteConfig";

export default function ContactInfoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
            <a
              href={`mailto:${footerContent.contact.email}`}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              {footerContent.contact.email}
            </a>
          </div>

          {/* Phone */}
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
            <a
              href={`tel:${footerContent.contact.phone}`}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              {footerContent.contact.phone}
            </a>
          </div>

          {/* Office Hours */}
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Business Hours</h3>
            <p className="text-gray-600">
              Mon - Fri: 9:00 AM - 6:00 PM
              <br />
              Sat: 10:00 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

