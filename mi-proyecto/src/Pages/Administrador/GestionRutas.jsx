import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Paneles.css";
import rutasSimuladas from "../../data/gestion.json";

export default function GestionRutas() {
  const [rutas, setRutas] = useState(rutasSimuladas);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoTipo, setNuevoTipo] = useState("");

  const agregarRuta = () => {
    if (nuevoNombre && nuevoTipo) {
      const nuevaRuta = { id: Date.now(), nombre: nuevoNombre, tipo: nuevoTipo };
      setRutas([...rutas, nuevaRuta]);
      setNuevoNombre("");
      setNuevoTipo("");
    }
  };

  const eliminarRuta = (id) => {
    setRutas(rutas.filter(ruta => ruta.id !== id));
  };

  return (
    <div className="panel-container">
      {/* Título y descripción */}
      <h2>Gestión de Rutas</h2>
      <p>Agrega y administra las rutas de recolección.</p>

      {/* Formulario */}
      <div className="form-group">
        <input
          type="text"
          placeholder="Nombre de la ruta"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <select value={nuevoTipo} onChange={(e) => setNuevoTipo(e.target.value)}>
          <option value="">Selecciona tipo</option>
          <option value="orgánico">Orgánico</option>
          <option value="inorgánico">Inorgánico</option>
        </select>
        <button className="search-button" onClick={agregarRuta}>Agregar Ruta</button>
      </div>

      {/* Tabla de rutas */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rutas.map(ruta => (
            <tr key={ruta.id}>
              <td>{ruta.nombre}</td>
              <td className={ruta.tipo === "orgánico" ? "tipo-org" : "tipo-inorg"}>{ruta.tipo}</td>
              <td>
                <button className="back-button" onClick={() => eliminarRuta(ruta.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mapa */}
      <div className="mapa-container">
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

      {/* Botón para volver al panel */}
      <div>
        <Link to="/" className="back-button">Volver al inicio</Link>
      </div>
    </div>
  );
}