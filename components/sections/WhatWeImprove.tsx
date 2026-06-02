import { AnimateIn } from "@/components/ui/AnimateIn";

const cards = [
  {
    icon: "language",
    title: "Presencia digital",
    items: ["Estructura del sitio", "Inventario claro", "Mejor primera impresión"],
  },
  {
    icon: "inventory_2",
    title: "Inventario",
    items: ["Autos / propiedades organizados", "Navegación simple", "Visual claro"],
  },
  {
    icon: "hub",
    title: "Gestión de contactos",
    items: ["WhatsApp / llamadas / formularios", "Registro de clientes", "Seguimiento básico"],
  },
];

export function WhatWeImprove() {
  return (
    <section className="bg-[#F6F7F9] py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-14">
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.1] text-[#0F172A]">
            Lo que implementamos
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, items }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-8 h-full hover-lift">
                <span className="material-symbols-outlined text-[#2563EB] text-[28px] block mb-6">
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
