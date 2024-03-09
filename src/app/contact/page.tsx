import { ContactForm } from "@/components/contact-form";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { myAddress, myEmail, myPhone } from "@/config";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { IoHomeOutline, IoMailOutline } from "react-icons/io5";

import ImageLight from "@/../public/images/contact/illustration-light.svg";
import ImageDark from "@/../public/images/contact/illustration-dark.svg";

const ContactPage = () => {
  return (
    <MaxWidthWrapper className="h-full grid items-center gap-x-8 gap-y-16 md:grid-cols-2">
      <div className="space-y-2 max-w-[350px] md:mx-auto">
        <div className="flex items-center flex-wrap gap-1">
          <span className="h-[2px] bg-primary w-6" />
          <p>Say Hello</p>
          <span>👋</span>
        </div>
        <h1 className="font-bold text-6xl ">
          Let&apos;s <span className="text-primary">Work</span> Together
          <span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          facere!
        </p>
      </div>
      <div className="relative order-first md:order-[initial] max-w-[350px] sm:max-w-max mx-auto">
        <Image
          src={ImageLight}
          alt="Illustration"
          width={500}
          height={500}
          className="dark:hidden mx-auto"
          // placeholder="blur"
        />
        <Image
          src={ImageDark}
          alt="Illustration"
          width={500}
          height={500}
          className="hidden dark:block mx-auto"
          // placeholder="blur"
        />
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <IoMailOutline className="h-5 w-5 text-primary" />
          {myEmail}
        </div>
        <div className="flex items-center gap-3">
          <IoHomeOutline className="h-5 w-5 text-primary" />
          {myAddress}
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="h-5 w-5 text-primary" />
          {myPhone}
        </div>
      </div>
      <ContactForm />
    </MaxWidthWrapper>
  );
};

export default ContactPage;
