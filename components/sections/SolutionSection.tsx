import { AnimateIn } from "@/components/ui/AnimateIn";

export function SolutionSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <AnimateIn>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-6">
              Lo que hacemos
            </p>
            <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A] mb-6">
              Mejoramos cómo tu negocio se ve y cómo gestiona a sus clientes
            </h2>
            <p className="text-[17px] text-[#0F172A]/60 leading-[1.65] mb-6">
              Trabajamos en las dos partes del proceso: la presencia digital que genera confianza y atrae consultas, y el sistema interno que organiza cada oportunidad para que ninguna se pierda.
            </p>
            <p className="text-[16px] text-[#0F172A]/80 leading-[1.65] font-medium">
              Porque una vidriera sin sistema es tráfico desperdiciado. Y un sistema sin vidriera es un negocio invisible.
            </p>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="space-y-5">
              <div className="bg-[#F6F7F9] border border-[#E2E8F0] rounded-[12px] p-7">
                <p className="text-[11px] font-bold tracking-[0.12em] text-[#2563EB] uppercase mb-3">Puerta de entrada</p>
                <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Presencia digital que genera confianza</h3>
                <p className="text-[14px] text-[#0F172A]/60 leading-[1.65]">Sitio profesional, inventario claro, primera impresión que no deja dudas — diseñado para convertir visitas en consultas.</p>
              </div>
              <div className="bg-[#F6F7F9] border border-[#E2E8F0] rounded-[12px] p-7">
                <p className="text-[11px] font-bold tracking-[0.12em] text-[#2563EB] uppercase mb-3">Sistema interno</p>
                <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Gestión de leads que cierra ventas</h3>
                <p className="text-[14px] text-[#0F172A]/60 leading-[1.65]">Pipeline claro, seguimiento estructurado, tu equipo sabe qué hacer con cada consulta que entra — sin depender de la memoria de nadie.</p>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
