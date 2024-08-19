import { Fragment } from 'react';
import './Estilo.css';

function Galeria() {
  return (
    <div className="image-container">
      <div>
        <img src="src/componentes/IMAGENES/1.jpg" alt="Lugar 1" />
        <div className="overlay">AREQUIPA</div>
      </div>
      <div>
        <img src="src/componentes/IMAGENES/2.jpg" alt="Lugar 2" />
        <div className="overlay">CUZCO</div>
      </div>
      <div>
        <img src="src/componentes/IMAGENES/3.jpg" alt="Lugar 3" />
        <div className="overlay">AYACUCHO</div>
      </div>
      <div>
        <img src="src/componentes/IMAGENES/4.jpg" alt="Lugar 4" />
        <div className="overlay">MANCORA</div>
      </div>
    </div>
  );
}

export default Galeria;
