"use client";

import { GraduationCap, Globe, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

interface AcademicItem {
  type: "graduation" | "exchange" | "certification";
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const academicItems: AcademicItem[] = [
  {
    type: "graduation",
    title: "Information Systems",
    institution: "Instituto Federal de Goiás",
    period: "2020 - 2024",
    description:
      "Bachelor’s Degree in Information Systems with focus on software engineering and web development.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    type: "exchange",
    title: "Study Abroad Program",
    institution: "International University",
    period: "2017",
    description:
      "One year exchange program focusing on advanced web technologies and international collaboration.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    type: "certification",
    title: "Full Stack Web Development",
    institution: "Certification Provider",
    period: "2023",
    description:
      "Certified in Full Stack Web Development covering React, Node.js, and modern development practices.",
    icon: <Award className="w-6 h-6" />,
  },
];

const getIconColor = (type: string) => {
  switch (type) {
    case "graduation":
      return "from-[#60A5FA] to-[#6EE7B7]";
    case "exchange":
      return "from-[#A78BFA] to-[#FCA5A5]";
    case "certification":
      return "from-[#6EE7B7] to-[#60A5FA]";
    default:
      return "from-[#A78BFA] to-[#60A5FA]";
  }
};

export default function Academic() {
  return (
    <section
      id="academic"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Academic"
          description="My educational background and certifications:"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academicItems.map((item, index) => (
            <Card
              key={index}
              className="bg-[#161B22] border-white/10 hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-linear-to-br ${getIconColor(
                    item.type
                  )} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm mb-2">{item.institution}</p>

                <p className="text-white/50 text-xs mb-4">{item.period}</p>

                <p className="text-white/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
