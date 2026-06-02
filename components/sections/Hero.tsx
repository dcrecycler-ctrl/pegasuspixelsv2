import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#F7F8FA] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <div>
            <span className="anim-fade-up text-[11px] font-bold tracking-[0.18em] text-blue-600 uppercase block mb-8">
              Digital presence optimization
            </span>
            <h1 className="anim-fade-up delay-100 text-[48px] md:text-[60px] font-black leading-[1.0] tracking-[-0.03em] text-slate-900 mb-8">
              Your business doesn&apos;t need more changes inside.
              <br />
              <span className="text-blue-600">It needs a better presence outside.</span>
            </h1>
            <p className="anim-fade-up delay-200 text-[18px] font-light text-slate-600 leading-[1.65] mb-10 max-w-lg">
              Customers decide before they ever contact you. We improve how your business looks and feels online so the right customers arrive already interested.
            </p>
            <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 text-[15px] font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/15"
              >
                👉 Improve my business presence
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center text-slate-600 px-8 py-4 text-[15px] font-medium rounded-xl border border-slate-200 hover:bg-white hover:border-slate-300 transition-all"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="anim-fade-right delay-200">
            <div className="w-full aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center shadow-sm">
              <p className="text-slate-300 text-[11px] tracking-[0.12em] uppercase text-center px-8">
                HERO_IMAGE — Dealership / restaurant / office<br />clean daylight professional
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
