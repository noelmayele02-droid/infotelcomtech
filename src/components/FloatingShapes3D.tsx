import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed = 1, distort = 0.3 }: { position: [number, number, number], color: string, speed?: number, distort?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedBox = ({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={position}>
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Box>
    </Float>
  );
};

const AnimatedTorus = ({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Torus ref={meshRef} args={[1, 0.4, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
        />
      </Torus>
    </Float>
  );
};

const FloatingShapes3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          
          {/* Main shapes */}
          <AnimatedSphere position={[-4, 2, -2]} color="#3b82f6" speed={0.8} distort={0.4} />
          <AnimatedSphere position={[4, -1, -3]} color="#8b5cf6" speed={1.2} distort={0.3} />
          <AnimatedBox position={[3, 3, -4]} color="#06b6d4" speed={0.6} />
          <AnimatedBox position={[-3, -2, -3]} color="#f59e0b" speed={1} />
          <AnimatedTorus position={[0, 0, -5]} color="#ec4899" speed={0.5} />
          <AnimatedTorus position={[-5, -3, -4]} color="#10b981" speed={0.7} />
          
          {/* Additional smaller shapes */}
          <AnimatedSphere position={[5, 1, -6]} color="#6366f1" speed={1.5} distort={0.2} />
          <AnimatedBox position={[-2, 4, -5]} color="#f43f5e" speed={0.9} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingShapes3D;
