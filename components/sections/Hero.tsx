import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-24 pb-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-6">
          <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
            Arquitectura de Sistemas Digitales
          </span>
          <h1 className="text-[52px] md:text-display-lg leading-[1.1] mb-8 text-on-surface">
            Tecnología y Experiencias Digitales para Empresas Modernas
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mb-12">
            Ayudamos a inmobiliarias, automotoras y empresas de hospitalidad a mejorar su presencia digital, organizar operaciones y ofrecer una experiencia moderna a sus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/soluciones"
              className="bg-on-surface text-surface px-10 py-4 text-label-sm uppercase hover:bg-primary transition-colors rounded-lg text-center"
            >
              Explorar Soluciones
            </Link>
            <Link
              href="/contacto"
              className="border border-outline text-on-surface px-10 py-4 text-label-sm uppercase hover:bg-surface-container transition-colors rounded-lg text-center"
            >
              Solicitar Consulta
            </Link>
          </div>
        </div>

        {/* Right: Photography grid */}
        <div className="lg:col-span-6 mt-16 lg:mt-0">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Digital dashboard interface"
                className="w-full h-80 object-cover rounded-xl coastal-shadow"
                src="/agente-inmobiliario.png"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Management application interface"
                className="w-full h-64 object-cover rounded-xl coastal-shadow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsy1-OHKF3S5wW4MU6mWpr6NLKAjaoGEgLCiWY4yyM-1O8o5Y-yB6Qbvh-m3dme_DfebENVZ1Gk8jqaqusaXJmZYUdclcAVXhUpHib9Vz0Eg_emtvyXcUuHnthqtebMomo-3QW7pdjY4JOFiwqNJoQlhjIvog04JYukrDAVhJiqPwksRQOyzgBOoKHXX_Q8t_nna8QaOxr0jhB0EH5xKA1ApHqzJ40qqoHqgZRdgbzB248aqz0lyGdSWcaNPHpGyuef9xwDhyTsMY"
              />
            </div>
            <div className="space-y-6 pt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="CRM system on monitor"
                className="w-full h-96 object-cover rounded-xl coastal-shadow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8whSeNDYqwpFmhGq8iXq8smVkDKwtA6lWIJ6vgg1imicVGYCfv5w67GjkSh5YAyFE_TdZk-fQAEZg9lem4XA3ajntTz09y781vLbWhniz1rHBR0rYT2Y0UGP8kkiIfO7ssKFtRzR0DoPno3DugHxL1ZUj0IhFFj-FP23nU3p7Y2_W7MPRfCnNFUGug8_zY0y_6626gQnsRIA3bns-EWuvZzkCaa4iC2kyPgZQPl2QIFREm1Dwk3gLizdpxdIqflo5-l9XHH56QRY"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
