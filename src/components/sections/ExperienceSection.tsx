"use client";

import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EXPERIENCE_DATA = [
  {
    company: "Bridge Fix Technology Pvt. Ltd.",
    role: "Software Developer",
    duration: "Nov 2024 - Present",
    locationType: "Full Time",
    techStack: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "Redux Toolkit",
    ],
    description: [
      "Leading frontend development for a Dental Practice Management System.",
      "Designed scalable component-based architecture for appointments and patient management workflows.",
      "Integrated secure REST APIs and optimized client-server communication.",
      "Improved performance through lazy loading, code splitting, and state optimization.",
      "Developed reusable UI modules and responsive interfaces.",
      "Participated in feature planning, code reviews, debugging, and deployment processes.",
      "Mentored junior developers and promoted frontend best practices.",
    ],
  },

  {
    company: "Elicit Digital",
    role: "Associate Software Engineer",
    duration: "Aug 2023 - May 2024",
    locationType: "Full Time",
    techStack: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
    ],
    description: [
      "Developed scalable web applications using React.js and TypeScript.",
      "Built reusable UI components and optimized frontend architecture.",
      "Integrated REST APIs and implemented dynamic data rendering.",
      "Improved SEO, accessibility, and cross-browser compatibility.",
      "Delivered enterprise projects including e-commerce and real estate platforms.",
    ],
  },

  {
    company: "India Vibe InfoTech Pvt. Ltd.",
    role: "Frontend Developer Intern",
    duration: "Apr 2023 - Jul 2023",
    locationType: "Internship",
    techStack: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
    description: [
      "Developed responsive web interfaces using React.js and Bootstrap.",
      "Assisted in building reusable components and modern UI features.",
      "Worked on API integrations and frontend performance optimization.",
      "Collaborated with senior developers to improve user experience.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
            Professional Experience
          </h2>

          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            3+ years of experience building scalable web applications,
            enterprise dashboards, SaaS platforms, and modern frontend
            solutions using React.js, Next.js, and TypeScript.
          </p>
        </AnimatedWrapper>

        <div className="relative space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <AnimatedWrapper
              key={index}
              animationType="slide-up"
              delay={`delay-${index * 100}ms`}
            >
              <Card className="overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {exp.role}
                      </h3>

                      <p className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </p>

                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.locationType}
                      </p>
                    </div>

                    <Badge
                      variant="outline"
                      className="w-fit text-sm px-3 py-1"
                    >
                      {exp.duration}
                    </Badge>
                  </div>

                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.description.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 items-start"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}