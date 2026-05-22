"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Float, ContactShadows, Environment, OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function LargeDishModel({ textureUrl }: { textureUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(textureUrl);
  
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Very slow auto-rotation
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh
        ref={meshRef}
        rotation={[Math.PI / 2 - 0.2, 0, 0]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[4, 3.5, 0.4, 64]} />
        <meshStandardMaterial attach="material-0" color="#AA8C2C" metalness={0.9} roughness={0.1} />
        <meshStandardMaterial attach="material-1" map={texture} roughness={0.3} metalness={0.2} />
        <meshStandardMaterial attach="material-2" color="#050E09" roughness={0.9} />
      </mesh>
    </Float>
  );
}

// Custom 3D floating herbs
function FloatingHerbs() {
  const herbsRef = useRef<THREE.Group>(null);
  
  const herbs = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 30; i++) {
      const position = [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      ];
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ];
      const scale = Math.random() * 0.3 + 0.1;
      // alternate between green herb and gold spice colors
      const color = Math.random() > 0.5 ? "#2e7d32" : "#D4AF37";
      temp.push({ position, rotation, scale, color });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (herbsRef.current) {
      herbsRef.current.rotation.y += delta * 0.05;
      herbsRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * (0.2 + i * 0.01);
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
      });
    }
  });

  return (
    <group ref={herbsRef}>
      {herbs.map((props, i) => (
        <mesh key={i} position={props.position as any} rotation={props.rotation as any} scale={props.scale}>
          {/* simple leaf shape using a stretched sphere */}
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color={props.color} roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

const foodItems = [
  "/images/immersive_bowl.png",
  "/images/3d1.png",
  "/images/3d2.png",
  "/images/3d3.png",
];

export default function Immersive3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % foodItems.length);
    }, 6000); // Change dish every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[80vh] w-full bg-[#050E09] relative overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#102B1B]/40 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white/5 font-bold uppercase tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          Experience
        </h2>
        <div className="absolute bottom-10 flex flex-col items-center">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em] bg-black/50 px-6 py-2 rounded-full backdrop-blur-md border border-[#D4AF37]/30">
            Interactive 3D • Drag to Rotate
          </span>
        </div>
      </div>

      <div className="w-full h-full z-10 relative">
        <Canvas shadows camera={{ position: [0, 4, 12], fov: 45 }}>
          <ambientLight intensity={0.3} />
          
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            color="#ffffff"
            castShadow
            shadow-mapSize={2048}
          />
          <directionalLight position={[10, 5, 5]} intensity={1} color="#D4AF37" />
          <directionalLight position={[-10, -5, -5]} intensity={0.5} color="#164028" />

          {/* Using a key forces re-render of the texture when it changes */}
          <LargeDishModel key={foodItems[currentIndex]} textureUrl={foodItems[currentIndex]} />
          <FloatingHerbs />
          
          <Sparkles count={100} scale={12} size={4} speed={0.4} opacity={0.5} color="#D4AF37" />

          <ContactShadows 
            position={[0, -3, 0]} 
            opacity={0.8} 
            scale={20} 
            blur={3} 
            far={10}
            color="#000000" 
          />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
