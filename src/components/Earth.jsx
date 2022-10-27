import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'

import {TextureLoader} from 'three'
import { useLoader } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

import EarthTexture from '../assets/earth_texture.jpeg'
import EarthTextureDay from '../assets/earthday_texture.jpeg'
import EarthTextureSpecular from '../assets/earthtexture_especular.jpeg'

function Earth() {
    const [earthMap, earthMapDay, normalSpecular] = useLoader (TextureLoader, [EarthTexture, EarthTextureDay, EarthTextureSpecular])

  return (
    <div className='earth'>
        <Canvas>
            <Suspense fallback={null}>
            <ambientLight intensity={2} />
                <mesh>
                    <sphereGeometry arg={[1, 32, 32]} />
                    <meshPhongMaterial specularMap={normalSpecular} />
                    <meshStandardMaterial map={earthMap} normalMap={earthMapDay} />
                </mesh>
                <OrbitControls 
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={1}
                    panSpeed={1.5}
                    rotateSpeed={2}
                />
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Earth