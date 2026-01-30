"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, X, Settings, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#101010] text-white/70 overflow-visible mt-32 lg:mt-44">
      {/* Background tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#101010] to-[#0b0b0b]" />

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 pb-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-10 items-start">
          {/* Left column */}
          <div className="text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-serif italic text-white">
              Digital Marketing
            </h3>

            <ul className="mt-10 space-y-2 text-lg text-white/60">
              {[
                "Google Ads",
                "Google Ads Audit",
                "SEO Services",
                "Social Media Marketing",
                "Retargeting Campaigns",
                "Email Marketing",
                "Youtube Advertising",
                "Influencer Marketing",
                "B2B Lead Generation",
              ].map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 text-accent-500 font-semibold tracking-[0.15em]">
              DIGITAL ENQUIRY
            </div>
          </div>

          {/* Center card (raised) */}
          <div className="flex justify-center relative z-10 -mt-24 lg:-mt-36">
            <div className="w-full max-w-xl bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-10 py-12 text-center shadow-2xl">
              <h3 className="text-4xl md:text-5xl font-serif italic text-white">
                Work with us
              </h3>

              <div className="mt-6 flex justify-center">
                <Settings className="w-5 h-5 text-white/30" />
              </div>

              <div className="mt-8 space-y-6 text-lg text-white/60">
                {[
                  "Corporates, Organisations, Startups",
                  "Mombasa, Kenya",
                  "Open Mon-Fri 8am - 5pm",
                ].map((line) => (
                  <div key={line} className="pb-6 border-b border-white/10 last:border-b-0 last:pb-0">
                    {line}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center px-10 py-4 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-black font-extrabold tracking-[0.12em] transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="text-center lg:text-right">
            <h3 className="text-4xl md:text-5xl font-serif italic text-white">
              Design Services
            </h3>

            <ul className="mt-10 space-y-2 text-lg text-white/60">
              {[
                "Creative Brand Design",
                "Website Design",
                "Photography & Videography",
                "Animated Video",
                "Publishing Solutions",
                "Creative Writing",
                "Marketing Material Design",
                "Signage",
                "Merchandising",
              ].map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 text-accent-500 font-semibold tracking-[0.15em]">
              DESIGN ENQUIRY
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { label: "Facebook", Icon: Facebook, href: "#" },
              { label: "Instagram", Icon: Instagram, href: "#" },
              { label: "X", Icon: X, href: "#" },
              { label: "LinkedIn", Icon: Linkedin, href: "#" },
              { label: "YouTube", Icon: Youtube, href: "#" },
            ].map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Newsletter pill */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-xl rounded-full bg-black/35 border border-white/10 px-6 py-3 flex items-center gap-3"
          >
            <input
              type="email"
              placeholder="Subscribe Our Newsletter"
              className="flex-1 bg-transparent outline-none text-white/80 placeholder:text-white/40"
            />
            <button
              type="submit"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/80"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center sm:text-left">
              <div className="text-sm font-extrabold tracking-[0.2em] text-white/80 uppercase">
                Quick Links
              </div>
              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-base">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Projects", href: "/projects" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Clients", href: "/clients" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white/60 hover:text-accent-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="text-sm font-extrabold tracking-[0.2em] text-white/80 uppercase">
                Legal
              </div>
              <div className="mt-6 grid gap-3 text-base">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms & Conditions", href: "/terms" },
                  { label: "Cookie Policy", href: "/cookies" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-white/60 hover:text-accent-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center sm:text-left lg:text-right">
              <div className="text-sm font-extrabold tracking-[0.2em] text-white/80 uppercase">
                Need help?
              </div>
              <div className="mt-6 space-y-3 text-white/60">
                <div>
                  <a
                    href="mailto:blueprintbrandingkreatives@gmail.com"
                    className="hover:text-accent-500 transition-colors break-words"
                  >
                    blueprintbrandingkreatives@gmail.com
                  </a>
                </div>
                <div className="flex flex-col lg:items-end gap-1">
                  <a
                    href="tel:+254780460617"
                    className="hover:text-accent-500 transition-colors"
                  >
                    +254 780 460 617
                  </a>
                  <a
                    href="https://wa.me/254745922163"
                    className="hover:text-accent-500 transition-colors"
                  >
                    WhatsApp: +254 745 922 163
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Blueprint Branding Kreatives. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

