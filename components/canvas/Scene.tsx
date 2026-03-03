'use client';   // This component is a client component (necessary on 3D)

import { Canvas } from "@react-three/fiber";    // The principal component of the 3D world
import { Stars, Float } from "@react-three/drei";    // Component to add stars and float effect

export default function Scene() {
    return (

        // Canvas: Create WebGL render

        <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }} // Camera configuration (position Z and field of view)
            style={{
                position: 'fixed',  // Fixed position
                top: 0,
                left: 0,
                pointerEvents: 'none' // It allow to click on the bottons of the page
            }}
        >
            {/* ambientLight: Light that illuminates all scene to don't see black  */}
            <ambientLight intensity={0.5} />
            {/* stars: Add stars to the scene */}
            <Stars
                radius={100}  // Radius of the stars
                depth={50}    // Depth of the stars
                count={5000}  // Number of stars
                factor={4}    // Size of the stars
                saturation={0} // Color (0 = white)
                fade            // Make stars fade at the distance
                speed={1}     // Rotation speed
            />

            {/* At the following part we add the 3D models */}

        </Canvas>


    )
}