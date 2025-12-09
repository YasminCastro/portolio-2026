"use client";

import { useState, useEffect } from "react";
import ContactAnimation from "./ContactAnimation";
import { models3D, Model3DConfig } from "@/lib/models3d";
import { ChevronRight } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Have idea about project?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Write anything here something about yourself to showcase what
              actually you doing or targeting etc.
            </p>
            <a
              href="mailto:yasminsdcastro@gmail.com"
              className="inline-block px-8 py-3 rounded-lg bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20 border border-[#A78BFA]/30"
            >
              Send me an email
            </a>
          </div>

          <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden bg-[#161B22] border border-white/10">
            <ContactAnimation config={modelConfig} />
            <div className="absolute top-4 right-4">
              <button
                onClick={handleNextModel}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm border border-white/20 hover:border-white/30 shadow-lg flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <p className="text-white/50 text-xs text-center">
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
