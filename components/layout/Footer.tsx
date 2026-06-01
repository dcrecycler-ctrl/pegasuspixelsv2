const footerLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Industrias", href: "#industrias" },
  { label: "Portfolio", href: "#portfolio" },
];

const legalLinks = [
  { label: "Privacidad", href: "#" },
  { label: "Términos", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-ink-low border-t border-outline/30">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="font-display text-lg font-semibold text-cream hover:text-gold transition-colors duration-200 block mb-4"
            >
              Pegasus Pixels
            </a>
            <p className="font-body text-sm text-outline-muted leading-relaxed max-w-xs">
              Arquitectura digital de precisión para empresas que no aceptan compromisos.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-outline-muted mb-5">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream-dim hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-outline-muted mb-5">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:estudio@pegasuspixels.com"
                  className="font-body text-sm text-cream-dim hover:text-cream hover:text-gold transition-colors duration-200"
                >
                  estudio@pegasuspixels.com
                </a>
              </li>
              <li>
                <span className="font-body text-sm text-outline-muted">
                  Punta del Este, Uruguay
                </span>
              </li>
              <li>
                <span className="font-body text-sm text-outline-muted">
                  Global Services
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline/30 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-xs text-outline-muted">
            © 2025 Pegasus Pixels. Architecture for the Digital Age.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xs text-outline-muted hover:text-cream-dim transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
