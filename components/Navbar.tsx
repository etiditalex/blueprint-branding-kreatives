"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownNav from "@/components/DropdownNav";

interface NavItem {
  id: string;
  label: string;
  url: string;
  parent_id?: string;
  has_dropdown: boolean;
  children?: NavItem[];
}

interface HeaderData {
  logo_url: string;
  logo_alt_text: string;
  logo_width?: number;
  logo_height?: number;
  cta_text?: string;
  cta_url?: string;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchNavData();
    // Refresh every 30 seconds to catch updates
    const interval = setInterval(fetchNavData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchNavData = async () => {
    try {
      const timestamp = new Date().getTime();
      const [navRes, headerRes] = await Promise.all([
        fetch(`/api/navigation?_t=${timestamp}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        }),
        fetch(`/api/header?_t=${timestamp}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' },
        }),
      ]);

      if (navRes.ok) {
        const navData = await navRes.json();
        setNavItems(navData.data || []);
      }

      if (headerRes.ok) {
        const headerData = await headerRes.json();
        setHeaderData(headerData.data);
      }
    } catch (error) {
      console.error("Error fetching navigation data:", error);
    } finally {
      setLoading(false);
    }
  };

  const logoUrl = headerData?.logo_url || "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763188371/Blueprint_kreative_branding_logo_g9xzxj.jpg";
  const logoWidth = headerData?.logo_width || 70;
  const logoHeight = headerData?.logo_height || 70;
  const logoAlt = headerData?.logo_alt_text || "Blueprint Branding Kreatives Logo";
  const ctaText = headerData?.cta_text || "Book Now";
  const ctaUrl = headerData?.cta_url || "/booking";

  // Fallback to static navigation if database is empty
  const displayItems = navItems.length > 0 ? navItems : [
    { id: '1', label: 'Home', url: '/', has_dropdown: false },
    { id: '2', label: 'Services', url: '/services', has_dropdown: false },
    { id: '3', label: 'Portfolio', url: '/portfolio', has_dropdown: false },
    { id: '4', label: 'Insights', url: '/insights', has_dropdown: false },
    { id: '5', label: 'About', url: '/about', has_dropdown: false },
    { id: '6', label: 'Contact', url: '/contact', has_dropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative" style={{ width: `${logoWidth}px`, height: `${logoHeight}px` }}>
              <Image
                src={logoUrl}
                alt={logoAlt}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {displayItems.map((item) => {
              if (item.has_dropdown && item.children && item.children.length > 0) {
                const dropdownItems = item.children.map((child) => ({
                  name: child.label,
                  href: child.url,
                }));
                return (
                  <DropdownNav key={item.id} title={item.label} items={dropdownItems} />
                );
              }
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={ctaUrl}
              className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              {ctaText}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {displayItems.map((item) => {
              if (item.has_dropdown && item.children && item.children.length > 0) {
                return (
                  <div key={item.id} className="mb-2">
                    <Link
                      href={item.url}
                      className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.url}
                          className="block py-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={ctaUrl}
              className="block mt-4 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-center transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
