"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const solucionesDropdown = [
  {
    label: "Oikos",
    href: "/oikos",
    description: "Sistema de gestión inmobiliaria",
    icon: "architecture",
  },
  {
    label: "Dealio",
    href: "/dealio",
    description: "Automotive Sales Operating System",
    icon: "directions_car",
  },
];

const navLinks = [
  { label: "Industrias", href: "/industrias" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Sobre Mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`top-0 sticky z-50 border-b border-outline/40 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-white/98 coastal-shadow"
          : "bg-white/90"
      }`}
    >
      <div className="flex justify-between items-center w-full px-5 md:px-16 h-20 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-headline-md font-bold text-ocean-900 tracking-tighter hover:text-ocean-700 transition-colors duration-300"
        >
          Pegasus Pixels
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">

          {/* Soluciones with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-ocean-800 hover:text-ocean-700 transition-colors duration-300 text-[16px] font-medium"
            >
              Soluciones
              <span
                className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {dropdownOpen && (
              <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-64 bg-surface border border-outline rounded-xl coastal-shadow py-2 overflow-hidden">
                {/* arrow */}
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-surface border-l border-t border-outline rotate-45" />

                {/* parent link */}
                <Link
                  href="/soluciones"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 text-[13px] font-semibold text-primary-variant uppercase tracking-[0.1em] hover:bg-sand-100 transition-colors"
                >
                  Ver todas las soluciones
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>

                <div className="mx-5 h-px bg-outline my-1" />

                {solucionesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 px-5 py-3.5 hover:bg-sand-100 transition-colors group"
                  >
                    <span className="material-symbols-outlined text-primary-variant text-[20px] mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <span className="block text-[15px] font-semibold text-ocean-900 group-hover:text-ocean-700 transition-colors">
                        {item.label}
                      </span>
                      <span className="block text-[12px] text-ink-600 mt-0.5">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ocean-800 hover:text-ocean-700 transition-colors duration-300 text-[16px] font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA — Sun 600 with Ocean 900 text */}
        <Link
          href="/contacto"
          className="hidden md:block bg-primary text-on-primary px-7 py-3 text-label-sm uppercase hover:bg-primary-hover transition-all rounded-lg font-semibold"
        >
          SOLICITAR CONSULTA
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ocean-900 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-px bg-ocean-900 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ocean-900 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline py-6 px-5 flex flex-col gap-5">
          <Link
            href="/soluciones"
            className="text-ocean-800 hover:text-ocean-700 transition-colors text-[16px] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Soluciones
          </Link>
          {solucionesDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 pl-4 text-ink-700 hover:text-ocean-700 transition-colors text-[15px] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-primary-variant text-[18px]">{item.icon}</span>
              {item.label}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ocean-800 hover:text-ocean-700 transition-colors text-[16px] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-primary text-on-primary px-7 py-3 text-label-sm uppercase text-center rounded-lg mt-2 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            SOLICITAR CONSULTA
          </Link>
        </div>
      )}
    </nav>
  );
}
