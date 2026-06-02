export function Footer() {
  return (
    <footer className="bg-ocean-800">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="text-headline-md font-bold text-sky-100 tracking-tight">
              Pegasus Pixels
            </div>
            <p className="text-[13px] font-normal leading-relaxed text-sky-300/70 max-w-xs">
              Presencia digital y gestión de clientes para automotoras, inmobiliarias y restaurantes en Uruguay.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold tracking-[0.10em] uppercase text-sky-400">Navegación</span>
            <div className="w-8 h-px bg-ocean-600" />
            <a href="/soluciones" className="text-[13px] font-normal text-sky-300/50 hover:text-sky-100 transition-colors">Plataformas</a>
            <a href="/industrias" className="text-[13px] font-normal text-sky-300/50 hover:text-sky-100 transition-colors">Industrias</a>
            <a href="/portfolio" className="text-[13px] font-normal text-sky-300/50 hover:text-sky-100 transition-colors">Portfolio</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold tracking-[0.10em] uppercase text-sky-400">Contacto</span>
            <div className="w-8 h-px bg-ocean-600" />
            <a href="mailto:estudio@pegasuspixels.com" className="text-[13px] font-normal text-sky-300/50 hover:text-sky-100 transition-colors">
              estudio@pegasuspixels.com
            </a>
            <span className="text-[13px] font-normal text-sky-300/50">Punta del Este, Uruguay</span>
            <div className="flex gap-6 mt-2">
              <a href="#" className="text-[13px] font-normal text-sky-300/50 hover:text-sky-100 transition-colors">Privacidad</a>
              <a href="#" className="text-[13px] font-normal text-sky-300/50 hover:text-sky-100 transition-colors">Términos</a>
            </div>
          </div>
        </div>

        <div className="border-t border-ocean-600 mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] font-normal text-sky-300/30">
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
