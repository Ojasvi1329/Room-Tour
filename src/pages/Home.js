import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  // State to keep track of the current image index
  const [index, setIndex] = useState(0);

  // Images array
  const images = [
    "/images/fullhouse.jpg",
    "/images/hall.jpg",
    "/images/dining.jpg",
    "/images/bedroom.jpg",
  ];

  // Function to handle image change
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
  };

  // Automatically cycle through images every 3 seconds
  useEffect(() => {
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <div className="carousel">
          <img
            src={images[index]}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
