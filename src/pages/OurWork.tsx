import React from "react";
import { ArrowRight } from "lucide-react";
import PortfolioCard from "../components/PortfolioCard";

export default function OurWork() {
  const projects = [
    {
      image: "/images/DJI_0095.jpg",
      title: "Modern Luxury Villa",
      category: "Luxury Residence",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      image: "/images/DJI_0206.JPG",
      title: "Fine Dining Experience",
      category: "Premium Hospitality",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      image: "/images/DJI_0723.JPG",
      title: "Corporate Headquarters",
      category: "Commercial Space",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      image: "/images/port1.JPG",
      title: "University Campus",
      category: "Educational Institution",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      image: "/images/port2.JPG",
      title: "Contemporary Art Museum",
      category: "Cultural Space",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      image: "/images/port2.JPG",
      title: "Historic Palace",
      category: "Heritage Property",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const categories = [
    "All",
    "Luxury Homes",
    "Hospitality",
    "Commercial",
    "Education",
    "Museums",
  ];

  return (
    <div className="pt-32 lg:pt-40">

      {/* ================= HERO ================= */}

      <section className="px-6 lg:px-12">

        <div className="container mx-auto max-w-6xl text-center">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-14 h-px bg-gold/40" />

            <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
              PORTFOLIO
            </span>

            <div className="w-14 h-px bg-gold/40" />

          </div>

          <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">

            Our Latest
            <br />
            Visual Experiences

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg lg:text-xl leading-9 text-muted-foreground">

            Discover a curated collection of cinematic visuals,
            immersive virtual tours, and premium visual experiences
            crafted for luxury properties, hospitality venues,
            commercial developments, and educational institutions.

          </p>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="mt-24 bg-[#faf8f4] py-20 lg:py-28">

        <div className="container mx-auto max-w-7xl px-6 lg:px-0">

          {/* Portfolio Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {projects.map((project, index) => (

              <PortfolioCard
                key={index}
                {...project}
              />

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 lg:py-32 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-14 h-px bg-gold/40" />

            <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
              START YOUR PROJECT
            </span>

            <div className="w-14 h-px bg-gold/40" />

          </div>

          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8">

            Ready To Showcase
            <br />
            Your Space?

          </h2>

          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-12">

            Let's create immersive visual experiences that
            inspire confidence, engage visitors, and elevate
            your brand.

          </p>

          <button
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gold
              px-8
              py-4
              text-white
              font-medium
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Get a Quote

            <ArrowRight size={18} />

          </button>

        </div>

      </section>

    </div>
  );
}