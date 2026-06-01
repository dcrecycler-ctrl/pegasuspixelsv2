interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-primary-variant ${className}`}
    >
      {children}
    </span>
  );
}
