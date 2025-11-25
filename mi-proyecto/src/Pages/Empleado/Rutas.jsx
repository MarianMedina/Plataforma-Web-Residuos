import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Paneles.css";
import empleadoData from "../../data/empleado.json";

export default function Rutas() {
  const [rutas] = useState(empleadoData);

  return (
    <div className="panel-container">
      <h2>Rutas Asignadas</h2>
      <p>Estas son las rutas asignadas al empleado.</p>

      {/* Tabla de las rutas */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Hora</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {rutas.map((ruta) => (
            <tr key={ruta.id}>
              <td>{ruta.nombre}</td>
              <td>{ruta.hora}</td>
              <td>{ruta.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mapa */}
      <div className="mapa-container" style={{ marginTop: "20px" }}>
        <iframe
          title="Mapa de Guadalajara"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.360557320263!2d-103.34960978513677!3d20.659698905862787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f09e8c72b3%3A0xdef0b23a1c2b7a5b!2sGuadalajara%2C%20Jalisco!5e0!3m2!1ses-419!2smx!4v1698800000000!5m2!1ses-419!2smx"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Botón volver al panel */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" className="back-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
