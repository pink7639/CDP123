/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing R3F types in this environment
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      group: any;
      pointLight: any;
      ambientLight: any;
      color: any;
      lineSegments: any;
      lineBasicMaterial: any;
    }
  }
}

const DataNode = ({ position, color, size = 0.15 }: { position: [number, number, number]; color: string; size?: number }) => {
  return (
    <Sphere args={[size, 16, 16]} position={position}>
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
        roughness={0.2} 
        metalness={0.8} 
      />
    </Sphere>
  );
};

const ConnectionLines = ({ count = 30, radius = 5 }) => {
    const geometry = useMemo(() => {
        const points = [];
        for(let i=0; i<count; i++) {
            const start = new THREE.Vector3(
                (Math.random() - 0.5) * radius * 1.5,
                (Math.random() - 0.5) * radius,
                (Math.random() - 0.5) * radius
            );
            const end = new THREE.Vector3(0,0,0); // Connect to center
            points.push(start);
            points.push(end);
        }
        return new THREE.BufferGeometry().setFromPoints(points);
    }, [count, radius]);

    return (
        <lineSegments geometry={geometry}>
            <lineBasicMaterial color="#3b82f6" transparent opacity={0.15} />
        </lineSegments>
    )
}

const DataCloud = () => {
    const groupRef = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        if(groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    const particles = useMemo(() => {
        const temp = [];
        const colors = ['#3b82f6', '#06b6d4', '#1e40af']; // Brand blues
        for(let i=0; i < 40; i++) {
            const x = (Math.random() - 0.5) * 6;
            const y = (Math.random() - 0.5) * 4;
            const z = (Math.random() - 0.5) * 4;
            temp.push({ 
                pos: [x, y, z] as [number, number, number], 
                color: colors[Math.floor(Math.random() * colors.length)] 
            });
        }
        return temp;
    }, []);

    return (
        <group ref={groupRef}>
            {particles.map((p, i) => (
                <Float key={i} speed={1 + Math.random()} rotationIntensity={1} floatIntensity={1}>
                    <DataNode position={p.pos} color={p.color} />
                </Float>
            ))}
            <ConnectionLines />
            {/* Central Node representing the CDP Core */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <DataNode position={[0,0,0]} color="#ffffff" size={0.5} />
                <pointLight position={[0,0,0]} distance={5} intensity={5} color="#60a5fa" />
            </Float>
        </group>
    );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -5, -10]} intensity={1} color="#06b6d4" />
        
        <DataCloud />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// Keeping the export to avoid breaking imports, but unused in new design
export const QuantumComputerScene: React.FC = () => <HeroScene />;
