import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Menu.css";

import IconoCampana from "../Imagenes/Iconos/campana.png";
import IconoUsuario from "../Imagenes/Iconos/usuario.png";
import IconoCasa from "../Imagenes/Iconos/Inicio.png";

const MenuCiudadano = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [usuarioOpen, setUsuarioOpen] = useState(false);

  /* Simulacion de la cantidad de notificaciones */
  const notificacionesPendientes = 3;

  return (
    <div className="menu-ciudadano">
      {/* Botón de hamburguesa */}
      <div className="menu-izquierdo">
        <button className="boton-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {menuOpen && (
          <div className="menu-hamburguesa">
            <Link to="/" className="menu-item resaltar">
              <img src={IconoCasa} alt="Inicio" className="icono-item" />
              Inicio
            </Link>
            <Link to="/consulta-rutas" className="menu-item">
              Consulta de rutas
            </Link>
            <Link to="/reportes" className="menu-item">
             Reportes de Incidencias
            </Link>

            <Link to="/directorio" className="menu-item">
              Directorio
            </Link>
            <Link to="/educacion" className="menu-item">
              Educación
            </Link>
            <Link to="/campanas-retos" className="menu-item">
              Campañas y Retos
            </Link>
          </div>
        )}
      </div>

      {/* Iconos derecho */}
      <div className="menu-derecho">
        {/* Campana con badge */}
        <Link to="/notificaciones" className="campana-wrapper">
          <img src={IconoCampana} alt="Notificaciones" className="icono" />
          {notificacionesPendientes > 0 && (
            <span className="badge">{notificacionesPendientes}</span>
          )}
        </Link>

        {/* Menú de usuario */}
        <div className="usuario-wrapper">
          <img
            src={IconoUsuario}
            alt="Usuario"
            className="icono"
            onClick={() => setUsuarioOpen(!usuarioOpen)}
          />

          {usuarioOpen && (
            <div className="menu-usuario">
              <Link className="menu-item resaltar" to="/registro">
                Registrarse / Iniciar sesión
              </Link>

              <hr />

              <Link className="menu-item" to="/perfil">
                Perfil
              </Link>
              <Link className="menu-item" to="/ciudadano/puntos">
                 Mis puntos acumulados
              </Link>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCiudadano;
