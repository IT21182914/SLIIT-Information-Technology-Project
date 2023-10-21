import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeComponent = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let width, height;
    let scene, camera, renderer, model;

    const init = () => {
      // Set up dimensions
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;

      // Create a scene
      scene = new THREE.Scene();

      // Create a camera
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor('#000000');
      renderer.setSize(width, height);
      mountRef.current.appendChild(renderer.domElement);

      // Load the 3D model
      const loader = new GLTFLoader();
      const url = 'https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb';
      loader.load(url, (gltf) => {
        model = gltf.scene;
        scene.add(model);
      });

      // Add lighting to the scene
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(-1, 1, 1);
      scene.add(directionalLight);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model
      if (model) {
        model.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    
    init();
    animate();

    // Clean up function
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeComponent;
