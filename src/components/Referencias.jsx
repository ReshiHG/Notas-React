// En lugar de usar el querySelector usamos useRef que proporciona React
import React, { createRef, useRef } from "react";

//Nota: createRef ----> Componentes de clase
//      useRef -------> Componentes funcionales

export default function Referencias() {
  //
  let refMenu = useRef(),
    refMenuBtn = useRef();

  //En lugar de usar esta código usaremos las "Refeencias" de React
  //   function handleToggleMenu(e) {
  //     const $menu = document.querySelector("#menu");
  //     if (e.target.textContent === "Menú") {
  //       e.target.textContent = "Cerrar";
  //       $menu.style.display = "block";
  //     } else {
  //       e.target.textContent = "Menú";
  //       $menu.style.display = "none";
  //     }
  //   }

  function handleToggleMenu(e) {
    const $menu = refMenu.current,
      $menuBtn = refMenuBtn.current;

    if ($menuBtn.textContent === "Menú") {
      $menuBtn.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      $menuBtn.textContent = "Menú";
      $menu.style.display = "none";
    }
  }

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <p>
          <a href="">Sección 1</a>
        </p>
        <p>
          <a href="">Sección 2</a>
        </p>
        <p>
          <a href="">Sección 3</a>
        </p>
        <p>
          <a href="">Sección 4</a>
        </p>
        <p>
          <a href="">Sección 5</a>
        </p>
      </nav>
    </>
  );
}
