"use client";

import { navLinks } from "@/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  mode?: "horizontal" | "vertical";
  onCloseSheet?: () => void;
  className?: string;
}

export const NavLinks = ({
  mode = "horizontal",
  onCloseSheet,
  className,
}: NavLinksProps) => {
  const pathname = usePathname();
  return (
    <nav className={cn("flex", mode === "vertical" && "flex-col", className)}>
      {navLinks.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;

        const animate = isActive ? "visible" : "hidden";
        return (
          <Link
            onClick={onCloseSheet}
            href={href}
            key={label}
            className={cn(
              "relative flex items-center gap-4 text-muted-foreground font-medium px-3 py-1 rounded-md hover:text-foreground transition duration-300",
              isActive && "text-foreground",
              mode === "vertical" && "py-3 hover:bg-accent"
            )}
          >
            {mode === "vertical" && <Icon className="h-5 w-5" />}
            {label}
            <motion.span
              variants={{
                hidden: { height: 0 },
                visible: { height: "100%" },
              }}
              initial="hidden"
              animate={animate}
              className={cn(
                "absolute inset-x-0 bottom-0 bg-accent -z-10 rounded-md"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
};
