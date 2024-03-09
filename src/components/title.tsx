"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { CgAtlasian } from "react-icons/cg";

interface TitleProps {
  className?: string;
  children?: ReactNode;
  gradient?: boolean;
  center?: boolean;
}

export const Title = ({ className, children, gradient, center }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-4xl font-semibold",
        gradient && "bg-clip-text text-transparent gradient",
        center && "text-center",
        className
      )}
    >
      {children}
    </h1>
  );
};
