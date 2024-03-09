"use client";

import { LogoIcon } from "@/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo = ({ className, onClick }: LogoProps) => {
  return (
    <Link
      onClick={onClick}
      href="/"
      className={cn("flex items-center gap-2 font-extrabold", className)}
    >
      <LogoIcon className="h-6 w-6 text-primary" />
      WebDev.
    </Link>
  );
};
