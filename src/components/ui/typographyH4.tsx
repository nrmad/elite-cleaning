import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export function TypographyH4({ children, className }: PropTypes) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}
