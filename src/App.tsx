import { Canvas } from "@react-three/fiber";
import { Sphere } from "./Components/Sphere.component";
export const App = () => (
  <div id="canvas-container">
    <Canvas>
      <ambientLight args={[0xff0000]} intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
      <Sphere />
    </Canvas>
  </div>
);
