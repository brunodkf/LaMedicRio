import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

export function Badge({ children, className = "", light = false }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`block w-2 h-0.5 rounded-full flex-shrink-0 ${light ? "bg-brand-400" : "bg-brand-700"}`}
        aria-hidden="true"
      />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.15em] font-brand ${light ? "text-brand-400" : "text-brand-700"}`}
      >
        {children}
      </span>
    </div>
  );
}
