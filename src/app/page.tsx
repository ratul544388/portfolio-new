"use client";

import { AutoScrollCarousel } from "@/components/auto-scroll-carousel";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MotionButton } from "@/components/motion-button";
import { PageNavigation } from "@/components/page-navigation";
import { Projects } from "@/components/projects";
import { SectionHeading } from "@/components/section-heading";
import { Title } from "@/components/title";
import { CarouselItem } from "@/components/ui/carousel";
import { MdOutlineFileDownload } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { myGithubLink, reviews, services } from "@/config";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <MaxWidthWrapper className="pt-10 flex flex-col items-center">
      <section className="max-w-[500px]">
        <Title center>Hello there</Title>
        <div className="flex gap-2 justify-center">
          <Title>I&apos;m</Title>
          <Title gradient>Ratul Hossain</Title>
        </div>
        <div className="mt-5 text-muted-foreground text-lg text-center">
          I&apos;m a&nbsp;
          <span className="font-semibold">full stack web developer</span> . My
          main focus is building websites using{" "}
          <Link
            target="_blank"
            href="/react.dev"
            className="font-semibold text-foreground underline"
          >
            React
          </Link>{" "}
          and{" "}
          <Link
            target="_blank"
            href="https://nextjs.org/"
            className="font-semibold text-foreground underline"
          >
            Next.js
          </Link>
        </div>
        <div className="mt-6 flex gap-6 justify-center">
          <MotionButton href="/contact" className="group" shadow>
            Contact me
            <FaLongArrowAltRight className="h-4 w-4 group-hover:translate-x-1 transition duration-300" />
          </MotionButton>
          <MotionButton href={myGithubLink} className="border-2" variant="outline">
            <FaGithub className="h-4 w-4" />
            GitHub
          </MotionButton>
        </div>
      </section>
      <Separator className="h-[80px] my-10" orientation="vertical" />
      <section className="flex flex-col w-full items-center">
        <SectionHeading>Latest Projects</SectionHeading>
        <Projects activeTag="latest" />
        <MotionButton
          className="mt-10 group shadow-lg"
          variant="default"
          href="/projects"
        >
          Explore All
          <FaLongArrowAltRight className="h-4 w-4 group-hover:translate-x-1 transition duration-300" />
        </MotionButton>
      </section>
      <section className="w-full mt-14 grid grid-cols-3 gap-x-4 gap-y-12">
        <div className="flex flex-col md:mt-10 items-center md:items-start col-span-3 md:col-span-1 max-w-[400px] mx-auto">
          <Title>My Awesome</Title>
          <Title gradient>Services</Title>
          <p className="mt-3 text-center md:text-start">
            Elevate your online presence with our premium services. Let&apos;s
            turn your ideas into reality.
          </p>
          <MotionButton shadow variant="gradient" className="mt-5 w-fit">
            Download CV
            <MdOutlineFileDownload className="group-hover:translate-y-1 transition duration-300" />
          </MotionButton>
        </div>
        <div className="grid gap-10 sm:gap-0 sm:grid-cols-2 col-span-3 md:col-span-2">
          {services.map((service) => (
            <ServiceCard {...service} key={service.title} />
          ))}
        </div>
      </section>
      <section className="flex flex-col mt-14 w-full gap-5 items-center">
        <SectionHeading>Reviews</SectionHeading>
        <AutoScrollCarousel>
          {reviews.map(({ name, username, image, comment }) => (
            <CarouselItem
              key={name}
              className="mr-6 p-5 rounded-lg shadow-lg border dark:shadow-md dark:shadow-indigo-500 max-w-[300px] bg-background"
            >
              <div className="flex items-center gap-2">
                <div className="relative h-9 w-9 rounded-full overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div>
                  <h3 className="leading-4 font-medium">{name}</h3>
                  <p className="leading-4 text-muted-foreground">{username}</p>
                </div>
              </div>
              <p className="mt-3">{comment}</p>
            </CarouselItem>
          ))}
        </AutoScrollCarousel>
      </section>
      <PageNavigation nextPageLabel="Projects" nextPageUrl="/projects" />
    </MaxWidthWrapper>
  );
}

type Positions = {
  x?: number;
  y?: number;
  left?: number;
  right?: number;
  top?: number;
};

const ServiceCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "h-fit flex bg-background flex-col min-w-[250px] max-w-[250px] p-5 bg-background border items-center justify-center rounded-xl shadow-xl dark:shadow-lg dark:shadow-blue-500",
        className
      )}
    >
      <Image src={image} alt={`${title} Image`} height={40} width={40} />
      <h4 className="font-medium mt-1">{title}</h4>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
      <MotionButton
        variant="outline"
        size="sm"
        className="mt-3 text-blue-500 hover:border-blue-500/50 hover:text-blue-500"
      >
        Read More
      </MotionButton>
    </motion.div>
  );
};
