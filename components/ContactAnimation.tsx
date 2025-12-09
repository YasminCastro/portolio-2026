"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { Model3DConfig } from "@/lib/models3d";
import * as THREE from "three";

interface Model3DProps {
  config: Model3DConfig;
}

function Model3D({ config }: Model3DProps) {
  const { scene, animations } = useGLTF(config.file);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  useEffect(() => {
    if (config.hasShadow) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene, config.hasShadow]);

  return (
    <primitive
      object={scene}
      scale={config.scale || 1}
      position={config.position || [0, 0, 0]}
      rotation={config.rotation || [0, 0, 0]}
    />
  );
}

function ShadowPlane({ modelY }: { modelY: number }) {
  const planeY = modelY - 0.1;
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, planeY, 0]}
      receiveShadow
    >
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
}

function CameraUpdater({
  cameraPosition,
}: {
  cameraPosition: [number, number, number];
}) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...cameraPosition);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, cameraPosition]);

  return null;
}

interface ContactAnimationProps {
  config: Model3DConfig;
}

export default function ContactAnimation({ config }: ContactAnimationProps) {
  useGLTF.preload(config.file);

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: config.cameraPosition, fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        shadows={config.hasShadow}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow={config.hasShadow}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          {config.hasShadow && (
            <ShadowPlane modelY={config.position?.[1] || 0} />
          )}
          <Model3D config={config} />
          <CameraUpdater cameraPosition={config.cameraPosition} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            target={[0, 0, 0]}
            autoRotate={config.autoRotate}
            autoRotateSpeed={config.autoRotate ? 0.5 : 0}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
