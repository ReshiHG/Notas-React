import React from "react";
import propTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades</h2>
      <ul>
        <li>Propiedad por defecto: {props.porDefecto}</li>
        <li>Valores aceptados</li>
        <ul>
          <li>Cadena: {props.cadena}</li>
          <li>Número: {props.numero}</li>
          <li>Boolean: {props.boolean ? "true" : "false"}</li>
          <li>Arreglo: {props.arreglo.join(", ")}</li>
          <li>
            Objetos: Nombre: {props.objeto.nombre} Edad: {props.objeto.edad}
          </li>
          <li>Funciones: {props.arreglo.map(props.funcion).join(", ")}</li>
          <li>Elementos React: {props.elementoReact}</li>
          <li>Componentes React: {props.componenteReact}</li>
        </ul>
      </ul>
    </div>
  );
}

//Se pueden crear propiedades por defecto de la siguiente forma

Propiedades.defaultProps = {
  porDefecto: "Propiedad por defecto",
};

// Usando la libreria "prop-types" podemos validar el tipo de propiedad

Propiedades.propTypes = {
  numero: propTypes.number.isRequired,
};
