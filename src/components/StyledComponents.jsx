import React from "react";
// css para poner estilos dentro de los estilos
// keyframes para animaciones
// ThemeProvider para agregar temas
// createGlobalStyle para agregar estilo global
import styled,{css, keyframes, ThemeProvider,createGlobalStyle} from "styled-components";

export default function StyledComponents() {
  // Variables de colores
  let mainColor = "#db7093",
      mainAlphaColor80 = "#db709380";
  
  // Función para estilos
  function setTransitionTime(time) {
    return (`${time} ease-in-out`);
  }

  // También permite animaciones
  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1
    }
  `;

  //Objetos para los temas
  const light = {
    color: "#222",
    bgColor: "#DDD"
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222"
  };

  // Global Styles
  const GlobalStyle = createGlobalStyle`
    h2{
      padding: 2rem;
      text-transform: uppercase;
    }
  `;



  // Aqui se agrega un Componente con estilos
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    // Se pueden meter una variable
    background-color: ${mainColor};
    // Se pueden meter una arrow función
    color: ${(props) => props.color || "#000"};
    animation: ${fadeIn} 5s ease-out;

    ${(props) => props.isButton 
      ? css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      ` : null
    }

    &:hover {
      background-color: ${mainAlphaColor80};
      // Se puede llamar a una función
      transition: ${setTransitionTime("0.5s")} ;

    }
  `;

  const Box = styled.div`
      padding: 1rem;
      margin: 1rem;
      color: ${({theme}) => theme.color };
      background-color: ${({theme}) => theme.bgColor };
  `;

  // Componente que herda los estilos de Box y agrega uno más
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;



  return (
    <>  
      {/* Este componente afecta los estilos globales, así que se debe usar con cuidado */}
      <GlobalStyle  />
      <h2>Styled Components</h2>
      {/* Coloco el componente estilizado "MyH3" */}
      <MyH3>H3 con Styled components</MyH3>
      <MyH3 color="#61dafb">Otro h3 con styled components</MyH3>
      <MyH3 isButton={true}>H3 estilizado como botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja clara</Box>
        <BoxRounded>Soy una caja clara</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja oscura</Box>
        <BoxRounded>Soy una caja oscura</BoxRounded>
      </ThemeProvider>
    </>
  );
}
