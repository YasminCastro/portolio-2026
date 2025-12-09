"use client";

import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import SectionTitle from "./SectionTitle";

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  iconColor: string;
}

const experiences: Experience[] = [
  {
    position: "Full Stack Developer",
    company: "SVA Tech",
    location: "Remote",
    period: "Nov 2022 - Present",
    responsibilities: [
      "Designed and maintained advanced interactive video analytics dashboards used by enterprise clients such as Vale Rio Doce and Rumo Logística, enhancing data accessibility and interactive responsiveness.",
      "Developed and deployed scalable APIs and backend services with Node.js, Express.js, and MongoDB, significantly improving overall data processing efficiency, reliability, and maintainability.",
      "Integrated AI-based video models that automated event detection and reporting processes, reducing manual review workload and accelerating client insights through real-time data analysis.",
      "Built responsive, cross-platform user interfaces using Angular, Ionic, and Three.js, enabling real-time 3D visualizations and improving user engagement across devices.",
    ],
    iconColor: "from-[#60A5FA] to-[#6EE7B7]",
  },
  {
    position: "Junior Software Developer",
    company: "Hyerdev",
    location: "Goiânia, GO",
    period: "Sep 2021 - Nov 2022",
    responsibilities: [
      "Developed and supported APIs and backend systems using Node.js, TypeScript, GraphQL, and PostgreSQL, applied to logistics and data management solutions. Contributed to the design of database schemas, authentication flows, and RESTful integrations.",
      "Created web automation and scraping tools with Puppeteer and Node.js scripts to collect, clean, and process data. Improved efficiency in repetitive workflows and reduced manual tasks through automation pipelines.",
      "Built and customized CMS platforms using Directus, improving content management flexibility and usability.",
      "Managed infrastructure and deployments with Docker and AWS services, including EC2, S3, and RDS, ensuring reliable, secure environments and streamlined delivery processes.",
    ],
    iconColor: "from-[#A78BFA] to-[#FCA5A5]",
  },
  //   {
  //     position: "Junior Web Developer",
  //     company: "WebCrafters LLC",
  //     location: "Boston, MA",
  //     period: "Jun 2016 - Apr 2018",
  //     responsibilities: [
  //       "Built responsive marketing websites and landing pages for various clients using HTML, CSS, and jQuery.",
  //       "Assisted senior developers in building and maintaining features for a large-scale e-commerce platform.",
  //     ],
  //     iconColor: "from-[#6EE7B7] to-[#60A5FA]",
  //   },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Experience"
          description="A timeline of my professional journey."
          className="mb-8 sm:mb-12 md:mb-16"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - mobile: left side, desktop: center */}
          <div className="md:hidden absolute left-2 sm:left-3 h-full w-0.5 bg-linear-to-b from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] opacity-30"></div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] opacity-30"></div>

          <div className="relative space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const nodeColors = [
                "bg-[#60A5FA] shadow-[#60A5FA]/50",
                "bg-[#A78BFA] shadow-[#A78BFA]/50",
                "bg-[#FCA5A5] shadow-[#FCA5A5]/50",
              ];

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven
                      ? "flex-row md:flex-row"
                      : "flex-row md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-[45%] pl-8 sm:pl-10 md:pl-0">
                    <Card className="bg-[#161B22] border-white/10 hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20">
                      <CardHeader className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br ${exp.iconColor} flex items-center justify-center shrink-0 shadow-lg`}
                          >
                            <span className="text-white font-bold text-base sm:text-lg">
                              {exp.company.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg sm:text-xl text-white mb-1">
                              {exp.position}
                            </CardTitle>
                            <CardDescription className="text-white/70 text-xs sm:text-sm mb-1">
                              {exp.company} · {exp.location}
                            </CardDescription>
                            <p className="text-white/50 text-xs">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-4 sm:p-6 pt-0">
                        <ul className="space-y-2 sm:space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-white/80 text-xs sm:text-sm leading-relaxed"
                            >
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6EE7B7] mt-0.5 sm:mt-1 shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline node - positioned differently on mobile vs desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 items-center justify-center z-10">
                    <div
                      className={`w-4 h-4 rounded-full ${nodeColors[index]} shadow-lg`}
                    ></div>
                  </div>

                  {/* Mobile timeline node */}
                  <div className="md:hidden absolute left-2 sm:left-3 transform -translate-x-1/2 w-3 h-3 flex items-center justify-center z-10">
                    <div
                      className={`w-3 h-3 rounded-full ${nodeColors[index]} shadow-lg`}
                    ></div>
                  </div>

                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
