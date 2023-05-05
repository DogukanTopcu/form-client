import React from 'react';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Model from "./canvas/Iss";

const Logo = () => {
  return (
    <div>
        <div className='w-full h-64 max-w-full max-h-full'>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <ambientLight />
                <Model />
            </Canvas>
        </div>
    </div>
  )
}

export default Logo