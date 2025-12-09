"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiStyledcomponents,
  SiPuppeteer,
  SiDocker,
  SiAmazon,
  SiGit,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "Javascript",
    icon: <SiJavascript className="w-full h-full text-[#F7DF1E]" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="w-full h-full text-[#3178C6]" />,
  },
  {
    name: "React & React Native",
    icon: <SiReact className="w-full h-full text-[#61DAFB]" />,
  },
  { name: "Angular", icon: <SiAngular className="w-full h-full text-[#DD0031]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-full h-full text-white" /> },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss className="w-full h-full text-[#06B6D4]" />,
  },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents className="w-full h-full text-[#DB7093]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-full h-full text-[#339933]" />,
  },
  { name: "Express.js", icon: <SiExpress className="w-full h-full text-white" /> },
  { name: "Nest.js", icon: <SiNestjs className="w-full h-full text-[#E0234E]" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-full h-full text-[#4169E1]" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="w-full h-full text-[#47A248]" /> },
  {
    name: "Puppeteer",
    icon: <SiPuppeteer className="w-full h-full text-[#40B5A4]" />,
  },
  { name: "Docker", icon: <SiDocker className="w-full h-full text-[#2496ED]" /> },
  { name: "AWS", icon: <SiAmazon className="w-full h-full text-[#FF9900]" /> },
  { name: "Git", icon: <SiGit className="w-full h-full text-[#F05032]" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Skills"
          description="The skills, tools and technologies I have experience with:"
        />

        <div className="w-full max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 p-3 sm:p-4 md:p-6 rounded-xl bg-[#161B22] border border-white/10 hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20 group cursor-pointer"
            >
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                  {skill.icon}
                </div>
              </div>
              <p
                className={`text-white/90 font-medium text-center group-hover:text-white transition-colors ${
                  skill.name.length > 15
                    ? "text-[9px] sm:text-[10px] md:text-xs"
                    : "text-[10px] sm:text-xs md:text-sm"
                }`}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
