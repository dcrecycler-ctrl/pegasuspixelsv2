import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-body font-semibold tracking-widest uppercase text-xs transition-all duration-200 cursor-pointer rounded-[4px]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-dim border border-gold hover:border-gold-dim",
  ghost:
    "bg-transparent text-cream border border-cream/30 hover:border-cream hover:bg-cream/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-3.5 text-xs",
  lg: "px-9 py-4 text-xs",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
