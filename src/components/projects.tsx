"use client";

import { projects, tags } from "@/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "./project";
import { ProjectsSkeleton } from "./skeletons/projects-skeleton";

interface ProjectsProps {
  activeTag?: (typeof tags)[number];
  className?: string;
}

export const Projects = ({
  activeTag = "all projects",
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
        "w-full grid mt-5 gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]",
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
            <ProjectsSkeleton />
          )}
        </>
      ))}
    </section>
  );
};
