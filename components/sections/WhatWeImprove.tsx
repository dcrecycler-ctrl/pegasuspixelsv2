import { AnimateIn } from "@/components/ui/AnimateIn";

const cards = [
  {
    icon: "language",
    title: "Sitio profesional",
    items: ["Diseño que genera confianza", "Carga rápida en celular", "Estructura clara para el visitante"],
  },
  {
    icon: "inventory_2",
    title: "Inventario publicado",
    items: ["Autos o propiedades con foto y ficha", "Filtros y búsqueda fácil", "Actualización simple para tu equipo"],
  },
  {
    icon: "hub",
    title: "Pipeline de leads",
    items: ["Todas las consultas centralizadas", "Estado de cada oportunidad visible", "Seguimiento estructurado por etapas"],
  },
];

export function WhatWeImprove() {
  return (
    <section className="bg-[#F6F7F9] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-5">El servicio incluye</p>
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A]">
            Todo lo que tu negocio necesita para capturar y cerrar más ventas
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, items }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-8 h-full hover-lift">
                <span className="material-symbols-outlined text-[#2563EB] text-[48px] block mb-6">
                  {icon}
                </span>
                <h3 className="text-[18px] font-bold text-[#0F172A] leading-[1.25] mb-5">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-[#94A3B8] shrink-0" />
                      <span className="text-[14px] text-[#0F172A]/60 leading-[1.5]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
