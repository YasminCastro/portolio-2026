"use client";

import { Html, useProgress } from "@react-three/drei";

export default function Loader3D() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#A78BFA] animate-spin" />
        <span className="text-white/60 text-xs font-medium">
          {Math.round(progress)}%
        </span>
      </div>
    </Html>
  );
}
