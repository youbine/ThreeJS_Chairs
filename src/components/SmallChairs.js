import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function SmallChairs() {
  const list = [
    "./minichairs/armchairYellow.gltf",
    "./minichairs/armchairGreen.gltf",
    "./minichairs/armchairGray.gltf",
  ];
  const Mini = ({ url }) => {
    const gltf = useGLTF(url, true);

    return (
      <>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
        <mesh position={[0, -35, 0]} rotation={[0, 2, 0]}>
          <primitive object={gltf.scene} dispose={null} />
        </mesh>
      </>
    );
  };

  return (
    <>
      {list.map((a, i) => (
        <>
          <Canvas
            key={i}
            className="minichairCanvas"
            camera={{
              position: [
                110,
                window.innerWidth / window.innerHeight,
                0.1,
                1000,
              ],
            }}
            style={{
              height: window.innerHeight,
              width: window.innerWidth / 3,
              zIndex: 30,
              cursor: "pointer",
            }}
          >
            <Mini url={a} />
          </Canvas>
        </>
      ))}
    </>
  );
}
