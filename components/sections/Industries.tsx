import Link from "next/link";

const industries = [
  {
    id: "inmobiliarias",
    title: "INMOBILIARIAS",
    description:
      "Plataformas de visualización de propiedades de alta gama con recorridos virtuales integrados y sistemas de reserva inteligente.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcLHW6IKq2vaE-iyWy5u1Ne0L5oIPNG7xyL0O5R_uM0WnNYvlKHOjcNGr1lGv-nffxWz-zMa2hdqGdYxjmINlFoc1NVGG7hf8F4KUwVdWo_oRsgpeKIIei41PYjHSKnYHM3po5Pn-3OKBO_5dO2R02lrZ5y_jF6rSyS8yrH2lVtgQg45ma1GahFXwDWR-uqiZ4TK-zDen430-3xnZAb45Zvn5zwDnRtsXJ3bZg7av2Spk5W8qDbpKHFaOw1eybM6opb3CgtSTj5gA",
    imageAlt: "Modern villa",
    imageFirst: false,
  },
  {
    id: "automotoras",
    title: "AUTOMOTORAS",
    description:
      "Gestión de inventario premium y configuradores de vehículos que transmiten la potencia y el diseño de su flota.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqveCxfyowu1jdD-75BIY1nBeu_uOSsnlV5NZpb5q9TFawLgpV6-Wrvm32hYmON7upd282-qAOurf1D7oNfxctO4yp4Q0-YAqzas0aSEyvZeP00H9S7rZW1AltWkVucTYBxJqaMYuRp9SalcKcjRBoM8Ab7W7AQRdcR_YBKwZ3X06mCZ3JeMX-2uBXfkubK4Zix1PDuy7be3C6JFP499yRKEsHn-qPaXzEOLhTTKG17oj8yH-uAXGrDy4gDk1chCysS1UysVt8aFw",
    imageAlt: "Luxury showroom",
    imageFirst: true,
  },
  {
    id: "hospitality",
    title: "HOSPITALITY",
    description:
      "Restaurantes, hoteles y negocios orientados a la experiencia del cliente con interfaces de alta estética.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugEzAO_NOE31D70RnTr2mWedsInaoTM1EurrUw6WdyamToux7WuldzSCJ6Y2FdA9WtdttqSsnWqciSz-GNle4Q0NcH6Ik7F9xXeyx4S_3d7PDNVeUN2u6dMiJ1LbELJyuwqMcFRSAhQQtaXrI7AY7Vl7kz87mEeV5ucNyzq3rDKvcmjEMnnQc2kr66X_T5RKuGOrfjs3Ur_VzLWK2qi9I6zKDU3Ay4mnVKK9E1spCsLcOnkcJNwZ7nPzVI",
    imageAlt: "Hospitality interior",
    imageFirst: false,
  },
  {
    id: "arquitectura",
    title: "ARQUITECTURA",
    description:
      "Visualización de proyectos, gestión de activos y presencia digital para estudios de arquitectura y desarrolladores.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugutlc_ah8VbjCUWZVJA4ta05WFbFt14zHXzKfJQC5lt_SlveP5hzuPOALbf1u2uCI6Gv-hiyEFmb5Te7cIfCJJKtybyFEbzu7F2uoN2eixA5prFVZdH_Q2SAeuHGf9gYVFG_W1MgNehKsl23xyTdtco97NT9i1UjcYz9AnmbTBj5YZKEeRNQXYBLtaVN1XPaNU_aRAOM0fXLSL0W4ufRkI2RiOQiPRZ7mLzHdIPkfz_j4geVd7YGIVqf4",
    imageAlt: "Architectural detail",
    imageFirst: true,
  },
];

export function Industries() {
  return (
    <section
      id="industrias"
      className="py-32 bg-ocean-900 text-sky-100"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <span className="text-label-sm text-sun-400 uppercase tracking-[0.3em] block mb-16 text-center">
          Sectores de Especialidad
        </span>

        <div className="space-y-40">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              {/* Text block */}
              <div className={industry.imageFirst ? "order-2" : "order-2 lg:order-1"}>
                <h3 className="text-headline-lg mb-6 uppercase text-white">
                  {industry.title}
                </h3>
                <p className="text-body-lg text-sky-200 mb-10 max-w-lg">
                  {industry.description}
                </p>
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 group text-label-sm text-sun-400 uppercase tracking-widest border-b border-sun-400 pb-1 hover:text-sun-300 transition-colors w-fit"
                >
                  Ver Portfolio{" "}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Image block */}
              <div className={industry.imageFirst ? "order-1" : "order-1 lg:order-2"}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={industry.imageAlt}
                  className="w-full aspect-video object-cover rounded-2xl"
                  src={industry.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
