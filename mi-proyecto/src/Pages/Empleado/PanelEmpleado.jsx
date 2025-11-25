import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Paneles.css";

export default function PanelEmpleado() {
  return (
    <div className="panel-container">
      <h2>Panel Empleado</h2>
      <p>Bienvenido al panel de empleados.</p>

    {/* Enlaces a las secciones del Empleado */}
      <div className="empleado-links">
        <Link className="back-button" to="/empleado">
          Panel Principal
        </Link>
        <Link className="back-button" to="/empleado/rutas">
          Rutas Asignadas
        </Link>
        <Link className="back-button" to="/empleado/alertas">
          Alertas
        </Link>
      </div>
    </div>
  );
}
