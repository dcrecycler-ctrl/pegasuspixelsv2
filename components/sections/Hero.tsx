import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-24 pb-32 relative overflow-hidden">
      {/* Corner gradients */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-ocean-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-sun-400/15 blur-[80px] pointer-events-none" />
      {/* White center wash */}
      <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,255,255,0.92) 0%, transparent 100%)"}} />

      <div className="max-w-[1440px] mx-auto px-5 md:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Content — staggered load animations */}
          <div className="lg:col-span-6">
            <span className="anim-fade-up delay-0 text-[11px] font-bold tracking-[0.12em] text-primary-variant uppercase block mb-6">
              Arquitectura de Sistemas Digitales
            </span>
            <h1 className="anim-fade-up delay-100 text-[52px] md:text-display-lg font-black leading-[1.05] tracking-[-0.03em] mb-8 text-on-surface">
              Cómo operan realmente los negocios modernos
            </h1>
            <p className="anim-fade-up delay-200 text-[17px] font-light leading-[1.65] text-ink-700 max-w-xl mb-12">
              Ayudamos a empresas a adaptar su presencia digital a cómo los clientes ya se comportan hoy — WhatsApp, redes sociales, llamadas y sitio web — conectando todo en un solo sistema simple.
            </p>
            <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-6">
              <Link
                href="/contacto"
                className="bg-primary text-on-primary px-10 py-4 text-[14px] font-semibold uppercase hover:bg-primary-hover transition-colors rounded-lg text-center"
              >
                Entender mi negocio
              </Link>
            </div>
          </div>

          {/* Right: Photography grid — slide in from right */}
          <div className="anim-fade-right delay-200 lg:col-span-6 mt-16 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Digital dashboard interface"
                  className="hero-photo w-full h-80 object-cover rounded-xl coastal-shadow"
                  src="/agente-inmobiliario.png"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Management application interface"
                  className="hero-photo w-full h-64 object-cover rounded-xl coastal-shadow"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsy1-OHKF3S5wW4MU6mWpr6NLKAjaoGEgLCiWY4yyM-1O8o5Y-yB6Qbvh-m3dme_DfebENVZ1Gk8jqaqusaXJmZYUdclcAVXhUpHib9Vz0Eg_emtvyXcUuHnthqtebMomo-3QW7pdjY4JOFiwqNJoQlhjIvog04JYukrDAVhJiqPwksRQOyzgBOoKHXX_Q8t_nna8QaOxr0jhB0EH5xKA1ApHqzJ40qqoHqgZRdgbzB248aqz0lyGdSWcaNPHpGyuef9xwDhyTsMY"
                />
              </div>
              <div className="space-y-6 pt-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="CRM system on monitor"
                  className="hero-photo w-full h-96 object-cover rounded-xl coastal-shadow"
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
