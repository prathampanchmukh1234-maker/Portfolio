import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Sparkles,
  Stars,
} from '@react-three/drei'
import * as THREE from 'three'

function HolographicTotem() {
  const group = useRef<THREE.Group | null>(null)
  const ringA = useRef<THREE.Mesh | null>(null)
  const ringB = useRef<THREE.Mesh | null>(null)
  const crystal = useRef<THREE.Mesh | null>(null)

  useFrame((state, delta) => {
    if (!group.current || !ringA.current || !ringB.current || !crystal.current) return

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.pointer.x * 0.45,
      0.05,
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.18,
      0.05,
    )

    ringA.current.rotation.z += delta * 0.45
    ringA.current.rotation.x += delta * 0.12
    ringB.current.rotation.z -= delta * 0.28
    ringB.current.rotation.y += delta * 0.16
    crystal.current.rotation.y += delta * 0.34
    crystal.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08
  })

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.4}>
        <mesh position={[0, -1.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.2, 80]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.08} />
        </mesh>

        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[1.2, 1.45, 0.34, 6, 1, false]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        <mesh position={[0, -1.02, 0]}>
          <torusGeometry args={[1.15, 0.04, 20, 140]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
            roughness={0.12}
            metalness={0.7}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.6}>
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 3.8, 32, 1, true]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.18} />
        </mesh>
      </Float>

      <Float speed={1.7} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={ringA} position={[0, 0.15, 0]} rotation={[1.05, 0.35, 0.2]}>
          <torusGeometry args={[1.52, 0.065, 24, 200]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={1.15}
            roughness={0.12}
            metalness={0.82}
          />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={0.55} floatIntensity={1.1}>
        <mesh ref={ringB} position={[0, 0.15, 0]} rotation={[-0.55, 0.7, 0.35]}>
          <torusGeometry args={[1.08, 0.045, 22, 180]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#8b5cf6"
            emissiveIntensity={1.3}
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>
      </Float>

      <Float speed={2.1} rotationIntensity={0.75} floatIntensity={1.85}>
        <mesh ref={crystal} position={[0, 0.2, 0]}>
          <octahedronGeometry args={[0.92, 1]} />
          <MeshTransmissionMaterial
            color="#8bf4ff"
            thickness={0.85}
            roughness={0.02}
            chromaticAberration={0.08}
            anisotropy={0.15}
            distortion={0.22}
            distortionScale={0.32}
            temporalDistortion={0.18}
            iridescence={0.8}
            iridescenceIOR={1.3}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </mesh>
      </Float>

      <Float speed={1.25} rotationIntensity={1.1} floatIntensity={2}>
        <mesh position={[-1.8, 0.95, -0.4]}>
          <icosahedronGeometry args={[0.24, 1]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={1.25}
            roughness={0.2}
            metalness={0.55}
          />
        </mesh>
      </Float>

      <Float speed={1.35} rotationIntensity={1} floatIntensity={2.2}>
        <mesh position={[1.8, -0.85, -0.35]}>
          <icosahedronGeometry args={[0.28, 1]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#8b5cf6"
            emissiveIntensity={1.25}
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
      </Float>

      <Float speed={1.55} rotationIntensity={0.8} floatIntensity={1.7}>
        <mesh position={[0, 0.2, -0.12]}>
          <sphereGeometry args={[0.38, 48, 48]} />
          <MeshDistortMaterial
            color="#22d3ee"
            emissive="#0ea5e9"
            emissiveIntensity={0.9}
            roughness={0.06}
            metalness={0.4}
            transparent
            opacity={0.28}
            distort={0.28}
            speed={1.9}
          />
        </mesh>
      </Float>

      <Sparkles
        count={65}
        scale={[6.5, 6.5, 4.5]}
        size={2.2}
        speed={0.5}
        color="#a5f3fc"
      />
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.2]}>
      <color attach="background" args={['#030711']} />
      <fog attach="fog" args={['#030711', 6, 16]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 4, 6]} intensity={1.8} color="#60a5fa" />
      <pointLight position={[-4, -3, 2]} intensity={2} color="#8b5cf6" />
      <pointLight position={[0, 1.5, 3]} intensity={1.5} color="#67e8f9" />
      <Suspense fallback={null}>
        <HolographicTotem />
        <Environment preset="city" />
      </Suspense>
      <Stars radius={70} depth={18} count={950} factor={3} fade speed={0.55} />
    </Canvas>
  )
}
