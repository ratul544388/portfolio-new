"use client";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { NavLinks } from "./navLinks";
import { Logo } from "./logo";
import { SocialIcons } from "./social-icons";
export const MobileSheet = () => {
  const [open, setOpen] = useState(false);
  const animate = open ? "open" : "closed";

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="min-w-8 h-8 flex md:hidden items-center justify-center">
      <Toggler animate={animate} onToggle={onToggle} />
      <motion.div
        variants={{ closed: { y: "-100%" }, open: { y: 0 } }}
        initial="closed"
        animate={animate}
        transition={{ ease: "easeIn", duration: 0.2 }}
        className="fixed z-40 top-0 inset-x-0 bg-background border-b shadow-lg -translate-y-[100%] p-5 pb-10 xs:px-10"
      >
        <Logo />
        <NavLinks
          mode="vertical"
          onCloseSheet={onToggle}
          className="mt-10 pb-6"
        />
        <SocialIcons onCloseSheet={onToggle} className="pl-3"/>
      </motion.div>
      <motion.span
        onClick={onToggle}
        variants={{
          closed: { opacity: 0, pointerEvents: "none" },
          open: { opacity: 1, pointerEvents: "auto" },
        }}
        initial="closed"
        animate={animate}
        className="fixed z-20 top-[60px] inset-0 bg-neutral-900/10 backdrop-blur-sm"
      />
    </div>
  );
};

const Toggler = ({
  animate,
  onToggle,
}: {
  animate: "open" | "closed";
  onToggle: () => void;
}) => {
  return (
    <button className="relative h-[25px] w-8 z-[200] group" onClick={onToggle}>
      <AnimatePresence initial={false}>
        <MotionConfig transition={{ ease: "easeIn" }}>
          <motion.span
            variants={{
              closed: {
                top: ["50%", "50%", "0%"],
                y: ["-50%", "-50%", "0%"],
                rotate: [45, 0, 0],
              },
              open: {
                top: ["0%", "50%", "50%"],
                y: "-50%",
                rotate: [0, 0, 45],
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-1 w-full bg-muted-foreground group-hover:bg-foreground transition-colors duration-300 top-0 left-0 rounded-full"
          />
          <motion.span
            style={{ translateY: "-50%" }}
            variants={{
              closed: { rotate: [-45, 0, 0] },
              open: { rotate: [0, 0, -45] },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-1 w-full bg-muted-foreground group-hover:bg-foreground transition-colors duration-300 top-1/2 left-0 rounded-full"
          />
          <motion.span
            variants={{
              closed: {
                opacity: [0, 0, 1],
                bottom: ["50%", "50%", "0%"],
                y: ["50%", "50%", "0%"],
              },
              open: {
                opacity: [1, 1, 0],
                bottom: "50%",
                y: "50%",
              },
            }}
            initial="closed"
            animate={animate}
            className="absolute h-1 w-1/2 bg-muted-foreground group-hover:bg-foreground transition-colors duration-300 bottom-0 right-0 rounded-full"
          />
        </MotionConfig>
      </AnimatePresence>
    </button>
  );
};
