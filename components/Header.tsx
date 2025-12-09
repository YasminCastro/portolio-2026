"use client";

import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import DownloadCVButton from "./DownloadCVButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: "#home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#academic", label: "Academic" },
    { href: "#contact", label: "Contact me" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-[#0D1117]/80 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] flex items-center justify-center shadow-lg shadow-[#A78BFA]/20">
            <span className="text-white font-bold text-lg sm:text-xl">Y</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#FCA5A5] via-[#60A5FA] to-[#A78BFA] opacity-30"></div>
          <div className="absolute inset-px rounded-full bg-[#161B22]"></div>

          <Menubar className="relative bg-transparent border-0 shadow-none rounded-full px-1 py-2 h-auto z-10 gap-1">
            {menuItems.map((item, index) => (
              <MenubarMenu key={index}>
                <MenubarTrigger
                  onClick={() => handleNavigation(item.href)}
                  className={`${
                    item.icon ? "p-2" : "px-4 py-2"
                  } rounded-full hover:bg-white/5 data-[state=open]:bg-white/5 h-auto text-white border-0 focus:bg-white/5 cursor-pointer text-sm`}
                >
                  {item.icon || item.label}
                </MenubarTrigger>
              </MenubarMenu>
            ))}
          </Menubar>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <div className="hidden sm:block">
            <DownloadCVButton className="!px-4 !py-2 text-xs" />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-[#161B22] border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Desktop Download CV Button */}
        <div className="hidden md:flex items-center">
          <DownloadCVButton />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#161B22] border-b border-white/10 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.href)}
                className="w-full px-4 py-3 rounded-lg text-white hover:bg-white/5 transition-colors text-left flex items-center gap-3"
              >
                {item.icon && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            ))}
            <div className="pt-2 border-t border-white/10">
              <DownloadCVButton className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
