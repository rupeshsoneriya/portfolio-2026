
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code } from 'lucide-react';
import type { Project } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

interface ProjectPopupProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectPopup({ project, isOpen, onClose }: ProjectPopupProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-0 shadow-2xl overflow-y-auto max-h-[85vh]">
        <div className="relative w-full aspect-video">
           <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={project.imageHint}
            className='object-top'
          />
        </div>
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-3xl font-bold text-primary dark:text-primary">{project.name}</DialogTitle>
        </DialogHeader>
        <div className="px-6 space-y-4"> {/* Removed max-h and overflow-y-auto from here */}
          <div className="flex flex-wrap gap-2 my-2">
            {project.tech.map((techItem) => (
              <Badge key={techItem} variant="outline" className="flex items-center gap-1">
                <Code className="h-3 w-3" /> {techItem}
              </Badge>
            ))}
          </div>
          <DialogDescription className="text-base text-muted-foreground leading-relaxed">
            {project.description}
          </DialogDescription>
        </div>
        <DialogFooter className="p-6 border-t bg-secondary/50 sticky bottom-0"> {/* Added sticky bottom-0 to keep footer visible during scroll if desired, can be removed if not */}
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live View
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
