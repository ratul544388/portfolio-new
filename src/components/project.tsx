"use client";

import Image, { StaticImageData } from "next/image";
import { Skeleton } from "./ui/skeleton";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Button, buttonVariants } from "./ui/button";
import { SiGoogleearth } from "react-icons/si";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface ProjectProps {
  name: string;
  description: string;
  images: StaticImageData[];
  tech: string[];
  githubLink: string;
  deployedLink: string;
}

export const Project = ({
  name,
  description,
  images,
  tech,
  githubLink,
  deployedLink,
}: ProjectProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative bg-background w-full group text-sm rounded-lg overflow-hidden border transition-all duration-200 shadow_sm">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative w-full aspect-square max-h-[200px] overflow-hidden"
            >
              <Image
                src={images[0]}
                alt={name}
                fill
                className="group-hover:scale-105 transition object-cover"
                placeholder="blur"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute  top-1/2 left-0" />
        <CarouselNext
          className={cn(
            "absolute top-1/2 right-0",
            current === images.length && "hidden"
          )}
        />
      </Carousel>
      <div className="p-3">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-muted-foreground mt-1.5 leading-4 line-clamp-2">
          {description}
        </p>
        <Separator className="my-3" />
        <div className="flex gap-x-3 gap-y-2 flex-wrap">
          {tech.map((item) => (
            <div
              key={item}
              className="font-medium text-xs border rounded-full px-3 py-0.5 bg-secondary text-blue-500"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="space-y-2.5 w-full mt-5">
          <Link
            href={deployedLink}
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            target="_blank"
          >
            Live Demo
            <SiGoogleearth className="h-4 w-4" />
          </Link>
          <Link
            href={deployedLink}
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            target="_blank"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

Project.Skeleton = function ProjectSkeleton() {
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <Skeleton className="w-full aspect-square" />
      <div className="px-2 py-3 space-y-2 w-full">
        <Skeleton className="w-[80%] h-5" />
        <Skeleton className="w-[100%] h-4 mt-3" />
        <Skeleton className="w-[50%] h-4 mt-1" />
      </div>
    </div>
  );
};
