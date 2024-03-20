import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProjectsSkeleton } from "@/components/skeletons/projects-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <MaxWidthWrapper className="flex flex-col gap-3 items-center">
      <div className="flex w-full gap-3 overflow-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="min-w-24 h-8" />
        ))}
      </div>
      <ProjectsSkeleton />
    </MaxWidthWrapper>
  );
};

export default Loading;
