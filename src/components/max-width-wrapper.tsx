"use client"

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

export const MaxWidthWrapper = ({
    children,
    className
} : MaxWidthWrapperProps) => {
  return (
     <div className={cn("max-w-screen-2xl mx-auto px-5 sm:px-8", className)}>
        {children}
     </div>
    );
}
