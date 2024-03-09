"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface PageNavigationProps {
  nextPageLabel?: string;
  previousPageLabel?: string;
  nextPageUrl?: string;
  previousPageUrl?: string;
}

export const PageNavigation = ({
  nextPageLabel,
  previousPageLabel,
  nextPageUrl,
  previousPageUrl,
}: PageNavigationProps) => {
  return (
    <div className="flex flex-col sm:flex-row max-w-[900px] mx-auto items-center mt-12 justify-between gap-x-12 gap-y-6 w-full">
      {previousPageUrl && (
        <Link
          href={previousPageUrl}
          className="rounded-lg border hover:bg-accent py-3 px-4 w-full max-w-[500px] mx-auto flex items-center justify-between"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <div>
            <p className="text-lg font-medium">Previous</p>
            <p className="text-sm text-muted-foreground">{previousPageLabel}</p>
          </div>
        </Link>
      )}
      {nextPageUrl && (
        <Link
          href={nextPageUrl}
          role="button"
          className="rounded-lg w-full max-w-[500px] mx-auto py-3 px-4 border hover:bg-accent flex items-center justify-between"
        >
          <div>
            <p className="text-lg font-medium">Next</p>
            <p className="text-sm text-muted-foreground">{nextPageLabel}</p>
          </div>
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      )}
    </div>
  );
};
