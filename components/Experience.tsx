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
    position: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "Jan 2021 - Present",
    responsibilities: [
      "Led development of a microservices architecture, improving system scalability by 40%.",
      "Mentored junior developers and conducted code reviews to maintain high-quality standards.",
      "Engineered and maintained CI/CD pipelines, reducing deployment times by 25%.",
    ],
    iconColor: "from-[#60A5FA] to-[#6EE7B7]",
  },
  {
    position: "Full Stack Developer",
    company: "Innovate Corp.",
    location: "San Francisco, CA",
    period: "May 2018 - Dec 2020",
    responsibilities: [
      "Developed and launched a new customer-facing analytics dashboard using React and D3.js.",
      "Collaborated with product teams to translate requirements into technical solutions.",
      "Optimized database queries, which decreased average API response time by 150ms.",
    ],
    iconColor: "from-[#A78BFA] to-[#FCA5A5]",
  },
  {
    position: "Junior Web Developer",
    company: "WebCrafters LLC",
    location: "Boston, MA",
    period: "Jun 2016 - Apr 2018",
    responsibilities: [
      "Built responsive marketing websites and landing pages for various clients using HTML, CSS, and jQuery.",
      "Assisted senior developers in building and maintaining features for a large-scale e-commerce platform.",
    ],
    iconColor: "from-[#6EE7B7] to-[#60A5FA]",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Experience"
          description="A timeline of my professional journey and contributions."
          className="mb-16"
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] opacity-30"></div>

          <div className="relative space-y-12">
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
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="bg-[#161B22] border-white/10 hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-linear-to-br ${exp.iconColor} flex items-center justify-center shrink-0 shadow-lg`}
                          >
                            <span className="text-white font-bold text-lg">
                              {exp.company.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-white mb-1">
                              {exp.position}
                            </CardTitle>
                            <CardDescription className="text-white/70 text-sm mb-1">
                              {exp.company} · {exp.location}
                            </CardDescription>
                            <p className="text-white/50 text-xs">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-white/80 text-sm"
                            >
                              <Check className="w-4 h-4 text-[#6EE7B7] mt-0.5 shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 flex items-center justify-center z-10">
                    <div
                      className={`w-4 h-4 rounded-full ${nodeColors[index]} shadow-lg`}
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
