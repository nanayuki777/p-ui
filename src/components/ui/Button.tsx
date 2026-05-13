import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  icon?: ReactNode;
};

export function Button({ className, variant = "primary", icon, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sprout-300 disabled:opacity-60",
        variant === "primary" && "bg-sprout-500 text-white shadow-panel hover:bg-sprout-600",
        variant === "secondary" && "border border-sprout-200 bg-white text-sprout-800 hover:bg-sprout-50",
        variant === "ghost" && "text-sprout-800 hover:bg-sprout-100",
        variant === "danger" && "bg-rose-500 text-white shadow-panel hover:bg-rose-600",
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
