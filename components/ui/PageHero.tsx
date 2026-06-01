interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <span className="text-[11px] font-bold text-primary-variant uppercase tracking-[0.12em] block mb-6">
          {label}
        </span>
        <h1 className="text-[52px] md:text-display-lg font-black leading-[1.05] tracking-[-0.03em] mb-8 text-on-surface max-w-3xl">
          {title}
        </h1>
        <p className="text-[17px] font-light leading-[1.65] text-ink-700 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
