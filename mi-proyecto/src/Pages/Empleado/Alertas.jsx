import React, { useState } from "react";
import "../../styles/Paneles.css";
import reportesData from "../../data/reportes.json";

export default function Alertas() {
  const [alertas, setAlertas] = useState(reportesData);

  // Cambiar estado de activa/inactiva
  const cambiarEstado = (id) => {
    setAlertas(
      alertas.map((a) =>
        a.id === id ? { ...a, activa: !a.activa } : a
      )
    );
  };

  return (
    <div className="panel-container">
      <h2>Alertas de Incidencias</h2>

      <ul>
        {alertas.map((a) => (
          <li key={a.id} style={{ marginBottom: "15px", padding: "10px", backgroundColor: "#f1f1f1", borderRadius: "8px" }}>
            <strong>{a.ciudadano}</strong> reportó en <em>{a.ubicacion}</em>: {a.descripcion} <br />
            Estado: <strong>{a.activa ? "Activa" : "Inactiva"}</strong>
            <button 
              className="back-button" 
              style={{ marginLeft: "10px", padding: "5px 10px" }} 
              onClick={() => cambiarEstado(a.id)}
            >
              Cambiar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}