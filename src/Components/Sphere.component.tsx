import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

export const Sphere = () => {
  const myMesh = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh
      scale={active ? 1.5 : 5}
      ref={myMesh}
      onClick={() => setActive(!active)}
      onContextMenu={(e) => console.log("context menu")}
      onDoubleClick={(e) => console.log("double click")}
      onWheel={(e) => console.log("wheel spins")}
      onPointerUp={(e) => console.log("up")}
      onPointerDown={(e) => console.log("down")}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      onPointerEnter={(e) => console.log("enter")}
      onPointerLeave={(e) => console.log("leave")}
      onPointerMove={(e) => console.log("move")}
      onPointerMissed={() => console.log("missed")}
      onUpdate={() => console.log("props have been updated")}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color={hover ? "royalblue" : "red"} />
    </mesh>
  );
};
