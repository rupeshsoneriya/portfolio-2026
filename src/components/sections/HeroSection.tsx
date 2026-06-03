"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { SOCIAL_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = [
    "Frontend Engineer",
    "React.js Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "UI Engineer",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [titles.length]);

  return (
    <section
      id="home"
      className="flex flex-col justify-start items-center
                 bg-gradient-to-br from-background via-secondary to-background
                 dark:from-background dark:via-secondary/30 dark:to-background
                 pt-4 sm:pt-6 md:pt-10
                 pb-32 sm:pb-40 md:pb-48 lg:pb-64"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <AnimatedWrapper
            animationType="slide-right"
            className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 space-y-3 md:space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I&apos;m{' '}
              <span className="text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
                Rupesh Soneriya
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
              <span key={titles[currentTitleIndex]} className="animate-fadeInText">
                {titles[currentTitleIndex]}
              </span>
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto md:mx-0">
              Frontend Engineer with 3+ years of experience building scalable, responsive
              web applications using React.js, TypeScript, Redux Toolkit, and Next.js.
              Passionate about clean component architecture, performance optimization,
              and delivering seamless user experiences across desktop and mobile platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start pt-2">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="/#portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="/#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex gap-1 sm:gap-2 justify-center md:justify-start pt-1">
              {SOCIAL_LINKS.map((item) => (
                <Button key={item.name} variant="ghost" size="icon" asChild className="text-muted-foreground group hover:text-accent">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.icon && <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper
            animationType="slide-left"
            className="flex justify-center order-1 md:order-2 my-0"
          >
            <div className="relative w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/30 group">
              <Image
                src="/Profile/profile-pic.png"
                alt="Rupesh Soneriya - Frontend Engineer"
                layout="fill"
                objectFit="cover"
                priority
                data-ai-hint="profile picture"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper animationType="fade-in" delay="delay-500ms" className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
          <Link href="/#about" aria-label="Scroll to about section">
            <ArrowDown className="h-7 w-7 text-muted-foreground animate-bounce hover:text-accent transition-colors" />
          </Link>
        </AnimatedWrapper>
      </div>
    </section>
  );
}