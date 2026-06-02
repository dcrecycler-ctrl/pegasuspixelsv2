import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Dealio — Plataforma para automotoras | Pegasus Pixels",
  description:
    "Dealio no es una página web. Es un sistema. Centraliza leads, gestiona el pipeline y estandariza el proceso de venta de tu concesionaria.",
};

const DASHBOARD =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAW5K9zc5iJyK7FG0yukmwfOj0H3JbaoixySsr5uFGYVgBc0nxbXql_FT5I6yHiQR23t7Ni6fWopoVT44O3MZ_qTLF-6fPTFj2qk_wSW_rmYHw038PGAhYUFUpc869M6YU641GGbsTVQ9_CW6lTCuq_949S8vy-xP_AAQuWvvwJhtBdZ6m-aoWckct5RPw9zR2HRGvrqJed3sIhf2aXvuX7pOyLSVJ5cvDRWZpECJFrKU_Vw4BHO6EJN15N6sLmMLJZCPaFmVR4MHk";

const modules = [
  {
    icon: "filter_list",
    title: "Captura de leads",
    description:
      "Centralización automática de leads de Mercado Libre, Facebook e Instagram en una sola cola de trabajo.",
  },
  {
    icon: "manage_search",
    title: "Matching de clientes",
    description:
      "Algoritmos que vinculan automáticamente los intereses de compra con el stock real disponible.",
  },
  {
    icon: "account_tree",
    title: "Seguimiento del pipeline",
    description:
      "Seguimiento visual del estado de cada negociación, desde el test drive hasta el cierre de venta.",
  },
  {
    icon: "analytics",
    title: "Reportes de rendimiento",
    description:
      "Reportes en tiempo real sobre el desempeño de cada vendedor y el ROI de cada canal de marketing.",
  },
];

const beforeItems = [
  {
    label: 'Excel "Ventas_Junio_V2.xlsx"',
    body: "Datos desactualizados, celdas borradas por error.",
  },
  {
    label: "WhatsApp Personal",
    body: "Si el vendedor se va, se lleva los clientes consigo.",
  },
  {
    label: "Seguimiento por Memoria",
    body: '"Creo que lo llamé el martes". Nadie sabe el estado real.',
  },
];

const afterItems = [
  {
    label: "Base de Datos Propia",
    body: "Activo digital propiedad exclusiva de la empresa.",
  },
  {
    label: "Centralización de Mensajería",
    body: "Todo el equipo ve la trazabilidad del cliente.",
  },
  {
    label: "Automatización de Tareas",
    body: "Recordatorios y flujos de trabajo programados.",
  },
];

const comparisonRows: [string, boolean, boolean][] = [
  ["Centralización de leads", false, true],
  ["Pipeline visual de ventas", false, true],
  ["Historial unificado del cliente", false, true],
  ["Alertas y recordatorios automáticos", false, true],
  ["Dashboard de desempeño por vendedor", false, true],
  ["Presencia digital", true, true],
  ["ROI por canal de marketing", false, true],
];

