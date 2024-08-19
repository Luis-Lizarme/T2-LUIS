import './Estilo.css'
import { Fragment } from 'react';

function Menu() {
return (
    <div>
      <header>
        <div className="logo">
          <h1>Mio Turismo</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Dónde vamos</a></li>
            <li><a href="#">Viaja conmigo</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Buscar" />
          <button>Buscar</button>
        </div>
      </header>
    </div>
  );
}

export default Menu;