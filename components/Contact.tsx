"use client";

import { useState, useEffect } from "react";
import ContactAnimation from "./ContactAnimation";
import { getRandomModel, Model3DConfig } from "@/lib/models3d";

export default function Contact() {
  const [modelConfig, setModelConfig] = useState<Model3DConfig | null>(null);

  useEffect(() => {
    // Escolhe um modelo aleatório quando o componente monta
    setModelConfig(getRandomModel());
  }, []);

  if (!modelConfig) {
    return null; // ou um loading state
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
