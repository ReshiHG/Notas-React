import React from "react";

export default class Eventos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

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
        <h2>Eventos en componente de clase</h2>
        <h4>
          <button onClick={this.restar}>-</button>___
          {this.state.contador}___
          <button onClick={this.sumar}>+</button>
        </h4>
      </div>
    );
  }
}
