"use client";

import { useState, useEffect } from "react";
import { LinkButton } from "@/components/ui/Button";

const navLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Industrias", href: "#industrias" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-outline/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-base font-semibold text-cream tracking-wide hover:text-gold transition-colors duration-200"
          >
            Pegasus Pixels
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body text-[13px] font-medium text-cream-dim hover:text-cream transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <LinkButton href="#contacto" size="sm">
              Solicitar Consulta
            </LinkButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-ink-low border-t border-outline/30 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-cream-dim hover:text-cream transition-colors duration-200 px-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <LinkButton href="#contacto" size="sm" onClick={() => setMenuOpen(false)}>
                Solicitar Consulta
              </LinkButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
