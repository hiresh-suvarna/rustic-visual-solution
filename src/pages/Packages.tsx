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
    <div className="pt-32 lg:pt-40 pb-20 lg:pb-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Packages</h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your premium visual experience. All packages include professional equipment and expert execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-muted-foreground">
            Need a custom package? <a href="/contact" className="text-foreground font-medium hover:underline">Contact us</a> for a tailored solution.
          </p>
        </div>
      </div>
    </div>
  );
}
