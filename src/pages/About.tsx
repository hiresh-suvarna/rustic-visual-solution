import React from "react";
import { Camera, Sparkles, Rocket, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 lg:pt-40 pb-24 lg:pb-32 px-6 lg:px-12">

      <div className="container mx-auto max-w-6xl">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Us
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting immersive visual experiences that transform how premium
            spaces are discovered and remembered.
          </p>
        </div>


        {/* STORY */}
        <section className="grid md:grid-cols-2 gap-14 items-center mb-24">

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Story
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Rustic Visual Solution was founded on a simple belief:
                every premium space deserves to be experienced in its full
                glory, regardless of physical boundaries.
              </p>

              <p>
                We combine cutting-edge technology with artistic vision to
                create immersive visual experiences that captivate audiences
                and elevate brands.
              </p>

              <p>
                From luxury residences to commercial spaces, our work transforms
                how spaces are discovered, explored, and remembered.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/about-img.jpg"
              alt="Visual Experience"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

        </section>


        {/* VISION */}
        <section className="text-center mb-24 max-w-3xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our Vision
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            We envision a world where distance is no barrier to experiencing
            exceptional spaces. Through 360° virtual tours, drone cinematography,
            and immersive showcases, we're redefining how premium properties
            and brands connect with their audiences.
          </p>

        </section>


        {/* WHY CHOOSE US */}
        <section>

          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition">

              <Camera className="mb-4 text-primary" size={28} />

              <h3 className="text-xl font-semibold mb-3">
                Premium Quality
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Professional-grade equipment and expert execution ensure every
                project meets the highest standards.
              </p>

            </div>


            <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition">

              <Sparkles className="mb-4 text-primary" size={28} />

              <h3 className="text-xl font-semibold mb-3">
                Tailored Approach
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Every space is unique. We customize our services to perfectly
                match your vision and requirements.
              </p>

            </div>


            <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition">

              <Rocket className="mb-4 text-primary" size={28} />

              <h3 className="text-xl font-semibold mb-3">
                Fast Delivery
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Efficient workflow ensures quick turnaround without
                compromising visual quality.
              </p>

            </div>


            <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition">

              <ShieldCheck className="mb-4 text-primary" size={28} />

              <h3 className="text-xl font-semibold mb-3">
                Trusted Partner
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Luxury brands and premium spaces trust us to showcase
                their excellence.
              </p>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}