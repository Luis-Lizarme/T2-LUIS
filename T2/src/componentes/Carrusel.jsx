import React, { useState, useEffect } from 'react';
import './Estilo.css';

function Carrusel() {
  const images = [
    'src/componentes/IMAGENES/PORTADA.jpg',
    'src/componentes/IMAGENES/BANNER2.jpg', // Replace with your image paths
    'src/componentes/IMAGENES/BANNER3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img src={images[currentIndex]} alt="Carousel" className="banner" />
    </div>
  );
}

export default Carrusel;

