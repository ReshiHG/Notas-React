import React, { Component } from "react";
import Frameworks from "../helpers/data.json";

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones</h3>
        <ul>
          {this.state.seasons.map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
        <h3>Frameworks</h3>
        <ul>
          {Frameworks.frameworks.map((el) => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
