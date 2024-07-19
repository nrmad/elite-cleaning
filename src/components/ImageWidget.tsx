import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

interface PropTypes {
  url: string;
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageWidget({
  url,
  name,
  className = "",
  width = 150,
  height = 90,
}: PropTypes) {
  return (
    <Button variant="ghost" className="w-fit h-fit ">
      <div style={{ width: width, height: height }} className={`relative `}>
        <Image
          src={url}
          alt={name}
          fill
          className={cn("fill-black", className)}
          // objectFit={"cover"}
        />
      </div>
    </Button>
  );
}

// border border-solid border-red-500
