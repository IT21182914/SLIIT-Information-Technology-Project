import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeComponent = () => {
  const mountRef = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    let width, height;
    let scene, camera, renderer, building;
    let clock, rotationSpeed;

    const init = () => {
      // Set up dimensions
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;

      // Create a scene
      scene = new THREE.Scene();

      // Create a camera
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 0, 5);

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor('#000000');
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      //mountRef.current.appendChild(renderer.domElement);

      // Load the building model
      const loader = new GLTFLoader();
      loader.load('ferrari.gltf', (gltf) => {
        building = gltf.scene;
        building.position.set(0, 0, 0);
        building.scale.set(0.5, 0.5, 0.5);
        scene.add(building);
        setIsModelLoaded(true);
      });

      // Add lighting to the scene
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(-1, 1, 1);
      scene.add(directionalLight);

      // Set up rotation animation
      clock = new THREE.Clock();
      rotationSpeed = 0.005;
    };

    const animate = () => {
      if (!isModelLoaded) {
        requestAnimationFrame(animate);
        return;
      }

      requestAnimationFrame(animate);

      // Rotate the building
      const delta = clock.getDelta();
      if (building) {
        building.rotation.y += delta * rotationSpeed;
      }

      renderer.render(scene, camera);
    };

    init();
    animate();

    // Clean up function
    return () => {
      renderer.dispose();
      //mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeComponent;
