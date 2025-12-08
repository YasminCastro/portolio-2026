"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function Header() {
  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-10 h-10 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] flex items-center justify-center shadow-lg shadow-[#A78BFA]/20">
            <span className="text-white font-bold text-xl">Y</span>
          </div>
        </Link>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#FCA5A5] via-[#60A5FA] to-[#A78BFA] opacity-30"></div>
          <div className="absolute inset-px rounded-full bg-[#161B22]"></div>

          <Menubar className="relative bg-transparent border-0 shadow-none rounded-full px-1 py-2 h-auto z-10 gap-1">
            <MenubarMenu>
              <MenubarTrigger
                onClick={() => handleNavigation("#home")}
                className="p-2 rounded-full hover:bg-white/5 data-[state=open]:bg-white/5 h-auto text-white border-0 focus:bg-white/5 cursor-pointer"
              >
                <Home className="w-4 h-4" />
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger
                onClick={() => handleNavigation("#about")}
                className="px-4 py-2 text-white hover:text-gray-300 data-[state=open]:text-white rounded-full hover:bg-white/5 data-[state=open]:bg-white/5 h-auto border-0 focus:bg-white/5 cursor-pointer"
              >
                About
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger
                onClick={() => handleNavigation("#projects")}
                className="px-4 py-2 text-white hover:text-gray-300 data-[state=open]:text-white rounded-full hover:bg-white/5 data-[state=open]:bg-white/5 h-auto border-0 focus:bg-white/5 cursor-pointer"
              >
                Projects
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger
                onClick={() => handleNavigation("#contact")}
                className="px-4 py-2 text-white hover:text-gray-300 data-[state=open]:text-white rounded-full hover:bg-white/5 data-[state=open]:bg-white/5 h-auto border-0 focus:bg-white/5 cursor-pointer"
              >
                Contact me
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="flex items-center">
          <Link
            href="#download"
            className="px-6 py-2 bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] text-white rounded-full font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20"
          >
            Download CV
          </Link>
        </div>
      </nav>
    </header>
  );
}
