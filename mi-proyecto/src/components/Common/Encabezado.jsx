import React from "react";
import Logo from "../Imagenes/Logotipo.png";
import "../../styles/Encabezado.css";

function Encabezado() {
  return (
    <header className="encabezado">
     <div className="logo-container">
      <img src={Logo} alt="Logo RedEco" className="logo" />
      <div>
        <h1>RedEco</h1>
        <p className="slogan">Gestión Eficiente de Residuos para Comunidades Sustentables</p>
      </div>
    </div>
  </header>
);
}

export default Encabezado;
