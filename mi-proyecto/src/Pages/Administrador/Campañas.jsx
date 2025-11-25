import React, { useState } from "react";
import "../../styles/Paneles.css";

export default function Campañas() {
  const [campañas, setCampañas] = useState([]);
  const [nombreCampaña, setNombreCampaña] = useState("");

  const agregarCampaña = () => {
    if (nombreCampaña) {
      setCampañas([...campañas, { id: Date.now(), nombre: nombreCampaña }]);
      setNombreCampaña("");
    }
  };

  return (
    <div className="panel-container">
      <h2>Gestión de Campañas</h2>

      <div className="form-group">
        <input
          type="text"
          placeholder="Nombre de la campaña"
          value={nombreCampaña}
          onChange={(e) => setNombreCampaña(e.target.value)}
        />
        <button className="search-button" onClick={agregarCampaña}>Agregar</button>
      </div>

      <ul>
        {campañas.map((c) => (
          <li key={c.id}>{c.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
