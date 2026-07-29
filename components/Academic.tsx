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
      "Bachelor’s Degree in Information Systems with focus on software development, databases and web technologies, with hands-on experience through academic projects.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    type: "certification",
    title: "Google AI Professional Certificate",
    institution: "Google",
    period: "2026",
    description:
      "Professional certification covering AI fundamentals and applied tools from Google.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    type: "certification",
    title: "Cloud Foundations",
    institution: "Amazon Web Services Training and Certification",
    period: "2022",
    description:
      "Introductory cloud computing course covering core AWS services, global infrastructure, pricing models and basic architecture best practices.",
    icon: <Award className="w-6 h-6" />,
  },

  {
    type: "exchange",
    title: "Goiás Without Borders",
    institution: "New Jersey City University",
    period: "2017",
    description:
      "One-month exchange program from the state of Goiás, Brazil, offering academic and international experience, where I studied English.",
    icon: <Globe className="w-6 h-6" />,
  },
];

const getIconColor = (type: string) => {
  switch (type) {
    case "graduation":
      return "from-[#60A5FA] to-[#6EE7B7]";
    case "exchange":
      return "from-[#6EE7B7] to-[#60A5FA]";
    case "certification":
      return "from-[#A78BFA] to-[#FCA5A5]";
    default:
      return "from-[#A78BFA] to-[#60A5FA]";
  }
};

export default function Academic() {
  return (
    <section
      id="academic"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title="Academic"
          description="My educational background and certifications:"
          className="mb-8 sm:mb-12 md:mb-16"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {academicItems.map((item, index) => (
            <Card
              key={index}
              className="bg-[#161B22] border-white/10 hover:border-[#A78BFA]/50 transition-all hover:shadow-lg hover:shadow-[#A78BFA]/20"
            >
              <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center">
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-linear-to-br ${getIconColor(
                    item.type,
                  )} flex items-center justify-center mb-2 sm:mb-3 shadow-lg`}
                >
                  <div className="text-white flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>

                <p className="text-white/70 text-[10px] sm:text-xs mb-1">
                  {item.institution}
                </p>

                <p className="text-white/50 text-[10px] mb-2">{item.period}</p>

                <p className="text-white/80 text-[10px] sm:text-xs leading-relaxed">
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
