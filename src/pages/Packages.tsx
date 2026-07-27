import React from "react";
import PricingCard from '../components/PricingCard';

export default function Packages() {
  const packages = [
    {
      tier: 'Essential',
      price: '₹30,000',
      features: [
        '360° Virtual Tour (up to 10 scenes)',
        'Basic drone footage (15 minutes)',
        'Standard editing and color grading',
        'Web-optimized delivery',
        '2 rounds of revisions',
        '2-week delivery',
      ],
    },
    {
      tier: 'Premium',
      price: '₹80,000',
      features: [
        '360° Virtual Tour (up to 25 scenes)',
        'Extended drone cinematography (45 minutes)',
        'Advanced editing and color grading',
        'Interactive hotspots and navigation',
        'Custom branding integration',
        '4 rounds of revisions',
        '1-week delivery',
      ],
      highlighted: true,
    },
    {
      tier: 'Custom',
      price: 'Get Quote',
      features: [
        'Unlimited 360° scenes',
        'Full-day drone cinematography',
        'Cinematic post-production',
        'Custom interactive features',
        'Premium branding and design',
        'Dedicated project manager',
        'Unlimited revisions',
        'Priority 3-day delivery',
      ],
    },
  ];

  return (
  <div className="pt-32 lg:pt-40">

    {/* ================= HERO ================= */}

    <section className="px-6 lg:px-12">

      <div className="container mx-auto max-w-6xl text-center">

        <div className="flex items-center justify-center gap-4 mb-6">

          <div className="w-14 h-px bg-gold/40" />

          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
            PRICING
          </span>

          <div className="w-14 h-px bg-gold/40" />

        </div>

        <h1 className="font-bricolage text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95]">

          Packages Built
          <br />
          Around Your Vision

        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg lg:text-xl leading-9 text-muted-foreground">

          Whether you're showcasing a luxury residence,
          hospitality venue, commercial development or
          cultural landmark, we have a package designed to
          deliver immersive visual experiences.

        </p>

      </div>

    </section>

    {/* ================= PACKAGES ================= */}

    <section className="mt-24 bg-[#faf8f4] py-20 lg:py-28">

      <div className="container mx-auto max-w-7xl px-6 lg:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {packages.map((pkg, index) => (

            <PricingCard
              key={index}
              {...pkg}
            />

          ))}

        </div>

      </div>

    </section>

    {/* ================= CTA ================= */}

    <section className="py-24 lg:py-32 px-6">

      <div className="max-w-5xl mx-auto rounded-[36px] bg-gradient-to-br from-neutral-900 to-black text-white overflow-hidden relative">

        {/* Decorative Glow */}

        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative z-10 px-8 py-16 lg:px-20 lg:py-24 text-center">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-14 h-px bg-gold/40" />

            <span className="uppercase tracking-[0.35em] text-sm font-semibold text-gold">
              CUSTOM SOLUTIONS
            </span>

            <div className="w-14 h-px bg-gold/40" />

          </div>

          <h2 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">

            Need Something
            <br />
            Tailored?

          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-white/80">

            Every project is unique. If your requirements don't
            fit into one of our standard packages, we'll prepare
            a custom proposal designed specifically for your
            property and business goals.

          </p>

          <div className="mt-12">

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gold
                px-8
                py-4
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Request a Custom Quote

              <span className="text-lg">→</span>

            </a>

          </div>

        </div>

      </div>

    </section>

  </div>
);
}