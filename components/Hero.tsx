"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 pb-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto - Lado Esquerdo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#161B22]">
              <Image
                src="/profile.jpg"
                alt="Yasmin"
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  // Fallback caso a imagem não exista
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.style.backgroundColor = "#161B22";
                  }
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0D1117]/50 to-transparent"></div>
            </div>
          </div>

          {/* Texto - Lado Direito */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm Yasmin Castro
              </h1>
            </div>

            {/* Texto de Apresentação */}
            <div className="space-y-4 text-white/90 text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for several years, I still love it as if it was something new.
              </p>
            </div>

            {/* Botões de Redes Sociais */}
            <div className="pt-4 flex gap-4">
              <a
                href="https://www.linkedin.com/in/yasmin-sdcastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/YasminCastro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
