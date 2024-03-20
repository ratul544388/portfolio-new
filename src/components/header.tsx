"use client";

import { Logo } from "./logo";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { MobileSheet } from "./mobile-sheet";
import { NavLinks } from "./navLinks";
import { SocialIcons } from "./social-icons";
import { ThemeToggler } from "./theme-toggler";

export const Header = () => {
  return (
    <header className="bg-background dark:bg-background/20 dark:border backdrop-blur-md py-4 sticky top-0 inset-x-0 z-50 shadow-sm">
      <MaxWidthWrapper className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <NavLinks className="hidden md:flex" />
        </div>
        <div className="flex items-center gap-6">
          <SocialIcons className="hidden md:flex" />
          <ThemeToggler />
          <MobileSheet />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
