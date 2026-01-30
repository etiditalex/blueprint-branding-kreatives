"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  {
    name: "SERVICES",
    href: "/services",
    submenu: [
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "Branding Solutions", href: "/services/branding" },
      { name: "Web Design & SEO", href: "/services/web-design" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Print Solutions", href: "/services/printing" },
      { name: "Sign Solutions", href: "/services/signage" },
    ],
  },
  { name: "PROJECTS", href: "/projects" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CLIENTS", href: "/clients" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const pathname = usePathname();
  const isServicesRoute = pathname === "/services" || pathname.startsWith("/services/");
  const isAnyMenuOpen = isOpen || isDesktopServicesOpen || isDesktopSearchOpen;
  const allowTransparentAtTop = pathname === "/";
  const isLightHeader = !allowTransparentAtTop || isScrolled || isAnyMenuOpen;
  const servicesSubmenu =
    navLinks.find((l) => l.name === "SERVICES")?.submenu ?? [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isDesktopServicesOpen && !isDesktopSearchOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDesktopServicesOpen(false);
        setIsDesktopSearchOpen(false);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Close when clicking outside any desktop dropdown trigger/panel
      if (target.closest("[data-desktop-dropdown]")) return;
      setIsDesktopServicesOpen(false);
      setIsDesktopSearchOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isDesktopServicesOpen, isDesktopSearchOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightHeader
          ? "bg-white/95 backdrop-blur shadow-lg border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center mr-8 z-10">
            <div
              className={`rounded-md px-2 py-1 transition-all ${
                isLightHeader ? "bg-transparent" : "bg-white/95 shadow-lg ring-1 ring-white/10"
              }`}
            >
              <div className="relative w-40 h-14 sm:w-48 sm:h-16">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768891534/blueprint_Logo_final_zqn83i.png"
                  alt="Blueprint Branding Kreatives Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 160px, 192px"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1">
            <div className="flex items-center space-x-1 xl:space-x-2 flex-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <div
                      className="flex items-center space-x-1 cursor-pointer px-3 py-2"
                      onMouseEnter={() => setOpenSubmenu(link.name)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      <Link
                        href={link.href}
                        className={`relative text-sm font-semibold uppercase transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-accent-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                          link.name === "SERVICES"
                            ? isServicesRoute
                              ? "text-accent-500"
                              : isLightHeader
                              ? "text-gray-900 hover:text-accent-500"
                              : "text-white hover:text-accent-500"
                            : pathname === link.href
                            ? "text-accent-500"
                            : isLightHeader
                            ? "text-gray-900 hover:text-accent-500"
                            : "text-white hover:text-accent-500"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <ChevronDown
                        className={`w-4 h-4 ${isLightHeader ? "text-gray-900" : "text-white"}`}
                      />
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 text-sm font-semibold uppercase transition-colors after:absolute after:left-3 after:right-3 after:bottom-0 after:h-0.5 after:bg-accent-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${
                        pathname === link.href
                          ? "text-accent-500"
                          : isLightHeader
                          ? "text-gray-900 hover:text-accent-500"
                          : "text-white hover:text-accent-500"
                      }`}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}

                  {link.submenu && openSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                      onMouseEnter={() => setOpenSubmenu(link.name)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-black/5 hover:text-accent-500 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop controls (Search + Services Hamburger) */}
            <div className="relative flex items-center gap-4 ml-4" data-desktop-dropdown>
              <button
                type="button"
                aria-label="Search"
                onClick={() => {
                  setIsDesktopSearchOpen((v) => !v);
                  setIsDesktopServicesOpen(false);
                }}
                className={`p-2 rounded-md transition-colors ${
                  isLightHeader ? "text-gray-900 hover:bg-black/5" : "text-white hover:bg-white/10"
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                aria-label="Open services menu"
                onClick={() => {
                  setIsDesktopServicesOpen((v) => !v);
                  setIsDesktopSearchOpen(false);
                }}
                className={`p-2 rounded-md transition-colors ${
                  isLightHeader ? "text-gray-900 hover:bg-black/5" : "text-white hover:bg-white/10"
                }`}
              >
                <AlignJustify className="w-6 h-6" />
              </button>

              <AnimatePresence>
                {isDesktopSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-12 top-full mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-3"
                    data-desktop-dropdown
                  >
                    <label className="sr-only" htmlFor="header-search">
                      Search
                    </label>
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-500" />
                      <input
                        id="header-search"
                        placeholder="Search..."
                        className="w-full outline-none text-sm text-gray-800 placeholder:text-gray-400"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") e.preventDefault();
                        }}
                        autoFocus
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Spacer for mobile */}
          <div className="flex-1 lg:hidden"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isLightHeader ? "text-gray-900 hover:bg-black/5" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Services Panel (hamburger) */}
        <AnimatePresence>
          {isDesktopServicesOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:block fixed inset-0 bg-black/40"
                onClick={() => setIsDesktopServicesOpen(false)}
              />

              <motion.aside
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 60, opacity: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 40 }}
                className="hidden lg:flex fixed top-0 right-0 h-screen w-[460px] max-w-[92vw] bg-white shadow-2xl border-l border-black/5"
                data-desktop-dropdown
              >
                <div className="w-full h-full flex flex-col">
                  <div className="flex items-center justify-between px-8 pt-8">
                    <div className="text-3xl font-serif italic text-gray-900">
                      Our Services
                    </div>
                    <button
                      type="button"
                      aria-label="Close services menu"
                      onClick={() => setIsDesktopServicesOpen(false)}
                      className="p-2 rounded-md hover:bg-black/5 text-gray-900"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="px-8 pb-6 pt-4 overflow-y-auto">
                    <div className="space-y-2 text-lg leading-snug">
                      {servicesSubmenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsDesktopServicesOpen(false)}
                          className="block text-accent-500 hover:text-accent-400 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>

                    <div className="mt-12 pt-10 border-t border-gray-100">
                      <p className="text-gray-400 text-lg leading-relaxed">
                        Why not connect with us to see why we might just be the right fit for your
                        business.
                      </p>

                      <div className="mt-10 space-y-2 text-accent-500">
                        <a
                          href="mailto:blueprintbrandingkreatives@gmail.com"
                          className="block hover:text-accent-400 transition-colors"
                        >
                          blueprintbrandingkreatives@gmail.com
                        </a>
                        <div className="text-gray-400 text-base">
                          Call or WhatsApp:{" "}
                          <a
                            href="https://wa.me/254780460617"
                            className="text-accent-500 hover:text-accent-400 transition-colors"
                          >
                            0780 460 617
                          </a>
                          {" / "}
                          <a
                            href="https://wa.me/254745922163"
                            className="text-accent-500 hover:text-accent-400 transition-colors"
                          >
                            0745 922 163
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden pb-4"
            >
              <div className="space-y-2 pt-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubmenu(null);
                      }}
                      className={`block px-4 py-2 rounded-lg text-base font-semibold uppercase transition-colors ${
                        link.name === "SERVICES"
                          ? isServicesRoute
                            ? isLightHeader
                              ? "text-accent-500 bg-black/5"
                              : "text-accent-500 bg-white/10"
                            : isLightHeader
                            ? "text-gray-900 hover:bg-black/5"
                            : "text-white hover:bg-white/10"
                          : pathname === link.href
                          ? isLightHeader
                            ? "text-accent-500 bg-black/5"
                            : "text-accent-500 bg-white/10"
                          : isLightHeader
                          ? "text-gray-900 hover:bg-black/5"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                              isLightHeader
                                ? "text-gray-700 hover:bg-black/5"
                                : "text-white/80 hover:bg-white/10"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
