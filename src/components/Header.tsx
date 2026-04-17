import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/our-work", label: "Our Work" },
    { to: "/packages", label: "Packages" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md"
            : "bg-black/30 backdrop-blur-lg text-gold"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-16 lg:py-2">

          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logoNew.PNG"
                alt="Logo"
                className="h-8 lg:h-10"
              />
              <p className="text-lg lg:text-2xl font-medium tracking-tight">
                Rustic Visual Solution
              </p>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-12">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-md font-medium transition font-inter ${
                    isScrolled
                      ? "text-black hover:text-gold"
                      : "text-warmWhite hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate({ to: "/contact" })}
                className="bg-gold font-inter
                px-8 py-3 rounded-full text-md font-semibold
                text-black
                hover:bg-black hover:text-white
                transition-all duration-400
                "
              >
                Get a Quote
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`
        fixed inset-0 z-50 transition-all duration-300
        ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >

        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* SIDEBAR PANEL */}
        <div
          className={`
          absolute right-0 top-0 h-full w-[80%] max-w-sm
          bg-white/90 backdrop-blur-xl
          shadow-2xl
          p-6
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >

          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-6">

            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="
                text-lg font-medium
                text-black/80 hover:text-black
                transition
                "
              >
                {link.label}
              </Link>
            ))}

          </nav>

          {/* CTA */}
          <div className="mt-10">
            <button
              onClick={() => {
                navigate({ to: "/contact" });
                setIsMenuOpen(false);
              }}
              className="
              w-full py-3 rounded-full
              bg-black text-white
              hover:bg-neutral-800
              transition
              "
            >
              Get a Quote
            </button>
          </div>

        </div>
      </div>
    </>
  );
}