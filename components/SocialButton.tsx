import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  target?: string;
  rel?: string;
}

export default function SocialButton({
  href,
  icon,
  target,
  rel,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="w-12 h-12 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20"
    >
      {icon}
    </a>
  );
}
