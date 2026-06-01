export function About() {
  return (
    <section id="sobre-mi" className="py-40 bg-surface">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Portrait */}
        <div className="lg:col-span-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Consultant portrait"
            className="w-full aspect-[4/5] object-cover rounded-2xl coastal-shadow"
            src="/foto-perfil.jpg.jpg"
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-label-sm text-primary uppercase tracking-[0.2em] mb-8 block">
            Consultoría y Estrategia
          </span>
          <h2 className="text-headline-lg mb-8 text-on-surface">
            La Optimización es un Arte Estructural
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-8">
            No soy solo un diseñador o desarrollador. Soy un consultor que entiende los nexos entre tecnología, operaciones y marketing. Mi enfoque se inspira en la arquitectura moderna: cada línea de código debe tener un propósito estructural y cada interfaz debe ser un espacio donde el usuario se sienta en control.
          </p>
          <p className="text-body-lg text-on-surface-variant mb-12 italic border-l-4 border-primary pl-8 py-2 bg-surface-container">
            &ldquo;Ayudo a empresas de élite a dejar atrás la fricción técnica para enfocarse en lo que realmente importa: su crecimiento.&rdquo;
          </p>
          <div className="flex gap-16">
            <div>
              <span className="block text-[48px] leading-none font-semibold text-primary mb-2">
                12+
              </span>
              <span className="text-label-sm uppercase text-on-surface-variant/60">
                Años de Experiencia
              </span>
            </div>
            <div>
              <span className="block text-[48px] leading-none font-semibold text-primary mb-2">
                80+
              </span>
              <span className="text-label-sm uppercase text-on-surface-variant/60">
                Proyectos Ejecutados
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
