import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {  DirectionalLight } from 'three';
import { useLoader } from '@react-three/fiber';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh, MeshStandardMaterial } from 'three';

const Model = () => {
  const obj = useLoader(OBJLoader, '/ITPG-Model.obj');
  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = new MeshStandardMaterial({ color: 0xffffff });
    }
  });
  obj.scale.set(2, 2, 2);
  return <primitive object={obj} />;
};

const Lighting = () => {
  const { scene } = useThree();
  useEffect(() => {
    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 0);
    scene.add(light);
  }, [scene]);

  return null;
};

const Building = () => {
  return (
    <div className='absolute top-16 left-36 z-20'>
      <Canvas>
        <Lighting />
        <Suspense fallback={null}>
          <Model />
        </Suspense> 
      </Canvas>
    </div>
  );
};

export default Building;