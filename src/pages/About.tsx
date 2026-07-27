import React from "react";
import {
  Camera,
  Sparkles,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Premium Quality",
    description:
      "Professional-grade equipment and meticulous attention to detail ensure every project reflects the highest visual standards.",
  },
  {
    icon: Sparkles,
    title: "Tailored Experience",
    description:
      "Every property has its own story. We create custom visual experiences designed around your brand and audience.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Efficient workflows allow us to deliver polished visual assets without compromising on quality.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    description:
      "From luxury residences to commercial developments, clients trust us to present their spaces with confidence.",
  },
];

export default function About() {
  return (
    <div className="pt-32 lg:pt-40">

      {/* ================= HERO ================= */}

      <section className="px-6 lg:px-12">

        <div className="container mx-auto max-w-6xl text-center">

          <div className="flex justify-center items-center gap-4 mb-6">

            <div className="w-14 h-px bg-gold/40" />

            <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
              ABOUT US
            </span>

            <div className="w-14 h-px bg-gold/40" />

          </div>

          <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">

            Creating
            <br />
            Immersive Visual
            <br />
            Experiences

          </h1>

          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-9 max-w-3xl mx-auto">

            Rustic Visual Solution helps premium spaces tell their story
            through cinematic visuals, interactive 360° tours, and
            immersive digital experiences that leave lasting impressions.

          </p>

        </div>

      </section>
            {/* ================= STORY ================= */}

      <section className="mt-28 lg:mt-36 bg-[#faf8f4] py-20 lg:py-28">

        <div className="container mx-auto max-w-6xl px-6 lg:px-0">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-px bg-gold/40" />

                <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
                  OUR STORY
                </span>

              </div>

              <h2 className="font-bricolage text-4xl lg:text-5xl font-semibold leading-tight mb-8">

                The Story Behind
                <br />
                Rustic Visual Solution

              </h2>

              <div className="space-y-7 text-lg leading-9 text-muted-foreground">

                <p>

                  Every remarkable space deserves to be experienced before
                  someone even walks through the door. That belief became the
                  foundation of Rustic Visual Solution.

                </p>

                <p>

                  We combine cinematic storytelling, interactive technology,
                  and premium visual production to help businesses present
                  their spaces with clarity, emotion, and confidence.

                </p>

                <p>

                  Whether it's a luxury residence, hospitality venue,
                  commercial property, or educational campus, our work
                  transforms physical environments into immersive digital
                  experiences that inspire trust and engagement.

                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              {/* Decorative Border */}

              <div className="absolute -right-6 -bottom-6 w-full h-full rounded-[34px] border border-gold/30" />

              {/* Image */}

              <div className="relative overflow-hidden rounded-[34px] shadow-2xl">

                <img
                  src="/images/about-img.jpg"
                  alt="Rustic Visual Solution"
                  className="w-full h-[600px] object-cover transition duration-700 hover:scale-105"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= VISION ================= */}

      <section className="py-24 lg:py-32 px-6 lg:px-12">

        <div className="container mx-auto max-w-5xl">

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-neutral-200
              bg-gradient-to-br
              from-white
              to-[#faf8f4]
              px-10
              py-16
              lg:px-16
              lg:py-20
              shadow-xl
            "
          >

            {/* Decorative Circle */}

            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

            <div className="relative z-10 text-center">

              <div className="flex items-center justify-center gap-4 mb-6">

                <div className="w-14 h-px bg-gold/40" />

                <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
                  OUR VISION
                </span>

                <div className="w-14 h-px bg-gold/40" />

              </div>

              <h2 className="font-bricolage text-4xl lg:text-5xl font-semibold leading-tight mb-8">

                Shaping The Future
                <br />
                Of Visual Experiences

              </h2>

              <p className="max-w-3xl mx-auto text-lg leading-9 text-muted-foreground">

                We envision a future where distance is never a limitation to
                experiencing exceptional spaces. Through immersive technology,
                cinematic storytelling, and innovative digital solutions, we
                help premium brands create unforgettable first impressions.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#faf8f4] py-24 lg:py-32 px-6 lg:px-12">

        <div className="container mx-auto max-w-7xl">

          <div className="text-center mb-20">

            <div className="flex items-center justify-center gap-4 mb-6">

              <div className="w-14 h-px bg-gold/40" />

              <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
                WHY CHOOSE US
              </span>

              <div className="w-14 h-px bg-gold/40" />

            </div>

            <h2 className="font-bricolage text-5xl lg:text-6xl font-semibold leading-tight">

              Why Premium Brands
              <br />
              Trust Our Work

            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">

              Every project is crafted with precision, creativity, and an
              uncompromising commitment to quality—delivering visual
              experiences that elevate your brand.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-neutral-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >
                {/* Gold top line */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-0
                    bg-gold
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Number */}

                <span className="absolute top-8 right-8 text-5xl font-bold text-neutral-100 transition group-hover:text-gold/10">
                  0{index + 1}
                </span>

                {/* Icon */}

                <div
                  className="
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gold/10
                    text-gold
                    transition-all
                    duration-500
                    group-hover:bg-gold
                    group-hover:text-white
                    group-hover:rotate-6
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="leading-8 text-muted-foreground">
                  {feature.description}
                </p>

              </div>
            );
          })}
        </div>

        </div>

      </section>

    </div>
  );
}