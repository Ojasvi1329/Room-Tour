import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Loader } from "@react-three/drei";
import RealEstateModel from "./RealEstateModel";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const RealEstateScene = ({ modelPaths }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const loadModel = async (index) => {
    setLoading(true);
    const loader = new GLTFLoader();

    try {
      await new Promise((resolve, reject) => {
        loader.load(
          modelPaths[index],
          (gltf) => resolve(gltf),
          (xhr) => setLoadingProgress((xhr.loaded / xhr.total) * 100),
          (error) => reject(error)
        );
      });
    } catch (error) {
      console.error("Error loading model:", error);
    } finally {
      setLoading(false);
      setLoadingProgress(0);
    }
  };

  useEffect(() => {
    loadModel(currentIndex);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modelPaths.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === modelPaths.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically cycle through models every 9 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 15000);
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          {!loading && <RealEstateModel modelPath={modelPaths[currentIndex]} />}
        </Suspense>
        <OrbitControls />
      </Canvas>
      <button onClick={handlePrevious} style={previousButtonStyle}>
        Previous
      </button>
      <button onClick={handleNext} style={nextButtonStyle}>
        Next
      </button>
      {loading && <Loader progress={loadingProgress} />}
    </div>
  );
};

const buttonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#1f3b60",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
  zIndex: 1100, // Ensure buttons are on top
};

const previousButtonStyle = {
  ...buttonStyle,
  left: "20px",
};

const nextButtonStyle = {
  ...buttonStyle,
  right: "20px",
};

export default RealEstateScene;
