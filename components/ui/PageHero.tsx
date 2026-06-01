interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <span className="text-label-sm text-primary uppercase tracking-[0.2em] block mb-6">
          {label}
        </span>
        <h1 className="text-[52px] md:text-display-lg leading-[1.1] mb-8 text-on-surface max-w-3xl">
          {title}
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
