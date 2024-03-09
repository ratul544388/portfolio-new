"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { Project } from "../project";

export const ProjectsSkeleton = () => {
  return (
    <div className="w-full grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Project.Skeleton key={index} />
      ))}
    </div>
  );
};
