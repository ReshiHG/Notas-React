import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventose";
import { Padre } from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloDeVida";

function App() {
  let estaciones = ["primavera", "verano", "otoño", "invierno"];
  let activo = true;

  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Editar <code>src/App.js</code> and save to reload.
            </p>
            <p>{activo ? "Esta activo" : "Esta Inactivo"}</p>
            <ul>
              {estaciones.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>

          <section>
            <ComponenteClase msg="Hola soy un componente desde props" />
            <ComponenteFuncional mensaje="Hola, soy un componente funcional" />
            <hr />
            <Propiedades
              cadena="Texto"
              numero={210}
              boolean={true}
              arreglo={[1, 2, 3]}
              objeto={{ nombre: "Ricardo", edad: 23 }}
              funcion={function (num) {
                return num * num;
              }}
              elementoReact={<i>Italicas</i>}
              componenteReact={
                <ComponenteFuncional mensaje="Componente desde props" />
              }
            />
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <Padre />
            <hr />
            <CicloVida />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
