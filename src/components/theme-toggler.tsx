"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface ThemeTogglerProps {
  className?: string;
}

export const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="w-10 h-5 rounded-full" />;
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative bg-accent w-10 h-5 flex items-center p-[2px] border rounded-full",
        className
      )}
    >
      <motion.span
        variants={{
          light: { left: 0, x: 0 },
          dark: { left: "100%", x: "-100%" },
        }}
        initial={theme}
        animate={theme}
        className="absolute h-full aspect-square rounded-full bg-primary"
      />
      <SunIcon className="" />
      <MoonIcon className="ml-auto" />
    </button>
  );
};
