"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Avatar3D from "./Avatar3D";
import SocialButton from "./SocialButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 pb-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Avatar 3D - Lado Esquerdo */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-80 lg:w-md lg:h-112 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#161B22]">
              <Avatar3D />
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
              <SocialButton
                href="https://www.linkedin.com/in/yasmin-sdcastro"
                icon={<FaLinkedin className="w-6 h-6" />}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialButton
                href="https://github.com/YasminCastro"
                icon={<FaGithub className="w-6 h-6" />}
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialButton
                href="mailto:yasminsdcastro@gmail.com"
                icon={<FaEnvelope className="w-6 h-6" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
