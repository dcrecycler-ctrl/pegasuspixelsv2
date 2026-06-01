export function ProblemStatement() {
  return (
    <section className="py-32 bg-surface-container border-y border-outline/20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-headline-lg mb-8 max-w-md text-on-surface">
              La Primera Impresión Ya No Ocurre Solamente en Tu Negocio
            </h2>
          </div>
          <div className="space-y-10">
            <p className="text-body-lg text-on-surface-variant">
              Existe una desconexión crítica entre la calidad física de sus servicios y su presencia digital. Un showroom de lujo o una propiedad de diseño no pueden verse representados por sistemas lentos o procesos manuales obsoletos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <span className="text-label-sm text-primary uppercase">Desconexión</span>
                <p className="text-body-md text-on-surface-variant">
                  Sitios web y plataformas que no reflejan la exclusividad de su marca.
                </p>
              </div>
              <div className="space-y-3">
                <span className="text-label-sm text-primary uppercase">Fricción</span>
                <p className="text-body-md text-on-surface-variant">
                  Procesos de gestión manuales que ralentizan el crecimiento y la atención.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
