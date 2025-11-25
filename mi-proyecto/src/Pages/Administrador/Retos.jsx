import React, { useState } from "react";
import "../../styles/Paneles.css";

export default function Retos() {
  const [retos, setRetos] = useState([]);
  const [nombreReto, setNombreReto] = useState("");

  const agregarReto = () => {
    if (nombreReto) {
      setRetos([...retos, { id: Date.now(), nombre: nombreReto }]);
      setNombreReto("");
    }
  };

  return (
    <div className="panel-container">
      <h2>Retos para Ciudadanos</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Nombre del reto"
          value={nombreReto}
          onChange={(e) => setNombreReto(e.target.value)}
        />
        <button className="search-button" onClick={agregarReto}>Agregar</button>
      </div>

      <ul>
        {retos.map((r) => (
          <li key={r.id}>{r.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
