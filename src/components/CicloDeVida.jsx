import React from "react";

class Reloj extends React.Component {
  constructor(props) {
    super(props);
  }

  //Se ejecuta cuando el componente desaparece del DOM
  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends React.Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se incializa, sin estar en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    // console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "El estado o las props han cambiado");
    // console.log(prevProps);
    // console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    //Coloca el Reloj en el DOM
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    //Elimina el Reloj en el DOM
    this.setState({
      visible: false,
    });
  };

  render() {
    // console.log(4, "El dibuja o redibuja");
    return (
      <>
        <h2>Ciclo de vida</h2>
        {/* <h4>{this.state.hora}</h4> */}
        {this.state.visible ? <Reloj hora={this.state.hora} /> : null}

        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
