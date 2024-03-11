"use client";

import { projects, tags } from "@/config";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "./project";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  activeTag?: (typeof tags)[number];
  className?: string;
}

export const Projects = ({
  activeTag = "all",
  className,
}: ProjectsProps) => {
  const [isMounted, setIsMounted] = useState(false);

  let filteredProjects = projects.filter((project) =>
    project.tags.some((tag) => tag === activeTag)
  );

  if (!filteredProjects.length) {
    filteredProjects = projects;
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section
      className={cn(
        "w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[900px] mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {filteredProjects.map((project, index) => (
        <>
          {isMounted ? (
            <motion.div
              animate={{ x: [-50, 0], opacity: [0, 1] }}
              transition={{ delay: index * 0.05 }}
              key={index}
              className="opacity-0"
            >
              <Project key={index} {...project} />
            </motion.div>
          ) : (
            <Project.Skeleton />
          )}
        </>
      ))}
    </section>
  );
};
