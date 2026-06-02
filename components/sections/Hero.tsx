import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h1 className="anim-fade-up text-[44px] md:text-[56px] font-black leading-[1.05] tracking-[-0.03em] text-[#0F172A] mb-8">
              Haz que tu negocio reciba más clientes y no pierda oportunidades
            </h1>
            <p className="anim-fade-up delay-100 text-[17px] text-[#0F172A]/70 leading-[1.65] mb-2">
              Los clientes deciden en segundos si confiar en tu negocio.
            </p>
            <p className="anim-fade-up delay-100 text-[17px] text-[#0F172A]/70 leading-[1.65] mb-10">
              Si tu presencia digital no es clara, el interés se pierde antes del contacto.
            </p>
            <div className="anim-fade-up delay-200 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-[#2563EB] text-white rounded-[10px] px-5 py-[14px] text-[15px] font-semibold hover:bg-blue-700 transition-colors"
              >
                Solicitar consulta
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center border border-[#CBD5E1] bg-transparent text-[#0F172A] rounded-[10px] px-5 py-[14px] text-[15px] font-medium hover:bg-slate-50 transition-colors"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="anim-fade-right delay-200">
            <div className="w-full aspect-video rounded-[12px] bg-[#EAECEF] flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#94A3B8] text-[13px] font-semibold tracking-[0.15em] uppercase mb-2">IMAGEN</p>
                <p className="text-[#94A3B8] text-[11px] tracking-[0.08em] text-center px-8">
                  Concesionario o inmobiliaria con inventario visible y ordenado
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
