import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            ? "bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-md"
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

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">

              <Link to="/" className="text-sm font-medium hover:text-gray-600 transition">
                Home
              </Link>

              <Link to="/our-work" className="text-sm font-medium hover:text-gray-600 transition">
                Our Work
              </Link>

              {/* DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-gray-600 transition">
                  Services
                  <ChevronDown size={16} />
                </button>

                <div
                  className={`
                  absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px]
                  transition-all duration-300
                  ${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }
                  `}
                >
                  <div
                    className="
                    rounded-2xl p-6
                    bg-white/40 backdrop-blur-2xl
                    border border-white/20
                    shadow-2xl
                    "
                  >
                    <div className="space-y-4">

                      <Link to="/packages" className="block p-3 rounded-xl hover:bg-white/40 transition">
                        <p className="font-medium">Packages</p>
                        <p className="text-sm text-gray-500">Explore pricing and plans</p>
                      </Link>

                      <Link to="/about" className="block p-3 rounded-xl hover:bg-white/40 transition">
                        <p className="font-medium">About Us</p>
                        <p className="text-sm text-gray-500">Learn about our story</p>
                      </Link>

                      <Link to="/contact" className="block p-3 rounded-xl hover:bg-white/40 transition">
                        <p className="font-medium">Contact</p>
                        <p className="text-sm text-gray-500">Get in touch</p>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="text-sm font-medium hover:text-gray-600 transition">
                Contact
              </Link>

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

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU (GLASS) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* PANEL */}
          <div
            className="
            absolute right-0 top-0 h-full w-[85%] max-w-sm
            bg-white/30 backdrop-blur-2xl
            border-l border-white/20
            shadow-2xl
            p-6
            "
          >

            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={26} />
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-black/80 hover:text-black transition"
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
              className="
              mt-10 w-full py-3 rounded-full
              bg-black text-white hover:bg-neutral-800
              transition-all duration-300
              hover:scale-[1.02] shadow-lg
              "
            >
              Get a Quote
            </button>

          </div>
        </div>
      )}
    </>
  );
}