import { AnimateIn } from "@/components/ui/AnimateIn";

const cards = [
  {
    icon: "language",
    title: "Presencia digital",
    items: ["Diseño del sitio", "Claridad del negocio", "Primera impresión profesional"],
  },
  {
    icon: "inventory_2",
    title: "Inventario",
    items: ["Autos, propiedades y servicios bien organizados", "Visual claro y directo", "Navegación simple"],
  },
  {
    icon: "call",
    title: "Contacto de clientes",
    items: ["WhatsApp", "Formularios", "Llamadas", "Sin pérdida de oportunidades"],
  },
];

export function WhatWeImprove() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">

        <AnimateIn className="mb-14">
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900">
            Lo que mejoramos
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, items }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full hover-lift">
                <span className="material-symbols-outlined text-blue-600 text-[32px] block mb-6">
                  {icon}
                </span>
                <h3 className="text-[20px] font-bold text-slate-900 leading-[1.25] mb-6">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                      <span className="text-[15px] text-slate-600 leading-[1.5]">{item}</span>
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
