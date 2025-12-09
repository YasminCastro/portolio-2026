"use client";

import {
  ExternalLink,
  Briefcase,
  Heart,
  Building2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  category: "personal" | "volunteer" | "residency" | "freelancer";
  categoryDescription?: string;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "personal":
      return <Sparkles className="w-5 h-5" />;
    case "volunteer":
      return <Heart className="w-5 h-5" />;
    case "residency":
      return <Building2 className="w-5 h-5" />;
    case "freelancer":
      return <Briefcase className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "personal":
      return "from-[#60A5FA] to-[#6EE7B7]";
    case "volunteer":
      return "from-[#A78BFA] to-[#FCA5A5]";
    case "residency":
      return "from-[#6EE7B7] to-[#60A5FA]";
    case "freelancer":
      return "from-[#FCA5A5] to-[#A78BFA]";
    default:
      return "from-[#A78BFA] to-[#60A5FA]";
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case "personal":
      return "Personal";
    case "volunteer":
      return "Volunteer";
    case "residency":
      return "Residency";
    case "freelancer":
      return "Freelancer";
    default:
      return category;
  }
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-[#161B22] border-white/10 overflow-hidden hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-auto">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              {project.categoryDescription ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br ${getCategoryColor(
                        project.category
                      )} flex items-center justify-center shadow-lg shrink-0 cursor-help`}
                    >
                      <div className="text-white">
                        <div className="w-4 h-4 sm:w-5 sm:h-5">
                          {getCategoryIcon(project.category)}
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-xs sm:text-sm">{project.categoryDescription}</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br ${getCategoryColor(
                    project.category
                  )} flex items-center justify-center shadow-lg shrink-0`}
                >
                  <div className="text-white">
                    <div className="w-4 h-4 sm:w-5 sm:h-5">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {getCategoryLabel(project.category)}
                </p>
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="bg-[#0D1117] border-white/10 text-white/70 hover:border-[#A78BFA]/50 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors w-fit text-xs sm:text-sm"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>View Project</span>
            </a>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
