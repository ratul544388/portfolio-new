import {
  FaBriefcase,
  FaCode,
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaTwitter,
} from "react-icons/fa";
import { IoHomeOutline, IoRocketOutline } from "react-icons/io5";
import { TbBrandFiverr, TbMailShare } from "react-icons/tb";
import { TfiUser } from "react-icons/tfi";

import Review_1_image from "@/../public/images/reviews/user-1.jpg";
import Review_2_image from "@/../public/images/reviews/user-2.jpg";
import Review_3_image from "@/../public/images/reviews/user-3.jpg";
import Review_4_image from "@/../public/images/reviews/user-4.jpg";
import Review_5_image from "@/../public/images/reviews/user-5.jpg";

import digitalMarketplaceImage from "@/../public/images/projects/digital-marketplace-1.png";

export const myTwitterLink = "https://twitter.com/Ratul2582";
export const myGithubLink = "https://github.com/ratul544388";
export const MyLinkdinLink =
  "https://www.linkedin.com/in/ratul-islam-a0774521a";
export const myFacebookLink = "https://www.facebook.com/ratul544388";

export const myEmail = "ratulislam544388@gmail.com";
export const myAddress = "Keranigonj Dhaka 1310, Bangladesh";
export const myPhone = "+8801815555105";
export const myFiverrLink = "https://www.fiverr.com/ratul544"

export const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: IoRocketOutline,
  },
  {
    label: "About",
    href: "/about",
    icon: TfiUser,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: FaCode,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: TbMailShare,
  },
];

export const socialIcons = [
  {
    icon: FaGithub,
    href: myGithubLink,
  },
  {
    icon: FaTwitter,
    href: myTwitterLink,
  },
  {
    icon: FaFacebook,
    href: myFacebookLink,
  },
  {
    icon: TbBrandFiverr,
    href: myFiverrLink,
  },
];

