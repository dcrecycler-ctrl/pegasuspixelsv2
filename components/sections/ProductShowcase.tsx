import { AnimateIn } from "@/components/ui/AnimateIn";

const products = [
  {
    label: "Automotoras",
    name: "Dealio",
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-600",
    icon: "directions_car",
    screen: [
      { type: "header", text: "Inventario — 24 vehículos" },
      { type: "filters", items: ["Todos", "SUV", "Sedán", "Pick-up"] },
      { type: "cards", items: [
        { title: "Toyota Hilux 2023", sub: "USD 38,500 · 12,000 km", tag: "Disponible" },
        { title: "VW Tiguan 2022", sub: "USD 29,900 · 28,000 km", tag: "Reservado" },
        { title: "Ford Ranger 2024", sub: "USD 42,000 · 5,000 km", tag: "Disponible" },
      ]},
      { type: "lead", text: "3 consultas nuevas hoy" },
    ],
  },
  {
    label: "Inmobiliarias",
    name: "Oikos",
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-600",
    icon: "apartment",
    screen: [
      { type: "header", text: "Propiedades — 18 activas" },
      { type: "filters", items: ["Todas", "Venta", "Alquiler", "PDE"] },
      { type: "cards", items: [
        { title: "Apartamento Punta del Este", sub: "USD 185,000 · 3 amb.", tag: "En venta" },
        { title: "Casa Cantegril", sub: "USD 320,000 · 4 amb.", tag: "En venta" },
        { title: "Estudio Brava", sub: "USD 1,800/mes · 1 amb.", tag: "Alquiler" },
      ]},
      { type: "lead", text: "5 leads nuevos esta semana" },
    ],
  },
  {
    label: "Restaurantes",
    name: "Hermes",
    color: "bg-orange-50 border-orange-100",
    accent: "text-orange-600",
    icon: "restaurant",
    screen: [
      { type: "header", text: "Menú digital — 32 platos" },
      { type: "filters", items: ["Todos", "Entradas", "Principales", "Postres"] },
      { type: "cards", items: [
        { title: "Pasta al pesto", sub: "$ 650 · Vegetariano", tag: "Disponible" },
        { title: "Chivito completo", sub: "$ 890 · Clásico", tag: "Disponible" },
        { title: "Tiramisú casero", sub: "$ 420 · Postre", tag: "Último!" },
      ]},
      { type: "lead", text: "12 pedidos hoy vía WhatsApp" },
    ],
  },
];

export function ProductShowcase() {
  return (
    <section className="bg-[#F6F7F9] py-24 md:py-32 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">

        <AnimateIn className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase mb-5">
            Nuestras plataformas
          </p>
          <h2 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.05] text-[#0F172A] mb-5">
            Una plataforma para cada industria
          </h2>
          <p className="text-[17px] text-[#0F172A]/60 leading-[1.65] max-w-2xl">
            Dealio, Oikos y Hermes son plataformas propias — configuradas para tu negocio, con inventario publicado y pipeline de leads desde el primer día.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(({ label, name, color, accent, icon, screen }, i) => (
            <AnimateIn key={name} delay={i * 80}>
              <div className="bg-white border border-[#E2E8F0] rounded-[16px] overflow-hidden h-full">

                {/* Product label */}
                <div className="px-6 pt-6 pb-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-[8px] ${color} border flex items-center justify-center`}>
                      <span className={`material-symbols-outlined text-[18px] ${accent}`}>{icon}</span>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#0F172A]">{name}</p>
                      <p className="text-[11px] text-[#94A3B8]">{label}</p>
                    </div>
                  </div>
                </div>

                {/* Mock screen */}
                <div className="p-4 bg-[#F8FAFC]">
                  <div className="bg-white border border-[#E2E8F0] rounded-[10px] overflow-hidden">

                    {screen.map((block, j) => {
                      if (block.type === "header") return (
                        <div key={j} className="px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between">
                          <span className="text-[12px] font-bold text-[#0F172A]">{block.text}</span>
                          <span className={`material-symbols-outlined text-[16px] ${accent}`}>{icon}</span>
                        </div>
                      );
                      if (block.type === "filters") return (
                        <div key={j} className="px-4 py-2 border-b border-[#E2E8F0] flex gap-2 overflow-hidden">
                          {block.items!.map((f, k) => (
                            <span key={k} className={`text-[10px] font-semibold px-2 py-1 rounded-full ${k === 0 ? `${color} ${accent} border` : 'text-[#94A3B8]'}`}>
                              {f}
                            </span>
                          ))}
                        </div>
                      );
                      if (block.type === "cards") return (
                        <div key={j} className="divide-y divide-[#F1F5F9]">
                          {block.items!.map((card, k) => (
                            <div key={k} className="px-4 py-3 flex items-center justify-between">
                              <div>
                                <p className="text-[11px] font-semibold text-[#0F172A]">{card.title}</p>
                                <p className="text-[10px] text-[#94A3B8]">{card.sub}</p>
                              </div>
                              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${card.tag === "Reservado" || card.tag === "Último!" ? 'bg-amber-50 text-amber-600 border-amber-200' : `${color} ${accent} border`}`}>
                                {card.tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                      if (block.type === "lead") return (
                        <div key={j} className={`px-4 py-2.5 ${color} border-t border-[#E2E8F0] flex items-center gap-2`}>
                          <span className={`material-symbols-outlined text-[14px] ${accent}`}>notifications</span>
                          <span className={`text-[10px] font-semibold ${accent}`}>{block.text}</span>
                        </div>
                      );
                      return null;
                    })}

                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6 pt-2">
                  <a href="/contacto" className={`text-[13px] font-semibold ${accent} flex items-center gap-1.5`}>
                    Ver demo de {name}
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>

              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
