"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  icon: IconType;
  location: string;
  description: string;
  date: string;
  index: number;
}

export const TimelineItem = ({
  title,
  icon: Icon,
  location,
  description,
  date,
  index,
}: TimelineItemProps) => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const even = index % 2 === 0;

  return (
    <section
      className={cn(
        "group flex justify-between overflow-hidden flex-row-reverse md:flex-row pb-4",
        even && "md:flex-row-reverse"
      )}
    >
      <div
        className="pb-12"
        style={{ width: width >= 768 ? "calc(50% - 45px)" : "100%" }}
      >
        <motion.div
          variants={{
            initial: even || width <= 720 ? { x: 20 } : { x: -20 },
            animate: {
              x: 0,
              opacity: 1,
            },
          }}
          transition={{ duration: 0.5 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="relative border opacity-0 p-5 flex flex-col bg-background rounded-lg shadow-lg"
        >
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="font-medium">{location}</p>
          <p className="text-muted-foreground mt-2">{description}</p>
          <p className="md:hidden mt-3 text-sm text-muted-foreground">{date}</p>
          <span
            className={cn(
              "absolute bg-background h-4 w-4 rotate-45 right-[100%] md:right-0 translate-x-1/2 shadow-lg -z-10",
              even && "md:right-[100%]"
            )}
          />
          <span
            className={cn(
              "absolute bg-background border border-t-0 border-r-0 h-4 w-4 rotate-45 right-[100%] md:right-0 translate-x-1/2",
              even && "md:right-[100%]"
            )}
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center mr-5 md:mr-0 md:min-w-[90px]">
        <div className="flex items-center justify-center min-h-12 min-w-12 bg-background shadow-md rounded-full">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <span className="h-full shadow-md w-2 bg-background rounded-b-full" />
      </div>
      <p
        className={cn(
          "font-medium mt-3.5 whitespace-nowrap w-full hidden md:flex",
          even && "justify-end"
        )}
        style={{ width: "calc(50% - 45px)" }}
      >
        {date}
      </p>
    </section>
  );
};
