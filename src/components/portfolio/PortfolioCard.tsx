
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import type { Project } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

interface PortfolioCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

export function PortfolioCard({ project, onViewProject }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint}
            className="object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl mb-2 text-primary dark:bg-gradient-to-r dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:text-transparent dark:bg-clip-text">{project.name}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((techItem) => (
            <Badge key={techItem} variant="secondary">{techItem}</Badge>
          ))}
        </div>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 border-t">
        <Button onClick={() => onViewProject(project)} className="w-full">
          <Eye className="mr-2 h-4 w-4" /> View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
