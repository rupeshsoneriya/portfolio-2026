"use client";

import Link from "next/link";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ContactInfo() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper animationType="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
            Let's Build Something Great Together
          </h2>

          <p className="text-md sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            I'm actively looking for Frontend Developer, React.js Developer,
            Next.js Developer, and Software Engineer opportunities. Feel free
            to contact me regarding jobs, freelance projects, or
            collaborations.
          </p>
        </AnimatedWrapper>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Contact Details */}
          <AnimatedWrapper animationType="slide-right">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">{item.label}</h4>

                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-muted-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </AnimatedWrapper>

          {/* Social Links */}
          <AnimatedWrapper animationType="slide-left">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
                  Professional Profiles
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-5">
                  Connect with me and explore my professional work and
                  experience.
                </p>

                <div className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map((item) => (
                    <Button
                      key={item.name}
                      variant="outline"
                      asChild
                      className="justify-start"
                    >
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        {item.icon && (
                          <item.icon className="h-5 w-5" />
                        )}
                        <span>{item.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}