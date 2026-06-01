"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Industrias", href: "/industrias" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sobre Mí", href: "/sobre-mi" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`top-0 sticky z-50 bg-surface/90 backdrop-blur-md border-b border-outline/40 h-20 transition-shadow duration-300 ${
        scrolled ? "coastal-shadow" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full px-5 md:px-16 h-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-headline-md font-bold text-on-surface tracking-tighter hover:text-primary transition-colors duration-300"
        >
          Pegasus Pixels
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[16px] font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/contacto"
          className="hidden md:block bg-primary text-on-primary px-7 py-3 text-label-sm uppercase hover:bg-primary-variant transition-all rounded-lg"
        >
          SOLICITAR CONSULTA
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-on-surface transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-on-surface transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-on-surface transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline/40 py-6 px-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors text-[16px] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-primary text-on-primary px-7 py-3 text-label-sm uppercase text-center rounded-lg mt-2"
            onClick={() => setMenuOpen(false)}
          >
            SOLICITAR CONSULTA
          </Link>
        </div>
      )}
    </nav>
  );
}
