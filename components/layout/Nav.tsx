"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const solucionesDropdown = [
  {
    label: "Dealio",
    href: "/dealio",
    description: "Plataforma para automotoras",
    icon: "directions_car",
  },
  {
    label: "Oikos",
    href: "/oikos",
    description: "Plataforma para inmobiliarias",
    icon: "architecture",
  },
  {
    label: "Hermes",
    href: "/contacto",
    description: "Plataforma para restaurantes",
    icon: "restaurant",
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
          className="text-[22px] font-black text-ocean-900 tracking-tighter hover:text-ocean-700 transition-colors duration-300"
        >
          Pegasus Pixels
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">

          {/* Soluciones with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-ink-700 hover:text-primary transition-colors duration-300 text-[14px] font-medium"
            >
              Plataformas
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
              className="text-ink-700 hover:text-primary transition-colors duration-300 text-[14px] font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA — dark bg / white text per brand spec */}
        <a
          href="https://wa.me/59899000000?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Pegasus%20Pixels"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 text-[13px] font-semibold rounded-lg hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          WhatsApp
        </a>

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
            className="text-ink-700 hover:text-primary transition-colors text-[14px] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Plataformas
          </Link>
          {solucionesDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 pl-4 text-ink-700 hover:text-primary transition-colors text-[14px] font-medium"
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
              className="text-ink-700 hover:text-primary transition-colors text-[14px] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/59899000000?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Pegasus%20Pixels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 text-[13px] font-semibold rounded-lg hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200 mt-2"
            onClick={() => setMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
