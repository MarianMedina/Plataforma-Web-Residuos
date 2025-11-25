import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Paneles.css";

export default function PanelAdministrador() {
  return (
    <div className="panel-container">
      <h2>Panel Administrador</h2>
      <p>Bienvenido al panel administrativo para una gestión eficiente y responsable de residuos.</p>

      {/* Enlaces a las secciones del administrador */}
      <div className="admin-links">
        <Link className="back-button" to="/administrador/rutas">
          Gestión de Rutas
        </Link>
        <Link className="back-button" to="/administrador/campañas">
          Campañas
        </Link>
        <Link className="back-button" to="/administrador/retos">
          Retos Ecológicos
        </Link>
      </div>
    </div>
  );
}
