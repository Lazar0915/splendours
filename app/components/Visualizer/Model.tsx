// import { Html, OrbitControls, Stats, useProgress } from '@react-three/drei';
// import { Canvas, useLoader } from '@react-three/fiber';
// import React, { Suspense, useEffect } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { TextureLoader } from 'three';

// interface SceneProps {
//     selectedTexture: string | null;
// }

// function Loader() {
//     const { progress } = useProgress();
//     return <Html center>{progress} % loaded</Html>;
// }

// const Scene: React.FC<SceneProps> = ({ selectedTexture }) => {
//     const gltf = useLoader(GLTFLoader, '/models/chimney.glb');
//     const defaultTexture = useLoader(TextureLoader, '/textures/default.jpg');
//     const newTexture = selectedTexture ? useLoader(TextureLoader, selectedTexture) : defaultTexture;

//     useEffect(() => {
//         if (gltf && newTexture) {
//             gltf.scene.traverse((child: any) => {
//                 if (child.isMesh && child.name === 'main_change') {
//                     // Replace the texture while keeping UV mapping unchanged
//                     child.material.map = newTexture;
//                     child.material.map.wrapS = child.material.map.wrapT = 1000; // Optional: Repeat if needed
//                     child.material.needsUpdate = true;
//                 }
//             });
//         }
//     }, [gltf, newTexture]);

//     return (
//         <Suspense fallback={<Loader />}>
//             <Canvas camera={{ position: [0, 3.2, 5] }} shadows>
//                 <directionalLight position={[1, 1, 1]} intensity={1} castShadow />
//                 <directionalLight position={[-1, -1, -1]} intensity={1} />
//                 <primitive object={gltf.scene} position={[0, 1, 0]} castShadow />
//                 <OrbitControls target={[0, 3.2, 0]} />
//                 {/* <Stats /> */}
//             </Canvas>
//         </Suspense>
//     );
// };

// export default Scene;
