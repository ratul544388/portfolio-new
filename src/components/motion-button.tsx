"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { Button, buttonVariants } from "./ui/button";

interface MotionButtonProps {
  variant?: "gradient" | "primary" | "default" | "outline" | "secondary";
  size?: "default" | "icon" | "sm" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  whileHoverScale?: number,
}

export const MotionButton = ({
  variant,
  size,
  href,
  children,
  className,
  shadow,
  whileHoverScale = 1,
}: MotionButtonProps) => {
  const Comp = href ? motion(Link) : motion(Button);

  return (
    <Comp
      variant={variant}
      whileHover={{ scale: whileHoverScale }}
      whileTap={{ scale: 1.06 }}
      size={size}
      href={href || ""}
      className={cn(
        "gap-2 group",
        buttonVariants({ variant, size }),
        shadow && "shadow-[0px_10px_15px_rgba(165,3,252,0.3)]",
        className
      )}
    >
      {children}
    </Comp>
  );
};
