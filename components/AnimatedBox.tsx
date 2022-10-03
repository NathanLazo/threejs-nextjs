import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { type } from "node:os";
import { ReactComponentElement, useRef } from "react";
import { BoxHelper } from "three";

type Props = {
  isTesting: boolean;
}

const AnimatedBox: React.FC<Props> = ({isTesting}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  {isTesting? useHelper(meshRef, BoxHelper, "red"): null}

  useFrame(() => {
    console.log("Hi");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
