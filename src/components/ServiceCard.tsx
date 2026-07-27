import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
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
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-gold/30
        hover:shadow-2xl
      "
    >
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

      {/* Icon */}

      <div
        className="
          mb-8
          inline-flex
          h-24
          w-24
          items-center
          justify-center
          rounded-3xl
          bg-[#faf8f4]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:bg-gold/10
        "
      >
        <img
          src={icon}
          alt={title}
          className="
            h-14
            w-14
            object-contain
            transition-all
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          font-bricolage
          text-2xl
          lg:text-3xl
          font-semibold
          leading-tight
          mb-5
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          text-muted-foreground
          leading-8
          text-base
        "
      >
        {description}
      </p>

      {/* Footer */}

      <div
        className="
          mt-10
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-sm
            uppercase
            tracking-[0.25em]
            text-gold
            font-semibold
          "
        >
          Explore
        </span>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-neutral-200
            transition-all
            duration-500
            group-hover:border-gold
            group-hover:bg-gold
            group-hover:text-white
            group-hover:rotate-45
          "
        >
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );
}