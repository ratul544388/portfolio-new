"use client";

import { Project } from "../project";

export const ProjectsSkeleton = () => {
  return (
    <div className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[900px] mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 12 }).map((_, index) => (
        <Project.Skeleton key={index} />
      ))}
    </div>
  );
};
