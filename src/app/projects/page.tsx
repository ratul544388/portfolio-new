"use client";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageNavigation } from "@/components/page-navigation";
import { Projects } from "@/components/projects";
import { Button } from "@/components/ui/button";
import { tags } from "@/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeTag, setActiveTag] =
    useState<(typeof tags)[number]>("all");
  return (
    <MaxWidthWrapper className="h-full flex flex-col items-center">
      <section className="border bg-background flex flex-wrap justify-center rounded-full">
        {tags.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <button
              onClick={() => setActiveTag(tag)}
              key={tag}
              className={cn(
                "relative text-muted-foreground font-medium text-sm py-2 px-4 capitalize transition-colors duration-300",
                isActive && "text-white"
              )}
            >
              <span className="z-10 relative">{tag}</span>
              {activeTag === tag && (
                <motion.span
                  layoutId="active-project"
                  className={cn("absolute inset-0 gradient", isActive && "")}
                  style={{borderRadius: 9999}}
                />
              )}
            </button>
          );
        })}
      </section>
      <Projects activeTag={activeTag} />
      <PageNavigation
        nextPageLabel="About"
        nextPageUrl="/about"
        previousPageLabel="Home"
        previousPageUrl="/"
      />
    </MaxWidthWrapper>
  );
};

export default ProjectsPage;
