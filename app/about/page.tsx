"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PartnersLogoCarousel from "@/components/PartnersLogoCarousel";

const pastProjects = [
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_1_mntji4.webp",
    alt: "Graphic design poster 1",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197553/Graphic_designs_13_uxkieu.jpg",
    alt: "Graphic design poster 2",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_19_io5nbn.jpg",
    alt: "Graphic design poster 3",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1763197556/Graphic_designs_17_ivt6x3.jpg",
    alt: "Graphic design poster 4",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768908922/content-concept_1_eyoqeg.jpg",
    alt: "Content marketing visual",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768909627/3562984_wkh3a5.jpg",
    alt: "Website concept visual",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768910394/man-taking_1_tthbuw.jpg",
    alt: "Creative work session visual",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768911070/front-view-specialized_t0bphp.jpg",
    alt: "Production and delivery visual",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768911529/advisory-board-members_mhvahl.jpg",
    alt: "Consultation and advisory visual",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768911945/blogger-using_1_xtoag6.jpg",
    alt: "Media and advertising visual",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975041/gallary_2_sab6fd.jpg",
    alt: "Past project poster 1",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975041/gallary_3_azqzfu.jpg",
    alt: "Past project poster 2",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975036/gallary_17_ksmovj.jpg",
    alt: "Past project poster 3",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975036/gallary_1_obc85k.jpg",
    alt: "Past project poster 4",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975035/gallary_21_cnasiq.jpg",
    alt: "Past project poster 5",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975034/gallary_18_osqaeo.jpg",
    alt: "Past project poster 6",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975034/gallary_19_tumufb.jpg",
    alt: "Past project poster 7",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975034/gallary_15_hbii5c.jpg",
    alt: "Past project poster 8",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975034/gallary_20_au1wsd.jpg",
    alt: "Past project poster 9",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975033/gallary_16_ruiopa.jpg",
    alt: "Past project poster 10",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975028/gallary_13_rzbnaa.jpg",
    alt: "Past project poster 11",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975027/gallary_4_hjbreg.jpg",
    alt: "Past project poster 12",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975028/gallary_8_ywu9ci.jpg",
    alt: "Past project poster 13",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975027/gallary_9_g3lydr.jpg",
    alt: "Past project poster 14",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975027/gallary_14_c7jcog.jpg",
    alt: "Past project poster 15",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975026/gallary_11_pdkit3.jpg",
    alt: "Past project poster 16",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975026/gallary_10_wexqlq.jpg",
    alt: "Past project poster 17",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975026/gallary_7_pi6qvm.jpg",
    alt: "Past project poster 18",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975025/gallary_5_zlxjnq.jpg",
    alt: "Past project poster 19",
  },
  {
    src: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768975025/gallary_6_h672dh.jpg",
    alt: "Past project poster 20",
  },
] as const;

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1768917495/group-afro-_1_ww3aao.jpg"
          alt="Blueprint Branding team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-left sm:text-center"
          >
            <div className="text-accent-500 text-3xl md:text-4xl font-serif italic">
              Our Story
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900">
              The making of a successful Marketing Agency
            </h2>

            <div className="mt-6 flex items-center justify-start sm:justify-center">
              <svg
                width="72"
                height="18"
                viewBox="0 0 72 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-accent-500"
              >
                <path
                  d="M8 9c5-7 13-7 18 0M46 9c5-7 13-7 18 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M33 10l3-4 3 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-10 md:mt-12 text-lg md:text-xl text-gray-500 leading-relaxed space-y-8 [text-align:justify] sm:text-center">
              <p>
                Blueprint Branding Kreatives is a creative branding and digital marketing studio
                built to help businesses look premium, communicate clearly, and grow with
                consistency. We exist for brands that want more than “design”—they want a strategy,
                a strong identity, and marketing that turns attention into action.
              </p>
              <p>
                From our base in Mombasa, Nyali — Links Road, opposite Kigotho&apos;s Hotel, we work
                with startups, corporates, and organisations across different industries. Whether
                you’re launching something new or refining an established brand, we help you
                define the message, build the visuals, and deliver campaigns that people remember.
              </p>
              <p>
                Our work spans brand identity design, website design and development, content
                creation, social media marketing, Google Ads, and SEO. We approach every project
                with a balance of creativity and performance—ensuring your brand not only looks
                good but also works hard for your business goals.
              </p>
              <p>
                What sets us apart is our commitment to quality, detail, and timelines. We listen
                deeply, plan carefully, and execute professionally—so you get outcomes that feel
                intentional, aligned, and built to last. Your success is our success, and we’re
                proud to be the team behind brands that are ready to stand out and scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnersLogoCarousel
        title="OUR PARTNERS"
        subtitle="Brands we’ve worked with and collaborated with"
        logos={[
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916091/patrners_8_jfohuq.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916086/patrners_7_lmiutv.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916085/patrners_6_mgsndr.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916085/patrners_12_c3vw7x.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916085/patrners_10_ic2qxw.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916083/patrners_9_cle6sx.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916082/patrners_5_lhyn9i.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916081/patrners_13_wisnih.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768916080/patrners_11_m5g0ky.jpg",
          "https://res.cloudinary.com/dyfnobo9r/image/upload/v1768915280/PAVI_LOGO_REBRAND_c81iah.png",
        ]}
        speedSeconds={40}
      />

      {/* Gallery */}
      <section id="gallery" className="w-full bg-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-left sm:text-center"
          >
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] text-gray-900/70">
              OUR WORK • GALLERY
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
              Gallery
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-500 [text-align:justify] sm:text-center">
              A selection of graphic posters we’ve designed for clients.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {pastProjects.map((item) => (
              <div
                key={item.src}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-black/5"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

