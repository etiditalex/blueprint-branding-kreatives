import { visionMissionSection } from "@/lib/siteConfig";

export default function VisionMissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900">
          {visionMissionSection.title}
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary-800">
              {visionMissionSection.vision.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {visionMissionSection.vision.content}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-accent-800">
              {visionMissionSection.mission.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {visionMissionSection.mission.content}
            </p>
          </div>
        </div>

        {/* Services Summary */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            {visionMissionSection.services}
          </p>
        </div>
      </div>
    </section>
  );
}

