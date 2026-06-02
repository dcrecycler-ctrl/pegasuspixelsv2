export function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="anim-fade-up text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-6">
              Punta del Este, Uruguay
            </p>
            <h1 className="anim-fade-up text-[44px] md:text-[56px] font-black leading-[1.05] tracking-[-0.03em] text-[#0F172A] mb-8">
              La primera impresión de tu negocio ya <span className="text-[#2563EB]">no ocurre en tu local.</span>
            </h1>
            <p className="anim-fade-up delay-100 text-[17px] text-[#0F172A]/70 leading-[1.65] mb-4">
              Ocurre en tu sitio web, desde el celular de alguien que todavía no sabe si va a llamarte. Si esa impresión falla, el cliente no llega — no importa cuán bueno sea tu equipo o tu producto.
            </p>
            <p className="anim-fade-up delay-100 text-[17px] text-[#0F172A]/70 leading-[1.65] mb-10">
              Mejoramos las dos partes que definen si un negocio crece: <span className="text-[#0F172A] font-semibold">la puerta de entrada</span> — tu presencia digital — y <span className="text-[#0F172A] font-semibold">el sistema interno</span> — cómo gestionás cada cliente que muestra interés.
            </p>
            <div className="anim-fade-up delay-200 flex flex-col sm:flex-row gap-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-[#2563EB] text-white rounded-[10px] px-5 py-[14px] text-[15px] font-semibold hover:bg-blue-700 transition-colors"
              >
                Conocé cómo trabajamos
              </a>
              <a
                href="https://wa.me/59899000000?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Pegasus%20Pixels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-[10px] px-5 py-[14px] text-[15px] font-semibold hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Hablemos por WhatsApp
              </a>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="anim-fade-right delay-200">
            <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden">
              <img
                src="/dealer-floor.jpg"
                alt="Showroom de autos moderno"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
