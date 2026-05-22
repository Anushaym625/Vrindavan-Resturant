"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Float, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

interface DishProps {
  textureUrl: string;
}

function DishMesh({ textureUrl }: DishProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(textureUrl);
  
  // Set texture settings for better quality
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle auto-rotation
      meshRef.current.rotation.y += delta * 0.2;
      
      // Interactive tilt based on mouse position when hovered
      if (hovered) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          (state.pointer.y * Math.PI) / 8 + Math.PI / 2 - 0.2, // Base tilt + mouse tilt
          0.1
        );
        meshRef.current.rotation.z = THREE.MathUtils.lerp(
          meshRef.current.rotation.z,
          -(state.pointer.x * Math.PI) / 8,
          0.1
        );
      } else {
        // Return to resting position
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, Math.PI / 2 - 0.3, 0.05);
        meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, 0, 0.05);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        rotation={[Math.PI / 2 - 0.3, 0, 0]}
        castShadow
        receiveShadow
      >
        {/* We use a thin cylinder to represent the plate/dish */}
        <cylinderGeometry args={[2.5, 2.3, 0.2, 64]} />
        {/* Array of materials for cylinder: [side, top, bottom] */}
        <meshStandardMaterial attach="material-0" color="#AA8C2C" metalness={0.8} roughness={0.2} />
        <meshStandardMaterial attach="material-1" map={texture} roughness={0.4} metalness={0.1} />
        <meshStandardMaterial attach="material-2" color="#050E09" roughness={0.9} />
      </mesh>
    </Float>
  );
}

export default function DishModel({ textureUrl }: DishProps) {
  return (
    <div className="w-full h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={1024}
        />
        <spotLight
          position={[-5, 5, 5]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#D4AF37"
        />
        
        <DishMesh textureUrl={textureUrl} />
        
        <ContactShadows 
          position={[0, -2, 0]} 
          opacity={0.6} 
          scale={10} 
          blur={2.5} 
          far={4}
          color="#000000" 
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
