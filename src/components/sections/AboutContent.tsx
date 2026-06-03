"use client";

import Image from 'next/image';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux Toolkit",
      "React Hooks",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "UI & Styling",
    skills: [
      "Material UI (MUI)",
      "Tailwind CSS",
      "Bootstrap",
      "Ant Design",
      "Responsive Web Design",
      "Cross-Browser Compatibility",
    ],
  },
  {
    category: "Application Architecture",
    skills: [
      "Component-Based Architecture",
      "State Management",
      "REST API Integration",
      "Performance Optimization",
      "Lazy Loading",
      "Code Splitting",
      "Reusable UI Components",
    ],
  },
  {
    category: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "Unit Testing",
      "Debugging",
      "Code Review",
      "Performance Monitoring",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Firebase",
      "Google Cloud Platform (GCP)",
      "OpenTelemetry",
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      "Agile Development",
      "Team Collaboration",
      "Problem Solving",
      "Technical Documentation",
      "Mentoring",
      "Stakeholder Communication",
    ],
  },
];

export function AboutContent() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
            About Me
          </h2>
          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            A glimpse into my journey, skills, and passion for frontend engineering.
          </p>
        </AnimatedWrapper>

        {/* Bio */}
        <div className="grid md:grid-cols-5 gap-6 md:gap-10 items-center mb-12 md:mb-16">
          <AnimatedWrapper animationType="slide-right" className="md:col-span-2">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-primary/20 group">
              <Image
                src="/Profile/profile-pic.png"
                alt="Rupesh Soneriya - Frontend Engineer"
                layout="fill"
                objectFit="cover"
                data-ai-hint="profile picture"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper animationType="slide-left" className="md:col-span-3">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
                My Journey &amp; Who I Am
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I&apos;m a{' '}
                <span className="font-semibold text-primary">Frontend Engineer</span>{' '}
                with <span className="font-semibold text-primary">3+ years of experience</span>{' '}
                building scalable, responsive, and high-performance web applications using{' '}
                <span className="font-semibold text-primary">React.js, TypeScript, Redux Toolkit,</span>{' '}
                and modern frontend technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I&apos;m experienced in developing{' '}
                <span className="font-semibold text-primary">reusable component architectures</span>,
                integrating <span className="font-semibold text-primary">REST APIs</span>,
                optimizing application performance, and delivering seamless user experiences
                across desktop and mobile platforms. I have worked across domains including{' '}
                <span className="font-semibold text-primary">e-commerce</span>,{' '}
                <span className="font-semibold text-primary">real estate</span>,{' '}
                <span className="font-semibold text-primary">admin dashboards</span>, and{' '}
                <span className="font-semibold text-primary">SaaS-based applications</span>.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Skilled in collaborating with cross-functional teams, implementing responsive
                UI systems, and building maintainable frontend solutions. I hold a{' '}
                <span className="font-semibold text-primary">Bachelor of Engineering in Computer Science</span>{' '}
                from RGPV University and a{' '}
                <span className="font-semibold text-primary">Certified Front-end Developer</span>{' '}
                certification from Code Better (2022).
              </p>

              {/* Quick Info */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-semibold text-primary">📍 Location:</span> Indore, India
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-semibold text-primary">📧 Email:</span> soneriyar@gmail.com
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-semibold text-primary">🎓 Degree:</span> B.E. in Computer Science
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="font-semibold text-primary">📱 Phone:</span> 9630321053
                </div>
              </div> */}
            </div>
          </AnimatedWrapper>
        </div>

        {/* Skills */}
        <AnimatedWrapper animationType="fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
            Technical Skills
          </h3>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILLS_DATA.map((group, index) => (
            <AnimatedWrapper
              key={group.category}
              animationType="slide-up"
              delay={`delay-${index * 50}ms`}
            >
              <Card className="h-full shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 group border-2 border-transparent bg-card">
                <CardHeader className="pb-2 sm:pb-3 pt-4 sm:pt-5">
                  <CardTitle className="text-md sm:text-lg font-semibold text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-4 sm:pb-5">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}