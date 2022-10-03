import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import { OrbitControls, Stats, Torus } from "@react-three/drei";


const TexturedSpheres = () => {
  return (
    <>
    <mesh scale={[0.5, 0.5, 0.5]} position={[-1,0,0]}>
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
    <mesh scale={[0.5, 0.5, 0.5]}>
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
    <mesh scale={[0.5, 0.5, 0.5]} position={[1,0,0]}>
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
    </>
  );
}

const Home: NextPage = () => {
  const testing = true;

  return (
    <div className="container">
      <Canvas>
        {
          testing ?
            (
              <>
                <Stats />
                <axesHelper visible={testing} args={[5]} />
                <gridHelper args={[5, 5]} />
              </>
            )
            : null
        }
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <TexturedSpheres />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Home;
