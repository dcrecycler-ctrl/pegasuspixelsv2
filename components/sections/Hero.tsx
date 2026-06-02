import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-[#0C111D] overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-16 pt-20 pb-24">
        {/* Text block */}
        <div className="mb-16">
          <p className="anim-fade-up text-[11px] font-bold tracking-[0.2em] text-primary uppercase mb-8">
            Pegasus Pixels
          </p>
          <h1 className="anim-fade-up delay-100 text-[56px] md:text-[80px] lg:text-[96px] font-black leading-[0.95] tracking-[-0.04em] text-white mb-8 max-w-5xl">
            You are losing customers<br />
            <em>without realizing it</em>
          </h1>
          <p className="anim-fade-up delay-200 text-[20px] font-light text-white/50 max-w-lg mb-12 leading-[1.5]">
            Messages, calls, and leads come in — but nothing is organized or followed properly.
          </p>
          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 text-[15px] font-semibold rounded-lg hover:bg-primary-hover transition-colors"
            >
              👉 Book a strategy call
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center border border-white/15 text-white/60 px-8 py-4 text-[15px] font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="w-full aspect-[21/9] rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.06] to-white/[0.01] flex items-center justify-center">
          <p className="text-white/[0.18] text-[11px] tracking-[0.15em] uppercase text-center px-8">
            HERO_IMAGE — Real business environment: WhatsApp, calls, overwhelmed staff
          </p>
        </div>
      </div>
    </section>
  );
}
