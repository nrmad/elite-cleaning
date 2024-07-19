import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fallback(firstname: string, surname: string) {
  return firstname.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
}
