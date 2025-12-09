"use client";

import { ExternalLink, Briefcase, Heart, Building2 } from "lucide-react";
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
  category: "personal" | "volunteer" | "residency";
  categoryDescription?: string;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "personal":
      return <Briefcase className="w-5 h-5" />;
    case "volunteer":
      return <Heart className="w-5 h-5" />;
    case "residency":
      return <Building2 className="w-5 h-5" />;
    default:
      return <Briefcase className="w-5 h-5" />;
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
    default:
      return category;
  }
};

const getCategoryDescription = (category: string) => {
  switch (category) {
    case "personal":
      return "Personal projects developed on my own initiative to explore new technologies and build solutions.";
    case "volunteer":
      return "Volunteer projects developed for social causes and non-profit organizations.";
    case "residency":
      return "Projects developed during technical residency programs, working with real-world applications and teams.";
    default:
      return "";
  }
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-[#161B22] border-white/10 overflow-hidden hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative w-full h-64 lg:h-auto">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`w-12 h-12 rounded-full bg-linear-to-br ${getCategoryColor(
                      project.category
                    )} flex items-center justify-center shadow-lg shrink-0 cursor-help`}
                  >
                    <div className="text-white">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    {project.categoryDescription ||
                      getCategoryDescription(project.category)}
                  </p>
                </TooltipContent>
              </Tooltip>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {getCategoryLabel(project.category)}
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="bg-[#0D1117] border-white/10 text-white/70 hover:border-[#A78BFA]/50 px-3 py-1"
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
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors w-fit"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">View Project</span>
            </a>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
