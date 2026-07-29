import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Yasmin Castro",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 text-center bg-[#0D1117]">
      <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] text-6xl sm:text-8xl font-bold">
        404
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold text-white">
        Page not found
      </h1>
      <p className="text-white/70 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="mt-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20"
      >
        Back to home
      </Link>
    </div>
  );
}
