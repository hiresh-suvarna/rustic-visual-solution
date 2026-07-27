import React from "react";
import { Check, ArrowRight } from "lucide-react";
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
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        transition-all
        duration-500
        ${
          highlighted
            ? "bg-neutral-900 text-white border-neutral-900 shadow-[0_25px_60px_rgba(0,0,0,0.18)] lg:-translate-y-4"
            : "bg-white border-neutral-200 hover:-translate-y-2 hover:border-gold/30 hover:shadow-2xl"
        }
      `}
    >
      {/* Gold Accent */}

      <div
        className={`
          absolute
          left-0
          top-0
          h-1
          w-full
          ${
            highlighted
              ? "bg-gold"
              : "bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
          }
        `}
      />

      {/* Most Popular */}

      <div className="p-8 lg:p-10">

        {/* Package */}

        <p
          className={`
            text-xs
            uppercase
            tracking-[0.35em]
            font-semibold
            ${
              highlighted
                ? "text-gold"
                : "text-gold"
            }
          `}
        >
          PACKAGE
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">

  <h3
    className="
      font-bricolage
      text-3xl
      font-semibold
      leading-tight
    "
  >
    {tier}
  </h3>

  {highlighted && (
    <span
      className="
        shrink-0
        rounded-full
        bg-gold/15
        px-3
        py-1
        text-[11px]
        font-semibold
        uppercase
        tracking-[0.15em]
        text-gold
      "
    >
      ★ Popular
    </span>
  )}

</div>

        {/* Price */}

        <div className="mt-8 flex items-end gap-2">

          <span
            className="
              font-bricolage
              text-5xl
              lg:text-6xl
              font-semibold
            "
          >
            {price}
          </span>

        </div>

        <div
          className={`
            mt-2
            text-sm
            ${
              highlighted
                ? "text-white/70"
                : "text-muted-foreground"
            }
          `}
        >
          Starting price
        </div>

        {/* Divider */}

        <div
          className={`
            my-8
            h-px
            ${
              highlighted
                ? "bg-white/10"
                : "bg-neutral-200"
            }
          `}
        />

        {/* Features */}

        <ul className="space-y-5">

          {features.map((feature, index) => (

            <li
              key={index}
              className="flex items-start gap-4"
            >

              <div
                className={`
                  mt-1
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  ${
                    highlighted
                      ? "bg-gold text-white"
                      : "bg-gold/10 text-gold"
                  }
                `}
              >

                <Check size={16} />

              </div>

              <span
                className={
                  highlighted
                    ? "text-white/90 leading-7"
                    : "text-muted-foreground leading-7"
                }
              >
                {feature}
              </span>

            </li>

          ))}

        </ul>

        {/* CTA */}

        <button
          onClick={() => navigate({ to: "/contact" })}
          className={`
            mt-10
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            py-4
            font-medium
            transition-all
            duration-300
            ${
              highlighted
                ? "bg-gold text-white hover:brightness-110"
                : "bg-neutral-900 text-white hover:bg-black"
            }
            hover:-translate-y-1
          `}
        >
          Get Started

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}