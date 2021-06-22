import React from "react";

export class EventosES6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // Estos this es para que cuando se llamen en los botones, el "this" no vaya vacio
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componente de clase (ES6)</h2>
        <h4>
          <button onClick={this.restar}>-</button>___
          {this.state.contador}___
          <button onClick={this.sumar}>+</button>
        </h4>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends React.Component {
  // Ya no se usa el "Constructor", solo se pone state
  state = {
    contador: 0,
  };

  //Ahora se usan las arrow functions
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en componente de clase (ES6)</h2>
        <h4>
          <button onClick={this.restar}>-</button>___
          {this.state.contador}___
          <button onClick={this.sumar}>+</button>
        </h4>
      </div>
    );
  }
}

function Boton(props) {
  return <button onClick={props.funcion}>Botón hecho componente</button>;
}

export class MasSobreEventos extends React.Component {
  handleClick = (e, mensaje) => {
    // console.log(e);
    // console.log(e.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Mensaje pasado mensaje desde un evento")
          }
        >
          Saludar
        </button>
        {/* No funciona agregar eventos a componentes directamente */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Mensaje pasado mensaje desde un evento")
          }
        /> */}
        <Boton
          funcion={(e) =>
            this.handleClick(e, "Mensaje pasado mensaje desde props")
          }
        />
      </div>
    );
  }
}
