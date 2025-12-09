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
  {
    title: "Dairy Farm",
    description:
      "Dairy Farm is a web application developed to display and analyze dairy farming data in a clear and interactive way. I worked on building a responsive interface focused on usability and data visualization, creating reusable components and improving the user experience. The project was developed in collaboration with Professor Eduardo Noronha, a specialist in data analysis for the dairy sector.",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Data Visualization Components",
      "UX/UI Prototyping",
    ],
    image: "/projects/dairy-farm.png",
    category: "volunteer",
    categoryDescription:
      "Volunteer front-end development focused on data visualization and user interface design.",
  },
  {
    title: "Malucas Awards",
    description:
      "Maluca Awards is a personal project created in 2024 as a playful parody of the VMA. It was built as a voting platform for a group of friends, where users could log in, vote across different categories and choose the winners. At the end, we hosted a small event to reveal the results and celebrate together. It was a fun and interactive project that combined technology with entertainment.",
    technologies: ["React", "Next.js", "Typescript", "Tailwind CSS", "MongoDB"],
    image: "/projects/maluca-awards.png",
    category: "personal",
    link: "https://malucas-awards.vercel.app",
    categoryDescription:
      "Personal project focused on creating an interactive voting platform for entertainment.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Projects"
          description="Projects I've worked on:"
          className="mb-8 sm:mb-12 md:mb-16"
        />

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
