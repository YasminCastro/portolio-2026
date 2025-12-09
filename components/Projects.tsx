"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  category: "personal" | "volunteer" | "residency";
}

const projects: Project[] = [
  {
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    image: "/project-placeholder.jpg",
    link: "https://example.com",
    category: "personal",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwindcss"],
    image: "/project-placeholder.jpg",
    link: "https://example.com",
    category: "volunteer",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technologies: ["Angular", "Express.js", "PostgreSQL", "Docker"],
    image: "/project-placeholder.jpg",
    link: "https://example.com",
    category: "residency",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Projects"
          description="Some of the noteworthy projects I have built:"
          className="mb-16"
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#161B22] border-white/10 overflow-hidden hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative w-full h-64 lg:h-auto bg-linear-to-br from-white to-[#A78BFA] p-8 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="text-center space-y-2">
                        <p className="text-gray-800 font-semibold text-sm">
                          {project.title}
                        </p>
                        <p className="text-gray-600 text-xs">
                          Project Screenshot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-[#0D1117] border border-white/10 text-white/70 text-xs font-medium hover:border-[#A78BFA]/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors w-fit"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Project</span>
                  </a>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
