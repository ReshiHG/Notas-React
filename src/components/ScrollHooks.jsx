import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [ScrollY, setScrollY] = useState(0);

  //ACTUALIZACIÓN con variable----------------------
  //gracias al segundo parámetro [ScrollY]
  useEffect(() => {
    // console.log("Componente cargado");

    function detectarScroll() {
      setScrollY(window.pageYOffset);
    }

    window.addEventListener("scroll", detectarScroll);
    // DESMONTAJE
    // gracias al return como arrow function
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [ScrollY]);

  //MONTAJE---------------------------------
  //gracias al segundo parámetro vacío "[]"
  useEffect(() => {
    // console.log("Fase de montaje");
  }, []);

  //ACTUALIZACIÓN-------------------------
  useEffect(() => {
    // console.log("Fase de actualización");
  });

  return (
    <>
      <h2>Hooks - useEffect y ciclos de vida</h2>
      <p>Desplazamiento en Y: {ScrollY} px</p>
    </>
  );
}
