import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import MapSection from "@/components/sections/MapSection";

export const metadata: Metadata = {
  title: "Contact Us - Blueprint Branding Kreatives",
  description: "Get in touch with Blueprint Branding Kreatives. We're here to help transform your brand and digital presence.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Ready to transform your brand? Let's start a conversation.
            </p>
          </div>
        </div>
        <ContactInfoSection />
        <MapSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

