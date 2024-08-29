// ModelCanvas.js
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MTLLoader, OBJLoader } from 'three-stdlib';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from "three";




function Model() {
   /* const objRef = useRef();

    const materials = useLoader(MTLLoader, '/assets/models/bugatti.mtl');
    const obj = useLoader(OBJLoader, '/assets/models/bugatti.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

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

    return obj ? <primitive object={obj} ref={objRef} scale={1} /> : null;*/

    const fbx = useLoader(FBXLoader, '/assets/models/Space_Helmet_anim.fbx')
   

  return <primitive object={fbx} />
}



function ModelCanvas() {
    return (
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}

export default ModelCanvas;
