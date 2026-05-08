import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const variants = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 border-brand-700 shadow-sm",
  secondary: "bg-white text-brand-700 hover:bg-brand-50 border-brand-200",
  outline:
    "bg-transparent text-white hover:bg-white/10 border-white/40 backdrop-blur-sm",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 border-transparent",
  white:
    "bg-white text-brand-900 hover:bg-brand-50 border-white shadow-sm",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external = false,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-brand font-semibold tracking-wide border transition-all duration-200",
    variants[variant],
    sizes[size],
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
