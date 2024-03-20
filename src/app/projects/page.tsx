"use client";

import { HorizontalScrollNavigation } from "@/components/horizontal-scroll-navigation";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageNavigation } from "@/components/page-navigation";
import { Projects } from "@/components/projects";
import { ProjectsSkeleton } from "@/components/skeletons/projects-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { tags } from "@/config";
import { useState } from "react";

const ProjectsPage = () => {
  const [activeTag, setActiveTag] =
    useState<(typeof tags)[number]>("all projects");

  return (
    <MaxWidthWrapper className="h-full flex flex-col items-center">
      <HorizontalScrollNavigation
        items={[...tags]}
        active={activeTag}
        role="button"
        onChange={(value) => setActiveTag(value as (typeof tags)[number])}
      />
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
