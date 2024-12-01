import { GNB } from '@/components/gnb';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen">
      <div className="fixed z-10 h-[80px] w-full">
        <div className="mx-auto flex h-full w-full max-w-[1220px] flex-row items-center gap-4">
          <Image
            className="dark:invert"
            src="/images/logo-mymatchday.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <GNB />
        </div>
      </div>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="hero-section">
              <Image
                className="absolute left-0 top-0 -z-10 h-[900px] w-full dark:invert"
                src="/images/hero-03.jpg"
                alt="Next.js logo"
                width={1000}
                height={668}
                layout="responsive"
                priority
              />
              <div className="title-container gap mx-[auto] mt-[200px] flex w-full max-w-[1220px] flex-col justify-items-center">
                <div className="title-wrapper">
                  <div className="sub-title text-[13px] font-semibold text-[#8a8f6a]">
                    MAKE YOUR OWN DAY
                  </div>
                  <div className="title text-[70px] font-bold text-[#323232]">
                    Match MY DAY
                  </div>
                </div>
                <div className="des text-[14px] text-[#848B8a]">
                  Tailored to Your Taste – Let Our AI Curate the Perfect Wedding
                  Experience.
                </div>
                <Button className="mt-[35px]">FIND MY TASTE</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="hero-section">
              <Image
                className="absolute left-0 top-0 -z-10 h-[900px] w-full dark:invert"
                src="/images/hero-02.jpg"
                alt="Next.js logo"
                width={1000}
                height={668}
                layout="responsive"
                priority
              />
              <div className="title-container gap mx-[auto] mt-[200px] flex w-full max-w-[1220px] flex-col justify-items-center">
                <div className="title-wrapper">
                  <div className="sub-title text-[13px] font-semibold text-[#8a8f6a]">
                    MAKE YOUR OWN DAY
                  </div>
                  <div className="title text-[70px] font-bold text-[#323232]">
                    Match MY DAY
                  </div>
                </div>
                <div className="des text-[14px] text-[#848B8a]">
                  Tailored to Your Taste – Let Our AI Curate the Perfect Wedding
                  Experience.
                </div>
                <Button className="mt-[35px]">FIND MY TASTE</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="hero-section">
              <Image
                className="absolute left-0 top-0 -z-10 h-[900px] w-full dark:invert"
                src="/images/hero-01.jpg"
                alt="Next.js logo"
                width={1000}
                height={668}
                layout="responsive"
                priority
              />
              <div className="title-container gap mx-[auto] mt-[200px] flex w-full max-w-[1220px] flex-col justify-items-center">
                <div className="title-wrapper">
                  <div className="sub-title text-[13px] font-semibold text-[#8a8f6a]">
                    MAKE YOUR OWN DAY
                  </div>
                  <div className="title text-[70px] font-bold text-[#323232]">
                    Match MY DAY
                  </div>
                </div>
                <div className="des text-[14px] text-[#848B8a]">
                  Tailored to Your Taste – Let Our AI Curate the Perfect Wedding
                  Experience.
                </div>
                <Button className="mt-[35px]">FIND MY TASTE</Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
