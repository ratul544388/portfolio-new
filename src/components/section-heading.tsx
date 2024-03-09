"use client"

import { ReactNode } from "react";

interface SectionHeadingProps {
  className?: string;
  children: ReactNode
}

export const SectionHeading = ({
    className,
    children,
} : SectionHeadingProps) => {
  return (
     <h2 className="text-2xl font-semibold whitespace-nowrap">
        {children}
     </h2>
    );
}
