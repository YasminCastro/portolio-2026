"use client";

import SectionTitle from "./SectionTitle";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Mamãe Pingo",
    description:
      "Mamãe Pingo is a mobile application designed for parents and caregivers of children aged 0 to 5, offering personalized scientific information, developmental milestone tracking, community features and an immunization calendar. During my participation in the TIC Residency program, I contributed to both the technical and organizational sides of the project. I helped develop new mobile features, integrated APIs, modeled data structures and collaborated on UX/UI prototypes. I also supported project management using Scrum, organizing sprints, defining priorities and improving the team’s workflow.",
    technologies: [
      "React Native",
      "Laravel",
      "Typescript",
      "RESTful APIs",
      "Scrum",
      "UX/UI Prototyping",
      "Data Modeling",
      "Documentation",
    ],
    image: "/projects/mamae-pingo.png",
    link: "https://www.mamaepingo.com.br",
    category: "residency",
    categoryDescription:
      "The TIC Residency is a hands-on training program by UFG and BRISA where developers learn through real projects. It combines technical learning with practical experience, working in teams to build real solutions for partner companies and organizations.",
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
          description="Projects I’ve worked on:"
          className="mb-16"
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
