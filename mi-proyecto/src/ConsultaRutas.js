import React, { useState } from "react";
import data from "./data/data.json";

function ConsultaRutas() {
  const [colonia, setColonia] = useState(""); // estado para almacenar la colonia
  const [resultado, setResultado] = useState(""); // estado para mostrar el horario

  const handleConsultar = () => {
    // Buscar en el JSON, asegurándose de que exista la propiedad 'colonia'
    const rutaEncontrada = data.find(
      (item) => item.colonia && item.colonia.toLowerCase() === colonia.toLowerCase()
    );

    if (rutaEncontrada) {
      setResultado(
        `Horario de recolección de basura en "${rutaEncontrada.colonia}": ${rutaEncontrada.horario}`
      );
    } else {
      setResultado("Colonia no encontrada. Intenta con otra colonia.(Ej.Felipe Angeles, La Guadalupana, Las Juntas). ");
    }
  };

  return (
    <div>
      <h2>Consulta de Rutas y Horarios</h2>
      <input
        type="text"
        placeholder="Ingresa tu colonia aquí por favor"
        value={colonia}
        onChange={(e) => setColonia(e.target.value)}
      />
      <button onClick={handleConsultar}>Consultar</button>

      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

export default ConsultaRutas;