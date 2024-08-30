// ModelCanvas.js
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useLoader,useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three';
import { OrbitControls, Stats as DreiStats } from '@react-three/drei';



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

  

    const fbx = useLoader(FBXLoader, '/assets/models/PC_Nightmare_Mushroom.fbx');
    const mixer = useRef(null);


    useEffect(() => {
        if (fbx.animations.length > 0) {
            mixer.current = new THREE.AnimationMixer(fbx);
            mixer.current.clipAction(fbx.animations[0]).play();
        }return () => {
            if (mixer.current) {
                mixer.current.stopAllAction();
                mixer.current = null;
            }
        };
    }, [fbx]);

    useFrame((state, delta) => {
        if (mixer.current) mixer.current.update(delta);
    });
 
   

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
