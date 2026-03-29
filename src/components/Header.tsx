import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/our-work", label: "Our Work" },
    { to: "/packages", label: "Packages" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* TOP BAR */}
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/logoNew.PNG"
              alt="Logo"
              className="h-8 sm:h-10 w-auto"
            />
            <span className="text-base sm:text-lg lg:text-xl font-semibold whitespace-nowrap">
              Rustic Visual Solutions
            </span>
          </Link>

          {/* DESKTOP NAV (SIMPLE) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium hover:text-gray-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate({ to: "/contact" })}
              className="
              px-5 py-2 rounded-full text-sm font-medium
              bg-black text-white hover:bg-neutral-800
              transition hover:scale-105 hover:shadow-md
              "
            >
              Get a Quote
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MOBILE DROPDOWN (PREMIUM GLASS) */}
        <div
          className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
            mx-3 mt-3 mb-4
            rounded-2xl
            bg-gradient-to-b from-white/70 to-white/40
            backdrop-blur-2xl
            border border-white/30
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            px-6 py-6
            "
          >
            <nav className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-black/80 hover:text-black transition"
                >
                  {link.label}
                </Link>
              ))}

            </nav>

            <div className="my-5 border-t border-white/20" />

            {/* CTA */}
            <button
              onClick={() => {
                navigate({ to: "/contact" });
                setIsMobileMenuOpen(false);
              }}
              className="
              w-full py-3 rounded-full
              bg-black text-white hover:bg-neutral-800
              transition-all duration-300
              hover:scale-[1.02]
              shadow-md
              "
            >
              Get a Quote
            </button>

          </div>
        </div>

      </div>
    </header>
  );
}