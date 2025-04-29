import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function SpinningBall() {
  const meshRef = useRef()

    useFrame((state, delta) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() /2;
    meshRef.current.rotation.x = state.clock.getElapsedTime() /2;
    })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 12, 6]} />
      <meshStandardMaterial color="white" wireframe={true}/>
    </mesh>
  )
}

export default function BallScene() {
  return (
    <Canvas
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: false }}
      
      camera={{ position: [0, 0, 0.6] }}
    >
      <ambientLight intensity={0.5} />
      <SpinningBall />
    </Canvas>
  )
}
