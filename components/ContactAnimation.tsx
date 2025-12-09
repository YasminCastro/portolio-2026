"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect } from "react";

function FlowerModel() {
  const { scene, animations } = useGLTF("/blue_flower_animated.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 2.5, 0]}
    />
  );
}

useGLTF.preload("/blue_flower_animated.glb");

export default function ContactAnimation() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <FlowerModel />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
