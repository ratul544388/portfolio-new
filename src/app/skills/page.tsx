"use client";
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel";
import { Loader } from "@/components/loader";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageNavigation } from "@/components/page-navigation";
import { SectionHeading } from "@/components/section-heading";
import { CarouselItem } from "@/components/ui/carousel";
import { skills } from "@/config";
import { motion } from "framer-motion";
import Image from "next/image";
const SkillsPage = () => {
  const frontendSkills = skills.filter((skill) => Boolean(skill.frontend));
  const backendSkills = skills.filter((skill) => Boolean(skill.backend));

  return (
    <MaxWidthWrapper className="h-full flex flex-col">
      <div className="grid md:grid-cols-2 gap-12">
        <section className="flex flex-col gap-4">
          <SectionHeading>Frontend</SectionHeading>
          {frontendSkills.map(({ label, skillPercentage }) => (
            <Skill label={label} percent={skillPercentage} key={label} />
          ))}
        </section>
        <section className="flex flex-col gap-4">
          <SectionHeading>Backend</SectionHeading>
          {backendSkills.map(({ label, skillPercentage }) => (
            <Skill label={label} percent={skillPercentage} key={label} />
          ))}
        </section>
      </div>
      <section className="mt-10">
        <AutoScrollCarousel>
          {skills.map(({ label, image }) => (
            <CarouselItem
              key={label}
              className="mr-6 p-5 rounded-lg shadow-lg border max-w-[170px] flex flex-col gap-3 items-center justify-center"
            >
              {label}
              <Image src={image} alt={label} width={40} height={40} />
            </CarouselItem>
          ))}
        </AutoScrollCarousel>
      </section>
      <PageNavigation
        nextPageLabel="Contact"
        nextPageUrl="/contact"
        previousPageLabel="About"
        previousPageUrl="/about"
      />
    </MaxWidthWrapper>
  );
};

const Skill = ({ label, percent }: { label: string; percent: number }) => {
  return (
    <div
      key={label}
      className="flex flex-col gap-2 whitespace-nowrap text-sm font-medium rounded-full max-w-[600px]"
    >
      <div className="flex items-center justify-between text-muted-foreground">
        <p className="min-w-[100px]">{label}</p>
        {percent}%
      </div>
      <div className="h-2 rounded-full bg-accent flex">
        <motion.span
          animate={{
            width: ["0%", `${percent}%`],
            transition: { duration: 2 },
          }}
          className="h-full rounded-full bg-gray-600 dark:bg-neutral-700"
        />
      </div>
    </div>
  );
};

export default SkillsPage;
