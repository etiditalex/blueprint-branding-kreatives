"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FooterData {
  company_name: string;
  description: string;
  address?: string;
  phone?: string;
  email?: string;
  social_links?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  copyright_text: string;
}

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFooterData();
    // Refresh every 30 seconds to catch updates
    const interval = setInterval(fetchFooterData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchFooterData = async () => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/footer?_t=${timestamp}`, {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });

      if (response.ok) {
        const data = await response.json();
        setFooterData(data.data);
      }
    } catch (error) {
      console.error("Error fetching footer data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fallback to defaults if no data
  const companyName = footerData?.company_name || "Blueprint Branding Kreatives";
  const description = footerData?.description || "A digital marketing and brand development company";
  const email = footerData?.email || "info@blueprintkreatives.com";
  const phone = footerData?.phone || "+1 (555) 123-4567";
  const address = footerData?.address || "";
  const copyright = footerData?.copyright_text || `© ${new Date().getFullYear()} Blueprint Branding Kreatives. All rights reserved.`;
  const socialLinks = footerData?.social_links || {};

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {companyName}
            </h3>
            <p className="text-gray-400 mb-4">{description}</p>
            {address && (
              <p className="text-gray-400 text-sm">{address}</p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-white transition-colors"
                  >
                    {email}
                  </a>
                </li>
              )}
              {phone && (
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                </li>
              )}
            </ul>
            {(socialLinks.facebook || socialLinks.twitter || socialLinks.instagram || socialLinks.linkedin) && (
              <div className="flex space-x-4 mt-4">
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    📘
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    🐦
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    📷
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    💼
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
