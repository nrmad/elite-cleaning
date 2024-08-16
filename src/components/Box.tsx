import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PropTypes {
  className?: string;
  children?: ReactNode;
}

// 

export default function Box({ children, className = "" }: PropTypes) {
  return (
    <div
      // style={{ backdropFilter: "blur(20px);" }}
      className={cn(
        `isolate bg-white/1 shadow-lg ring-1 ring-black/5 backdrop-blur-lg`,
        className
      )}
    >
      {children}
    </div>
  );
}
