import React from "react";

// ------------------ Primera Forma (archivo externo) ------------------------
// Importamos la hoja de estilos para el componente del mismo nombre
import "./Estilos.css";

// ---------------- Tercera forma (modulos de estilos) -----------------------
// La ventaja es que agrega los nombres de estilos aleatoriamente, evitando
// errores con otros estilos de otros componentes
// por ejemplo para la clase error su nombre sería
// "Estilos_error__{5 Carácteres aleatorios}"
import moduleStyles from "./Estilos.module.css";

// ------------------- Cuarta forma (Usando SASS) ----------------------------
// NOTA: debe se instalarse (npm install node-sass)
import "./Estilos.scss";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <>
      <section className="estilos">
        <h2>Estilos CSS en React</h2>
        <h3 className="bg-react">Estilos en hoja CSS externa</h3>
        {/*----------- Segunda forma (Estilos en linea) ---------------------------*/}
        <h3
          className="bg-react"
          style={{ borderRadius: ".35rem", margin: "1rem" }}
        >
          Estilos en linea
        </h3>
        {/* Segunda forma (Estilos en linea con variable) */}
        <h3 className="bg-react" style={myStyles}>
          Estilo en linea 2
        </h3>
        {/* --------------------- Usando Normalize ------------------- */}
        <h3 className="bg-react">
          Agregando Normalize <br /> <code>@import-normalize;</code>{" "}
        </h3>
        {/* -------------------- Usando Module.css ------------------- */}
        <h3 className={moduleStyles.error}>Estilos con módulos</h3>
        <h3 className={moduleStyles.success}>Estilos con módulos</h3>
        {/* ----------------------- Usando SASS ---------------------- */}
        <h3 className="bg-sass">Estilos SASS</h3>
      </section>
    </>
  );
}
