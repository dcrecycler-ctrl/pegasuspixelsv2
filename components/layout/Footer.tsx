export function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline/30">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Brand */}
        <div className="space-y-8">
          <div className="text-headline-md font-bold text-on-surface tracking-tighter">
            Pegasus Pixels
          </div>
          <p className="text-body-md text-on-surface-variant max-w-xs">
            Arquitectura digital de precisión para empresas que lideran sus industrias.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-6">
          <span className="text-label-sm uppercase text-primary-variant">Navegación</span>
          <a
            href="#soluciones"
            className="text-on-surface-variant hover:text-ocean-700-variant transition-colors text-body-md"
          >
            Soluciones
          </a>
          <a
            href="#industrias"
            className="text-on-surface-variant hover:text-ocean-700-variant transition-colors text-body-md"
          >
            Industrias
          </a>
          <a
            href="#portfolio"
            className="text-on-surface-variant hover:text-ocean-700-variant transition-colors text-body-md"
          >
            Portfolio
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-6">
          <span className="text-label-sm uppercase text-primary-variant">Legal</span>
          <a
            href="#"
            className="text-on-surface-variant hover:text-ocean-700-variant transition-colors text-body-md"
          >
            Privacidad
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-ocean-700-variant transition-colors text-body-md"
          >
            Términos
          </a>
          <p className="mt-8 text-[11px] uppercase tracking-widest text-on-surface-variant/40">
            © 2025 Pegasus Pixels. Architecture for the Digital Age.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
