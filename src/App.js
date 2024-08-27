import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MTLLoader, OBJLoader } from 'three-stdlib';
import * as THREE from 'three';

function Model() {
    const objRef = useRef();

    // Load MTL first, then OBJ
    const materials = useLoader(MTLLoader, '/assets/models/bugatti.mtl');
    const obj = useLoader(OBJLoader, '/assets/models/bugatti.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    // Apply any transformations or tweaks to the object after it loads
    useEffect(() => {
        if (obj) {
            obj.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
            objRef.current = obj;
        }
    }, [obj]);

    return obj ? <primitive object={obj} ref={objRef} scale={1} /> : null;
}

function App() {
    return (
        <div style={{ height: '100vh' }}>
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default App;
