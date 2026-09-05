import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Environment } from '@react-three/drei'

function FloatingKnot() {
  const meshRef = useRef(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.15
    meshRef.current.rotation.y = t * 0.22
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.34, 220, 32]} />
        <MeshDistortMaterial
          color="#38bdf8"
          emissive="#0d3a52"
          roughness={0.15}
          metalness={0.6}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

/**
 * Interactive 3D hero canvas. Falls back gracefully — if WebGL fails to
 * initialize, the parent Hero component still renders the glow-frame photo
 * as a backup (see the `onCreated`/error boundary note in Hero.jsx).
 */
export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.4], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[-4, -2, -2]} intensity={0.8} color="#10b981" />
      <Suspense fallback={null}>
        <FloatingKnot />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
