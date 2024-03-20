"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback, useState } from "react";

import { ReactNode } from "react";
import { Carousel, CarouselContent } from "./ui/carousel";

interface AutoScrollCarouselProps {
  children: ReactNode;
}

export const AutoScrollCarousel = ({ children }: AutoScrollCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();

  const onMouseLeave = useCallback(() => {
    const autoScroll = api?.plugins().autoScroll;
    if (autoScroll && typeof autoScroll.play === "function") {
      autoScroll.play();
    }
  }, [api]);

  return (
    <Carousel
      plugins={[
        AutoScroll({ startDelay: 100, speed: 1 }),
      ]}
      opts={{ loop: true }}
      className="w-full"
      setApi={setApi}
    >
      <CarouselContent
        onMouseLeave={onMouseLeave}
        onTouchEnd={onMouseLeave}
        className="w-full py-5"
      >
        {children}
      </CarouselContent>
    </Carousel>
  );
};
