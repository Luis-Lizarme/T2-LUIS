import './Estilo.css'
import { Fragment } from 'react';

function Menu() {
return (
    <div>
      <header>
        <div className="logo">
          <h1>Todo Turismo</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Dónde viajar</a></li>
            <li><a href="#">Dónde quedarse</a></li>
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