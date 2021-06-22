import React, { useState } from "react";

export default function ContadorHooks() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  return (
    <>
      <h2>Hooks - useState</h2>
      <p>
        <button onClick={disminuir}>-</button>
        ___{contador}___
        <button onClick={aumentar}>+</button>
      </p>
    </>
  );
}
