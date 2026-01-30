"use client";

import Image from "next/image";

type Props = {
  title?: string;
  subtitle?: string;
  logos: string[];
  /** seconds */
  speedSeconds?: number;
};

export default function PartnersLogoCarousel({
  title = "Our Partners",
  subtitle = "Brands we’ve worked with and collaborated with",
  logos,
  speedSeconds = 38,
}: Props) {
  const items = [...logos, ...logos];

  return (
    <section className="w-full bg-white py-16">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.45em] text-accent-500 uppercase">
            {title}
          </p>
          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-900">
            {subtitle}
          </h2>
        </div>
      </div>

      <div className="mt-12 relative w-full overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          className="flex w-max gap-14 sm:gap-16 items-center animate-partners-marquee hover:[animation-play-state:paused] px-6 sm:px-10 lg:px-16 xl:px-20"
          style={{ ["--marquee-duration" as never]: `${speedSeconds}s` }}
          aria-label="Partner logos carousel"
        >
          {items.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="h-16 sm:h-18 md:h-20 w-[160px] sm:w-[180px] md:w-[200px] flex items-center justify-center"
              aria-hidden={idx >= logos.length}
            >
              <Image
                src={src}
                alt="Partner logo"
                width={220}
                height={120}
                className="max-h-full w-auto object-contain opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

