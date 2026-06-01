export function Footer() {
  return (
    <footer className="bg-ocean-800">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="text-headline-md font-bold text-sky-100 tracking-tighter">
              Pegasus Pixels
            </div>
            <p className="text-body-md text-sky-300 max-w-xs">
              Arquitectura digital de precisión para empresas que lideran sus industrias.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-label-sm uppercase text-sky-300">Navegación</span>
            <div className="w-8 h-px bg-ocean-600" />
            <a href="/soluciones" className="text-sky-300 hover:text-sun-600 transition-colors text-body-md">Soluciones</a>
            <a href="/industrias" className="text-sky-300 hover:text-sun-600 transition-colors text-body-md">Industrias</a>
            <a href="/portfolio" className="text-sky-300 hover:text-sun-600 transition-colors text-body-md">Portfolio</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <span className="text-label-sm uppercase text-sky-300">Contacto</span>
            <div className="w-8 h-px bg-ocean-600" />
            <a href="mailto:estudio@pegasuspixels.com" className="text-sky-300 hover:text-sun-600 transition-colors text-body-md">
              estudio@pegasuspixels.com
            </a>
            <span className="text-sky-300/70 text-body-md">Punta del Este, Uruguay</span>
            <div className="flex gap-6 mt-2">
              <a href="#" className="text-sky-300/60 hover:text-sky-300 transition-colors text-body-md text-sm">Privacidad</a>
              <a href="#" className="text-sky-300/60 hover:text-sky-300 transition-colors text-body-md text-sm">Términos</a>
            </div>
          </div>
        </div>

        <div className="border-t border-ocean-600 mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-widest text-sky-300/50">
            © 2025 Pegasus Pixels. Architecture for the Digital Age.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sun-600" />
            <span className="text-sky-300/50 text-[11px] uppercase tracking-widest">Global Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
