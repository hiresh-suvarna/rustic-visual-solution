import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

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
          ? "bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="relative flex items-center justify-between h-20 lg:h-24">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="src\assets\Rustic visual solution logo.svg"
              alt="Rustic Visual Solution Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl lg:text-2xl font-semibold tracking-tight">
              Rustic Visual Solution
            </span>
          </Link>

          {/* Desktop Navigation (Perfect Center) */}
          <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate({ to: "/contact" })}
              className="px-6 py-2.5 rounded-full text-sm font-medium
              bg-black text-white hover:bg-neutral-800
              transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-base font-medium text-gray-600 hover:text-black transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => {
                  navigate({ to: "/contact" });
                  setIsMobileMenuOpen(false);
                }}
                className="px-6 py-2.5 rounded-full text-sm font-medium
                bg-black text-white hover:bg-neutral-800
                transition-all duration-300 mt-4"
              >
                Get a Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}