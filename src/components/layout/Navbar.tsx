
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, CodeXml } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ThemeToggleButton } from './ThemeToggleButton';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span className="text-2xl font-bold tracking-tight text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
            Rupesh S.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.name}
              variant="ghost" 
              asChild
              className={cn(
                "text-foreground/70 hover:text-accent",
                pathname === item.href && "text-primary font-semibold bg-primary/10"
              )}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
          <ThemeToggleButton className="ml-2" />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-6"> 
                <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsOpen(false)}>
                  <span className="text-xl font-bold text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">
                    Abhishek G.
                  </span>
                </Link>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    asChild
                    className={cn(
                      "justify-start text-lg py-3 hover:text-accent",
                      pathname === item.href ? "text-primary font-semibold bg-primary/10" : "text-foreground/80"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
