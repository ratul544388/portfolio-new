"use client";

import { Logo } from "./logo";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { MobileSheet } from "./mobile-sheet";
import { NavLinks } from "./navLinks";
import { SocialIcons } from "./social-icons";
import { ThemeToggler } from "./theme-toggler";

export const Header = () => {
  return (
    <header className="fixed bg-background top-0 inset-x-0 border-b h-[60px] z-50">
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
