import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground py-4 xl:py-12 md:py-4">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          {SOCIAL_LINKS.map((item) => (
            <Button key={item.name} variant="ghost" size="icon" asChild className="text-secondary-foreground/70 group">
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                {item.icon && <item.icon className="h-6 w-6" />}
                <span className="sr-only">{item.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Rupesh Soneriya. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Designed and Developed with ❤️
        </p>
      </div>
    </footer>
  );
}
