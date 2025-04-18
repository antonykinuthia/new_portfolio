import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

const TechIcons = ({ model }) => {
    const scene = useGLTF(model.modelPath) 

    useEffect(() => {
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if (child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: "#CCCCCC", // light silver base
                        metalness: 1,     // full metallic
                        roughness: 0.1,   // very smooth surface
                        envMapIntensity: 1 // stronger reflections (optional, if using an environment map)
                    });
                }
            });
        }
    }, [scene]);

  return (
      <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5,5,5]} intensity={1}/>

        <Environment preset="city" />

        <OrbitControls enableZoom={false}/>

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene}/>
            </group>
        </Float>
      </Canvas>
  )
  
}

export default TechIcons