export interface Model3DConfig {
  file: string;
  credit: string;
  creditUrl: string;
  cameraPosition: [number, number, number];
  autoRotate: boolean;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  hasShadow?: boolean;
}

export const models3D: Model3DConfig[] = [
  {
    file: "/3d-models/blue_flower_animated.glb",
    credit: "morphy.vision",
    creditUrl: "https://skfb.ly/oDIqT",
    cameraPosition: [0, 0, 5],
    autoRotate: false,
    scale: 2,
    position: [0, -1, 0],
    rotation: [0, Math.PI / 2.5, 0],
  },
  {
    file: "/3d-models/smart_robot.glb",
    credit: "ARTEL_3D",
    creditUrl: "https://skfb.ly/pyYLQ",
    cameraPosition: [0, 0, 3],
    autoRotate: true,
    scale: 2,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    hasShadow: true,
  },

  {
    file: "/3d-models/ramen.glb",
    credit: "Laxminarayan Artistry",
    creditUrl: "https://skfb.ly/oVHFN",
    cameraPosition: [0, 3, 2],
    autoRotate: false,
    scale: 9,
    position: [0, -1, 0],
    rotation: [0, 0, 0],
    hasShadow: true,
  },

  {
    file: "/3d-models/earth-rabbitrabbit.glb",
    credit: "rabbitrabbit389",
    creditUrl: "https://skfb.ly/oMEvs",
    cameraPosition: [0, 0, 6],
    autoRotate: true,
    scale: 2,
    position: [0, -2, 0],
    rotation: [0, 0, 0],
  },
];

export function getRandomModel(): Model3DConfig {
  return models3D[Math.floor(Math.random() * models3D.length)];
}
