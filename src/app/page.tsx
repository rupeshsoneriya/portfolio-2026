
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutContent } from '@/components/sections/AboutContent';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import type { Metadata } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Uses its own background logic */}
      <HeroSection />

      {/* About Section - light mode: subtle gradient, dark mode: as before */}
      <div className="bg-gradient-to-br from-secondary via-background to-background dark:from-secondary/30 dark:via-background dark:to-background">
        <AboutContent />
      </div>

      {/* Education Section - light mode: plain bg, dark mode: as before */}
      <div className="bg-background">
        <EducationSection />
      </div>
      
      {/* Experience Section - light mode: subtle gradient, dark mode: as before */}
      <div className="bg-gradient-to-br from-secondary via-background to-background dark:from-secondary/30 dark:via-background dark:to-background">
        <ExperienceSection />
      </div>

      {/* Portfolio Section - light mode: plain bg, dark mode: as before */}
      <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedWrapper animationType="fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">My Portfolio</h2>
            <p className="text-md sm:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              Here are some of the projects I&apos;ve worked on. Click on any project to see more details.
            </p>
          </AnimatedWrapper>
          <PortfolioGrid />
        </div>
      </section>

      {/* Contact Section - light mode: subtle gradient, dark mode: as before */}
      <div className="bg-gradient-to-br from-secondary via-background to-background dark:from-secondary/30 dark:via-background dark:to-background">
        <ContactInfo />
      </div>
    </>
  );
}
