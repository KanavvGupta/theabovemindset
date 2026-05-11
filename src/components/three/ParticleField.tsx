"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STAR_COUNT = 1800;
const MOTE_COUNT = 600;

/* ---------- DARK MODE: Stars + connection lines ---------- */
function Stars() {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(STAR_COUNT * 3);
    const vel = new Float32Array(STAR_COUNT * 3);
    const col = new Float32Array(STAR_COUNT * 3);

    // Logo colors mapped to RGB:
    const palette = [
      { r: 0.25, g: 0.78, b: 0.82 }, // teal/cyan
      { r: 0.25, g: 0.78, b: 0.82 }, // teal dominant
      { r: 0.38, g: 0.72, b: 0.45 }, // green
      { r: 0.85, g: 0.72, b: 0.22 }, // yellow
      { r: 0.80, g: 0.30, b: 0.25 }, // red (rare)
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 4.5;

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      vel[i3] = (Math.random() - 0.5) * 0.0015;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.0015;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.0015;

      // Weight: 60% cyan, 20% green, 12% yellow, 8% red
      const rng = Math.random();
      const c = rng < 0.6 ? palette[0] : rng < 0.8 ? palette[2] : rng < 0.92 ? palette[3] : palette[4];
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return [pos, vel, col];
  }, []);

  const posAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions]);
  const colAttr = useMemo(() => new THREE.BufferAttribute(colors, 3), [colors]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const posA = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posA.array as Float32Array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      arr[i3] += velocities[i3] + Math.sin(t * 0.3 + i * 0.01) * 0.0008;
      arr[i3 + 1] += velocities[i3 + 1] + Math.cos(t * 0.2 + i * 0.01) * 0.0008;
      arr[i3 + 2] += velocities[i3 + 2] + Math.sin(t * 0.15 + i * 0.02) * 0.0008;

      const dist = Math.sqrt(arr[i3] ** 2 + arr[i3 + 1] ** 2 + arr[i3 + 2] ** 2);
      if (dist > 8) {
        arr[i3] *= 0.97;
        arr[i3 + 1] *= 0.97;
        arr[i3 + 2] *= 0.97;
      }
    }
    posA.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.04;
    meshRef.current.rotation.x = Math.sin(t * 0.025) * 0.08;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={posAttr} />
        <primitive attach="attributes-color" object={colAttr} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const initialPositions = useMemo(() => new Float32Array(200 * 6), []);
  const posAttr = useMemo(() => new THREE.BufferAttribute(initialPositions, 3), [initialPositions]);

  useFrame((state) => {
    if (!lineRef.current) return;
    const t = state.clock.elapsedTime;
    const pos = lineRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    let idx = 0;
    for (let i = 0; i < 200; i++) {
      const a1 = (t * 0.08 + i * 0.28) % (Math.PI * 2);
      const a2 = (t * 0.08 + i * 0.28 + 0.5) % (Math.PI * 2);
      const r1 = 3 + Math.sin(t * 0.18 + i) * 1.5;
      const r2 = 3 + Math.cos(t * 0.12 + i) * 1.5;
      arr[idx++] = Math.cos(a1) * r1;
      arr[idx++] = Math.sin(a1 + t * 0.04) * r1 * 0.3;
      arr[idx++] = Math.sin(a1) * r1;
      arr[idx++] = Math.cos(a2) * r2;
      arr[idx++] = Math.sin(a2 + t * 0.04) * r2 * 0.3;
      arr[idx++] = Math.sin(a2) * r2;
    }
    pos.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={posAttr} />
      </bufferGeometry>
      <lineBasicMaterial
        color="#3dd8e0"
        transparent
        opacity={0.05}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

/* ---------- LIGHT MODE: Morning dust motes + soft particles ---------- */
function MorningMotes() {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(MOTE_COUNT * 3);
    const vel = new Float32Array(MOTE_COUNT * 3);
    const col = new Float32Array(MOTE_COUNT * 3);

    for (let i = 0; i < MOTE_COUNT; i++) {
      const i3 = i * 3;
      // Wider, more diffused distribution
      pos[i3] = (Math.random() - 0.5) * 14;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 8;

      // Very gentle upward drift
      vel[i3] = (Math.random() - 0.5) * 0.003;
      vel[i3 + 1] = Math.random() * 0.002 + 0.001;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.002;

      // Warm golden-teal color mix
      const warm = Math.random();
      if (warm < 0.5) {
        // Soft gold / sunlight motes
        col[i3] = 0.92; col[i3 + 1] = 0.82; col[i3 + 2] = 0.45;
      } else if (warm < 0.8) {
        // Teal highlights
        col[i3] = 0.3; col[i3 + 1] = 0.72; col[i3 + 2] = 0.78;
      } else {
        // Soft white dust
        col[i3] = 0.9; col[i3 + 1] = 0.9; col[i3 + 2] = 0.88;
      }
    }
    return [pos, vel, col];
  }, []);

  const posAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions]);
  const colAttr = useMemo(() => new THREE.BufferAttribute(colors, 3), [colors]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const posA = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posA.array as Float32Array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < MOTE_COUNT; i++) {
      const i3 = i * 3;
      // Gentle breeze + upward float
      arr[i3] += velocities[i3] + Math.sin(t * 0.4 + i * 0.05) * 0.002;
      arr[i3 + 1] += velocities[i3 + 1] + Math.sin(t * 0.3 + i * 0.03) * 0.001;
      arr[i3 + 2] += velocities[i3 + 2] + Math.cos(t * 0.25 + i * 0.04) * 0.001;

      // Wrap particles that float too high
      if (arr[i3 + 1] > 6) {
        arr[i3 + 1] = -5;
        arr[i3] = (Math.random() - 0.5) * 14;
      }
      // Horizontal bounds
      if (Math.abs(arr[i3]) > 8) arr[i3] *= 0.95;
    }
    posA.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.015;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <primitive attach="attributes-position" object={posAttr} />
        <primitive attach="attributes-color" object={colAttr} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

/* ---------- Scene wrapper with theme awareness ---------- */
interface ParticleFieldProps {
  className?: string;
}

export default function ParticleField({ className }: ParticleFieldProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Listen for theme changes on <html>
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={isDark ? 0.3 : 0.6} />
        {isDark ? (
          <>
            <Stars />
            <ConnectionLines />
          </>
        ) : (
          <MorningMotes />
        )}
      </Canvas>
    </div>
  );
}
