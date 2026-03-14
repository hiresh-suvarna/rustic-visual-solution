import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  tier,
  price,
  features,
  highlighted = false,
}: PricingCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`
      relative group p-8 lg:p-10 rounded-3xl border
      transition-all duration-500 ease-out
      ${
        highlighted
          ? "bg-primary text-primary-foreground border-primary shadow-2xl scale-105"
          : "bg-white border-gray-200 hover:-translate-y-2 hover:shadow-2xl"
      }
      `}
    >
      {/* Highlight badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold tracking-wide rounded-full bg-white text-black shadow">
          MOST POPULAR
        </div>
      )}

      {/* Tier */}
      <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-2">
        {tier}
      </h3>

      {/* Price */}
      <div className="mb-8">
        <span className="text-4xl lg:text-5xl font-bold">{price}</span>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              size={20}
              className={`mt-0.5 flex-shrink-0 ${
                highlighted ? "text-white" : "text-primary"
              }`}
            />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => navigate({ to: "/contact" })}
        className={`
        w-full py-3 rounded-full font-medium
        transition-all duration-300
        ${
          highlighted
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-neutral-800"
        }
        hover:scale-[1.03] hover:shadow-lg
        `}
      >
        Get Started
      </button>
    </div>
  );
}