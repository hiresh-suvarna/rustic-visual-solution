import React from "react";
import { Link } from "@tanstack/react-router";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden bg-[#faf8f4] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

        <div className="container relative mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-5xl rounded-[36px] border border-neutral-200 bg-white px-8 py-16 text-center shadow-[0_25px_70px_rgba(0,0,0,0.06)] lg:px-16">

            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                START YOUR PROJECT
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>

            <h2 className="font-bricolage text-4xl font-semibold leading-tight text-richBlack md:text-5xl lg:text-6xl">
              Ready to Elevate
              <br />
              Your Property?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
              From luxury residences to hospitality and commercial spaces,
              we create immersive visual experiences that help your
              properties stand out.
            </p>

            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-richBlack px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-richBlack"
              >
                Start Your Project

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-richBlack text-white">
        <div className="container mx-auto px-6 py-20 lg:px-12">

          {/* MAIN GRID */}

          <div className="grid gap-16 lg:grid-cols-[1.2fr_1.8fr]">          
            
          {/* ================= BRAND ================= */}

          <div className="max-w-md">

            <div className="flex items-center gap-4">

              <img
                src="/images/logoNew.PNG"
                alt="Rustic Visual Solution"
                className="h-12 w-auto"
              />

              <div>
                <h3 className="font-bricolage text-3xl font-semibold leading-none">
                  Rustic
                </h3>

                <p className="mt-1 text-sm uppercase tracking-[0.35em] text-gold">
                  Visual Solution
                </p>
              </div>

            </div>

            <p className="mt-8 text-base leading-8 text-white/70">
              We craft immersive visual experiences through cinematic
              drone videography, premium photography, and interactive
              360° virtual tours that help luxury properties leave a
              lasting impression.
            </p>

            {/* SOCIALS */}

            <div className="mt-10 flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-richBlack"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-richBlack"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-richBlack"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-richBlack"
              >
                <FaFacebook size={18} />
              </a>

            </div>

          </div>

          {/* ================= LINKS ================= */}

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">

            {/* QUICK LINKS */}

            <div>

              <h4 className="font-bricolage text-xl font-semibold">
                Quick Links
              </h4>

              <div className="mt-5 h-px w-12 bg-gold" />

              <ul className="mt-8 space-y-4 text-white/70">

                <li>
                  <Link to="/" className="transition hover:text-gold">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/our-work" className="transition hover:text-gold">
                    Our Work
                  </Link>
                </li>

                <li>
                  <Link to="/packages" className="transition hover:text-gold">
                    Packages
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="transition hover:text-gold">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="transition hover:text-gold">
                    Contact
                  </Link>
                </li>

              </ul>

            </div>

            {/* SERVICES */}

            <div>

              <h4 className="font-bricolage text-xl font-semibold">
                Services
              </h4>

              <div className="mt-5 h-px w-12 bg-gold" />

              <ul className="mt-8 space-y-4 text-white/70">

                <li>360° Virtual Tours</li>
                <li>Drone Cinematography</li>
                <li>Luxury Photography</li>
                <li>Immersive Visualization</li>
                <li>Construction Progress</li>

              </ul>

            </div>            {/* CONTACT */}

            <div>

              <h4 className="font-bricolage text-xl font-semibold">
                Contact
              </h4>

              <div className="mt-5 h-px w-12 bg-gold" />

              <ul className="mt-8 space-y-6 text-white/70">

                <li className="flex items-start gap-4">

                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gold">
                      Location
                    </p>
                    <p className="mt-1">Mumbai, India</p>
                  </div>

                </li>

                <li className="flex items-start gap-4">

                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gold">
                      Phone
                    </p>
                    <a
                      href="tel:+919137998059"
                      className="mt-1 block transition hover:text-gold"
                    >
                      +91 91379 98059
                    </a>
                  </div>

                </li>

                <li className="flex items-start gap-4">

                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gold">
                      Email
                    </p>
                    <a
                      href="mailto:hireshrustic.vp@gmail.com"
                      className="mt-1 block break-all transition hover:text-gold"
                    >
                      hireshrustic.vp@gmail.com
                    </a>
                  </div>

                </li>

              </ul>

            </div>

          </div>
          </div>

          {/* ================= BOTTOM BAR ================= */}

          <div className="mt-20 border-t border-white/10 pt-8">

            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

              <p className="text-sm text-white/50">
                © {currentYear} Rustic Visual Solution. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center gap-8 text-sm text-white/60">

                <Link
                  to="/privacy"
                  className="transition hover:text-gold"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="transition hover:text-gold"
                >
                  Terms of Service
                </Link>

              </div>

            </div>

          </div>

        </div>

      </footer>
    </>
  );
}