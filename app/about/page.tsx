import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About Us - Blueprint Branding Kreatives",
  description: "Learn about Blueprint Branding Kreatives, our philosophy, vision, and mission in digital marketing and brand development.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <PhilosophySection />
        <VisionMissionSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}

