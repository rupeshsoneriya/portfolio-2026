
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile'; // Import the hook

type AnimationType = "fade-in" | "slide-up" | "slide-left" | "slide-right";

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: string; 
  once?: boolean; 
  threshold?: number; 
}

export function AnimatedWrapper({
  children,
  className,
  animationType = "fade-in",
  delay,
  once = true,
  threshold = 0.1,
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile(); // Use the hook

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once, threshold]);

  // Determine the effective animation type based on device
  let effectiveAnimationType = animationType;
  if (isMobile && (animationType === "slide-left" || animationType === "slide-right")) {
    effectiveAnimationType = "slide-up";
  }

  const animationClassMap: Record<AnimationType, string> = {
    "fade-in": "scroll-animate-fade-in",
    "slide-up": "scroll-animate-slide-up",
    "slide-left": "scroll-animate-slide-left",
    "slide-right": "scroll-animate-slide-right",
  };

  const currentAnimationClass = animationClassMap[effectiveAnimationType];

  return (
    <div
      ref={ref}
      className={cn(
        currentAnimationClass,
        { 'is-visible': isVisible },
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
