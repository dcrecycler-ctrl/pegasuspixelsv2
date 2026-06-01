import { LinkButton } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

function DashboardMockup() {
  return (
    <div className="bg-ink-low rounded-[4px] border border-outline/40 overflow-hidden shadow-2xl">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-outline/30 bg-ink-mid">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-outline/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-outline/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-outline/20" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-ink-high rounded-[2px] px-6 py-0.5 w-40 h-4" />
        </div>
      </div>
      {/* Sidebar + content */}
      <div className="flex h-44">
        {/* Sidebar */}
        <div className="w-16 bg-ink-mid border-r border-outline/20 flex flex-col gap-3 pt-4 px-3">
          {[1, 0.6, 0.4, 0.4, 0.3].map((op, i) => (
            <div
              key={i}
              className="h-2 rounded-[2px] bg-outline"
              style={{ opacity: op, width: `${60 + i * 5}%` }}
            />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: "148", label: "Proyectos" },
              { val: "92%", label: "Retención" },
              { val: "$2.4M", label: "Pipeline" },
            ].map((stat) => (
              <div key={stat.label} className="bg-ink-high rounded-[4px] p-2.5 border border-outline/20">
                <p className="font-body text-[10px] font-bold text-gold">{stat.val}</p>
                <p className="font-body text-[8px] text-outline-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
          {/* Chart placeholder */}
          <div className="flex-1 bg-ink-high rounded-[4px] border border-outline/20 p-3 flex items-end gap-1">
            {[30, 55, 40, 70, 50, 85, 60, 90, 65, 80].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[2px] transition-all"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 9 ? "#dac769" : i % 3 === 0 ? "#444748" : "#2a2a2a",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMMockup() {
  const cards = [
    { title: "Penthouse Vista Mar", price: "USD 1,200,000", tag: "Disponible" },
    { title: "Residencia La Barra", price: "USD 850,000", tag: "En negociación" },
    { title: "Suite Playa Mansa", price: "USD 450,000", tag: "Disponible" },
  ];
  return (
    <div className="bg-ink-low rounded-[4px] border border-outline/40 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-outline/30 bg-ink-mid">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gold/60" />
          <div className="h-2 w-24 bg-outline/40 rounded-[2px]" />
        </div>
        <div className="h-2 w-16 bg-outline/20 rounded-[2px]" />
      </div>
      <div className="p-3 flex flex-col gap-2">
        {cards.map((c) => (
          <div key={c.title} className="flex items-center gap-3 bg-ink-high rounded-[4px] p-2.5 border border-outline/20">
            <div className="w-12 h-8 bg-ink-highest rounded-[2px] flex-shrink-0 border border-outline/20" />
            <div className="flex-1 min-w-0">
              <p className="font-body text-[9px] font-medium text-cream truncate">{c.title}</p>
              <p className="font-body text-[8px] text-gold mt-0.5">{c.price}</p>
            </div>
            <span className="font-body text-[7px] font-semibold tracking-wide uppercase px-1.5 py-0.5 rounded-[2px] bg-ink-highest text-outline-muted flex-shrink-0">
              {c.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutoMockup() {
  return (
    <div className="bg-ink-low rounded-[4px] border border-outline/40 overflow-hidden shadow-2xl">
      <div className="px-4 py-3 border-b border-outline/30 bg-ink-mid flex items-center justify-between">
        <div className="h-2 w-28 bg-outline/40 rounded-[2px]" />
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-[2px] bg-gold/20 border border-gold/40" />
          <div className="h-4 w-4 rounded-[2px] bg-outline/10 border border-outline/20" />
        </div>
      </div>
      <div className="p-3 grid grid-cols-4 gap-1.5">
        {["Leads", "Visitas", "Ofertas", "Cierres"].map((label, i) => (
          <div key={label} className="bg-ink-high rounded-[4px] p-2 border border-outline/20 text-center">
            <p className="font-body text-[8px] text-outline-muted">{label}</p>
            <p className="font-body text-[11px] font-bold text-cream mt-1">
              {[24, 18, 7, 3][i]}
            </p>
            <div className="mt-1 h-0.5 w-full bg-outline/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gold"
                style={{ width: `${[90, 70, 40, 20][i]}%` }}
              />
            </div>
          </div>
        ))}
        <div className="col-span-4 bg-ink-high rounded-[4px] p-3 border border-outline/20 flex items-center justify-between">
          <div>
            <p className="font-body text-[8px] text-outline-muted">Pipeline Total</p>
            <p className="font-body text-[13px] font-bold text-cream mt-0.5">$4,820,000</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-6 bg-gold/60 rounded-full" />
            <div className="w-1 h-4 bg-gold/40 rounded-full" />
            <div className="w-1 h-8 bg-gold rounded-full" />
            <div className="w-1 h-5 bg-gold/50 rounded-full" />
            <div className="w-1 h-3 bg-gold/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-ink">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-gold/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-gold/[0.02] blur-[100px] pointer-events-none" />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-5 md:px-20 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-6 xl:col-span-5">
            <SectionLabel className="mb-6">Estudio Digital · Punta del Este</SectionLabel>

            <h1 className="font-display text-[clamp(40px,5vw,72px)] font-bold leading-[1.1] tracking-[-0.02em] text-cream mb-6">
              Arquitectura de Sistemas Digitales
            </h1>

            <p className="font-body text-lg font-medium text-cream-dim leading-relaxed mb-4">
              Tecnología y Experiencias Digitales para Empresas Modernas
            </p>

            <p className="font-body text-base text-outline-muted leading-relaxed mb-10 max-w-md">
              Ayudamos a inmobiliarias, automotoras y empresas de hospitalidad a construir presencias digitales que reflejan la calidad real de sus negocios.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <LinkButton href="#soluciones" size="lg">
                Explorar Soluciones
              </LinkButton>
              <LinkButton href="#contacto" variant="ghost" size="lg">
                Solicitar Consulta
              </LinkButton>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-8 mt-12 pt-10 border-t border-outline/20">
              <div>
                <p className="font-display text-2xl font-bold text-cream">12+</p>
                <p className="font-body text-xs text-outline-muted tracking-wider uppercase mt-1">Años de Experiencia</p>
              </div>
              <div className="w-px h-10 bg-outline/30" />
              <div>
                <p className="font-display text-2xl font-bold text-cream">80+</p>
                <p className="font-body text-xs text-outline-muted tracking-wider uppercase mt-1">Proyectos Ejecutados</p>
              </div>
              <div className="w-px h-10 bg-outline/30" />
              <div>
                <p className="font-display text-2xl font-bold text-gold">3</p>
                <p className="font-body text-xs text-outline-muted tracking-wider uppercase mt-1">Industrias Clave</p>
              </div>
            </div>
          </div>

          {/* Right: UI Mockups */}
          <div className="lg:col-span-6 xl:col-span-7 relative hidden lg:block">
            <div className="relative flex flex-col gap-4">
              {/* Mockup 1 */}
              <div className="translate-x-0">
                <DashboardMockup />
              </div>
              {/* Mockup 2 — offset right */}
              <div className="ml-12">
                <CRMMockup />
              </div>
              {/* Mockup 3 — offset left */}
              <div className="mr-12">
                <AutoMockup />
              </div>
            </div>

            {/* Decorative gold line */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-outline/30 to-transparent" />
    </section>
  );
}
