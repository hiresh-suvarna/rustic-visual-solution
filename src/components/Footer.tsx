import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Rustic Visual Solution
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Crafting immersive visual experiences for luxury spaces through
              cinematic drone visuals, 360° tours, and premium digital showcases.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">

              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-gray-600 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-gray-600 transition"
              >
                <Youtube size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-gray-600 transition"
              >
                <Linkedin size={18} />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
              <li><Link to="/our-work" className="hover:text-foreground transition">Our Work</Link></li>
              <li><Link to="/packages" className="hover:text-foreground transition">Packages</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>360° Virtual Tours</li>
              <li>Drone Cinematography</li>
              <li>Immersive Showcases</li>
              <li>Luxury Property Visuals</li>
              <li>Commercial Space Tours</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold mb-5 tracking-wide uppercase">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-muted-foreground">

              <li className="flex items-center gap-3">
                <MapPin size={16} />
                Mumbai, India
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} />
                +91 90000 00000
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} />
                hello@rusticvisual.com
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}

        <div className="mt-14 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">

          <p>
            © {currentYear} Rustic Visual Solution. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-foreground transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}