import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function riskLabel(risk: "low" | "medium" | "high") {
  return risk === "high" ? "红色预警" : risk === "medium" ? "黄色关注" : "绿色平稳";
}

export function riskClass(risk: "low" | "medium" | "high") {
  return {
    low: "bg-emerald-100 text-emerald-700 border-emerald-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    high: "bg-rose-100 text-rose-700 border-rose-200"
  }[risk];
}
