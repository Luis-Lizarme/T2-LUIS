import { Fragment } from 'react';
import Menu from './componentes/Menu'
import Carrusel from './componentes/Carrusel'
import Conoce from './componentes/Conoce';
import Reloj from './componentes/Reloj';
import Galeria  from './componentes/Galeria';


function App(){
  return (
    <>
    <Menu /> 
     
    <Carrusel />
    
    <Conoce />

    <Reloj />
    
    <Galeria />


    </>
  )
}

export default App;