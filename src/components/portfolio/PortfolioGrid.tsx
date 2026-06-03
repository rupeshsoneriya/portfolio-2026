"use client";

import { useState } from 'react';
import Link from 'next/link';
import { PortfolioCard } from './PortfolioCard';
import { ProjectPopup } from './ProjectPopup';
import { PROJECTS_DATA, type Project } from '@/lib/constants';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// IMPORTANT: Replace this with your actual Google Sheet URL
const ALL_PROJECTS_GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1HYMWXZLo3kNSGpLIPr5cQicrQ807uk7DZ3UbDOdboRw/edit?usp=sharing";

export function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    // Delay clearing project to allow for smoother exit animation of dialog
    setTimeout(() => setSelectedProject(null), 300);
  };

  const displayedProjects = PROJECTS_DATA.slice(0, 6);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <AnimatedWrapper
            key={project.id}
            animationType="slide-up"
            delay={`delay-${index * 100}ms`}
          >
            <PortfolioCard project={project} onViewProject={handleViewProject} />
          </AnimatedWrapper>
        ))}
      </div>
      {/* Button is now always displayed after the project grid */}
      <AnimatedWrapper animationType="fade-in" delay="delay-300ms" className="mt-16 text-center">
        
      </AnimatedWrapper>
      <ProjectPopup
        project={selectedProject}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
}
