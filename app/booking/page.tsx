import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Book a Consultation - Blueprint Branding Kreatives",
  description: "Schedule a consultation with Blueprint Branding Kreatives to discuss your digital marketing and branding needs.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Book a Consultation
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your branding and digital marketing needs
            </p>
          </div>
        </div>
        <BookingForm />
      </div>
      <Footer />
    </main>
  );
}

