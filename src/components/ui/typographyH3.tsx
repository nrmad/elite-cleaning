import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export function TypographyH3({ children, className }: PropTypes) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}
