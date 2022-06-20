import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model({ imgurl }) {
  const ref = useRef();

  const Img = ({ url }) => {
    const gltf = useGLTF(url, true);

    useFrame(() => {
      ref.current.rotation.y += 0.01;
    });
    return <primitive object={gltf.scene} dispose={null} />;
  };
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      <mesh
        ref={ref}
        position={[0, -25, 0]}
      >
        <Img url={imgurl} />
      </mesh>
    </>
  );
}
