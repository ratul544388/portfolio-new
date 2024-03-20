"use client";

import { Project } from "../project";

export const ProjectsSkeleton = () => {
  return (
    <div className="w-full grid mt-4 gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
      {Array.from({ length: 12 }).map((_, index) => (
        <Project.Skeleton key={index} />
      ))}
    </div>
  );
};
