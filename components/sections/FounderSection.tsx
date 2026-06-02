import { AnimateIn } from "@/components/ui/AnimateIn";

export function FounderSection() {
  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo placeholder */}
          <AnimateIn>
            <div className="w-full aspect-[4/5] rounded-[16px] bg-[#EAECEF] flex items-center justify-center overflow-hidden max-w-md">
              <div className="text-center px-8">
                <span className="material-symbols-outlined text-[#CBD5E1] text-[48px] block mb-4">person</span>
                <p className="text-[#94A3B8] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">Foto</p>
                <p className="text-[#94A3B8] text-[11px] tracking-[0.08em] leading-[1.6]">
                  Foto profesional — ambiente natural, Punta del Este
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Right: text */}
          <AnimateIn delay={100}>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-6">
              La mente detrás de PP
            </p>
            <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
              Hola, soy Alejandro.
            </h2>
            <p className="text-[17px] text-[#0F172A]/70 leading-[1.75] mb-5">
              Pasé décadas en las industrias automotriz y de hospitalidad en Estados Unidos. Sé exactamente cómo funcionan estos negocios por dentro — los leads que se escapan, los seguimientos que no ocurren, las ventas que se pierden sin que nadie lo note.
            </p>
            <p className="text-[17px] text-[#0F172A]/70 leading-[1.75] mb-5">
              Pegasus Pixels nació de esa experiencia. No soy un desarrollador que aprendió de negocios — soy alguien del negocio que aprendió a construir las herramientas que siempre le faltaron.
            </p>
            <p className="text-[17px] text-[#0F172A]/70 leading-[1.75] mb-10">
              Hoy trabajo desde Punta del Este, atendiendo clientes locales y en Estados Unidos. Cuando implemento un sistema, me quedo hasta que tu equipo lo domina. Eso no es un extra — es parte del servicio.
            </p>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#EAECEF] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#94A3B8] text-[24px]">person</span>
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#0F172A]">Alejandro González</p>
                <p className="text-[13px] text-[#94A3B8]">Fundador, Pegasus Pixels · Punta del Este</p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
