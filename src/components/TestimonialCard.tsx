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
      relative p-8
      bg-warmWhite border border-lightGrey
      transition-all duration-300
      hover:shadow-lg
      "
    >
      {/* Left Gold Border */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gold " />

      {/* Stars */}
      <div className="flex gap-1 text-gold mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" stroke="none" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-base leading-relaxed text-grey mb-6">
        "{quote}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="
          w-12 h-12 rounded-full bg-gold text-white
          flex items-center justify-center
          font-semibold text-sm
          "
        >
          {clientName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        {/* Name + Type */}
        <div>
          <p className="font-semibold text-richBlack">
            {clientName}
          </p>
          <p className="text-sm text-grey">
            {projectType}
          </p>
        </div>
      </div>
    </div>
  );
}