import React, { useState } from "react";

// ------------------------- Version sencilla-------------------------------

// export default function Formularios() {
//   //
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("Vanilla");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   function handleChangeNombre(e) {
//     setNombre(e.target.value);
//   }

//   function handleChangeSabor(e) {
//     setSabor(e.target.value);
//   }

//   function handleChangeLenguaje(e) {
//     setLenguaje(e.target.value);
//   }

//   function handleChangeTerminos(e) {
//     setTerminos(e.target.checked);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert("Formulario enviado");
//   }

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre: </label>
//         <input
//           id="nombre"
//           type="text"
//           name="nombre"
//           defaultValue="Escribe tu nombre"
//           onChange={handleChangeNombre}
//         />
//         <p>Elige tu sabor JS Favorito</p>
//         <input
//           type="radio"
//           name="sabor"
//           id="Vanilla"
//           onChange={handleChangeSabor}
//           value="Vanilla"
//           defaultChecked
//         />
//         <label htmlFor="Vanilla">Vanilla</label>
//         <br />
//         <input
//           type="radio"
//           name="sabor"
//           id="React"
//           onChange={handleChangeSabor}
//           value="React"
//         />
//         <label htmlFor="React">React</label>
//         <br />
//         <input
//           type="radio"
//           name="sabor"
//           id="Angular"
//           onChange={handleChangeSabor}
//           value="Angular"
//         />
//         <label htmlFor="Angular">Angular</label>
//         <br />
//         <p>Elige tu lenguaje de programación favorito</p>
//         <select
//           name="lenguaje"
//           id=""
//           onChange={handleChangeLenguaje}
//           defaultValue="ninguno"
//         >
//           <option value="">----</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="python">Python</option>
//           <option value="otro">Otro</option>
//         </select>
//         <br />
//         <br />
//         <input
//           type="checkbox"
//           name="terminos"
//           id="terminos"
//           onChange={handleChangeTerminos}
//         />
//         <label htmlFor="terminos">Acepto los términos y condiciones</label>
//         <br />
//         <input type="submit" value="Enviar formulario" />
//       </form>
//     </>
//   );
// }

// -------------------------------- Version avanzada -------------------------------------

export default function Formularios() {
  //
  const [form, setForm] = useState({});

  function handleChange(e) {
    setForm({
      // Spread operator para mantener lo que ya está en form
      ...form,
      // Crea una propiedad o la actualiza
      [e.target.name]: e.target.value,
    });
  }

  function handleChecked(e) {
    setForm({
      // Spread operator para mantener lo que ya está en form
      ...form,
      // Crea una propiedad o la actualiza
      [e.target.name]: e.target.checked,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Formulario enviado");
  }

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          defaultValue="Escribe tu nombre"
          onChange={handleChange}
        />
        <p>Elige tu sabor JS Favorito</p>
        <input
          type="radio"
          name="sabor"
          id="Vanilla"
          onChange={handleChange}
          value="Vanilla"
          defaultChecked
        />
        <label htmlFor="Vanilla">Vanilla</label>
        <br />
        <input
          type="radio"
          name="sabor"
          id="React"
          onChange={handleChange}
          value="React"
        />
        <label htmlFor="React">React</label>
        <br />
        <input
          type="radio"
          name="sabor"
          id="Angular"
          onChange={handleChange}
          value="Angular"
        />
        <label htmlFor="Angular">Angular</label>
        <br />
        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name="lenguaje"
          id=""
          onChange={handleChange}
          defaultValue="ninguno"
        >
          <option value="">----</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <option value="otro">Otro</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <label htmlFor="terminos">Acepto los términos y condiciones</label>
        <br />
        <input type="submit" value="Enviar formulario" />
      </form>
    </>
  );
}
