"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center text-white">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="text-white/70">
        Please try again, or reload the page.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] text-white font-medium"
      >
        Try again
      </button>
    </div>
  );
}
