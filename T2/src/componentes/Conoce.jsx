import React from 'react';
import './Estilo.css';

function Conoce() {
  return (
    <div className='banner2'>
      <div className='banner2-text'>
        <h1>Conoce lugares sorprendentes</h1>
        <p>
        “Ven a descubrir Perú con tus amigos. Desde la majestuosidad de Machu Picchu hasta la vibrante vida nocturna de Lima, cada rincón ofrece una aventura única. Explora la selva amazónica, disfruta de la deliciosa gastronomía y sumérgete en la rica cultura peruana. ¡Una experiencia inolvidable te espera!”
        </p>
      </div>
      <div className='banner-image'>
        <img src="src/componentes/IMAGENES/AMIGOS.jpg" alt="Amigos viajando" />
      </div>
    </div>
  );
}

export default Conoce;