import React from 'react';
import './Estilo.css';

function Conoce() {
  return (
    <div className='banner2'>
      <div className='banner2-text'>
        <h1>Conoce lugares sorprendentes</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
        </p>
      </div>
      <div className='banner-image'>
        <img src="src/componentes/IMAGENES/AMIGOS.jpg" alt="Amigos viajando" />
      </div>
    </div>
  );
}

export default Conoce;