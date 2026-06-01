interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-outline-muted ${className}`}
    >
      {children}
    </span>
  );
}
