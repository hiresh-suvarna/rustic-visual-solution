import React from "react";
import { Link } from "@tanstack/react-router";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-lightGrey bg-richBlack text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-12">

          {/* LEFT - BRAND */}
          <div className="max-w-md">
            <div className="flex items-center mb-6">
              <img
                src="/images/logoNew.PNG"
                alt="Logo"
                className="h-8 lg:h-10"
              />
              <p className="text-xl font-semibold ml-2 font-bricolage">
                Rustic Visual Solution
              </p>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Crafting immersive visual experiences for luxury spaces through
              cinematic drone visuals, 360° tours, and premium digital showcases.
            </p>

            {/* SOCIAL ICONS (React Icons) */}
            <div className="flex gap-5">
              <a
                href="#"
                className="text-white/80 hover:text-gold transition transform hover:scale-110"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-gold transition transform hover:scale-110"
              >
                <FaYoutube size={22} />
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-gold transition transform hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="#"
                className="text-white/80 hover:text-gold transition transform hover:scale-110"
              >
                <FaFacebook size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT - LINKS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-white">
                Quick Links
              </h4>

              <ul className="space-y-3 text-sm text-white/80">
                <li><Link to="/" className="hover:text-gold transition">Home</Link></li>
                <li><Link to="/our-work" className="hover:text-gold transition">Our Work</Link></li>
                <li><Link to="/packages" className="hover:text-gold transition">Packages</Link></li>
                <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-white">
                Services
              </h4>

              <ul className="space-y-3 text-sm text-white/80">
                <li>360° Virtual Tours</li>
                <li>Drone Cinematography</li>
                <li>Immersive Visualization</li>
                <li>Cinematic Interior Photography</li>
                <li>Construction Updates</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase text-white">
                Contact
              </h4>

              <ul className="space-y-4 text-sm text-white/80">

                <li className="flex items-center gap-3">
                  <MapPin size={16} />
                  Mumbai, India
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  +91 91379 98059
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  hireshrustic.vp@gmail.com
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 pt-8 border-t border-lightGrey flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">

          <p>
            © {currentYear} Rustic Visual Solution. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-gold transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}