"use client";

import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SocialButton from "./SocialButton";
import BlurText from './ui/BlurText';
import Spinner from "./Spinner";

const Avatar3D = dynamic(() => import("./Avatar3D"), {
  ssr: false,
  loading: () => <Spinner />,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center sm:pt-16 md:pt-20 px-4 sm:px-6 pb-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Avatar */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-72 h-80 sm:w-80 sm:h-88 md:w-96 md:h-96 lg:w-md lg:h-112 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#161B22]">
              <Avatar3D />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <BlurText
                as="h1"
                text="Hi, I'm Yasmin Castro"
                delay={200}
                animateBy="words"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight justify-center lg:justify-start"
                direction="top"
              />
            </div>

            <div className="space-y-3 sm:space-y-4 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                I'm a Full-Stack Developer working with React, Node.js and
                TypeScript, creating fast, scalable and intuitive digital
                experiences. I've been building web and mobile applications
                since 2021, turning complex data into clean and usable
                interfaces while constantly exploring new technologies to
                improve my craft.
              </p>
            </div>

            <div className="pt-2 sm:pt-4 flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <SocialButton
                href="https://www.linkedin.com/in/yasmin-sdcastro"
                icon={<FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />}
                label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialButton
                href="https://github.com/YasminCastro"
                icon={<FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />}
                label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialButton
                href="mailto:yasminsdcastro@gmail.com"
                icon={<FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />}
                label="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
