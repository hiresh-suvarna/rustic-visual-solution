import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  projectType: string;
}

export default function TestimonialCard({
  quote,
  clientName,
  projectType,
}: TestimonialCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-neutral-200
        bg-white
        p-8
        lg:p-10
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-gold/30
        hover:shadow-2xl
      "
    >
      {/* Decorative Quote */}

      <div
        className="
          absolute
          right-8
          top-6
          font-bricolage
          text-8xl
          leading-none
          text-gold/10
          select-none
        "
      >
        “
      </div>

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div className="flex gap-1 text-gold">

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="currentColor"
              stroke="none"
            />
          ))}

        </div>

        <span
          className="
            rounded-full
            bg-gold/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-gold
          "
        >
          Verified Client
        </span>

      </div>

      {/* Quote */}

      <p
        className="
          relative
          z-10
          text-lg
          leading-9
          text-muted-foreground
        "
      >
        "{quote}"
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-neutral-200" />

      {/* Footer */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-gold
              text-base
              font-semibold
              text-white
            "
          >
            {clientName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div>

            <h4
              className="
                font-bricolage
                text-xl
                font-semibold
              "
            >
              {clientName}
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {projectType}
            </p>

          </div>

        </div>

      </div>

      {/* Gold Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
          origin-left
          scale-x-0
          bg-gold
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

    </div>
  );
}