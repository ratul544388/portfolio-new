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
    useState<(typeof tags)[number]>("all projects");
  return (
    <MaxWidthWrapper className="h-full flex flex-col items-center">
      <section className="border bg-background flex flex-wrap justify-center rounded-full">
        {tags.map((tag) => {
          return (
            <Button
              onClick={() => setActiveTag(tag)}
              key={tag}
              className={cn(
                "relative text-muted-foreground font-medium text-sm py-2 px-4 capitalize transition-colors duration-300",
                activeTag === tag && "text-white hover:text-white"
              )}
              variant="ghost"
            >
              <span className="z-10">{tag}</span>
              {activeTag === tag && (
                <motion.span
                  layoutId="activeSortBy"
                  className="absolute inset-0 rounded-full gradient"
                />
              )}
            </Button>
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
