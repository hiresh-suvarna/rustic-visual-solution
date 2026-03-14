import { useState } from "react";
import React from "react";
import { Play } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  embedUrl?: string;
}

export default function PortfolioCard({
  image,
  title,
  category,
  embedUrl,
}: PortfolioCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => embedUrl && setIsOpen(true)}
        className="
        group cursor-pointer rounded-2xl overflow-hidden
        bg-white border border-gray-200
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-2xl
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-[4/3] overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
            w-full h-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
            "
          />

          {/* Dark overlay */}
          <div
            className="
            absolute inset-0 bg-black/20
            opacity-0 group-hover:opacity-100
            transition duration-500
            "
          />

          {/* Play Button */}
          {embedUrl && (
            <div
              className="
              absolute inset-0 flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition duration-500
              "
            >
              <div
                className="
                flex items-center justify-center
                w-14 h-14 rounded-full
                bg-white/90 backdrop-blur
                shadow-lg
                transition-transform duration-300
                group-hover:scale-110
                "
              >
                <Play size={22} className="text-black ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* TEXT CONTENT */}
        <div className="p-6 space-y-3">

          <span
            className="
            inline-block px-3 py-1 text-xs font-medium
            bg-gray-100 text-gray-700
            rounded-full
            "
          >
            {category}
          </span>

          <h3
            className="
            text-xl font-semibold
            tracking-tight
            group-hover:text-black
            transition-colors
            "
          >
            {title}
          </h3>

        </div>
      </div>

      {/* VIDEO MODAL */}
      {embedUrl && isOpen && (
        <div
          className="
          fixed inset-0 z-50 flex items-center justify-center
          bg-black/80 backdrop-blur-sm p-6
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
            relative bg-white rounded-2xl
            max-w-5xl w-full p-6
            shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="
              absolute top-4 right-4
              text-gray-500 hover:text-black
              text-xl transition
              "
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">{title}</h2>

            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allowFullScreen
                title={title}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}