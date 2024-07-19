import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
  className?: string;
};

export function TypographyP({ children, className }: PropTypes) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}
