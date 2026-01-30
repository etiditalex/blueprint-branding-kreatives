"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselItem = {
  src: string;
  alt: string;
  tag?: string;
};

export default function PastWorkCarousel() {
  const items: CarouselItem[] = useMemo(
    () => [
      {
        src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
        alt: "Graphic design portfolio work 1",
        tag: "Graphic Design",
      },
      {
        src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg",
        alt: "Graphic design portfolio work 2",
        tag: "Branding",
      },
      {
        src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_19_io5nbn.jpg",
        alt: "Graphic design portfolio work 3",
        tag: "Digital Design",
      },
      {
        src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_17_ivt6x3.jpg",
        alt: "Graphic design portfolio work 4",
        tag: "Print Design",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const go = (nextIndex: number) => {
    const clamped = ((nextIndex % items.length) + items.length) % items.length;
    setDirection(clamped > index ? 1 : -1);
    setIndex(clamped);
  };

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 6000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section className="py-20 bg-white w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.35em] text-gray-900/70">
            GRAPHIC DESIGNS • PAST WORK
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Our Creative Portfolio
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-500">
            A selection of graphic design projects we’ve delivered for clients.
          </p>
        </div>
      </div>

      {/* Full-width carousel */}
      <div className="mt-12 w-full">
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] lg:h-[700px]">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={items[index]?.src}
                custom={direction}
                initial={{ opacity: 0, x: direction === 1 ? 48 : -48, scale: 0.99 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction === 1 ? -48 : 48, scale: 0.99 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={items[index]!.src}
                  alt={items[index]!.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />

                {/* Overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/10 to-transparent" />

                {/* Tag */}
                {items[index]?.tag && (
                  <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white font-semibold">
                      {items[index]!.tag}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous portfolio item"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white flex items-center justify-center transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next portfolio item"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white flex items-center justify-center transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to portfolio item ${i + 1}`}
                  className={`transition-all rounded-full ${
                    i === index ? "w-8 h-2 bg-accent-500" : "w-2 h-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

