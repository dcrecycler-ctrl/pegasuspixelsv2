import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-semibold tracking-normal uppercase transition-all duration-200 cursor-pointer rounded-lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover",
  ghost:
    "bg-transparent text-on-surface border border-outline hover:border-primary hover:text-primary",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-[12px]",
  md: "px-7 py-3.5 text-[14px]",
  lg: "px-9 py-4 text-[14px]",
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
