"use client";

import { useState, useEffect } from "react";
import ContactAnimation from "./ContactAnimation";
import { models3D, Model3DConfig } from "@/lib/models3d";
import { ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DownloadCVButton from "./DownloadCVButton";

export default function Contact() {
  const [currentModelIndex, setCurrentModelIndex] = useState(() =>
    Math.floor(Math.random() * models3D.length)
  );
  const [modelConfig, setModelConfig] = useState<Model3DConfig | null>(null);

  useEffect(() => {
    setModelConfig(models3D[currentModelIndex]);
  }, [currentModelIndex]);

  const handleNextModel = () => {
    setCurrentModelIndex((prev) => (prev + 1) % models3D.length);
  };

  if (!modelConfig) {
    return null;
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Interested in working together?
            </h2>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <DownloadCVButton className="text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3" />

              <a
                href="mailto:yasminsdcastro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0D1117] flex items-center justify-center text-white hover:bg-linear-to-r hover:from-[#A78BFA] hover:via-[#60A5FA] hover:to-[#FCA5A5] transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yasmin-sdcastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0D1117] flex items-center justify-center text-white hover:bg-linear-to-r hover:from-[#A78BFA] hover:via-[#60A5FA] hover:to-[#FCA5A5] transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/YasminCastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0D1117] flex items-center justify-center text-white hover:bg-linear-to-r hover:from-[#A78BFA] hover:via-[#60A5FA] hover:to-[#FCA5A5] transition-all duration-300"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] rounded-xl overflow-hidden bg-[#161B22] border border-white/10">
            <ContactAnimation config={modelConfig} />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
              <button
                onClick={handleNextModel}
                className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/20 hover:border-white/30 shadow-lg flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex justify-center">
              <p className="text-white/50 text-[10px] sm:text-xs text-center">
                3D Model by{" "}
                <a
                  href={modelConfig.creditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors underline"
                >
                  {modelConfig.credit}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
