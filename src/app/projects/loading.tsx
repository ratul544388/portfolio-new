import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Project } from "@/components/project";
import { ProjectsSkeleton } from "@/components/skeletons/projects-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <MaxWidthWrapper className="max-w-[900px] flex flex-col gap-10 items-center">
      <Skeleton className="w-full max-w-[500px] h-10 rounded-full" />
      <ProjectsSkeleton />
    </MaxWidthWrapper>
  );
};

export default Loading;
