import { Canvas } from "@react-three/fiber";
import Model from "./Model";

export default function BigChair({ imgurl }) {
  return (
    <>
      <Canvas
        camera={{
          position: [95, window.innerWidth / window.innerHeight, 0.1, 1000],
        }}
        style={{ height: window.innerHeight }}
      >
        <Model imgurl={imgurl} />
      </Canvas>
    </>
  );
}