export default function DealioPage() {
  return (
    <div className="bg-surface-container min-h-screen">
      <Nav />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="pt-24 pb-32 relative overflow-hidden bg-surface-container">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-ocean-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-sun-400/15 blur-[80px] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,255,255,0.88) 0%, transparent 100%)",
            }}
          />

          <div className="max-w-[1440px] mx-auto px-5 md:px-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left: copy */}
              <div className="lg:col-span-6">
                <span className="anim-fade-up delay-0 text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                  Pegasus Pixels · Vertical Automotriz
                </span>
                <h1 className="anim-fade-up delay-100 text-[48px] md:text-[60px] leading-[1.08] tracking-[-0.03em] font-semibold mb-8 text-ocean-900">
                  Dealio no es una página web. Es un sistema.
                </h1>
                <p className="anim-fade-up delay-200 text-body-lg text-ink-800 max-w-xl mb-12">
                  La mayoría de las automotoras pierden el 40% de sus ventas no por falta de clientes, sino por falta de estructura. Dealio organiza su flujo comercial de punta a punta.
                </p>
                <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-5">
                  <a
                  href="https://wa.me/59899000000?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Dealio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 text-label-sm uppercase hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200 rounded-lg font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Hablemos por WhatsApp
                </a>
                  <a
                    href="#sistema"
                    className="border border-[#CBD5E1] text-[#0F172A] px-10 py-4 text-label-sm uppercase hover:bg-slate-50 transition-colors rounded-lg text-center font-semibold"
                  >
                    Ver cómo funciona
                  </a>
                </div>
              </div>

              {/* Right: dashboard visual */}
              <div className="anim-fade-right delay-200 lg:col-span-6 mt-16 lg:mt-0">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Dealio — dashboard de operaciones automotrices"
                    className="hero-photo w-full object-cover rounded-xl coastal-shadow"
                    src={DASHBOARD}
                  />
                  {/* floating stat badge */}
                  <div className="absolute -bottom-6 -left-6 bg-surface border border-outline rounded-xl px-6 py-4 coastal-shadow hidden md:block">
                    <p className="text-[28px] font-bold text-ocean-900 tracking-tight">40%</p>
                    <p className="text-[12px] font-semibold text-ink-600 uppercase tracking-wider mt-0.5">
                      ventas perdidas por falta de sistema
                    </p>
                  </div>
                  {/* floating alert badge */}
                  <div className="absolute -top-5 -right-5 bg-sun-300 border border-sun-400 rounded-xl px-5 py-3 coastal-shadow hidden md:block">
                    <p className="text-[12px] font-semibold text-ocean-900 uppercase tracking-wider">
                      60% de leads sin respuesta en 1h
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── STATS STRIP ──────────────────────────────────────────── */}
        <section className="py-16 bg-surface-container-high border-y border-outline/30">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-outline">
              {[
                { val: "40%", label: "de ventas se pierden por falta de estructura operativa" },
                { val: "60%", label: "de leads no son contactados en la primera hora crítica" },
                { val: "3×", label: "más conversiones con un pipeline de ventas estructurado" },
              ].map((s) => (
                <div key={s.label} className="py-6 md:py-0 px-8 first:pl-0 last:pr-0">
                  <p className="text-[44px] font-bold text-ocean-900 tracking-tight leading-none">{s.val}</p>
                  <p className="text-body-md text-ink-700 mt-3 max-w-[220px] mx-auto">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEM ──────────────────────────────────────────────── */}
        <section className="py-32 bg-white border-b border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <AnimateIn>
                <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                  El diagnóstico
                </span>
                <h2 className="text-headline-lg mb-8 max-w-md text-on-surface">
                  El caos invisible de la venta tradicional
                </h2>
              </AnimateIn>
              <AnimateIn delay={100} className="space-y-10">
                <p className="text-body-lg text-on-surface-variant">
                  Confiar el crecimiento de su empresa en hojas de Excel y conversaciones de WhatsApp dispersas es una apuesta arriesgada. La falta de centralización crea puntos ciegos donde los leads se enfrían y las oportunidades desaparecen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Data Fragmentada</span>
                    <p className="text-body-md text-on-surface-variant">
                      Información de clientes repartida en dispositivos personales de los vendedores.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Tiempos de Respuesta</span>
                    <p className="text-body-md text-on-surface-variant">
                      El 60% de los leads no son contactados en la primera hora crítica de interés.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Canales Desconectados</span>
                    <p className="text-body-md text-on-surface-variant">
                      Mercado Libre, Instagram, Facebook y el sitio web operan sin ningún punto de convergencia.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <span className="text-label-sm text-primary-variant uppercase">Sin Visibilidad</span>
                    <p className="text-body-md text-on-surface-variant">
                      No existe forma de medir cuántos negocios se pierden ni en qué etapa del proceso.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── SHIFT ────────────────────────────────────────────────── */}
        <section className="py-40 bg-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">
            <AnimateIn className="max-w-4xl mx-auto">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-8">
                Cambio de perspectiva
              </span>
              <p className="text-[40px] md:text-[52px] leading-[1.15] tracking-[-0.03em] font-semibold text-ocean-900">
                El problema no es la captación.{" "}
                <span className="text-ink-600">Es la gestión del sistema.</span>
              </p>
              <p className="text-body-lg text-ink-700 max-w-2xl mx-auto mt-10">
                Traer más tráfico a una estructura ineficiente solo aumenta el desperdicio. Dealio redefine cómo su equipo procesa cada contacto.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── MODULES ──────────────────────────────────────────────── */}
        <section id="sistema" className="py-40 bg-white border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="text-center mb-24">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                Módulos operativos
              </span>
              <h2 className="text-headline-lg md:text-[56px] mb-8 text-on-surface">
                Cuatro módulos. Un sistema de ventas.
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Cada módulo aborda una capa del proceso comercial. Juntos crean un flujo de captación a cierre completamente trazable.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((mod, i) => (
                <AnimateIn key={mod.title} delay={i * 80}>
                  <div className="p-10 bg-surface border border-outline rounded-xl hover-lift coastal-shadow hover:bg-sand-100 transition-colors duration-300 h-full">
                    <span className="material-symbols-outlined text-primary-variant text-4xl mb-8 block">
                      {mod.icon}
                    </span>
                    <h3 className="text-headline-md mb-4 text-on-surface">{mod.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{mod.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUE ────────────────────────────────────────────────── */}
        <section className="py-32 bg-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="max-w-3xl mx-auto text-center">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-8">
                La propuesta
              </span>
              <p className="text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.03em] font-semibold text-ocean-900 mb-10">
                Dealio no te ayuda a conseguir más leads. Te ayuda a no perder los que ya tienes.
              </p>
              <p className="text-body-lg text-on-surface-variant">
                La mayoría de las automotoras ya tienen suficiente demanda. Lo que no tienen es el sistema para convertirla de forma consistente y medible.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── TRANSFORMATION — Before / After ──────────────────────── */}
        <section className="py-40 bg-white border-y border-outline/20">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="text-center mb-20">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                La transformación estructural
              </span>
              <h2 className="text-headline-lg text-on-surface">
                Lo que cambia cuando opera con un sistema
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Before */}
              <AnimateIn>
                <div className="p-10 bg-surface border border-outline rounded-xl coastal-shadow h-full">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-3 h-3 rounded-full bg-sand-300" />
                    <span className="text-label-sm text-ink-600 uppercase tracking-widest">Sin Dealio</span>
                  </div>
                  <ul className="space-y-7">
                    {beforeItems.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-sand-300 text-[20px] mt-0.5 shrink-0">
                          remove
                        </span>
                        <div>
                          <p className="text-[15px] font-semibold text-ocean-900 mb-1">{item.label}</p>
                          <p className="text-body-md text-on-surface-variant">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              {/* After */}
              <AnimateIn delay={100}>
                <div className="p-10 bg-ocean-900 rounded-xl coastal-shadow h-full">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-3 h-3 rounded-full bg-sun-600" />
                    <span className="text-label-sm text-sun-400 uppercase tracking-widest">Con Dealio</span>
                  </div>
                  <ul className="space-y-7">
                    {afterItems.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-sun-600 text-[20px] mt-0.5 shrink-0">
                          check
                        </span>
                        <div>
                          <p className="text-[15px] font-semibold text-sky-100 mb-1">{item.label}</p>
                          <p className="text-body-md text-sky-200">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATION ───────────────────────────────────────── */}
        <section className="py-32 bg-surface-container">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16">
            <AnimateIn className="text-center mb-20">
              <span className="text-label-sm text-primary-variant uppercase tracking-[0.2em] block mb-6">
                Plataforma de control de performance
              </span>
              <h2 className="text-headline-lg text-on-surface">
                Sitio web tradicional vs sistema Dealio
              </h2>
            </AnimateIn>

            <AnimateIn delay={80}>
              <div className="overflow-hidden border border-outline rounded-xl coastal-shadow">
                <div className="grid grid-cols-3 bg-white border-b border-outline px-8 py-5">
                  <span className="text-label-sm text-ink-600 uppercase tracking-wider">Función</span>
                  <span className="text-label-sm text-ink-600 uppercase tracking-wider text-center">
                    Sitio web tradicional
                  </span>
                  <span className="text-label-sm text-primary-variant uppercase tracking-wider text-center">
                    Sistema Dealio
                  </span>
                </div>
                {comparisonRows.map(([label, hasTraditional, hasDealio]) => (
                  <div
                    key={label}
                    className="grid grid-cols-3 bg-surface border-b border-outline last:border-b-0 px-8 py-5 hover:bg-sand-100 transition-colors"
                  >
                    <span className="text-body-md text-on-surface">{label}</span>
                    <div className="flex justify-center">
                      {hasTraditional ? (
                        <span className="material-symbols-outlined text-ocean-600 text-[20px]">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-sand-300 text-[20px]">cancel</span>
                      )}
                    </div>
                    <div className="flex justify-center">
                      {hasDealio ? (
                        <span className="material-symbols-outlined text-sun-600 text-[20px]">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-sand-300 text-[20px]">cancel</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-40 bg-ocean-900">
          <div className="max-w-[1440px] mx-auto px-5 md:px-16 text-center">
            <AnimateIn className="max-w-3xl mx-auto">
              <span className="text-label-sm text-sun-400 uppercase tracking-[0.2em] block mb-8">
                Diagnóstico sin costo
              </span>
              <h2 className="text-[40px] md:text-[56px] leading-[1.15] tracking-[-0.03em] font-semibold text-sky-100 mb-8">
                Estandarice su proceso de venta hoy mismo.
              </h2>
              <p className="text-body-lg text-sky-300 mb-14 max-w-xl mx-auto">
                Obtenga un diagnóstico gratuito de su sistema actual y descubra dónde está perdiendo dinero su operación automotriz. No es software, es infraestructura.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="https://wa.me/59899000000?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Dealio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-10 py-4 text-label-sm uppercase hover:bg-white hover:text-[#25D366] border-2 border-[#25D366] transition-all duration-200 rounded-lg font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.855L.057 23.882a.5.5 0 0 0 .606.607l6.098-1.459A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.399l-.36-.214-3.733.893.924-3.638-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  Hablemos por WhatsApp
                </a>
                <a
                  href="#sistema"
                  className="border border-sky-400/40 text-sky-200 px-10 py-4 text-label-sm uppercase hover:border-sky-300/60 hover:text-sky-100 transition-colors rounded-lg font-semibold"
                >
                  Ver el sistema
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
