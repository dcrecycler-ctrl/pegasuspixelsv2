import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#F7F8FA] pt-20 pb-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <div className="max-w-3xl mb-14">
          <h1 className="anim-fade-up text-[52px] md:text-[72px] lg:text-[88px] font-black leading-[0.95] tracking-[-0.04em] text-slate-900 mb-7">
            Estás perdiendo clientes<br />
            <span className="text-red-500">sin darte cuenta</span>
          </h1>
          <p className="anim-fade-up delay-100 text-[18px] md:text-[20px] font-light text-slate-500 max-w-xl leading-[1.55] mb-10">
            Mensajes, llamadas y leads llegan — pero no hay un sistema que los organice o les dé seguimiento.
          </p>
          <div className="anim-fade-up delay-200">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 text-[15px] font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Arreglar cómo mi negocio gestiona clientes →
            </Link>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="anim-fade-up delay-300 w-full aspect-[21/8] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
          <p className="text-slate-300 text-[11px] tracking-[0.15em] uppercase text-center px-8">
            HERO_IMAGE — Business environment: WhatsApp, calls, overwhelmed staff
          </p>
        </div>

      </div>
    </section>
  );
}
