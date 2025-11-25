import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Paneles.css";

export default function MenuAdministrador() {
  return (
    <nav className="menu-rol">
      <div className="menu-links">
      <NavLink className="menu-link" to="/administrador">
        Panel Principal
      </NavLink>
      <NavLink className="menu-link" to="/administrador/rutas">
        Gestión de Rutas
      </NavLink>
      <NavLink className="menu-link" to="/administrador/campañas">
        Campañas
      </NavLink>
      <NavLink className="menu-link" to="/administrador/retos">
        Retos
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
