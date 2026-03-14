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
      icon: "/images/icon-360-tours.dim_128x128.png",
      title: "360 Virtual Tours",
      description:
        "Immersive walkthroughs that bring spaces to life, allowing viewers to explore every detail from anywhere.",
    },
    {
      icon: "/images/icon-drone.dim_128x128.png",
      title: "Drone Cinematics",
      description:
        "Breathtaking aerial perspectives that showcase properties and spaces with cinematic excellence.",
    },
    {
      icon: "/images/icon-immersive.dim_128x128.png",
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
    <div className="pt-20 lg:pt-24">

      {/* HERO SECTION */}
      <section className="relative h-[85vh] lg:h-[90vh] w-full overflow-hidden">
        <HeroCarousel images={heroImages} />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Immersive Visual Experiences for Premium Spaces
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 font-light tracking-wide">
              360° Tours • Drone Visuals • Cinematic Walkthroughs
            </p>
          </div>
        </div>
      </section>

      {/* 360 TOUR SECTION */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto max-w-7xl">
          <h2
            ref={headingRef}
            className={`text-3xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center transition-all duration-1000 ${
              isHeadingVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Explore Our 360° Virtual Tours
          </h2>

          <p className="text-center text-lg text-muted-foreground mb-10 lg:mb-14 max-w-2xl mx-auto">
            Step inside and experience our immersive virtual tours. Click and
            drag to navigate, use thumbnails to switch between spaces.
          </p>

          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
            <iframe
              src="https://howlsuvarna.viewin360.co/share/collection/7Hxlf?logo=1&info=0&logosize=73&fs=1&vr=1&zoom=1&sd=1&autorotate=0.08&autop=20&thumbs=3&margin=10"
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
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              We create premium visual content that transforms how spaces are
              experienced and remembered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl text-center">

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Who We Work With
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
            Trusted by premium spaces and luxury brands
          </p>

          {/* Client Types */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">

            {[
              "Luxury Homes",
              "Restaurants",
              "Commercial Spaces",
              "Colleges & Museums",
            ].map((client, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-200
                flex items-center justify-center
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1"
              >
                <p className="text-base lg:text-lg font-semibold text-gray-800
                group-hover:text-black transition">
                  {client}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
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

          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Let’s Build Your Digital Experience
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Transform your space into an immersive visual experience with cinematic
            tours, drone visuals, and interactive walkthroughs.
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