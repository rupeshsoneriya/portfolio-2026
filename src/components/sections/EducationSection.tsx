"use client";

import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  School,
  Award,
} from "lucide-react";

export const EDUCATION_DATA = [
  {
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "2019 - 2023",
    grade: "B.E.",
    icon: GraduationCap,
  },
  {
    institution: "Madhya Pradesh State Board",
    degree: "Higher Secondary Education (Mathematics)",
    duration: "2018 - 2019",
    grade: "12th Grade",
    icon: School,
  },
  {
    institution: "Code Better",
    degree: "Certified Front-End Developer",
    duration: "2022",
    grade: "Certification",
    icon: Award,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
            Education & Certifications
          </h2>

          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            Academic background and professional certifications that support my
            expertise in software engineering and modern frontend development.
          </p>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {EDUCATION_DATA.map((edu, index) => (
            <AnimatedWrapper
              key={index}
              animationType="slide-up"
              delay={`delay-${index * 100}ms`}
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-border bg-card">
                <CardHeader className="flex flex-row items-start gap-4 pb-3">
                  <div className="flex-shrink-0 mt-1">
                    <edu.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <div>
                    <CardTitle className="text-lg font-semibold text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
                      {edu.institution}
                    </CardTitle>

                    <CardDescription className="text-sm mt-1">
                      {edu.degree}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-medium">
                      Duration
                    </span>

                    <Badge variant="outline">{edu.duration}</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-medium">
                      Qualification
                    </span>

                    <Badge variant="secondary">{edu.grade}</Badge>
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