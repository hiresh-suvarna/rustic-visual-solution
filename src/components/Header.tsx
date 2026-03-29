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
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/images/logoNew.PNG"
                alt="Logo"
                className="h-8 sm:h-10 w-auto"
              />
              <span className="text-base sm:text-lg lg:text-xl font-semibold whitespace-nowrap">
                Rustic Visual
              </span>
            </Link>

            {/* DESKTOP NAV (VISIBLE ≥ 1024px) */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-black hover:text-gray-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA BUTTON (DESKTOP) */}
            <div className="hidden lg:block">
              <button
                onClick={() => navigate({ to: "/contact" })}
                className="px-5 py-2 rounded-full text-sm font-medium
                bg-black text-white hover:bg-neutral-800
                transition hover:scale-105 hover:shadow-md"
              >
                Get a Quote
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">

          {/* SIDE PANEL */}
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white p-6 shadow-xl">

            {/* CLOSE BUTTON */}
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={26} />
              </button>
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-500 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <button
              onClick={() => {
                navigate({ to: "/contact" });
                setIsMobileMenuOpen(false);
              }}
              className="mt-10 w-full py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition"
            >
              Get a Quote
            </button>

          </div>
        </div>
      )}
    </>
  );
}