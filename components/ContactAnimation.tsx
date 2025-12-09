"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function AnimationScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </>
  );
}

export default function ContactAnimation() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <AnimationScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
