"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import DownloadCVButton from "./DownloadCVButton";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0D1117] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">
              Copyright © 2026 Yas Castro.
            </span>
          </div>

          <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-[#161B22] border border-white/10">
            <a
              href="https://www.linkedin.com/in/yasmin-sdcastro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0D1117] flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/YasminCastro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0D1117] flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="mailto:yasminsdcastro@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0D1117] flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <DownloadCVButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
