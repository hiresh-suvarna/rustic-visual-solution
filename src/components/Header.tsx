import React, { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = location.pathname === "/";
  const useWhiteHeader = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/our-work", label: "Our Work" },
    { to: "/packages", label: "Packages" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          useWhiteHeader
            ? "bg-white/85 backdrop-blur-xl shadow-md"
            : "bg-black/30 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

          <div className="flex items-center justify-between h-16 xl:h-20">

            {/* Logo */}

            <Link to="/" className="flex items-center gap-3 shrink-0">

              <img
                src="/images/logoNew.PNG"
                alt="Logo"
                className="h-8 xl:h-10"
              />

              <p
                className={`hidden sm:block text-lg xl:text-xl font-semibold leading-tight transition-colors ${
                  useWhiteHeader ? "text-black" : "text-[#D4A04C]"
                }`}
              >
                Rustic Visual
                <br />
                Solution
              </p>

            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">

              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeProps={{
                    className: "text-[#D4A04C]",
                  }}
                  className={`font-medium transition-colors ${
                    useWhiteHeader
                      ? "text-black hover:text-[#D4A04C]"
                      : "text-white hover:text-[#D4A04C]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

            </nav>

            {/* Desktop CTA */}

            <div className="hidden xl:block">

              <button
                onClick={() => navigate({ to: "/contact" })}
                className="
                px-6 xl:px-7
                py-2.5 xl:py-3
                rounded-full
                bg-[#D4A04C]
                text-black
                font-semibold
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
                "
              >
                Get a Quote
              </button>

            </div>

            {/* Mobile Menu Button */}

            <button
              className={`xl:hidden transition ${
                useWhiteHeader ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        {/* Backdrop */}

        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}

        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          <div className="p-6">

            <div className="flex items-center justify-between mb-10">

              <span className="text-xl font-semibold">
                Menu
              </span>

              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>

            </div>

            <nav className="flex flex-col gap-7">

              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  activeProps={{
                    className: "text-[#D4A04C]",
                  }}
                  className="text-lg font-medium text-black hover:text-[#D4A04C] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

            </nav>

            <button
              onClick={() => {
                navigate({ to: "/contact" });
                setIsMenuOpen(false);
              }}
              className="w-full mt-12 rounded-full bg-black text-white py-3 hover:bg-[#D4A04C] hover:text-black transition"
            >
              Get a Quote
            </button>

          </div>

        </div>

      </div>
    </>
  );
}