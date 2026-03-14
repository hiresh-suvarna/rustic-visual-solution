import React from "react";
import { Quote, Star } from "lucide-react";

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
      group relative p-8 lg:p-10 rounded-3xl
      bg-white border border-gray-200
      hover:-translate-y-2 hover:shadow-2xl
      transition-all duration-500
      "
    >
      {/* Quote Icon */}
      <Quote
        size={32}
        className="absolute top-6 right-6 text-gray-200 group-hover:text-gray-300 transition"
      />

      {/* Stars */}
      <div className="flex mb-4 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" stroke="none" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg lg:text-xl leading-relaxed mb-8 italic text-gray-600">
        "{quote}"
      </p>

      {/* Client */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div
          className="
          w-10 h-10 rounded-full bg-gray-200
          flex items-center justify-center
          font-semibold text-sm
          "
        >
          {clientName.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-gray-900">
            {clientName}
          </p>

          <p className="text-sm text-gray-500">
            {projectType}
          </p>
        </div>

      </div>
    </div>
  );
}