export const projects = [
  {
    name: "Digital Marketplace",
    description:
      "Facilitating transactions of premium digital assets, ensuring quality and security for buyers and sellers alike.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["ecommerce", "latest"],
    tech: ["Next.js", "Mongodb", "Prisma", "Stripe"],
    githubLink: "https://github.com/ratul544388/digital-marketplace",
    deployedLink: "https://digital-marketplace-rouge.vercel.app",
  },
  {
    name: "Gym Admin Management",
    description:
      "Sheamlessly manage gym Enrollment, renewals and Membership Plans, Utilize Tables with Versatile Filters for member menagement",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: [],
    tech: ["React", "Next.js", "Mongodb", "Prisma"],
    githubLink: "https://github.com/ratul544388/gym",
    deployedLink: "https://gym-phi-one.vercel.app/",
  },
  {
    name: "Twitter clone",
    description:
      "Our platform mirrors Twitter's UI and functionality, including blue badge subscriptions, ensuring a seamless user experience.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["social media"],
    tech: ["Next.js", "Mongodb", "Prisma", "Stripe", "TanstackQuery"],
    githubLink: "https://github.com/ratul544388/Twitter-clone-next-14",
    deployedLink: "https://twitter-clone-next-14.vercel.app",
  },
  {
    name: "Food Delivery App",
    description:
      "Streamlined online platform offering seamless food delivery services, ensuring efficiency and convenience for users and restaurants alike.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["ecommerce"],
    tech: ["Next.js", "Prisma", "Stripe", "TanstackQeury"],
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app",
  },
  {
    name: "Portfolio Website",
    description:
      "Dynamic portfolio website featuring animated elements powered by Framer Motion, showcasing creativity and innovation in design and development",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["portfolio", "latest"],
    tech: ["React", "Next.js", "Framer motion", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
  {
    name: "Shopping App",
    description:
      "Shop for trendy fashion clothing online with secure payment processing through Stripe, ensuring a smooth and stylish shopping experience.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["ecommerce", "latest"],
    tech: ["Next.js", "Mongodb", "Prisma", "Stripe"],
    githubLink: "https://github.com/ratul544388/ecommerce",
    deployedLink: "https://ecommerce-coral-delta.vercel.app",
  },
  {
    name: "Blog app",
    description:
      "Publish your blog and engage with the community by voting and commenting on other blogs, fostering an interactive and supportive environment.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["social media"],
    tech: ["React", "Next.js", "Mongodb", "TanstackQuery"],
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app",
  },
  {
    name: "Doctor Booking App",
    description:
      "Easily schedule appointments with your preferred doctors online, ensuring convenient access to quality healthcare services.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["booking"],
    tech: ["Next.js", "Mongodb", "Prisma", "Framer motion"],
    githubLink: "https://github.com/ratul544388/Doctor-Booking-App",
    deployedLink: "https://doctor-booking-app.vercel.app",
  },
  {
    name: "Mini Projects & games",
    description:
      "Enjoy a variety of online games and engage in other activities, offering entertainment and fun for users of all ages.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: [],
    tech: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink: "https://github.com/ratul544388/mini-projects",
    deployedLink: "https://mini-projects-zeta.vercel.app",
  },
  {
    name: "Car Booking App",
    description:
      "Search and Filters Efficiently search and filter through a comprehensive collection of brand cars online, leveraging the capabilities of two integrated APIs.",
    images: [
      digitalMarketplaceImage,
      digitalMarketplaceImage,
      digitalMarketplaceImage,
    ],
    tags: ["booking"],
    tech: ["TypeScript", "Next.js", "React", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
];

export const tags = [
  "all projects",
  "latest",
  "ecommerce",
  "social media",
  "booking",
  "portfolio",
] as const;

export const skills = [
  {
    label: "Html",
    image: "/images/skills/html.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "css",
    image: "/images/skills/css.png",
    frontend: true,
    skillPercentage: 90,
  },
  {
    label: "Tailwind CSS",
    image: "/images/skills/tailwind-css.png",
    frontend: true,
    skillPercentage: 90,
  },
  {
    label: "JavaScript",
    image: "/images/skills/javascript.png",
    fontend: true,
    skillPercentage: 90,
  },
  {
    label: "TypeScript",
    image: "/images/skills/typescript.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "Shadcn UI",
    image: "/images/skills/shadcn-ui.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "Framer Motion",
    image: "/images/skills/framer-motion.png",
    frontend: true,
    skillPercentage: 80,
  },
  {
    label: "Next Js",
    image: "/images/skills/framer-motion.png",
    frontend: true,
    backend: true,
    skillPercentage: 90,
  },
  {
    label: "MySQL",
    image: "/images/skills/mysql.png",
    backend: true,
    skillPercentage: 70,
  },
  {
    label: "MongoDB",
    image: "/images/skills/mongodb.png",
    backend: true,
    skillPercentage: 100,
  },
  {
    label: "Tanstack Query",
    image: "/images/skills/tanstack-query.png",
    backend: true,
    skillPercentage: 80,
  },
  {
    label: "Stripe",
    image: "/images/skills/stripe.png",
    backend: true,
    skillPercentage: 50,
  },
];

export const reviews = [
  {
    name: "John Doe",
    username: "john_doe123",
    image: Review_1_image,
    comment:
      "As a fellow developer, I must say your work is impressive! Your attention to detail and problem-solving skills are top-notch.",
  },
  {
    name: "Alex Johnson",
    username: "alex_johnson789",
    image: Review_2_image,
    comment:
      "Your projects are inspiring! Your ability to create seamless user experiences is commendable.",
  },
  {
    name: "Jane Smith",
    username: "jane_smith456",
    image: Review_3_image,
    comment:
      "Wow, your coding skills are incredible! I'm amazed at how efficiently you handle both front-end and back-end development.",
  },
  {
    name: "Emily Brown",
    username: "emily_brown321",
    image: Review_4_image,
    comment:
      "Your problem-solving skills are next level! It's evident that you're dedicated to delivering high-quality work.",
  },
  {
    name: "Michael Lee",
    username: "michael_lee654",
    image: Review_5_image,
    comment:
      "Impressive work, as always! Your expertise in both front-end and back-end development shines through in every project.",
  },
];

export const experiences = [
  {
    title: "Self-Taught Full Stack Developer",
    icon: FaGraduationCap,
    location: "Dhaka, Bangladesh",
    description:
      "I embarked on a self-learning journey to become a full-stack web developer. I dedicated my time to learning various technologies, including TypeScript, React, Tailwind CSS, Node.js, Next.js, MongoDB, and more. Through online courses, tutorials, and personal projects, I gained hands-on experience in building web applications from scratch.",
    date: "2022",
  },
  {
    title: "Personal Projects",
    icon: FaLaptopCode,
    location: "Dhaka",
    description:
      "Throughout my learning journey, I worked on several personal projects to apply and reinforce my skills. These projects include (mention some of your projects along with a brief description of each). Through these projects, I honed my problem-solving abilities, improved my coding skills, and gained valuable experience in software development.",
    date: "2023 - 2024",
  },
  {
    title: "Freelance Web Developer",
    icon: FaBriefcase,
    location: "Remote",
    description:
      "As a freelance web developer, I collaborated with clients to bring their ideas to life. I specialized in creating custom websites and web applications tailored to their specific needs. From conceptualization to deployment, I provided end-to-end development services, ensuring high-quality solutions that met client requirements and exceeded expectations.",
    date: "2024",
  },
];

export const services = [
  {
    title: "Design",
    description:
      "Our design services focus on bringing creativity to life, crafting visually stunning and functional designs that captivate your audience and enhance your brand identity. From conceptualization to execution, we ensure every detail is meticulously crafted to convey your message effectively and leave a lasting impression.",
    image: "/images/services/design.png",
    animate: {
      right: 20,
    },
    className: "sm:row-span-2 sm:mt-100 ml-auto sm:mr-8 sm:mt-[100px]",
  },
  {
    title: "Developer",
    description:
      "As developers, we transform ideas into reality, leveraging cutting-edge technologies to build robust and scalable solutions tailored to your specific needs. Our expertise spans across various platforms and frameworks, ensuring seamless performance and user satisfaction while adhering to industry best practices and standards.",
    image: "/images/services/developer.png",
    animate: {
      right: 330,
      top: 100,
    },
    className: "mr:auto sm:ml-auto sm:mr-[50px]",
  },
  {
    title: "UI/UX",
    description:
      "Our UI/UX services are dedicated to elevating user experiences, combining intuitive interfaces with engaging interactions to create seamless journeys that delight and retain your audience. Through meticulous research and testing, we ensure every design decision is guided by user needs and behaviors, resulting in a product that not only looks great but also delivers exceptional usability and satisfaction.",
    image: "/images/services/ui-ux.png",
    animate: {
      right: 50,
      top: 230,
    },
    className: "ml-auto sm:mr-[85px] sm:mt-10",
  },
];
