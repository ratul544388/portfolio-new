"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HorizontalScrollbarProps {
  items: string[];
  active?: string;
  onChange?: (value: string) => void;
  role?: "button" | "none";
  isSmall?: boolean;
}

export const HorizontalScrollNavigation = ({
  items,
  active,
  role,
  onChange,
  isSmall,
}: HorizontalScrollbarProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showControllers, setShowControllers] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        const { clientWidth, scrollWidth } = scrollRef.current;
        if (scrollWidth > clientWidth) {
          setShowControllers(true);
        } else {
          setShowControllers(false);
        }
      }
      handleScroll();
    };

    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        if (showControllers && scrollLeft > 40) {
          setShowLeftArrow(true);
        } else {
          setShowLeftArrow(false);
        }
        if (showControllers && scrollLeft + clientWidth + 80 <= scrollWidth) {
          setShowRightArrow(true);
        } else {
          setShowRightArrow(false);
        }
      }
    };

    const currentScrollRef = scrollRef.current;
    handleResize();

    scrollRef.current?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      currentScrollRef?.removeEventListener("scroll", handleScroll);
    };
  }, [showControllers]);

  const onLeftButtonClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: -scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const onRightButtonClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={scrollRef}
      className="w-full flex items-center justify-start gap-3 scrollbar-none overflow-x-auto h-9"
    >
      {showLeftArrow && (
        <button
          onClick={onLeftButtonClick}
          className={cn(
            "sticky left-0 z-30 bg-background min-w-6 h-9 grid place-content-center",
            isSmall && "rounded-none bg-background text-foreground"
          )}
        >
          <ChevronLeftIcon />
        </button>
      )}
      {items.map((item) => (
        <div
          onClick={() => onChange?.(item)}
          role={role}
          key={item}
          className={cn(
            "relative capitalize transition-colors duration-300 rounded-md text-sm font-medium shadow-sm px-3 h-8 grid place-content-center whitespace-nowrap bg-background",
            active === item && "text-white",
            isSmall && "text-xs h-6 text-muted-foreground bg-secondary"
          )}
        >
          <span className="relative z-20">{item}</span>
          {active === item && (
            <motion.span
              layoutId="activeTag"
              className="absolute inset-0 bg-primary z-10"
              style={{ borderRadius: 4 }}
            />
          )}
        </div>
      ))}
      {showRightArrow && (
        <button
          onClick={onRightButtonClick}
          className={cn(
            "sticky right-0 z-30 bg-background min-w-6 h-9 grid place-content-center",
            isSmall && "rounded-none bg-background text-foreground"
          )}
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
};
