import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="max-w-[760px]">

          <p className="anim-fade-up text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-6">
            Punta del Este, Uruguay
          </p>

          <h1 className="anim-fade-up text-[44px] md:text-[60px] font-black leading-[1.05] tracking-[-0.03em] text-[#0F172A] mb-8">
            La primera impresión de tu negocio ya no ocurre en tu local.
          </h1>

          <p className="anim-fade-up delay-100 text-[18px] text-[#0F172A]/70 leading-[1.7] mb-4">
            Ocurre en tu sitio web, desde el celular de alguien que todavía no sabe si va a llamarte. Si esa impresión falla, el cliente no llega — no importa cuán bueno sea tu equipo o tu producto.
          </p>

          <p className="anim-fade-up delay-100 text-[18px] text-[#0F172A]/70 leading-[1.7] mb-10">
            En Pegasus Pixels mejoramos las dos partes que definen si un negocio crece: <span className="text-[#0F172A] font-semibold">la puerta de entrada</span> — tu presencia digital — y <span className="text-[#0F172A] font-semibold">el sistema interno</span> — cómo gestionás cada cliente que muestra interés.
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
              className="inline-flex items-center justify-center border border-[#CBD5E1] bg-transparent text-[#0F172A] rounded-[10px] px-5 py-[14px] text-[15px] font-medium hover:bg-slate-50 transition-colors"
            >
              Hablemos por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
