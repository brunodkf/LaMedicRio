import type { ReactNode, HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  light?: boolean;
}

export function Badge({ children, className = "", light = false, ...props }: BadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`} {...props}>
      <span
        className={`block w-2 h-0.5 rounded-full shrink-0 ${light ? "bg-brand-400" : "bg-brand-700"}`}
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
