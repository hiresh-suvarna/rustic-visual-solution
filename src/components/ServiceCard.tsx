import React from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-8 lg:p-10 rounded-2xl bg-white border border-gray-200 
    text-center transition-all duration-300 
    hover:shadow-xl hover:-translate-y-1">

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 lg:w-20 lg:h-20 opacity-80 
          transition-all duration-300 
          group-hover:opacity-100 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>

    </div>
  );
}