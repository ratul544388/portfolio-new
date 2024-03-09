"use client";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PageNavigation } from "@/components/page-navigation";
import { SectionHeading } from "@/components/section-heading";
import { TimelineItem } from "@/components/timeline-item";
import { Title } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/config";

const AboutPage = () => {
  return (
    <MaxWidthWrapper className="h-full flex flex-col w-full items-center gap-6">
      <Title gradient>About me</Title>
      <section className="max-w-[700px] space-y-6">
        <p>
          Hello! <span className="font-semibold">I&apos;m Ratul Hossain</span>,
          a <span className="font-semibold">24-year-old</span>{" "}
          <span className="font-semibold">full-stack web developer</span> with{" "}
          <span className="font-semibold">3+ years</span> of experience.
          Proficient in HTML, CSS, Tailwind CSS,{" "}
          <span className="font-semibold">React</span>, JavaScript, TypeScript,
          ShadcnCN UI, Framer Motion, and{" "}
          <span className="font-semibold">Next.js</span>, Node.js,
          <span className="font-semibold">MongoDB</span>, MySQL, Stripe.
        </p>
        <p>
          I&apos;ve independently developed a variety of projects including
          e-commerce websites, food delivery platforms, gym admin tools, and
          social media apps. My dedication to continuous learning has allowed me
          to deliver high-quality, user-centric solutions in the ever-evolving
          web development landscape.
        </p>
        <p>
          Excited to bring my expertise to new challenges and contribute to
          impactful digital experiences.
        </p>
      </section>
      <Separator className="h-[80px]" orientation="vertical" />
      <SectionHeading>My Experience</SectionHeading>
      {experiences.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
      <PageNavigation
        nextPageLabel="Skills"
        nextPageUrl="/skills"
        previousPageLabel="Projects"
        previousPageUrl="/projects"
      />
    </MaxWidthWrapper>
  );
};

export default AboutPage;
