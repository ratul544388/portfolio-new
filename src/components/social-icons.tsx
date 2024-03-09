"use client";

import { socialIcons } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialIconsProps {
  className?: string;
  onCloseSheet?: () => void;
}

export const SocialIcons = ({ className, onCloseSheet }: SocialIconsProps) => {
  return (
    <nav className={cn("flex gap-3", className)}>
      {socialIcons.map(({ href, icon: Icon }, index) => (
        <Link
          onClick={onCloseSheet}
          target="_blank"
          href={href}
          key={index}
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </nav>
  );
};
