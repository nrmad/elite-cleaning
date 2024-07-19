import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export function TypographyH1({ children, className }: PropTypes) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
