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
      {/* ================= CARD ================= */}

<div
  onClick={() => embedUrl && setIsOpen(true)}
  className="
    group
    relative
    cursor-pointer
    overflow-hidden
    rounded-[32px]
    bg-white
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-3
    hover:shadow-2xl
  "
>

  {/* Image */}

  <div className="relative aspect-[5/4] overflow-hidden">

    <img
      src={image}
      alt={title}
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-[900ms]
        ease-out
        group-hover:scale-110
      "
    />

    {/* Gradient */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/70
        via-black/10
        to-transparent
        opacity-70
        transition
        duration-500
      "
    />

    {/* Category */}

    <div className="absolute left-6 top-6">

      <span
        className="
          rounded-full
          bg-white/90
          backdrop-blur-md
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-black
        "
      >
        {category}
      </span>

    </div>

    {/* Play */}

    {embedUrl && (

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      >

        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-white/15
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:scale-110
          "
        >

          <Play
            size={30}
            className="ml-1 text-white"
          />

        </div>

      </div>

    )}

    {/* Bottom Content */}

    <div
      className="
        absolute
        bottom-0
        left-0
        right-0
        p-8
      "
    >

      <h3
        className="
          font-bricolage
          text-3xl
          font-semibold
          leading-tight
          text-white
        "
      >

        {title}

      </h3>

      <div
        className="
          mt-6
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
            text-white/80
          "
        >
          View Project
        </span>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            transition-all
            duration-500
            group-hover:translate-x-1
          "
        >

          →

        </div>

      </div>

    </div>

  </div>

</div>      {/* ================= VIDEO MODAL ================= */}

      {embedUrl && isOpen && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-md
            p-6
          "
          onClick={() => setIsOpen(false)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-6xl
              overflow-hidden
              rounded-[34px]
              bg-white
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              animate-in
              fade-in
              zoom-in-95
              duration-300
            "
          >

            {/* Gold Accent */}

            <div className="absolute left-0 top-0 h-1 w-full bg-gold" />

            {/* Header */}

            <div className="flex items-center justify-between border-b border-neutral-200 px-8 py-6">

              <div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                  PROJECT SHOWCASE
                </p>

                <h2 className="font-bricolage text-3xl font-semibold">
                  {title}
                </h2>

              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-200
                  bg-white
                  text-neutral-500
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  hover:rotate-90
                "
              >
                ✕
              </button>

            </div>

            {/* Video */}

            <div className="bg-black p-6">

              <div className="overflow-hidden rounded-2xl aspect-video">

                <iframe
                  src={embedUrl}
                  title={title}
                  allowFullScreen
                  className="h-full w-full"
                />

              </div>

            </div>

            {/* Footer */}

            <div className="flex items-center justify-between px-8 py-6">

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  Category
                </p>

                <p className="mt-2 text-lg font-medium">
                  {category}
                </p>

              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="
                  rounded-full
                  border
                  border-neutral-300
                  px-6
                  py-3
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}