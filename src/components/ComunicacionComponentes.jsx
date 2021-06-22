import React from "react";

export class Padre extends React.Component {
  state = {
    contador: 0,
  };

  //Método
  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre componentes</h2>
        <p>{this.state.contador}</p>
        <Hijo mensaje="Mensaje para Hijo 1" />
        <Hijo
          AumentarContador={this.incrementarContador}
          mensaje="Mensaje para Hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h4>{props.mensaje}</h4>
      {/* El botón modifica el estado del padre, pero solo si el padre le pasa el metodo "incrementarContador" */}
      <button onClick={props.AumentarContador}>+</button>
    </>
  );
}
