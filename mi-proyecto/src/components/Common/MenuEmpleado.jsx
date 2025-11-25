import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Paneles.css";

export default function MenuEmpleado() {
  return (
    <nav className="menu-rol">
      <div className="menu-links">
        <NavLink className="menu-link" to="/empleado">
          Panel Principal
        </NavLink>
        <NavLink className="menu-link" to="/empleado/rutas">
          Rutas Asignadas
        </NavLink>
        <NavLink className="menu-link" to="/empleado/alertas">
          Alertas
        </NavLink>
      </div>

      <div className="menu-user">
        <span>Usuario</span>
        <NavLink className="menu-link" to="/inicio-sesion">
          Cerrar Sesión
        </NavLink>
      </div>
    </nav>
  );
}
