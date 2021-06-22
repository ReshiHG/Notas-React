import React, { useState, useEffect } from "react";

function Reloj(props) {
  return <p>{props.tiempo}</p>;
}

// Con funciones y useState

// export default function RelojHooks() {
//   const [hora, setHora] = useState(new Date().toLocaleTimeString());
//   const [visible, setVisible] = useState(false);
//   let temporizador = null;

//   function Iniciar() {
//     setVisible(true);

//     temporizador = setInterval(() => {
//       setHora(new Date().toLocaleTimeString());
//     }, 1000);
//   }

//   function Detener() {
//     setVisible(false);
//     clearInterval(temporizador);
//   }

//   return (
//     <>
//       <h2>Reloj Hooks</h2>
//       {visible ? <Reloj tiempo={hora} /> : null}
//       <button onClick={Iniciar}>Iniciar reloj</button>
//       <button onClick={Detener}>Detener reloj</button>
//     </>
//   );
// }

//Con funciones, setState y useEffect

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  let temporizador = null;

  useEffect(() => {
    console.log("Reloj Actualización");
    if (visible) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      console.log("Reloj Desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj Hooks</h2>
      {visible ? <Reloj tiempo={hora} /> : null}
      <button onClick={() => setVisible(true)}>Iniciar reloj</button>
      <button onClick={() => setVisible(false)}>Detener reloj</button>
    </>
  );
}
