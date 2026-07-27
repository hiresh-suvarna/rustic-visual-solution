import { useNavigate } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  const heroImages = [
    "/images/DJI_0095.jpg",
    "/images/DJI_0206.JPG",
    "/images/DJI_0723.JPG",
  ];

  const services = [
    {
      icon: "/images/ICON_1.png",
      title: "360 Virtual Tours",
      description:
        "Immersive walkthroughs that bring spaces to life, allowing viewers to explore every detail from anywhere.",
    },
    {
      icon: "/images/ICON_2.png",
      title: "Drone Cinematics",
      description:
        "Breathtaking aerial perspectives that showcase properties and spaces with cinematic excellence.",
    },
    {
      icon: "/images/ICON_3.png",
      title: "Immersive Showcases",
      description:
        "Premium visual experiences that captivate audiences and elevate brand presence.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The 360° tour transformed how we showcase our properties. Exceptional quality and professionalism.",
      clientName: "Sarah Mitchell",
      projectType: "Luxury Residence",
    },
    {
      quote:
        "Their drone cinematography elevated our brand presence. The attention to detail is unmatched.",
      clientName: "Marcus Chen",
      projectType: "Commercial Space",
    },
    {
      quote:
        "Working with Rustic Visual Solution was seamless. They delivered beyond our expectations.",
      clientName: "Elena Rodriguez",
      projectType: "Premium Hospitality",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeadingVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] lg:h-[100vh] w-full overflow-hidden">
        <HeroCarousel images={heroImages} />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative z-30 pointer-events-auto text-center text-white px-6 max-w-6xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight font-bricolage">
              Your Space Deserves
              <br /> to be Experienced,
              <br />Not Just Seen
            </h1>


            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 font-light tracking-wide ">
              360° Tours • Drone Visuals • Cinematic Walkthroughs
            </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">

              <button
                onClick={() => navigate({ to: "/our-work" })}
                className="px-8 py-4 rounded-full border bg-[#D4A04C] border-[#D4A04C] text-black font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* 360 TOUR SECTION */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-warmWhite">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-5 mb-8">

      <div className="h-px w-14 bg-gold/40" />

      <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
        Interactive Experiences
      </span>

      <div className="h-px w-14 bg-gold/40" />

    </div>
          <h2
            ref={headingRef}
            className={`text-3xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center transition-all duration-1000 ${
              isHeadingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Step Inside Before You Visit

          </h2>

          <p className="text-center text-lg text-muted-foreground mb-10 lg:mb-14 max-w-2xl mx-auto text-black">
            Click and drag to navigate the space. Use thumbnails to switch between rooms.
          </p>

          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
            <iframe
              src="https://howlsuvarna.viewin360.co/share/collection/7MYMn?logo=1&info=0&logosize=73&fs=1&vr=1&zoom=1&sd=1&autorotate=-0.15&autop=15&autopalt=1&thumbs=3&margin=10"
              width="100%"
              height="640"
              frameBorder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              scrolling="no"
              title="360° Virtual Tour Collection"
              className="w-full min-h-[500px] md:min-h-[600px] lg:min-h-[640px]"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
<section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#faf8f4]">

  <div className="max-w-5xl mx-auto text-center">

    {/* Eyebrow */}

    <div className="flex items-center justify-center gap-5 mb-8">

      <div className="h-px w-14 bg-gold/40" />

      <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
        What We Do
      </span>

      <div className="h-px w-14 bg-gold/40" />

    </div>

    {/* Heading */}

    <h2
      className="
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-bricolage
        font-semibold
        leading-tight
        text-black
        max-w-4xl
        mx-auto
      "
    >
      Visual Experiences That Leave
      <br />
      A Lasting Impression
    </h2>

    {/* Description */}

    <p
      className="
        mt-8
        text-lg
        lg:text-xl
        leading-9
        text-gray-500
        max-w-3xl
        mx-auto
      "
    >
      We don't just capture spaces—we craft immersive visual
      experiences that inspire confidence, engage visitors,
      and help premium brands showcase their spaces beautifully.
    </p>

  </div>

  {/* Cards */}

  <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}

  </div>

</section>

      {/* CLIENTS */}
      <section className="py-18 lg:py-25 px-6 lg:px-12 bg-warmWhite">
        <div className="container mx-auto max-w-7xl text-center">

          {/* Heading */}
          <div className="flex items-center justify-center gap-5 mb-8">

      <div className="h-px w-14 bg-gold/40" />

      <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
        Who We Work With
      </span>

      <div className="h-px w-14 bg-gold/40" />

    </div>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-black">
            Built for Premium Spaces<br />Across Every Sector

          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-14">
            From residential luxury to large-scale commercial, if your space has a story, we'll tell it.
          </p>

         {/* CLIENT TYPES */}
<div className="mt-14 flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">

  {[
    "Luxury Homes",
    "Hospitality & Restaurants",
    "Commercial Spaces",
    "Colleges & Museums",
    "Real Estate Developers",
  ].map((client, index) => (
    <div
      key={index}
      className={`
        px-8
        py-4
        rounded-full
        border
        transition-all
        duration-300
        cursor-default
        ${
          index === 0
            ? "bg-gold border-gold text-white"
            : "bg-white border-gold/30 text-gray-700 hover:bg-gold hover:text-white hover:border-gold"
        }
      `}
    >
      <span className="flex items-center gap-3 font-medium text-base">

        <span
          className={`w-2 h-2 rounded-full ${
            index === 0
              ? "bg-white"
              : "bg-gold"
          }`}
        />

        {client}

      </span>
    </div>
  ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-5 mb-8">

      <div className="h-px w-14 bg-gold/40" />

      <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
        Testimonials
      </span>

      <div className="h-px w-14 bg-gold/40" />

    </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from the clients who trusted us to represent their spaces at the highest level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">

           <div className="flex items-center justify-center gap-5 mb-8">

      <div className="h-px w-14 bg-gold/40" />

      <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
        Ready to Get Started
      </span>

      <div className="h-px w-14 bg-gold/40" />

    </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Let’s Build Your Digital Experience
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
            Transform your space into an immersive visual experience that helps you close your sales <br />faster with our interactive and cinematic visuals.
          </p>

          <button
            onClick={() => navigate({ to: "/contact" })}
            className="px-10 py-4 text-lg font-medium rounded-full
            bg-black text-white
            hover:bg-neutral-800
            transition-all duration-300
            hover:scale-105 hover:shadow-lg"
          >
            Get a Quote
          </button>

          <p className="mt-6 text-sm text-gray-500">
            No spam. We usually respond within 24 hours.
          </p>

        </div>
      </section>
    </div>
  );
}