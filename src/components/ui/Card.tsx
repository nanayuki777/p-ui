import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-white/70 bg-white/86 p-5 shadow-panel backdrop-blur", className)}
      {...props}
    />
  );
}

export function SectionTitle({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div>
      {eyebrow && <p className="mb-1 text-xs font-semibold text-sprout-600">{eyebrow}</p>}
      <h2 className="text-xl font-bold text-ink md:text-2xl">{title}</h2>
      {desc && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{desc}</p>}
    </div>
  );
}
