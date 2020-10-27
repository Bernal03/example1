import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Banner from './Components/Banner';

function App(){
  const temas=["1. Tipos de componentes", 
  "2. Contenedores", 
  "3. Usar mas de un componente", 
  "4. Funciones", 
  "5. Props"]

  return (
    <div className="App">
      <Banner
        texto="Desarrollo de aplicaciones moviles"
        />
        <Header/>
        <Banner
        texto="26/10/2020"
        />
        <Body 
        texto1="Practica 1 - Unidad 2"
        temas={temas}
        />
        
        <Footer
        pie={<p>Copyright &copy; Todos los derechos reservados</p> }
        />
    </div>
  );
}


export default App;
