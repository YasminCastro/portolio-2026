"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RotateCcw, Image as ImageIcon } from "lucide-react";

function Model() {
  const { scene } = useGLTF("/avatar.glb");
  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
}

useGLTF.preload("/avatar.glb");

export default function Avatar3D() {
  const [show3D, setShow3D] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161B22]"
    >
      {show3D ? (
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          frameloop={isVisible ? "always" : "never"}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            <Model />
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              autoRotate
              autoRotateSpeed={1}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
              minDistance={3}
              maxDistance={8}
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <Button
        onClick={() => setShow3D(!show3D)}
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 z-10 bg-[#161B22]/80 backdrop-blur-sm border-white/20 hover:bg-[#161B22] text-white"
        aria-label={show3D ? "Mostrar foto" : "Mostrar 3D"}
      >
        {show3D ? (
          <ImageIcon className="h-4 w-4" />
        ) : (
          <RotateCcw className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
